---
title: "ZAP vs Wavsep"
type: page
EditableContent: true
---
WAVSEP is a vulnerable web application designed to help assessing the features, quality and accuracy of web application vulnerability scanners.

It is the most comprehensive OSS DAST specific test suite that we know of.

This version of WAVSEP is now maintained by the ZAP Team: https://github.com/zaproxy/wavsep

Click on the Sections to see the full set of results, which also give the local URL and the scan rule which should find the vulnerability.

> [!WARNING]
> We are still in the process of configuring and checking this scan, so you should not rely on the results just yet.

{{< scan-table >}}

  {{< scan-total target= "wavsep">}}

  {{< scan-results target= "wavsep" section="dom-xss-get-exp" nolinks=true >}}
  
  {{< scan-results target= "wavsep" section="lfi-get-200-err" nolinks=true >}}
  {{< scan-results target= "wavsep" section="lfi-get-200-id" nolinks=true >}}
  {{< scan-results target= "wavsep" section="lfi-get-200-valid" nolinks=true >}}
  {{< scan-results target= "wavsep" section="lfi-get-302-redir" nolinks=true >}}
  {{< scan-results target= "wavsep" section="lfi-get-400-err" nolinks=true >}}
  {{< scan-results target= "wavsep" section="lfi-get-500-err" nolinks=true >}}
  {{< scan-results target= "wavsep" section="lfi-get-fp" nolinks=true >}}
  {{< scan-results target= "wavsep" section="lfi-post-200-err" nolinks=true >}}
  {{< scan-results target= "wavsep" section="lfi-post-200-id" nolinks=true >}}
  {{< scan-results target= "wavsep" section="lfi-post-200-valid" nolinks=true >}}
  {{< scan-results target= "wavsep" section="lfi-post-302-redir" nolinks=true >}}
  {{< scan-results target= "wavsep" section="lfi-post-404-err" nolinks=true >}}
  {{< scan-results target= "wavsep" section="lfi-post-500-err" nolinks=true >}}

  {{< scan-results target= "wavsep" section="rfi-get-200-err" nolinks=true >}}
  {{< scan-results target= "wavsep" section="rfi-get-200-id" nolinks=true >}}
  {{< scan-results target= "wavsep" section="rfi-get-200-valid" nolinks=true >}}
  {{< scan-results target= "wavsep" section="rfi-get-302-redir" nolinks=true >}}
  {{< scan-results target= "wavsep" section="rfi-get-404-err" nolinks=true >}}
  {{< scan-results target= "wavsep" section="rfi-get-500-err" nolinks=true >}}
  {{< scan-results target= "wavsep" section="rfi-get-fp" nolinks=true >}}
  {{< scan-results target= "wavsep" section="rfi-post-200-err" nolinks=true >}}
  {{< scan-results target= "wavsep" section="rfi-post-200-id" nolinks=true >}}
  {{< scan-results target= "wavsep" section="rfi-post-200-valid" nolinks=true >}}
  {{< scan-results target= "wavsep" section="rfi-post-302-redir" nolinks=true >}}
  {{< scan-results target= "wavsep" section="rfi-post-400-err" nolinks=true >}}
  {{< scan-results target= "wavsep" section="rfi-post-402-err" nolinks=true >}}
  
  {{< scan-results target= "wavsep" section="rxss-cookie-exp" nolinks=true >}}
  {{< scan-results target= "wavsep" section="rxss-get" nolinks=true >}}
  {{< scan-results target= "wavsep" section="rxss-get-exp" nolinks=true >}}
  {{< scan-results target= "wavsep" section="rxss-post" nolinks=true >}}
  {{< scan-results target= "wavsep" section="rxss-post-exp" nolinks=true >}}
  {{< scan-results target= "wavsep" section="rxss-fps" nolinks=true >}}

  {{< scan-results target= "wavsep" section="sqli-get-200-err" nolinks=true >}}
  {{< scan-results target= "wavsep" section="sqli-get-200-err-exp" nolinks=true >}}
  {{< scan-results target= "wavsep" section="sqli-get-200-id" nolinks=true >}}
  {{< scan-results target= "wavsep" section="sqli-get-200-valid" nolinks=true >}}
  {{< scan-results target= "wavsep" section="sqli-get-500-err" nolinks=true >}}
  {{< scan-results target= "wavsep" section="sqli-post-200-err" nolinks=true >}}
  {{< scan-results target= "wavsep" section="sqli-post-200-err-exp" nolinks=true >}}
  {{< scan-results target= "wavsep" section="sqli-post-200-id" nolinks=true >}}
  {{< scan-results target= "wavsep" section="sqli-post-200-valid" nolinks=true >}}
  {{< scan-results target= "wavsep" section="sqli-post-500-err" nolinks=true >}}
  {{< scan-results target= "wavsep" section="sqli-get-fp" nolinks=true >}}

  {{< scan-results target= "wavsep" section="redir-get-200-valid" nolinks=true >}}
  {{< scan-results target= "wavsep" section="redir-get-302" nolinks=true >}}
  {{< scan-results target= "wavsep" section="redir-get-fp" nolinks=true >}}
  {{< scan-results target= "wavsep" section="redir-post-200-valid" nolinks=true >}}
  {{< scan-results target= "wavsep" section="redir-post-302" nolinks=true >}}

{{< /scan-table >}}

&nbsp;  

#### Configuration

| Config | Details |
| --- | --- |
| Frequency | Manual |
| Scripts | https://github.com/zapbot/zap-mgmt-scripts/blob/master/scans/wavsep |
| Action | https://github.com/zapbot/zap-mgmt-scripts/actions/workflows/zap-vs-wavsep.yml | 

&nbsp;  

#### Settings

All of the relevant rules were run at HIGH strength, with the exception of Path Traversal which is run at insane.
However because we are excluding the `Windows` technology, the [Path Traversal](/docs/alerts/6/) rule actually makes the same number of requests that it would do at High with no technology excluded.