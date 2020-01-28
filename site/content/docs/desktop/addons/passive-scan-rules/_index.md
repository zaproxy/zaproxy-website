---
# This page was generated from the add-on.
title: Passive Scan Rules
type: userguide
weight: 1
cascade:
  addon:
    id: pscanrules
    version: 26.0.0
---

# Passive Scan Rules

The following release quality passive scan rules are included in this add-on:

## Application Errors

Check server responses for HTTP 500 - Internal Server Error type responses or those that contain a known error string.  
At HIGH Threshold don’t alert on HTTP 500 (but do for other error patterns).  
For Internal Server Error (HTTP 500) the Alert is set to Low risk and in other case it is set to Medium risk.

Latest code: [ApplicationErrorScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/ApplicationErrorScanner.java)

## Cache Control

Checks "Cache-Control" and "Pragma" response headers against general industry best practice settings for protection of sensitive content.  
At MEDIUM and HIGH thresholds only non-error or non-redirect text responses (excluding JavaScript) are considered.  
At LOW threshold all responses apart from images and CSS are considered including errors and redirects.

Latest code: [CacheControlScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/CacheControlScanner.java)

## Charset Mismatch

This check identifies responses where the HTTP Content-Type header declares a charset different from the charset defined by the body of the HTML or XML. When there's a charset mismatch between the HTTP header and content body Web browsers can be forced into an undesirable content-sniffing mode to determine the content's correct character set.

The scanner handles various conditions depending on the Threshold set for the scanner, as follows:

* All Thresholds:
    * Header Versus Meta Content-Type Charset - The declaration in the HTTP Content-Type header doesn't match what is declared in a META Content-Type tag.
    * Header Versus Meta Charset - The declaration in the HTTP Content-Type header doesn't match what is declared in a META Charset tag.
* Low Threshold:
    * Meta Content-Type Charset Missing - The response doesn't contain a META Content-Type declaration, which may overlook older clients.
    * Meta Charset Versus Meta Content-Type Charset - The response contains both a META Content-Type declaration and a META Charset declaration, and they don't match.

Further reference:  
<http://www.w3.org/TR/html401/charset.html#h-5.2.2>  
<http://www.w3.org/TR/html5/document-metadata.html#charset>

Latest code: [CharsetMismatchScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/CharsetMismatchScanner.java)

## Content Type Missing

Raises an alert if the response is lacking a Content-Type header or if the header exists but the value is empty.

Latest code: [ContentTypeMissingScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/ContentTypeMissingScanner.java)

## Cookie HttpOnly

Ensures that as cookies are set they are flagged HttpOnly. The HttpOnly flag indicates to browsers that the cookie being set should not be acted upon by client side script (such as JavaScript).

Latest code: [CookieHttpOnlyScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/CookieHttpOnlyScanner.java)

## Cookie - Loosely Scoped

Cookies can be scoped by domain or path. This check is only concerned with domain scope.The domain scope applied to a cookie determines which domains can access it. For example, a cookie can be scoped strictly to a subdomain e.g. www.nottrusted.com, or loosely scoped to a parent domain e.g. nottrusted.com. In the latter case, any subdomain of nottrusted.com can access the cookie. Loosely scoped cookies are common in mega-applications like google.com and live.com.

Latest code: [CookieLooselyScopedScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/CookieLooselyScopedScanner.java)

## Cookie Secure Flag

Looks for cookies set during HTTPS sessions, raises an alert for those that are set but do not include the secure flag. A cookie set with the secure flag will not be sent during a plain HTTP session.

Latest code: [CookieSecureFlagScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/CookieSecureFlagScanner.java)

## Cookie Without SameSite Attribute

This reports any cookies that do not have the SameSite attribute or that do not have a recognised valid value for that attribute.

Latest code: [CookieSameSiteScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/CookieSameSiteScanner.java)

## Cross Domain Script Inclusion

Validates whether or not scripts are included from domains other than the domain hosting the content. By looking at the "src" attributes of "script" tags in HTML responses.  
Allowed Cross-Domain scripts:

* Any script with a non-empty "integrity" attribute is ignored - the integrity value is not checked as this will be checked by the browser
* At MEDIUM and HIGH thresholds if a script URL falls within a context that also includes the URL of the base message no alerts will be raised.

Latest code: [CrossDomainScriptInclusionScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/CrossDomainScriptInclusionScanner.java)

## Cross Domain Misconfiguration

Passively scan responses for Cross Domain MisConfigurations, which relax the Same Origin Policy in the web browser, for instance.  
The current implementation looks at excessively permissive CORS headers.

Latest code: [CrossDomainMisconfiguration.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/CrossDomainMisconfiguration.java)

## CSP Scanner

The Content Security Policy (CSP) Scanner adds a passive scan rule which parses and analyzes CSP headers for potential misconfiguration or weakness. This scanner leverages Shape Security's [Salvation](https://github.com/shapesecurity/salvation) library to perform it's parsing and assessment of CSPs.

Latest code: [ContentSecurityPolicyScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/ContentSecurityPolicyScanner.java)

## CSRF Countermeasures

This scanner identifies "potential" vulnerabilities with the lack of known CSRF countermeasures in pages with forms.  
At HIGH alert threshold only scans messages which are in scope.  
Post 2.5.0 you can specify a comma separated list of identifiers in the `rules.csrf.ignorelist` parameter via the Options 'Rule configuration' panel. Any FORMs with a name or ID that matches one of these identifiers will be ignored when scanning for missing Anti-CSRF tokens. Only use this feature to ignore FORMs that you know are safe, for example search forms.

Latest code: [CSRFCountermeasures.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/CSRFCountermeasures.java)

## Header XSS Protection

Checks for the existence of and value/setting of the X-XSS-Protection header. This response header can be used to configure a user-agent's built-in reflective XSS protection.  
At MEDIUM and HIGH thresholds only non-error or non-redirect HTML responses are considered.  
At LOW threshold all text responses are considered including errors and redirects.

Latest code: [HeaderXssProtectionScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/HeaderXssProtectionScanner.java)

## Information Disclosure: Debug Errors

This passive scanner checks the content of web responses for known Debug Error message fragments. Access to such details may provide a malicious individual with means by which to further abuse the web site. They may also leak data not specifically meant for end user consumption.  
Note: Javascript responses are only assessed at LOW threshold.

Latest code: [InformationDisclosureDebugErrors.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/InformationDisclosureDebugErrors.java)

## Information Disclosure: In URL

Attempts to identify the existence of sensitive details within the visited URIs themselves (this may include parameters, document names, directory names, etc.).

Latest code: [InformationDisclosureInURL.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/InformationDisclosureInURL.java)

## Information Disclosure: Referrer

Identifies the existence of sensitive details within the the Referrer header field of HTTP requests (this may include parameters, document names, directory names, etc.).

Latest code: [InformationDisclosureReferrerScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/InformationDisclosureReferrerScanner.java)

## Information Disclosure: Suspicious Comments

Analyzes web content to identify comments which contain potentially sensitive details. Which may lead to further attack or exposure of unintended data.

Latest code: [InformationDisclosureSuspiciousComments.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/InformationDisclosureSuspiciousComments.java)

## Insecure Authentication

HTTP basic or digest authentication has been used over an unsecured connection. The credentials can be read and then reused by someone with access to the network.

Latest code: [InsecureAuthenticationScan.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/InsecureAuthenticationScan.java)

## Insecure JSF ViewState

The response at the following URL contains a ViewState value that has no cryptographic protections.

Latest code: [InsecureJSFViewStatePassiveScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/InsecureJSFViewStatePassiveScanner.java)

## Mixed Content

For content served via HTTPS analyse all the src attributes in the response looking for those sourced via plain HTTP.

Latest code: [MixedContentScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/MixedContentScanner.java)

## Private Address Disclosure

Checks the response content for inclusion of RFC 1918 IPv4 addresses as well as Amazon EC2 private hostnames (for example, ip-10-0-56-78). This information can give an attacker useful information about the IP address scheme of the internal network, and might be helpful for further attacks targeting internal systems.

This passive scanner may generate false positives in the case of larger dotted numeric strings,
such as vp09.02.51.10.01.09.16, where the latter 4 octets appear to be a RFC 1918 IPv4 address.
After review an analyst can mark such alerts as False Positives in ZAP. For handling during
repeated scans the "Context Alert Filters" add-on could be leveraged.

