---
# This page was generated from the add-on.
title: Passive Scan Rules
type: userguide
weight: 1
cascade:
  addon:
    id: pscanrules
    version: 49.0.0
---

# Passive Scan Rules

## General Configuration

### Trusted Domains

You can specify a comma separated list of URL regex patterns using the `rules.domains.trusted` parameter via the Options 'Rule configuration' panel. Any link URL that matches one of these patterns will be considered to be in a trusted domain and will therefore not be reported. Following rules supports **Trusted Domains** :

* Cross Domain Script Inclusion
* Reverse Tabnabbing

*** ** * ** ***

The following release status passive scan rules are included in this add-on:

## Anti-clickjacking Header

This scan rule checks for the existence and validity of the X-Frame-Options header, or Content-Security-Policy 'frame-ancestors' directive.  
At MEDIUM and HIGH thresholds this only looks at non-error or non-redirect HTML responses.  
At LOW threshold it looks at all text responses including errors and redirects.  
The following conditions may result in an alert:

* **Missing Anti-clickjacking Header:** If the X-Frame-Options header is missing from the response completely.
* **Multiple X-Frame-Options Header Entries:** When more than one X-Frame-Options header is detected on the response.
* **X-Frame-Options Defined via META (Non-compliant with Spec):** A "http-equiv" entry was found in the response that attempts to define X-Frame-Options, which is not supported by the specification.
* **X-Frame-Options Setting Malformed:** The header is present with no value, or the value is not as expected (i.e.: other than "DENY", or "SAMEORIGIN").

By default no alerts will be raised in the response includes a Content-Security-Policy 'frame-ancestors' element as this take precedence over the X-Frame-Options header. However at LOW threshold the above issues will still be reported but at a LOW risk.

Latest code: [AntiClickjackingScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/AntiClickjackingScanRule.java)

## Application Errors

Check server responses for HTTP 500 - Internal Server Error type responses or those that contain a known error string.   
**Note:** Matches made within script blocks or files are against the entire content not only comments.  
At HIGH Threshold don’t alert on HTTP 500 (but do for other error patterns). Also, such known error strings are much less likely to be relevant in static pages like JS / CSS so these files are only scanned at LOW threshold.  
For Internal Server Error (HTTP 500) the Alert is set to Low risk and in other case it is set to Medium risk.

**Note:** If the Custom Payloads addon is installed you can add your own Application Error strings (payloads) in the Custom Payloads options panel.
They will also be searched for in responses as they're passively scanned. Keep in mind that the greater the number of payloads the greater the
amount of time needed to passively scan.

It is also possible to add patterns to the `xml/application_errors.xml` file in ZAP's user directory.  

Latest code: [ApplicationErrorScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/ApplicationErrorScanRule.java)

## Big Redirect Detected (Potential Sensitive Information Leak)

This check predicts the size of various redirect type responses and generates an alert if the response is greater than the predicted size. A large redirect response may indicate that although a redirect has taken place the page actually contained content (which may reveal sensitive information, PII, etc.).

Latest code: [BigRedirectsScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/BigRedirectsScanRule.java)

## Cache Control

Checks "Cache-Control" response headers against general industry best practice settings for protection of sensitive content.  
At MEDIUM and HIGH thresholds only non-error or non-redirect text responses (excluding JavaScript and CSS) are considered.  
At LOW threshold all responses are considered including errors and redirects.

Latest code: [CacheControlScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/CacheControlScanRule.java)

## Charset Mismatch

This check identifies responses where the HTTP Content-Type header declares a charset different from the charset defined by the body of the HTML or XML. When there's a charset mismatch between the HTTP header and content body Web browsers can be forced into an undesirable content-sniffing mode to determine the content's correct character set.

The scan rule handles various conditions depending on the Threshold set for the rule, as follows:

* All Thresholds:
    * Header Versus Meta Content-Type Charset - The declaration in the HTTP Content-Type header doesn't match what is declared in a META Content-Type tag.
    * Header Versus Meta Charset - The declaration in the HTTP Content-Type header doesn't match what is declared in a META Charset tag.
* Low Threshold:
    * Meta Content-Type Charset Missing - The response doesn't contain a META Content-Type declaration, which may overlook older clients.
    * Meta Charset Versus Meta Content-Type Charset - The response contains both a META Content-Type declaration and a META Charset declaration, and they don't match.

Further reference:  
<http://www.w3.org/TR/html401/charset.html#h-5.2.2>  
<http://www.w3.org/TR/html5/document-metadata.html#charset>

Latest code: [CharsetMismatchScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/CharsetMismatchScanRule.java)

