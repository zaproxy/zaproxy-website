---
title: "ZAPping the OWASP Top 10 (2021)"
description: "This document gives an overview of the automatic and manual components provided by OWASP Zed Attack Proxy (ZAP) that are recommended for testing each of the OWASP Top Ten Project 2021 risks."
images:
- https://www.zaproxy.org/img/docs/guides/OWASP-Top-10.png
tags: 
- top10
- guide
type: page
date: "2021-12-01"
addSocialPreview: true
aliases:
  - /docs/guides/zapping-the-top-10/
---

This document gives an overview of the automatic and manual components provided by OWASP Zed Attack Proxy (ZAP) that are recommended for testing each of the OWASP Top Ten Project 2021 risks.

For the previous Top Ten see [ZAPping the OWASP Top 10 (2017)](/docs/guides/zapping-the-top-10-2017)

Note that the [OWASP Top Ten Project](https://owasp.org/www-project-top-ten/) risks cover a wide range of underlying vulnerabilities, some of which are not really possible to test for in a completely automated way. 
If a completely automated tool claims to protect you against the full OWASP Top Ten then you can be sure they are being ‘economical with the truth’!

The component links take you to the relevant places in an online version of the ZAP User Guide from which you can learn more. 

| | | |
|--|--|--|
| {{< heading level="5" heading="Common Components" >}}   |  | The 'common components' can be used for pretty much everything, so can be used to help detect all of the Top 10 |
|   | Manual | [Manipulator-in-the-middle proxy](/docs/desktop/start/features/intercept/)   |
|   | Manual | [Manual request](/docs/desktop/ui/dialogs/man_req/) / resend   |
|   | Manual | [Scripts](/docs/desktop/addons/script-console/) |
|   | Manual | [Community Scripts](/docs/desktop/addons/community-scripts/) |
|   | Manual | [Search](/docs/desktop/ui/tabs/search/) 
| [{{< heading level="5" heading="A1 Broken Access Control" >}}](https://owasp.org/Top10/A01_2021-Broken_Access_Control/) | | |
|   | Automated | Scan Rules tagged with: [OWASP_2021_A01](/alerttags/owasp_2021_a01/)  |
|   | Automated | [Access Control Testing*](/docs/desktop/addons/access-control-testing/) |
|   | Manual | [Port Scanner*](/docs/desktop/addons/port-scan/)   |
|   | Manual | [Wappalyzer - Technology detection*](/docs/desktop/addons/technology-detection/) |
| [{{< heading level="5" heading="A2 Cryptographic Failures" >}}](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  | | |
|   | Automated | Scan Rules tagged with: [OWASP_2021_A02](/alerttags/owasp_2021_a02/)  |
| [{{< heading level="5" heading="A3 Injection" >}}](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2021/Top_10-2021_A3-Injection) | | |
|   | Automated | Scan Rules tagged with: [OWASP_2021_A03](/alerttags/owasp_2021_a03/)  |
|   | Manual | [Fuzzer](/docs/desktop/addons/fuzzer/), combined with the [FuzzDb*](/docs/desktop/addons/fuzzdb-files/) and [SVN Digger*](/docs/desktop/addons/svn-digger-files/) files |
|   | Manual | [Eval Villain](/docs/desktop/addons/eval-villain/)  |
| [{{< heading level="5" heading="A4 Insecure Design" >}}](https://owasp.org/Top10/A04_2021-Insecure_Design/) | | |
|   | Automated | Scan Rules tagged with: [OWASP_2021_A04](/alerttags/owasp_2021_a04/)  |
| [{{< heading level="5" heading="A5 Security Misconfiguration" >}}](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2021/Top_10-2021_A5-Security_Misconfiguration)  |  | |
|   | Automated | Scan Rules tagged with: [OWASP_2021_A05](/alerttags/owasp_2021_a05/)  |
|   | Manual | [Spider](/docs/desktop/start/features/spider/)  |
|   | Manual | [Ajax Spider](/docs/desktop/addons/ajax-spider/)   |
|   | Manual | [Session comparison](/docs/desktop/ui/tlmenu/report/#compare-with-another-session)  |
|   | Manual | [Access Control Testing*](/docs/desktop/addons/access-control-testing/) |
| [{{< heading level="5" heading="A6 Vulnerable and Outdated Components" >}}](https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/)  |  | |
|   | Automated | Scan Rules tagged with: [OWASP_2021_A06](/alerttags/owasp_2021_a06/)  |
|   | Manual | [Wappalyzer - Technology detection*](/docs/desktop/addons/technology-detection/) |
| [{{< heading level="5" heading="A7 Identification and Authentication Failure" >}}](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/) |  | |
|   | Manual | [HTTP Sessions](/docs/desktop/start/features/httpsessions/) |
|   | Manual | [Spider](/docs/desktop/start/features/spider/)  |
|   | Manual | [Forced Browse](/docs/desktop/addons/forced-browse/)  |
|   | Manual | [Token Generator*](/docs/desktop/addons/token-generator/)   |
|   | Automated | [Access Control Testing*](/docs/desktop/addons/access-control-testing/) |
| [{{< heading level="5" heading="A8 Software and Data Integrity Failures" >}}](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/) |  | |
|   | Automated | Scan Rules tagged with: [OWASP_2021_A08](/alerttags/owasp_2021_a08/)  |
| [{{< heading level="5" heading="A9 Security Logging and Monitoring Failures" >}}](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  |  | |
|   | Automated / Manual | The Spider(s), Active Scanner, Fuzzer, and Access Control addon can all be used to generate traffic and "attacks" which are potential sources/causes for logging and alerting.   |
| [{{< heading level="5" heading="A10 Server-Side Request Forgery" >}}](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)  |  | |
|   | Automated | [OAST Support](/docs/desktop/addons/oast-support/) |
|   |  | |

&#42; The stared add-ons (and Beta and Alpha scan rules) are not included by default in the full ZAP release but can be downloaded from the ZAP Marketplace via the ‘Manage add-ons’ button on the ZAP main toolbar.

![ZAP Toolbar - Marketplace Button](/img/zap-screenshot-browse-addons.png)
