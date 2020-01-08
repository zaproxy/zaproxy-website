---
title: "How can I add my own payloads to active scan rules?"
type: faq
category: Scanning
weight: 3
---

ZAP doesnt just throw a load of payloads at a target to see what happens :)

The payloads are targetted based on the responses to other payloads so that it hopefully zeros in on specific vulnerabilities.

However there a various options:

1. Try out the [custom payloads](https://github.com/zaproxy/zap-extensions/wiki/HelpAddonsCustompayloadsCustompayloads) add-on which is supported by some of the existing rules 
1. Change the existing rules to improve them - this blog post is a good place to start: [Hacking ZAP: Active Scan Rules](https://zaproxy.blogspot.com/2014/04/hacking-zap-4-active-scan-rules.html) - if you do improve them then please submit pull requests :)
1. Write new rules to do whatever you want - this gives you full control, but could be a bit daunting to start with
1. Tweak the [User defined attacks.js](https://github.com/zaproxy/community-scripts/blob/master/active/User%20defined%20attacks.js) script - this is probably the easiest way to get started
