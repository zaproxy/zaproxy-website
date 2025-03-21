---
# This page was generated from the add-on.
title: Authentication Report - JSON
type: userguide
---

# Authentication Report - JSON

This is a specialized report which details how authentication handling worked for the given site.


You must specify the site you want the report for otherwise no data will be generated.


This report is designed to be run after attempting to access at least one authenticated URL with the
authentication method set up correctly and with valid credentials.  

Session handling and verification can be left as "autodetect" - this report will detail how effective that was.

### Sections

| Section                          | ID                        |
|:---------------------------------|:--------------------------|
| Summary                          | summary                   |
| Automation Framework Environment | afenv                     |
| Statistics                       | statistics                |
| Diagnostics                      | diagnostics               |
| HTTP Messages for Diagnostics    | diagnosticsmessages       |
| Local Storage for Diagnostics    | diagnosticslocalstorage   |
| Screenshots for Diagnostics      | diagnosticsscreenshots    |
| Session Storage for Diagnostics  | diagnosticssessionstorage |
| Web Elements for Diagnostics     | diagnosticswebelements    |

### Summary

The following summary items are used:

| Key                   | Passed | Description                     |
|:----------------------|:-------|:--------------------------------|
| auth.summary.auth     | false  | Authentication failed           |
| auth.summary.auth     | true   | Authentication appeared to work |
| auth.summary.password | false  | Password field not identified   |
| auth.summary.password | true   | Password field identified       |
| auth.summary.session  | false  | Session Handling not identified |
| auth.summary.session  | true   | Session Handling identified     |
| auth.summary.username | false  | Username field not identified   |
| auth.summary.username | true   | Username field identified       |
| auth.summary.verif    | false  | Verification URL not identified |
| auth.summary.verif    | true   | Verification URL identified     |

### Automation Framework Environment

This is the [Automation Framework environment](/docs/desktop/addons/automation-framework/environment/) that can be used to recreate the context being tested.


If you have set the Session Management or Verification to "autodetect" and ZAP successfully detected them then the
environment will have been updated with the values that ZAP has detected.

### Statistics

