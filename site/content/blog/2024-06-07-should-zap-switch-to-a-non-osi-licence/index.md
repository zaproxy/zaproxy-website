---
title: "Should ZAP Switch to a Non-OSI Approved Licence?"
summary: "Yes, we are still struggling to find a way to make ZAP development sustainable."
type: post
tags:
- blog
- funding
date: "2024-06-07"
authors:
    - simon
---

As you may well know, we have had a lot of problems funding ZAP developments.

ZAP is probably the world’s most popular web scanner, and is the basis for over a dozen commercial DAST services .. 
but getting people to pay us to maintain it has proved VERY difficult.

We, the core team, are fans of Open Source and want ZAP to be free for everyone to use, but so far (with the exception of the 
[time limited funding from Crash Override](/blog/2024-03-13-zap-funding-and-the-open-source-fellowship/)) 
we have not been able to get enough support to make ZAP development sustainable.

Obviously we could just go commercial and make future versions of ZAP closed source, 
but I honestly believe that the world needs an open source web scanner like ZAP.

I think it makes sense for the companies building commercial services on top of ZAP to fund the core ZAP development. 
It is very disappointing that to date most of them are not supporting ZAP to the level that will make us sustainable.

One option we were looking at is dual licensing ZAP, with AGPLv3 being the open source licence.
Unfortunately, based on legal advice, we now do not think that AGPL will be enough to “encourage” 
the companies building commercial services on top of ZAP to purchase a commercial licence.

It looks like the only “open source” licences that will be strong enough to encourage these companies to support ZAP are 
**non**-[OSI approved licences](https://opensource.org/licenses), like
* [SSPL](https://www.mongodb.com/licensing/server-side-public-license)
* [RSAL](https://redis.io/legal/rsalv2-agreement/)
* [BSL](https://mariadb.com/bsl11/)

So, my questions to you, the ZAP user, are: 

* Are you ok with us switching to a non-OSI approved licence?
* And if you are not, how do you propose that we raise enough money to keep developing ZAP?

I want to stress that the idea here is not for us to build an “open core” company, 
but rather to just earn enough money to keep making ZAP better for everyone.

Please reply to [this thread on the user group](https://groups.google.com/g/zaproxy-users/c/4zrpfbA8-Es/m/w7zWBh3yAAAJ), 
or email us directly on zaproxy-admin@googlegroups.com
