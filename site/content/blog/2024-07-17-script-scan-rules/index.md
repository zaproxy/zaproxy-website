---
title: "ZAP Scripts are now Full Scan Rules!"
summary: "ZAP scripts can now do everything that scan rules can."
images:
- https://www.zaproxy.org/blog/2024-07-17-script-scan-rules/images/cover.jpg
type: post
tags:
  - blog
  - scanrules
  - scripts
date: "2024-07-17"
authors:
  - akshath
---

ZAP active and passive scripts are now first-class scan rules! 🎉

ZAP scripts may now optionally be exposed as scan rules, allowing you to include them in your scan policies.

Existing scripts are not affected by this change.

## How to Expose a Script as a Scan Rule

Any active or passive script that implements the `getMetadata` function will be exposed as a scan rule to ZAP.

```js
const ScanRuleMetadata = Java.type("org.zaproxy.addon.commonlib.scanrules.ScanRuleMetadata");

function getMetadata() {
	return ScanRuleMetadata.fromYaml(`
id: 12345
name: Passive Vulnerability Title
description: Full description
solution: The solution
references:
  - https://example.org/reference-1
  - https://example.org/reference-2
risk: INFO  # info, low, medium, high
confidence: LOW  # false_positive, low, medium, high, user_confirmed
cweId: 0
wascId: 0
alertTags:
  name1: value1
  name2: value2
otherInfo: Any other info
status: alpha
`);
}
```

Specifying the metadata in this manner also means that you don't have to set all these details when raising an alert in the script.
The alert raised by each script is automatically populated with the details from the metadata.
However, you can still override metadata for particular alerts if you want.
For example,

```js
function scan(helper, msg, src) {
  // ... 
  foundKeys = ["my-secret-key", "my-other-secret-key"]
  helper
    .newAlert()
    .setEvidence(foundKeys[0])
    .setOtherInfo(`Other instances: ${foundKeys.slice(1).toString()}`)
    .setMessage(msg)
    .raise();
}
```

