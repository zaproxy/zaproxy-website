---
title: "BackupDrill"
type: success
successtags:
- automation
- internal
date: "2026-10-29"
company:
  link: https://backupdrill.com/
  logo: /img/success/backupdrill.png
---

[BackupDrill](https://backupdrill.com/) backs up Supabase databases to the customer's own storage bucket and runs restore drills to check that the backups actually restore.
We run the ZAP baseline scan against our public website once a week in GitHub Actions, using the official ZAP baseline action.
The baseline scan only crawls the site and checks the responses, so we point it at the live site, and alerts don't fail the job.
Instead the job posts a short table of the remaining alerts to the run summary and keeps the full HTML, JSON and Markdown reports as build artifacts.
A small rules file marks the alerts we checked and found to be false positives for our site, such as SQL examples in our tutorials being reported as source code disclosure, so the weekly table shows the alerts that still need attention.
