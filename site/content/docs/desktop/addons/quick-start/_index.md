---
# This page was generated from the add-on.
title: Quick Start
type: userguide
weight: 1
cascade:
  addon:
    id: quickstart
    version: 49.0.0
---

# Quick Start

The Quick Start tab provides you with an easy way to quickly test a web application.  
The top screen shows 3 buttons that take you to the following screens.

## Automated Scan

The Automated Scan screen allows you to launch an automated scan against an application - just enter its URL below and press 'Attack'.   
Please be aware that you should only attack applications that you have been specifically been given permission to test.

### URL to attack

This is the URL of the application you wish to attack, starting with 'http://' or 'https://'.  
ZAP must be able to access this URL for the attack to proceed.

### Use traditional spider

The traditional spider explores the application by finding links in HTML pages. It is very fast but cannot handle applications which make heavy use of JavaScript.

### Use ajax spider

The ajax spider explores the application by launching the browser you have chosen and clicking on the links it finds. It is slower than the traditional spider but handles JavaScript well.  
This option is only shown if the ajax spider add-on is installed. If it is not available then you can download and install it for free from the ZAP Marketplace.   

The options available are:

* Never: you will then need to use the traditional spider
* If Modern: will run if ZAP identifies the target as a modern app - for this you need to use the traditional spider
* Always: if you choose this option then you do not need to run the traditional spider

## Manual Explore

The Manual Explore screen allows you to launch the browser of your choice so that you can explore your application while proxying through ZAP. Select the browser you want from the pull-down and press the 'Launch Browser' button.  
Browsers launched this way will be configured to proxy via ZAP and will ignore certificate errors, so you will not need to import the ZAP Root CA Certificate.  
ZAP will remember the last browser you chose when you restart it.  

A button will also be added to the toolbar which will launch the latest browser chosen. The icon will change to represent the relevant browser   

Note that launched browsers will stop working if you change the address or port that ZAP is listening on.

If you do not have selenium add-on installed then you will see instructions for configuring your browser
to proxy via ZAP manually.

### URL to explore

This is the URL of the application you wish to explore, starting with 'http://' or 'https://'.  
ZAP must be able to access this URL.

### Enable HUD

The ZAP Heads Up Display (HUD) brings all of the essential ZAP functionality into your browser. It is ideal for people new to web security and also allows experienced penetration testers to focus on an application's features while providing key security information and functionality.   
This option is enabled if the HUD add-on is installed. If it is not available then you can download and install it for free from the ZAP Marketplace.

## Learn More

The Learn More screen provides links to local and online resources for you to learn more about ZAP.

## News

Occasional news items will be displayed underneath the 3 buttons. Clicking on the red 'x' will hide the current news item.

## See also

|   |                                                                   |                                                    |
|---|-------------------------------------------------------------------|----------------------------------------------------|
|   | [Command Line](/docs/desktop/addons/quick-start/cmdline/)         | description of command line arguments              |
|   | ['ZAPit'](/docs/desktop/addons/quick-start/zapit/)                | a quick 'reconnaissance' scan of the URL specified |
|   | [Launch Options](/docs/desktop/addons/quick-start/launchoptions/) | the Quick Start Launch Options                     |
