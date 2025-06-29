---
title: "Script Security"
type: page
tags: 
- scripts
EditableContent: true
addBreadcrumbs: true
---

ZAP has as very powerful scripting capability, and supports the following scripting languages:
* [JavaScript](/docs/desktop/addons/graalvm-javascript/) - included by default
* [Zest](/docs/desktop/addons/zest/) - included by default
* [BeanShell](/docs/desktop/addons/bean-shell/) - optional
* [Groovy](/docs/desktop/addons/groovy-support/) - optional
* [Kotlin](/docs/desktop/addons/kotlin-support/) - optional
* [Python](/docs/desktop/addons/python-scripting/) - optional
* [Ruby](/docs/desktop/addons/ruby-scripting/) - optional

For more details on ZAP’s security posture see the 
[FAQ: What is ZAP's assurance case?](/faq/what-is-zaps-assurance-case/)

### Script Capabilities
As noted on the [Script Console](/docs/desktop/addons/script-console/) page:

{{< blockquote-alert type="warning">}}
Scripts run with the same permissions as ZAP, so do not run any scripts that you do not trust!
{{< /blockquote-alert >}}

All scripts can call other scripts and any command line tools that are accessible to them based on OS permissions.
Scripts can access any online services unless restricted by firewalls or similar.
Scripts can typically access the Java runtime which gives them the same access to the filestore as ZAP.

The one exception is Zest - this cannot run command line tools except via other scripts and cannot directly access arbitrary JVM features.

### ZAP Scripts
All of the script add-ons define templates in the relevant languages.

Various ZAP add-ons and packages include scripts:
* [Docker images](/docs/docker/about/):
  * [httpsender](https://github.com/zaproxy/zaproxy/tree/main/docker/scripts/scripts/httpsender) scripts used to raise alerts for API issues
* [Community Scripts](/docs/desktop/addons/community-scripts/) (optional)
  * All of the relevant scripts in https://github.com/zaproxy/community-scripts
* [Encoder](/docs/desktop/addons/encode-decode-hash/)
  * Encoder JS [templates](https://github.com/zaproxy/zap-extensions/tree/main/addOns/encoder/src/main/zapHomeFiles/scripts/templates/encode-decode)
* [Fuzzer](/docs/desktop/addons/fuzzer/)
  * Fuzzer [templates](https://github.com/zaproxy/zap-extensions/tree/main/addOns/fuzz/src/main/zapHomeFiles/scripts/templates)
* [OAST](/docs/desktop/addons/oast-support/) (optional)
  * OAST related [scripts](https://github.com/zaproxy/zap-extensions/tree/main/addOns/oast/src/main/zapHomeFiles/scripts)
* [Reports](/docs/desktop/addons/report-generation/)
  * Scripts related to the [high-level-report](https://github.com/zaproxy/zap-extensions/tree/main/addOns/reports/src/main/zapHomeFiles/reports/high-level-report/resources)
* [Selenium](/docs/desktop/addons/selenium/)
  * Selenium [templates](https://github.com/zaproxy/zap-extensions/tree/main/addOns/selenium/src/main/zapHomeFiles/scripts/templates/selenium)
* [Websockets](/docs/desktop/addons/websockets/)
  * Websocket [scripts](https://github.com/zaproxy/zap-extensions/tree/main/addOns/websocket/src/main/zapHomeFiles/scripts/templates)

All scripts included in ZAP add-ons and packages have been reviewed by at least 2 of the Core Team and none of them should allow arbitrary code execution.

### User Defined Scripts
Users can add scripts to ZAP in a variety of ways:

* Command Line
  * It is possible to add and run arbitrary scripts from the command line.
  * Anyone able to start ZAP from the command line is treated as a super user.
* Desktop GUI
  * The desktop GUI has full access to the ZAP scripting framework.
  * Desktop users are treated as super users.
* API
  * It is possible to add and run arbitrary scripts via the API.
  * Anyone with API access is treated as a super user.
  * By default the API is protected by a key, and access to the API from remote machines is disabled.
* Automation Framework plans
  * AF plans can include [inline scripts](/docs/desktop/addons/script-console/automation/#inline-scripts) written in any of the languages supported by ZAP.

### Previous Script Related Security Issues
#### RCE via API token disclosure and API script method "load"
In 2017 a researcher found that by default we leaked the ZAP API key via the “Generate Anti CSRF Test Form”.
They were then able to load and run a script in ZAP via a publicly mounted Windows drive.
ZAP only loaded “local” scripts as a security measure, but we did not take into account that a publicly mounted Windows drive would appear to be a local drive in Java.

The following set of security fixes were implemented in [2.6.0](/docs/desktop/releases/2.6.0/) to address this vulnerability:
* By default requiring API keys on all operations
* By default not reporting permission errors via the API
* Supporting nonces which are tied to specific API calls, and can be time limited
* Allowing API keys and nonces to be supplied via headers

It should be noted that non Zest scripts will still be able to load and run scripts from publicly mounted remote drives.
