---
title: "Timing Related Scan Rule Changes"
summary: >
  Scan rules related to time based attacks have been split or renamed.
type: post
images:
- https://www.zaproxy.org/blog/2025-07-22-timing-rule-changes/images/zapbot-clock-break.png
addSocialPreview: true
tags:
- blog
- scanrules
date: "2025-07-22"
authors:
- thorin
---

### Time Based Scan Rule Changes

We have recently implemented a number of [requested](https://github.com/zaproxy/zap-extensions/pull/4316) changes with regard to scan rules which perform time based attacks.

These changes were made to provide users with greater flexibility in creating scan policies. The changes are available in the current weekly release and Docker image, but not yet in stable.

Here is a breakdown of what was changed:

* The following Rules and Alerts were renamed to indicate that they're all time based (their IDs have stayed the same):
    * [40019](/docs/alerts/40019/) - SQL Injection - MySQL
    * [40020](/docs/alerts/40020/) - SQL Injection - Hypersonic
    * [40021](/docs/alerts/40021/) - SQL Injection - Oracle&sup1;
    * [40022](/docs/alerts/40022/) - SQL Injection - PostgreSQL
    * [40024](/docs/alerts/40024/) - SQL Injection - SQLite&sup1; (This rule had contained code for union based SQLi attacks however it had been disabled for a long time. If further SQLite attacks are added in the future they will appear associated with rule ID 90038.)
    * [40027](/docs/alerts/40027/) - SQL Injection - MsSQL
* [40033](/docs/alerts/40033/) - NoSQL Injection - MongoDB - Time based attacks were previously split into rule [90039](/docs/alerts/90039/).
* [90020](/docs/alerts/90020/) - Remote OS Command Injection - Time based attacks were split into a separate rule with ID [90037](/docs/alerts/90037/).

#### Alert Tag TEST_TIMING

The rules (and alerts) are now also decorated with the [TEST_TIMING](/alerttags/test_timing/) Alert Tag.

---

&sup1; Although a number of changes have been implemented to address the potential for false positives in the past few years,
this rule has not yet been updated to accommodate those improvements. 
It currently leverages 'expensive' functions versus invoking dedicated sleep methods.
The time based rules may also extend scan time.