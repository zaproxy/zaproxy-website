---
title: "AltoroJ / testfire.net"
type: page
zap-auth: 3
maint: 1
---

### Overview

AltoroJ, also known as Altoro Mutual and Testfire, is an open source sample banking J2EE web application
maintained by [HCL Software](https://www.hcl-software.com/).

It is a traditional app created in 2008 and is not updated very often.

* Online: http://testfire.net/
* Repo: https://github.com/HCL-TECH-SOFTWARE/AltoroJ

### Potential Pitfalls

This is an online app which may be unavailable or broken at any point.
Running a local version will give more consistent results.

### Authentication

Known users (username / password):

* `admin` / `admin`
* `jsmith` / `demo1234`

#### Browser Based Authentication

ZAP can successfully authenticate to this app using 
[Browser Based Authentication](/docs/desktop/addons/authentication-helper/browser-auth/) 
and will successfully identify the session handling and verification.

#### Client Script Authentication

ZAP can successfully authenticate to this app using 
[Client Script Authentication](/docs/desktop/addons/authentication-helper/client-script/) 
and will successfully identify the session handling and verification.

A suitable Zest script is available here: 
[testfire.zst](https://github.com/zapbot/zap-mgmt-scripts/blob/master/scans/auth/plans_and_scripts/testfire/testfire.zst)

### Recommended Environment

``` yaml
env:
  contexts:
  - name: testfire
    urls:
    - http://testfire.net
    includePaths:
    - http://testfire.net.*
    excludePaths:
    - http://testfire.net/logout.jsp
    - http://testfire.net/doLogin
    authentication:
      method: browser
      parameters:
        loginPageUrl: http://testfire.net/login.jsp
        loginPageWait: 2
        browserId: firefox
      verification:
        method: poll
        loggedInRegex: \Q 200 OK\E
        loggedOutRegex: \Q 302 Found\E
        pollFrequency: 60
        pollUnits: requests
        pollUrl: http://testfire.net/bank/main.jsp
        pollPostData: ""
    sessionManagement:
      method: headers
    users:
    - name: admin
      credentials:
        password: admin
        username: admin
```


### Crawling

Any of the ZAP Spiders can be used to crawl AltoroJ.

For the [Traditional Spider](/docs/desktop/addons/spider/) to be able to crawl the app you need to exclude the login and logout URLs from the context as above.

For the [AJAX Spider](/docs/desktop/addons/ajax-spider/) you need to exclude the logout link:

``` yaml
- type: spiderAjax
  parameters:
    context: testfire
    user: admin
    browserId: firefox-headless
    excludedElements:
    - description: Logout
      element: a
      text: Sign Off
```

### Scanning

We are not aware of a definitive list of the vulnerabilities in AltoroJ. 