---
# This page was generated from the add-on.
title: Authentication Request Identification
type: userguide
weight: 1
---

# Authentication Request Identification

This [add-on](/docs/desktop/addons/authentication-helper/) includes a passive scan rule which attempts to identify authentication requests.  
It identifies authentication requests by the presence of commonly used username and password field names. It also uses commonly used URL segments to identify more likely authentication requests, and uses commonly used registration URL segments to ignore registration requests.


The rule will not attempt to identify very unusual authentication requests - automation is one of the end goals so false negatives
(missing unusual authentication requests) are more desirable than false positives (incorrectly identifying an authentication request).


If this rule identifies an authentication request that is part of the context that you have set to use the
[Auto-Detect Authentication Method](/docs/desktop/addons/authentication-helper/autodetect-auth/) then this rule will update the context to use the authentication method identified.


If an authentication request is not identified then check to make sure it is made to a site which is included in the context.  

If it is not then add the site to the context and authenticate again via your browser.


The 'Other Info' field is used to report a set of key-value pairs which can be easily parsed. The current keys supported are:

* userParam
* userValue
* passwordParam
* csrfToken

There can potentially be multiple csrfTokens.


The rule will currently identify:

* Form-based authentication requests
* JSON-based authentication requests

If this rule fails to identify one of the above types of authentication requests then you can raise an [issue](https://github.com/zaproxy/zaproxy/issues) with the complete request and response details (having obfuscated any sensitive information) and we will investigate it.


Latest code: [AuthenticationDetectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/authhelper/src/main/java/org/zaproxy/addon/authhelper/AuthenticationDetectionScanRule.java)
