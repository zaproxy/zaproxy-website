---
title: "ZAP vs Webseclab"
type: page
EditableContent: true
---
Yahoo Webseclab is a set of web security test cases and a toolkit to construct new ones. It can be used for testing security scanners, to replicate or reconstruct issues, or to help with investigations or discussions of particular types of web security bugs.

It is not available online, the GitHub repo is https://github.com/yahoo/webseclab

It does not appear to be being actively maintained and some of the tests no longer appear to work with modern browsers. 

Click on the Sections to see the full set of results.

Some of the tests are false positives and flagged as "Not Vulnerable" in the table. Any relevant rule which triggered an alert is listed.
If an alert is generated for a false positive then the test fails.

{{< webseclab-table >}}

  {{< webseclab-results target= "webseclab" section="reflected">}}

{{< /webseclab-table >}}

&nbsp;  

#### Configuration

| Config | Details |
| --- | --- |
| Frequency | Daily |
| Scripts | https://github.com/zapbot/zap-mgmt-scripts/blob/master/scans/webseclab/ |
| Action | https://github.com/zapbot/zap-mgmt-scripts/actions/workflows/zap-vs-webseclab.yml | 

&nbsp;  

#### Settings

The latest [Live ZAP Docker image](https://hub.docker.com/r/owasp/zap2docker-live/) is run with the default settings against this app with no exceptions.
