---
# This page was generated from the add-on.
title: Active Scan Rules - Beta
type: userguide
weight: 1
cascade:
  addon:
    id: ascanrulesBeta
    version: 45.0.0
---

# Active Scan Rules - Beta

The following beta status active scan rules are included in this add-on:

## Backup File Disclosure

Scans for commonly-named backup copies of files on the web server, which may reveal sensitive information.

Latest code: [BackupFileDisclosureScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/BackupFileDisclosureScanRule.java)

## Cookie Slack Detector

Tests cookies to detect if some have no effect on response size when omitted, especially cookies containing the name "session" or "userid".

Latest code: [SlackerCookieDetector.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SlackerCookieDetector.java)

## CORS Header

This rule attempts to identify CORS headers and also CORS misconfiguration. The CORS is considered as misconfigured when it allows all origins, origins with weaker protocols and null origin.  

Latest code: [CorsScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/CorsScanRule.java)

## Cross-Domain Misconfiguration

Checks if the web server is configured to allow Cross Domain access, from a malicious third party service, for instance. Currently checks for wildcards in Adobe's crossdomain.xml, and in SilverLight's clientaccesspolicy.xml.

Latest code: [CrossDomainScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/CrossDomainScanRule.java)

## CSRF Token

Scans HTML based messages for the existence of Anti-CSRF tokens.   
Alerts on requests which do not appear to contain Anti-CSRF tokens.  
At HIGH alert threshold only scans messages which are in scope.  
Post 2.5.0 you can specify a comma separated list of identifiers in the `rules.csrf.ignorelist` parameter via the Options 'Rule configuration' panel. Any FORMs with a name or ID that matches one of these identifiers will be ignored when scanning for missing Anti-CSRF tokens. Only use this feature to ignore FORMs that you know are safe, for example search forms.

Latest code: [CsrfTokenScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/CsrfTokenScanRule.java)

## Exponential Entity Expansion (Billion Laughs Attack)

This rule attempts to identify the "Billion Laughs" vulnerability in servers that accept XML or YAML files.

Latest code: [ExponentialEntityExpansionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/ExponentialEntityExpansionScanRule.java)

## Expression Language Injection

Checks if the web application is subject to Expression Language (EL) injection attacks, which occur when an application fails to sufficiently neutralize special elements that could modify the intended EL statement before it is executed.

Latest code: [ExpressionLanguageInjectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/ExpressionLanguageInjectionScanRule.java)

## HTTP Only Site

This active scan rule checks whether an HTTP site is served under HTTPS.

Latest code: [HttpOnlySiteScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/HttpOnlySiteScanRule.java)

## HttPoxy - Proxy Header Misuse

This active scan rule checks whether a site is using the HTTP Proxy header specified in the request.  
It sets up an HTTP proxy which listens to all interfaces on a randomly assigned free port. It then sends a series of requests to the target server with the HTTP Proxy header set to each of the available IP addresses and the port that it is listening on. If a request is received on the new port then the server is very likely to be vulnerable.  
**IMPORTANT** - the computer that ZAP is running on must accept incoming requests on arbitrary ports - if a firewall prevents incoming connections then this rule will not work.

Latest code: [HttPoxyScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/HttPoxyScanRule.java)

## HTTPS Content Available via HTTP

This active scan rule attempts to access content that was originally accessed via HTTPS (SSL/TLS) via HTTP.

Latest code: [HttpsAsHttpScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/HttpsAsHttpScanRule.java)

## HTTP Parameter Pollution (HPP)

Supplying duplicate or numerous HTTP parameters with the same name may cause an application or website to interpret values in unintended ways. By leveraging these effects, a malicious individual may be able to bypass input validation, trigger errors or modify internal variable values. There are difference in treatment of duplicate parameters impacting both clients (browsers) and servers.

Latest code: [HttpParameterPollutionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/HttpParameterPollutionScanRule.java)

## Insecure HTTP Method

Detects (and exploits, depending on the scan settings) known insecure HTTP methods enabled for the URL.

Latest code: [InsecureHttpMethodScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/InsecureHttpMethodScanRule.java)

## Integer Overflow Error

Looks for indicators of integer overflows in compiled code that causes the web server to crash. It does this by putting out multiple strings of integers designed to try and stimulate bad responses.

Latest code: [IntegerOverflowScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/IntegerOverflowScanRule.java)

## Java Spring Actuators

This rule attempts to identify if the Spring Actuators are enabled. Tests for the default /actuator/health route in the application.

Latest code: [SpringActuatorScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SpringActuatorScanRule.java)

## Log4Shell (CVE-2021-44228 and CVE-2021-45046)

