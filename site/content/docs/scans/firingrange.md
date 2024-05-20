---
title: "ZAP vs Firing Range"
type: page
EditableContent: true
---
Google Firing Range is a test bed for automated web application security scanners. 

It is available online at https://public-firing-range.appspot.com/ and the GitHub repo is https://github.com/google/firing-range

It does not appear to be being actively maintained and some of the tests no longer appear to work with modern browsers. 

Click on the Sections to see the full set of results, which also link to the online test page and the scan rule which should find the vulnerability.

Changes which find any of the missed vulnerabilities are eligible for a bounty: 
see Issue [#7122](https://github.com/zaproxy/zaproxy/issues/7122) for more details.


{{< scan-table >}}

  {{< scan-results target= "firingrange" section="escape">}}

  {{< scan-results target= "firingrange" section="mixedcontent">}}

  {{< scan-results target= "firingrange" section="reflected">}}

  {{< scan-results target= "firingrange" section="remoteinclude">}}

  {{< scan-results target= "firingrange" section="reverseclickjacking">}}

  {{< scan-results target= "firingrange" section="leakedcookie">}}

  {{< scan-results target= "firingrange" section="clickjacking">}}

{{< /scan-table >}}

&nbsp;  

#### Configuration

| Config | Details |
| --- | --- |
| Frequency | Daily |
| Scripts | https://github.com/zapbot/zap-mgmt-scripts/blob/master/scans/firingrange/ |
| Action | https://github.com/zapbot/zap-mgmt-scripts/actions/workflows/zap-vs-firingrange.yml | 

&nbsp;  

#### Settings

The latest [Nightly ZAP Docker image](https://github.com/zaproxy/zaproxy/pkgs/container/zaproxy) is run with the default settings against this app with the following exceptions:

* The [XSS](/docs/alerts/40012/) rule is set to use LOW threshold in order to detect 2 cases which are not strictly vulnerable.
