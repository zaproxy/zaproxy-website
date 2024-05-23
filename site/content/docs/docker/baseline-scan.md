---
title: "ZAP - Baseline Scan"
tags: 
- docker
- guide
- packaged_scan
type: docker
---

The ZAP Baseline scan is a script that is available in the ZAP [Docker](../about/) images.

It runs the ZAP spider against the specified target for (by default) 1 minute and then waits for the passive scanning to complete before reporting the results.

This means that the script doesn't perform any actual 'attacks' and will run for a relatively short period of time (a few minutes at most).

By default it reports all alerts as WARNings but you can specify a config file which can change any rules to FAIL or IGNORE.

This script is intended to be ideal to run in a CI/CD environment, even against production sites.
### Usage
```
Usage: zap-baseline.py -t <target> [options]
    -t target         target URL including the protocol, eg https://www.example.com
Options:
    -h                print this help message
    -c config_file    config file to use to INFO, IGNORE or FAIL warnings
    -u config_url     URL of config file to use to INFO, IGNORE or FAIL warnings
    -g gen_file       generate default config file (all rules set to WARN)
    -m mins           the number of minutes to spider for (default 1)
    -r report_html    file to write the full ZAP HTML report
    -w report_md      file to write the full ZAP Wiki (Markdown) report
    -x report_xml     file to write the full ZAP XML report
    -J report_json    file to write the full ZAP JSON document
    -a                include the alpha passive scan rules as well
    -d                show debug messages
    -P                specify listen port
    -D secs           delay in seconds to wait for passive scanning 
    -i                default rules not in the config file to INFO
    -I                do not return failure on warning
    -j                use the Ajax spider in addition to the traditional one
    -l level          minimum level to show: PASS, IGNORE, INFO, WARN or FAIL, use with -s to hide example URLs
    -n context_file   context file which will be loaded prior to spidering the target
    -p progress_file  progress file which specifies issues that are being addressed
    -s                short output format - dont show PASSes or example URLs
    -T mins           max time in minutes to wait for ZAP to start and the passive scan to run
    -U user           username to use for authenticated scans - must be defined in the given context file (post 2.9.0)
    -z zap_options    ZAP command line options e.g. -z "-config aaa=bbb -config ccc=ddd"
    --hook            path to python file that define your custom hooks
    --auto            use the automation framework if supported for the given parameters (this will become the default soon)
    --autooff         do not use the automation framework even if supported for the given parameters
```
To run it with no 'file' params use:
```
docker run -t ghcr.io/zaproxy/zaproxy:stable zap-baseline.py -t https://www.example.com
```
If you use 'file' params then you need to mount the directory those file are in or will be generated in, eg
```
docker run -v $(pwd):/zap/wrk/:rw -t ghcr.io/zaproxy/zaproxy:stable zap-baseline.py \
    -t https://www.example.com -g gen.conf -r testreport.html
```

