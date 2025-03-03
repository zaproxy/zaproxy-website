---
title: "ZAP Authentication Tests"
type: page
EditableContent: true
---

Testing ZAP authentication handling against a range of test and real world applications.

Columns:

* __Type__:
  * __stdbba__:	Standard [Browser Based Authentication](/docs/desktop/addons/authentication-helper/browser-auth/), just the login URL and credentials, no additional configuration
  * __bbaplus__:	[Browser Based Authentication](/docs/desktop/addons/authentication-helper/browser-auth/) with some additional configuration
  * __csa__:		[Client Script Authentication](/docs/desktop/addons/authentication-helper/client-script/), using a client side Zest script to authenticate
* __Auth__: Did ZAP succeed in authentication to this site? This is the key column
* __Username__: Did ZAP find the username field? Only applicable to Browser Based Auth
* __Password__:  Did ZAP find the password field? Only applicable to Browser Based Auth
* __Session Mgmt__: Did ZAP identify the session management method?
* __Verification__: Did ZAP identify a suitable verification URL?

{{< auth-results >}}

#### Configuration

| Config | Details |
| --- | --- |
| Frequency | On-demand |
| Scripts | https://github.com/zapbot/zap-mgmt-scripts/blob/master/scans/auth/ |
| Action | https://github.com/zapbot/zap-mgmt-scripts/blob/master/.github/workflows/auth-tests.yml | 

#### Settings

The latest [Nightly ZAP Docker image](https://github.com/zaproxy/zaproxy/pkgs/container/zaproxy) is run with the default settings against these apps with no exceptions.
