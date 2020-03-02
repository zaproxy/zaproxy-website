---
title: "Hacking ZAP #1 - Why should you?"
type: post
tags:
 - hacking
date: "2014-03-10"
authors:
    - simon
---
Welcome to a [series of blog posts](https://github.com/zaproxy/zaproxy/wiki/Development#hacking-zap) aimed at
helping you “hack the ZAP source code”.  
  
ZAP is an open source tool for finding vulnerabilities in web applications. It is the [most active OWASP
project](https://www.openhub.net/orgs/OWASP) and is very community focused - it probably has more
[contributors](https://www.openhub.net/p/zaproxy/contributors/summary) than any other web application security tool. It is being [continually enhanced](https://www.openhub.net/p/zaproxy/commits/summary) and, unusually for a security tool, has been translated into over [25 languages](https://crowdin.com/project/owasp-zap) thanks to over 70 translators.  
This series is designed to help newcomers dive head-first into the ZAP source code. However for this first blog post I thought I’d take a step back and give some reasons why you might want to change the ZAP source code in the first place.

##  You help others

ZAP was voted the [most popular security tool of 2013 by ToolsWatch.org readers](https://www.toolswatch.org/2013/12/2013-top-security-tools-as-voted-by-toolswatch-org-readers/), competes with [commercial security tools](http://www.sectoolmarket.com/price-and-feature-comparison-of-web-application-scanners-unified-list.html) and in some cases exceeds their capabilities. For example ZAP was the first security tool to support WebSockets, something few commercial tools support, even now. By contributing to ZAP you help all of the people that are using it to make their applications more secure.

##  It’s a great way to learn

I’m a developer. I started ZAP as a way to teach myself about security, and I’m a big fan of learning by doing, or in this case, ‘coding’. If
you want to understand a particular vulnerability properly then why not write some code that you think will detect it? By the end of that
process you should understand the vulnerability much better! It doesn't matter if you are completely new to security (as I was) or have been
working on it for many years - there’s always more to learn. I want ZAP to be a great teaching tool, and that’s why I encourage students to get
involved with ZAP development. We have had some great features implemented by students, both in their own time and as part of the [Google Summer of Code](https://summerofcode.withgoogle.com/). If you are a student and would like to contribute to ZAP (for example as part of your course work)
then we’d be delighted to hear from you. The [ZAP developer group](https://groups.google.com/group/zaproxy-develop) is available specifically to
help people work on ZAP, and we always do our best to help newcomers find their feet. And of course, having contributions to a major open source
security project like ZAP on your CV or resume can be a real benefit when trying to break into the security industry.

##  You can make ZAP work your way

ZAP is open source, and one of the big advantages of open source is that you can change it to work exactly as _you_ want. You can keep your
changes to yourself of course, but we realize that people want to work in different ways, and so we are always happy for people to add new
options to ZAP so that people can choose exactly how it works for them. And even if you want to take ZAP off in a direction we (the ZAP core
developers) think is completely irrelevant to what we are trying to achieve, we’ll still happily work with you to try to make sure you can
achieve what you want. Without breaking ZAP for everyone else of course.

##  It’s a powerful environment

Lets say you’ve come up with a neat way to find vulnerabilities, either in a completely automated way or with manual assistance. A small stand
alone tool is ok, but there are so many things you need to handle when using such a tool on real world application. Things like authentication,
session handling and managing CSRF tokens. ZAP provides a complete testing environment and already handles a whole range of problems that you
are likely to encounter.  If it can’t handle a particular problem then let us know - we are constantly improving ZAP, and so we might already be
working on it. And if we are not then we’ll add it to the list of enhancement requests - someone else reading this post might just decide to
work on it. One of the advantages of using an open source project like ZAP is that you can access all of the ZAP internals. We have no ‘secret
sauce’ and so we can give you access to all of the ZAP functionality without having to limit you to a restricted API for commercial reasons.

##  It provides more exposure for your project

Maybe you’ve started a small open source project, it might even an [OWASP](https://owasp.org/) one. You may well find that it takes time to
get people interested in it, particularly if it's completely stand alone. While ZAP is a great environment to build on, we realize that there are
many reasons why people might not want to just build on top of ZAP. However you can wrap your project in a ZAP add-on while keeping ownership
and maintaining it separately from ZAP. We are big fans of reuse, and encourage people to write new functionality in a way that allows it to be
reused across a range of security tools, even our competitors. We practice what we preach, having done that for major new features in ZAP like
[Plug-n-Hack](https://developer.mozilla.org/en-US/docs/Plug-n-Hack) and [Zest](https://developer.mozilla.org/en-US/docs/zest). The [ZAP Marketplace](/addons/)
allows users to browse, download and install add-ons from within ZAP. Repackaging your tool as a ZAP add-on will introduce your
project to people who might otherwise never have known about it or bothered to try it.

##  Profit???

ZAP is open source, and will stay open source. You will never have to pay for a ‘pro’ version. However we have no problem with people developing
and selling closed source add-ons to ZAP. If you think you can make money from selling ZAP add-ons then go for it.  

