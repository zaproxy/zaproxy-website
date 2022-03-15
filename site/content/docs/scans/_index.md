---
title: "ZAP Scans"
type: page
layout: links
links:
  - name: 'Google Firing Range'
    link: firingrange
    desc: a test bed for automated web application security scanners (unmaintained)
  - name: 'Google Security Crawl Maze'
    link: crawlmaze
    desc: a comprehensive testbed for web security crawlers (maintained)
EditableContent: true
cascade:
  addBreadcrumbs: true

---
We are in the process of automating ZAP to run regularly against a variety of test applications and will publish the results here as and when they are in a suitable state.

Our aim is to make ZAP as effective as possible against real world apps.
Test apps are useful tools but we have found that some apps test for issues that are:

* No longer valid (for example where modern browsers block those attacks)
* Extremely unlikely in real world apps
* Cannot realistically be found by automated DAST scanners

Having said that, any of the tests that ZAP currently fails on are a good candidate for fixing.
If you are interested in enhancing ZAP to find these issues then see [Contribute: Coding: Scan Rules](/docs/contribute/coding/#scan-rules)