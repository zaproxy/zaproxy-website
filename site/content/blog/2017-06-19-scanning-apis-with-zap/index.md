---
title: "Scanning APIs with ZAP"
type: post
tags:
- TODO
date: "2017-06-19"
authors:
    - simon
---
The previous ZAP blog post explained how you could [Explore APIs with ZAP](https://zaproxy.blogspot.com/2017/04/exploring-apis-with-zap.html).  
This blog post goes one step further, and explains how you can both explore and perform security scanning of APIs using ZAP from the command
line.  
This allows you to easily automate the scanning of your APIs.  
  
Following the approach taken by the [Baseline Scan](https://github.com/zaproxy/zaproxy/wiki/ZAP-Baseline-Scan) we have introduced a new API
scanning script which has only one dependency – Docker. You don’t need to install either ZAP or Java.  
The script, zap-api-scan.py is included in the [Weekly](https://hub.docker.com/r/owasp/zap2docker-weekly/) and
[Live](https://hub.docker.com/r/owasp/zap2docker-live/) ZAP Docker images, it will also be included in the next
[Stable](https://hub.docker.com/r/owasp/zap2docker-stable/) image.  
  
To use the API scanning script you just need to use the commands:  
```bash
docker pull owasp/zap2docker-weekly  
docker run -t owasp/zap2docker-weekly zap-api-scan.py -t \  
    https://www.example.com/openapi.json -f openapi  
```
By default the script:  

  1. Imports the API definition supplied
  2. Actively scans the API using a custom scan profile tuned for APIs
  3. Reports any issues found to the command line

If no issues are reported then that does not mean that your API is safe.  
If your API is particularly important or sensitive then it would be sensible to follow the scan up with a manual penetration test. You should
also test the applications that use the API as data returned via the API could still be used to attack the application if it does not suitably
escape data that has been originally entered via a user.  
  

###  Command Line Options

  
The script has a number of command line options that allow it to be tuned to your requirements:  

```
Usage: zap-api-scan.py -t <target> -f <format> [options]  
    -t target         target API definition, OpenAPI or SOAP, local file or URL, eg https://www.example.com/openapi.json  
    -f format         either openapi or soap  
Options:  
    -c config_file    config file to use to INFO, IGNORE or FAIL warnings  
    -u config_url     URL of config file to use to INFO, IGNORE or FAIL warnings  
    -g gen_file       generate default config file(all rules set to WARN)  
    -r report_html    file to write the full ZAP HTML report  
    -w report_md      file to write the full ZAP Wiki(Markdown) report  
    -x report_xml     file to write the full ZAP XML report  
    -a                include the alpha passive scan rules as well  
    -d                show debug messages  
    -P                specify listen port  
    -D                delay in seconds to wait for passive scanning  
    -i                default rules not in the config file to INFO  
    -l level          minimum level to show: PASS, IGNORE, INFO, WARN or FAIL, use with -s to hide example URLs  
    -n context_file   context file which will be loaded prior to scanning the target  
    -p progress_file  progress file which specifies issues that are being addressed  
    -s                short output format - dont show PASSes or example URLs  
    -z zap_options ZAP command line options e.g. -z "-config aaa=bbb -config ccc=ddd"  
```
  

###  Scan Rules

  
By default the script will use a [Scan Policy](https://github.com/zaproxy/zap-core-help/wiki/HelpStartConceptsScanpolicy) tuned for APIs.  
This disables rules that are focused on client side (e.g. browser) issues, such as the ones for detecting Cross Site Scripting, and also adds 2
additional rules that are implemented as scripts:  

  * [Alert_on_HTTP_Response_Code_Errors.js](https://github.com/zaproxy/zaproxy/blob/develop/docker/scripts/scripts/httpsender/Alert_on_HTTP_Response_Code_Errors.js)
  * [Alert_on_Unexpected_Content_Types.js](https://github.com/zaproxy/zaproxy/blob/develop/docker/scripts/scripts/httpsender/Alert_on_Unexpected_Content_Types.js)

You can change which rules are run and how failures are reported using a configuration file. This allows you to tune the scanning script to meet
your requirements for each of your APIs.  
To generate a configuration file use the ‘-g’ option. This will create a file which includes all of the [active](https://github.com/zaproxy/zap-
core-help/wiki/HelpStartConceptsAscan) and [passive](https://github.com/zaproxy/zap-core-help/wiki/HelpStartConceptsPscan) scan rules available:
<https://github.com/zaproxy/zaproxy/wiki/ZAP-API-Scan#configuration-file>. You can edit this file using a text editor.  
Changing a passive rule will only affect how failures are reported, but changing an active rule to IGNORE will prevent the rule from running.
This is to reduce the overall scan time – passive rules are very quick while active rules can take a significant amount of time.  
  

###  Specifying Values

  
ZAP will use a set of default values when importing APIs. In some cases these will not be suitable values for a specific application, and
therefore will not exercise enough of the code. For example a username of “test” might not cause a new user to be created as it is not a valid
email address.  
For APIs defined using OpenAPI/Swagger you can specify the values you want ZAP to use via ZAP command line options.  
For example the options:  
```
  -config formhandler.fields.field\\(0\\).fieldId=username \  
  -config formhandler.fields.field\\(0\\).value=test@example.com \  
  -config formhandler.fields.field\\(0\\).enabled=true \  
  -config formhandler.fields.field\\(1\\).fieldId=phone \  
  -config formhandler.fields.field\\(1\\).value=012345678 \  
  -config formhandler.fields.field\\(1\\).enabled=true  
```
Will supply the following values to the named fields:  
  username -> test@example.com  
  phone -> 012345678  
Support for specifying values for APIs defined using SOAP is also planned – if you need this then get in touch with the ZAP development team and
we will do our best to prioritize this.  
  
Note that as these are ZAP command line options you will need to specify them to the script using the -z script option.  
If you need to specify lots of options then you can put them all in a property file, eg called options.prop  
You can then run the API scan using a command like:  

```
docker run -v $(pwd):/zap/wrk/:rw -t owasp/zap2docker-weekly zap-api-scan.py \  
    -t https://www.example.com/openapi.json -f openapi \  
    -z "-configfile /zap/wrk/options.prop"  
```
The `"-v $(pwd):/zap/wrk/:rw"` is a Docker option which maps the current working directory to a folder called /zap/wrk in the Docker instance.  
  

###  Authentication

  
Some of your APIs may be protected using authentication mechanisms.  
For mechanisms that use header values we recommend that you obtain suitable tokens for your application using whatever means are appropriate and
then tell ZAP to use them via another set of command line options.  
For example the options:  

```
  -config replacer.full_list\\(0\\).description=auth1 \  
  -config replacer.full_list\\(0\\).enabled=true \  
  -config replacer.full_list\\(0\\).matchtype=REQ_HEADER \  
  -config replacer.full_list\\(0\\).matchstr=Authorization \  
  -config replacer.full_list\\(0\\).regex=false \  
  -config replacer.full_list\\(0\\).replacement=123456789 \  
  -config replacer.full_list\\(1\\).description=auth2 \  
  -config replacer.full_list\\(1\\).enabled=true \  
  -config replacer.full_list\\(1\\).matchtype=REQ_HEADER \  
  -config replacer.full_list\\(1\\).matchstr=AnotherHeader \  
  -config replacer.full_list\\(1\\).regex=false \  
  -config replacer.full_list\\(1\\).replacement=abcdefghi  
```
will cause the following headers to be added to every request ZAP makes:  
  Authorization: 123456789  
  AnotherHeader: abcdefghi  
You can specify as many headers as you need to by using incrementing indexes.  
  
This functionality is provided by the [Replacer](https://github.com/zaproxy/zap-extensions/wiki/HelpAddonsReplacerReplacer) add-on included by
default with ZAP. It is very powerful and can do much more than just inject new header values, so if you need to manipulate the requests ZAP
makes in other ways then this could be a very good option for you.  
  

###  Conclusion

  
The API scanning script is an easy way for you to automate security scanning of APIs defined using OpenAPI/Swagger or SOAP.  
It can be used ‘out of the box’ or quickly tuned to meet your requirements via simple command line and configuration file options.  
  
A future blog post will explain how you can automate the security scanning of HTML based web applications in a very similar way.  
  

