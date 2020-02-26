const path = require('path')
const fs = require('fs')
const core = require('@actions/core')
const exec = require('@actions/exec')
const github = require('@actions/github')
const glob = require('@actions/glob')
const io = require('@actions/io')
const { Octokit } = require("@octokit/rest")

async function git(dir, args, options) {
  return exec.exec('git', args, { ...{ cwd: dir }, ...options })
}

function getRequiredInput(name) {
  return core.getInput(name, { required: true })
}

function isDirectory(file) {
  return fs.lstatSync(file).isDirectory()
}

async function deleteSiteContents(dir) {
  const contents = [`${dir}/*`, `${dir}/docs/*`]
  const ignore = ['.git', 'CNAME', 'docs/', 'docs/api/'].map(p => `!${dir}/${p}`)
  const globber = await glob.create(contents.concat(ignore).join('\n'), { implicitDescendants: false })
  const files = await globber.glob()
  core.info(`Deleting ${files.length} old files from ${dir}`)
  for (const file of files) {
    if (isDirectory(file)) {
      core.debug(`Removing directory ${file}`)
      await io.rmRF(file)
    } else {
      core.debug(`Removing file ${file}`)
      fs.unlinkSync(file);
    }
  }
}

async function copy(from, to) {
  const globber = await glob.create(from, { implicitDescendants: false })
  const files = await globber.glob()
  core.info(`Copying ${files.length} files from ${from} to ${to}`)
  for (const file of files) {
    core.debug(`Copying ${file} to ${to}`)
    await io.cp(file, to, { recursive: true })
  }
}

async function run() {
  try {
    const owner = github.context.repo.owner
    const repo = github.context.repo.repo

    const sourceDir = path.resolve(process.env.GITHUB_WORKSPACE, repo)
    const websiteRepoName = getRequiredInput('repo')
    const websiteDir = path.resolve(process.env.GITHUB_WORKSPACE, websiteRepoName)

    await deleteSiteContents(websiteDir)
    await copy(`${sourceDir}/dist/*`, websiteDir)

    core.info('Checking for changes...')
    await git(websiteDir, ['add', '.'])
    const code = await git(websiteDir, ['diff-index', '--cached', '--quiet', 'HEAD', '--'], { ignoreReturnCode: true })
    core.info(`Result: ${code}`)
    if (code === 0) {
      return
    }

    const user = getRequiredInput('user')
    const email = getRequiredInput('email')
    const authToken = process.env.AUTH_TOKEN
    const branch = 'update-site-content'

    const pullRequestParams = {
      owner: owner,
      repo: websiteRepoName,
      base: getRequiredInput('branch'),
      head: `${user}:${branch}`
    }

    const octokit = new Octokit({ auth: authToken })

    const pulls = await octokit.pulls.list({
      ...pullRequestParams,
      state: 'open'
    })

    let pullNumber
    if (pulls.data.length !== 0) {
      pullNumber = pulls.data[0].number
      core.info(`Found existing pull request: #${pullNumber}`)
    }

    const gitHubBaseUrl = 'https://github.com'
    const title = 'Update site content'
    const body = `From:\n${owner}/${repo}@${github.context.sha}`
    const commitMessage = `${title}\n\n${body}`

    core.info('Setting user configs...')
    await git(websiteDir, ['config', '--local', 'user.name', user])
    await git(websiteDir, ['config', '--local', 'user.email', email])
    const authHeader = `Authorization: Basic ${Buffer.from(`${user}:${authToken}`).toString('base64')}`
    await git(websiteDir, ['config', '--local', `http.${gitHubBaseUrl}/.extraheader`, authHeader], { silent: true })
    core.info('Changing remote...')
    await git(websiteDir, ['remote', 'set-url', 'origin', `${gitHubBaseUrl}/${user}/${websiteRepoName}`])
    core.info('Checking out branch...')
    await git(websiteDir, ['checkout', '-b', branch])
    core.info('Committing...')
    await git(websiteDir, ['commit', '-sm', commitMessage])
    core.info('Pushing...')
    await git(websiteDir, ['push', '-f', 'origin', branch])

    if (pullNumber) {
      core.info('Updating pull request...')
      await octokit.pulls.update({
        owner: owner,
        repo: websiteRepoName,
        pull_number: pullNumber,
        body: body,
      })
    } else {
      core.info('Creating pull request...')
      await octokit.pulls.create({
        ...pullRequestParams,
        title: title,
        body: body,
      })
    }

  }
  catch (error) {
    core.setFailed(error.message)
  }

}

run()