Latest code: [TestInfoPrivateAddressDisclosure.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/TestInfoPrivateAddressDisclosure.java)

## Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s)

This checks response headers for the presence of X-Powered-By details.

Latest code: [XPoweredByHeaderInfoLeakScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/XPoweredByHeaderInfoLeakScanner.java)

## Session Id in URL Rewrite

This scanner checks for the existence of session token type parameters being rewritten to the URL. To help reduce false positives the scanner checks the length of the token value, if the value of the parameter is not greater than 8 characters in length then the parameter is ignored (i.e.: survey?sId=5 would not be flagged as vulnerable).

Latest code: [TestInfoSessionIdURL.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/TestInfoSessionIdURL.java)

## Timestamp Disclosure

A timestamp was disclosed by the application/web server.

Latest code: [TimestampDisclosureScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/TimestampDisclosureScanner.java)

## Username Hash Found

If any context contains defined users this scanner checks all responses for the presence of hashed values representing those usernames.

**Note:** If the Custom Payloads addon is installed you can add your own Username strings (payloads) in the Custom Payloads options panel.
They will also be hashed and searched for in responses as they're passively scanned. Keep in mind that the greater the number of payloads the greater the
amount of time needed to passively scan. (The default payloads are "Admin" and "admin".)  

Discovery of any such value may represent an Insecure Direct Object Reference (IDOR) vulnerability. Alerts are only raised as informational items as further manual testing is required in order to confirm and assess impact.

Latest code: [UsernameIdorScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/UsernameIdorScanner.java)

## VIEWSTATE

Attempts to identify VIEWSTATE parameters and analyze said parameters for various best practices or protective measures such as:

* Those based on ASP.NET 1.0 and 1.1.
* VIEWSTATE Lacking signature.
* Split VIEWSTATE.
* VIEWSTATE containing email or IP patterns.

Latest code: [ViewstateScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/ViewstateScanner.java)

## X-Content-Type-Options

This scanner check for the Anti-MIME-Sniffing header X-Content-Type-Options and ensures it is set to 'nosniff'.  
At MEDIUM and HIGH thresholds this scanner does not alert on client or server error responses or redirects.  
At LOW threshold it will alert on all responses including errors and redirects.  

Latest code: [XContentTypeOptionsScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/XContentTypeOptionsScanner.java)

## X-Frame-Options Header Scanner

This scanner checks for the existence and validity of the X-Frame-Options header.  
At MEDIUM and HIGH thresholds this only looks at non-error or non-redirect HTML responses.  
At LOW threshold it looks at all text responses including errors and redirects.  
The following conditions may result in an alert:

* **X-Frame-Options Header Not Set:** If the X-Frame-Options header is missing from the response completely.
* **Multiple X-Frame-Options Header Entries:** When more than one X-Frame-Options header is detected on the response.
* **X-Frame-Options Defined via META (Non-compliant with Spec):** A "http-equiv" entry was found in the response that attempts to define X-Frame-Options, which is not supported by the specification.
* **X-Frame-Options Setting Malformed:** The header is present with no value, or the value is not as expected (i.e.: other than "DENY", "SAMEORIGIN", or "ALLOW-FROM").

By default no alerts will be raised in the response includes a Content-Security-Policy 'frame-ancestors' element as this take precedence over the X-Frame-Options header. However at LOW threshold the above issues will still be reported but at a LOW risk.

Latest code: [XFrameOptionScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/XFrameOptionScanner.java)

## X-AspNet-Version Response Header Scanner

This checks response headers for the presence of X-AspNet-Version/X-AspNetMvc-Version details.

Latest code: [XAspNetVersionScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/XAspNetVersionScanner.java)

## X-Debug-Token Information Leak

This checks response headers for the presence of X-Debug-Token and X-Debug-Token-Link details. Which indicates the use/exposure of Symfony's Profiler. Symfony's Profiler provides access to a significant amount of information of interest to malicious individuals and Security Testers.

Latest code: [XDebugTokenScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/XDebugTokenScanner.java)
