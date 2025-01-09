---
# This page was generated from the add-on.
title: Verification Request Identification
type: userguide
weight: 7
---

# Verification Request Identification

This [add-on](/docs/desktop/addons/authentication-helper/) includes a passive scan rule which attempts to identify Verification requests.  
Verification requests are the requests that ZAP uses to tell if a session is still valid.


Unlike the other identification scan rules in this add-on, this rule will only raise alerts if you have indicated that you want to use
verification auto-detection for a specific context.
Due to the way the ZAP 2.12 core works it is not currently possible to add a new Verification Method Type dynamically.
Instead you will need to:

* Set the Session Management Method to [Auto-Detect Session Management Method](/docs/desktop/addons/authentication-helper/autodetect-session/)
* Set the Verification Strategy to "Poll every Request or Response"
* Not specify a URL to poll

In 2.13+ (and the latest weeklies) it will be possible to set the verification strategy to "Auto-Detect".


The rule works by identifying requests that behave differently when a valid session management token is supplied,
but also behave consistently when a token is supplied and when one is not supplied.


Responses which contain the user name are preferred - this can be the name given to the user in ZAP or the username
specified in the credentials.


Unusually for a passive scan rule, this rule actually makes requests rather than just observing them.
It needs to do this in order to identify which requests act differently when performed with and without a valid session token.
It will only do that if you have enabled it as above.


If the rule identifies a Verification request for a context that does not have one,
or a request that is determined to be 'better' that the currently identified request then the context will be updated.


If this rule fails to identify a suitable request for your application then you can raise an
[issue](https://github.com/zaproxy/zaproxy/issues) with the complete request and response details
(having obfuscated any sensitive information) and we will investigate it.


Latest code: [VerificationDetectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/authhelper/src/main/java/org/zaproxy/addon/authhelper/VerificationDetectionScanRule.java)
