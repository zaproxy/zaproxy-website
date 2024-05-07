---
# This page was generated from the add-on.
title: The HUD
type: userguide
weight: 1
cascade:
  addon:
    id: hud
    version: 0.19.0
---

# The HUD

The HUD is a completely new interface that brings information and functionality from ZAP into your browser.

For more details see:

* Blog: <https://segment.com/blog/hacking-with-a-heads-up-display/>
* Video: <https://www.youtube.com/watch?v=ztfgip-UhWw>
* The HUD wiki: <https://github.com/zaproxy/zap-hud/wiki>

## Command Line Options

The HUD works equally well with ZAP in desktop and daemon modes.  
As many people use ZAP in daemon mode for automated testing the HUD is disabled by default in this mode.  
The HUD add-on adds new ZAP command line options which enable the HUD in daemon mode and launch a browser preconfigured to proxy through ZAP and ignore certificate errors:

* -hud : launch a browser with the HUD enabled, only needed if you don't want to specify a browser or url
* -hudbrowser \<browser\> : the browser ZAP will use, either Firefox (the default) or Chrome
* -hudurl \<url\> : the URL that will be opened in the browser, by default none

Any combination of these parameters will launch a browser with the HUD enabled.  

You can also enable the HUD in daemon mode without launching a browser using the ZAP command line option:

```
-config hud.enabledForDaemon=true
```

## Getting Involved

ZAP is a community project and so we are always very keen to hear from anyone who'd like to contribute, just post to the [ZAP HUD Group](https://groups.google.com/group/zaproxy-hud)

## Caveats

This is still early days for this add-on :) Some known issues include:

* Only a limited amount of ZAP functionality is available
* We're still using Vue.js in dev mode so can't apply a suitably strong CSP
* The JavaScript code needs to be properly formatted and linted
* Firefox has been tested more than Chrome, but both should work
* The code to support the HUD in multiple browser tabs is very new so might be buggy
* In particular don't close the first tab on Firefox or the HUD will stop working
* Documentation could, of course, be better
