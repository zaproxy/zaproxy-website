---
title: "Hacking ZAP #4 - Active scan rules"
type: post
draft: true
tags:
- TODO
date: "2014-04-30"
authors:
    - simon
---
Welcome to a [series of blog posts](https://github.com/zaproxy/zaproxy/wiki/Development) aimed at helping you “hack the ZAP source code”.  
The previous post in this series is: [Hacking ZAP #3 - Passive scan rules](http://zaproxy.blogspot.co.uk/2014/04/hacking-zap-3-passive-scan-
rules.html)  
  
Active scan rules are another relatively simple way to enhance ZAP. Active scan rules attack the server, and therefore are only run when
explicitly invoked by the user. You should only use active scan rules against applications that you have permission to attack.  
You can also write active scan rules dynamically using scripts, as we will see later in this series, but even then its very useful to understand
some of the concepts underlying classes available to you.  

##  Where to start

As with passive rules, the easiest way to get started is to rip off an existing rule. Active scan rules can be found in 3 locations in the [zap-
extensions](https://github.com/zaproxy/zap-extensions/) project, depending on their status:  

  * Release quality:  [master/src/org/zaproxy/zap/extension/ascanrules](https://github.com/zaproxy/zap-extensions/tree/master/src/org/zaproxy/zap/extension/ascanrules)
  * Beta quality:        [branches/beta/src/org/zaproxy/zap/extension/ascanrulesBeta](https://github.com/zaproxy/zap-extensions/tree/beta/src/org/zaproxy/zap/extension/ascanrulesBeta)
  * Alpha quality:      [branches/alpha/src/org/zaproxy/zap/extension/ascanrulesAlpha](https://github.com/zaproxy/zap-extensions/tree/alpha/src/org/zaproxy/zap/extension/ascanrulesAlpha)

There are also some simple examples that we will examine in more detail.  
These are all in the alpha branch.  

##  The main classes

Unlike passive scan rules there are different classes that you should extend depending on the type of rule you want to implement.  
[AbstractPlugin](https://github.com/zaproxy/zaproxy/blob/develop/src/org/parosproxy/paros/core/scanner/AbstractPlugin.java) \- you typically
will not extend this class directly, but it provides key methods that you will need to use and abstract methods that will need to be
implemented.  
[AbstractHostPlugin](https://github.com/zaproxy/zaproxy/blob/develop/src/org/parosproxy/paros/core/scanner/AbstractHostPlugin.java) \- extend
this class if you want your code to be run once against the top node that the user scans. This is ideal for scanning things that are not ‘page’
related, such as the SSL certificate. The key method you’ll need to implement is the void scan() method inherited from AbstractPlugin - this is
where you perform your attacks.  
[AbstractAppPlugin](https://github.com/zaproxy/zaproxy/blob/develop/src/org/parosproxy/paros/core/scanner/AbstractAppPlugin.java) \- extend this
class if you want your code to be run against every node (or page) being scanned. This is ideal for scanning elements that are not related to
existing parameters, such as trying new debug flags. The key method you’ll need to implement is the void scan() method inherited from
AbstractPlugin - this is where you perform your attacks.  
[AbstractAppParamPlugin](https://github.com/zaproxy/zaproxy/blob/develop/src/org/parosproxy/paros/core/scanner/AbstractAppParamPlugin.java) \-
extend this class if you want your code to run against every parameter in every node being scanned. This is ideal for scanning existing
parameters. The key method you’ll need to implement is void scan(HttpMessage msg, String param, String value) \- this is where you attack the
specified parameter.  

###  Performing attacks

###

###  Unlike passive scan rules, active scan rules are expected to make requests to the server.

You should use the AbstractPlugin.getNewMsg() method to get hold of a new HttpMessage that you can use for your attack. If you make multiple
requests then call getNewMsg() for each request. The message will be a copy of the original request but with an empty response. You can access
the original request and response via the getBaseMsg() but you should not modify it. You should use one of the
AbstractPlugin.sendAndReceive(HttpMessage msg, …) methods to actually make the request. The variants allow you to choose whether the underlying
code should handle redirects and/or anti CSRF tokens.  The sendAndReceive methods also handle user controlled features like authenticating as a
specified user. When you find potential issues you can raise them via one of the AbstractPlugin.bingo(..) methods.  
Like passive scan rules, active scan rules support AlertThresholds which allow the user to indicate how strictly you should check for
vulnerabilities.  

##  Simple example

  
The[ ExampleSimpleActiveScanner](https://github.com/zaproxy/zap-
extensions/tree/alpha/src/org/zaproxy/zap/extension/ascanrulesAlpha/ExampleSimpleActiveScanner.java) class implements a very simple active scan
rule. As you will see, it just raises an alert randomly, so it isnt of any practical use. Like the simple example passive scanner introduced in
the previous post it uses the Vulnerabilities class for the documentation associated with the vulnerability. Most of the methods should be self
explanatory, but there are 2 that are worth explaining. The getCategory() method is used to group related rules in the UI. And the getRisk()
method affects the order the rules are run - the rules which report higher risks are run before those that report lower risks.  

##  File based example

The[ ExampleFileActiveScanner](https://github.com/zaproxy/zap-
extensions/tree/alpha/src/org/zaproxy/zap/extension/ascanrulesAlpha/ExampleFileActiveScanner.java) class implements a slightly more complex
active scan rule which is equivalent to the example file passive scan rule introduced in the previous post. This class introduces another
feature, the attack strength, which allows the user to adjust the number of attacks each rule performs. If you are implementing a rule just for
your own use then you dont need to worry about this. However if you plan to publish it for others to use then you should consider supporting it.  
The getAttackStrength() method returns an AttackStrength class which can be one of:

  * LOW:         Limit to around 6 requests per scan call
  * MEDIUM:    Limit to around 12 requests
  * HIGH:         Limit to around 24 requests
  * INSANE:    No limit, although 1000s wouldnt be a good idea

  
You should periodically check to see if the
[AbstractPlugin.isStop()](https://github.com/zaproxy/zaproxy/blob/develop/src/org/parosproxy/paros/core/scanner/AbstractPlugin.java#446) method
returns true - this indicates that the user has stopped the scan so your code should immediately return. The infrastructure will check this
before invoking your code to scan a new target (eg page or parameter).  

##  Advanced features

If your rule depends on another rule having been run then you need to specify that via the getDependency() method.  
The persistent XSS rules do this, eg in [TestPersistentXSSSpider](https://github.com/zaproxy/zap-
extensions/blob/master/src/org/zaproxy/zap/extension/ascanrules/TestPersistentXSSSpider.java) and
[TestPersistentXSSAttack](https://github.com/zaproxy/zap-
extensions/blob/master/src/org/zaproxy/zap/extension/ascanrules/TestPersistentXSSAttack.java)  
If you need to know the exact type of parameter you are scanning, for example to ignore some types that are not relevant, then you can override
the [AbstractAppParamPlugin.scan(HttpMessage msg, NameValuePair originalParam)
](https://github.com/zaproxy/zaproxy/blob/develop/src/org/parosproxy/paros/core/scanner/AbstractAppParamPlugin.java#244)method and provide a
null scan(HttpMessage msg, String param, String value) method. The NameValuePair class includes the parameter type.

##  Building and deploying

All ZAP add-ons are build using [Apache Ant](http://ant.apache.org/). For the alpha active scan rules the build file is:
[branches/alpha/build/build.xml](https://github.com/zaproxy/zap-extensions/blob/alpha/build/build.xml) All you need to do is run the deploy-
ascanrulesAlpha target and the relevant add-on will be built and copied to the correct location, assuming you have a ZAP core project called
‘zaproxy’. If you want to deploy to a different location then you can change it at the top of the file.  
ZAP automatically extracts the files specified in the manifest into a directory underneath the ZAP user directory.  
An knowledgeable user can manually edit these files and any changes will take affect when ZAP is restarted.  

##  Updating the help and manifest

As with passive scan rules its good to add a short description of the rule to the help file: [ascanalpha.html](https://github.com/zaproxy/zap-
extensions/tree/alpha/src/org/zaproxy/zap/extension/ascanrulesAlpha/resources/help/contents/ascanalpha.html) and include the new class along
with any files it uses in the add-on manifest: [ZapAddOn.xml](https://github.com/zaproxy/zap-
extensions/tree/alpha/src/org/zaproxy/zap/extension/ascanrulesAlpha/ZapAddOn.xml)  
The next post in this series will be: Hacking ZAP #5: Extensions

