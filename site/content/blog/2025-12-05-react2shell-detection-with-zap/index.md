---
title: "React2Shell Detection with ZAP"
summary: >
  React2Shell is the latest big "named" vulnerability - heres how you can detect it with ZAP.
type: post
images:
- https://www.zaproxy.org/blog/2025-12-05-react2shell-detection-with-zap/images/react2shell.png
tags:
- blog
- react2shell
date: "2025-12-05"
authors:
- simon
---

[React2Shell](https://react2shell.com/), also known as [CVE-2025-55182](https://nvd.nist.gov/vuln/detail/CVE-2025-55182) / [CVE-2025-66478](https://nvd.nist.gov/vuln/detail/CVE-2025-66478) is a vulnerability in 
React Server Components which will allow remote attackers to execute arbitrary code.

That's serious!

There are now 2 ways that you can detect this vulnerability in ZAP:

* [Retire.js](/docs/desktop/addons/retire.js/) add-on, which detects it passively
* [Active Scan Rules](/docs/desktop/addons/active-scan-rules/) which contain a brand new [Remote Code Execution (React2Shell)](/docs/desktop/addons/active-scan-rules/#id-40048) rule

The new [Remote Code Execution (React2Shell)](/docs/desktop/addons/active-scan-rules/#id-40048) rule
will detect the vulnerability in Next.js apps and is based on the great work 
[by Searchlight Cyber](https://slcyber.io/research-center/high-fidelity-detection-mechanism-for-rsc-next-js-rce-cve-2025-55182-cve-2025-66478/).

As you may know, we usually publish new rules at the "alpha" level and then promote them to "beta" and "release"
based on feedback.

In this case we have decided to promote it straight to "release" - its a critical vulnerability, 
the rule only makes one request per host, and it appears to be a very reliable check.

Your feedback, as always, is much appreciated.