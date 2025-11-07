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

* Online: https://demo.testfire.net/
* Repo: https://github.com/HCL-TECH-SOFTWARE/AltoroJ

### Quick Start

New to ZAP and just want to quickly run ZAP against Testfire (AltoroJ)?

Just run these commands:

```bash
# Download the recommended plan using curl, or use any other suitable tool
curl -O https://raw.githubusercontent.com/zaproxy/community-scripts/refs/heads/main/other/af-plans/FullScanTestfireAuth.yaml

# Run ZAP using the stable Docker image, mapping the CWD so that Docker can access the file system and export the report
docker run -v $(pwd):/zap/wrk/:rw -t zaproxy/zap-stable zap.sh -cmd -autorun wrk/FullScanTestfireAuth.yaml
```

To run this command on Windows see the [relevant documentation](/docs/docker/about/#mounting-the-current-directory).

You will need to have Docker installed. If you do not want to use Docker then you can of course install ZAP locally.

It will create an HTML report in your CWD containing full details of all of the issues found.

For further details see [Results](#results] below.

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
    - http://demo.testfire.net
    includePaths:
    - https://demo.testfire.net.*
    authentication:
      method: browser
      parameters:
        loginPageUrl: https://demo.testfire.net/login.jsp
        loginPageWait: 2
        browserId: firefox
      verification:
        method: poll
        loggedInRegex: \Q 200 OK\E
        loggedOutRegex: \Q 302 Found\E
        pollFrequency: 60
        pollUnits: seconds
        pollUrl: https://demo.testfire.net/bank/main.jsp
        pollPostData: ""
    sessionManagement:
      method: headers
    users:
    - name: jsmith
      credentials:
        password: demo1234
        username: jsmith
```

> [!NOTE]
> There are no exclude paths added in the environment definition. Logout avoidance is used in the Traditional Spider job example below.
> doLogin is left included as it is impacted by a SQLi vulnerability.

### Crawling

Any of the ZAP Spiders can be used to crawl Testfire (AltoroJ).

For the [Traditional Spider](/docs/desktop/addons/spider/) we recommend the following configuration:

```yaml
- type: spider
  parameters:
    context: testfire
    user: jsmith
    url: https://demo.testfire.net
    logoutAvoidance: true
```

For the [AJAX Spider](/docs/desktop/addons/ajax-spider/) you need to exclude the logout link:

``` yaml
- type: spiderAjax
  parameters:
    context: testfire
    user: jsmith
    browserId: firefox-headless
    excludedElements:
    - description: Logout
      element: a
      text: Sign Off
```

### Scanning

We believe this is a definitive list of the vulnerabilities in Testfire (AltoroJ): https://help.hcl-software.com/appscan/ASoC/ja/PDF/Sample_DAST_Report.pdf

Not too surprisingly you will need to configure the [activeScan](/docs/desktop/addons/automation-framework/job-ascan/) job, and you will probably want to generate a [report](/docs/desktop/addons/report-generation/automation/).

### Results

| Vuln | Disposition |
|------|-------------|
| 🔴 [Cross Site Scripting (Reflected)](/docs/alerts/40012/) |  |
| 　➖ http://testfire.net/bank/customize.jsp | ✅ True Positive |
| 　➖ http://testfire.net/bank/queryxpath.jsp | ✅ True Positive |
| 　➖ http://testfire.net/search.jsp | ✅ True Positive |
| 　➖ http://testfire.net/sendFeedback | ✅ True Positive |
| 🔴 [SQL Injection](/docs/alerts/40018/) | |
| 　➖ http://testfire.net/bank/ccApply | ✅ True Positive |
| 　➖ https://testfire.net/doLogin | ✅ True Positive |
| 　➖ https://demo.testfire.net/bank/showTransactions | ❌➖ False Negative |
| 🔴 [External Redirect](/docs/alerts/20019-1/) | |
| 　➖ http://testfire.net/bank/customize.jsp | ✅ True Positive |
| 🔴 [PII Disclosure](/docs/alerts/10062) | |
| 　➖ https://testfire.net/bank/main.jsp | ✅ True Positive |
| 🟠 [Content Security Policy (CSP) Header Not Set](/docs/alerts/10038/) | ✅ True Positive |
| 🟠 [Absence of Anti-CSRF Tokens](/docs/alerts/10202/) | ✅ True Positive |
| 🟠 [Missing Anti-clickjacking Header](/docs/alerts/10020/) | ✅ True Positive |
| 🟠 [Relative Path Confusion](/docs/alerts/10051/) | ✅ True Positive |
| 🟠 [Secure Pages Include Mixed Content (Including Scripts)](/docs/alerts/10040/) | ✅ True Positive |
| 🟠 [Sub Resource Integrity Attribute Missing](/docs/alerts/90003) | ✅ True Positive |
| 🟠 [Insecure HTTP Method](/docs/alerts/90028/) | ❌➕ False Positive |
| 🟠 [Source Code Disclosure - SQL](/docs/alerts/10099/) | ❌➕ False Positive |

### API Scanning

Authentication is a bit different for the API.

You need to make a `POST` request to the `/api/login` with the credentials in JSON format: `{"username":"jsmith","password":"demo1234"}`. Which responds with a an Authorization token which then needs to be sent via the `Authorization` header on requests to other parts of the API. Session/token validity can be verified by making a `GET` request to `/api/login` then checking the response code (200 OK vs 401 Unauthorized).

#### Recommended Environment

```yaml
env:
  contexts:
  - name: testfire_api
    urls:
    - https://demo.testfire.net
    includePaths:
    - https://demo.testfire.net.*
    excludePaths:
    - https://demo.testfire.net/api/logout
    authentication:
      method: json
      parameters:
        loginRequestBody: "{\"username\":\"{%username%}\",\"password\":\"{%password%}\"\
          }"
        loginPageUrl: ""
        loginRequestUrl: https://demo.testfire.net/api/login
      verification:
        method: poll
        loggedInRegex: 200 OK
        loggedOutRegex: 401 Unauthorized
        pollFrequency: 60
        pollUnits: seconds
        pollUrl: https://demo.testfire.net/api/login
        pollPostData: ""
    sessionManagement:
      method: headers
      parameters:
        Authorization: "{%json:Authorization%}"
    technology: {}
    structure: {}
    users:
    - name: jsmith
      credentials:
        password: demo1234
        username: jsmith
  parameters: {}
  ```
  
#### OpenAPI Import

You can then use an OpenAPI Import job to explore the API prior to active scanning.

> [!NOTE]
> The traffic will be passively scanned during import.

```yaml
- type: openapi
  parameters:
    apiUrl: https://demo.testfire.net/swagger/properties.json
    context: testfire_api
    user: jsmith
```

#### Scanning

You can then active scan as you see fit.

> [!NOTE]
> If you have the [Scan Policies add-on](/docs/desktop/addons/scan-policies/) installed, this is a good opportunity to leverage the [API Policy](/docs/desktop/addons/scan-policies/policy-api/).

