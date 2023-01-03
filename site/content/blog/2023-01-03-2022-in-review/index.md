---
title: "2022 in Review"
summary: >
  A summary of everything ZAP related that happened in 2022.
images:
- https://www.zaproxy.org/blog/2023-01-03-2022-in-review/images/2022-review.png
type: post
tags:
- blog
- update
date: "2023-01-03"
authors: 
    - simon
---

2022 was an eventful year for ZAP, and mostly a very successful one.

We:
* Published 1 [major release](/blog/2022-10-27-zap-2-12-0-the-ten-thousand-star-release/)
* Published more than 200 [add-on releases](https://github.com/zaproxy/zap-extensions/releases)
* Took part in 1 [online conference](/zapcon-2022/)
* Reached 10,000 [GitHub stars](https://github.com/zaproxy/zaproxy/stargazers)
* Were confirmed as a [GitHub Top 1000](https://twitter.com/psiinon/status/1587829073958604800) project 

According to [Open Hub](https://www.openhub.net/p/zaproxy/) 
we had a total of __2528 commits__ across the 4 main repos thanks to __63 contributors__.

And based on our [Telemetry](/faq/what-calls-home-does-zap-make/#telemetry) the 
[Headline Statistics](/docs/statistics/) for 2022 were:
* Number of Times ZAP was Started: __14 Million__
* Number of Active Scans: __9 Million__
* Number of Alerts Raised: __5.6 Billion__
* Number of Active Scan Messages Sent: __15 Billion__

### Website changes

This website has seen a steady stream of new content throughout the year.

* In January we started strongly with an all new and very comprehensive [Contributing Guide](/docs/contribute/).
* In February we added the [Mission Statement](/mission-statement/) and [Core Team](/docs/team/) pages.
* In March we added many more [Statistics](/docs/statistics/) and the [Test Scans](/docs/scans/) page where you can see how well ZAP does against a growing set of 
vulnerable apps. To date we are not aware of any other web scanner that published this information.
* The [Burp to ZAP Feature Map](/burp-to-zap-feature-map/) was added in April.
* July saw us add the [Constants](/docs/constants/) page to help anyone using the ZAP [API](/docs/api/) and scripts as
well as the start of the ZAP [History](/docs/history) pages.
* The [Roadmap](/docs/roadmap/) was added in September, the same month we started publishing [monthly updates](/tags/update/).
* And over the year we published 21 [Blog Posts](/blog/).

### Networking Changes

In February we announced the new [ZAP networking layer](/2022-02-10-new-zap-networking-layer/).

This was a major change to the ZAP networking stack but one that was necessary in order to support more modern protocols.
Significant work continued on the networking code throughout 2022.

This has culminated in full support for HTTP/2 in the latest weekly releases.

### ZAPCon

ZAPCon was held on March 8th-9th and was very successful.
Over 5 thousand people registered and all of the videos are available [online](/zapcon-2022/).

It is a shame that due to subsequent events this is likely to be the last such event for the foreseeable future.

### Sponsorship Problems

In June we lost our previous Platinum sponsor and I asked the community for help 
[funding ZAP development](/blog/2022-06-17-help-needed-fund-zap-development/).

I was blown away by the responses and was in the very fortunate position to receive a significant number of
very generous offers of support.

In the end I decided to [join Jit](/blog/2022-09-14-new-platinum-supporter-jit/) where I can still focus on ZAP while 
helping [Jit](https://jit.io) build a world leading security orchestration platform.

### Google Summer of Code

We took part in Google Summer of Code once again, and this years student, 
[Arkaprabha Chakraborty](/docs/team/arkaprabha/) created the new 
[Param Digger](/blog/2022-08-22-the-param-digger-addon/) add-on based on the popular Burp extension 
[Param Miner](https://portswigger.net/bappstore/17d2949a985c4b7ca092728dba871943).

### 2.12.0

ZAP 2.12.0 was released in October and was dubbed the 
[Ten Thousand Star](/blog/2022-10-27-zap-2-12-0-the-ten-thousand-star-release/) release thanks to the main
[zaproxy/zaproxy](https://github.com/zaproxy/zaproxy) repo reaching 10,000 stars.

This was a major release for us and included:
* The new networking add-on
* Migration of the standard spider to an add-on
* Multi-threaded Passive Scanner
* Bit.ly telemetry removal
* Scan rule promotions
* Dependency updates
* New add-ons
* Desktop HTML injection fix

### Future plans

We have only just released ZAP 2.12.0 ... but we are actually planning to release ZAP 2.13.0 in the relatively near future!

Stay tuned for more announcements about this surprise release soon :grin:.

Thank you to everyone who has contributed to ZAP in any way, and wishing you all a successful and secure 2023!