This rule attempts to discover the Log4Shell ([CVE-2021-44228](https://nvd.nist.gov/vuln/detail/CVE-2021-44228) and [CVE-2021-45046](https://nvd.nist.gov/vuln/detail/CVE-2021-45046)) vulnerabilities. It relies on the OAST add-on to generate out-of-band payloads and verify DNS interactions. We recommend that this scan rule is used with header injection enabled for maximum coverage.

Latest code: [Log4ShellScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/Log4ShellScanRule.java)

## Out of Band XSS

This rule attempts to discover Out-of-band XSS vulnerabilities.

Latest code: [OutOfBandXssScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/OutOfBandXssScanRule.java)

## Proxy Disclosure

Attempts to detect and fingerprint proxy server(s). This information helps a potential attacker to determine:

* A list of targets for an attack against the application.
* Potential vulnerabilities on the proxy servers that service the application.
* The presence or absence of any proxy-based components that might cause attacks against the application to be detected, prevented, or mitigated.

Latest code: [ProxyDisclosureScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/ProxyDisclosureScanRule.java)

## Relative Path Confusion

Tests if the web server is configured to serve responses to ambiguous URLs in a manner that is likely to lead to confusion about the correct "relative path" for the URL. If resources (CSS, images, etc.) are references in the response using relative, rather than absolute URLs. In an attack, if the web browser parses the "cross-content" response in a permissive manner, or can be tricked into permissively parsing the "cross-content" response, using techniques such as framing, then the web browser may be fooled into interpreting HTML as CSS (or other content types), leading to an XSS vulnerability.

Latest code: [RelativePathConfusionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/RelativePathConfusionScanRule.java)

## Server Side Template Injection

This rule attempts to detect situations in which user input might be interpreted as part of the template and processed on the server, versus the user input simply being used as an argument to the template/engine.

Latest code: [SstiScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SstiScanRule.java)

## Server Side Template Injection (Blind)

This rule goes one step further than the SSTI scan rule and attempts to find places where the impact of the user input is not immediately obvious, such as when used by an admin panel, report output, invoice, etc.

Latest code: [SstiBlindScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SstiBlindScanRule.java)

## Session Fixation

Session Fixation may be possible. If this issue occurs with a login URL (where the user authenticates themselves to the application), then the URL may be given by an attacker, along with a fixed session id, to a victim, in order to later assume the identity of the victim using the given session id. If the issue occurs with a non-login page, the URL and fixed session id may only be used by an attacker to track an unauthenticated user's actions. If the vulnerability occurs on a cookie field or a form field (POST parameter) rather than on a URL (GET) parameter, then some other vulnerability may also be required in order to set the cookie field on the victim's browser, to allow the vulnerability to be exploited.

Latest code: [SessionFixationScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SessionFixationScanRule.java)

## ShellShock - CVE-2014-6271

This rule perform 2 attacks to detect servers vulnerable to CVE-2014-6271 aka ShellShock.  
The first is a simple reflected attack and the second is a time based attack.  

Post 2.5.0 you can change the length of time used for the attack by changing the `rules.common.sleep` parameter via the Options 'Rule configuration' panel.

Latest code: [ShellShockScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/ShellShockScanRule.java)

## Source Code Disclosure - SVN

Uses Subversion source code repository metadata to scan for files containing source code on the web server.  
At LOW alert threshold the rule will require less evidence to identify potential code, which could result in more false positives.  

Latest code: [SourceCodeDisclosureSvnScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SourceCodeDisclosureSvnScanRule.java)

## Source Code Disclosure - File Inclusion

Uses local file inclusion techniques to scan for files containing source code on the web server.

Latest code: [SourceCodeDisclosureFileInclusionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SourceCodeDisclosureFileInclusionScanRule.java)

## Source Code Disclosure - Git

Uses Git source code repository metadata to scan for files containing source code on the web server.

Latest code: [SourceCodeDisclosureGitScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SourceCodeDisclosureGitScanRule.java)

## Spring4Shell (CVE-2022-22965)

This rule attempts to discover the Spring4Shell ([CVE-2022-22965](https://tanzu.vmware.com/security/cve-2022-22965) vulnerability. It uses a payload of `class.module.classLoader.DefaultAssertionStatus=nonsense` on all nodes and raises an alert if this payload results in a 400 response. It will not raise an alert if a similar but safe payload also results in a 400 response.

Latest code: [Spring4ShellScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/Spring4ShellScanRule.java)

## Username Enumeration

It may be possible to enumerate usernames, based on differing HTTP responses when valid and invalid usernames are provided. This would greatly increase the probability of success of password brute-forcing attacks against the system. Note that false positives may sometimes be minimised by increasing the 'Attack Strength' Option in ZAP. Please manually check the 'Other Info' field to confirm if this is actually an issue. This rule is skipped if there are no contexts defined that use Form-based Authentication, and only runs against the URL identified as the login URL of a context.

Latest code: [UsernameEnumerationScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/UsernameEnumerationScanRule.java)

## XPath Injection

As described by OWASP: "XPath Injection attacks occur when a web site uses user-supplied information to construct an XPath query for XML data. By sending intentionally malformed information into the web site, an attacker can find out how the XML data is structured, or access data that he may not normally have access to. He may even be able to elevate his privileges on the web site if the XML data is being used for authentication (such as an XML based user file) or authorization." This rule attempts to identify such weaknesses.

Latest code: [XpathInjectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/XpathInjectionScanRule.java)
