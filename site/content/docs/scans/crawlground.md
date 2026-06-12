---
title: "ZAP vs Crawlground"
type: page
EditableContent: true
---
Crawlground is a web app designed for testing web crawlers. It hosts a fixed set of test pages, each containing a single control (button, link, form, JavaScript event, etc.). Each test has a hidden marker URL that gets scored only when the control is successfully executed.

The source code is available at https://github.com/zaproxy/crawlground

{{< spider-table >}}

  {{< spider-results target="crawlground" section="all" expand="true" >}}

{{< /spider-table >}}

&nbsp;  

#### Configuration

| Config | Details |
| --- | --- |
| Frequency | Daily |
| Scripts | https://github.com/zapbot/zap-mgmt-scripts/blob/master/scans/crawlground/ |
| Action | https://github.com/zapbot/zap-mgmt-scripts/actions/workflows/zap-vs-crawlground.yml |

&nbsp;  

#### Settings

The latest [Nightly ZAP Docker image](https://github.com/zaproxy/zaproxy/pkgs/container/zaproxy) is run with the default settings against this app.
