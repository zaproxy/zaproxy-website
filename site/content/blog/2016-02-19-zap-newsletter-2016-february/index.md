---
title: "ZAP Newsletter  2016 February"
type: post
draft: true
tags:
- TODO
date: "2016-02-19"
authors:
    - simon
---


##  Introduction

Welcome to a slightly delayed February newsletter - we were holding on for some expected news that will now have to wait until next time ;)  
  
**Table of Contents:**  

  * News
  * New / Improved Add-ons 
  * Tutorial: Contexts 
  * 3rd Party Tool: Faraday 
  * Upcoming Talks and Training
  * Featured Contributor: Johanna Curiel
  * Feedback
  * Next Month...

##  News

We have started another [user questionnaire](https://docs.google.com/forms/d/1-k-vcj_sSxlil6XLxCFade-m-IQVeE2h9gduA-2ZPPA/viewform). We ran one
2 years ago - the answers were very helpful and definitely shaped the direction ZAP is now taking. So if you want your voice to be heard then
please fill it in.  
  
Both OWASP and Mozilla will be applying to take part in Google Summer of Code this year. ZAP has greatly benefited from students taking part in
this via both of these organizations, and we’re hoping at least one will be accepted so that we can take part again. If you have any suggestions
for suitable projects or anything else to contribute then please join the [discussion](https://groups.google.com/d/msg/zaproxy-
develop/4Pro0YpO7B8/d9naWJkFEQAJ) on the Dev group.  
  

##  New / Improved Add-ons

_This section details add-ons that have been added or significantly updated since the last newsletter._  
Add-ons are available to download and install within ZAP.  
Just click on the ‘Manage Add-ons’ toolbar button and select the Marketplace tab:  
  
![](https://raw.githubusercontent.com/wiki/zaproxy/zap-extensions/images/zap-screenshot-browse-addons.png)  
  
Note that all add-ons on the Marketplace are completely free and open source and anyone can publish add-ons to it - see the [zap-extensions
wiki](https://github.com/zaproxy/zap-extensions/wiki/AddOnDevelopment) for details.  
  
New versions of the [Active scan rules (beta)](https://github.com/zaproxy/zap-extensions/wiki/HelpAddonsAscanrulesBetaAscanbeta) and SAML add-
ons have been released - these include security fixes so if you use them then please update them asap.  
  
And a new version of the Wappalyzer (technology detection) add-on has been released which includes the latest changes from the Wappalyzer
project (<https://wappalyzer.com/>)  
  
A new [Community Scripts](https://github.com/zaproxy/zap-extensions/wiki/HelpAddonsCommunityScriptsCommunityScripts) add-on has been released.
This is a packaged version of the community-scripts repo (<https://github.com/zaproxy/community-scripts>) which is a collection of ZAP scripts
that anyone can easily contribute to. Please contribute any scripts you create for your own use using pull requests!  
Also note that version 1 of this add-on contained a bug which can result in your ZAP configuration being lost, so if you downloaded that one
then please update to the latest version asap.  
  

##  Tutorial: Contexts

_This section teaches you more about a different ZAP feature every month._  
Contexts are a way to group sets of related URLs together. You can use contexts to define the applications you are testing, as well as parts of
those applications that you want to handle in non-default ways. Contexts allow you to define extra properties associated with those URLs so that
ZAP can handle them more effectively. They are displayed at the top of the Sites and can be imported and exported using the buttons on the Sites
toolbar.  
{{ < img "images/Contexts1.png" "Alt title" >}}  
For this tutorial we will be using the BodgeIt Store, a simple vulnerable web application available from <https://github.com/psiinon/bodgeit>,
but you can use any application that uses authentication.  
  
You need to access the target application before you can add it to a Context, so open the BodgeIt home page in your browser while proxying
through ZAP. Find the BodgeIt top node in the Sites tree, right click it and 'Include in Context -> Default Context'. {{< img
"images/Context%2B-%2Badd%2Bto%2Bdefault.png" "Alt title" >}} The Session Contexts Dialog will be displayed, which is part of the Session
Properties dialog and is where you can define all of the properties associated with each context. The 'bodgeit' node and all of the nodes
underneath it will now have been added to the 'Default Context'.  
Note that you can define as many contexts as you need.  
  
All details about a context are defined in the session properties. You can access these at any time by double clicking on the relevant context
or by pressing the 'Session Properties' button on the main toolbar.  
{{< img "images/Context%2B-%2Bsession%2Bprops.png" "Alt title" >}}  
  

### Context: Top Page

The top page of each context allows you to specify the name and description. It also allows you to define if this context is 'in scope', ie they
are part of the system that you are testing at any specific time. All nodes that are in scope are shown with a 'target' icon on them in the
Sites tree. You can also switch Contexts in and out of scope by right clicking them in the Contexts tree. You can choose to spider or scan all
of the contexts that are in scope with one command. You can also use the 'Protected mode' - this will only allow you to attack nodes that are in
scope. Many of the ZAP tabs, including the Sites, History and Alert tabs have buttons which allow you to only display information that is in
scope.  
  

### Context: Include In / Exclude From Context

{{< img "images/Context%2B-%2Binclude.png" "Alt title" >}} The first 2 child pages allow you to define the URLs that are included in the
context. This is done using regular expressions (regexes). The easiest way to include any leaf nodes and subtrees is to use the 'Include in
Context' and 'Exclude from Context' right click options in the Sites and History tabs. However if you need to define more complex regexes then
you will need to do this manually using theses screens. Always double check the nodes that are included by verifying that the target icons are
set correctly.  
  

### Context: Structure

The Structure page allows you to define the properties that define the context structure. The Sites tree is ZAP’s representation of the
structure of all of the sites you visit. It is very important that ZAP correctly understands the structure of the applications you are testing
otherwise it will not be able to attack them correctly.  
By default ZAP assumes that URLs are of the form:

  * https://www.example.com/page?p1=v1&p2=v2

In this case the URL Key Value Pair Separator is **' &'** and the the URL Key Value Separator is **'='**  
If (for example) part of an application you are testing uses URLs of the form:

  * https://www.example.com/page?p1:v1;p2:v2

then you should define those URLs to be part of a context and change the separators in this screen to **':'** and **';'**.  
  
Structural Modifiers are controls which change how ZAP represents the structure of the application. There are currently 2 types of Structural
Modifiers:

  * Data Driven Content which identify URL paths that represent data - these can be used to tell ZAP that specific pages are generated from database content and can so be treated the same
  * Structural Parameters which identify parameters that represent application structure instead of user data - these can be used to allow ZAP to correctly represent 'single page applications'

For more details see the relevant section in the [User Guide](https://github.com/zaproxy/zap-core-help/wiki/HelpStartConceptsStructmods).  
  

### Context: Technology

This page allows you to specify the technologies used in the context, if known. By default all technologies are included. If you exclude
technologies that you know are not used then this may speed up active scanning as rules specific to the excluded technologies can be skipped.  
  

### Context: Authentication

This page allows you to manage the way authentication is handled for this context. Once you have defined the authentication and one or more
valid users then you will be able to perform authenticated attacks on your target application, as well as perform more advanced testing of the
applications access control. There are very few standards with regards to web application authentication, but ZAP is extremely flexible and so
should be able to cope with any situation you come across. It can even cope with browser based single-sign-on systems like Personna.  
For this tutorial we will just handle the simple Form Based authentication that the BodgeIt store uses. A future tutorial will go into more
depth on authentication.  
  
In the BodgeIt store register a new user. BodgeIt will automatically log this user in, so logout and login again as we want the login request
and not the registration request.  
Identify the login POST request in the History tab, right click it and select 'Flag as Context-> Default Context: Form-based Auth Login Request'  
{{< img "images/Contexts%2Bflag%2Bauth.png" "Alt title" >}} You will now be shown the Context Authentication page, which you will need to tweak.  
  
The Login Form Target URL and Login Request POST Data should be filled in correctly. However at least one of the Username or Password parameter
fields will need changing - they should be:

  * Username Parameter: username
  * Password Parameter: password

In order for ZAP to know when it need to authenticate we need to configure a way for it to tell if the user is logged in or not. We do this via
regex patterns which should match strings that indicate that the user is either logged in or logged out. You only need to define one of these,
not both. You can configure these manually, but it’s easier and safer to use the UI:

  * In the ZAP history select a request made to bodgeit before you authenticated
  * Look at the response, find and highlight the HTML which defines the Login link
  * Right click the highlighted text and select "Flag as Context -> Default Context: Authentication Logged-out indicator"

{{< img "images/Context%2Bflag%2Bloogged%2Bout.png" "Alt title" >}} You will now be shown the Context Authentication page again with the Logged-
out regex pattern correctly defined. {{< img "images/Contexts%2Bauth.png" "Alt title" >}} ZAP now understands how he BodgeIt authentication
works, but it will need to know about at least one user before you can make use of this. You can configure that using the next screen.  
  

### Context: Users

This page allows you to define as many users as you need for testing. If your application supports roles you should define at least one user for
each role. You will need to fill in the correct authentication details for each user. ZAP will have automatically added the one used in the
authentication request you specified, you just need to make sure it is enabled. {{< img "images/Contexts%2Busers.png" "Alt title" >}}  
  

### Context: Forced User

The forced user mode allows you to force a specific user to be used for all requests that are generated by or proxied through ZAP. The forced
user mode is switched on and off via an icon on the main toolbar. It will be disabled until all of the necessary configuration has been made.
For this example select the user you previously registered with ZAP. Once you have saved the dialog you should see that the Forced User mode
button is now enabled.  
{{< img "images/Contexts%2B-%2Bforceduser.png" "Alt title" >}}  
Before enabling it make sure that you have logged out of BodgeIt. Then click the button to enable Forced User mode and click on one of the links
in BodgeIt. You should see that you are now logged in - ZAP will have authenticated as that user in the background.  
  
If you are not authenticated then you will have made an error in your configuration. All of the authentication requests ZAP makes on your behalf
will be shown in the History tab, so you can use those to help you resolve your issue. The Forced User mode is one of the simplest
authentication tools but it is very useful for checking that you have configured the authentication correctly.  
  
Once you have checked that the forced user mode works you can now perform authenticated spidering and active scanning of your application. You
can do this by keeping the forced user mode on, or by switching it off and then selecting the user you want to use in the Spider or Active Scan
dialogs.  
  

### Context: Session Management

This page allows you to manage the way in which Session Management is being done for the Context. After selecting the Session Management Method
type, the options that need to be configured depend on the Session Management Method. For most applications you probably wont need to change
anything on this page.  
  

### Context: Authorization

This page allows you to define how unauthorised requests are handled by your application. This is used by the Access Control add-on which allows
you to automatically test your applications access control.  
  

##  3rd Party Tool: Faraday

{{< img "images/image03.png" "Alt title" >}}  
**Faraday** is an **Integrated Multi-User Pentest Environment** that’s principal goal is to map and leverage information you generate in real-
time. Named after the British scientist Michael Faraday who was famous for his meticulous note taking (as well as the Faraday cage), our tool
tries to emulate his rule of systematically recording everything.  
  
With more than 10 years in the industry, we have learned over here at Infobyte that pentesters and security teams have unique toolsets and
skills. The idea isn’t to change a security professional’s workflow but to get everyone on one platform in real-time where information can be
easily documented and used to gain greater insights for a security team.  
  
With 50+ supported tools Faraday is the connective tissue that brings together your different tools and team members to increase efficiency and
analysis of your security engagements. {{ < img "images/image02.png" "Alt title" >}}  
The ZAP plugin recognizes information such as Hosts, Interfaces, Services, Vulnerabilities and send this to Faraday. With only a copy of a
report, all this information is available in Faraday for all the members of your team.  
  
**How can we use it?**

  1. Open OWASP ZAP and start a attack, wait for the attack to finish.
  2. Go to Report menu => Generate XML report…
{{< img "images/image00.png" "Alt title" >}}

  3. Save the report with any name.
  4. Open Faraday and copy that report to $HOME/.faraday/report/$WORKSPACE where $WORKSPACE is the active workspace name in Faraday.
  5. Ready! All information is loaded now

{{< img "images/image05.png" "Alt title" >}} Here, you can see the “Tree Hosts” showing you information of a report of OWASP ZAP.  
Hosts, interfaces, Services, Notes and how many vulnerabilities have been loaded. {{< img "images/image04.png" "Alt title" >}} You can see more
information about vulnerabilities found: Name, Description, Severity, References ( URLs, CVE and CWE), Path, and more. If you like web
interfaces more than QT interface, Faraday has one! {{< img "images/image07.png" "Alt title" >}} Here you can see the same information as in the
QT interface , but you here you can work with the information. Group vulnerabilities by a field, show or not a field, show details about a
vulnerability, edit or delete one, and download all the data such as CSV file. Also, Faraday greatly speeds up the time needed for a security
engagement by simplifying vulnerability adjustments with severity classifications (CVSS standards supported).  
  
However, too much information can get confusing… Faraday has a dashboard with a summary of the active workspace for a more general overview of
your project. {{< img "images/image01.png" "Alt title" >}} Faraday comes in three flavors, a free community version that can be downloaded on
our [Github](https://github.com/infobyte/faraday) and a pro and enterprise version. {{< img "images/image06.png" "Alt title" >}} In the
Professional and Corporate editions you have role differentiation, different workspaces., workspace comparisons, tags, webshells, graphic
customization (Corporate) and one-click report generation which typically has been the bane of security teams.  
  
We believe that awesome open-source tools don’t get the love they properly deserve and because of that we developed the Faraday awards, in which
with your purchase of Faraday, you get to choose one open-source tool and we make a donation on your behalf to that tool It’s a way of giving
back to an underappreciated community.  
  
More information can be found at:

  * Faraday GitHub Site: <https://github.com/infobyte/faraday>
  * Faraday Homepage: <https://www.faradaysec.com/>

##  Upcoming Talks and Training

**Dan Billing** ([@TheTestDoctor](https://twitter.com/TheTestDoctor)) will be holding "The Test Doctor’s Proxy Surgery" at the TestBash Workshop
Day on March 10th in Brighton: <http://www.ministryoftesting.com/training-events/testbash-brighton-2016/testbash-workshop-day/>  
  
**Sumanth Damarla** ([@Sumanth_Damarla](http://www.twitter.com/Sumanth_Damarla)) will be giving a talk: "Securing Web @ZAP" at the I T.A.K.E
Unconference on May 19th in Bucharest: <http://itakeunconf.com/sessions/securing-web-zap/>  
  

##  Featured Contributor: Johanna Curiel

_Each month we introduce you to one of the many ZAP contributors._  
  
[{{< img "images/Johanna.jpg" "Alt title" >}}](https://2.bp.blogspot.com/-l6E_e0Vfzko/VsX3zS3scCI/AAAAAAAAAgE/ZAVM7LLtoeA/s1600/Johanna.jpg)  
**Q: Who are you?  
A: ** Johanna Curiel (aka [@jctechno](https://twitter.com/jctechno)), Software & Security Engineer.  
  
**Q: Where are you based?  
A: ** Curacao, Dutch Caribbean  
  
**Q: What do you do in your day job?  
A: ** I work as a programmer and pen tester part-time. At the moment I'm also working on cyber security research.  
  
**Q: Why do you contribute to ZAP?  
A: ** Because I use it in my work. It's a tool with some wonderful features that work even better than many commercial tools in the same
category. Also I have learned many things from using ZAP and understanding its programming core and architecture.  
  
**Q: How do you contribute to ZAP?  
A: ** Sporadically. Promoting it as pen testing tool, instruction videos, participating as mentor, working on documentation, testing and
reporting issues.  
_Editors note: Johanna has also been helping with applying for grants - more on that in a future newsletter ;)_  
  
**Q: What would you like to contribute in the future?  
A: ** I have been working on an some add-ons, but I have not publicise them. I really would like to get more into creating add-ons and ZEST
scripts and publicise them to the community.  
  
**Q: What do you like about the ZAP community?  
A: ** ZAP has great contributors, all working to help improve ZAP in different ways. It is amazing what a group of people can reach when they
work towards a goal with the guidance of a great leader.  
  
**Q: What do you get out of contributing?  
A: ** Most important is that I use ZAP in my work. ZAP is for free and open source, with some incredible features that I use it in my pen
testing and research. ZAP is the best free proxy available and by contributing you also give something back to help and keep ZAP developing and
improving. ZAP has helped me understand security vulnerabilities much better.  
  
**Q: Do you have any advice for people who would like to contribute to ZAP?  
A: ** There are many ways you can contribute, whether promoting it, documentation, translating , coding, testing. Start with something small
that you enjoy doing. Take your time to learn ZAP and find out where your skills can help best.  
  
**Q: Do you contribute to any other open source projects?  
A: ** Yes. I do contribute to other open source initiatives , specially those ones I would like to see grow and develop further.  
  
**Q: What do you do outside of work?  
A: ** I live in the Caribbean so it's quite nice weather most of the time. I like windsurfing with my daughter , swimming, BBQ and traveling.  
  
**Q: What do you [most] dislike about the ZAP development?  
A: ** I think ZAP is one of the easiest open source software to join development. There is a lot of documentation available to new developers
wanting to get involved. I like the way the code has been structured and with the add-on concept it makes it even easier to experiment on your
own, so I have nothing to dislike about. But as a developer if you think to be a serious contributor , you will need to invest some serious time
to understand the code and start development, this is a quite common barrier to all new developer contributors.  
  
**Q: What do you think could be done [a lot] better?  
A: ** I would like to see more instruction videos or documentation on how to use ZAP with more complex features and writing ZEST scripts . There
is a lot already published on youtube but ZAP has had an amazing development the last years that most of the videos are outdated.  
  

##  Feedback

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

