---
# This page was generated from the add-on.
title: Active Scan Rules
type: userguide
weight: 1
cascade:
  addon:
    id: ascanrules
    version: 78.0.0
---

# Active Scan Rules

The following release status active scan rules are included in this add-on:

## .env Information Leak {#id-40034}

Checks for web accessible .env files which may leak sensitive information (such as usernames, passwords, API or APP keys, etc.). Environment files come in many flavors but mostly they are KEY=VALUE formatted.   
This rule checks for how servers deliver them by default; NGINX returns them as binary/octet-stream content-type Apache just returns the text with no content-type. This rule also check for content length over 500 characters to try and exclude larger, possibly intentional, files.


Latest code: [EnvFileScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/EnvFileScanRule.java)


Alert ID: [40034](/docs/alerts/40034/).

## .htaccess Information Leak {#id-40032}

Checks for web accessible .htaccess files which may leak sensitive information (such as usernames, error handling, redirects, directory listing settings, etc.).


Latest code: [HtAccessScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/HtAccessScanRule.java)


Alert ID: [40032](/docs/alerts/40032/).

## Buffer Overflow {#id-30001}

Looks for indicators of buffer overflows in compiled code. It does this by putting out large strings of input text and look for code crash and abnormal session closure.


Latest code: [BufferOverflowScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/BufferOverflowScanRule.java)


Alert ID: [30001](/docs/alerts/30001/).

## Cloud Metadata Attack {#id-90034}

Attempts to abuse a misconfigured NGINX server in order to access the instance metadata maintained by cloud service providers such as AWS, GCP, Azure, and Alibaba.  
Most of these services provide metadata via an internal unroutable IP address '169.254.169.254' ('100.100.100.200' for Alibaba) - this can be exposed by incorrectly configured NGINX servers and accessed by using this IP address in the Host header field.


Latest code: [CloudMetadataScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/CloudMetadataScanRule.java)


Alert ID: [90034](/docs/alerts/90034/).

## Code Injection {#id-90019}

This rule submits PHP and ASP attack strings as values for URL parameters in a request and examines the response to see if those values have been evaluated by the server. First, requests are constructed and sent containing injected PHP instructions to print a token. In the event of a match between the token and the content of the response body, the scanner raises an alert and returns immediately. If there aren't any matches, the scanner will construct requests with several injected ASP strings that instruct the server to write the product of two randomly generated integers in the response. If the body of the response matches the product, an alert is raised.


Latest code: [CodeInjectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/CodeInjectionScanRule.java)


Alert ID: [90019](/docs/alerts/90019/).

## Remote OS Command Injection {#id-90020}

This rule injects \*NIX and Windows OS commands to determine whether or not the web application is passing unchecked user input directly to the underlying OS. The injection strings consist of meta-characters that may be interpreted by the OS as join commands along with a payload that should generate output in the response if the application is vulnerable.


Latest code: [CommandInjectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/CommandInjectionScanRule.java)


Alert ID: [90020](/docs/alerts/90020/).

## Remote OS Command Injection (Time Based) {#id-90037}

This rule injects \*NIX and Windows OS commands to determine whether or not the web application is passing unchecked user input directly to the underlying OS. The rule will attempt blind injection attack(s) by submitting sleep instructions as the payload and comparing the elapsed time between sending the request and receiving the response against a heuristic time-delay lower limit.   
Post 2.5.0 you can change the length of time used for the blind injection attack by changing the `rules.common.sleep` parameter via the Options 'Rule configuration' panel.


Latest code: [CommandInjectionTimingScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/CommandInjectionTimingScanRule.java)


Alert ID: [90037](/docs/alerts/90037/).

## Cross Site Scripting (Reflected) {#id-40012}

This rule starts by submitting a 'safe' value and analyzing all of the locations in which this value occurs in the response (if any).   
It then performs a series of attacks specifically targeted at the location in which each of the instances occurs, including tag attributes, URL attributes, attributes in tags which support src attributes, html comments etc.   
Note:   
This rule only scans HTTP PUT requests at LOW threshold.  
If the alert threshold is set to LOW, XSS injection located in a JSON response results in a LOW risk and LOW confidence alert is raised. For other response content-types a LOW confidence alert is raised.  
If the alert threshold is set to either MEDIUM or HIGH, XSS injection located in non-HTML responses do not generate alerts.  


