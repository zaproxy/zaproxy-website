---
# This page was generated from the add-on.
title: Active Scan Rules - Beta
type: userguide
weight: 1
cascade:
  addon:
    id: ascanrulesBeta
    version: 52.0.0
---

# Active Scan Rules - Beta

The following beta status active scan rules are included in this add-on:

## Backup File Disclosure {#id-10095}

Scans for commonly-named backup copies of files on the web server, which may reveal sensitive information.

Latest code: [BackupFileDisclosureScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/BackupFileDisclosureScanRule.java)

Alert ID: [10095](/docs/alerts/10095/).

## Cookie Slack Detector {#id-90027}

Tests cookies to detect if some have no effect on response size when omitted, especially cookies containing the name "session" or "userid".

Latest code: [SlackerCookieDetector.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SlackerCookieDetector.java)

Alert ID: [90027](/docs/alerts/90027/).

## CORS Header {#id-40040}

This rule attempts to identify CORS headers and also CORS misconfiguration. The CORS is considered as misconfigured when it allows all origins, origins with weaker protocols and null origin.  

Latest code: [CorsScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/CorsScanRule.java)

Alert ID: [40040](/docs/alerts/40040/).

## Cross-Domain Misconfiguration {#id-20016}

Checks if the web server is configured to allow Cross Domain access, from a malicious third party service, for instance. Currently checks for wildcards in Adobe's crossdomain.xml, and in SilverLight's clientaccesspolicy.xml.

Latest code: [CrossDomainScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/CrossDomainScanRule.java)

Alert ID: [20016](/docs/alerts/20016/).

## CSRF Token {#id-20012}

Scans HTML based messages for the existence of Anti-CSRF tokens.   
Alerts on requests which do not appear to contain Anti-CSRF tokens.  
At HIGH alert threshold only scans messages which are in scope.  
Post 2.5.0 you can specify a comma separated list of identifiers in the `rules.csrf.ignorelist` parameter via the Options 'Rule configuration' panel. Any FORMs with a name or ID that matches one of these identifiers will be ignored when scanning for missing Anti-CSRF tokens. Only use this feature to ignore FORMs that you know are safe, for example search forms.

Latest code: [CsrfTokenScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/CsrfTokenScanRule.java)

Alert ID: [20012](/docs/alerts/20012/).

## Exponential Entity Expansion (Billion Laughs Attack) {#id-40044}

This rule attempts to identify the "Billion Laughs" vulnerability in servers that accept XML or YAML files.

Latest code: [ExponentialEntityExpansionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/ExponentialEntityExpansionScanRule.java)

Alert ID: [40044](/docs/alerts/40044/).

## Expression Language Injection {#id-90025}

Checks if the web application is subject to Expression Language (EL) injection attacks, which occur when an application fails to sufficiently neutralize special elements that could modify the intended EL statement before it is executed.

Latest code: [ExpressionLanguageInjectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/ExpressionLanguageInjectionScanRule.java)

Alert ID: [90025](/docs/alerts/90025/).

## HTTP Only Site {#id-10106}

This active scan rule checks whether an HTTP site is served under HTTPS.

Latest code: [HttpOnlySiteScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/HttpOnlySiteScanRule.java)

Alert ID: [10106](/docs/alerts/10106/).

## HttPoxy - Proxy Header Misuse {#id-10107}

This active scan rule checks whether a site is using the HTTP Proxy header specified in the request.  
It sets up an HTTP proxy which listens to all interfaces on a randomly assigned free port. It then sends a series of requests to the target server with the HTTP Proxy header set to each of the available IP addresses and the port that it is listening on. If a request is received on the new port then the server is very likely to be vulnerable.  
**IMPORTANT** - the computer that ZAP is running on must accept incoming requests on arbitrary ports - if a firewall prevents incoming connections then this rule will not work.

Latest code: [HttPoxyScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/HttPoxyScanRule.java)

Alert ID: [10107](/docs/alerts/10107/).

## HTTPS Content Available via HTTP {#id-10047}

This active scan rule attempts to access content that was originally accessed via HTTPS (SSL/TLS) via HTTP.

Latest code: [HttpsAsHttpScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/HttpsAsHttpScanRule.java)

Alert ID: [10047](/docs/alerts/10047/).

## HTTP Parameter Pollution (HPP) {#id-20014}

Supplying duplicate or numerous HTTP parameters with the same name may cause an application or website to interpret values in unintended ways. By leveraging these effects, a malicious individual may be able to bypass input validation, trigger errors or modify internal variable values. There are difference in treatment of duplicate parameters impacting both clients (browsers) and servers.

Latest code: [HttpParameterPollutionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/HttpParameterPollutionScanRule.java)

Alert ID: [20014](/docs/alerts/20014/).

## Insecure HTTP Method {#id-90028}

Detects (and exploits, depending on the scan settings) known insecure HTTP methods enabled for the URL. It considers PUT/PATCH as insecure methods by default, but allows them if they return structured data like JSON or XML in response.

Latest code: [InsecureHttpMethodScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/InsecureHttpMethodScanRule.java)

Alert ID: [90028](/docs/alerts/90028/).

## Integer Overflow Error {#id-30003}

