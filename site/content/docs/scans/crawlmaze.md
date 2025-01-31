---
title: "ZAP vs Security Crawl Maze"
type: page
EditableContent: true
---
Google Security Crawl Maze is a comprehensive testbed for web security crawlers. 

It is available online at https://security-crawl-maze.app/ and the GitHub repo is https://github.com/google/security-crawl-maze
It does appear to be being actively maintained and has merged a fix that we submitted. 

As long as one of the ZAP spiders finds the relevant page we count that as a pass, but ideally both spiders will find as many of the URLs as possible.

{{< spider-table >}}

  {{< spider-results target= "crawlmaze" section="all" expand="true" >}}

{{< /spider-table >}}

&nbsp;  

#### Configuration

| Config | Details |
| --- | --- |
| Frequency | Daily |
| Scripts | https://github.com/zapbot/zap-mgmt-scripts/blob/master/scans/crawlmaze/ |
| Action | https://github.com/zapbot/zap-mgmt-scripts/actions/workflows/zap-vs-crawlmaze.yml | 

&nbsp;  

#### Settings

The latest [Nightly ZAP Docker image](https://github.com/zaproxy/zaproxy/pkgs/container/zaproxy) is run with the default settings against this app with the following exceptions:

* The traditional Spider "maxDepth" is set to 10 to find the deeper links.
* The number of browsers launched by the Ajax Spider is set to 10 to speed up the crawling.
