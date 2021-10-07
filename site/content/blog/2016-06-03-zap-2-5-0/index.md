---
title: "ZAP 2.5.0"
type: post
tags:
- blog
- release
date: "2016-06-03"
authors:
    - simon
---


ZAP 2.5.0 is [now available](/download/#main).  
  
This release contains a large number of enhancements and fixes which are detailed in the [release notes](/docs/desktop/releases/2.5.0/).  
  

###  API changes

There have been some API changes which are not backwards compatible, and the reason for the version change to 2.5. These are detailed in the
release notes.  
The API has also been extended to cover even more of the functionality in ZAP, including full access to the statistics.  
  
The Java API is no longer packaged with this release.  
You can download the latest version from: <https://github.com/zaproxy/zap-api-java/releases>  
  
It will also be available on Maven Central:  

  * GroupId: ‘org.zaproxy’
  * ArtifactId: ‘zap-clientapi’
  * Version: ‘1.0.0’

Note that this may not be available immediately, depending on how long the publishing process takes.  
  

###  Daemon obeys Mode

ZAP now obeys the mode setting when running as a headless daemon.  
  

###  Spider subtree option

The spider now has an option to constrain it to a specific subtree. This allows you to explore one part of an application without having to
cover all of it.  
  

###  Statistics

ZAP now maintains a wide range of statistics which can be invaluable for understanding what is really happening when interacting with large
applications.  
These are available via the API and can also be sent to a Statsd server.  
For more information see the [Stats help page](/docs/desktop/start/features/stats/).  
  

###  Docker

The stable and weekly docker images now allow you to run the ZAP Desktop UI in a browser.  
This means that you can run ZAP without having to install Java.  
For more details see the [Webswing](/docs/docker/webswing) page. 
  
The Docker images also include the ‘ZAP Baseline’ script.  
This runs the ZAP spider against the specified target for (by default) 1 minute and then waits for the passive scanning to complete before
reporting the results.  
This means that the script does not perform any actual 'attacks' and will run for a relatively short period of time (a few minutes at most).  
This script is intended to be ideal to run in a CI/CD environment, even against production sites.  
For more details see the [Baseline Scan](/docs/docker/baseline-scan/) page.
  
Thank you to everyone who contributed to this release.  
To keep up to date with ZAP related news follow [@zaproxy](https://twitter.com/zaproxy) on twitter.

