---
# This page was generated from the add-on.
title: OpenAPI Automation Framework Support
type: userguide
weight: 1
---

# OpenAPI Automation Framework Support

This add-on supports the Automation Framework.   

The add-on will add OpenAPI definitions if they are found while spidering but adding them explicitly via a URL or local file is recommended if they are available.   

The targeturl parameter works in the same way per ['Target URL Format'](/docs/desktop/addons/openapi-support/).

## Job: openapi

The openapi job allows you to import OpenAPI definitions via a URL or file.

```
  - type: openapi                      # OpenAPI definition import
    parameters:
      apifile:                         # String: Local file containing the OpenAPI definition, default: null, no definition will be imported
      apiurl:                          # String: URL containing the OpenAPI definition, default: null, no definition will be imported
      targeturl:                       # String: URL which overrides the target defined in the definition, default: null, the target will not be overriden
```

## Statistics

The add-on maintains the following statistics:

* openapi.urls.added : The total number of URLs added when importing OpenAPI definitions
