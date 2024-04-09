---
title: "Auto-Detection"
tags: 
- authentication
- guide
type: page
aliases:
  /docs/authentication/auto-detection/
---
ZAP has options for auto-detecting all of the different parts of authentication that it requires.
If they work for your apps then it will make your life considerably easier, so this is the best place for you to start.

### Authentication Tester Dialog

The [Authentication Tester Dialog](/blog/2023-05-23-authentication-tester/) is a quick and easy way to check if ZAP can 
automatically detect all of the information it needs - you only need to provide the URL of your login page and valid credentials.

{{< youtube uuid="RCi9W77bGpI" >}}

If everything passes then auto-detection is probably going to be your best option.

If it fails then the dialog will collect sanitised diagnostics which you can safely share with us in order to help identify what is going wrong.

### Auto Detection in the Desktop

The Authentication Tester Dialog will automatically create a new [Context](/docs/desktop/start/features/contexts/) for you (by default "Authentication Test").
This will be updated with the details that ZAP detects.

You can also set up authentication auto-detection manually in the ZAP Desktop by:

* Adding your app to a [Context](/docs/desktop/start/features/contexts/)
* Setting the [Authentication](/docs/desktop/ui/dialogs/session/context-auth/#authentication-method) to [Browser-based Authentication](/docs/desktop/addons/authentication-helper/browser-auth/)
* Setting the [Authentication Verification](/docs/desktop/ui/dialogs/session/context-auth/#authentication-verification) to "Auto-Detect"
* Setting the [Session Management](/docs/desktop/start/features/sessionmanagement/) to [Auto-Detect Session Management](/docs/desktop/addons/authentication-helper/autodetect-session/)
* Adding a new [User](/docs/desktop/start/features/users/) with valid credentials


### Auto Detection in the Automation Framework

You can use authentication auto-detection in an Automation Framework plan by configuring the environment like:

```yaml
---
env:
  contexts:
  - name: "simple-json"
    urls:
    - "http://localhost:9091/auth/simple-json"
    includePaths:
    - "http://localhost:9091/auth/simple-json.*"
    excludePaths: []
    authentication:
      method: "browser"
      parameters:
        loginPageUrl: "http://localhost:9091/auth/simple-json/"
        loginPageWait: 5
        browserId: "firefox-headless"
      verification:
        method: "autodetect"
    sessionManagement:
      method: "autodetect"
      parameters: {}
    users:
    - name: "test"
      credentials:
        username: "test@test.com"
        password: "password123"
```

See the [Authentication Auto-Detection](/blog/2023-05-02-authentication-auto-detection/) blog post for more details.

### Auto Detection in the API

Auto-detection is currently not supported in the API due to Core restrictions. These restrictions will be removed in a future full release.

{{<prevnext prevUrl="../make-your-life-easier/" prevTitle="How to make your life easier" nextUrl="../documented-sso-solutions/" nextTitle="Documented SSO Solutions">}}