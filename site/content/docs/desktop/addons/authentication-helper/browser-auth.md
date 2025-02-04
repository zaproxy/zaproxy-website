---
# This page was generated from the add-on.
title: Browser Based Authentication
type: userguide
weight: 3
---

# Browser Based Authentication

This [add-on](/docs/desktop/addons/authentication-helper/) adds a new authentication type which uses a browser to login to the target website.


It uses the first field with a type of "text" or "email" for the user name and the first field with a type
of "password" for the password.
It does support login pages where the password field is only made visible when the username has been entered.
It does not support login pages which do not submit when `Return` is used in the password field.


The response containing the session token is identified by choosing the first response following a login which contains any of:

* An `Authorization` header
* JSON data with an element called `AccessToken` or `token` - case is ignored

The plan is to keep enhancing this authentication method to handle all of the most commonly used login page formats. If it does not work with you application's login page then please inform the ZAP team via the [ZAP User Group](https://groups.google.com/group/zaproxy-users) giving as many details as possible.

## Automation Framework

Browser Based Authentication can be configured in the environment section of an Automation Framework plan using:

```
      authentication:
        method: "browser"
        parameters:
          loginPageUrl:                # String, the URL of the login page, mandatory
          loginPageWait:               # Int, the time in seconds to wait after the login form has been submitted, default: 5
          browserId:                   # String, Browser Id to use, default: firefox-headless
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
* Browser Based Authentication cannot be added to a context via the API

These restrictions will be addressed in a future release.


Latest code: [BrowserBasedAuthenticationMethodType.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/authhelper/src/main/java/org/zaproxy/addon/authhelper/BrowserBasedAuthenticationMethodType.java)
