---
title: "Hacking ZAP #2 - Getting Started"
type: post
draft: true
tags:
- TODO
date: "2014-03-20"
authors:
    - simon
---
Welcome to a [series of blog posts](http://code.google.com/p/zaproxy/wiki/Development?ts=1394453042&updated=Development#Hacking_ZAP) aimed at
helping you “hack the ZAP source code”.  
The previous post in this series is: [Hacking ZAP #1 - Why should you?](/blog/2014-03-10-hacking-zap-1-why-should-you/)  
  
In order to change the ZAP source code you will need to set up a development environment.  
  
We provide a full Eclipse workspace that is updated very regularly and is available to download from:
<http://sourceforge.net/projects/zaproxy/files/workspace/>  
  
However its worth understanding how the ZAP projects are structured, especially if you would like to use an alternative IDE.  

##  Project structure

  
There are currently 2 main ZAP code projects, ~~both~~ one has been migrated to GitHub while the other is still on Google code (but will be
migrated), and ongoing development takes place both on the trunks and in branches:  
  
[zaproxy](http://code.google.com/p/zaproxy/)  

  * [trunk](http://code.google.com/p/zaproxy/source/browse/#svn%2Ftrunk)
  * [branch/2.4](http://code.google.com/p/zaproxy/source/browse/#svn%2Fbranches%2F2.4)

[zap-extensions](https://github.com/zaproxy/zap-extensions)  

  * [master](https://github.com/zaproxy/zap-extensions)
  * [branch/alpha](https://github.com/zaproxy/zap-extensions/tree/alpha)
  * [branch/beta](https://github.com/zaproxy/zap-extensions/tree/beta)

There are more branches than shown, but you typically won’t need to use any of them.  
As Google Code is closing down we are in the process of migrating to [GitHub](https://github.com/). This blog post will be updated to reflect
any relevant changes.  
  
There is also a [zaproxy-test](https://github.com/zaproxy/zaproxy-test) project, however the main part of the project contained unit tests which
have now been migrated to a separate test folder within the other projects.

##  Setting up your IDE

If you choose not to use the Eclipse workspace then you can set up your IDE as follows:  

  1. Import all of the projects you need, e.g.
    * <https://zaproxy.googlecode.com/svn/trunk/> 
    * <https://github.com/zaproxy/zap-extensions> 
    * <https://github.com/zaproxy/zap-extensions/tree/alpha> 
    * <https://github.com/zaproxy/zap-extensions/tree/beta> 
  2. For each project, add all of the jars in the ‘lib’ directory to the classpath 

You should update these projects at regular intervals in order to pick up the latest changes.  
  
To run ZAP run [org.zaproxy.zap.ZAP.java](http://code.google.com/p/zaproxy/source/browse/trunk/src/org/zaproxy/zap/ZAP.java)  
  
Each project also has a main Ant build file, build/build.xml, which we will examine in more detail later in the series.  
  
There is more information about building ZAP on the [ZAP wiki](http://code.google.com/p/zaproxy/wiki/Building)  
  
Note that if you just want to get going as quickly as possible you can just import the zaproxy trunk for core changes and/or the zap-extensions
alpha branch for creating a new add-on.

##

##  The ZAP core

The zaproxy project is often called “the core”.  
  
It has 2 main high level packages within the src folder:  

  * [org/parosproxy](http://code.google.com/p/zaproxy/source/browse/trunk/src/#src%2Forg%2Fparosproxy)          __The code inherited from the Paros project
  * [org/zaproxy](http://code.google.com/p/zaproxy/source/browse/trunk/src/#src%2Forg%2Fzaproxy)                New ZAP code

Other directories of note:  

  * [src/help](http://code.google.com/p/zaproxy/source/browse/trunk/src/#src%2Fhelp)                     The main ZAP help files
  * [build](http://code.google.com/p/zaproxy/source/browse/trunk/#trunk%2Fbuild)                           Build related files
  * [lib](http://code.google.com/p/zaproxy/source/browse/trunk/#trunk%2Flib)                              The jars ZAP relies on
  * [test](http://code.google.com/p/zaproxy/source/browse/trunk/#trunk%2Ftest)                            ZAP unit tests

  
We try to implement significant new features in the zap-extensions project as ‘add-ons’.  
We do this for the following reasons:  

  1. Core changes can only be delivered via ‘full’ ZAP releases. We typically only do these a few times a year.
  2. Add-ons can be released and updated as frequently as required. Users can dynamically install and update add-ons, often without having to even restart ZAP.
  3. Add-ons progress from alpha through beta to release, allowing users to understand how robust an add-on is likely to be. This allows developers to release early without worrying about breaking ZAP for everyone.
  4. Add-ons can still be included in ‘full’ ZAP releases - the WebSockets and Ajax Spider are 2 add-ons that we include by default.

  
Having said that, you may well find that changes you want to make can only be made in the core.  
That is not a problem - you can make changes to the core - but these changes will probably not be available to users as quickly as those made to
add-ons.  
  
We also add new functionality to the core if we want it to be available for other add-ons to build on.  
  
Its important to note that if you make changes to code in the Paros package then you must include a comment at the top of the file mentioning
your change. This is required to satisfy the [Clarified Artistic
License](http://paros.cvs.sourceforge.net/viewvc/paros/parosng/src/license/TheClarifiedArtisticLicense.htm?revision=1.1) that Paros was released
under.  
We have a standard format for these comments  

> // ZAP: yyyy/mm/dd Issue xyz: Description of the changes

eg see [CommandLine.java](http://code.google.com/p/zaproxy/source/browse/trunk/src/org/parosproxy/paros/CommandLine.java#21)  
  
If you make changes to the core then you typically just need to make them to the trunk.  
There is a branch for every release. If your change fixes a significant issue then we may also want to apply it to the latest release branch.
But you dont need to worry about that.  

##  Add-ons, Extensions and Rules

There are many ways to extend ZAP programmatically.  
Some of the main ways include:  

  * Extensions, which are classes that extend the [Extension.java](http://code.google.com/p/zaproxy/source/browse/trunk/src/org/parosproxy/paros/extension/Extension.java) class. They are a powerful way of adding functionality to ZAP, and much of the ‘core’ is actually implemented as extensions.
  * Active Scan rules, which are classes which extend [Plugin.java](http://code.google.com/p/zaproxy/source/browse/trunk/src/org/parosproxy/paros/core/scanner/Plugin.java), detect potential vulnerabilities and run as part of the Active Scanner. These rules typically make multiple requests on the target system. They only run when explicitly invoked by the user.
  * Passive Scan rules, which are classes which extend [PluginPassiveScanner.java](http://code.google.com/p/zaproxy/source/browse/trunk/src/org/zaproxy/zap/extension/pscan/PluginPassiveScanner.java), detect potential vulnerabilities and run as part of the Passive Scanner. These rules cannot make any requests - all they can do is examine the requests and responses. They are typically invoked for every request that is proxied through ZAP.

Add-ons are packages which can include all of these components as well as ‘raw’ files. They are usually available on the ZAP Marketplace so that
users can discover, download and install them from within ZAP. You can also install add-ons from your filestore via the “File / Load Add-on
file…” menu.  
  
New add-ons should be created in the alpha branch and only move to the beta and then release branches after they have been reviewed.  
  
You can also create add-ons in your own repositories. If they are open source then they will still be eligible to be uploaded to the ZAP
Marketplace, but it might take slightly longer to review them.  
  
We will cover all of these components (and more) in more detail in a future posts.  
  
If you have any questions about ZAP development then please ask them on the [ZAP Developer](http://groups.google.com/group/zaproxy-develop)
group.  
  
The next post in this series is: [Hacking ZAP #3: Passive scan rules](/blog/2014-04-03-hacking-zap-3-passive-scan-rules/)

