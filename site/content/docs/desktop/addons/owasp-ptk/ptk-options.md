---
# This page was generated from the add-on.
title: OWASP PTK Options
type: userguide
weight: 1
---

# OWASP PTK Options

## Enable Automated Scanning

When checked, PTK will automatically run its configured scan rules during browser sessions. When unchecked, PTK will still be active in the browser but no automated scanning will take place.

## Scan Rules

The scan rules tree lists all available PTK rules grouped by engine (DAST, IAST, SAST) and module. Any rule that is enabled here will be available to PTK when it runs in the browser. Rules that are disabled will be ignored by PTK entirely.


All rules are enabled by default. Uncheck any rules you do not want PTK to use.

## Command-Line Configuration

PTK scan-rule state can be set directly from the ZAP command line using the `-config` flag, without opening the Options dialog. This is useful for headless or automated runs where you want to enable or disable specific engines, modules, or rules.


This is a temporary solution - we plan to add support for configuring the PTK rules in a similar way to other
ZAP rules in due course.

### Key format

Configuration keys follow the hierarchy of the scan-rules tree:

* `ptk.scanrules.`*ENGINE*`.enabled` — enable or disable an entire engine
* `ptk.scanrules.`*ENGINE* `.`*moduleId*`.enabled` — enable or disable a module within an engine
* `ptk.scanrules.`*ENGINE* `.`*moduleId* `.`*ruleId*`.enabled` — enable or disable a single rule
* `ptk.automatedScanning.enabled` — enable or disable automated scanning

Engine names are `SAST`, `IAST`, and `DAST`. Module and rule IDs can be found by hovering over a node in the Options dialog tree — the tooltip shows the internal ID used in configuration keys.

### Inheritance

Settings are inherited from parent to child: a rule-level key overrides its module key, which overrides the engine key, which overrides the default of `true` (enabled). This means you can disable an entire engine with a single key and then selectively re-enable individual rules or modules.

### Examples

Disable all IAST and DAST rules, leaving only SAST active:

```
zap.sh -config ptk.scanrules.IAST.enabled=false \
        -config ptk.scanrules.DAST.enabled=false
```

Disable a specific SAST module:

```
zap.sh -config ptk.scanrules.SAST.dom-xss.enabled=false
```

Disable a single rule within a module:

```
zap.sh -config ptk.scanrules.SAST.dom-xss.no-inner-outer-html.enabled=false
```

Disable all SAST rules except one:

```
zap.sh -config ptk.scanrules.SAST.enabled=false \
        -config ptk.scanrules.SAST.dom-xss.no-inner-outer-html.enabled=true
```

Enable automated scanning:

```
zap.sh -config ptk.automatedScanning.enabled=true
```

For many options, use a properties file with `-configfile`:

```
ptk.scanrules.IAST.enabled=false
ptk.scanrules.DAST.enabled=false
ptk.scanrules.SAST.dom-xss.no-inner-outer-html.enabled=false
```

```
zap.sh -configfile my-ptk-config.properties
```

## ZAP Alerts

PTK will raise ZAP alerts for any issues it finds. The full list of alerts raised by PTK is available at [https://www.zaproxy.org/alerttags/tool_ptk/](/alerttags/tool_ptk/).


See also: [OWASP PTK](/docs/desktop/addons/owasp-ptk/)
