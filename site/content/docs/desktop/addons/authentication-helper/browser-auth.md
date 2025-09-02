---
# This page was generated from the add-on.
title: Browser Based Authentication
type: userguide
weight: 3
---

# Browser Based Authentication

This [add-on](/docs/desktop/addons/authentication-helper/) adds a new authentication method which uses a browser to login to the target website.


The authentication method requires the login URL and user credentials to perform the authentication. By default it automatically attempts to
find suitable fields for the username and for the password, in the same page and multiple pages (i.e. password field is only made visible when
the username has been entered).


The plan is to keep enhancing this authentication method to handle all of the most commonly used login page formats.
If it does not work with your application's login page then please inform the ZAP team via the
[ZAP User Group](https://groups.google.com/group/zaproxy-users) giving as many details as possible.


This method also supports HTTP Basic Authentication for Firefox only (due to Selenium restrictions).

### Authentication Steps

When the authentication method is not able to find suitable fields, or requires extra steps they can be manually specified by the user. The following steps are supported:

|        Name         |      Type      |                                                                                                                                         Description                                                                                                                                          |
|---------------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Auto Steps          | `AUTO_STEPS`   | Indicates that the authentication method should perform the steps that does by default, to identify and fill the required fields (if not already). This is useful when the authentication method is able to find and submit the fields but other required steps must happen before or after. |
| Click Element       | `CLICK`        | Clicks a web element, for example, to access the login form or dismiss a popup.                                                                                                                                                                                                              |
| Fill Custom Field   | `CUSTOM_FIELD` | Fills a custom field with the given value, for example, choose a realm or organisation department in the login form.                                                                                                                                                                         |
| Fill Password Field | `PASSWORD`     | Fills the password in a field, for when no suitable field was automatically identified.                                                                                                                                                                                                      |
| Fill TOTP Field     | `TOTP_FIELD`   | Fills a TOTP field.                                                                                                                                                                                                                                                                          |
| Fill Username Field | `USERNAME`     | Fills the username in a field, for when no suitable field was automatically identified.                                                                                                                                                                                                      |
| Send Escape         | `ESCAPE`       | Sends the escape to the web element, for example, to dismiss a popup.                                                                                                                                                                                                                        |
| Send Return         | `RETURN`       | Sends return to the web element, for example, to submit the login form.                                                                                                                                                                                                                      |
| Wait For Timeout    | `WAIT`         | Waits for the specified timeout.                                                                                                                                                                                                                                                             |

Each step is executed sequentially in the order they are specified. Steps that act on a web element need to be identified with either its CSS Selector or XPath, both of which can be obtained, for example, through browser dev tools. Those steps have a timeout which allow to wait up to the given number of milliseconds for the web element to be shown and be interactable (when the login page takes some time to load). The `CUSTOM_FIELD`, `PASSWORD` and `USERNAME` steps all clear any existing values from the corresponding field, so you will need to specify the full value you want.

### Session Identification

The response containing the session token is identified by choosing the first response following a login which contains any of:

* An `Authorization` header
* JSON data with an element called `AccessToken` or `token` - case is ignored

## Automation Framework

Browser Based Authentication can be configured in the environment section of an Automation Framework plan using:

```
      authentication:
        method: "browser"
        parameters:
          loginPageUrl:                # String, the URL of the login page, mandatory
          loginPageWait:               # Int, the time in seconds to wait after the login form has been submitted, default: 5
          stepDelay:                   # Int, the time in seconds to wait in-between each step, default: 0
          browserId:                   # String, Browser Id to use, default: firefox-headless
          diagnostics:                 # Bool, enables the recording of diagnostic data during the authentication. Default: false.
          steps:                       # List of custom steps.
          - description:               # String, the description of the step.
            type:                      # The type of the step, one of: AUTO_STEPS, CLICK, CUSTOM_FIELD, ESCAPE, PASSWORD, RETURN, TOTP_FIELD, USERNAME, WAIT
            cssSelector:               # String, the CSS Selector to the web element.
            xpath:                     # String, the XPath to the web element.
            value:                     # String, the value to fill in the web element.
            timeout:                   # Int, the number of milliseconds to wait for the web element. Default: 1000
```


Refer to the [Authentication Report](/docs/desktop/addons/authentication-helper/auth-report-json/) for more details on the diagnostics.


Note the TOTP data is defined under the user credentials:

```
      credentials:
        username: …
        password: …
        totp:
          secret:          # String, the secret.
          period:          # Int, the period. Default: 30
          digits:          # Int, the number of digits. Default: 6
          algorithm:       # String, the algorithm. Default: SHA1
```

## AJAX Spider Integration

The AJAX Spider will automatically login if a user is specified which is in a context that uses Browser Based Authentication.


Note that this uses the Selenium integration detailed below, so any browsers launched manually will also be logged in if the
AJAX spider is performing an authenticated scan using Browser Based Authentication.

## Selenium Integration

Any browsers launched by ZAP can be configured to always first login using the details configured in a context. This is disabled by default.


This feature can be controlled by the following static methods, which are used by the AJAX Spider and can also be called from scripts.

```
org.zaproxy.addon.authhelper.AuthUtils.enableBrowserAuthentication(Context context, String userName)
```

This method will enable browser authentication whenever a browser is launched, for the given context and user. An exception will be thrown if the context is not configured for browser based authentication or if the user is not found.

```
org.zaproxy.addon.authhelper.AuthUtils.enableBrowserAuthentication()
```

This method will enable browser authentication whenever a browser is launched. The context is configured for browser based authentication with a valid user will be chosen.

```
org.zaproxy.addon.authhelper.AuthUtils.disableBrowserAuthentication()
```

This method will disable browser authentication when browser is launched.


Note that due to restrictions in the core:

* Existing contexts are not updated in the GUI if you add or remove this add-on
* Browser Based Authentication cannot be added to a context via the API (unless used with ZAP 2.16.1 or later)

These restrictions will be addressed in a future release.


Latest code: [BrowserBasedAuthenticationMethodType.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/authhelper/src/main/java/org/zaproxy/addon/authhelper/BrowserBasedAuthenticationMethodType.java)
