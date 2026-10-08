---
# This page was generated from the add-on.
title: Authentication Helper Automation Framework Support
type: userguide
weight: 6
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
      type:                            # String: omit for whole-plan recording, or auth_on_failure / auth_failure_rolling to retain only failed authentication attempts
      count:                           # Int: number of failures to retain, only used by auth_failure_rolling, default: 5
```


By default (`type` omitted) the job records all traffic for the whole plan,
as described above. Setting `type` to `auth_on_failure` or
`auth_failure_rolling` switches to per-attempt recording instead: only failed authentication
attempts are retained (successes are discarded), either just the latest one, or the last `count`
of them. With `auth_on_failure`, to keep the overhead low, only the error step is recorded, with just its screenshot.


Enabling both this job and `env` authentication diagnostics (browser/client
`authentication.parameters.diagnostics`) in the same plan is not recommended and may cause
duplicate diagnostic records. Prefer using one diagnostics mechanism per plan.