If specific characters are stripped out of a reflected payload then the attacks will be repeated with alternative characters that might have the same effect.


Latest code: [CrossSiteScriptingScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/CrossSiteScriptingScanRule.java)


Alert ID: [40012](/docs/alerts/40012/).

## Cross Site Scripting (persistent) {#id-40014}

This rule starts by submitting a unique 'safe' value and then spiders the whole application to find all of the locations in which the value occurs.  
It then performs a series of attacks in the same way that the 'reflected' version does but in this case checks all of the target locations in other pages.  
Note:   
This rule only scans HTTP PUT requests at LOW threshold.  
If an XSS injection is located in a JSON response a LOW risk and LOW confidence alert is raised.  


Latest code: [PersistentXssPrimeScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/PersistentXssPrimeScanRule.java),
[PersistentXssSpiderScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/PersistentXssSpiderScanRule.java),
[PersistentXssScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/PersistentXssScanRule.java)


Alert ID: [40014](/docs/alerts/40014/).

## CRLF Injection {#id-40003}

This rule submits various CRLF special characters preceding an injected "Set-Cookie" header as a parameter to the server. If the response contains an identical Set-Cookie header, an alert is raised and the scanner returns immediately.


Latest code: [CrlfInjectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/CrlfInjectionScanRule.java)


Alert ID: [40003](/docs/alerts/40003/).

## Directory Browsing {#id-0}

This rule checks to see if a request will provide access to a directory listing by examining the response body for patterns used with Apache, IIS and other web server software.


Latest code: [DirectoryBrowsingScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/DirectoryBrowsingScanRule.java)


Alert ID: [0](/docs/alerts/0/).

## ELMAH Information Leak {#id-40028}

Tests to see if the Error Logging Modules and Handlers (elmah.axd) HTTP Module is available. Although this module is handy for developers and other stakeholders it can also leak a significant amount of information which a security analyst or malicious individual may be interested in.  

The ELMAH scan rule targets Microsoft based technologies: IIS, Windows, ASP, and MSSQL.  
Files are only reported if they contain the text "Error Log for" unless a LOW alert threshold is set.


Latest code: [ElmahScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/ElmahScanRule.java)


Alert ID: [40028](/docs/alerts/40028/).

## Exponential Entity Expansion (Billion Laughs Attack) {#id-40044}

This rule attempts to identify the "Billion Laughs" vulnerability in servers that accept XML or YAML files.


Latest code: [ExponentialEntityExpansionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/ExponentialEntityExpansionScanRule.java)


Alert ID: [40044](/docs/alerts/40044/).

## External Redirect {#id-20019}

This rule submits a variety of URL redirect strings as parameter values in a request, then examines the headers and bodies of responses to determine whether or not a redirect occurred and of what type. The cause of redirect is searched for in the "Location" and "Refresh" header fields, as well as by HTML meta tags and Javascript in the body of the response. An alert is raised including the redirection type and the scanner returns immediately.


Latest code: [ExternalRedirectScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/ExternalRedirectScanRule.java)


Alert ID: [20019](/docs/alerts/20019/).

## Format String Error {#id-30002}

Looks for indicators of format string handling errors in compiled code. It does this by putting out strings of input text based upon characters compiled C code anticipates to produce formatted output and look for code crash and abnormal session closures.


Latest code: [FormatStringScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/FormatStringScanRule.java)


Alert ID: [30002](/docs/alerts/30002/).

## GET for POST {#id-10058}

This scan rule takes `application/x-www-form-urlencoded` POST requests, changes the parameters from POST to GET and resubmits the request. If the GET response is the same as the original POST response then an alert is raised. While this does not necessarily represent a security weakness unto itself it may indicate that other attacks or weaknesses can be expanded or simplified. (Such as a POST based Cross-Site Scripting (XSS) attack being changed to GET.)


Latest code: [GetForPostScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/GetForPostScanRule.java)


Alert ID: [10058](/docs/alerts/10058/).

## Heartbleed OpenSSL Vulnerability {#id-20015}

Detects if the web server is vulnerable to the Heartbleed OpenSSL Vulnerability, by exploiting it. For further details refer to CVE-2014-0160.


Latest code: [HeartBleedActiveScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/HeartBleedActiveScanRule.java)


Alert ID: [20015](/docs/alerts/20015/).

## Hidden File Finder {#id-40035}

