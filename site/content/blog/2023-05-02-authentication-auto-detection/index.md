---
title: "Authentication Auto-Detection"
summary: >
  ZAP can now automatically detect and configure itself to handle common authentication mechanisms.
images:
- https://www.zaproxy.org/blog/2023-05-02-authentication-auto-detection/images/blog-auth-auto-detect.png
type: post
tags:
- blog
- authentication
date: "2023-05-02"
authors: 
    - simon
---

![ZAPbot authentication auto-detection](images/blog-auth-auto-detect.png)

ZAP can handle pretty much any authentication scheme that can be handled by an automated tool, but you have had to understand how your app's application works in order to configure ZAP.

That is no longer the case!

ZAP can now automatically detect common authentication mechanisms and configure itself without you needing to understand it yourself.

I'd like to stress that ZAP will not be able to handle everything, and it is still early days.
It will appear to still be a little bit complicated, but we will keep making it easier and easier to use.

And we really need your feedback - so please try it out and let us know how you get on.

## When Can You Use Authentication Auto-Detection?

Authentication auto-detection can be useful when you are performing manual testing using ZAP, 
but it really shines when you are automating ZAP.
Right now the focus has been adding support for auto-detection in the 
[Automation Framework](/docs/automate/automation-framework/)(AF).

Due to core limitation there will be restrictions on how effectively you can use auto-detection in the ZAP Desktop UI and via the API - we will aim to remove these restrictions in a future ZAP release.

## An Example Automation Plan

This is an example AF plan, it is explained in more detail below:
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
        loginPageWait: 2
        browserId: "firefox-headless"
      verification:
        method: "poll"
    sessionManagement:
      method: "autodetect"
      parameters: {}
    technology:
      exclude: []
    users:
    - name: "test"
      credentials:
        username: "test@test.com"
        password: "password123"
  parameters:
    failOnError: true
    failOnWarning: false
    progressToStdout: true
  vars: {}
jobs:
- parameters:
    maxAlertsPerRule: 0
    scanOnlyInScope: true
    maxBodySizeInBytesToScan: 0
    enableTags: false
    disableAllRules: true
  rules:
  - id: 10111
    name: "Authentication Request Identified"
    threshold: "medium"
  - id: 10112
    name: "Session Management Response Identified"
    threshold: "medium"
  - id: 10113
    name: "Verification Request Identified"
    threshold: "medium"
  name: "passiveScan-config"
  type: "passiveScan-config"
- parameters:
    user: "test"
  requests:
  - url: "http://localhost:9091/auth/simple-json/user"
    name: ""
    method: ""
    httpVersion: ""
    headers: []
    data: ""
  name: "requestor"
  type: "requestor"
  tests:
  - type: "stats"
    statistic: "stats.auth.success"
    site: "http://localhost:9091"
    operator: ">="
    value: 1
    onFail: "error"
  - type: "stats"
    statistic: "stats.auth.state.loggedin"
    site: "http://localhost:9091"
    operator: ">="
    value: 1
    onFail: "error"
  - type: "stats"
    statistic: "stats.auth.sessiontoken.accesstoken"
    site: "http://localhost:9091"
    operator: ">="
    value: 1
    onFail: "error"
  - type: "stats"
    statistic: "stats.auth.configure.session.header"
    operator: ">="
    value: 1
    onFail: "error"
  - type: "stats"
    statistic: "stats.auth.detect.auth.json"
    operator: ">="
    value: 1
    onFail: "error"
```

You can run this plan in the ZAP desktop or from the command line.
However it is worth noting that it is currently not possible to edit some of the authentication settings in the 
desktop - they will still work, and if you make other changes then the authentication settings should still be maintained when you save the plan.

If you want to try this specific plan out then you will need to install the ZAP [Dev Add-on](https://www.zaproxy.org/docs/desktop/addons/dev-add-on/) and run ZAP with the `-dev` option. This provides a growing set of authentication test pages - just point your browser to http://localhost:9091 to try them out.

## The Automation Plan Details

This section explains how the plan works in detail.

For more background see the [Authentication](/docs/authentication/) pages. 

### Authentication

```yaml
    authentication:
      method: "browser"
      parameters:
        loginPageUrl: "http://localhost:9091/auth/simple-json/"
        loginPageWait: 5
        browserId: "firefox-headless"
