---
title: "Is ZAP the World’s most Popular Web Scanner?"
description: "ZAP is the most popular free and open source web scanner, but maybe it's more popular than most/all commercial scanners too?"
images:
- https://www.zaproxy.org/blog/2020-04-02-is-zap-the-worlds-most-popular-web-scanner/images/zap-companies.png
type: post
tags:
- blog
date: "2020-04-02"
addSocialPreview: true
authors:
    - simon
---
I’ve stated that ZAP is the world’s most popular free and open source web application scanner on stage at security conferences around the world for many years. No one has ever contradicted me so it must be true :)

However I’ve started to wonder if ZAP is actually more popular than most _if not all_ of the commercial scanners as well?

That is actually pretty hard to tell - ZAP is a free tool that anyone can download, so determining how many users we really have is difficult. I’ve also not been able to find any figures published by our commercial competitors.

## The Statistics

However we do have some statistics for ZAP.

We can tell how many people [download](https://api.github.com/repos/zaproxy/zaproxy/releases/tags/v2.9.0) ZAP directly and how many [Docker](https://registry.hub.docker.com/v2/repositories/owasp/zap2docker-stable/) pulls it gets.

ZAP also by default performs up to one check-for-updates request per day and checks for news every time it starts. All of the ‘calls home’ are [documented](https://www.zaproxy.org/faq/what-calls-home-does-zap-make/) and can be disabled via the `-silent` command line option.

We record these figures every month, and it is clear that ZAP usage has been increasing ever since it was launched in 2010. In fact its use appears to be accelerating.

Last month, **March 2020**:
- ZAP was directly downloaded more than 85,000 times
- ZAP Docker images were pulled more than 220,000 times
- ZAP was started more than **1 million times**!

Does this make ZAP the world’s most popular web security scanner?
 
{{< img "images/zap-companies.png" >}}

I don’t know, but we’re happy to update this post to link to any similar stats that other web scanners publish.

We don't get much other information, but we can see that around two thirds of the time the ZAP desktop is started while one third of the time the ZAP daemon is used.

The top 3 countries that use the ZAP desktop are:
1. USA
1. India
1. Japan

The top 3 countries that use the ZAP daemon are:
1. USA
1. Australia
1. Germany

## The Conclusion

One thing is clear.

If you want to have an impact in the web security field then you should seriously consider contributing to ZAP. Any improvements you make, any new or improved scan rules you add will be heavily used and will help to make the online world safer. 

ZAP is, of course, completely open source and highly extensible. If you want to learn more about contributing to or extending ZAP then see the [Contributing Guide](https://github.com/zaproxy/zaproxy/blob/main/CONTRIBUTING.md).
