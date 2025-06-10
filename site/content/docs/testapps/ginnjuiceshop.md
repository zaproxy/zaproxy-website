---
title: "Gin & Juice Shop"
type: page
zap-auth: 3
maint: 3
---

### Overview

Gin & Juice Shop is a closed source vulnerable app maintained by [PortSwigger](https://portswigger.net/).

Despite claiming to be a modern app is is actually relatively traditional (it is not a Single Page App), which makes it easier to scan.

* Online: https://ginandjuice.shop/

### Potential Pitfalls

This is an online app which may be unavailable or broken at any point.
It is not possible to run a local version.

### Authentication

Known users (username / password):

* `carlos` / `hunter2`

#### Browser Based Authentication

ZAP can successfully authenticate to this app using 
[Browser Based Authentication](/docs/desktop/addons/authentication-helper/browser-auth/) 
and will successfully identify the session handling and verification.

Note that you should use the URL `https://ginandjuice.shop/login` as there is not an easy to find link to the login page from the top URL.

#### Client Script Authentication

ZAP can successfully authenticate to this app using 
[Client Script Authentication](/docs/desktop/addons/authentication-helper/client-script/) 
and will successfully identify the session handling and verification.

### Recommended Environment

```yaml
env:
  contexts:
  - name: "Gin N Juice Shop"
    urls:
    - https://ginandjuice.shop
    includePaths:
    - https://ginandjuice.shop.*
    excludePaths:
    - https://ginandjuice.shop/logout
    authentication:
      method: browser
      parameters:
        loginPageUrl: https://ginandjuice.shop/login
        loginPageWait: 2
        browserId: firefox
        steps: []
      verification:
        method: poll
        loggedInRegex: \Q 200 OK\E
        loggedOutRegex: \Q 302 Found\E
        pollFrequency: 60
        pollUnits: requests
        pollUrl: https://ginandjuice.shop/my-account
        pollPostData: ""
    sessionManagement:
      method: headers
      parameters: {}
    users:
    - name: carlos
      credentials:
        password: hunter2
        username: carlos
  parameters: {}
```

### Crawling

All of the spiders are effective against this app. We recommend using the 
[Traditional Spider](/docs/desktop/addons/spider/) as well as one of the modern ones:

* [AJAX Spider](/docs/desktop/addons/ajax-spider/)
* [Client Spider](/docs/desktop/addons/client-side-integration/spider/)


For the AJAX Spider you need to exclude the logout link:

``` yaml
- type: spiderAjax
  parameters:
    context: "Gin N Juice Shop"
    user: carlos
    browserId: firefox-headless
    excludedElements:
    - description: Logout
      element: a
      text: Log out
 ```

### Scanning

Gin & Juice Shop has a well documented set of [vulnerabilities](https://ginandjuice.shop/vulnerabilities).