## Content Security Policy (CSP) Header Not Set

This checks HTML response headers for the presence of a Content Security Policy header, or the response body for CSP specified via META tag.  
By default this rule checks for the presence of the "Content-Security-Policy", "X-Content-Security-Policy", and "X-WebKit-CSP" headers. Redirects and non-HTML responses are ignored except at the Low threshold.

If a "Content-Security-Policy" header is not found, an alert is raised.

If an "X-Content-Security-Policy" or "X-WebKit-CSP" header is found, an INFO alert is raised. This may represent an outdated enforcement implementation.

If a "Content-Security-Policy-Report-Only" header is found on a response an INFO alert is raised. This may represent an enforcement effort
that is actively being refined or developed, or one which is only partially implemented.

Note: This rule does not perform any actual analysis of the specified policy, for that please ensure the CSP scan rule is enabled.

Latest code: [ContentSecurityPolicyMissingScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/ContentSecurityPolicyMissingScanRule.java)

## Content Type Missing

Raises an alert if the response is lacking a Content-Type header or if the header exists but the value is empty.

Latest code: [ContentTypeMissingScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/ContentTypeMissingScanRule.java)

## Cookie HttpOnly

Ensures that as cookies are set they are flagged HttpOnly. The HttpOnly flag indicates to browsers that the cookie being set should not be acted upon by client side script (such as JavaScript).

Latest code: [CookieHttpOnlyScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/CookieHttpOnlyScanRule.java)

## Cookie - Loosely Scoped

Cookies can be scoped by domain or path. This check is only concerned with domain scope.The domain scope applied to a cookie determines which domains can access it. For example, a cookie can be scoped strictly to a subdomain e.g. `www.nottrusted.com`, or loosely scoped to a parent domain e.g. `nottrusted.com`. In the latter case, any subdomain of `nottrusted.com` can access the cookie. Loosely scoped cookies are common in mega-applications like `google.com` and `live.com`.

Latest code: [CookieLooselyScopedScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/CookieLooselyScopedScanRule.java)

## Cookie Poisoning

This check looks at user-supplied input in query string parameters and POST data to identify where cookie parameters might be controlled. This is called a cookie poisoning attack, and becomes exploitable when an attacker can manipulate the cookie in various ways. In some cases this will not be exploitable, however, allowing URL parameters to set cookie values is generally considered a bug.

Latest code: [UserControlledCookieScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/UserControlledCookieScanRule.java)

## Cookie Secure Flag

Looks for cookies set during HTTPS sessions, raises an alert for those that are set but do not include the secure flag. A cookie set with the secure flag will not be sent during a plain HTTP session.

Latest code: [CookieSecureFlagScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/CookieSecureFlagScanRule.java)

## Cookie Without SameSite Attribute

This reports any cookies that:

* do not have the SameSite attribute
* have the attribute set to "None" (ignored at HIGH Threshold)
* do not have a recognised valid value for that attribute

Latest code: [CookieSameSiteScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/CookieSameSiteScanRule.java)

## Cross Domain Script Inclusion

Validates whether or not scripts are included from domains other than the domain hosting the content. By looking at the "src" attributes of "script" tags in HTML responses.  
Allowed Cross-Domain scripts:

* Any script with a non-empty "integrity" attribute is ignored - the integrity value is not checked as this will be checked by the browser
* At MEDIUM and HIGH thresholds if a script URL falls within a context that also includes the URL of the base message no alerts will be raised.
* This rule supports **Trusted Domains**, check "General Configuration" for more information.

Latest code: [CrossDomainScriptInclusionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/CrossDomainScriptInclusionScanRule.java)

## Cross Domain Misconfiguration

Passively scan responses for Cross Domain MisConfigurations, which relax the Same Origin Policy in the web browser, for instance.  
The current implementation looks at excessively permissive CORS headers.

Latest code: [CrossDomainMisconfigurationScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/CrossDomainMisconfigurationScanRule.java)

## CSP (Content Security Policy)

The Content Security Policy (CSP) passive scan rule parses and analyzes CSP headers and META definitions for potential misconfiguration or weakness. This rule leverages Shape Security's [Salvation](https://github.com/shapesecurity/salvation) library to perform it's parsing and assessment of CSPs.

If a response has multiple CSPs they are analyzed individually, as there is no sure way to intersect/merge the policies and further different browsers have varying levels of CSP support and enforcement.

Latest code: [ContentSecurityPolicyScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/ContentSecurityPolicyScanRule.java)

## CSRF Countermeasures

