/*
process.env.NODE_PATH = "./node_modules/";
require("module").Module._initPaths();
// API Documentation: https://developer.github.com/v3/repos/releases/#upload-a-release-asset
// Octokit Documentation: https://octokit.github.io/rest.js/#octokit-routes-repos-upload-release-asset
// Waiting for https://github.com/actions/upload-release-asset/pull/22
*/
const fs = require('fs');
const core = require('@actions/core');
const { GitHub, context } = require('@actions/github');

async function run() {
  try {
    const { owner, repo } = context.repo;
    const name      = core.getInput('release_name', { required: true });
    const assetPath = core.getInput('asset_path', { required: true });
    const assetName = core.getInput('asset_name', { required: true });
    const contentType = "application/zip";

    const github = new GitHub(process.env.GITHUB_TOKEN);

    const releases = await github.repos.listReleases({
        owner,
        repo
    });

    const release = releases.data.filter(r => r.name === name).pop();
    
    if (!release) { 
        console.error("No matching release");
        core.setFailed("Did not find matching release");
        return;
    }

    const uploadUrl = release.upload_url.split("{")[0];

    core.setOutput('id', release.id);
    core.setOutput('html_url', release.html_url.split("{")[0]);
    core.setOutput('upload_url', uploadUrl);

    console.log("Found release: id=" + release.id + " name=" + release.name);
    const existingAsset = release.assets.filter(a => a.name === assetName).pop();

    if (existingAsset) {
      console.log("Found & removing existing asset: id=" + existingAsset.id);
      await github.repos.deleteReleaseAsset({
        owner,
        repo,
        asset_id: existingAsset.id,
      });
    }

    const contentLength = filePath => fs.statSync(filePath).size;

    console.log("Uploading new assets")

    await github.repos.uploadReleaseAsset({
      url: uploadUrl + "?name=" + assetName,
      headers: { 
        'content-type': contentType, 
        'content-length': contentLength(assetPath) 
      },
      name: assetName,
      label: assetName,  
      file: fs.readFileSync(assetPath)
    });


  } catch (error) {
    console.error(error);
    core.setFailed(error.message);
  }
}

if (require.main === module) {
  run().then(() => {});
}

module.exports = run;
