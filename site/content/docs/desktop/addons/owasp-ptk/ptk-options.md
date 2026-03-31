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

## ZAP Alerts

PTK will raise ZAP alerts for any issues it finds. The full list of alerts raised by PTK is available at [https://www.zaproxy.org/alerttags/tool_ptk/](/alerttags/tool_ptk/).


See also: [OWASP PTK](/docs/desktop/addons/owasp-ptk/)
