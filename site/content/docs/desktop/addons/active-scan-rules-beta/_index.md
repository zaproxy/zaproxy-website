---
# This page was generated from the add-on.
title: Active Scan Rules - Beta
type: userguide
weight: 1
cascade:
  addon:
    id: ascanrulesBeta
    version: 41.0.0
---

# Active Scan Rules - Beta

The following beta status active scan rules are included in this add-on:

## Backup File Disclosure

Scans for commonly-named backup copies of files on the web server, which may reveal sensitive information.

Latest code: [BackupFileDisclosureScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/BackupFileDisclosureScanRule.java)

## Cloud Metadata Attack

Attempts to abuse a misconfigured NGINX server in order to access the instance metadata maintained by cloud service providers such as AWS, GCP, Azure, and Alibaba.  
Most of these services provide metadata via an internal unroutable IP address '169.254.169.254' ('100.100.100.200' for Alibaba) - this can be exposed by incorrectly configured NGINX servers and accessed by using this IP address in the Host header field.

Latest code: [CloudMetadataScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/CloudMetadataScanRule.java)

## Cookie Slack Detector

Tests cookies to detect if some have no effect on response size when omitted, especially cookies containing the name "session" or "userid".

Latest code: [SlackerCookieDetector.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SlackerCookieDetector.java)

## Cross-Domain Misconfiguration

Checks if the web server is configured to allow Cross Domain access, from a malicious third party service, for instance. Currently checks for wildcards in Adobe's crossdomain.xml, and in SilverLight's clientaccesspolicy.xml.

Latest code: [CrossDomainScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/CrossDomainScanRule.java)

## CSRF Token

Scans HTML based messages for the existence of Anti-CSRF tokens.   
Alerts on requests which do not appear to contain Anti-CSRF tokens.  
At HIGH alert threshold only scans messages which are in scope.  
Post 2.5.0 you can specify a comma separated list of identifiers in the `rules.csrf.ignorelist` parameter via the Options 'Rule configuration' panel. Any FORMs with a name or ID that matches one of these identifiers will be ignored when scanning for missing Anti-CSRF tokens. Only use this feature to ignore FORMs that you know are safe, for example search forms.

Latest code: [CsrfTokenScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/CsrfTokenScanRule.java)

## .env Information Leak

Checks for web accessible .env files which may leak sensitive information (such as usernames, passwords, API or APP keys, etc.). Environment files come in many flavors but mostly they are KEY=VALUE formatted.   
This rule checks for how servers deliver them by default; NGINX returns them as binary/octet-stream content-type Apache just returns the text with no content-type. This rule also check for content length over 500 characters to try and exclude larger, possibly intentional, files.

Latest code: [EnvFileScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/EnvFileScanRule.java)

## Expression Language Injection

Checks if the web application is subject to Expression Language (EL) injection attacks, which occur when an application fails to sufficiently neutralize special elements that could modify the intended EL statement before it is executed.

Latest code: [ExpressionLanguageInjectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/ExpressionLanguageInjectionScanRule.java)

## GET for POST

This scan rule takes `application/x-www-form-urlencoded` POST requests, changes the parameters from POST to GET and resubmits the request. If the GET response is the same as the original POST response then an alert is raised. While this does not necessarily represent a security weakness unto itself it may indicate that other attacks or weaknesses can be expanded or simplified. (Such as a POST based Cross-Site Scripting (XSS) attack being changed to GET.)

Latest code: [GetForPostScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/GetForPostScanRule.java)

## Heartbleed OpenSSL Vulnerability

Detects if the web server is vulnerable to the Heartbleed OpenSSL Vulnerability, by exploiting it. For further details refer to CVE-2014-0160.

Latest code: [HeartBleedActiveScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/HeartBleedActiveScanRule.java)

## Hidden File Finder

