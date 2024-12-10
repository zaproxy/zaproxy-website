# Monthly Updates Blog Post Tips

## List all PRs
Go to https://github.com/search and enter the following query with the correct month:

```
org:zaproxy type:pr -author:zapbot -author:app/dependabot sort:updated-asc closed:2023-03 is:merged
```

to list all non-automated closed ZAP PRs updated in that month.

## Get add-on CHANGELOG notes

Get the most recent releases using the GitHub API and save the response to a JSON file.

```shell
gh api -H "Accept: application/vnd.github+json"  -H "X-GitHub-Api-Version: 2022-11-28" /repos/zaproxy/zap-extensions/releases?per_page=100 > releases.json
```

Tweak the date in the `generate-release-notes.py` script and run it against the json file.

```shell
./generate-release-notes.py releases.json
```

## List new Contributors

https://github.com/zaproxy/zap-core-help/pulls?q=is%3Apr+credits+is%3Aclosed

## List new Website pages

In the root of the cloned zaproxy-website repo, run the following command:

```bash
git diff --stat --diff-filter=A $(git rev-list -n1 --first-parent --until="1.month.ago" HEAD) | grep -E "(md|html)"
```

## TODO to push back to zapbot..

git push zapbot zapbot-monthly-updates-blog-post:monthly-updates-blog-post 