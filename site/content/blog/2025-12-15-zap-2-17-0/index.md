---
title: "ZAP 2.17.0"
summary: "ZAP 2.17.0 has just been [released](/docs/desktop/releases/2.17.0/). The release includes core performance improvements and will significantly reduce the number of “duplicate” alerts reported."
images:
- https://www.zaproxy.org/blog/2025-12-15-zap-2-17-0/images/blog-2-17-0.png
type: post
tags:
- blog
- release
date: "2025-12-15"
authors:
- simon
---
ZAP 2.17.0 has just been [released](/docs/desktop/releases/2.17.0/)!

This latest version of the Zed Attack Proxy (ZAP) continues our commitment to stability, usability, and quality for both new and experienced users of the world’s most popular open source web application security scanner.

The release includes core performance improvements and will significantly reduce the number of "duplicate" alerts reported.

![ZAPbot with 2.17.0 banner](images/blog-2-17-0.png)

This release was made possible thanks to [Checkmarx](https://checkmarx.com/) 
who employ 3 of the [Core Team](/docs/team/) to work fulltime on ZAP.

### Insights
ZAP maintains a wide range of [statistics](/docs/internal-statistics/) which 
reveal what is going on "under the covers".

Some of these statistics can reveal significant problems, but until now it has not been clear which are
the most important ones.

ZAP now exposes these key findings as [Insights](/docs/desktop/addons/insights/).
Insights tell you more about your applications, about the effectiveness of a scan, and can even stop a scan early if significant problems are identified.

Insights are available in all of the official ZAP [reports](/docs/desktop/addons/report-generation/templates/), just make sure you include the new "insights" section.

They are also shown in a new desktop "Insights" tab.

### Alert De-duplication

Changes have been made in order to reduce the number of alerts which ZAP may raise that are duplicates or highly similar.

Alerts raised by the passive scanner will now use the Sites Tree to identify requests that are equivalent.
This will significantly reduce the number of alerts raised, while not reducing the overall effectiveness of the scan.

See the [Alert De-duplication blog](/blog/2025-09-30-alert-de-duplication/) for further details.

### Systemic Alerts
Alerts that are typically site-wide will now be flagged as being "Systemic" in both the desktop GUI and in reports.

Systemic alerts are often related to headers, which are typically managed in a relatively small number of places.
Reporting 1000s of instances of a missing or incorrect header doesn't really help, so we now just report a handful of examples.

All such alerts will have the new [SYSTEMIC](/alerttags/systemic/) tag.
 
This can also significantly reduce the number of "duplicate" alerts reported.

### Improved Disk and Memory Space Error Handling
ZAP will now detect disk and memory space issues and attempt to handle them more gracefully.

Any problems encountered will be reported via Insights.

### Automation Disk Space Reduction
Active Scan Temporary HTTP Messages are no longer persisted by default when ZAP is run headless.
This can significantly reduce the amount of disk space needed.

The option is also available in the desktop but is turned off by default, so that the user can inspect them.
 
### Release Notes

See the [release notes](/docs/desktop/releases/2.17.0/) for dependency updates, other enhancements, and fixes.  
  
Thank you to everyone who contributed to this release.
