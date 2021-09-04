---
title: "Announcing the ZAP Jenkins Plugin"
type: post
tags:
date: "2016-11-22"
authors:
  - jordan
---

Using ZAP during the development process is now easier than ever. We are proud to present the Jenkins plugin, it extends the functionality of
the ZAP security tool into a CI Environment.

{{< img "images/ZAP_CI_SMALLER.png" >}}

##### The process explained

1. A Jenkins CI Build step initializes ZAP
2. Traffic flows (Regression Pack) through ZAP (Web Proxy)
3. ZAP modifies requests to include Vulnerability Tests
4. Target Application/Server sends Response back through ZAP
5. ZAP sends reporting data back to Jenkins
6. Jenkins publishes and archives the report(s)
7. Jenkins creates JIRA tickets for the alerts

The ZAP Jenkins plugin makes use of the readily available and diverse ZAP API, allowing you to use the same session files and scan policy
profiles between ZAP and the Jenkins plugin, so they can be interchangeably loaded.

##### So what can you do?

Automate the site mapping process with a selenium script, have ZAP act as an intercepting proxy to map the structure of your
site and record passive alerts. Fire off an active scan and finish it off by generating a report in one of three available formats (xhtml, xml
or json). These can be sent off to management or you can load the session later and inspect each raised alert at your convenience.  
Providing a seamless workflow and the same functionality as the GUI. You can

- Manage Sessions (Load or Persist)
- Define Context (Name, Include URLs and Exclude URLs)
- Attack Contexts (Spider Scan, AJAX Spider, Active Scan)

You can also:

- Setup Authentication (Form Based or Script Based)
- Run as Pre-Build as part of a Selenium Build
- Generate Reports (.xhtml, .xml, .json)

All while giving you all the benefits of Jenkins to automate the process. Scan between build and deployment all from taking advantage of the
automation server.

{{< youtube uuid="mmHZLSffCUg" >}}

##### Where we go from here...

We plan to extend the authentication method to allow authenticated AJAX
Spider Scans and support HTTP/NTLM Authentication. To further the continuous integration process, we will be adding Build Management tools in
the near future which will allow you to set the thresholds that will determine a builds pass or failure. But we’re not stopping here, we will be
continuously advancing our API to meet the needs of community requests for the Jenkins Plugin.  
We will work with our community, taking advice and feedback to improve and support this plugin in the short and long term. We hope it will become
one of your favorite additions into your development lifecycle.  
We hope to expand this project and open it to community involvement, we welcome you; the community members to help us maintain and improve the
plugin and we thank you for your continued support.  
Documentation: See the [Wiki](https://wiki.jenkins-ci.org/display/JENKINS/zap+plugin) for more details.  
Questions: Ask on our [Google Group](https://groups.google.com/forum/#!forum/zaproxy-jenkins).  
Issue Tracking: Report on the [Jenkins JIRA](https://issues.jenkins-ci.org/issues/?jql=project%20%3D%20JENKINS%20AND%20component%20%3D%20zap-plugin) for the project, please read the [JIRA guidelines](https://wiki.jenkins-ci.org/display/JENKINS/How+to+report+an+issue) before reporting
an issue.
