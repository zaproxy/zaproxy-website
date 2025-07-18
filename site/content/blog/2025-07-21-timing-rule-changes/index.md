---
title: "Timing Related Scan Rule Changes"
summary: >
  Scan rules related to timing attacks have been split ore renamed.
images:
- https://www.zaproxy.org/blog/2025-07-21-timing-rule-changes/something.png
type: post
tags:
- blog
- browser
date: "2025-07-21"
authors:
- thorin
---

# Time Based Scan Rule Changes

We have recently implemented a number of [requested](https://github.com/zaproxy/zap-extensions/pull/4316) changes with regard to scan rules which perform time based attacks.

![ZAPbot with Edge browser icon](images/blog-edge.png)

These changes were made for two reasons:
1. It provides users with greater control in creating scan policies.
2. The Time Based rules are, under some circumstances, potentially more false positive prone.

Here is a breakdown of what was changed:

* The following Rules and Alerts were renamed to indicate that they're all Time Based (their IDs have stayed the same):
    * 40019 - SQL Injection - MySQL
    * 40020 - SQL Injection - Hypersonic
    * 40021 - SQL Injection - Oracle
    * 40022 - SQL Injection - PostgreSQL
    * 40024 - SQL Injection - SQLite (This rule had contained code for union based SQLi attacks however it had been disabled for a long time. If further SQLite attacks are added in the future they will appear associated with rule ID 90038.)
    * 40027 - SQL Injection - MsSQL
* 40033 - NoSQL Injection  MongoDB - Timing attacks were previously split into rule 90039.
* 90020 - Remote OS Command Injection - Time based attacks and Alerts were split into a separate rule with ID 90037.

# New Passive Scan Rule - ZAP is Out of Date

A new passive scan rule has been introduced which will Alert users when their version of ZAP is out-of-date. It's implementation is fairly simple:
An [Alert](/docs/alerts/10116/) will be added for each host which is passively scanned. The Risk associated with the Alert will be as follows:
For full (semantic versioned) releases:
* If two or more major versions behind: High
* If one major version behind: Medium
* If minor version behind: Low
For weekly (date versioned) releases:
* If three or more years behind: High
* If two years behind: Medium
* If one year behind: Low

This will help CI/CD users to know if they've fallen behind.
