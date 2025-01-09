---
# This page was generated from the add-on.
title: OpenAPI Automation Framework Support
type: userguide
weight: 1
---

# OpenAPI Automation Framework Support

This add-on supports the Automation Framework.   

The add-on will add OpenAPI definitions if they are found while spidering but adding them explicitly via a URL or local file is recommended if they are available.   

The targetUrl parameter works in the same way per ['Target URL Format'](/docs/desktop/addons/openapi-support/).

## Job: openapi

The openapi job allows you to import OpenAPI definitions via a URL or file.


It is covered in the video: [ZAP Chat 11 Automation Framework Part 5 - APIs](https://youtu.be/xuP00Ri460k).

```
  - type: openapi                      # OpenAPI definition import
    parameters:
      apiFile:                         # String: Local file containing the OpenAPI definition, default: null, no definition will be imported
      apiUrl:                          # String: URL containing the OpenAPI definition, default: null, no definition will be imported
      context:                         # String: Context to use when importing the OpenAPI definition, default: first context.
      user:                            # String: An optional user to use for authentication, must be defined in the env.
      targetUrl:                       # String: URL which overrides the target defined in the definition, default: null, the target will not be overridden
```
