---
title: "Automate checking ASVS controls using ZAP scripts"
description: "Automate checking ASVS controls using ZAP scripts"
summary: "Write scripts in ZAP which will check a target application's compliance against ASVS controls."
type: post
images:
- https://www.zaproxy.org/blog/2021-02-10-automate-checking-asvs-controls-using-zap-scripts/images/asvs_40_levels.png
tags:
- blog
- asvs
- guest
date: "2021-02-10"
addSocialPreview: true
authors:
 - "BlazingWind"
---

Many security teams are required to provide security insights, and
levels, of web applications they own. Security levels, or security
posture, change dynamically based on the attack surface, known
vulnerabilities, and numerous other factors. Due to this dynamic nature,
assessing a security level is a challenging task, which needs to be
performed on a regular basis and usually undertaken by comparing current
implementation against controls defined in a standard, such as [OWASP
Application Security Verification
Standard](https://owasp.org/www-project-application-security-verification-standard/).

The ASVS Standard spans 14 sections and over 260 controls, each assigned
a level: level 1 that all applications should have, level 2 for
applications processing sensitive data, and level 3 for critical
applications. Level 1 controls are assessed to be fully
penetration-testable from a black box perspective and this article
focuses only on level 1 controls. Considering how broad ASVS is, it is
difficult to ensure that every nook and cranny of an application is
compliant with ASVS controls.

![ASVS levels](./images/asvs_40_levels.png)

And here raises a question: how to ensure more coverage of an
application and make auditing applications with OWASP ASVS easier,
faster, and more effective?

## Enter OWASP ZAP and Its Scripting Engine

A web application rarely consists only of one main page -- it usually
has subdirectories and a lot of resources loaded on each of them. Such
resources, for example third-party JavaScript, will usually be
configured differently than JavaScript belonging to the tested domain.
To ensure as broad coverage of the application as possible, ZAP uses a
traditional spider and an AJAX spider. Those cover the first part of the
question.

As for making auditing applications easier, faster and more effective,
let's look closer at the [ZAP scripting engine](/docs/desktop/addons/script-console/).
ZAP allows for scripting in JavaScript, Python, Ruby, Groovy, ZEST and
Kotlin. All these languages are supported, but in their Java equivalent
-- e.g. Jython for Python. It is also possible to write an extension in
Java. From the scripting engine it is possible to call internal Java
structures of ZAP and do technically, all that ZAP can. The
extensibility and support of languages is brilliant and allows for a lot
of freedom.

There are many types of scripts that ZAP offers, a few of them include
passive and active scripts. Passive scripts are used to passively scan
web traffic passing through the proxy. They can be used to assess
response headers, note status codes in response to requests, analyze
response body (JavaScript, HTML code of the page), and extract
parameters. Active scripts, in comparison to passive scripts, send
requests to the target. Those can include requests that test for a
specific vulnerability -- injection, path traversal, that attempt to
gather information about the server or simply assess a response to a
certain request.

All in all, ZAP is a great tool for DevSecOps, security regression
testing and dynamic analysis of compliance with some of ASVS controls.

## Integrating ZAP and ASVS

There are many ASVS controls that would benefit from ZAP's DAST
capabilities. Below are two of them with corresponding passive and
active scripts.

Each control in the ASVS is usually very specific and tests one
functionality, feature or behaviour. This in turn makes it fairly easy
to write a script for testing that one specific area. Take control
v4.0.2-14.4.1, for which I have written a script which is available
[here](https://github.com/BlazingWind/OWASP-ASVS-4.0-testing-guide/blob/main/ZAP-scripts/14-4-1-Charset.py).

*"Verify that every HTTP response contains a Content-Type header.
text/\*, /+xml and application/xml content types should also specify a
safe character set (e.g., UTF-8, ISO-8859-1)."*

The control is easy to check manually, but a manual control does not
give as good coverage as a ZAP script with a crawler. Additionally, the
script can be reused for doing periodical controls on an application
eliminating the need for a person to do it manually. Here we would use a
passive scan script, because there is no need to modify or send any
request, but only passively scan the passing traffic. There already
exists [a rule](/docs/alerts/10019/) in
ZAP that checks if the Content-Type header is missing, but it does not
check the charset, hence I have written this script.

```Python
import re

def scan(ps, msg, src):

  alertTitle = "14.4.1 Verify that every HTTP response contains a content type header specifying a safe character set (e.g., UTF-8, ISO 8859-1)."
  alertDescription = "The header Content-Type denotes what the content is encoded in. Declaring it hinders XSS attacks leveraging different encodings than the server expects."
  alertRisk = 0
  alertReliability = 1
  header = str(msg.getResponseHeader().getHeader("Content-Type"))
  alertSolution = ["Ensure that Content-Type is included in the response.","Ensure that Content-Type header with text/*, /+xml and application/xml content types specifies a safe character set (e.g., UTF-8, ISO-8859-1)."]
  alertParam = "Content-Type header"
  alertInfo = "Control failure"
  cweID = 173
  wascID = 0

  patternType = re.compile(r"text/.*|.*\+xml.*|application/xml.*")
  patternCharset = re.compile(r"(?i).*UTF-8.*|.*ISO-8859-1.*")

  if (header == "None"):
    ps.raiseAlert(alertRisk, alertReliability, alertTitle, alertDescription, 
      msg.getRequestHeader().getURI().toString(), 
      alertParam, "", alertInfo, alertSolution[0], header, cweID, wascID, msg);
  elif (re.search(patternType,header)):
    charsets = re.search(patternCharset,header)
    if not charsets:
      ps.raiseAlert(alertRisk, alertReliability, alertTitle, alertDescription, 
        msg.getRequestHeader().getURI().toString(), 
        alertParam, "", alertInfo, alertSolution[1], header, cweID, wascID, msg);
```
Breaking down the above script, the flow is as follows:

1.  first the script checks that each HTTP response contains a Content-Type header

2.  Next it uses a regex to search for responses with Content-Type header equalling to on of the types: text/\*, /+xml and application/xml

3.  Finally, it checks if the header also specifies either UTF-8 or ISO-8859-1 charset directive - if not, the control is failed and an alert is raised.

A similar workflow follows with each control that can be assessed simply
by what an HTTP request or response contains.

There are other cases, which may not be as straightforward to assess and
may require sending HTTP requests - in this case an active script should
be used. Take control v4.0.2-14.5.3, for which I have written a script
available
[here](https://github.com/BlazingWind/OWASP-ASVS-4.0-testing-guide/blob/main/ZAP-scripts/14-5-3-CORS-header.py).

*'Verify that the cross-domain resource sharing (CORS)
Access-Control-Allow-Origin header uses a strict allowlist of trusted
domains to match against and does not support the \"null\" origin.'*

Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional
HTTP headers to tell browsers to give a web application running at one
origin, access to selected resources from a different origin. A web
application executes a cross-origin HTTP request when it requests a
resource that has a different origin (domain, protocol, or port) from
its own. The Origin request header indicates where a fetch originates
from. It is set automatically by the user agent to describe the security
contexts that caused the user agent to initiate an HTTP request. For
more information on CORS, consult the guide under control 14.5.3 Origin
header.
```Python
import re

alertTitle = '14.5.3 Verify that the cross-domain resource sharing (CORS) Access-Control-Allow-Origin header uses a strict white-list of trusted domains to match against and does not support the "null" origin.'
alertDescription = "This controls checks if CORS policy is properly configured."
alertRisk = 0
alertReliability = 1
alertSolution = ["Use a strict whitelist of sites allowed to request resources of your domain", ""]
alertInfo = "Control failure"
cweID = 346
wascID = 0

origin = "exampletestsite.com"

def scanNode(sas, msg):
  origMsg = msg;
  # Copy requests before reusing them
  msg = origMsg.cloneRequest();
  
  # GET resource that doesn't exist
  msg.getRequestHeader().setHeader("Origin", origin)

  # sendAndReceive(msg, followRedirect, handleAntiCSRFtoken) 
  if (sas.isStop()):
    return
  sas.sendAndReceive(msg, True, False);

  header = str(msg.getResponseHeader().getHeader("Access-Control-Allow-Origin"))
  if (header == "*"):
    alertParam = "wildcard directive in Access-Control-Allow-Origin"
    sas.raiseAlert(alertRisk, alertReliability, alertTitle, alertDescription, 
      msg.getRequestHeader().getURI().toString(), 
      alertParam, "", alertInfo, alertSolution[0], "", cweID, wascID, msg);
  elif (header == origin):
    alertParam = "Access-Control-Allow-Origin reflects Origin header"
    sas.raiseAlert(alertRisk, alertReliability, alertTitle, alertDescription, 
      msg.getRequestHeader().getURI().toString(), 
      alertParam, "", alertInfo, alertSolution[0], "", cweID, wascID, msg);
  elif (header == "null"):
    alertParam = "Access-Control-Allow-Origin is null"
    sas.raiseAlert(alertRisk, alertReliability, alertTitle, alertDescription, 
      msg.getRequestHeader().getURI().toString(), 
      alertParam, "", alertInfo, alertSolution[0], "", cweID, wascID, msg);
```
The above script checks for misconfiguration of CORS and the flow is as
follows:

1.  Sends a request to the target and looks for the header found in the response.

2.  It then copies the request and starts an active scan with the Origin header value set to "exampletestsite.com" and sends the request onward.

3.  After receiving a response it looks for a header "Access-Control-Allow-Origin". If the header is set to wildcard, null or reflects "exampletestsite.com", it means that CORS is notusing a strict allowlist and the script raises an alert.

In order to help you automate as much of the ASVS as possible, I've
created over 25 scripts to help you test ASVS controls.

## ASVS Testing Guide

Testing an application or function against the ASVS in order to gain an
understanding of the state of the application, can require a lot of
knowledge. To make it easier to get started with using ASVS in
companies, I have started writing a guide to testing the ASVS. The idea
behind it was to be concise and easy to understand ASVS controls even
for a person without (much) security knowledge. It includes a
description why a control is important, consequences of not complying to
the control, how to test the control, and what are the specific
requirements for the control to be considered successful.

Previously we have looked at a CORS control, which is documented in the
guide
[here](https://github.com/BlazingWind/OWASP-ASVS-4.0-testing-guide/blob/main/14-Configuration/14-5-3-CORS-header.md).
This is one of the controls that have the longest subchapter in the
testing guide - usually I try to keep them at 400 words or fewer, and
not to get too much into technical details, to make it easy to
understand and accessible to everyone.The charset control that we looked
at earlier has its explanation
[here](https://github.com/BlazingWind/OWASP-ASVS-4.0-testing-guide/blob/main/14-Configuration/14-4-1-Charset.md).

Does the project sound exciting to you or would you like to contribute?
I am looking for people that would be willing to write ZAP scripts to
verify controls, review the controls that are already in the testing
guide or add new controls to it. Feel free to drop me a message on
Twitter [&commat;BlazingWindSec](https://twitter.com/BlazingWindSec)

