---
title: "ZAP - API Scan"
tags: 
- docker
- guide
- packaged_scan
type: docker
---

The ZAP API scan is a script that is available in the ZAP [Docker](../about/) images.

It is tuned for performing scans against APIs defined by OpenAPI, SOAP, or GraphQL via either a local file or a URL.

It imports the definition that you specify and then runs an Active Scan against the URLs found.
The Active Scan is tuned to APIs, so it doesn't bother looking for things like XSSs.

It also includes 2 scripts that:

* Raise alerts for any HTTP Server Error response codes
* Raise alerts for any URLs that return content types that are not usually associated with APIs

### Usage
```
Usage: zap-api-scan.py -t <target> -f <format> [options]
    -t target         target API definition, OpenAPI or SOAP, local file or URL, e.g. https://www.example.com/openapi.json
                      or target endpoint URL, GraphQL, e.g. https://www.example.com/graphql
    -f format         openapi, soap, or graphql
Options:
    -h                print this help message
    -c config_file    config file to use to INFO, IGNORE or FAIL warnings
    -u config_url     URL of config file to use to INFO, IGNORE or FAIL warnings
    -g gen_file       generate default config file (all rules set to WARN)
    -r report_html    file to write the full ZAP HTML report
    -w report_md      file to write the full ZAP Wiki (Markdown) report
    -x report_xml     file to write the full ZAP XML report
    -J report_json    file to write the full ZAP JSON document
    -a                include the alpha passive scan rules as well
    -d                show debug messages
    -P                specify listen port
    -D                delay in seconds to wait for passive scanning 
    -i                default rules not in the config file to INFO
    -I                do not return failure on warning (post 2.9.0)
    -l level          minimum level to show: PASS, IGNORE, INFO, WARN or FAIL, use with -s to hide example URLs
    -n context_file   context file which will be loaded prior to scanning the target
    -p progress_file  progress file which specifies issues that are being addressed
    -s                short output format - dont show PASSes or example URLs
    -S                safe mode this will skip the active scan and perform a baseline scan
    -T                max time in minutes to wait for ZAP to start and the passive scan to run
    -U user           username to use for authenticated scans - must be defined in the given context file (post 2.9.0)
    -O                the hostname to override in the (remote) OpenAPI spec
    -z zap_options    ZAP command line options e.g. -z "-config aaa=bbb -config ccc=ddd"
    --hook            path to python file that define your custom hooks
    --schema          GraphQL schema location, URL or file, e.g. https://www.example.com/schema.graphqls
```

### Exit Value

The script will exit with codes of:
* 0:	Success
* 1:	At least 1 FAIL
* 2:	At least one WARN and no FAILs
* 3:	Any other failure

By default all alerts found by ZAP will be treated as WARNings.

You can use the `-c` or `-u` parameters to specify a configuration file to override this.

### Configuration
The configuration works in a very similar way as the [Baseline Scan](../baseline-scan/) so see the Baseline page for more details.

