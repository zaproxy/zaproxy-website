#!/usr/bin/env python3

import calendar
import json
import os
import re
import sys
from datetime import date, datetime
from textwrap import dedent
from urllib.parse import urlencode

import requests

today = date.today()
year = today.year
month = today.month - 1 if today.day < 10 else today.month

if month == 0:
    month = 12
    year = year - 1

month_name = calendar.month_name[month]


def strip_html_tags(text: str):
    text = re.sub(r"<[^<]+?>", "", text)
    return re.sub(r"\s+|\\n|&nbsp;", " ", text).strip()


def get_github_pulse(repo: str):
    # Get the GitHub Pulse summary for the repo
    response = requests.get(
        f"https://github.com/zaproxy/{repo}/pulse_diffstat_summary?period=monthly"
    )
    return strip_html_tags(response.text)


def get_human_pr_count_summary():
    query = {
        "q": f"org:zaproxy type:pr -author:zapbot -author:app/dependabot sort:updated-asc closed:{year}-{month:0>2} is:merged",
        "type": "pullrequests",
    }
    query_string = urlencode(query)
    response = requests.get(f"https://github.com/search/count?{query_string}")
    count = strip_html_tags(response.text)
    return f"A total of [{count} human PRs were merged](https://github.com/search?{query_string}) on the ZAP repos."


def get_release_notes():
    # Get zap-extensions releases using GitHub API
    headers = {"X-GitHub-Api-Version": "2022-11-28"}
    if os.environ.get("GITHUB_TOKEN"):
        headers["Authorization"] = f"Bearer {os.environ['GITHUB_TOKEN']}"
    response = requests.get(
        "https://api.github.com/repos/zaproxy/zap-extensions/releases?per_page=100"
    )
    releases_json = response.json()
    release_notes = ""
    seen_addons = set()

    releases = sorted(releases_json, key=lambda k: k["name"].partition(" version ")[0])
    for release in releases:
        created_date = datetime.fromisoformat(release["created_at"][:-1])
        if created_date >= datetime(year, month, 1):
            name_parts = release["name"].partition(" version ")
            name = name_parts[0]
            version = name_parts[2]

            if name not in seen_addons:
                release_notes += f"##### {name}\n"
                seen_addons.add(name)

            release_notes += f"**v{version}**  \n"
            release_notes += release["body"].replace("### ", "") + "\n\n"

    return f"In {month_name} {year}, we released updated versions of {len(seen_addons)} add-ons:\n\n{release_notes.strip()}"


def get_blog_post_text():
    return f"""\
---
title: "ZAP Updates - {month_name} {year}"
summary: >
  TODO
images:
- https://www.zaproxy.org/blog/{today.strftime('%Y-%m-%d-zap-updates-%B-%Y').lower()}/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "{today.strftime('%Y-%m-%d')}"
authors:
- TODO
---

## Highlights
TODO

## Ongoing Work
TODO

## New Contributors
A very warm welcome to the people who started to contribute to ZAP this month!

TODO: Add from https://github.com/zaproxy/zap-core-help/pulls?q=is%3Apr+credits+is%3Aclosed

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
{get_github_pulse('zaproxy')}

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
{get_github_pulse('zap-extensions')}

{get_human_pr_count_summary()}

## Released Add-ons - Full Changelog
{get_release_notes()}
"""


print(get_blog_post_text())
