---
# This page was generated from the add-on.
title: Session Management Identification
type: userguide
weight: 4
---

# Session Management Identification

This [add-on](/docs/desktop/addons/authentication-helper/) includes a passive scan rule which attempts to identify session management methods.  
It identifies session management methods by the presence of commonly used session management identifiers and any values specified in Authorization request headers.


The rule will not attempt to identify very unusual session management methods - automation is one of the end goals so false negatives
(missing unusual session management methods) are more desirable than false positives (incorrectly identifying a session management method).


If this rule identifies a session management method that is part of the context that you have set to use the
[Auto-Detect Session Management Method](/docs/desktop/addons/authentication-helper/autodetect-session/) then this rule will update the context to use the session management method identified.


If a session management method is not identified then check to make sure it is made to a site which is included in the context.  

If it is not then add the site to the context and authenticate again via your browser.


The 'Other Info' field is used to report the set of [Header Based Session Management](/docs/desktop/addons/authentication-helper/session-header/)
tokens that need to be specified.


The rule will currently identify:

* Header-based session management methods

If this rule fails to identify one of the above method then you can raise an [issue](https://github.com/zaproxy/zaproxy/issues) with the complete request and response details (having obfuscated any sensitive information) and we will investigate it.


Latest code: [SessionDetectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/authhelper/src/main/java/org/zaproxy/addon/authhelper/SessionDetectionScanRule.java)
