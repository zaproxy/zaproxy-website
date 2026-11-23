---
title: "ZAPping the OWASP Top 10 (2025)"
description: "This document gives an overview of the automatic and manual components provided by Zed Attack Proxy (ZAP) that are recommended for testing each of the OWASP Top Ten Project 2025 risks."
images:
- https://www.zaproxy.org/img/docs/guides/OWASP-Top-10.png
tags: 
- top10
- guide
type: page
date: "2026-11-23"
addSocialPreview: true
aliases:
  - /docs/guides/zapping-the-top-10/
---

This document gives an overview of the automatic and manual components provided by Zed Attack Proxy (ZAP) that are recommended for testing each of the OWASP Top Ten Project 2025 risks.

For the previous Top Tens see [ZAPping the OWASP Top 10 (2021)](/docs/guides/zapping-the-top-10-2021/) and [ZAPping the OWASP Top 10 (2017)](/docs/guides/zapping-the-top-10-2017/)

Note that the [OWASP Top Ten Project](https://owasp.org/www-project-top-ten/) risks cover a wide range of underlying vulnerabilities, some of which are not really possible to test for in a completely automated way. 
If a completely automated tool claims to protect you against the full OWASP Top Ten then you can be sure they are being ‘economical with the truth’!

The component links take you to the relevant places in an online version of the ZAP User Guide from which you can learn more. 

### What Has Changed Since 2021

* Server-Side Request Forgery (SSRF) is no longer a separate category, it is now part of A01 Broken Access Control.
* Security Misconfiguration has moved up from A05 to A02.
* Vulnerable and Outdated Components has been broadened into A03 Software Supply Chain Failures.
* Identification and Authentication Failures has been renamed A07 Authentication Failures.
* Security Logging and Monitoring Failures has been renamed A09 Security Logging and Alerting Failures.
* A10 Mishandling of Exceptional Conditions is a new category.

All of the ZAP scan rules are tagged with the 2025 categories they relate to, so you can use the tag links below to see exactly which rules cover each risk.

| | | |
|--|--|--|
| {{< heading level="5" heading="Common Components" >}}   |  | The 'common components' can be used for pretty much everything, so can be used to help detect all of the Top 10 |
|   | Manual | [Manipulator-in-the-middle proxy](/docs/desktop/start/features/intercept/)   |
|   | Manual | [Manual request](/docs/desktop/addons/requester/dialogs/) / resend   |
|   | Manual | [Fuzzer](/docs/desktop/addons/fuzzer/) |
|   | Manual | [Scripts](/docs/desktop/addons/script-console/) |
|   | Manual | [Community Scripts*](/docs/desktop/addons/community-scripts/) |
|   | Manual | [Search](/docs/desktop/ui/tabs/search/) |
|   | Manual | [Encode / Decode / Hash](/docs/desktop/addons/encode-decode-hash/) |
|   | Manual | [Diff](/docs/desktop/addons/diff/) |
|   | Automated / Manual | [OWASP PTK*](/docs/desktop/addons/owasp-ptk/) - in-browser DAST, IAST, SAST and SCA |
| {{< heading level="5" heading="Exploring Your App" >}}   |  | ZAP can only test what it knows about, so exploring your app thoroughly is essential for all of the Top 10 |
|   | Automated | [Client Spider](/docs/desktop/addons/client-side-integration/spider/) - the recommended option for modern web apps |
|   | Automated | [Spider](/docs/desktop/addons/spider/)  |
|   | Automated | [Ajax Spider](/docs/desktop/addons/ajax-spider/)   |
|   | Automated | API definitions: [OpenAPI](/docs/desktop/addons/openapi-support/), [GraphQL](/docs/desktop/addons/graphql-support/), [SOAP](/docs/desktop/addons/soap-support/), and [Postman](/docs/desktop/addons/postman-support/) |
|   | Manual | [WebSockets](/docs/desktop/addons/websockets/) and [Server-Sent Events*](/docs/desktop/addons/server-sent-events/) |
| {{< heading level="5" heading="Automating and Verifying" >}}   |  | These help you test for all of the Top 10 consistently, and confirm that issues have been fixed |
|   | Automated | [Automation Framework](/docs/desktop/addons/automation-framework/) |
|   | Automated | [Scan Policies](/docs/desktop/addons/scan-policies/) - tuned for developers, QA, pentesters, and APIs |
|   | Automated | [Alert Filters](/docs/desktop/addons/alert-filters/) |
|   | Automated | [Insights](/docs/desktop/addons/insights/) |
|   | Automated | [Retest](/docs/desktop/addons/retest/) - to check that issues have been fixed |
| [{{< heading level="5" heading="A01 Broken Access Control" >}}](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/) | | |
|   | Automated | Scan Rules tagged with: [OWASP_2025_A01](/alerttags/owasp_2025_a01/)  |
|   | Automated | [Access Control Testing*](/docs/desktop/addons/access-control-testing/) |
|   | Automated | [OAST Support](/docs/desktop/addons/oast-support/) - for detecting SSRF |
|   | Manual | [Forced Browse](/docs/desktop/addons/forced-browse/), combined with the [Directory List v1.0](/docs/desktop/addons/directory-list-v1.0/) and [Directory List v2.3*](/docs/desktop/addons/directory-list-v2.3/) files |
|   | Manual | [Parameter Digger*](/docs/desktop/addons/parameter-digger/) - for finding hidden parameters |
|   | Manual | [Authentication](/docs/authentication/) - configure ZAP to authenticate as different users so that you can compare what each of them can access |
|   | Manual | [Port Scanner*](/docs/desktop/addons/port-scan/)   |
|   | Manual | [Wappalyzer - Technology detection*](/docs/desktop/addons/technology-detection/) |
| [{{< heading level="5" heading="A02 Security Misconfiguration" >}}](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  |  | |
|   | Automated | Scan Rules tagged with: [OWASP_2025_A02](/alerttags/owasp_2025_a02/)  |
|   | Manual | [Forced Browse](/docs/desktop/addons/forced-browse/), combined with the [Directory List v1.0](/docs/desktop/addons/directory-list-v1.0/) and [Directory List v2.3*](/docs/desktop/addons/directory-list-v2.3/) files |
|   | Manual | [HTTPS Info*](/docs/desktop/addons/https-info/)  |
|   | Manual | [Wappalyzer - Technology detection*](/docs/desktop/addons/technology-detection/) |
|   | Manual | [Session comparison](/docs/desktop/ui/tlmenu/report/#compare-with-another-session)  |
|   | Manual | [Access Control Testing*](/docs/desktop/addons/access-control-testing/) |
| [{{< heading level="5" heading="A03 Software Supply Chain Failures" >}}](https://owasp.org/Top10/2025/A03_2025-Software_Supply_Chain_Failures/)  |  | |
|   | Automated | Scan Rules tagged with: [OWASP_2025_A03](/alerttags/owasp_2025_a03/)  |
|   | Automated | [Retire.js](/docs/desktop/addons/retire.js/) |
|   | Automated | [OWASP PTK*](/docs/desktop/addons/owasp-ptk/) - SCA |
|   | Manual | [Client Side Integration](/docs/desktop/addons/client-side-integration/) - shows all of the scripts loaded by the browser, including those from third parties |
|   | Manual | [Wappalyzer - Technology detection*](/docs/desktop/addons/technology-detection/) |
| [{{< heading level="5" heading="A04 Cryptographic Failures" >}}](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)  | | |
|   | Automated | Scan Rules tagged with: [OWASP_2025_A04](/alerttags/owasp_2025_a04/)  |
|   | Automated | [Client Side Integration Passive Scan Rules](/docs/desktop/addons/client-side-integration/pscan/) - for sensitive information in browser storage |
|   | Manual | [HTTPS Info*](/docs/desktop/addons/https-info/)  |
|   | Manual | [Token Generator*](/docs/desktop/addons/token-generator/) - for analysing the randomness of tokens  |
| [{{< heading level="5" heading="A05 Injection" >}}](https://owasp.org/Top10/2025/A05_2025-Injection/) | | |
|   | Automated | Scan Rules tagged with: [OWASP_2025_A05](/alerttags/owasp_2025_a05/)  |
|   | Automated | [DOM XSS Active Scan Rule](/docs/desktop/addons/dom-xss-active-scan-rule/)  |
|   | Automated | [Advanced SQLInjection Scanner*](/docs/desktop/addons/advanced-sqlinjection-scanner/)  |
|   | Automated | [Custom Payloads*](/docs/desktop/addons/custom-payloads/)  |
|   | Automated / Manual | [OWASP PTK*](/docs/desktop/addons/owasp-ptk/) - IAST taint tracking  |
|   | Manual | [Fuzzer](/docs/desktop/addons/fuzzer/), combined with the [FuzzDb*](/docs/desktop/addons/fuzzdb-files/) and [SVN Digger*](/docs/desktop/addons/svn-digger-files/) files |
|   | Manual | [Fuzzer](/docs/desktop/addons/fuzzer/), combined with the [FuzzAI*](/docs/desktop/addons/fuzzai-files/) files - for prompt injection in LLM based apps |
|   | Manual | [GraphQL](/docs/desktop/addons/graphql-support/) and [gRPC*](/docs/desktop/addons/grpc-support/) Support - for injecting into API requests |
|   | Manual | [Eval Villain*](/docs/desktop/addons/eval-villain/)  |
|   | Manual | [Foxhound*](/docs/desktop/addons/foxhound/) - for DOM XSS taint tracking  |
| [{{< heading level="5" heading="A06 Insecure Design" >}}](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/) | | |
|   | Automated | Scan Rules tagged with: [OWASP_2025_A06](/alerttags/owasp_2025_a06/)  |
|   | Automated | [Sequence Scanner](/docs/desktop/addons/sequence-scanner/) - for testing multi-step flows |
|   | Manual | [Manual request](/docs/desktop/addons/requester/dialogs/) / resend and [Scripts](/docs/desktop/addons/script-console/) - for testing business logic |
| [{{< heading level="5" heading="A07 Authentication Failures" >}}](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/) |  | |
|   | Automated | Scan Rules tagged with: [OWASP_2025_A07](/alerttags/owasp_2025_a07/)  |
|   | Automated | [Access Control Testing*](/docs/desktop/addons/access-control-testing/) |
|   | Manual | [Authentication](/docs/authentication/) - the best place to start if you need ZAP to authenticate to your app |
|   | Manual | [Authentication Helper](/docs/desktop/addons/authentication-helper/) |
|   | Manual | [HTTP Sessions](/docs/desktop/start/features/httpsessions/) |
|   | Manual | [Forced Browse](/docs/desktop/addons/forced-browse/)  |
|   | Manual | [Token Generator*](/docs/desktop/addons/token-generator/)   |
|   | Manual | [SAML Support*](/docs/desktop/addons/saml-support/)   |
|   | Manual | [OWASP PTK*](/docs/desktop/addons/owasp-ptk/) - JWT Inspector |
| [{{< heading level="5" heading="A08 Software or Data Integrity Failures" >}}](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/) |  | |
|   | Automated | Scan Rules tagged with: [OWASP_2025_A08](/alerttags/owasp_2025_a08/)  |
|   | Manual | [Client Side Integration](/docs/desktop/addons/client-side-integration/) - shows all of the scripts loaded by the browser, including those from third parties |
|   | Manual | [ViewState*](/docs/desktop/addons/viewstate/) - for decoding and editing ASP.NET ViewState |
| [{{< heading level="5" heading="A09 Security Logging and Alerting Failures" >}}](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)  |  | |
|   | Automated / Manual | The Spiders, Active Scanner, Fuzzer, and Access Control add-on can all be used to generate traffic and "attacks" which are potential sources/causes for logging and alerting.   |
|   | Automated | [Automation Framework](/docs/desktop/addons/automation-framework/) - for generating the same attacks repeatably |
|   | Manual | [Replacer](/docs/desktop/addons/replacer/) - for adding a header to all ZAP requests so that you can check they appear in your logs |
|   | Manual | [Report Generation](/docs/desktop/addons/report-generation/) - for correlating ZAP findings with your logs and alerts |
| [{{< heading level="5" heading="A10 Mishandling of Exceptional Conditions" >}}](https://owasp.org/Top10/2025/A10_2025-Mishandling_of_Exceptional_Conditions/)  |  | |
|   | Automated | Scan Rules tagged with: [OWASP_2025_A10](/alerttags/owasp_2025_a10/)  |
|   | Automated | [Insights](/docs/desktop/addons/insights/) - reports high percentages of 4xx and 5xx responses |
|   | Automated | [Custom Payloads*](/docs/desktop/addons/custom-payloads/)  |
|   | Manual | [Fuzzer](/docs/desktop/addons/fuzzer/), combined with the [FuzzDb*](/docs/desktop/addons/fuzzdb-files/) files, to send unexpected and malformed input |
|   | Manual | [Manual request](/docs/desktop/addons/requester/dialogs/) / resend - for sending malformed requests |
|   |  | |

&#42; The starred add-ons (and Beta and Alpha scan rules) are not included by default in the full ZAP release but can be downloaded from the ZAP Marketplace via the ‘Manage add-ons’ button on the ZAP main toolbar.

![ZAP Toolbar - Marketplace Button](/img/zap-screenshot-browse-addons.png)
