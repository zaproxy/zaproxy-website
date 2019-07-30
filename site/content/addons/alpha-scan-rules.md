---
title: "Active Scan Rules"
type: addon
stability: alpha
icon: 
---

The following alpha quality active scan rules are included in this add-on:

## .htaccess Information Leak
Checks for web accessible .htaccess files which may leak sensitive information (such as usernames, error handling, redirects, directory listing settings, etc).

## An example active scan rule which loads data from a file
This implements an example active scan rule that loads strings from a file that the user can edit. For more details see: [Hacking ZAP Part 4: Active Scan Rules.](http://zaproxy.blogspot.co.uk/2014/04/hacking-zap-4-active-scan-rules.html)

## Apache Range Header DoS (CVE-2011-3192)
Tests to see if the server is vulnerable to the Apache Range Header Denial of Service issue, by requesting eleven (11) different byte ranges. Eleven ranges is one more than is accepted by patched/fixed servers.

## Cloud Metadata Attack
Attempts to abuse a misconfigured NGINX server in order to access the instance metadata maintained by cloud service providers such as AWS, GCP and Azure. All of these providers provide metadata via an internal unroutable IP address '169.254.169.254' - this can be exposed by incorrectly configured NGINX servers and accessed by using this IP address in the Host header field.

## Cookie Slack Detector
Tests cookies to detect if some have no effect on response size when omitted, especially cookies containing the name "session" or "userid"

## ELMAH Information Leak
Tests to see if the Error Logging Modules and Handlers (elmah.axd) HTTP Module is available. Although this module is handy for developers and other stakeholders it can also leak a significant amount of information which a security analyst or malicious individual may be interested in.

The ELMAH scanner targets Microsoft based technologies: IIS, Windows, ASP, and MSSQL.

## .env Information Leak
Checks for web accessible .env files which may leak sensitive information (such as usernames, passwords, API or APP keys, etc).

## Example Active Scanner: Denial of Service
This implements a very simple example active scan rule. For more details see: [Hacking ZAP Part 4: Active Scan Rules.](http://zaproxy.blogspot.co.uk/2014/04/hacking-zap-4-active-scan-rules.html)

## GET for POST
This scanner takes `application/x-www-form-urlencoded` POST requests, changes the parameters from POST to GET and resubmits the request. If the GET response is the same as the original POST response then an alert is raised. While this does not necessarily represent a security weakness unto itself it may indicate that other attacks or weaknesses can be expanded or simplified. (Such as a POST based Cross-Site Scripting (XSS) attack being changed to GET.)

## HTTP Only Site
This active scanner checks whether an HTTP site is served under HTTPS.

## Httpoxy - Proxy Header Misuse
This active scanner checks whether a site is using the HTTP Proxy header specified in the request. It sets up an HTTP proxy which listens to all interfaces on a randomly assigned free port. It then sends a series of requests to the target server with the HTTP Proxy header set to each of the available IP addresses and the port that it is listening on. If a request is received on the new port then the server is very likely to be vulnerable. **IMPORTANT** - the computer that ZAP is running on must accept incoming requests on arbitrary ports - if a firewall prevents incoming connections then this rule will not work.

## HTTPS Content Available via HTTP
This active scanner attempts to access content that was originally accessed via HTTPS (SSL/TLS) via HTTP.

## LDAP Injection
LDAP Injection may be possible. It may be possible for an attacker to bypass authentication controls, and to view and modify arbitrary data in the LDAP directory.

## Proxy Disclosure
Attempts to detect and fingerprint proxy server(s). This information helps a potential attacker to determine:

*   A list of targets for an attack against the application.
*   Potential vulnerabilities on the proxy servers that service the application.
*   The presence or absence of any proxy-based components that might cause attacks against the application to be detected, prevented, or mitigated.

## Relative Path Confusion
Tests if the web server is configured to serve responses to ambiguous URLs in a manner that is likely to lead to confusion about the correct "relative path" for the URL. If resources (CSS, images, etc) are references in the response using relative, rather than absolute URLs. In an attack, if the web browser parses the "cross-content" response in a permissive manner, or can be tricked into permissively parsing the "cross-content" response, using techniques such as framing, then the web browser may be fooled into interpreting HTML as CSS (or other content types), leading to an XSS vulnerability.

## Source Code Disclosure - File Inclusion
Uses local file inclusion techniques to scan for files containing source code on the web server.

## Source Code Disclosure - Git
Uses Git source code repository metadata to scan for files containing source code on the web server.

## SQL Injection - MsSQL
This active scanner attempts to inject MsSQL specific sleep commands into parameter values and analyzes the server's response time to see if the sleep is effectively executed on the server (indicating a successful SQL injection attack).

## SQL Injection - SQLite
This active scanner attempts to inject SQLite specific commands into parameter values and analyzes the server's responses to see if the commands were effectively executed on the server (indicating a successful SQL injection attack).

## Trace.axd Information Leak
Tests to see if Trace Viewer (trace.axd) is available. Although this component is convenient for developers and other stakeholders it can leak a significant amount of information which a security analyst or malicious individual may be interested in.

The trace.axd scanner targets Microsoft based technologies: IIS, Windows, ASP, and MSSQL.

## User Agent Fuzzer
This active scanner checks for differences in response based on fuzzed User Agent (eg. mobile sites, access as a Search Engine Crawler). The scanner compares the response statuscode and the hashcode of the response body with the original response.