Each script that is exposed as a scan rule must have a unique ID, otherwise it will not be loaded.
The IDs of the scan rules and scripts available via add-ons from the [ZAP Marketplace](/addons/) are maintained in the [`scanners.md` file](https://github.com/zaproxy/zaproxy/blob/main/docs/scanners.md) in the core ZAP repository.

While the code examples in this blog post are written in JS, ZAP scripts written in any supported programming language (e.g. Python, Groovy, Kotlin, etc.) may be exposed as scan rules.

## Community Scripts

All the passive scripts and most of the active scripts in the [community-scripts](https://github.com/zaproxy/community-scripts) repository (and add-on) have been updated to implement the `getMetadata()` function.

The [alerts page](/docs/alerts/) on this website (which is auto-generated from scan rules) now contains information about the alerts raised by the community scripts too.

It should be noted that all these scripts will now need to use the GraalVM engine (provided by the `graaljs` add-on), as template literals are not supported by Nashorn.

If you have any scripts written for Nashorn, we recommend you switch to using the GraalVM engine.
You should be able to switch your engine for the majority of your scripts without having to modify them.

If you do not want to use GraalVM, you can still expose your scripts as scan rules by constructing the [ScanRuleMetadata](https://github.com/zaproxy/zap-extensions/blob/839d5c7df7432c1f4748275daacd1d4e8812a51a/addOns/commonlib/src/main/java/org/zaproxy/addon/commonlib/scanrules/ScanRuleMetadata.java) object manually with its setters.

## Rapid Prototyping

Last month, we published a new passive scan rule to detect if a script in your webapp was being loaded from the malicious Polyfill.io domain.
You can read the full blog post about it [here](/blog/2024-06-27-polyfill.io-script-detection/).

The scan rule was [written in Java](https://github.com/zaproxy/zap-extensions/blob/839d5c7df7432c1f4748275daacd1d4e8812a51a/addOns/pscanrulesBeta/src/main/java/org/zaproxy/zap/extension/pscanrulesBeta/PolyfillCdnScriptScanRule.java) and included in the `pscanrulesBeta` add-on.

Here's the same scan rule written as a script, included here as an example.

```js
const ScanRuleMetadata = Java.type(
  "org.zaproxy.addon.commonlib.scanrules.ScanRuleMetadata",
);
const Alert = Java.type("org.parosproxy.paros.core.scanner.Alert");

const PLUGIN_ID = 10115;

function getMetadata() {
  return ScanRuleMetadata.fromYaml(`
id: ${PLUGIN_ID}
name: Script Served From Malicious Domain (polyfill)
description: |
  The page includes one or more script files loaded from one of the 'polyfill' domains.
  These are not associated with the polyfill.js library and are known to serve malicious content.
solution: >
  Change all scripts to use a known good source based on their documentation.
risk: high
confidence: high
cweId: 829  # CWE-829: Inclusion of Functionality from Untrusted Control Sphere
wascId: 15  # WASC-15: Application Misconfiguration
alertTags:
  OWASP_2017_A09: "https://owasp.org/www-project-top-ten/2017/A9_2017-Using_Components_with_Known_Vulnerabilities.html"
  OWASP_2021_A06: "https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/"
status: beta
`);
}

const transitiveScriptRefDescription = `The page includes one or more script which appear to include a reference to one of the 'polyfill' domains.
These are not associated with the polyfill.js library and are known to serve malicious content.
You should check to see if it is a safe reference (for example in a comment) or whether the script is loading content from that domain.`;

const POLYFILL_IO = /https?:\/\/.*polyfill\.io\/.*/i;
const BOOTCSS_COM = /https?:\/\/.*bootcss\.com\/.*/i;
const BOOTCDN_NET = /https?:\/\/.*bootcdn\.net\/.*/i;
const STATICFILE_NET = /https?:\/\/.*staticfile\.net\/.*/i;
const STATICFILE_ORG = /https?:\/\/.*staticfile\.org\/.*/i;
const UNIONADJS_COM = /https?:\/\/.*unionadjs\.com\/.*/i;
const XHSBPZA_COM = /https?:\/\/.*xhsbpza\.com\/.*/i;
const UNION_MACOMS_LA = /https?:\/\/.*union\.macoms\.la\/.*/i;
const NEWCRBPC_COM = /https?:\/\/.*newcrbpc\.com\/.*/i;

const ALL_DOMAINS = [
  POLYFILL_IO,
  BOOTCSS_COM,
  BOOTCDN_NET,
  STATICFILE_NET,
  STATICFILE_ORG,
  UNIONADJS_COM,
  XHSBPZA_COM,
  UNION_MACOMS_LA,
  NEWCRBPC_COM,
];

function scan(helper, msg, src) {
  if (
    msg.getResponseBody().length() === 0 ||
    !msg.getResponseHeader().isHtml()
  ) {
    return;
  }
  const sourceElements = src.getAllElements("script");
  if (sourceElements == null) {
    return;
  }
  let alertRaised = false;
  for (let i = 0; i < sourceElements.length; i++) {
    const sourceElement = sourceElements[i];
    const scriptSrc = sourceElement.getAttributeValue("src");
    if (scriptSrc == null) {
      continue;
    }
    for (let j = 0; j < ALL_DOMAINS.length; j++) {
      if (ALL_DOMAINS[j].test(scriptSrc)) {
        helper
          .newAlert()
          .setParam(scriptSrc)
          .setEvidence(sourceElement.toString())
          .setAlertRef(`${PLUGIN_ID}-1`)
          .raise();
        alertRaised = true;
      }
    }
  }
  if (alertRaised) {
    // Definitely an issue, no point checking the script contents
    return;
  }
  // Check the script contents, in case they are loading scripts via JS
  for (let i = 0; i < sourceElements.length; i++) {
    const contents = sourceElements[i].getContent().toString();
    for (let j = 0; j < ALL_DOMAINS.length; j++) {
      let match;
      if ((match = ALL_DOMAINS[j].exec(contents))) {
        helper
          .newAlert()
          .setConfidence(Alert.CONFIDENCE_LOW)
          .setEvidence(match[0])
          .setDescription(transitiveScriptRefDescription)
          .setAlertRef(`${PLUGIN_ID}-2`)
          .raise();
        break;
      }
    }
  }
}
```

## How will you use ZAP scripts?

You can now write a full scan rule *while ZAP is running*, in fewer lines of code.
You can create prototypes of your custom rules and iterate on them rapidly to beat them into shape.

Moreover, the [automation framework](/docs/automate/automation-framework/) supports inline scripts, which means that you can now write and share automation framework plans that scan for specific issues.

You can find an example of such a plan [in this GitHub Gist](https://gist.github.com/ricekot/f45eb4640485909d16bd7dc1d2ec9d5f#file-example-zap-af-plan-yml) and you can run it with the following command:

```shell
docker run --rm zaproxy/zap-nightly zap.sh -cmd -autorun https://gist.githubusercontent.com/ricekot/f45eb4640485909d16bd7dc1d2ec9d5f/raw/
```

Watch out for a full blog post on this topic soon.

Until then, enjoy hacking and scripting with ZAP! 

If you have any feedback, comments, or ideas about ZAP Scripts, please reach out on the [ZAP Scripts Group](https://groups.google.com/group/zaproxy-scripts).
