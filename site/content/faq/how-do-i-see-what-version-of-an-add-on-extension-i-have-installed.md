---
title: "How do I see what version of an add-on/extension I have installed?"
type: faq
category: Detailed Questions
weight: 7
---

There are three ways to do this:

###  1 - Via the Marketplace

  1. Click the Marketplace button in the main toolbar:  
  ![Marketplace Toolbar Button](/img/zap-screenshot-browse-addons.png)
  2. The Installed tab now displays a column including the current version. This adds clarity if/when an update is available as the bottom panel displays the details for the update:  
  ![Installed add-on version column](/img/faq/installedAddonVersion.png)

###  2 - Via the Help Menu

  1. From the Help menu select "Support Info..."
  2. Copy the entire contents or find the specific add-on you're interested in.  
  ![Support Info... add-on version info](/img/faq/supportAddonVersion.png)

###  3 - Via the CLI

  1. `zap.bat -suppinfo` or `zap.sh -suppinfo` will produce output similar to:

    
    
    OWASP ZAP
    Version: 2.8.0
    Installed Add-ons: [[id=alertFilters, version=8.0.0], [id=ascanrules, version=33.0.0], [id=bruteforce, version=8.0.0]
    ...snip...
    [id=tips, version=6.0.0], [id=webdriverwindows, version=10.0.0], [id=websocket, version=19.0.0], [id=zest, version=29.0.0]]
    Operating System: Windows 7
    Java Version: Oracle Corporation 1.8.0_191
    System's Locale: en_CA
    Display Locale: en_GB
    Format Locale: en_GB
    ZAP Home Directory: C:\Users\someone\OWASP ZAP\
    ZAP Installation Directory: C:\Program Files\OWASP\Zed Attack Proxy\.\
    Look and Feel: Metal (javax.swing.plaf.metal.MetalLookAndFeel)
    