This rule identifies "potential" vulnerabilities with the lack of known CSRF countermeasures in pages with forms.  
At HIGH alert threshold only scans messages which are in scope.  
Post 2.5.0 you can specify a comma separated list of identifiers in the `rules.csrf.ignorelist` parameter via the Options 'Rule configuration' panel. Any FORMs with a name or ID that matches one of these identifiers will be ignored when scanning for missing Anti-CSRF tokens. Only use this feature to ignore FORMs that you know are safe, for example search forms. Form element names are sorted and de-duplicated when they are printed in the Zap Report.

Latest code: [CsrfCountermeasuresScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/CsrfCountermeasuresScanRule.java)

## Directory Browsing

Passively scans responses for signatures that are indicative that Directory Browsing is possible.

Latest code: [DirectoryBrowsingScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/DirectoryBrowsingScanRule.java)

## Hash Disclosure

Passively scans for password hashes disclosed by the web server.   
Various formats are including, including some formats such as MD4, MD5, and SHA\*, which are sometimes used for purposes other than to contain password hashes.   
**Note:** This scan rule will only analyze JavaScript responses on LOW Threshold.

Latest code: [HashDisclosureScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/HashDisclosureScanRule.java)

## Heartbleed OpenSSL Vulnerability (Indicative)

Passively scans for HTTP header responses that may indicate that the server is vulnerable to the critical HeartBleed OpenSSL vulnerability.

Latest code: [HeartBleedScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/HeartBleedScanRule.java)

## HTTP Server Response Header

This checks response headers for the presence of a server header that contains version details. At LOW Threshold will raise an alert based on presence of the header field whether or not a version string is detected.

Latest code: [ServerHeaderInfoLeakScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/ServerHeaderInfoLeakScanRule.java)

## HTTP to HTTPS Insecure Transition in Form Post

This check looks for insecure HTTP pages that host HTTPS forms. The issue is that an insecure HTTP page can easily be hijacked through MITM and the secure HTTPS form can be replaced or spoofed.

Latest code: [InsecureFormLoadScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/InsecureFormLoadScanRule.java)

## HTTPS to HTTP Insecure Transition in Form Post

This check identifies secure HTTPS pages that host insecure HTTP forms. The issue is that a secure page is transitioning to an insecure page when data is uploaded through a form. The user may think they're submitting data to a secure page when in fact they are not.

Latest code: [InsecureFormPostScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/InsecureFormPostScanRule.java)

## Information Disclosure: Debug Errors

This passive scan rule checks the content of web responses for known Debug Error message fragments. Access to such details may provide a malicious individual with means by which to further abuse the web site. They may also leak data not specifically meant for end user consumption.  
Note: Javascript responses are only assessed at LOW threshold.

Latest code: [InformationDisclosureDebugErrorsScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/InformationDisclosureDebugErrorsScanRule.java)

## Information Disclosure: In URL

Attempts to identify the existence of sensitive details within the visited URIs themselves (this may include parameters, document names, directory names, etc.).

Latest code: [InformationDisclosureInUrlScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/InformationDisclosureInUrlScanRule.java)

## Information Disclosure: Referrer

Identifies the existence of sensitive details within the Referrer header field of HTTP requests (this may include parameters, document names, directory names, etc.).

