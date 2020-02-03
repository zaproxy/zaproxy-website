---
title: "ZAP Browser Launch"
type: post
tags:
- browser
date: "2017-08-22"
authors:
    - simon
---
We have just released a new feature for ZAP that allows you to launch browsers from within ZAP. The browsers are automatically configured to
proxy via ZAP and ignore certificate warnings, making it much easier for people to get started with ZAP as well as for more experienced users
who want to use ZAP with a variety of browsers. You can install and use Browser Launch right now via the ZAP Marketplace, which can be accessed
via the 'Manage Add-ons' button in ZAP:  
  
![](/img/zap-screenshot-browse-addons.png)  
  
just 'Check for Updates':  
{{< img "images/Check-for-updates.png" >}}  
and 'Update All':  
{{< img "images/update-all.png" >}}  
You will now get a new 'Launch Browser' option in the Quick Start tab:  
  
{{< img "images/launch-browser.png" >}}  
To see a demo of this feature see the following video:
{{< youtube lYHwR7UEggA >}}
  
Note that you must be using the latest version of ZAP (currently 2.8.0) and at least Java 8.  
Version 2.8.0 does support Java 7, but this functionality requires Java 8. It’s worth noting that the next full release of ZAP will also require
Java 8 as a minimum.  
  
If you have any problems or questions about this new feature then please head over to the [ZAP User Group](https://groups.google.com/group/zaproxy-users).

