---
# This page was generated from the add-on.
title: Postman Automation Framework Support
type: userguide
---

# Postman Automation Framework Support

This add-on supports the Automation Framework.   

The add-on can import Postman collections via a URL or local file.   

The variables parameter works in the same way defined [here](/docs/desktop/addons/postman-support/).

## Job: postman

The postman job allows you to import Postman collections via a URL or file.

      - type: postman         # Postman collection import
        parameters:
          collectionFile:     # String: Local file containing the Postman collection, default: null, no collection will be imported
          collectionUrl:      # String: URL containing the Postman collection, default: null, no collection will be imported
          variables:          # String: Comma-separated list of variables as key-value pairs in the format key1=value1,key2=value2,..., these variables will have precedence over the collection ones
          maxMessages:        # Int: Maximum number of messages to import, default: 0, import all messages


Note that redirects are followed, so `maxMessages` is a soft limit - more messages may be imported than the value specified.
