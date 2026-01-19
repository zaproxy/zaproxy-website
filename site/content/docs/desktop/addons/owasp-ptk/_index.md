---
# This page was generated from the add-on.
title: OWASP PTK
type: userguide
weight: 1
cascade:
  addon:
    id: ptk
    version: 0.2.0
---

# OWASP PTK

This add-on adds the [OWASP Penetration Testing Kit (PTK)](https://pentestkit.co.uk/) extension to Firefox, Chrome, and Edge when launched from ZAP.  
OWASP PTK is a browser-based application security tool that turns your browser into a comprehensive security testing platform.


For more details see the [OWASP PTK homepage](https://pentestkit.co.uk/).

## OWASP PTK Features

OWASP PTK provides:

* **DAST** - Dynamic Application Security Testing at runtime. Identify SQL injection, command injection, reflected/stored XSS
* **IAST** - Interactive Application Security Testing instruments your app at runtime - right in the browser - tracking taint flows and code execution
* **SAST** - Static Code Analysis for inline and external scripts flags unsafe patterns like `eval()`, `innerHTML` / `outerHTML` injection
* **SCA** - Find outdated or vulnerable packages
* **Request Builder** - Tamper any requests and/or run DAST attacks against a particular request
* **JWT Inspector** - Analyze, craft, and tamper with JSON Web Tokens
* **Dashboard** - One-click visibility into tech stacks, WAFs, security headers, crawled links, and authentication flows
* **Cookie Editor** - Add, edit, remove cookies or create rules to block and protect them
* **Automation** - Add the PTK to browser automation systems like Selenium to get security insight while running tests
* **Recording** - Macro and traffic recording with HAR file output


You can enable and disable OWASP PTK and other browser extensions via the Selenium Options page.
