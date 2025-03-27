---
title: "ZAP Newsletter - 2016 March"
type: post
tags:
date: "2016-03-29"
authors:
    - simon
---


##  Introduction

Welcome to the March newsletter, read on for some really good news, details of the new site level stats ZAP now supports and an introduction to
scripting.  
  
##  News

The big new this month is that ZAP was voted the **TOP** free/open source security tool for 2015 by Toolswatch readers:
<https://www.toolswatch.org/2016/02/2015-top-security-tools-as-voted-by-toolswatch-org-readers/>  
This is the second time we've come top and is a great validation of what we are doing. Thank you to all of you who voted for us!  
  
Other important news is that ZAP is taking part in the Google Summer of Code (GSoC) 2016. For those of you who don't know, GSoC pays students to
work on open source projects over the summer, and we've had key ZAP features like WebSockets, the Ajax Spider and Access Control testing
implement by GSoC students.  
The deadline for submissions has just passed and we've had 9 ZAP proposals. We'll evaluate those asap, but we don't currently know how many slots
OWASP (and ZAP) will actually get so fingers crossed!  
  
And in other breaking news, CommonSense Media have just published a Information Security Primer for Evaluating Educational Software which makes
heavy use of ZAP - you can read all about it here: <https://www.graphite.org/privacy/blog/information-security-primer-initial-release>  
  

##  New / Improved Add-ons

_This section details add-ons that have been added or significantly updated since the last newsletter._  
A new version of the Zest add-on has been published which included a significant number of bug fixes. There is also an update to the Selenium
add-on which includes the latest Selenium release that ensures Firefox doesn't visit the 'first run' page every time it is started.  
  
