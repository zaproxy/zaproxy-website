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
