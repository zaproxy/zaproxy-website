---
title: "ZAP 2.11.0"
type: post
tags:
- blog
- release
date: "2021-10-07"
authors:
    - simon
---

ZAP 2.11.0 (also known as the OWASP 20th anniversary release) is [available now](/download/#main).  

Major changes include:

### Alert Tags

Alerts can now be tagged with arbitrary keys or key=value pairs - this can be done via the desktop GUI and the API.

All of the active and passive scan rules have been updated to include tags for the OWASP Top 10 2021 and 2017.
These tags are also shown on the [Alert Details pages](/docs/alerts/).

### Automation Framework

The Automation Framework is a new way to automate ZAP and is expected to become the default option for most automation use cases.

While the framework is expected to be used from the command line you can use the desktop GUI to generate and test automation plans.

For more details see the [Automation Framework](/docs/automate/automation-framework/) page.

### Report Generation

The new [Report Generation](/docs/desktop/addons/report-generation/) add-on allows you to generate much more flexible reports with access to much more data. 
You can access the new reports via the "Generate Report..." toolbar button and Report menu item, as well as via the API and Automation Framework.

The previous reporting add-ons have been removed from the marketplace as they provide less functionality and are no longer maintained.

New report templates (including some winners of the [Report competition](/blog/2021-03-12-report-competition/)) include:

 * Risk and Confidence HTML - the new default report
 * Modern HTML Report with themes and options
 * High Level Report Sample
 * Traditional HTML Report with requests and responses

### OAST Support

The new [OAST Support](/docs/desktop/addons/oast-support/) add-on allows you to find and exploit out-of-band vulnerabilities.

This add-on is alpha at the time of the 2.11.0 release but is expected to be updated soon, so check the help pages for the latest features.

### Retest

The new [Retest](/docs/desktop/addons/retest/) add-on allows you to retest for presence/absence of previously generated alerts
which means you to retest issues very quickly.

This add-on is alpha at the time of the 2.11.0 release but is expected to be updated soon, so check the help pages for the latest features.

### Docker

The Docker stable and bare images will now be updated monthly, typically around the start of the month.

 * The updates will include any updated add-ons and any changes to the packaged scans. 
 * No core changes will be included in these updates.
 * The images will be tagged by date in case you wish to stay on a specific version.
 * The packaged scans are being migrated to use the Automation Framework - this migration will continue over the life of 2.11.0.

### Statistics

A significant number of statistics have been added to the core, and are being added to add-ons. In part this is driven by the Automation Framework which can make direct use of statistics for sanity checks.

See the release notes for the new core statistics or the [ZAP Internal Statistics](/docs/internal-statistics/) page for the full list.

There are of course a large number of other enhancements and fixes which are detailed in the [release notes](/docs/desktop/releases/2.11.0/).  
  
Thank you to everyone who contributed to this release.
