---
title: "ZAP Newsletter  2015 November"
type: post
draft: true
tags:
- TODO
date: "2015-11-02"
authors:
    - simon
---


##  Introduction

Welcome to the first monthly ZAP newsletter.  
We plan to cover pretty much anything ZAP related in these newsletters, including newly created or updated add-ons, new features just
implemented and 3rd party tools.  
We also encourage contributions from people like yourself - see the last section for details.  
Oh, and please let us know what you think of this newsletter via the [Feedback Form](https://docs.google.com/forms/d/1_XaettHPjLOD56AbSlui67gk-771yJ_xfd7w2lSEdXw/viewform?usp=send_form)!  
  
##  News

The big news this month is that we will be releasing **ZAP 2.4.3** very soon, ie hopefully in the first week of November. This will be an
enhancement and bug fix release, and as always we recommend you update asap.  
  
In other news, I ran the first online ZAP Q&A; session last month. You can listen to a recording of it here:
<http://zaproxy.blogspot.com/2015/10/zap-q-session-tuesday-13th-octobr-2015.html>  
If you do listen to it then please fill out the feedback form linked off that page.  
  

##  New / Improved Add-ons

_This section details add-ons that have been added or significantly updated since the last newsletter (or in the last couple of months in this
case;)_  
Add-ons are available to download and install within ZAP.  
Just click on the ‘Manage Add-ons’ toolbar button and select the Marketplace tab:  
  
![](/img/zap-screenshot-browse-addons.png)  
  
Note that all add-ons on the Marketplace are completely free and open source and anyone can publish add-ons to it - see the [zap-extensions
wiki](https://github.com/zaproxy/zap-extensions/wiki/AddOnDevelopment) for details.  
  
The following new add-ons have been recently released:  
  

###  DOM XSS - Alpha

An Active Scan rule for [detecting DOM XSS](/docs/desktop/addons/dom-xss-active-scan-rule/) vulnerabilities.  
It launches browser windows and sends attack payloads to all of the relevant DOM elements.  
  

###  Context Alert Filters - Alpha

[Context Alert Filters](/docs/desktop/addons/alert-filters/) allow you to automatically override the risk levels of any alerts raised by the active and passive scan rules within a context.  
  

###  Revisit - Alpha

Have you ever wanted to be able to browse an application you tested with ZAP at a specific time, perhaps when you dont have access to it, or
after its been changed in some way? If so then this add-on is for you!  
The [add-on](/docs/desktop/addons/revisit/) allows you to instruct ZAP to return content from the ZAP history between specified dates rather than forwarding the requests to the
site. This allows you to apparently browse and use a website that you no longer have access to. It also allows you to see what it looked like at
between specific times, which is useful if the application has since changed.  

##  New Features

The following new features have been implemented are available in the weekly releases: <https://github.com/zaproxy/zaproxy/wiki/Downloads#zap-weekly>  
  

###  Updating Add-ons from the Command Line

The ZAP command line has been enhanced to support updating add-ons.  
There are 2 new options:  

  * -addoninstall `<addon>` Install the specified add-on from the ZAP Marketplace
  * -addonupdate Update all changed add-ons from the ZAP Marketplace

These options take effect before other command line options such as ‘-quickurl’ so that add-ons will be installed and updated before attacking a
target application.  
  

###  Data Driven Content

ZAP has been enhanced to add the concept of ‘data driven content’ - path elements that represent data rather than the structure of an
application.  
For example, these 3 URLs represent the same page but with different data:  

  * https://www.example.com/app/company1/p1?ddd=eee 
  * https://www.example.com/app/company2/p1?ddd=fff 
  * https://www.example.com/app/company3/p1?ddd=ggg 

By default ZAP will represent them as three separate leaf nodes:  

  * https://www.example.com 
    * app 
      * company1 
        * GET:p1(ddd) 
      * company2 
        * GET:p1(ddd) 
      * company3 
        * GET:p1(ddd) 

This is a problem because ZAP will now attack all 3 pages when it only needs to attack one of them.  
In this case attacking the same page 3 times is not a big problem, but if you have hundreds or thousands of pages like this then the default
behaviour will significantly increase the time it takes to scan the application.  
  
The 'company' nodes are 'data driven content' - URL parameters that contain data instead of representing part of the application structure.  
You can now define data driven content by adding the application to a Context and then configuring them via the Context Structure page.  
Once you have done this the pages will be correctly represented as 1 leaf node:  

  * https://www.example.com 
    * app 
      * «company» 
        * GET:p1(ddd) 

The characters « and » are used to indicate that this is a 'special' node and the node name (in this case 'company') can be set by you to
indicate what that node represents.  
  

##  Tutorial: Check for Updates

_This section will teach you more about a different ZAP feature every month, starting with the Check for Updates functionality._  
ZAP is currently the most actively developed open source web application security tool, and we are continually adding new features and fixing
bugs.  
ZAP is made up of the ‘core’ and an ever growing number of add-ons. Anyone can develop ZAP add-ons, not just the ZAP 'core team'.  
In order to update the core we have to release a new version of ZAP, but add-ons can be updated at any time.  
For this reason we are trying to move as much functionality into add-ons as possible, even features that you might think of as being essential
to ZAP, like the scanner rules.  
  
Add-ons have an associated ‘quality’:  

  * [Release](https://github.com/zaproxy/zap-extensions/wiki/AddOnsRelease) : which can be expected to be of high quality and fit for purpose 
  * [Beta](https://github.com/zaproxy/zap-extensions/wiki/AddOnsBeta) : which are of reasonable quality and mostly fit for purpose 
  * [Alpha](https://github.com/zaproxy/zap-extensions/wiki/AddOnsAlpha) : which are typically at an early stage of development - they may be incomplete, contain significant issues or cause stability problems 

All new add-ons start off as alpha and only progress to beta and release after suitable reviews.  
  
The Check for Updates component is the way you can keep your copy of ZAP up to date.  
You can configure it via the “Check for Updates” Options screen:  
  
{{< img "images/zap-cfu-options.png" >}}

The following options are available:  
  
**Check for Updates on start up**  
You must select this option in order for the Check for Updates functionality to work. This is very strong recommended - see below for the
details of what will happen if you select this option.  
  
**Automatically download new ZAP releases**  
If selected then new versions of ZAP will be downloaded when available. You will be prompted to install them when you restart ZAP, but you can
choose not to.  
  
**Check for updates to the add-ons you have installed**  
If selected then you will be notified when you run the ZAP UI whenever there are newer versions of any of the add-ons you have installed. This
is strongly recommended.  
  
**Automatically install updates to the add-ons you have installed**  
If selected then ZAP will automatically download and install updates to the add-ons you have installed. This is recommended, but we understand
that not everyone will want to do this.  
  
**Automatically install updates to the scanner rules you have installed**  
If selected then ZAP will automatically download and install updates to only the scanner rules you have installed. This is very useful when
using ZAP in a Continuous Integration environment.  
  
**Report new release/beta/alpha quality add-ons**  
If selected then you will be notified whenever new or updated add-ons of the relevant quality are available, even if you don’t have them
installed. This is an easy way for you to learn about new functionality as soon as it becomes available.  
  
If you do choose to “Check for Updates on startup” then ZAP will make one request to a ‘Bitly’ URL. The only information about you that is
included in this request is the version of ZAP you are running - we need this to be able to determine which add-ons and associated versions are
suitable for you.  
The Bitly URL resolves to an XML file on GitHub which gives full details of the latest ZAP release and the add-ons available for the release you
are using.  
The current file is: <https://github.com/zaproxy/zap-admin/blob/master/ZapVersions-2.4.xml>  
All downloads are served over HTTPS and are checked against the hash included in the XML file.  
  
ZAP will not install any add-ons downloaded over HTTP or which do not match the specified hash.  
  
The Check for Updates code is in the zaproxy
[org.zaproxy.zap.extension.autoupdate](https://github.com/zaproxy/zaproxy/tree/develop/src/org/zaproxy/zap/extension/autoupdate) package - if
you have any questions on how it works then just ask on the [ZAP Developers Group](http://groups.google.com/group/zaproxy-develop).  
  

##  3rd Party Tool: BDD-Security

_Each month we plan to cover a 3rd party tool that is related to ZAP in some way. These tools can be open source, closed source, free or
commercial._  
This month we’re covering BDD-Security, ℅ Stephen de Vries ([@stephendv](https://twitter.com/stephendv))  

{{< img "images/bdd-security.png" >}}
  
BDD-Security is a security testing framework that takes the principles of Behaviour Driven Development (BDD) and applies them to security
testing. It aims to solve two key problems:  
How to automatically perform automated security testing of a web application and have those tests run as part of a continuous
integration/deployment pipeline?  
How to define the security requirements of a web application so that they are visible and useful to developers and don't become out of date as
the application grows?  
  
By using a BDD framework like JBehave ([www.jbehave.org](http://www.jbehave.org/)), we can write automated acceptance tests for security in a
natural language syntax that is understood by all members of a technical team: developers, operations, security, QA and business analysts. At
the same time these tests can be run as if they were normal JUnit tests and included in a build pipeline, allowing the test owners to decide on
the passing and failing criteria for each test. The framework includes a default “baseline” set of tests which are broadly applicable to a range
of web applications and includes tests against the SSL configuration, HTTP server headers, Authentication, Session Management as well as
automated vulnerability scanning using ZAP and Nessus.  
  
BDD-Security uses OWASP ZAP as a key component to performing the non-functional security tests aimed at the web tier, and uses ZAP's extensive
API to perform spidering, scanning and re-sending of captured requests. The other key component is WebDriver (Selenium) which allows the tests
to navigate the application and submit forms. Combining these two components means that it's possible to mimic the behaviour of a security
analyst and any test cases that they could perform manually, can now be recorded using JBehave + WebDriver + ZAP.  
  
![](//3.bp.blogspot.com/-Nch4bYnZVNo/VjNkmWRCSmI/AAAAAAAAAdU/SoRU5UiZMpM/s640/Screen%2BShot%2B2015-10-27%2Bat%2B07.05.34.png)  
  
More information including a getting started guide can be found at: <http://www.continuumsecurity.net/bdd-intro.html>  
  

##  Upcoming Talks and Training

**Bill Matthews** will be giving a hands on ZAP session titled “OWASP ZAP: From zero to hero” at the EUROstar Software Testing Conference in
Maastricht on November 5th 10:45-11:30:  
<http://conference.eurostarsoftwaretesting.com/conference/social/test-lab/>  
  
 **Aaron Guzman** will be running a training session titled "Web Pentesting Using OWASP Tools" (which will, of course, include ZAP) at AppSec
California in Santa Monica on January 25 9:00am-5:00pm: <http://sched.co/4Ouf>  
  

##  Featured Contributor: Kingthorin

_And each month we plan to introduce you to one of the many ZAP contributors._  
**Q: Who are you?**

**A:** Rick (aka [Kingthorin](https://github.com/kingthorin)). AppSec guy, breaker of things.  
  
**Q: Where are you based?**

**A:** Canada!  
  
**Q: What do you do in your day job?**

**A:** In my day job I break stuff: I do Vulnerability Assessment and Penetration Testing. Developers or SysAdmins having a bad day is generally a
good day for me.  
  
**Q: Why do you contribute to ZAP?**

**A:** It's different from my day job. I spend all day figuring out how other people's systems and apps are or can be broken. Contributing to ZAP
gives me a chance to build something. The contrast is nice to have, plus it forces me to grow in different ways and see technology from a
different angle.  
  
**Q: How do you contribute to ZAP?**

**A:** I do some development work, take part in the user and dev forums. Ask lots of questions, rock the boat (a little ;).  
  
**Q: What would you like to contribute in the future?**

**A:** Hmmmm that's an interesting question. I have ideas for a few different extensions that I haven't had time to tackle yet. Hopefully in late
2015 or sometime in 2016 I'll talk myself into tackling those.  
  
**Q: What do you like about the ZAP community?**

**A:** Everyone is supportive and encouraging!  
  
**Q: What do you get out of contributing?**

**A:** I get to make a great Open Source tool do things I can use in my day job, and help others to do things they need in their jobs. It also
forces me to learn about things like Git/Github, and simple web development tasks in generating content for ZAP PoC testing, etc. Of course it
helps me learn about Java and software development itself.  
  
**Q: Do you have any advice for people who would like to contribute to ZAP?**

**A:** Just do it! Jump in with both feet, deep end of the pool. There's no time like the present. People here will help you, support you,
encourage you, and in a good way (a great way) challenge you. There are so many ways you can contribute -[ Community
Scripts](https://github.com/zaproxy/community-scripts/), fixing or enhancing code based on[ issue
tracker](https://github.com/zaproxy/zaproxy/issues) on Github (or your own ideas), developing your own[ extensions](https://github.com/zaproxy
/zap-extensions), writing tutorials, making training videos, etc.  
  
**Q: Do you contribute to any other open source projects?**

**A:** I've also contributed to the[ OWASP Testing Guide](https://www.owasp.org/index.php/OWASP_Testing_Project) and[
OSSTMM](http://www.isecom.org/research/osstmm.html) in the past. As for other Open Source software projects, no yet, though because of ZAP I
have plans and a few ideas floating around the back of my head.  
  
**Q: What do you do outside of work?**

**A:** Outside of work I like camping, gaming (I started playing WoW on day one of release and still play), geocaching, and cooking.  
  
**Q: What do you [most] dislike about the ZAP development?**

**A:** There really isn't much I dislike about it. Most of the things I dislike on are my side of the equation. Not having enough time and not
actually being a Java dev.  
  
**Q: What do you think could be done [a lot] better?**

**A:** From my point of view: The one thing I think we need to get better at is promoting scanners Alpha > Beta > Release.  
  
Sadly I don't have any ideas for solutions, but it would be really nice if we could somehow gather stats or get users to provide feedback on
usage, false positives, etc. I often wonder if we have 100s or 1000s of users, how often they use ZAP (everyday, every project, every
assessment.....), what functionality they use (mostly proxy, mostly point and shoot, totally active with user auth setup, etc.), only release
rules or all 3 qualities. I know we've done surveys/questionnaires in the past, what kind of response rate have we had?  
  

##  Feedback

So … did you find that useful?  
Please fill in this quick [Feedback Form](https://docs.google.com/forms/d/1_XaettHPjLOD56AbSlui67gk-771yJ_xfd7w2lSEdXw/viewform?usp=send_form)
so that we can make sure this newsletter is as useful to you as possible.  
  

##  Coming next month…

That depends on you!  
Let us know what you would like to see using the above feedback form.  
If you would like to write content for the newsletter then please get in touch - anything ZAP related, such as talks / training you are giving,
a 3rd party tool you develop or maybe an add-on you’d like to explain in more detail.  
And we’re also looking for one or more editors for the ZAP newsletter - you don't need any detailed ZAP knowledge, just a bit of time each month
you can dedicate to chasing up people for content and bashing it into something that reads better than this one :P Think thats you? Get in
touch!  
  
Simon Bennetts (ZAP Project Lead)  

