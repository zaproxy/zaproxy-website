---
# This page was generated from the add-on.
title: DOM XSS Active Scan Rule
type: userguide
weight: 1
cascade:
  addon:
    id: domxss
    version: 23.0.0
---

# DOM XSS Active Scan Rule


An Active Scan rule for detecting DOM XSS vulnerabilities.


It launches browser windows and sends attack payloads to all of the relevant DOM elements.  

As it launches browser windows it will take significantly longer than other (non browser based) rules.


This version supports Firefox (the default), Chrome, and Edge. They can be run with GUI or headless (default), it can be changed with
the rule `rules.domxss.browserid`, via the Options 'Rule configuration' panel, with values
`firefox`, `firefox-headless`, `chrome`, `chrome-headless`,
`edge`, and `edge-headless`.

### Strengths and Thresholds

The following Attack Strengths are supported, and related directly to the number of attack payloads used for URL fragment and form input field injections (eg: `http://example.com/index.html?foo=bar#injection`):

* LOW: 1 attack payloads
* MEDIUM: 3 attack payloads
* HIGH: 6 attack payloads
* INSANE: 9 attack payloads

The scanner will also attempt URL/query parameter injections which are not impacted by the selected strength.



The rule will only report one DOM XSS vulnerability per node, unless the LOW Alert threshold
is used, in which case it will keep trying all of the specified payloads.

### Exclusions

The rule will block the browser it launches from accessing any URLs that are excluded by:

* Global Exclusions
* Context Exclusions, if invoked with the relevant context


Latest code: [DomXssScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/domxss/src/main/java/org/zaproxy/zap/extension/domxss/DomXssScanRule.java)
