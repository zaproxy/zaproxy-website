---
# This page was generated from the add-on.
title: Automation Framework Support
type: userguide
weight: 1
---

# Automation Framework Support

This add-on supports the Automation Framework.   

## Job: import

The import job allows you to import HAR(HTTP Archive File), ModSecurity2 Logs, ZAP Messages or a file containing URLs locally.

```
  - type: import                       # Import a file of requests
    parameters:
      type:                            # String: One of ['har', 'modsec2', 'url', 'zap_messages']
      fileName:                        # String: Name of the file containing the data
```
