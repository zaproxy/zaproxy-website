---
title: "ZAP vs Security Crawl Maze"
type: page
EditableContent: true
---
Google Security Crawl Maze is a comprehensive testbed for web security crawlers. 

It is available online at https://security-crawl-maze.app/ and the GitHub repo is https://github.com/google/security-crawl-maze
It does appear to be being actively maintained and has merged a fix that we submitted. 

As long as one of the ZAP spiders finds the relevant page we count that as a pass, but ideally both spiders will find as many of the URLs as possible.

Changes which find any of the missed URLs for either spider are eligible for a bounty via the [StackHawk ZAP Fund](https://www.stackhawk.com/zap-fund/) 
see Issue [#7152](https://github.com/zaproxy/zaproxy/issues/7152) for more details.

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

The latest [Live ZAP Docker image](https://hub.docker.com/r/owasp/zap2docker-live/) is run with the default settings against this app with the following exceptions:

* The traditional Spider "maxDepth" is set to 10 to find the deeper links.
* The number of browsers launched by the Ajax Spider is set to 10 to speed up the crawling.
