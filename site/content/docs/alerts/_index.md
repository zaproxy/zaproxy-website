---
title: "ZAP Alert Details"
EditableContent: false
type: alert
---
ZAP provides the following HTTP passive and active scan rules which find specific vulnerabilities.

Note that these are examples of the alerts raised - many rules include different details depending on the exact problem encountered. 

Only the `release` rules are included in ZAP by default, the beta and alpha rules can be installed via the [ZAP Marketplace](/addons/).

You can also use HTTP passive and active scripts, examples of which are available in the ZAP [community scripts](https://github.com/zaproxy/community-scripts) repo, as well as Websocket [passive](/docs/desktop/addons/websockets/pscanrules/) scripts.

Many alerts support [tags](/alerttags/) which allow you to see which alerts are related to, for example, specific
[OWASP Top Ten](https://owasp.org/Top10/) categories or [OWASP Web Service Testing Guide](https://owasp.org/www-project-web-security-testing-guide/) chapters.

Some alerts are only relevant for specific [technologies](/techtags/) - if you know your target app does _not_ use some of these technologies then you can configure ZAP
to skip those tests.

The CWE and WASC columns are only shown on wider screens - if you are using a mobile phone then try turning your screen sideways if you want to see them.