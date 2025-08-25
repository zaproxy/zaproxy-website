---
title: "ZAPit"
summary: "Want to find out as much info about a URL as possible really quickly? Then ZAPit!"
images:
- https://www.zaproxy.org/blog/2023-10-18-zapit/images/blog-zapit.png
type: post
tags:
- blog
date: "2023-10-18"
authors:
    - simon
---
You want to find out as much info about a URL as possible *really quickly*.

Why? Well, you could be:

* A pentester just starting your week looking at a new set of apps
* A security professional who has just found out about a new public web app from your company you were not previously aware of
* A developer who has just been given an existing web app to maintain

So ... ZAPit!

### ZAP Chat Video

{{<youtube uuid="9RbmkT9rG5w">}}

ZAPit is a new feature in [2.14.0](/blog/2023-10-12-zap-2-14-0/) which 
performs a quick ‘reconnaissance’ scan of the URL specified. It currently only runs from the command line.

For more details see the [ZAPit](/docs/desktop/addons/quick-start/zapit/) help page.

### ZAP Chat Video Commands

The commands I used in the above video were:

Download and run bash in the ZAP stable docker image (not required if you have ZAP installed locally):
```bash
docker pull zaproxy/zap-stable
docker run -it zaproxy/zap-stable bash
```

Update ZAP and install [Wappalyzer](/docs/desktop/addons/technology-detection/) and the [Beta Passive Scan Rules](/docs/desktop/addons/passive-scan-rules-beta/):
```bash
./zap.sh -cmd -addonupdate -addoninstall wappalyzer -addoninstall pscanrulesBeta
```

Run ZAP against example.com (or any other URL you specify):
```bash
./zap.sh -cmd -zapit https://www.example.com
```

### Feedback

Do you think ZAPit will be useful to you?
 
Would you like it to do anything else?

Let us know via the [ZAP User Group](https://groups.google.com/group/zaproxy-users).

##### Credits

The social media background [image](/blog/2023-10-18-zapit/images/blog-zapit.png) is "[A bright and powerful lightning bolt streaks across the sky.](https://wallpapers.com/picture/lightning-bolt-pictures-5rer3bwrq1gj9z8f.html)" by [Wallpapers.com](https://wallpapers.com) and is licensed under [CC by 2.0](https://creativecommons.org/licenses/by/2.0/).