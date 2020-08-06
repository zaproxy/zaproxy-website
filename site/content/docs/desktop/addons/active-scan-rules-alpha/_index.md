---
# This page was generated from the add-on.
title: Active Scan Rules - Alpha
type: userguide
weight: 1
cascade:
  addon:
    id: ascanrulesAlpha
    version: 28.0.0
---

# Active Scan Rules - Alpha

The following alpha quality active scan rules are included in this add-on:

## An example active scan rule which loads data from a file

This implements an example active scan rule that loads strings from a file that the user can edit.  
For more details see: [Hacking ZAP Part 4: Active Scan Rules](/blog/2014-04-30-hacking-zap-4-active-scan-rules/).

Latest code: [ExampleFileActiveScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/ExampleFileActiveScanner.java)

## Cloud Metadata Attack

Attempts to abuse a misconfigured NGINX server in order to access the instance metadata maintained by cloud service providers such as AWS, GCP and Azure.  
All of these providers provide metadata via an internal unroutable IP address '169.254.169.254' - this can be exposed by incorrectly configured NGINX servers and accessed by using this IP address in the Host header field.

Latest code: [CloudMetadataScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/CloudMetadataScanner.java)

## .env Information Leak

Checks for web accessible .env files which may leak sensitive information (such as usernames, passwords, API or APP keys, etc.).

Latest code: [EnvFileScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/EnvFileScanner.java)

## Example Active Scanner: Denial of Service

This implements a very simple example active scan rule.  
For more details see: [Hacking ZAP Part 4: Active Scan Rules](/blog/2014-04-30-hacking-zap-4-active-scan-rules/).

Latest code: [ExampleSimpleActiveScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/ExampleSimpleActiveScanner.java)

## Hidden File Finder

This scan rule checks for various web accessible files which may leak administrative, configuration, or credential information. The built-in set of payloads are based on [Snallygaster](https://github.com/hannob/snallygaster) by Hanno Böck. Such payloads are verified by checking response code, and content. If the response code is 200 (Ok) then additional content checks are performed to increase alert confidence. If the response code is 401 (Unauthorized) or 403 (Forbidden) then an alert is raised with lower confidence. **Note:** If the Custom Payloads addon is installed you can add your own hidden file paths (payloads) in the Custom Payloads options panel. For custom payloads only the response status code is checked. If there is a requirement to include a content check then it is also possible to add payloads to the `json/hidden_files.json` file in ZAP's user directory.

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

Latest code: [HiddenFilesScanRule.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/HiddenFilesScanRule.java)

## LDAP Injection

LDAP Injection may be possible. It may be possible for an attacker to bypass authentication controls, and to view and modify arbitrary data in the LDAP directory.

Latest code: [LDAPInjection.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/LDAPInjection.java)

## NoSQL Injection - MongoDB

This rule attempts to identify MongoDB specific NoSQL Injection vulnerabilities. It attempts various types of attacks including: boolean based, error based, time based, and authentication bypass. It will also attempt JSON parameter specific payloads if the scan is configured to include JSON parameter variants. Latest code: [MongoDbInjection.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/MongoDbInjection.java)

## XSLT Injection Scanner

This active scanner checks for certain responses induced by injecting XSL transformations.   
It attempts to obtain those responses with payloads which may induce: error responses, disclosure of library/framework vendor name, remote port scanning, or command execution.

Latest code: [XSLTInjection.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/XSLTInjection.java)
