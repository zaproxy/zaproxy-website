---
# This page was generated from the add-on.
title: Header Based Session Management
type: userguide
weight: 6
---

# Header Based Session Management

This [add-on](/docs/desktop/addons/authentication-helper/) adds a new session management type which supports an arbitrary number of headers.


If used in conjunction with [Browser Based Authentication](/docs/desktop/addons/authentication-helper/browser-auth/) then it will also maintain all
of the cookies set as part of authentication.


The header values can include the following tokens:

|   |                         |                                   |
|---|-------------------------|-----------------------------------|
|   | `{%json:path.to.data%}` | JSON authentication response data |
|   | `{%env:env_var%}`       | Environmental variable            |
|   | `{%script:glob_var%}`   | Global script variable            |
|   | `{%header:env_var%}`    | Authentication response header    |
|   | `{%url:key%}`           | Authentication URL param          |

When adding Header Based Session Management via the API the `headers` parameter is a string of `header:value` pairs separated by newline characters: `\n`.

## Automation Framework

Header Based Session Management can be configured in the environment section of an Automation Framework plan using:

```
      sessionManagement:
        method: "headers"
        parameters:                    #  list of header: value pairs which can include any of the tokens defined above, e.g.
          Authorization: "Bearer: {%json:AuthenticationResult.AccessToken%}"
```


Note that due to restrictions in the core:

* Existing contexts are not updated in the GUI if you add or remove this add-on
* Header Based Session Management cannot be added to a context via the API

These restrictions will be addressed in a future release.


Latest code: [HeaderBasedSessionManagementMethodType.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/authhelper/src/main/java/org/zaproxy/addon/authhelper/HeaderBasedSessionManagementMethodType.java)
