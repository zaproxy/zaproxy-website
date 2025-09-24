---
title: "OWASP Juice Shop"
type: page
zap-auth: 3
maint: 3
---

### Overview

OWASP Juice Shop is "probably the most modern and sophisticated insecure web application".

It is open source, well maintained by independent volunteers, and [well documented](https://help.owasp-juice.shop/).

* Home: https://owasp.org/www-project-juice-shop/
* Online: https://preview.owasp-juice.shop/#/
* Repo: https://github.com/juice-shop/juice-shop
* Docker: https://hub.docker.com/r/bkimminich/juice-shop

### Potential Pitfalls

This is an online app which may be unavailable or broken at any point.
Running a local version will give more consistent results.

The UI has a set of pop-ups that are displayed when accessed via the new browser profile:

* Welcome panel
* Cookie approval dialog
* Language notification (automatically disappears)

These can all interfere with replaying authentication recordings. Recording a client authentication script via ZAP will prevent this from being a problem.

The input elements on the login screen are not within a form element which means Selenium will not "submit" them.
The latest version of Zest handles this automatically.

### Authentication

Known users (username / password):

* `admin@juice-sh.op` / `admin123`

> [!IMPORTANT]
> You should register a unique user with the online Juice Shop as other people may well change the default user.

#### Browser Based Authentication

ZAP can successfully authenticate to this app using 
[Browser Based Authentication](/docs/desktop/addons/authentication-helper/browser-auth/) 
and will successfully identify the session handling and verification.

#### Client Script Authentication

ZAP can successfully authenticate to this app using 
[Client Script Authentication](/docs/desktop/addons/authentication-helper/client-script/) 
and will successfully identify the session handling and verification.

However you do need to record with either a new browser profile or using private/incognito mode so that you need to click
on the pop-ups mentioned above.

### Recommended Environment

```yaml
env:
  contexts:
  - name: "Juice Shop"
    urls:
    - "https://preview.owasp-juice.shop"
    includePaths:
    - "https://preview.owasp-juice.shop.*"
    excludePaths: [] 
    authentication:
      method: "browser"
      parameters:
        loginPageUrl: "https://preview.owasp-juice.shop/#/login"
        browserId: "firefox-headless"
        loginPageWait: 5
      verification:
        method: "poll"
        loggedInRegex: "\\Qtest@test.com\\E"
        loggedOutRegex: ""
        pollFrequency: 60
        pollUnits: "requests"
        pollUrl: "https://preview.owasp-juice.shop/rest/user/whoami"
        pollPostData: ""
    sessionManagement:
      method: headers
      parameters:
        Authorization: "Bearer {%json:authentication.token%}"
        cookie: "token={%json:authentication.token%}"
    users:
    - name: "test@test.com"
      credentials:
        password: "test123"
        username: "test@test.com"
```

### Crawling

As Juice Shop is a modern web app you should use one of the modern spiders:

* [AJAX Spider](/docs/desktop/addons/ajax-spider/)
* [Client Spider](/docs/desktop/addons/client-side-integration/spider/)

For the AJAX Spider you need to exclude the logout link:

``` yaml
- type: spiderAjax
  parameters:
    context: "Juice Shop"
    user: "test@test.com"
    browserId: firefox-headless
    excludedElements:
    - description: Logout
      element: span
      text: Logout
 ```

### Scanning

Although Juice Shop has lots of vulnerabilities, many of them can be very challenging for a DAST tool to identify.

The only significant vulnerability that we are aware of which ZAP should be able to identify but cannot is the DOM XSS vulnerability in the Search box.

Not too surprisingly you will need to configure the [activeScan](/docs/desktop/addons/automation-framework/job-ascan/) job, and you will probably want to generate a [report](/docs/desktop/addons/report-generation/automation/).