Note that `$(pwd)` is supported on Linux, MacOS and PowerShell.
See [Docker About - Mounting the current directory](/docs/docker/about/#mounting-the-current-directory) for Windows, etc.

### Example Output
```
docker run -t ghcr.io/zaproxy/zaproxy:stable zap-baseline.py -t https://www.example.com
May 17, 2016 1:24:32 PM java.util.prefs.FileSystemPreferences$1 run
INFO: Created user preferences directory.
Total of 3 URLs
PASS: Cookie No HttpOnly Flag [10010]
PASS: Cookie Without Secure Flag [10011]
PASS: Password Autocomplete in Browser [10012]
PASS: Cross-Domain JavaScript Source File Inclusion [10017]
PASS: Content-Type Header Missing [10019]
PASS: Information Disclosure - Debug Error Messages [10023]
PASS: Information Disclosure - Sensitive Informations in URL [10024]
PASS: Information Disclosure - Sensitive Information in HTTP Referrer Header [10025]
PASS: HTTP Parameter Override [10026]
PASS: Information Disclosure - Suspicious Comments [10027]
PASS: Viewstate Scanner [10032]
PASS: Secure Pages Include Mixed Content [10040]
PASS: Weak Authentication Method [10105]
PASS: Private IP Disclosure [2]
PASS: Session ID in URL Rewrite [3]
PASS: Absence of Anti-CSRF Tokens [40014]
PASS: Script passive scan rules [50001]
PASS: Insecure JSF ViewState [90001]
PASS: Charset Mismatch [90011]
PASS: Application Error Disclosure [90022]
PASS: WSDL File Passive Scanner [90030]
PASS: Loosely Scoped Cookie [90033]
WARN: Incomplete or No Cache-control and Pragma HTTP Header Set [10015] x 3
	https://www.example.com
	https://www.example.com/robots.txt
	https://www.example.com/sitemap.xml
WARN: Web Browser XSS Protection Not Enabled [10016] x 3
	https://www.example.com
	https://www.example.com/robots.txt
	https://www.example.com/sitemap.xml
WARN: X-Frame-Options Header Not Set [10020] x 3
	https://www.example.com
	https://www.example.com/robots.txt
	https://www.example.com/sitemap.xml
WARN: X-Content-Type-Options Header Missing [10021] x 3
	https://www.example.com
	https://www.example.com/robots.txt
	https://www.example.com/sitemap.xml
FAIL: 0	WARN: 4	IGNORE: 0	PASS: 22
```

### Exit Value

The script will exit with codes of:
* 0:	Success
* 1:	At least 1 FAIL
* 2:	At least one WARN and no FAILs
* 3:	Any other failure

By default all alerts found by ZAP will be treated as WARNings.

You can use the `-c` or `-u` parameters to specify a configuration file to override this.

### Configuration File
You can configure how the baseline scan runs with a configuration file. A default configuration file can be created using the '-g' parameter.
```
# zap-baseline rule configuration file
# Change WARN to IGNORE to ignore rule or FAIL to fail if rule matches
# Only the rule identifiers are used - the names are just for info
# You can add your own messages to each rule by appending them after a tab on each line.
10010	WARN	(Cookie No HttpOnly Flag)
10011	WARN	(Cookie Without Secure Flag)
10012	WARN	(Password Autocomplete in Browser)
10015	WARN	(Incomplete or No Cache-control and Pragma HTTP Header Set)
10016	WARN	(Web Browser XSS Protection Not Enabled)
10017	WARN	(Cross-Domain JavaScript Source File Inclusion)
10019	WARN	(Content-Type Header Missing)
10020	WARN	(X-Frame-Options Header Scanner)
10021	WARN	(X-Content-Type-Options Header Missing)
10023	WARN	(Information Disclosure - Debug Error Messages)
10024	WARN	(Information Disclosure - Sensitive Informations in URL)
10025	WARN	(Information Disclosure - Sensitive Information in HTTP Referrer Header)
10026	WARN	(HTTP Parameter Override)
10027	WARN	(Information Disclosure - Suspicious Comments)
10032	WARN	(Viewstate Scanner)
10040	WARN	(Secure Pages Include Mixed Content)
10105	WARN	(Weak Authentication Method)
10202	WARN	(Absence of Anti-CSRF Tokens)
2	WARN	(Private IP Disclosure)
3	WARN	(Session ID in URL Rewrite)
50001	WARN	(Script Passive Scan Rules)
90001	WARN	(Insecure JSF ViewState)
90011	WARN	(Charset Mismatch)
90022	WARN	(Application Error Disclosure)
90030	WARN	(WSDL File Passive Scanner)
90033	WARN	(Loosely Scoped Cookie)
```
Edit the file and change WARN to IGNORE to ignore rule or FAIL to fail as required.

You can also specify URL regex patterns which should be ignored by adding lines like:
```
<rule-id>    OUTOFSCOPE    <regex>
```
to the file. You can also use ‘*’ for all rules.
For example:
```
# Ignore the specified URL for Autocomplete in browser
10012    OUTOFSCOPE    https://www.example.com/test.html
# Ignore all URLS containing ‘.js’ for all scan rules
*    OUTOFSCOPE    .*\.js
```
### Progress File
You can specify a progress file to flag issues that are already known about and are being addressed:
```
{
	"site" : "www.example.com",
	"issues" : [
		{ 
			"id" : "10016",
			"name" : "Web Browser XSS Protection Not Enabled",
			"state" : "inprogress",
			"link": "https://www.example.com/bugtracker/issue=1234"
		},
		{ 
			"id" : "10020",
			"name" : "X-Frame-Options Header Not Set",
			"state" : "inprogress",
			"link": "https://www.example.com/bugtracker/issue=1235"
		}
	]
}
```
These issues will then be flagged as being 'IN-PROGRESS' which makes it much easier to identify new issues.

### ZAP Parameters
You can pass parameters onto ZAP using the baseline `-z` parameter. This means you can fine tune ZAP, for example by specifying any of the parameters that are stored in the ZAP config file via the `-config key=value` parameter.
The weekly version of ZAP supports scan rule configuration. One particular configuration option allows you to define the IDs of HTML forms which you want to ignore when it comes to anti-CSRF tokens. So if you run the baseline scan with: `-z "-config rules.csrf.ignorelist=search,login"` then ZAP will not fail the scan if forms with an ID of "search" or "login" do not have anti CSRF tokens.

### Mass Baseline
If you would like to run the baseline against a number of sites then you can use the [mass baseline scripts](https://github.com/zaproxy/community-scripts/tree/main/other/api/mass-baseline) on the ZAP Community Scripts repo.
These generate a [dashboard](https://github.com/zaproxy/community-scripts/wiki/Baseline-Summary) which will show you a summary of the results on one wiki page.

### Scan Hooks
This script supports [scan hooks](../scan-hooks/) which allow you to override or modify behaviour of the script components instead of having to write a new script.

### Automation Framework Migration
The baseline scan is in the process of being migrated to use the [Automation Framework](/docs/automate/automation-framework/). 
For more details see the blog post: [Baseline Scan Changes](/blog/2021-06-15-baseline-scan-changes/)

### Source Code
The source code for this script is in [https://github.com/zaproxy/zaproxy/tree/main/docker](https://github.com/zaproxy/zaproxy/tree/main/docker).
