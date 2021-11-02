---
# This page was generated from the add-on.
title: Automation Framework - requestor Job
type: userguide
---

# Automation Framework - requestor Job

This job sends specifically crafted requests to a target url, with a custom request method and body. The user can also specify an expected response code, against which the actual response is compared, and the user is warned in case it does not match.

## YAML

```
  - type: requestor                    # Used to send specific requests to targets
    parameters:
      user:                            # String: An optional user to use for authenticated requests, must be defined in the env
    requests:                          # A list of requests to make
      - url:                           # String: A mandatory URL of the request to be made
        method:                        # String: A non-empty request method, default: GET
        data:                          # String: Optional data to send in the request body
        responseCode:                  # Int: An optional, expected response code against which the actual response code will be matched
```
