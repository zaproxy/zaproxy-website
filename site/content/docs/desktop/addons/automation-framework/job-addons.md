---
# This page was generated from the add-on.
title: Automation Framework - addOns Job
type: userguide
weight: 4
---

# Automation Framework - addOns Job

This job allows you to manage the ZAP add-ons.

The add-on identifiers to use in the 'install' and 'uninstall' lists are shown in the ZAP Desktop 'Manage Add-ons' dialog or
can be found on the [ZAP Marketplace](/addons/) page.

## YAML

```
  - type: addOns                       # Add-on management
    parameters:
      updateAddOns: false              # Currently disabled due to problems updating the framework and jobs while they are running
    install:                           # A list of non standard add-ons to install from the ZAP Marketplace
    uninstall:                         # A list of standard add-ons to uninstall
```
