---
title: "ZAP vs Firing Range"
type: page
EditableContent: true
---
Google Firing Range is a test bed for automated web application security scanners. 

It is available online at https://public-firing-range.appspot.com/ and the GitHub repo is https://github.com/google/firing-range

It does not appear to be being actively maintained and some of the tests no longer appear to work with modern browsers. 

Click on the Sections to see the full set of results, which also link to the online test page and the scan rule which should find the vulnerability.

Changes which find any of the missed vulnerabilities are eligible for a bounty via the [StackHawk ZAP Fund](https://www.stackhawk.com/zap-fund/). 

{{< scan-table >}}

  {{< scan-results target= "firingrange" section="escape">}}

  {{< scan-results target= "firingrange" section="mixedcontent">}}

  {{< scan-results target= "firingrange" section="reflected">}}

  {{< scan-results target= "firingrange" section="remoteinclude">}}

  {{< scan-results target= "firingrange" section="reverseclickjacking">}}

{{< /scan-table >}}
