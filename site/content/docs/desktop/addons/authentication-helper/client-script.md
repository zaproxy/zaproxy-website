---
# This page was generated from the add-on.
title: Client Script Authentication
type: userguide
weight: 5
---

# Client Script Authentication

This [add-on](/docs/desktop/addons/authentication-helper/) adds a new authentication type which uses a browser to login to the target website.


This functionality leverages Zest scripts (which may have been recorded via the ZAP Browser Extension) to login.


## Automation Framework

Client Script Authentication can be configured in the environment section of an Automation Framework plan using:

```
      authentication:
        method: "client"
        parameters:
          script: /path/to/RecordedAuth.zst  # String, the path to the Zest login script
          scriptInline:                      # String, the full script (may be multi-line) - supply this or 'script' not both
          scriptEngine: Mozilla Zest         # The script engine used for the login script
          diagnostics:                       # Bool, enables the recording of diagnostic data during the authentication. Default: false.
          loginPageWait:                     # Int, the time in seconds to wait after the script has run, default: 5
```


Refer to the [Authentication Report](/docs/desktop/addons/authentication-helper/auth-report-json/) for more details on the diagnostics.

## Client Spider and AJAX Spider Integration

The Client or AJAX Spider will automatically login if a user is specified which is in a context that uses Client Script Authentication.


Note that this uses the Selenium integration detailed below, so any browsers launched manually will also be logged in if the
Client or AJAX spider is performing an authenticated scan using Client Script Authentication.

## Selenium Integration

Any browsers launched by ZAP can be configured to always first login using the details configured in a context.


Note that due to restrictions in the core:

* Existing contexts are not updated in the GUI if you add or remove this add-on
* Client Script Based Authentication cannot be added to a context via the API (unless used with ZAP 2.16.1 or later)

These restrictions will be addressed in a future release.


Latest code: [ClientScriptBasedAuthenticationMethodType.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/authhelper/src/main/java/org/zaproxy/addon/authhelper/ClientScriptBasedAuthenticationMethodType.java)
