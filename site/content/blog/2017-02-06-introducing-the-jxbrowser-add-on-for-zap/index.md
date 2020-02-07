---
title: "Introducing the JxBrowser add-on for ZAP"
type: post
tags:
date: "2017-02-06"
authors:
    - simon
---


###

As modern web applications are increasing their reliance on JavaScript, security tools that do not understand JavaScript will not be able to
work effectively with them.  ZAP already has components like the Ajax Spider and DOM XSS scanner that work by launching browsers and controlling
them via Selenium, and we are planning to make much more use of browsers in the future.  
  
To that end we are planning on releasing a new ZAP add-on which will contain [JxBrowser](https://www.teamdev.com/jxbrowser), a wrapper around
Chromium. We want ZAP to work as effectively as possible out of the box, and to be as easy to automate as possible. Being able to package
JxBrowser in an add-on gives us an up to date browser that we know will work without any other user actions. While the add-on does contain a
bundled version of Chromium it will not install Chrome on your computer. Your existing browsers and browser preferences will not be affected.  
  
**Please note** : While JxBrowser is a commercial closed source wrapper around Chromium, TeamDev has generously given us a permanent free
license to allow us to redistribute JxBrowser with ZAP. Most importantly ZAP will stay completely free. Additionally we will not be including
the JxBrowser with the ZAP ‘core’ release which we maintain. It will also be very easy to remove the JxBrowser add-on from ZAP via the command
line, in the same way that any other add-ons can be removed:  

> ./zap.sh -addonuninstall jxbrowser

  
**Why are we doing this?**  
As this is the first time we will have done anything like this I wanted to explain why we are packaging a closed source product with ZAP, what
the implications are and how you can contact us to discuss any concerns you may have.  
  
Unfortunately it is difficult for us to know which browsers will work on any specific system. Both Firefox and Chrome could be present, but we
can’t tell until we try to launch them. IE and/or Edge are only going to be available on Windows systems and although Safari is always likely to
be available on Mac OS it will not work with Selenium until an extra plugin is installed. As part of this on going effort we have recently
decided to package the WebDrivers for Firefox, Chrome and IE in ZAP add-ons so that you will not have to download them manually. We want to be
able to default to JxBrowser while allowing you to choose to use any of the browsers as you see fit. We will also be able to do things like
launch JxBrowser from within ZAP pre-configured to proxy via ZAP.  
  
**Are there any licensing restrictions for JxBrowser?**  
As a ZAP user you will be able to use the ZAP JxBrowser add-on for any purposes.  
However if you change the ZAP source code and call the JxBrowser API from one of your own products then you will need to arrange a suitable
licence with TeamDev.  
It is also worth noting that while JxBrowser does not ‘phone home’ the internal Chromium functionality may call 3rd party services (spell
checking, geolocation, etc) in a similar way to other browsers.  
  
**When will the add-on be available?**  
It's available now :) You can install it from within ZAP using the 'Manage Add-Ons' button on the ZAP toolbar. Make sure that you update any
add-ons that are flagged as needing updates, in particular the Selenium and Ajax Spider ones.  
  
If you do have any concerns about our bundling of JxBrowser then please join in the discussion on the [ZAP User
Group](https://groups.google.com/d/msg/zaproxy-users/j0Uxg6cUIY8/ghBP26sjBgAJ) or contact me directly.  
  

