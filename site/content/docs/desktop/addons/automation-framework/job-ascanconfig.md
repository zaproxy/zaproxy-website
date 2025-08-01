---
# This page was generated from the add-on.
title: Automation Framework - activeScan-config Job
type: userguide
weight: 6
---

# Automation Framework - activeScan-config Job

This job configures the active scanner, for custom active scans (e.g. Sequence).

## YAML

```
  - type: activeScan-config                # Configures the settings of the active scanner.
    parameters:
      maxRuleDurationInMins:               # Int: The max time in minutes any individual rule will be allowed to run for, default: 0 unlimited
      maxScanDurationInMins:               # Int: The max time in minutes the active scanner will be allowed to run for, default: 0 unlimited
      maxAlertsPerRule:                    # Int: Maximum number of alerts to raise per rule, default: 0 unlimited
      defaultPolicy:                       # String: The name of the default scan policy to use, default: Default Policy
      handleAntiCSRFTokens:                # Bool: If set then automatically handle anti CSRF tokens, default: false
      injectPluginIdInHeader:              # Bool: If set then the relevant rule ID will be injected into the X-ZAP-Scan-ID header of each request, default: false
      threadPerHost:                       # Int: The max number of threads per host, default: 2 * Number of available processor cores
    inputVectors:                          # The input vectors used during the active scan.
      urlQueryStringAndDataDrivenNodes:    # Configures the scanning of query parameters and DDNs.
         enabled:                          # Bool: If query parameters and DDNs scanning should be enabled. Default: true
         addParam:                         # Bool: If a query parameter should be added if none present. Default: false
         odata:                            # Bool: If OData query filters should be scanned. Default: true
      postData:                            # Configures the scanning of request bodies.
        enabled:                           # Bool: If enabled. Default: true
        multiPartFormData:                 # Bool: If multipart form data bodies should be scanned. Default: true
        xml:                               # Bool: If XML bodies should be scanned. Default: true
        json:                              # Configures the scanning of JSON bodies.
          enabled:                         # Bool: If JSON scanning should be enabled. Default: true
          scanNullValues:                  # Bool: If null values should be scanned. Default: false
        googleWebToolkit:                  # Bool: If GWT scanning should be enabled. Default: false
        directWebRemoting:                 # Bool: If DWR scanning should be enabled. Default: false
      urlPath:                             # Bool: If URL path segments should be scanned. Default: false
      httpHeaders:                         # Configures the scanning of HTTP headers.
        enabled:                           # Bool: If HTTP header scanning should be enabled. Default: false
        allRequests:                       # Bool: If set then the headers of requests that do not include any parameters will be scanned. Default: false
      cookieData:                          # Configures the scanning of cookies.
        enabled:                           # Bool: If enabled. Default: false
        encodeCookieValues:                # Bool: If cookie values should be encoded. Default: false
      scripts:                             # Bool: If Input Vector scripts should be used. Default: true
    excludePaths:                          # An optional list of regexes to exclude
    enabled:                           # Bool: If set to false the job will not be run, default: true
    alwaysRun:                         # Bool: If set and the job is enabled then it will run even if the plan exits early, default: false
```

Note that the 'excludePaths' will overwrite any existing session "Exclude from Scanner" paths.
