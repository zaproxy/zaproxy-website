---
# This page was generated from the add-on.
title: Retire.js
type: userguide
weight: 1
cascade:
  addon:
    id: retire
    version: 0.52.0
---

# Retire.js {#id-10003}

This add-on includes a passive scan rule which implements checks provided by [Retire.js](https://retirejs.github.io/retire.js/) in order to identify vulnerable or out-dated JavaScript packages.


**Note:** The Risk level associated with Alerts raised by this scan rule are mapped to the severity ratings provided in the Retire.js data. If no severity is matched then a default of Medium Risk is used.


Latest code: [Retire.js Add-on](https://github.com/zaproxy/zap-extensions/blob/main/addOns/retire/)


Alert ID: [10003](/docs/alerts/10003/).


**Note:** This add-on is based on original work by [Nikita Mundhada](https://github.com/nikmmy/retire).
