---
# This page was generated from the add-on.
title: Automation Framework - activeScan Job
type: userguide
weight: 6
---

# Automation Framework - activeScan Job

This job runs the active scanner. This actively attacks your applications and should therefore only be used against applications that you have permission to test.

By default this job will actively scan the first context defined in the [environment](/docs/desktop/addons/automation-framework/environment/) and so none of the parameters are mandatory.

```
  - type: activeScan                   # The active scanner - this actively attacks the target so should only be used with permission
    parameters:
      context:                         # String: Name of the context to attack, default: first context
      maxRuleDurationInMins:           # Int: The max time in minutes any individual rule will be allowed to run for, default: 0 unlimited
      maxScanDurationInMins:           # Int: The max time in minutes the active scanner will be allowed to run for, default: 0 unlimited
      addQueryParam:                   # Bool: If set will add an extra query parameter to requests that do not have one, default: false
      defaultPolicy:                   # String: The name of the default scan policy to use, default: Default Policy
      delayInMs:                       # Int: The delay in milliseconds between each request, use to reduce the strain on the target, default 0
      handleAntiCSRFTokens:            # Bool: If set then automatically handle anti CSRF tokens, default: false
      injectPluginIdInHeader:          # Bool: If set then the relevant rule Id will be injected into the X-ZAP-Scan-ID header of each request, default: false
      scanHeadersAllRequests:          # Bool: If set then the headers of requests that do not include any parameters will be scanned, default: false
      threadPerHost:                   # Int: The max number of threads per host, default: 2
```