The Alert Filters add-on has also been updated with various bug fixes and has been promoted to beta status. This add-on allows you to configure
rules which automatically change the level at which alerts are raised for specific contexts. For more details see the [help pages](http://localhost:3000/docs/desktop/addons/alert-filters/). This add-on is included with the weekly releases and
may well be included by default in future full releases.  
  

##  New Features

_This section details enhancements that have been made to the core and are available in the latest weekly release._  
The traditional spider has been updated so that you can constrain it to a subtree when using it via the UI or API. For example this means that
with this option if you start spidering from `https://www.example.com/app1` you can be sure that it won't explore any other apps under
`https://www.example.com/` - without this option it will explore anything in that domain it finds links to.  
  
ZAP now records a range of site based statistics, including:

  * Response codes, e.g. 
    * stats.code.200
    * stats.code.302
  * Content types, e.g. 
    * stats.contentType.text/css
    * stats.contentType.text/html;charset=utf-8
  * Tags (some of which are built in but can also be user defined), e.g. 
    * stats.tag.Password
    * stats.tag.Hidden
    * Anticsrf tokens generated
    * stats.acsrf.anticsrf
  * Response times (using a logarithmic scale) e.g. 
    * stats.responseTime.1
    * stats.responseTime.2
    * stats.responseTime.4
    * stats.responseTime.8
    * stats.responseTime.16
  * Authentication information, e.g. 
    * stats.auth.success
    * stats.auth.failure
    * stats.auth.state.loggedin
    * stats.auth.state.loggedout
    * stats.auth.state.noindicator
    * stats.auth.state.unknown

The stats are currently only available via the API, but they can be really helpful, for example if you are trying to work out how effectively
ZAP has scanned a large site.

##  Tutorial: Introduction to Scripting

_This section teaches you more about a different ZAP feature every month._  
There is an almost infinite range of web applications and so it's not possible for any tool to build in support for all of the strange things you
will encounter. As ZAP is an open source project you can change the source code to handle anything you like. However this isn't always practical
- ZAP is a large and complex project and even if you understand the code base very well, firing up an IDE to rewrite ZAP every time you
encounter something strange is definitely not ideal.  
Fortunately ZAP has powerful scripting capabilities, and ZAP scripts can access all of the code and data structures.  
There are so many aspect to ZAP scripting that one tutorial won't be enough, so we're going to start with an overview.  
  
Scripting support is included in all ZAP releases, but if you want to use scripting in the 'core' version then you will really need to download
the Script Console and Zest add-ons from the marketplace.  
By default ZAP supports ECMAScript (JavaScipt) and [Zest](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Zest), a graphical security
scripting language from the Mozilla Security team.  
You can also download add-ons which extend support to Jython and JRuby. ZAP will be able to support any language that supports [JSR
223](https://www.jcp.org/en/jsr/detail?id=223) so if there's another scripting language you would like us to support then please raise an
[enhancement request issue](https://github.com/zaproxy/zaproxy/issues/new?template=feature-request.yml).  
To use ZAP scripts from the UI you need to use the Scripts and Script Console tabs, which are hidden by default and can be accessed via the
relevant tabs with the green plus sign.  
  

### Scripts tab

{{< img "images/Scripts-script-tab.png" >}}  
The Scripts tab shows all of the scripts available in a tree view.  
There are 2 nodes under the top 'Scripting' node:

  * Scripts: the scripts that you have available
  * Templates: the templates from which you can create scripts

Underneath both of these nodes are the full list of script types that are supported. Script types are pluggable, which means that any ZAP add-on
can register its own script types. The following script types are included with ZAP by default:

  * Active Rules - these run as part of the Active Scanner and can be individually enabled.
  * Authentication - scripts that are invoked when authentication is performed for a Context. To be used, they need to be selected when configuring the Script-Based Authentication Method for a Context.
  * Fuzzer HTTP Processor - these can access and change the fuzzing HTTP requests and responses, control the fuzzing process and interact with the ZAP UI.
  * Fuzzer WebSocket Processor - these can access and change the fuzzing WebSocket messages, control the fuzzing process and interact with the ZAP UI.
  * Http Sender - these run 'inline' and are similar to Proxy scripts except that they also apply to all requests that originate from ZAP.
  * Passive Rules - these run as part of the Passive Scanner and can be individually enabled
  * Payload Generator - these generate the raw attacks that the fuzzer submits to the target application.
  * Payload Processor - these can be used to change specific fuzzer payloads before they are submitted.
  * Proxy - these run 'inline', can change every request and response proxied through ZAP and can be individually enabled. They can also trigger break points.
  * Script Input Vectors - scripts for defining exactly what ZAP should attack
  * Stand Alone - scripts that are self contained and are only run when your start them manually
  * Targeted Rules - scripts that are invoked with a target URL and are only run when your start them manually

At the top of the Scripts tab is a toolbar with buttons that allow you to Load, Save and create New scripts. When you use the 'New Script…'
button you will be prompted to select one of the available templates. You can also create scripts by right clicking on the template you want to
use. Some templates are blank but many of them perform useful functions, and all of them include lots of documentation to help you customize
them.  
  

### Script Console tab

{{< img "images/Scripts-console-tab.png" >}}  
When you select a script in the Scripts tree then it is displayed in the Script Console.  
For most scripting languages this is where you will edit it, the only exception to this is Zest which is displayed graphically in the Scripts
tab. At the top of this tab is a toolbar that allows you to Run the script displayed and Stop it if it is running. Note that not all scripts can
be run in this way - some types can only be run via other ZAP components. For example Active Rules can typically only be run when you start an
Active Scan. Underneath the panel displaying the script is another panel which shows the script output.  
This panel has its own toolbar with buttons for:

  * Clearing the script output panel
  * A toggle for clearing the script output panel every time a script is run
  * A toggle for locking the automatic scrolling of the output panel
  * A toggle for switching between showing the output of all scripts and just showing the output of the selected script

### Script Options

The Scripts Options panel allows you to add any number of directories that contain scripts. The scripts must be in subdirectories named after
the relevant script type and must have an appropriate extension for the script language used.  
Scripts that can be written to will be added to the Scripts tree and those that are read only will be added to the Templates. This means you can
build up your own libraries of scripts and even manage them in a central place using a shared drive.  
  

### Community Scripts repo

The Community Scripts repo is a collection of ZAP scripts written by the community, i.e. people like you :)  
It lives on github: <https://github.com/zaproxy/community-scripts> and, not surprisingly, is structured so that it can be added as a script
directory via the Script Options. It is also available as [an add-on](/docs/desktop/addons/community-scripts/) on the ZAP Marketplace.  
  
Hopefully that gives you an overview of the scripting support in ZAP. Future tutorials will go into scripting in more detail. In the meantime if
you have any questions about ZAP scripting then we have a dedicated group where you can ask them: <https://groups.google.com/group/zaproxy-scripts>

##  Upcoming Talks and Training

ZAP will be featured in the OWASP Pune Chapter Meeting on March 31st in Pune (not surprisingly): [https://docs.google.com/forms/d/1uIbCJ8kF5xMeIB-C9_jvwvfEdex_Vly8CRU87Bupsws/viewform?c=0&w=1](https://docs.google.com/forms/d/1uIbCJ8kF5xMeIB-C9_jvwvfEdex_Vly8CRU87Bupsws/viewform?c=0&w=1)  
  
**Adrian Winckles** will be demoing ZAP at the SecureCambridge Cyber Security Technology Showcase on April 5th in Cambridge: <https://www.isc2chapter-eastofengland.co.uk/>  
  
**Azzedine RAMRAMI and Sebastien Gioria** will be demoing ZAP in their 'Securing your application with OpenSource tools' at Devoxx France on
April 22nd in Paris: <https://cfp.devoxx.fr/2016/talk/HNE-6288/Securiser_son_developpement_avec_10_outils_open-source>  
  
**Sumanth Damarla** ([@Sumanth_Damarla](https://www.twitter.com/Sumanth_Damarla)) will be giving a talk: "Securing Web @ZAP" at the I T.A.K.E
Unconference on May 19th in Bucharest: <https://itakeunconf.com/sessions/securing-web-zap/>  
  

##  Feedback

Please fill in this quick [Feedback Form](https://docs.google.com/forms/d/1_XaettHPjLOD56AbSlui67gk-771yJ_xfd7w2lSEdXw/viewform?usp=send_form)
so that we can make sure this newsletter is as useful to you as possible.  
  

##  Coming next month...

That depends on you!  
Let us know what you would like to see using the above feedback form.  
If you would like to write content for the newsletter then please get in touch - anything ZAP related, such as talks / training you are giving,
a 3rd party tool you develop or maybe an add-on you'd like to explain in more detail.  
And we're also looking for one or more editors for the ZAP newsletter - you don't need any detailed ZAP knowledge, just a bit of time each month
you can dedicate to chasing up people for content and bashing it into something that reads better than this one :P Think that's you? Get in
touch!  
  
Simon Bennetts (ZAP Project Lead)  