Note: In the case of suspected credit card identifiers in the Referrer value, the potential credit card numbers are looked up against a Bank Identification
Number List (BINList). If a match is found the alert is raised at High confidence and additional details are added to the 'Other Information' field in the alert,
otherwise the alerts will have Medium confidence.
See: [binlist-data](https://github.com/iannuttall/binlist-data) for more information.

Latest code: [InformationDisclosureReferrerScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/InformationDisclosureReferrerScanRule.java)

## Information Disclosure: Suspicious Comments

Analyzes web content to identify comments which contain potentially sensitive details. Which may lead to further attack or exposure of unintended data.

**Note:** The strings to look for can be extended by using the Custom Payloads addon.

Latest code: [InformationDisclosureSuspiciousCommentsScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/InformationDisclosureSuspiciousCommentsScanRule.java)

## Insecure Authentication

HTTP basic or digest authentication has been used over an unsecured connection. The credentials can be read and then reused by someone with access to the network.

Latest code: [InsecureAuthenticationScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/InsecureAuthenticationScanRule.java)

## Insecure JSF ViewState

The response contains a Java Server Faces (JSF) ViewState value that has no cryptographic protections.

Latest code: [InsecureJsfViewStatePassiveScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/InsecureJsfViewStatePassiveScanRule.java)

## Mixed Content

For content served via HTTPS analyse all the src attributes in the response looking for those sourced via plain HTTP.

Latest code: [MixedContentScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/MixedContentScanRule.java)

## Modern Web Application

This raises an informational alert if a site appears to be a modern web application.  
It does not indicate any potential vulnerabilities but it could indicate that the ajax spider might be more effective at exploring this site compared to the traditional spider.

Latest code: [ModernAppDetectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/ModernAppDetectionScanRule.java)

## Open Redirect

This check looks at user-supplied input in query string parameters and POST data to identify where open redirects might be possible. Open redirects occur when an application allows user-supplied input (e.g. http://nottrusted.com) to control an offsite redirect. This is generally a pretty accurate way to find where 301 or 302 redirects could be exploited by spammers or phishing attacks.

Latest code: [UserControlledOpenRedirectScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/UserControlledOpenRedirectScanRule.java)

## PII Disclosure

PII is information like credit card number, SSN etc. This check currently reports only numbers which match credit card numbers and pass Luhn checksum, which gives high confidence, that this is a credit card number (images and CSS are ignored).   
At MEDIUM and HIGH threshold it attempts to use three characters of context on each side of potential matches to exclude matches within decimal like content. At LOW threshold, alerts will be raised for such matches.

PDFs are only evaluated at LOW threshold.

Note: In the case of suspected credit card values, the potential credit card numbers are looked up against a Bank Identification Number List
(BINList). If a match is found the alert is raised at High confidence and additional details are added to the 'Other Information' field in the
alert, otherwise the alerts will have Medium confidence.
See: [binlist-data](https://github.com/iannuttall/binlist-data) for more information.

Latest code: [PiiScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/PiiScanRule.java)

## Private Address Disclosure

Checks the response content for inclusion of RFC 1918 IPv4 addresses as well as Amazon EC2 private hostnames (for example, ip-10-0-56-78). This information can give an attacker useful information about the IP address scheme of the internal network, and might be helpful for further attacks targeting internal systems.

This passive scan rule may generate false positives in the case of larger dotted numeric strings,
such as vp09.02.51.10.01.09.16, where the latter 4 octets appear to be a RFC 1918 IPv4 address.
After review an analyst can mark such alerts as False Positives in ZAP. For handling during
repeated scans the "Context Alert Filters" add-on could be leveraged.

Latest code: [InfoPrivateAddressDisclosureScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/InfoPrivateAddressDisclosureScanRule.java)

## Retrieved from Cache

This scan rule detects content that has been served from a shared cache.

Latest code: [RetrievedFromCacheScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/RetrievedFromCacheScanRule.java)

## Reverse Tabnabbing

This checks to see if any links use a target attribute using "opener" keyword in the "rel" attribute, as this may allow target pages to take over the page that opens them.  
By default this rule will ignore all links that are in the same context as the page. At the LOW threshold it will only ignore links that are on the same host.  
At HIGH threshold it will only report links that use the "_blank" target.  
This rule supports **Trusted Domains** , check "General Configuration" for more information.

Latest code: [LinkTargetScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/LinkTargetScanRule.java)

## Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s)

This checks response headers for the presence of X-Powered-By details.

Latest code: [XPoweredByHeaderInfoLeakScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/XPoweredByHeaderInfoLeakScanRule.java)

## Session ID in URL Rewrite

This scan rule checks for the existence of session token type parameters being rewritten to the URL. To help reduce false positives the rule checks the length of the token value, if the value of the parameter is not greater than 8 characters in length then the parameter is ignored (i.e.: survey?sId=5 would not be flagged as vulnerable).

Latest code: [InfoSessionIdUrlScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/InfoSessionIdUrlScanRule.java)

## Strict Transport Security Header

This rule checks HTTPS responses for the presence of a HTTP Strict Transport Security (HSTS) header and tests for various implementation concerns, alerting if they're found. Alerts generated:

* **Strict-Transport-Security Header Not Set:** If the response is HTTPS and the header is completely missing.
* **Strict-Transport-Security Disabled:** If the response is HTTPS and the max-age value is set to zero, thus resetting the browser's HSTS information for the site.
* **Strict-Transport-Security Multiple Header Entries (Non-compliant with Spec):** If the response is HTTPS and there is more than one HSTS header on the response.
* **Strict-Transport-Security Missing Max-Age (Non-compliant with Spec):** If the response is HTTPS, a HSTS header is specified but the max-age value does not contain a number.
* **Strict-Transport-Security Defined via META (Non-compliant with Spec):** If the response body includes a META tag which attempts to define HSTS.
* **Strict-Transport-Security Header on Plain HTTP Response:** If the response is HTTP and the HSTS header is present.
* **Strict-Transport-Security Max-Age Malformed (Non-compliant with Spec):** If the response is HTTPS and the HSTS header is present, but there are quotes preceding the max-age directive (quotes are allowed around the max-age value, but not around the directive itself).
* **Strict-Transport-Security Malformed Content (Non-compliant with Spec):** If the response is HTTPS and a HSTS header is present, but there is some unexpected content (such as curly quotes). The expectation is that the content be printable ASCII.

Redirects to HTTPS URLs on the same domain will only be reported at Low threshold.

Latest code: [StrictTransportSecurityScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/StrictTransportSecurityScanRule.java)

## Timestamp Disclosure

A timestamp was disclosed by the application/web server.  
At HIGH threshold this rule does not alert on potential timestamps that are not within a range of plus or minus one year.  
At MEDIUM threshold this rule does not alert on potential timestamps beyond 10 years.  
At all thresholds, this rule will not alert on timestamps beyond the Y2038 epoch edge.  

Latest code: [TimestampDisclosureScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/TimestampDisclosureScanRule.java)

## User Controllable Charset

This check looks at user-supplied input in query string parameters and POST data to identify where Content-Type or meta tag charset declarations might be user-controlled. Such charset declarations should always be declared by the application. If an attacker can control the response charset, they could manipulate the HTML to perform XSS or other attacks.

Latest code: [UserControlledCharsetScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/UserControlledCharsetScanRule.java)

## User Controllable HTML Element Attribute (Potential XSS)

This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.

Latest code: [UserControlledHTMLAttributesScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/UserControlledHTMLAttributesScanRule.java)

## User Controllable Javascript Event (XSS)

This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.

Latest code: [UserControlledJavascriptEventScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/UserControlledJavascriptEventScanRule.java)

## Username Hash Found

If any context contains defined users this scan rule checks all responses for the presence of hashed values representing those usernames.

**Note:** If the Custom Payloads addon is installed you can add your own Username strings (payloads) in the Custom Payloads options panel.
They will also be hashed and searched for in responses as they're passively scanned. Keep in mind that the greater the number of payloads the greater the
amount of time needed to passively scan. (The default payloads are "Admin" and "admin".)  

Discovery of any such value may represent an Insecure Direct Object Reference (IDOR) vulnerability. Alerts are only raised as informational items as further manual testing is required in order to confirm and assess impact.

Latest code: [UsernameIdorScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/UsernameIdorScanRule.java)

## VIEWSTATE

Attempts to identify VIEWSTATE parameters and analyze said parameters for various best practices or protective measures such as:

* Those based on ASP.NET 1.0 and 1.1.
* VIEWSTATE Lacking signature.
* Split VIEWSTATE.
* VIEWSTATE containing email or IP patterns.

The "Viewstate without MAC Signature (Unsure)" alert will only be raised at LOW threshold.

Latest code: [ViewstateScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/ViewstateScanRule.java)

## X-AspNet-Version Response Header

This checks response headers for the presence of X-AspNet-Version/X-AspNetMvc-Version details.

Latest code: [XAspNetVersionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/XAspNetVersionScanRule.java)

## X-Backend-Server Header Information Leak

This checks response headers for the presence of X-Backend-Server details.

Latest code: [XBackendServerInformationLeak.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/XBackendServerInformationLeak.java)

## X-ChromeLogger-Data Header Information Leak

This checks response headers for the presence of X-ChromeLogger-Data or X-ChromePhp-Data details.

Latest code: [XChromeLoggerDataInfoLeakScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/XChromeLoggerDataInfoLeakScanRule.java)

## X-Content-Type-Options

This scan rule check for the Anti-MIME-Sniffing header X-Content-Type-Options and ensures it is set to 'nosniff'.  
At MEDIUM and HIGH thresholds this rule does not alert on client or server error responses or redirects.  
At LOW threshold it will alert on all responses including errors and redirects.  

Latest code: [XContentTypeOptionsScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/XContentTypeOptionsScanRule.java)

## X-Debug-Token Information Leak

This checks response headers for the presence of X-Debug-Token and X-Debug-Token-Link details. Which indicates the use/exposure of Symfony's Profiler. Symfony's Profiler provides access to a significant amount of information of interest to malicious individuals and Security Testers.

Latest code: [XDebugTokenScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrules/src/main/java/org/zaproxy/zap/extension/pscanrules/XDebugTokenScanRule.java)