These are all of the statistics that have been recorded by ZAP.  
For more details of what they mean see [https://www.zaproxy.org/docs/internal-statistics/](/docs/internal-statistics/)

### Diagnostics

The [Browser Based](/docs/desktop/addons/authentication-helper/browser-auth/) and [Client Script](/docs/desktop/addons/authentication-helper/client-script/) authentication methods allow to record diagnostic data, which can be included in the Authentication Report, to help diagnose authentication problems.


Diagnostic data can also be recorded with the [Authentication Tester Dialog](/docs/desktop/addons/authentication-helper/auth-tester/).


The report will contain an array of diagnostic objects, one for each recorded authentication attempt. The diagnostic objet has the authentication method used, the name of the context and user, and each step performed during the authentication.

```
	"diagnostics": [
		{
			"created": "0000-00-00T00:00:00.000000Z",
			"authenticationMethod": "Browser-based Authentication",
			"context": "Context Name",
			"user": "User Name",
			"steps": [
				{ … }
			]
		}
	]
```


Each step has at least the URL and the description, it can, optionally, contain also the input element that's being acted upon (e.g. username field being filled).

```
	{
		"created": "0000-00-00T00:00:00.000000Z",
		"url": "http://example.com/login/",
		"description": "Auto Fill Username",
		"webElement": {
			"formIndex": 1,
			"attributeType": "text",
			"attributeId": "email",
			"attributeName": "email",
			"attributeValue": "",
			"text": "",
			"displayed": true,
			"enabled": true
		}
		…
	}
```

More data can be included in each step depending on the additional diagnostics sections enabled for the report.

#### HTTP Messages for Diagnostics

When this section is enabled the step can, optionally, include HTTP messages that were sent during the step. Each message contains the request/response headers and bodies.

```
	"messages": [
		{
			"created": "0000-00-00T00:00:00.000000Z",
			"requestHeader": "GET http://example.com/login HTTP/1.1",
			"requestBody": "",
			"responseHeader": "HTTP/1.1 200 OK",
			"responseBody": ""
		}
	]
```

#### Local Storage for Diagnostics

When this section is enabled the step can, optionally, include the browser's local storage.

```
	"localStorage": [
		{
			"created": "0000-00-00T00:00:00.000000Z",
			"key": "key",
			"value": "value"
		}
	]
```

#### Screenshots for Diagnostics

When this section is enabled the step can, optionally, include a screenshot of the page with the image data Base64 encoded.

```
	"screenshot": "…"
```

#### Session Storage for Diagnostics

When this section is enabled the step can, optionally, include the browser's session storage.

```
	"sessionStorage": [
		{
			"created": "0000-00-00T00:00:00.000000Z",
			"key": "key",
			"value": "value"
		}
	]
```

#### Web Elements for Diagnostics

When this section is enabled the step can, optionally, include all the input elements present in the page.

```
	"webElements": [
		{
			"formIndex": 0,
			"attributeType": "text",
			"attributeId": "id",
			"attributeName": "name",
			"attributeValue": "",
			"text": "",
			"displayed": true,
			"enabled": true
		}
	]
```

### Sample

```
{
	"@programName": "ZAP",
	"@version": "Dev Build",
	"@generated": "Mon, 10 Feb 2025 17:27:23",
	"site":  "http:\/\/localhost:9091"
	,"summaryItems": [
		{
			"description": "Username field identified",
			"passed": true,
			"key": "auth.summary.username"
		},
		{
			"description": "Password field identified",
			"passed": true,
			"key": "auth.summary.password"
		},
		{
			"description": "Session Handling identified",
			"passed": true,
			"key": "auth.summary.session"
		},
		{
			"description": "Verification URL identified",
			"passed": true,
			"key": "auth.summary.verif"
		}
	]
	,"afEnv": "env:\n  contexts:\n  - name: simple-json-bearer-cookie\n    urls:\n    - http:\/\/localhost:9091\/auth\/simple-json-bearer-cookie\n    includePaths:\n    - http:\/\/localhost:9091\/auth\/simple-json-bearer-cookie.*\n    authentication:\n      method: browser\n      parameters:\n        loginPageUrl: http:\/\/localhost:9091\/auth\/simple-json-bearer-cookie\/\n        loginPageWait: 5\n        browserId: firefox-headless\n        steps: []\n      verification:\n        method: poll\n        loggedInRegex: \\Q 200 OK\\E\n        loggedOutRegex: \\Q 403 Forbidden\\E\n        pollFrequency: 0\n        pollUnits: seconds\n        pollUrl: http:\/\/localhost:9091\/auth\/simple-json-bearer-cookie\/user\n        pollPostData: \"\"\n    sessionManagement:\n      method: headers\n      parameters:\n        Authorization: \"Bearer {%json:accesstoken%}\"\n        Cookie: \"token={%json:accesstoken%}\"\n    technology: {}\n    structure: {}\n    users:\n    - name: test\n      credentials:\n        password: password123\n        username: test@test.com\n  parameters: {}\n"
	,"statistics": [
		{
			"key": "stats.auth.browser.foundfields",
			"scope": "site",
			"value": 1
		},
		{
			"key": "stats.auth.browser.passed",
			"scope": "site",
			"value": 1
		},
		{
			"key": "stats.auth.configure.session.header",
			"scope": "global",
			"value": 1
		},
		{
			"key": "stats.auth.configure.verification",
			"scope": "global",
			"value": 1
		},
		{
			"key": "stats.auth.detect.auth.json",
			"scope": "global",
			"value": 5
		},
		{
			"key": "stats.auth.detect.session.accesstoken",
			"scope": "global",
			"value": 5
		},
		{
			"key": "stats.auth.detect.session.authorization",
			"scope": "global",
			"value": 1
		},
		{
			"key": "stats.auth.detect.session.token",
			"scope": "global",
			"value": 7
		},
		{
			"key": "stats.auth.session.set.header",
			"scope": "global",
			"value": 20
		},
		{
			"key": "stats.auth.sessiontoken.accesstoken",
			"scope": "site",
			"value": 9
		},
		{
			"key": "stats.auth.sessiontoken.token",
			"scope": "site",
			"value": 6
		},
		{
			"key": "stats.auth.sessiontokens.max",
			"scope": "global",
			"value": 2
		},
		{
			"key": "stats.auth.state.loggedin",
			"scope": "site",
			"value": 2
		},
		{
			"key": "stats.auth.success",
			"scope": "site",
			"value": 1
		}
	]
}
```