```

The `browser` authentication method instructs ZAP to use [Browser Based Authentication](/docs/desktop/addons/authentication-helper/browser-auth/).

You only need to specify the `loginPageUrl` - that is the URL which displays the username and password fields.

At the time of writing Login pages where you have to enter the username, press return (or click a button) and only then can enter the password are not supported. However this type of login page will be supported in the near future.

The `loginPageWait` is the number of seconds ZAP will wait for the target site to load after having logged in - you may need to increase this if you app takes longer to set itself up.

By default ZAP will use `firefox-headless` - you can change it to `firefox` if you want to see Firefox launched in order to see what it is doing. This can be very helpful for identifying problems. 
You can also use any of the browser IDs listed on the Selenium [Supported Browser](/docs/desktop/addons/selenium/) page if those browsers are available on your system.

### Session Management

```yaml
    sessionManagement:
      method: "autodetect"
      parameters: {}
```

The `autodetect` authentication method instructs ZAP to use [Auto-Detect Session Management](/docs/desktop/addons/authentication-helper/autodetect-session/).

### Verification

```yaml
      verification:
        method: "poll"
```

Specifying the `poll` method _without_ specifying a URL instructs ZAP to auto-detect verification using  
[Verification Request Identification](/docs/desktop/addons/authentication-helper/verification-id/).
An `autodetect` method is not used as currently the ZAP core does not support adding verification methods dynamically.
This restriction will be removed in a future ZAP release.

### Credentials

```yaml
    users:
    - name: "test"
      credentials:
        username: "test@test.com"
        password: "password123"
```

These are the credentials ZAP will use on the login page.

Note that the [Verification Request Identification](/docs/desktop/addons/authentication-helper/verification-id/) will
prioritise URLs which return either the username ("test@test.com" in this case) _or_ the name (just "test" in this case).

### Passive Scan Configuration

```yaml
- parameters:
    maxAlertsPerRule: 0
    scanOnlyInScope: true
    maxBodySizeInBytesToScan: 0
    enableTags: false
    disableAllRules: true
  rules:
  - id: 10111
    name: "Authentication Request Identified"
    threshold: "medium"
  - id: 10112
    name: "Session Management Response Identified"
    threshold: "medium"
  - id: 10113
    name: "Verification Request Identified"
    threshold: "medium"
  name: "passiveScan-config"
  type: "passiveScan-config"
```

In this case we are disabling all of the scan rules and just enabling the ones required for auto-detection.
You do not need to disable all of the passive scan rules.

### Test Request

In this example we are just making one authenticated request. You can explore your app using, for example, the 2 spiders, but you will need to tell ZAP to make authenticated tests as well.


```yaml
- parameters:
    user: "test"
```

You need to tell ZAP to make an authenticated request, otherwise it will not use authentication.


```yaml
  tests:
  - type: "stats"
    statistic: "stats.auth.success"
    site: "http://localhost:9091"
    operator: ">="
    value: 1
    onFail: "error"
  - type: "stats"
    statistic: "stats.auth.state.loggedin"
    site: "http://localhost:9091"
    operator: ">="
    value: 1
    onFail: "error"
  - type: "stats"
    statistic: "stats.auth.sessiontoken.accesstoken"
    site: "http://localhost:9091"
    operator: ">="
    value: 1
    onFail: "error"
  - type: "stats"
    statistic: "stats.auth.configure.session.header"
    operator: ">="
    value: 1
    onFail: "error"
  - type: "stats"
    statistic: "stats.auth.detect.auth.json"
    operator: ">="
    value: 1
  - type: "stats"
    statistic: "stats.auth.configure.verification"
    onFail: "error"
    operator: ">="
    value: 1
```

These tests check that the authentication really worked - you do not have to include all or indeed any of these tests, but they will help pick up problems as so are recommended.

The statistics are all included on the [Internal Statistics](/docs/internal-statistics/) page but are also listed here for convenience:

* stats.auth.success - The number of authentication successes for the given site.
* stats.auth.state.loggedin - The number of messages that include the logged-in indicator for the given site.
* stats.auth.sessiontoken.accesstoken - The number of times the 'accesstoken' session token has been identified for the given site - if your site uses a different token name then you should change this. If you dont know what token will be used then remove this test.
* stats.auth.configure.session.header - The number of contexts automatically configured header based session management.
* stats.auth.configure.verification - The number of contexts automatically configured for verification.
* stats.auth.detect.auth.json - The number of JSON-based authentication requests identified.

## Give Us Feedback

Authentication is a complete pain. So many sites work in so many subtly different ways.

We can get ZAP to handle more sites automatically, but only if you give us your feedback.

It will definitely be great to hear if it all works for you, but we also really want to hear of cases where this doesn't work.

In order to fix any problems we will need lots of details - just knowing it doesn't work will not help us fix ZAP.

Obviously if you can work out exactly what is going wrong then that would be ideal, but we understand that this is 
not practical for all of you.
So if you are unable to tell us exactly why it's failing then the next best thing is an app we can test with.
This could be a very simple test app, or an online service we can register ourselves on.
You can [contact us](mailto:zaproxy-admin@googlegroups.com) privately in order to give us temporary access to a specific test service.