This scan rule checks for various web accessible files which may leak administrative, configuration, or credential information. The original included set of payloads were based on [Snallygaster](https://github.com/hannob/snallygaster) by Hanno Böck. Such payloads are verified by checking response code, and content. If the response code is 200 (Ok) then additional content checks are performed to increase alert confidence. If the response code is 401 (Unauthorized) or 403 (Forbidden) or the content checks are un-successful then an alert is raised with lower confidence (at LOW Threshold). **Note:** If the Custom Payloads add-on is installed you can add your own hidden file paths (payloads) in the Custom Payloads options panel.   
The Custom Payloads category for this rule is: `Hidden-File`.  
For custom payloads only the response status code is checked. If there is a requirement to include a content check then it is also possible to add payloads to the `json/hidden_files.json` file in ZAP's user directory (in which case they will be treated as included payloads).


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


Latest code: [HiddenFilesScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/HiddenFilesScanRule.java)


Alert ID: [40035](/docs/alerts/40035/).

## HTTP Only Site {#id-10106}

This active scan rule checks whether an HTTP site is served under HTTPS.


Latest code: [HttpOnlySiteScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/HttpOnlySiteScanRule.java)


Alert ID: [10106](/docs/alerts/10106/).

## HTTPS Content Available via HTTP {#id-10047}

This active scan rule attempts to access content that was originally accessed via HTTPS (SSL/TLS) via HTTP.


Latest code: [HttpsAsHttpScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/HttpsAsHttpScanRule.java)


Alert ID: [10047](/docs/alerts/10047/).

## Log4Shell (CVE-2021-44228 and CVE-2021-45046) {#id-40043}

This rule attempts to discover the Log4Shell ([CVE-2021-44228](https://nvd.nist.gov/vuln/detail/CVE-2021-44228) and [CVE-2021-45046](https://nvd.nist.gov/vuln/detail/CVE-2021-45046)) vulnerabilities. It relies on the OAST add-on to generate out-of-band payloads and verify DNS interactions. We recommend that this scan rule is used with header injection enabled for maximum coverage.


See also: [OAST](/docs/desktop/addons/oast-support/#alerts).


Latest code: [Log4ShellScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/Log4ShellScanRule.java)


Alert ID: [40043](/docs/alerts/40043/).

## Padding Oracle {#id-90024}

This rule attempts to manipulate the padding of encrypted strings to trigger an error response indicating a likely padding oracle vulnerability. Such a vulnerability can affect any application or framework that uses encryption improperly, such as some versions of ASP.net, Java Server Faces, and Mono.


Latest code: [PaddingOracleScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/PaddingOracleScanRule.java)


Alert ID: [90024](/docs/alerts/90024/).

## Parameter Tampering {#id-40008}

This rule submits requests with parameter values known to cause errors to be displayed to the user if handled improperly. Responses are checked to make sure that they return a server error status code, then compared with a normal HTTP response to make sure it does not raise an alert if the bad parameter has no effect on output. Finally, the content of the response body is compared against various patterns that may be found in Java servlet, Microsoft VBScript, OLE DB, JET, PHP and Tomcat errors. If a match is found, an alert is raised and the scanner returns immediately.


Latest code: [ParameterTamperScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/ParameterTamperScanRule.java)


Alert ID: [40008](/docs/alerts/40008/).

## Path Traversal {#id-6}

This rule attempts to access files and directories outside of the web document root by constructing various combinations of pathname prefixes and local file targets for Windows and \*NIX systems as well as Java servlets. If the body of the response matches a pattern corresponding to the current target file an alert is raised and the scanner returns immediately. If none of the common local file targets succeed, path traversal is attempted using the filename in the URL. As long as submitting an arbitrary filename does not return an OK status code but the real filename does, an alert is raised and the scanner returns immediately.


Note: This scan rule has one check that is excluded at High Alert Threshold.


Latest code: [PathTraversalScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/PathTraversalScanRule.java)


Alert ID: [6](/docs/alerts/6/).

## Remote Code Execution (React2Shell) {#id-40048}

This rule identifies servers running vulnerable versions of React Server Components with Next.js, which will allow remote attackers to execute arbitrary code.


The rule is based on the PoC detailed on <https://slcyber.io/research-center/high-fidelity-detection-mechanism-for-rsc-next-js-rce-cve-2025-55182-cve-2025-66478/>.


It verifies that the server is running vulnerable React Server Components with Next.js, and that the remote code execution (RCE) vulnerability is present without causing any damage.
It forces an error via a malformed multipart request and checks for the presence of a string which confirms RCE is possible.


Latest code: [React2ShellScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/React2ShellScanRule.java)


Alert ID: [40048](/docs/alerts/40048/).

## Remote Code Execution - CVE-2012-1823 {#id-20018}

Detect CVE-2012-1823 to perform Remote Code Execution on a PHP-CGI based web server.


Latest code: [RemoteCodeExecutionCve20121823ScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/RemoteCodeExecutionCve20121823ScanRule.java)


Alert ID: [20018](/docs/alerts/20018/).

## Remote File Include {#id-7}

This rule submits a series of requests with external URLs as parameter values and looks for a match between the response body and the title of the page hosted at those URLs. If there is a match between the expected string and the response body, and the header returned a status code of 200, an alert is raised and the scanner returns immediately.


Latest code: [RemoteFileIncludeScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/RemoteFileIncludeScanRule.java)


Alert ID: [7](/docs/alerts/7/).

## Server Side Include {#id-40009}

This rule checks to see what OS the server is running on, then sends requests with a corresponding HTML SSI directive as a parameter value. If the response body matches a pattern indicating the SSI was successful, an alert is raised and the scanner returns immediately.


Latest code: [ServerSideIncludeScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/ServerSideIncludeScanRule.java)


Alert ID: [40009](/docs/alerts/40009/).

## Server Side Template Injection {#id-90035}

This rule attempts to detect situations in which user input might be interpreted as part of the template and processed on the server, versus the user input simply being used as an argument to the template/engine.


Latest code: [SstiScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/SstiScanRule.java)


Alert ID: [90035](/docs/alerts/90035/).

## Server Side Template Injection (Blind) {#id-90036}

This rule goes one step further than the SSTI scan rule and attempts to find places where the impact of the user input is not immediately obvious, such as when used by an admin panel, report output, invoice, etc. It leverages the OAST add-on for out-of-band interactions.


See also: [OAST](/docs/desktop/addons/oast-support/#alerts).


Latest code: [SstiBlindScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/SstiBlindScanRule.java)


Alert ID: [90036](/docs/alerts/90036/).

## ShellShock - CVE-2014-6271 {#id-10048}

This rule performs 2 attacks to detect servers vulnerable to CVE-2014-6271 aka ShellShock.  
The first is a simple reflected attack and the second is a time based attack.  

Post 2.5.0 you can change the length of time used for the attack by changing the `rules.common.sleep` parameter via the Options 'Rule configuration' panel.


Latest code: [ShellShockScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/ShellShockScanRule.java)


Alert ID: [10048](/docs/alerts/10048/).

## Source Code Disclosure - CVE-2012-1823 {#id-20017}

Exploit CVE-2012-1823 to disclose server-side PHP source code on a PHP-CGI based web server.  
Only analyzes responses that are text based (HTML, JSON, XML, etc.), in order to avoid false positives which may occur with image or other binary content.  
JavaScript responses are only analyzed when a LOW alert threshold is set.


Latest code: [SourceCodeDisclosureCve20121823ScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/SourceCodeDisclosureCve20121823ScanRule.java)


Alert ID: [20017](/docs/alerts/20017/).

## Source Code Disclosure - /WEB-INF Folder {#id-10045}

Exploit the presence of an unprotected /WEB-INF folder to download and decompile Java classes, to disclose Java source code.


Latest code: [SourceCodeDisclosureWebInfScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/SourceCodeDisclosureWebInfScanRule.java)


Alert ID: [10045](/docs/alerts/10045/).

## Spring4Shell (CVE-2022-22965) {#id-40045}

This rule attempts to discover the Spring4Shell ([CVE-2022-22965](https://tanzu.vmware.com/security/cve-2022-22965) vulnerability. It uses a payload of `class.module.classLoader.DefaultAssertionStatus=nonsense` on all nodes and raises an alert if this payload results in a 400 response. It will not raise an alert if a similar but safe payload also results in a 400 response.


Latest code: [Spring4ShellScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/Spring4ShellScanRule.java)


Alert ID: [40045](/docs/alerts/40045/).

## Spring Actuators {#id-40042}

This rule attempts to identify if the Spring Actuators are enabled. Tests for the default /actuator/health route in the application.


Latest code: [SpringActuatorScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/SpringActuatorScanRule.java)


Alert ID: [40042](/docs/alerts/40042/).

## SQL Injection {#id-40018}

This scanner scans for SQL Injection vulnerabilities in an RDBMS-independent fashion, by attacking url parameters and form parameters with fragments of valid and invalid SQL syntax, using error based, boolean based, Union based, and stacked query SQL Injection techniques.   
This scanner may be able to fingerprint the RDBMS if the application throws a known RDBMS specific SQL error message.   
This scanner does not exploit any RDBMS specific techniques, and so is the best SQL injection scanner to use as a starting point.


Latest code: [SqlInjectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/SqlInjectionScanRule.java)


Alert ID: [40018](/docs/alerts/40018/).

## SQL Injection - Hypersonic (Time Based) {#id-40020}

This rule uses Hypersonic-specific SQL syntax to attempt to induce time delays in the SQL statement called by the page.  
If the unmodified query is not affected by a time delay, and the modified query's delay can be controlled, it is indicative of a time-based SQL Injection vulnerability in a Hypersonic SQL database.   
This rule is time sensitive, and should only be used in an attempt to find stubborn and un-obvious SQL injection vulnerabilities in a suspected Hypersonic database.   
For this reason, the number of active scan threads should be set to the minimum when using this scan rule, to minimise load on the web server, application server, and database, in order to avoid false positives caused by load delays rather than by SQL injection delays.   
The rule tests only for time-based SQL injection vulnerabilities.  

Post 2.5.0 you can change the length of time used for the attack by changing the `rules.common.sleep` parameter via the Options 'Rule configuration' panel.


Latest code: [SqlInjectionHypersonicTimingScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/SqlInjectionHypersonicTimingScanRule.java)


Alert ID: [40020](/docs/alerts/40020/).

## SQL Injection - MsSQL (Time Based) {#id-40027}

This active scan rule attempts to inject MsSQL specific sleep commands into parameter values and analyzes the server's response time to see if the sleep is effectively executed on the server (indicating a successful SQL injection attack).


Latest code: [SqlInjectionMsSqlTimingScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/SqlInjectionMsSqlTimingScanRule.java)


Alert ID: [40027](/docs/alerts/40027/).

## SQL Injection - MySQL (Time Based) {#id-40019}

This rule uses MySQL-specific SQL syntax to attempt to induce time delays in the SQL statement called by the page.  
If the unmodified query is not affected by a time delay, and the modified query's delay can be controlled, it is indicative of a time-based SQL Injection vulnerability in a MySQL database.   
This rule is time sensitive, and should only be used in an attempt to find stubborn and un-obvious SQL injection vulnerabilities in a suspected MySQL database.   
For this reason, the number of active scan threads should be set to the minimum when using this scan rule, to minimise load on the web server, application server, and database, in order to avoid false positives caused by load delays rather than by SQL injection delays.   
The rule tests only for time-based SQL injection vulnerabilities.  

Post 2.5.0 you can change the length of time used for the attack by changing the `rules.common.sleep` parameter via the Options 'Rule configuration' panel.


Latest code: [SqlInjectionMySqlTimingScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/SqlInjectionMySqlTimingScanRule.java)


Alert ID: [40019](/docs/alerts/40019/).

## SQL Injection - Oracle (Time Based) {#id-40021}

This scan rule uses Oracle-specific SQL syntax to attempt to induce time delays in the SQL statement called by the page.  
If the unmodified query is not affected by a time delay, and the modified query's delay can be controlled, it is indicative of a time-based SQL Injection vulnerability in a Oracle SQL database.   
This rule is time sensitive, and should only be used in an attempt to find stubborn and un-obvious SQL injection vulnerabilities in a suspected Oracle database.   
For this reason, the number of active scan threads should be set to the minimum when using this rule, to minimise load on the web server, application server, and database, in order to avoid false positives caused by load delays rather than by SQL injection delays.   
The scan rule tests only for time-based SQL injection vulnerabilities.  

The scan rule tests only for time-based SQL injection vulnerabilities.  


Post 2.5.0 you can change the length of time used for the attack by changing the `rules.common.sleep` parameter via the Options 'Rule configuration' panel.


Latest code: [SqlInjectionOracleTimingScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/SqlInjectionOracleTimingScanRule.java)


Alert ID: [40021](/docs/alerts/40021/).

## SQL Injection - PostgreSQL (Time Based) {#id-40022}

This rule uses PostgreSQL-specific SQL syntax to attempt to induce time delays in the SQL statement called by the page.  
If the unmodified query is not affected by a time delay, and the modified query's delay can be controlled, it is indicative of a time-based SQL Injection vulnerability in a PostgreSQL database.   
This scan rule is time sensitive, and should only be used in an attempt to find stubborn and un-obvious SQL injection vulnerabilities in a suspected PostgreSQL database.   
For this reason, the number of active scan threads should be set to the minimum when using this scan rule, to minimise load on the web server, application server, and database, in order to avoid false positives caused by load delays rather than by SQL injection delays.   
The rule tests only for time-based SQL injection vulnerabilities.  

Post 2.5.0 you can change the length of time used for the attack by changing the `rules.common.sleep` parameter via the Options 'Rule configuration' panel.


Latest code: [SqlInjectionPostgreSqlTimingScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/SqlInjectionPostgreSqlTimingScanRule.java)


Alert ID: [40022](/docs/alerts/40022/).

## SQL Injection - SQLite (Time Based) {#id-40024}

This active scan rule attempts to inject SQLite specific commands into parameter values and analyzes the timing of server responses to see if the commands were effectively executed on the server (indicating a successful SQL injection attack).


Latest code: [SqlInjectionSqLiteTimingScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/SqlInjectionSqLiteTimingScanRule.java)


Alert ID: [40024](/docs/alerts/40024/).

## Trace.axd Information Leak {#id-40029}

Tests to see if Trace Viewer (trace.axd) is available. Although this component is convenient for developers and other stakeholders it can leak a significant amount of information which a security analyst or malicious individual may be interested in.  

The trace.axd scan rule targets Microsoft based technologies: IIS, Windows, ASP, and MSSQL.


Latest code: [TraceAxdScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/TraceAxdScanRule.java)


Alert ID: [40029](/docs/alerts/40029/).

## User Agent Fuzzer {#id-10104}

This active scan rule checks for differences in response based on fuzzed User Agent (eg. mobile sites, access as a Search Engine Crawler). The rule compares the response statuscode and the hashcode of the response body with the original response.  
**Note:** If the Custom Payloads add-on is installed you can add your own User Agent strings (payloads) in the Custom Payloads options panel.   
The Custom Payloads category for this rule is: `User-Agent`.


Latest code: [UserAgentScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/UserAgentScanRule.java)


Alert ID: [10104](/docs/alerts/10104/).

## XPath Injection {#id-90021}

As described by OWASP: "XPath Injection attacks occur when a web site uses user-supplied information to construct an XPath query for XML data. By sending intentionally malformed information into the web site, an attacker can find out how the XML data is structured, or access data that he may not normally have access to. He may even be able to elevate his privileges on the web site if the XML data is being used for authentication (such as an XML based user file) or authorization." This rule attempts to identify such weaknesses.

**Note:** If the Custom Payloads add-on is installed you can add your own error strings (payloads) in the Custom Payloads options panel.
They will also be searched for in responses as they're scanned.


The Custom Payloads category for this rule is: `XPath-Errors`.  

Latest code: [XpathInjectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/XpathInjectionScanRule.java)


Alert ID: [90021](/docs/alerts/90021/).

## XSLT Injection {#id-90017}

This scan rule checks for certain responses induced by injecting XSL transformations.   
It attempts to obtain those responses with payloads which may induce: error responses, disclosure of library/framework vendor name, remote port scanning, or command execution.


Latest code: [XsltInjectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/XsltInjectionScanRule.java)


Alert ID: [90017](/docs/alerts/90017/).

## XXE {#id-90023}

This component attempts to identify applications which are subject to XML eXternal Entity (XXE) attacks. Applications which parse XML input may be subject to XXE when weakly or poorly configured parsers handle XML input containing reference to an external entity such as a local file, HTTP requests to internal or tertiary systems, etc. The number of tags which are tested individually depends on the strength of the rule.  

This scan rule will only run if the OAST add-on is installed and available. It is also recommended that you test that the Callbacks service in the OAST add-on is correctly configured for your target site. If the target system cannot connect to the Callback Address then some XXE vulnerabilities will not be detected.


See also: [OAST](/docs/desktop/addons/oast-support/#alerts).


Latest code: [XxeScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/XxeScanRule.java)


Alert ID: [90023](/docs/alerts/90023/).
