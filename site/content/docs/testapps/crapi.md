---
title: "OWASP crAPI"
type: page
zap-auth: 3
maint: 2
---

### Overview

OWASP crAPI the “completely ridiculous API”.

It is open source, and maintained by OWASP and the community. It’s fairly well documented: 

* Home - https://owasp.org/www-project-crapi/
* Repo - https://github.com/OWASP/crAPI
* Docker - https://hub.docker.com/u/crapi

### Potential Pitfalls

While we are aware of at least one Third Party online instance you can never be sure how up-to-date or stable it is and will be in the future. The project makes Docker images available as well as a docker-compose for easy local usage.

### Authentication

You’ll need to create your own account.

> [!NOTE]
> Depending on your usage plan you may want to create two accounts. There are challenges which involve manipulating the details of another user.

For the purposes of this documentation the following account was created and used:
`user@example.com / Password123!`

> [!NOTE]
> If you register with example.com email adddress(es), you can access a web mail client for the "email" via port 8025, for example: http://localhost:8025/.

#### Browser Based Authentication

ZAP can successfully authenticate to this app using [Browser Based Authentication](/docs/desktop/addons/authentication-helper/browser-auth/) and will successfully identify the session handling and verification.

### Recommended Environment

```yaml
env:
  contexts:
  - name: crAPI
    urls:
    - http://localhost:8888
    includePaths:
    - http://localhost:8888.*
    excludePaths:
    - http://localhost:8888/reset-password
    - http://localhost:8888/identity/api/v2/user/reset-password
    authentication:
      method: browser
      parameters:
        loginPageUrl: http://localhost:8888
        loginPageWait: 3
        browserId: firefox-headless
        steps: []
      verification:
        method: poll
        loggedInRegex: \Q 200\E
        loggedOutRegex: \Q 401\E
        pollFrequency: 60
        pollUnits: requests
        pollUrl: http://localhost:8888/identity/api/v2/user/dashboard
        pollPostData: ""
        pollAdditionalHeaders:
        - header: content-type
          value: application/json
    sessionManagement:
      method: headers
      parameters:
        Authorization: "Bearer {%json:token%}"
    technology: {}
    structure: {}
    users:
    - name: user@example.com
      credentials:
        password: Password123!
        username: user@example.com
  parameters: {}
```

### Exploration

As crAPI is primarily meant to illustrate API vulnerabilities it makes sense to import its [OpenAPI definition](https://raw.githubusercontent.com/OWASP/crAPI/refs/heads/develop/openapi-spec/crapi-openapi-spec.json).

This can be accomplished manually or with an Automation Framework job such as:

```yaml
- type: openapi
  parameters:
    apiUrl: https://raw.githubusercontent.com/OWASP/crAPI/refs/heads/develop/openapi-spec/crapi-openapi-spec.json
    targetUrl: http://localhost:8888/
    context: crAPI
    user: user@example.com
```

### Crawling

crAPI’s web UI is fairly simple, the standard Spider is able to identify some additional URLs/functionality. If using the standard Spider it’s best to enable [Logout Avoidance](/docs/desktop/addons/spider/options/#logout-avoidance).

> [!NOTE]
> As of July 14th 2025 neither of the modern spiders effectively explores crAPI.
> * [AJAX Spider](/docs/desktop/addons/ajax-spider/)
> * [Client Spider](/docs/desktop/addons/client-side-integration/spider/)


If you decide to test either of the modern spiders consider enabling Logout Avoidance or adding exclusions for specific URLs/Elements.
- [AJAX Spider - Exclude Elements](/docs/desktop/addons/ajax-spider/context/#excluded-elements)
- [AJAX Spider - Options](/docs/desktop/addons/ajax-spider/options/)

```yaml
    excludedElements:
    - description: Logout Exclude
      element: span
      xpath: "/html/body/div[2]/div/div/ul/li[2]/span"
```

It may also make sense to exclude the Forgot Password functionality (in the environment above this is done as part of the Context configuration).
- `http://localhost:8888/reset-password`
- `http://localhost:8888/identity/api/v2/user/reset-password`

### Scanning

Although crAPI has a number of vulnerabilities, many of them can be very challenging for a DAST tool to identify.

The only significant vulnerabilities that we are aware of which ZAP should be able to identify but cannot (currently) are:
- The NoSQL Injection in the coupon validation functionality.
- The SSRF in the contact mechanic functionality.

