---
# This page was generated from the add-on.
title: Authentication Helper Automation Framework Support
type: userguide
weight: 11
---

# Authentication Helper Automation Framework Support

This add-on supports the Automation Framework.

## Job: diagnostics

The diagnostics job starts or stops plan-level recording of authentication related diagnostics. Recorded diagnostics appear in the Authentication Diagnostics UI and can be included in the [Authentication Report](/docs/desktop/addons/authentication-helper/reports/).


A plan may include multiple diagnostics jobs. Recording starts when `enabled` is `true`
and stops (and is persisted) when `enabled` is `false`.
If recording is still on at plan finish, it is stopped and persisted automatically.

```
  - type: diagnostics                  # Enable or disable plan-level diagnostics recording
    parameters:
      enabled:                         # Bool: If true, start diagnostics recording, default: false
```


Enabling both this job and `env` authentication diagnostics (browser/client
`authentication.parameters.diagnostics`) in the same plan is not recommended and may cause
duplicate diagnostic records. Prefer using one diagnostics mechanism per plan.
