---
title: "OWASP ZAP – the Firefox of web security tools"
type: post
draft: true
tags:
- TODO
date: "2012-09-13"
authors:
    - simon
---
The [OWASP Zed Attack Proxy](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project) (otherwise known as ZAP) is a free security tool
which you can use to find security vulnerabilities in web applications. My name is Simon Bennetts, and I am the ZAP Project Leader; there is
also an international group of volunteers who develop and support it. Future posts on this blog will describe the features that ZAP provides and
how you can use them, but this post will concentrate on the philosophy behind ZAP. Some of the ideals that have driven ZAP are listed below and
will be expanded upon in the rest of this post:

  * help users develop and apply application security skills
  * build a competitive, open source, and community oriented platform
  * provide an extensible platform for testing
  * designed to be easy to use
  * raise the bar for other security tools 

  

##  Helping users learn about Application Security

Unlike many security tools ZAP is designed to be used by people new to application security as well as security professionals. My background is
in development, and I started playing around with the Paros Proxy (from which I forked ZAP) as a way to learn about security tools. Helping
people to learn about application security has been, and will remain, an essential goal for ZAP. The open nature of ZAP is key here – users can
delve into the code to see how it works. Anyone who thinks they can make an improvement has the opportunity to implement those changes, feed
them back and be credited for them. Developers can work on ZAP to help them learn about security, and security people can work on ZAP to help
them learn about coding.  

##  An Open Source, Community based project

Like all OWASP projects, ZAP is open source and completely free to use. This means that there is no ‘pro’ version, so there is no incentive for
us to hold back features for the ‘paid-for’ version. ZAP is also a community based project, which is an important distinction when compared with
some other tools. There are many security tools that are open source but are still tightly controlled by one individual or company. While a user
can see how these products work it is often difficult to change them or influence their direction. Anyone can get involved with the ZAP
development – once someone has shown that they can produce good quality code and conform to ZAP guidelines then they can get commit access!
There are plenty of opportunities for non coders to get involved too – testing, documentation, training videos, translating – all contributions
are welcomed and [credited](http://code.google.com/p/zaproxy/wiki/HelpCredits).  

##  An Extensible platform for testing web applications

In addition to improving the core feature set for ZAP, we are working to ensure that as much of ZAP functionality is implemented as extensions
or addons, which can easily be added to existing ZAP releases. This means that new features can be added dynamically without having to wait for
full ZAP releases, and also means that we can accommodate features that will only appeal to a small subset of our users. The ZAP community is
very supportive of people who want to learn about coding or security, and we have just benefited from 3 students producing excellent
enhancements to ZAP as part of the [Google Summer of Code](http://code.google.com/p/zaproxy/wiki/GSoC2012).  

##  Ease of use as a design goal

We realize that developers and functional testers will probably spend a relatively small amount of time using security tools, so we want ZAP to
be as intuitive as possible. But we try to maintain a balance between making things as simple as possible while at the same time not over
simplifying them. While there is no ‘big red button’ in ZAP which will solve all of your security problems, ZAP provides a set of automated
tools which will help individuals assess the security of applications. ZAP also provides a set of manual tools which can be used by people with
more knowledge, which is one of the reasons it has been so enthusiastically adopted by professional pentesters. Inexperienced users can start
off using the automated tools and gradually use more and more of the manual features as they improve their knowledge of application security.  

##  Raising the bar for security tools

Another way ZAP can help application security in general is by raising the bar for other security tools, commercial or otherwise. Other products
are free to reuse our source code (with acknowledgement;) and also free to copy or be ‘inspired’ by features that are implemented in ZAP. In
fact we welcome such reuse as it will provide the following benefits:

  * improving other tools, which increases user choice
  * broadens the availability of effective security tools
  * allows feature parity across tools which will drive innovation and competition

  

##  Conclusion

In conclusion, ZAP is a free, open-source community developed tool aimed at making the online world more secure. Anyone can get involved
developing the core engine, or by creating addons which have full access to the core functionality. And that will probably sound vaguely
familiar as its very close to the philosophy behind Mozilla Firefox.  
Its why I’m working for Mozilla as a security automation engineer, and the justification for this blog’s title:) If you have any interest in
application security then you should download ZAP and try it out. And if you would like to learn more, or help to make ZAP better then please
get in touch with me.  
  
Simon Bennetts OWASP ZAP Project Lead Mozilla Security Automation Engineer