Looks for indicators of integer overflows in compiled code that causes the web server to crash. It does this by putting out multiple strings of integers designed to try and stimulate bad responses.

Latest code: [IntegerOverflowScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/IntegerOverflowScanRule.java)

Alert ID: [30003](/docs/alerts/30003/).

## Out of Band XSS {#id-40031}

This rule attempts to discover Out-of-band XSS vulnerabilities.

Latest code: [OutOfBandXssScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/OutOfBandXssScanRule.java)

Alert ID: [40031](/docs/alerts/40031/).

## Proxy Disclosure {#id-40025}

Attempts to detect and fingerprint proxy server(s). This information helps a potential attacker to determine:

* A list of targets for an attack against the application.
* Potential vulnerabilities on the proxy servers that service the application.
* The presence or absence of any proxy-based components that might cause attacks against the application to be detected, prevented, or mitigated.

Latest code: [ProxyDisclosureScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/ProxyDisclosureScanRule.java)

Alert ID: [40025](/docs/alerts/40025/).

## Relative Path Confusion {#id-10051}

Tests if the web server is configured to serve responses to ambiguous URLs in a manner that is likely to lead to confusion about the correct "relative path" for the URL. If resources (CSS, images, etc.) are references in the response using relative, rather than absolute URLs. In an attack, if the web browser parses the "cross-content" response in a permissive manner, or can be tricked into permissively parsing the "cross-content" response, using techniques such as framing, then the web browser may be fooled into interpreting HTML as CSS (or other content types), leading to an XSS vulnerability.

Latest code: [RelativePathConfusionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/RelativePathConfusionScanRule.java)

Alert ID: [10051](/docs/alerts/10051/).

## Session Fixation {#id-40013}

Session Fixation may be possible. If this issue occurs with a login URL (where the user authenticates themselves to the application), then the URL may be given by an attacker, along with a fixed session id, to a victim, in order to later assume the identity of the victim using the given session id. If the issue occurs with a non-login page, the URL and fixed session id may only be used by an attacker to track an unauthenticated user's actions. If the vulnerability occurs on a cookie field or a form field (POST parameter) rather than on a URL (GET) parameter, then some other vulnerability may also be required in order to set the cookie field on the victim's browser, to allow the vulnerability to be exploited.

Latest code: [SessionFixationScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SessionFixationScanRule.java)

Alert ID: [40013](/docs/alerts/40013/).

## ShellShock - CVE-2014-6271 {#id-10048}

This rule perform 2 attacks to detect servers vulnerable to CVE-2014-6271 aka ShellShock.  
The first is a simple reflected attack and the second is a time based attack.  

Post 2.5.0 you can change the length of time used for the attack by changing the `rules.common.sleep` parameter via the Options 'Rule configuration' panel.

Latest code: [ShellShockScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/ShellShockScanRule.java)

Alert ID: [10048](/docs/alerts/10048/).

## Source Code Disclosure - SVN {#id-42}

Uses Subversion source code repository metadata to scan for files containing source code on the web server.  
At LOW alert threshold the rule will require less evidence to identify potential code, which could result in more false positives.  

Latest code: [SourceCodeDisclosureSvnScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SourceCodeDisclosureSvnScanRule.java)

Alert ID: [42](/docs/alerts/42/).

## Source Code Disclosure - File Inclusion {#id-43}

Uses local file inclusion techniques to scan for files containing source code on the web server.

Latest code: [SourceCodeDisclosureFileInclusionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SourceCodeDisclosureFileInclusionScanRule.java)

Alert ID: [43](/docs/alerts/43/).

## Source Code Disclosure - Git {#id-41}

Uses Git source code repository metadata to scan for files containing source code on the web server.

Latest code: [SourceCodeDisclosureGitScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SourceCodeDisclosureGitScanRule.java)

Alert ID: [41](/docs/alerts/41/).

## Server Side Request Forgery {#id-40046}

This rule attempts to find Server Side Request Forgery vulnerabilities by injecting out-of-band payloads in request parameters.

Latest code: [SsrfScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SsrfScanRule.java)

Alert ID: [40046](/docs/alerts/40046/).

## Text4shell (CVE-2022-42889) {#id-40047}

This rule attempts to discover the Text4shell ([CVE-2022-42889](https://nvd.nist.gov/vuln/detail/CVE-2022-42889)) vulnerability. It relies on the OAST add-on to generate out-of-band payloads and verify DNS interactions.

Latest code: [Text4ShellScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/Text4ShellScanRule.java)

Alert ID: [40047](/docs/alerts/40047/).

## Username Enumeration {#id-40023}

It may be possible to enumerate usernames, based on differing HTTP responses when valid and invalid usernames are provided. This would greatly increase the probability of success of password brute-forcing attacks against the system. Note that false positives may sometimes be minimised by increasing the 'Attack Strength' Option in ZAP. Please manually check the 'Other Info' field to confirm if this is actually an issue. This rule is skipped if there are no contexts defined that use Form-based Authentication, and only runs against the URL identified as the login URL of a context.

Latest code: [UsernameEnumerationScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/UsernameEnumerationScanRule.java)

Alert ID: [40023](/docs/alerts/40023/).