This scan rule checks for various web accessible files which may leak administrative, configuration, or credential information. The original included set of payloads were based on [Snallygaster](https://github.com/hannob/snallygaster) by Hanno Böck. Such payloads are verified by checking response code, and content. If the response code is 200 (Ok) then additional content checks are performed to increase alert confidence. If the response code is 401 (Unauthorized) or 403 (Forbidden) or the content checks are un-successful then an alert is raised with lower confidence (at HIGH Threshold). **Note:** If the Custom Payloads addon is installed you can add your own hidden file paths (payloads) in the Custom Payloads options panel. For custom payloads only the response status code is checked. If there is a requirement to include a content check then it is also possible to add payloads to the `json/hidden_files.json` file in ZAP's user directory (in which case they will be treated as included payloads).

The following describes the fields of the JSON entries.


    {
      "path":"some/path/without/leading/slash.ext",
      "content":["content you want to find in responses"],
      "not_content":["content you do not want the response to have"],
      "binary":"\\x01\\x00",
      "links":["https://example.com/relevant/reference.html,"https://other.example.org/"],
      "type":"short_identifier",
      "source":"attribution_not_used_by_output_or_checks"
    }

Details worth noting:

* The only field that is required is path.
* The fields content, not_content, and links can have multiple quoted, comma separated values (arrays of strings).
* Checks of binary content are based on starting position 0 (ex: startsWith not contains).

The following is an example JSON entry:


    {
      "path":"CVS/root",
      "content":[":"],
      "not_content":["<"],
      "type":"cvs_dir",
      "source":"snallygaster"
    }

Latest code: [HiddenFilesScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/HiddenFilesScanRule.java)

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

## Padding Oracle

This rule attempts to manipulate the padding of encrypted strings to trigger an error response indicating a likely padding oracle vulnerability. Such a vulnerability can affect any application or framework that uses encryption improperly, such as some versions of ASP.net, Java Server Faces, and Mono.

Latest code: [PaddingOracleScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/PaddingOracleScanRule.java)

## Proxy Disclosure

Attempts to detect and fingerprint proxy server(s). This information helps a potential attacker to determine:

* A list of targets for an attack against the application.
* Potential vulnerabilities on the proxy servers that service the application.
* The presence or absence of any proxy-based components that might cause attacks against the application to be detected, prevented, or mitigated.

Latest code: [ProxyDisclosureScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/ProxyDisclosureScanRule.java)

## Relative Path Confusion

Tests if the web server is configured to serve responses to ambiguous URLs in a manner that is likely to lead to confusion about the correct "relative path" for the URL. If resources (CSS, images, etc.) are references in the response using relative, rather than absolute URLs. In an attack, if the web browser parses the "cross-content" response in a permissive manner, or can be tricked into permissively parsing the "cross-content" response, using techniques such as framing, then the web browser may be fooled into interpreting HTML as CSS (or other content types), leading to an XSS vulnerability.

Latest code: [RelativePathConfusionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/RelativePathConfusionScanRule.java)

## Remote Code Execution - CVE-2012-1823

Detect CVE-2012-1823 to perform Remote Code Execution on a PHP-CGI based web server.

Latest code: [RemoteCodeExecutionCve20121823ScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/RemoteCodeExecutionCve20121823ScanRule.java)

## Session Fixation

Session Fixation may be possible. If this issue occurs with a login URL (where the user authenticates themselves to the application), then the URL may be given by an attacker, along with a fixed session id, to a victim, in order to later assume the identity of the victim using the given session id. If the issue occurs with a non-login page, the URL and fixed session id may only be used by an attacker to track an unauthenticated user's actions. If the vulnerability occurs on a cookie field or a form field (POST parameter) rather than on a URL (GET) parameter, then some other vulnerability may also be required in order to set the cookie field on the victim's browser, to allow the vulnerability to be exploited.

Latest code: [SessionFixationScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SessionFixationScanRule.java)

## ShellShock - CVE-2014-6271

This rule perform 2 attacks to detect servers vulnerable to CVE-2014-6271 aka ShellShock.  
The first is a simple reflected attack and the second is a time based attack.  

Post 2.5.0 you can change the length of time used for the attack by changing the `rules.common.sleep` parameter via the Options 'Rule configuration' panel.

Latest code: [ShellShockScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/ShellShockScanRule.java)

## Source Code Disclosure - CVE-2012-1823

Exploit CVE-2012-1823 to disclose server-side PHP source code on a PHP-CGI based web server.  
Only analyzes responses that are text based (HTML, JSON, XML, etc.), in order to avoid false positives which may occur with image or other binary content.  
JavaScript responses are only anaylzed when a LOW alert threshold is set.

Latest code: [SourceCodeDisclosureCve20121823ScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SourceCodeDisclosureCve20121823ScanRule.java)

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

## SQL Injection - Hypersonic (Time Based)

This rule uses Hypersonic-specific SQL syntax to attempt to induce time delays in the SQL statement called by the page.  
If the unmodified query is not affected by a time delay, and the modified query's delay can be controlled, it is indicative of a time-based SQL Injection vulnerability in a Hypersonic SQL database.   
This rule is time sensitive, and should only be used in an attempt to find stubborn and un-obvious SQL injection vulnerabilities in a suspected Hypersonic database.   
For this reason, the number of active scan threads should be set to the minimum when using this scan rule, to minimise load on the web server, application server, and database, in order to avoid false positives caused by load delays rather than by SQL injection delays.   
The rule tests only for time-based SQL injection vulnerabilities.  

Post 2.5.0 you can change the length of time used for the attack by changing the `rules.common.sleep` parameter via the Options 'Rule configuration' panel.

Latest code: [SqlInjectionHypersonicScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SqlInjectionHypersonicScanRule.java)

## SQL Injection - MsSQL

This active scan rule attempts to inject MsSQL specific sleep commands into parameter values and analyzes the server's response time to see if the sleep is effectively executed on the server (indicating a successful SQL injection attack).

Latest code: [SqlInjectionMsSqlScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SqlInjectionMsSqlScanRule.java)

## SQL Injection - MySQL (Time Based)

This rule uses MySQL-specific SQL syntax to attempt to induce time delays in the SQL statement called by the page.  
If the unmodified query is not affected by a time delay, and the modified query's delay can be controlled, it is indicative of a time-based SQL Injection vulnerability in a MySQL database.   
This rule is time sensitive, and should only be used in an attempt to find stubborn and un-obvious SQL injection vulnerabilities in a suspected MySQL database.   
For this reason, the number of active scan threads should be set to the minimum when using this scan rule, to minimise load on the web server, application server, and database, in order to avoid false positives caused by load delays rather than by SQL injection delays.   
The rule tests only for time-based SQL injection vulnerabilities.  

Post 2.5.0 you can change the length of time used for the attack by changing the `rules.common.sleep` parameter via the Options 'Rule configuration' panel.

Latest code: [SqlInjectionMySqlScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SqlInjectionMySqlScanRule.java)

## SQL Injection - Oracle (Time Based)

This scan rule uses Oracle-specific SQL syntax to attempt to induce time delays in the SQL statement called by the page.  
If the unmodified query is not affected by a time delay, and the modified query's delay can be controlled, it is indicative of a time-based SQL Injection vulnerability in a Oracle SQL database.   
This rule is time sensitive, and should only be used in an attempt to find stubborn and un-obvious SQL injection vulnerabilities in a suspected Oracle database.   
For this reason, the number of active scan threads should be set to the minimum when using this rule, to minimise load on the web server, application server, and database, in order to avoid false positives caused by load delays rather than by SQL injection delays.   
The scan rule tests only for time-based SQL injection vulnerabilities.  

Note that this rule does not currently allow you to change the length of time used for the timing attacks due to the way the delay is caused.

Latest code: [SqlInjectionOracleScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SqlInjectionOracleScanRule.java)

## SQL Injection - PostgreSQL (Time Based)

This rule uses PostgreSQL-specific SQL syntax to attempt to induce time delays in the SQL statement called by the page.  
If the unmodified query is not affected by a time delay, and the modified query's delay can be controlled, it is indicative of a time-based SQL Injection vulnerability in a PostgreSQL database.   
This scan rule is time sensitive, and should only be used in an attempt to find stubborn and un-obvious SQL injection vulnerabilities in a suspected PostgreSQL database.   
For this reason, the number of active scan threads should be set to the minimum when using this scan rule, to minimise load on the web server, application server, and database, in order to avoid false positives caused by load delays rather than by SQL injection delays.   
The rule tests only for time-based SQL injection vulnerabilities.  

Post 2.5.0 you can change the length of time used for the attack by changing the `rules.common.sleep` parameter via the Options 'Rule configuration' panel.

Latest code: [SqlInjectionPostgreScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SqlInjectionPostgreScanRule.java)

## SQL Injection - SQLite

This active scan rule attempts to inject SQLite specific commands into parameter values and analyzes the server's responses to see if the commands were effectively executed on the server (indicating a successful SQL injection attack).

Latest code: [SqlInjectionSqLiteScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/SqlInjectionSqLiteScanRule.java)

## Trace.axd Information Leak

Tests to see if Trace Viewer (trace.axd) is available. Although this component is convenient for developers and other stakeholders it can leak a significant amount of information which a security analyst or malicious individual may be interested in.  

The trace.axd scan rule targets Microsoft based technologies: IIS, Windows, ASP, and MSSQL.

Latest code: [TraceAxdScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/TraceAxdScanRule.java)

## User Agent Fuzzer

This active scan rule checks for differences in response based on fuzzed User Agent (eg. mobile sites, access as a Search Engine Crawler). The rule compares the response statuscode and the hashcode of the response body with the original response.  
**Note:** If the Custom Payloads addon is installed you can add your own User Agent strings (payloads) in the Custom Payloads options panel.

Latest code: [UserAgentScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/UserAgentScanRule.java)

## Username Enumeration

It may be possible to enumerate usernames, based on differing HTTP responses when valid and invalid usernames are provided. This would greatly increase the probability of success of password brute-forcing attacks against the system. Note that false positives may sometimes be minimised by increasing the 'Attack Strength' Option in ZAP. Please manually check the 'Other Info' field to confirm if this is actually an issue. This rule is skipped if there are no contexts defined that use Form-based Authentication, and only runs against the URL identified as the login URL of a context.

Latest code: [UsernameEnumerationScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/UsernameEnumerationScanRule.java)

## XPath Injection

As described by OWASP: "XPath Injection attacks occur when a web site uses user-supplied information to construct an XPath query for XML data. By sending intentionally malformed information into the web site, an attacker can find out how the XML data is structured, or access data that he may not normally have access to. He may even be able to elevate his privileges on the web site if the XML data is being used for authentication (such as an XML based user file) or authorization." This rule attempts to identify such weaknesses.

Latest code: [XpathInjectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/XpathInjectionScanRule.java)

## XSLT Injection

This scan rule checks for certain responses induced by injecting XSL transformations.   
It attempts to obtain those responses with payloads which may induce: error responses, disclosure of library/framework vendor name, remote port scanning, or command execution.

Latest code: [XsltInjectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/XsltInjectionScanRule.java)

## XXE

This component attempts to identify applications which are subject to XML eXternal Entity (XXE) attacks. Applications which parse XML input may be subject to XXE when weakly or poorly configured parsers handle XML input containing reference to an external entity such as a local file, HTTP requests to internal or tertiary systems, etc. The number of tags which are tested individually depends on the strength of the rule.  

This scan rule will only run if the OAST add-on is installed and available. It is also recommended that you test that the Callbacks service in the OAST add-on is correctly configured for your target site. If the target system cannot connect to the Callback Address then some XXE vulnerabilities will not be detected.

Latest code: [XxeScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta/XxeScanRule.java)
