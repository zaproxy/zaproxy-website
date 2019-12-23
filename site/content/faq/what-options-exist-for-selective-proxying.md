---
title: "What options exist for selective proxying?"
type: faq
category: Networking
weight: 4
---

There are a number of ways to accomplish selective proxying.

##  1 - Via a Browser Add-on/Extension

  * Such as FoxyProxy: <https://getfoxyproxy.org/>

##  2 - Via Global Excludes

  * Leveraging [Global Excludes](https://github.com/zaproxy/zap-core-help/wiki/HelpStartConceptsGlobalexcludeurl) you can specify URLs that ZAP should not intercept.

##  3 - Via a PAC (Proxy Auto-Config) File

  * You can create your own PAC (Proxy Auto-Config) file and dynamically set proxying as you need, then point your browser at it on your harddrive using the `file:///` scheme. For example:

    
    
    function FindProxyForURL(url, host) { 
        if (shExpMatch(host, "*.example.org")) { 
            return "PROXY localhost:8080"; //Use ZAP for *.example.org
        } 
        // Go directly to the WWW for everything else 
        return "DIRECT"; 
    }

![Firefox PAC
example](https://raw.githubusercontent.com/wiki/zaproxy/zaproxy/images/firefox_pac.png)

##  4 - Set "No Proxy For" in Your Browser

  * Most modern browsers allow users to specify domains or networks for which the traffic should not be proxied. ![Firefox No Proxy For example](https://raw.githubusercontent.com/wiki/zaproxy/zaproxy/images/ff_no_proxy_for.png)
