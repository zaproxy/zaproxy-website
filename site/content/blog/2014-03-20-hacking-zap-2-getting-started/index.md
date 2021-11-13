---
title: "Hacking ZAP #2 - Getting Started"
type: post
tags:
 - hacking
date: "2014-03-20"
authors:
    - simon
---
Welcome to a [series of blog posts](https://github.com/zaproxy/zaproxy/wiki/Development#hacking-zap) aimed at
helping you “hack the ZAP source code”.  
The previous post in this series is: [Hacking ZAP #1 - Why should you?](/blog/2014-03-10-hacking-zap-1-why-should-you/)  
  
In order to change the ZAP source code you will need to set up a development environment.  

## Requirements

The following software is used/required to obtain and build ZAP (core) and the add-ons:
 - A JDK (minimum version 8), for example, [Zulu JDK](https://www.azul.com/downloads/zulu-community/) or [AdoptOpenJDK](https://adoptopenjdk.net/);
 - [Git](https://git-scm.com/downloads), to obtain the source code;
 - [Gradle](https://gradle.org/), to build the source code. It's recommend to use the [Gradle Wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html) provided in the corresponding projects.

## Projects

The ZAP projects are located in GitHub under the [zaproxy organization](https://github.com/zaproxy/).

The main projects are [`zaproxy`](https://github.com/zaproxy/zaproxy/) and [`zap-extensions`](https://github.com/zaproxy/zap-extensions/).

## The ZAP core

The `zaproxy` project is often called “the core”.  
  
The project follows the typical directory structure for Java projects, with main code under
[src/main/java](https://github.com/zaproxy/zaproxy/tree/main/zap/src/main/java/) and tests under
[src/test/java](https://github.com/zaproxy/zaproxy/tree/main/zap/src/test/java/).

The main packages are:  

  * [org.parosproxy](https://github.com/zaproxy/zaproxy/tree/main/zap/src/main/java/org/parosproxy)  The code inherited from the Paros project
  * [org.zaproxy](https://github.com/zaproxy/zaproxy/tree/main/zap/src/main/java/org/zaproxy)        New ZAP code

We try to implement significant new features in the `zap-extensions` project as ‘add-ons’.  
We do this for the following reasons:  

  1. Core changes can only be delivered via ‘full’ ZAP releases. We typically only do these a few times a year.
  2. Add-ons can be released and updated as frequently as required. Users can dynamically install and update add-ons, often without having to even restart ZAP.
  3. Add-ons progress from alpha through beta to release, allowing users to understand how robust an add-on is likely to be. This allows developers to release early without worrying about breaking ZAP for everyone.
  4. Add-ons can still be included in ‘full’ ZAP releases - the WebSockets and Ajax Spider are 2 add-ons that we include by default.

Having said that, you may well find that changes you want to make can only be made in the core.  
That is not a problem - you can make changes to the core - but these changes will probably not be available to users as quickly as those made to add-ons.  
  
We also add new functionality to the core if we want it to be available for other add-ons to build on.  
  
It's important to note that if you make changes to Paros' code then you must include a comment at the top of the file mentioning
your change. This is required to satisfy the [Clarified Artistic License](https://github.com/zaproxy/zaproxy/blob/main/zap/src/main/dist/license/TheClarifiedArtisticLicense.htm) that Paros was released under.  
We have a standard format for these comments  

> // ZAP: yyyy/mm/dd Issue xyz: Description of the changes

e.g. see [CommandLine.java](https://github.com/zaproxy/zaproxy/blob/main/zap/src/main/java/org/parosproxy/paros/CommandLine.java#L21)  
  
The `zaproxy` project uses a single branch that means if you make changes to the core then you typically just need to make them out of the `main` branch.  

##  Add-ons, Extensions and Rules

There are many ways to extend ZAP programmatically.  
Some of the main ways include:  

  * Extensions, which are classes that extend the [`Extension`](https://github.com/zaproxy/zaproxy/blob/main/zap/src/main/java/org/parosproxy/paros/extension/Extension.java) class. They are a powerful way of adding functionality to ZAP, and much of the ‘core’ is actually implemented as extensions.
  * Active Scan rules, which are classes which extend [`Plugin`](https://github.com/zaproxy/zaproxy/blob/main/zap/src/main/java/org/parosproxy/paros/core/scanner/Plugin.java), detect potential vulnerabilities and run as part of the Active Scanner. These rules typically make multiple requests on the target system. They only run when explicitly invoked by the user.
  * Passive Scan rules, which are classes which extend [PluginPassiveScanner](https://github.com/zaproxy/zaproxy/blob/main/zap/src/main/java/org/zaproxy/zap/extension/pscan/PluginPassiveScanner.java), detect potential vulnerabilities and run as part of the Passive Scanner. These rules cannot make any requests - all they can do is examine the requests and responses. They are typically invoked for every request that is sent through ZAP.
  * [Script Console](https://www.zaproxy.org/docs/desktop/addons/script-console/), you can write your own scripts in python, ruby, zest, js, etc. This is the most flex way to expand ZAP without going through java development and build processes. 
Add-ons are packages which can include all of these components as well as ‘raw’ files. They are usually available on the [ZAP Marketplace](/addons/) so that
users can discover, download, and install them from within ZAP. You can also install add-ons from the filestore via the “File / Load Add-on
file…” menu.  
  
New add-ons should be created with alpha status and only move to the beta and then release status after they have been reviewed.  
  
You can also create add-ons in your own repositories. If they are open source then they will still be eligible to be uploaded to the ZAP
Marketplace.  
  
We will cover all of these components (and more) in more detail in a future posts.  
  
If you have any questions about ZAP development then please ask them on the [ZAP Developer](https://groups.google.com/group/zaproxy-develop)
group.
