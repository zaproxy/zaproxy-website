---
# This page was generated from the add-on.
title: DOM XSS Active Scan Rule
type: userguide
weight: 1
cascade:
  addon:
    id: domxss
    version: 10.0.0
---

# DOM XSS Active Scan Rule

An Active Scan rule for detecting DOM XSS vulnerabilities.

It launches browser windows and sends attack payloads to all of the relevant DOM elements.  
As it launches browser windows it will take significantly longer than other (non browser based) rules.

This version only supports Firefox. It can be run with GUI or headless (default), it can be changed with
the rule `rules.domxss.browserid`, via the Options 'Rule configuration' panel, with values
`firefox` and `firefox-headless`, respectively.  
Future versions may support other browsers.

The following Attack Strengths are supported, and related directly to the number of attack payloads used
for URL fragment injections (eg: http://example.com/index.html?foo=bar#injection):

* LOW: 3 attack payloads
* MEDIUM: 5 attack payloads
* HIGH: 7 attack payloads
* INSANE: 9 attack payloads

The scanner will also attempt URL/query parameter injections which are not impacted by the selected strength.


The rule will only report one DOM XSS vulnerability per node, unless the LOW Alert threshold
is used, in which case it will keep trying all of the specified payloads.

Latest code: [TestDomXSS.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/domxss/src/main/java/org/zaproxy/zap/extension/domxss/TestDomXSS.java)
