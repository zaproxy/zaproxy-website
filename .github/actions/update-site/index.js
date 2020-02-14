const path = require('path')
const fs = require('fs')
const core = require('@actions/core')
const exec = require('@actions/exec')
const github = require('@actions/github')
const glob = require('@actions/glob')
const io = require('@actions/io')
const { Octokit } = require("@octokit/rest")

async function git(dir, args, options) {
  return exec.exec('git', args, { ...{ cwd: dir, silent: true }, ...options })
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
  for (const file of files) {
    if (isDirectory(file)) {
      io.rmRF(file)
    } else {
      fs.unlinkSync(file);
    }
  }
}

async function copy(from, to) {
  const globber = await glob.create(from, { implicitDescendants: false })
  const files = await globber.glob()
  for (const file of files) {
    io.cp(file, to, { recursive: true })
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

    const code = await git(websiteDir, ['diff-index', '--quiet', 'HEAD'], { ignoreReturnCode: true })
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

    let pullId
    if (pulls.data.length !== 0) {
      pullId = pulls.data[0].id
    }

    const gitHubBaseUrl = `https://${user}:${authToken}@github.com`
    const title = 'Update site content'
    const body = `From:\n${owner}/${repo}@${github.context.sha}`
    const commitMessage = `${title}\n\n${body}`

    await git(websiteDir, ['config', 'user.name', user])
    await git(websiteDir, ['config', 'user.email', email])
    await git(websiteDir, ['remote', 'set-url', 'origin', `${gitHubBaseUrl}/${user}/${websiteRepoName}`])
    await git(websiteDir, ['checkout', '-b', branch])
    await git(websiteDir, ['add', '.'])
    await git(websiteDir, ['commit', '-sm', commitMessage])
    await git(websiteDir, ['push', '-f', 'origin', branch])

    if (pullId) {
      await octokit.pulls.update({
        owner: owner,
        repo: websiteRepoName,
        pull_number: pullId,
        body: body,
      })
    } else {
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
