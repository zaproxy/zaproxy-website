---
title: "Polyfill.io Script Detection"
summary: "A new scan rule which allows you to find out which of your sites are loading scripts from polyfill.io really quickly."
type: post
tags:
- blog
- scanrules
date: "2024-06-27"
authors:
    - simon
---

### Background

You will probably have heard that the polyfill.io domain has apparently been aquired by some 
[potentially bad actors](https://sansec.io/research/polyfill-supply-chain-attack).

Namecheap have [taken down the domain](https://socket.dev/blog/namecheap-takes-down-polyfill-io-service-following-supply-chain-attack)
but you will still want to change any of your apps which load scripts from polyfill.io ASAP.

### New Scan Rule

We have a new passive scan rule which will alert if your app loads scripts from this domain:
[Script Served From Malicious polyfill.io Domain](/docs/alerts/10115/).

As explained in the [help](/docs/desktop/addons/passive-scan-rules-beta/#id-10115) the rule
checks for scripts being served from the polyfill.io domain.
It will raise an alert with a High confidence if a script is loaded from a polyfill.io domain, 
and a Low confidence if it just finds an apparent reference to a polyfill.io domain in the script contents.

This rule has been promoted straight to `beta` which means that it will automatically be used if you use 
either the [Baseline Scan](/docs/docker/baseline-scan/) or the 
[Full Scan](/docs/docker/full-scan/).

If you are using ZAP in another way and wish to use this rule then use the 
[Passive Scan Rules (Beta)](/docs/desktop/addons/passive-scan-rules-beta/) add-on.
If you are already using it them make sure it is up to date.

### ZAPit!

If you want to check just URLs from the command line then you can use 
[ZAPit](/docs/desktop/addons/quick-start/zapit/) with this oneliner, even if you don't have ZAP installed:

```
docker run -t zaproxy/zap-stable zap.sh -cmd -addoninstall pscanrulesBeta -zapit https://www.example.com/
```

You can specify as many URLs you like: `-zapit https://www.example1.com -zapit http://example2.com/`

Example output:

```
Downloading add-on from: https://github.com/zaproxy/zap-extensions/releases/download/pscanrulesBeta-v38/pscanrulesBeta-beta-38.zap
Add-on downloaded to: /home/zap/.ZAP/plugin/pscanrulesBeta-beta-38.zap
ZAPit scan of https://********.com/
Requests:
	https://********.com/
		Request took 695 msec
		Response code 200 (OK)
		Response body size 382,232 bytes
		No request cookies
		Response Cookies:
			akid=gip104.103.206.225_gsip95.101.236.170_clip86.7.204.177_rclip86.7.204.177; p...
			AKES_GEO=GB~EN; path=/; domain=.********.com; secure
			mds_3rdparty_experience_store=US_NH;  domain=********.com; path=/; expires=Wed, 25...
			AKES_GEO=GB~EN; path=/; domain=.********.com; secure
			akid=gip127.0.0.1_gsip95.101.236.170_clip127.0.0.1_rclip127.0.0.1; path=/; domai...
			ivid=39d39b60-f5f0-4757-931d-d135821915e1;  domain=********.com; path=/; expires=F...
			akid=gip127.0.0.1_gsip95.101.236.170_clip127.0.0.1_rclip127.0.0.1; path=/; domai...
			AKES_GEO=GB~EN; path=/; domain=.********.com; secure
Technology: Not available (install the wappalyzer add-on)
Number of alerts: 30
	High: Script Served From Malicious polyfill.io Domain : "https://cdn.polyfill.io/v3/polyfill.min.js?features="+t+"&flags=gated",(n=i.crea..."
	Medium: Absence of Anti-CSRF Tokens : "<form id="isearch" role="search" action="/search/" method="get">"
...
```

Note that ZAPit will just request the top page of a domain and so will not detect polyfill.io domain scripts 
on other pages.

For more complete coverage use the [Baseline Scan](/docs/docker/baseline-scan/).


