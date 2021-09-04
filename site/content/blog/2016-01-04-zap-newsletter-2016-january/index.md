---
title: "ZAP Newsletter - 2016 January"
type: post
tags:
date: "2016-01-04"
authors:
  - simon
---

## Introduction

Happy New Year!  
For the first newsletter of 2016 we have a special feature on a new vulnerability **“XCOLD Information Leak”** that caught the eye of one of our
key contributors, how he found it and how you can use a new ZAP rule to detect it.

## News

Steve Springett ([@stevespringett](https://twitter.com/stevespringett)) has implemented a [ZAP Sonar plugin](https://github.com/stevespringett/zap-sonar-plugin) which integrates ZAP into SonarQube v5.1 or higher. He’s also looking for anyone interested in maintaining this going
forwards, so please have a play with it and get in touch with Steve and/or myself if you might be interested in keeping it going. Don't worry if
you don't know much about the ZAP side of things, we can help with that!

A new release of the ZAP Jenkins plugin is now available. You can download it here :
<https://wiki.jenkins-ci.org/display/JENKINS/ZAProxy+Plugin>.  
This release implements the form based authentication method and fixes some issues.

{{< img "images/zapbot.png" >}}

Do you want to know things like:

- How many downloads ZAP gets?
- What are the most popular ZAP add-ons?
- How ZAP performs against [wavsep](https://github.com/sectooladdict/wavsep) and [wivet](https://github.com/bedirhan/wivet)?

You can find all of that out via: <https://zapbot.github.io/zap-mgmt-scripts/index.html>  
These stats are maintained by zapbot, which now even has its own icon :)

## New / Improved Add-ons

_This section details add-ons that have been added or significantly updated since the last newsletter._  
Add-ons are available to download and install within ZAP.  
Just click on the ‘Manage Add-ons’ toolbar button and select the Marketplace tab:

![](/img/zap-screenshot-browse-addons.png)

Note that all add-ons on the Marketplace are completely free and open source and anyone can publish add-ons to it - see the [zap-extensions
wiki](https://github.com/zaproxy/zap-extensions/wiki/AddOnDevelopment) for details.

The [Selenium](/docs/desktop/addons/selenium/) add-on has been updated to include the latest version of
the selenium jar - this fixes problems with the latest version of Firefox so update asap.

The [Passive scan rules - alpha](/docs/desktop/addons/passive-scan-rules-alpha/) have been updated to
include a new scanner for identifying info leaks via X-ChromeLogger-Data or X-ChromePhp-Data. See the special feature below.

## Special Feature: XCOLD Information Leak

This special feature from Kingthorin ([kingthorin](https://github.com/kingthorin)) explains how functionality aimed at assisting developers
caught the eye of an IT Security Professional:

Ottawa ended up with an uncharacteristically green Christmas this year, but finally got snow as I’m drafting this (Dec 29th), so I'm going to
dub this the XCOLD Info Leak ( **X** - **C** hr **O** me **L** ogger- **D** ata).

It all started rather innocently when an item in the [Firefox 43 release notes](https://www.mozilla.org/en-US/firefox/43.0/releasenotes/) caught
my eye:

{{< img "images/firefox-43.png" >}}

With my penetration tester hat on all I could think was: “Huh? What? I can get server logs in a client? Sweet, I can think of all sorts of Low
to Pwned scenarios … Yay!”

Off I went to read further:

- <https://developer.mozilla.org/en-US/docs/Tools/Web_Console/Console_messages#Server>,
- <https://craig.is/writing/chrome-logger>.

Basically it boils down as follows:

- Decide you want server side messages available to clients.
- Stick some code into your web app.
  - Support seems to be quite extensive: Python, PHP, Ruby, Node.js, .NET, ColdFusion, Go, Java, and Perl. Though the majority of the existing install/usage seems to be PHP.
- Boom get messages in the browser (Chrome requires an extension, while Firefox now has native support).
  - Messages are returned as Base64 encoded JSON via the response header X-ChromeLogger-Data.
  - Browsing <https://github.com/ccampbell/chromelogger/issues> one can also learn that older or alternate implementations use(d) X-ChromePhp-Data.

Curious to see if this was already in Production use I headed over to Shodan, to see what there was to see. The following images are courtesy of
Shodan, [via www.shodan.io](https://www.shodan.io) .

{{< img "images/shodan1.png" >}}

Ok so X-ChromeLogger-Data is in use. Not extensively but the numbers are increasing. The image here is from 2015-12-29, I had previously poked
around on this topic around the 18th. Though I don’t remember the specific number I’d previously queried there seems to have been an increase in
a short period and over the holidays.

{{< img "images/shodan2.png" >}}

It also seems that X-ChromePhp-Data is in use to a much lesser extent. So off I go to see what kind of data people might be exposing.

Keep in mind the following findings are based on public data, I’m not revealing anything here that the site(s) haven’t already revealed to the
world.

Below I’ve just copied the Base64 encoded header values from the Shodan results and run them through the handy online decoder at
<https://www.base64decode.org/>.

_Alternative 1_ : Proxy your shodan result browsing through ZAP, select the base64 string and use the “Encode/Decode/Hash” context menu:

{{< img "images/zap-xcold-1.png" >}}

{{< img "images/zap-xcold-2.png" >}}

_Alternative 2_ : You could also pop the dev tools console (F12) and do a atob(“”); and hit enter. For example atob(“ZW5jb2RlIHRoaXM=”); returns
encode this. I used the online service below since the dev tools console doesn’t line wrap :(

Picking the first X-ChromePhp-Data shodan result I got the following:  
{{< img "images/zap-xcold-3.png" >}}
Ok not terribly revealing, however it does give the entire disk location of AppController.php. Might be able to leverage that in other attacks
or use the knowledge to social engineer something.

Here’s another example that’s really verbose, note `Undefined index: admin` references:  
{{< img "images/zap-xcold-4.png" >}}

Here’s another, note the failures in processing various tokens, PREBODY, and HTTP_USER_AGENT. Those details might lead a pentester to another
useful finding such as UA specific response or UA injection of some sort.  
{{< img "images/zap-xcold-5.png" >}}

Here’s one that appears to be a WordPress plugin:
{{< img "images/zap-xcold-6.png" >}}

Here’s what seems to be a windows host running some WordPress gallery:
{{< img "images/zap-xcold-7.png" >}}

To top it off, here’s an example leaking raw SQL details:
{{< img "images/zap-xcold-8.png" >}}

I guess that’s enough examples. As you can see a ton of information is and can be leaked via this functionality.

While the benefits to a developer are obvious I would suggest that the following considerations or implementation choices be made if using the
functionality:

1. Do you want this turned on for Production use?
2. If you do want it on for Production use can you ensure that you don’t leak information that might be leveraged by an attacker or malicious individual?
3. Can you tie it to your authorization framework so that the information (header + content) is returned only to admins and support personnel not “all” users?

Curious if your app or site is exposing anything similar to the examples above? Do you have the XCOLD Info Leak? Checkout the new ZAP passive
plugin that looks for and identifies information leaks via X-ChromeLogger-Data and X-ChromePhp-Data. This is included in the latest Passive scan
rules - alpha available from the [ZAP Marketplace](/addons/).

Update: Here's a slide deck from a presentation kingthorin recently did on XCOLD with OWASP-Ottawa: <https://files.meetup.com/12990252/XCOLD-OWASP-Ottawa-20160125.pdf>

## Upcoming Talks and Training

**Akash Mahajan** ([@makash](https://twitter.com/makash), the founder of The App Sec Lab) will be running a hands on workshop: "Application #SecurityTesting with OWASP ZAP" at the Open Source Summit on February 6th in Bangalore:
[https://www.facebook.com/joinunicom/photos/a.10151206545805033.498192.288931845032/10153652426465033/?type=1&theater](https://www.facebook.com/joinunicom/photos/a.10151206545805033.498192.288931845032/10153652426465033/?type=1&theater)

## Featured Contributor: Paulo Brito

_Each month we introduce you to one of the many ZAP contributors._

{{< img "images/pbrito.png" >}}

**Q: Who are you?**

**A:** Paulo Brito (aka PB, [@pbrito1](https://twitter.com/pbrito1)), computer security enthusiast, computer science student.

**Q: Where are you based?**

**A:** Campinas, Brazil

**Q: What do you do in your day job?**

**A:** I am a journalist. I work as a free lancer, writing mainly IT and business stories for a couple of brazilian newspapers and magazines. I
also publish a blog on computer security at [www.cibersecurity.com.br](http://www.cibersecurity.com.br).

**Q: Why do you contribute to ZAP?**

**A:** ZAP is a fantastic security tool. As I localize it for PT BR I help to make ZAP resources available for all portuguese speaking students
and information security professionals. I'd love to also contribute writing code but I'm still learning, so the best way I could contribute to
the ZAP community was localizing the framework.

**Q: How do you contribute to ZAP?**

**A:** I am currently translating the help files and the user interface. At this moment roughly 70% of the work is done. It's a lot of text, so
it's taking also a lot of time. Sometimes I have to step back and retranslate when an improvement is deployed, and this will happen forever,
because ZAP will always being improved.

**Q: What would you like to contribute in the future?**

**A:** I will certainly be available to keep the localization updated.

**Q: What do you like about the ZAP community?**

**A:** I like the fact that ZAP is a community with an important goal, developing an extremely important tool for web/computer security pros, and
that really cares about its members, maintaining them always informed on what's going on.

**Q: What do you get out of contributing?**

**A:** I get the pleasure of contributing to a build a superb computer security framework, besides learning how to use ZAP and understanding how
each feature is designed to check a security flaw. I also get a better understanding on how these flaws need to be fixed.

**Q: Do you have any advice for people who would like to contribute to ZAP?**

**A:** I would say that this is a project that's worth to contribute to. The project has a clear objective and its development is of great value
to the community of information security professionals. Its members are talented people, dedicated to a good cause and deserve all the help we
can give, contributing to strengthening the ZAP project.

**Q: Do you contribute to any other open source projects?**

**A:** No. ZAP is the only project I am currently contributing to.

**Q: What do you do outside of work?**

**A:** Outside of my work I like to listen classical music – I am a fan of Mozart and Bach -, watch aviation documentaries and travelling when
possible.

**Q: What do you [most] dislike about the ZAP development?**

**A:** I don't see any point I could dislike regarding the development. To the contrary, what I see is all the coders/testers working all the
time to improve the framework

**Q: What do you think could be done [a lot] better?**

**A:** I don't exactly how, but may be OWASP could start (if didn't yet) evangelizing on ZAP to universities faculty and students, besides doing
some PR (public relations) to enlarge the users base and the volunteers community as well.

## Feedback

Please fill in this quick [Feedback Form](https://docs.google.com/forms/d/1_XaettHPjLOD56AbSlui67gk-771yJ_xfd7w2lSEdXw/viewform?usp=send_form)
so that we can make sure this newsletter is as useful to you as possible.

## Coming next month…

That depends on you!  
Let us know what you would like to see using the above feedback form.  
If you would like to write content for the newsletter then please get in touch - anything ZAP related, such as talks / training you are giving,
a 3rd party tool you develop or maybe an add-on you’d like to explain in more detail.  
And we’re also looking for one or more editors for the ZAP newsletter - you don't need any detailed ZAP knowledge, just a bit of time each month
you can dedicate to chasing up people for content and bashing it into something that reads better than this one :P Think that's you? Get in
touch!

Simon Bennetts (ZAP Project Lead)
