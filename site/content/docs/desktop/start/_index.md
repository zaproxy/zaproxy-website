---
# This page was generated from the add-on.
title: Getting Started
type: userguide
weight: 2
---

# Getting Started

The quickest way to get going with ZAP is to use the Quick Start add-on which is installed by default.  
This allows you to enter a URL which ZAP will first spider
and then [active scan](/docs/desktop/start/features/ascan/).  
For a more in depth test you should explore your application using your browser or automated regression tests while proxying through ZAP.

At its heart ZAP is a [man-in-the-middle proxy](/docs/desktop/start/features/intercept/).  
To get the most out of ZAP you need to configure your browser or functional tests to connect to the web application you wish to test through ZAP.  
If required you can also configure ZAP to connect through another proxy - this is often
necessary in a corporate environment.  

You can quickly and easily launch browsers that are pre-configured to proxy through ZAP via the Quick Start tab.
This can launch any of the most common browsers that you have installed with new profiles.  
If you would like to use any of your browsers with an existing profile (for example with other browser add-ons installed),
 you will need to manually configure your browser to proxy via ZAP.  
If you know how to set up proxies in your web browser, go ahead and give it a go!  
If you are unsure, have a look at the [Configuring proxies](/docs/desktop/start/proxies/)
section.

Once you have configured ZAP as your browser's proxy, try to connect to the web application
you will be testing.  
If you can not connect to it, check your proxy settings again. You will need to check your
browser's proxy settings and ZAP's proxy settings.   
It is also worth checking that the application that you are trying to test is running!

When you have successfully connected to your application via your browser, have a look at ZAP
again. You should now see one or more lines in the [Sites](/docs/desktop/ui/tabs/sites/) and
[History](/docs/desktop/ui/tabs/history/) tabs.  
If so, we're in business. If not, you'll need to check your proxy settings again.

The next thing to do is to start a
[basic penetration test](/docs/desktop/start/pentest/).  

## See also

|   |                                                     |                                                                 |
|---|-----------------------------------------------------|-----------------------------------------------------------------|
|   | [Configuring Proxies](/docs/desktop/start/proxies/) | for details of how to set up ZAP as a proxy in your web browser |
|   | [Introduction](/docs/desktop/)                      | the introduction to ZAP                                         |
|   | [Features](/docs/desktop/start/features/)           | provided by ZAP                                                 |
|   | [Scanner Rules](/docs/desktop/start/checks/)        | supported by default                                            |

## Official Videos

|   |                                                                                       |
|---|---------------------------------------------------------------------------------------|
|   | [ZAPCon 2022: ZAP for Everybody](https://www.youtube.com/watch?v=32W_hm30dsg) (44:05) |