### Configuration File
You can configure how the API scan runs with a configuration file. A default configuration file can be created using the '-g' parameter.
Unlike the baseline configuration file the API configuration file handles both active and passive scan rules.
```
# zap-api-scan rule configuration file
# Change WARN to IGNORE to ignore rule or FAIL to fail if rule matches
# Active scan rules set to IGNORE will not be run which will speed up the scan
# Only the rule identifiers are used - the names are just for info
# You can add your own messages to each rule by appending them after a tab on each line.
0	WARN	(Directory Browsing - Active/release)
10010	WARN	(Cookie No HttpOnly Flag - Passive/release)
10011	WARN	(Cookie Without Secure Flag - Passive/release)
10012	WARN	(Password Autocomplete in Browser - Passive/release)
10015	WARN	(Incomplete or No Cache-control and Pragma HTTP Header Set - Passive/release)
10016	WARN	(Web Browser XSS Protection Not Enabled - Passive/release)
10017	WARN	(Cross-Domain JavaScript Source File Inclusion - Passive/release)
10019	WARN	(Content-Type Header Missing - Passive/release)
10020	WARN	(X-Frame-Options Header Scanner - Passive/release)
10021	WARN	(X-Content-Type-Options Header Missing - Passive/release)
10023	WARN	(Information Disclosure - Debug Error Messages - Passive/beta)
10024	WARN	(Information Disclosure - Sensitive Informations in URL - Passive/beta)
10025	WARN	(Information Disclosure - Sensitive Information in HTTP Referrer Header - Passive/beta)
10026	WARN	(HTTP Parameter Override - Passive/beta)
10027	WARN	(Information Disclosure - Suspicious Comments - Passive/beta)
10032	WARN	(Viewstate Scanner - Passive/beta)
10040	WARN	(Secure Pages Include Mixed Content - Passive/release)
10045	WARN	(Source Code Disclosure - /WEB-INF folder - Active/beta)
10048	WARN	(Remote Code Execution - Shell Shock - Active/beta)
10095	WARN	(Backup File Disclosure - Active/beta)
10105	WARN	(Weak Authentication Method - Passive/beta)
10202	WARN	(Absence of Anti-CSRF Tokens - Passive/beta)
2	WARN	(Private IP Disclosure - Passive/release)
20012	WARN	(Anti CSRF Tokens Scanner - Active/beta)
20014	WARN	(HTTP Parameter Pollution scanner - Active/beta)
20015	WARN	(Heartbleed OpenSSL Vulnerability - Active/beta)
20016	WARN	(Cross-Domain Misconfiguration - Active/beta)
20017	WARN	(Source Code Disclosure - CVE-2012-1823 - Active/beta)
20018	WARN	(Remote Code Execution - CVE-2012-1823 - Active/beta)
20019	WARN	(External Redirect - Active/release)
3	WARN	(Session ID in URL Rewrite - Passive/release)
30001	WARN	(Buffer Overflow - Active/release)
30002	WARN	(Format String Error - Active/release)
30003	WARN	(Integer Overflow Error - Active/beta)
40003	WARN	(CRLF Injection - Active/release)
40008	WARN	(Parameter Tampering - Active/release)
40009	WARN	(Server Side Include - Active/release)
40012	WARN	(Cross Site Scripting (Reflected) - Active/release)
40013	WARN	(Session Fixation - Active/beta)
40014	WARN	(Cross Site Scripting (Persistent) - Active/release)
40016	WARN	(Cross Site Scripting (Persistent) - Prime - Active/release)
40017	WARN	(Cross Site Scripting (Persistent) - Spider - Active/release)
40018	WARN	(SQL Injection - Active/release)
40019	WARN	(SQL Injection - MySQL - Active/beta)
40020	WARN	(SQL Injection - Hypersonic SQL - Active/beta)
40021	WARN	(SQL Injection - Oracle - Active/beta)
40022	WARN	(SQL Injection - PostgreSQL - Active/beta)
40023	WARN	(Possible Username Enumeration - Active/beta)
42	WARN	(Source Code Disclosure - SVN - Active/beta)
50000	WARN	(Script Active Scan Rules - Active/release)
50001	WARN	(Script Passive Scan Rules - Passive/release)
6	WARN	(Path Traversal - Active/release)
7	WARN	(Remote File Inclusion - Active/release)
90001	WARN	(Insecure JSF ViewState - Passive/beta)
90011	WARN	(Charset Mismatch - Passive/beta)
90019	WARN	(Server Side Code Injection - Active/release)
90020	WARN	(Remote OS Command Injection - Active/release)
90021	WARN	(XPath Injection - Active/beta)
90022	WARN	(Application Error Disclosure - Passive/release)
90023	WARN	(XML External Entity Attack - Active/beta)
90024	WARN	(Generic Padding Oracle - Active/beta)
90025	WARN	(Expression Language Injection - Active/beta)
90026	WARN	(SOAP Action Spoofing - Active/alpha)
90028	WARN	(Insecure HTTP Method - Active/beta)
90029	WARN	(SOAP XML Injection - Active/alpha)
90030	WARN	(WSDL File Passive Scanner - Passive/alpha)
90033	WARN	(Loosely Scoped Cookie - Passive/beta)
```

For more details see the blog posts:
* [Exploring APIs with ZAP](/blog/2017-04-03-exploring-apis-with-zap/)
* [Scanning APIs with ZAP](/blog/2017-06-19-scanning-apis-with-zap/)
* [Introducing the GraphQL Add-on for ZAP](/blog/2020-08-28-introducing-the-graphql-add-on-for-zap/)

### Scan Hooks
This script supports [scan hooks](../scan-hooks/) which allow you to override or modify behaviour of the script components instead of having to write a new script.

### Source Code
The source code for this script is in [https://github.com/zaproxy/zaproxy/tree/main/docker](https://github.com/zaproxy/zaproxy/tree/main/docker).
