---
# This page was generated from the add-on.
title: Automation Framework - addOns Job
type: userguide
weight: 2
---

# Automation Framework - addOns Job

This job allows you to manage the ZAP add-ons.

The add-on identifiers to use in the 'install' and 'uninstall' lists are shown in the ZAP Desktop 'Manage Add-ons' dialog or
can be found in the [XML files](/download/#latest-versions) which define the ZAP releases.

```
  - type: addOns                       # Add-on management
    parameters:
      updateAddOns: true               # Update any add-ons that have new versions
    install:                           # A list of non standard add-ons to install from the ZAP Marketplace
    uninstall:                         # A list of standard add-ons to uninstall
```
