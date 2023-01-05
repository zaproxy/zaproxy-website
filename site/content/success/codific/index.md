---
title: "Codific"
type: success
successtags:
- automation
- internal
date: "2022-01-05"
company:
  link: https://www.codific.com
  logo: /img/success/codific.png
  twitter: codific
---

Codific is a developer of secure collaboration tools in Ed Tech, MedTech and HR Tech. Our team of software engineers leverages privacy by design and security by design principles to maximize the security of the applications and the privacy of its users.

Codific leverages a security assurance programme for all product development lifecycle. There are many Application Security programmes out there with [OWASP SAMM](https://codific.com/software-security-with-sammy/) being by far the simplest of them. SAMM consists of 15 security practices with Secure Deployment and Security Testing amongst them. Both security practices in their higher maturity levels require the use of a dynamic application security testing (DAST) integrated in the CI/CD pipeline. After a time-boxed research into a number of DAST tools we have selected ZAP as our weapon of choice.

Overall setup
We run ZAP against a production system copy (obviously, populated with test data). You can also leverage the Dev or Acc environments. ZAP runs as a scheduled job in a headless mode within a docker container. It scans the production system copy for vulnerabilities. ZAP is configured to fail the CI/CD pipeline if the scan detects vulnerabilities above a certain threshold. Our CI/CD platform is integrated with Slack and failed pipelines will notify the product team. ZAP also produces a nice report with all findings, hence the product teams can view and correct the situation.

ZAP Baseline Scan (nightly)
ZAP offers several ways of automating and different ways to scan. The currently recommended way is through [ZAP Automation Framework](https://www.zaproxy.org/docs/desktop/addons/automation-framework/). We use a “baseline” scan on a nightly schedule. This scan is perfect for running daily because it is fast and passive. Passive means that it does not perform any attacks, such as trying out input fields for SQL Injection. Nonetheless ZAP is highly efficient in finding an [extensive set of vulnerabilities](https://www.zaproxy.org/docs/alerts/) using this type of scan.

ZAP Full Scan (weekly)
Alongside the “baseline scan”, which we run daily, we also use a “full scan” that is aggressive and slow. This is why we run it on a weekly basis. The CI/CD integration is similar but ZAP is searching for more types of vulnerabilities. Note that the Full Scan is not read-only nor idempotent when it comes to your data. Hence, we take extra care to ensure that the scans can’t mess up the data.

In our [hands-on tutorial](https://codific.com/integrate-owasp-zap-and-gitlab/) you can find a more detailed description regarding the configuration settings for both scan types.