---
title: "Hacking ZAP #4 - Active scan rules"
type: post
tags:
 - hacking
date: "2014-04-30"
authors:
    - simon
---
Welcome to a [series of blog posts](https://github.com/zaproxy/zaproxy/wiki/Development#hacking-zap) aimed at helping you “hack the ZAP source code”.  
The previous post in this series is: [Hacking ZAP #3 - Passive scan rules](/blog/2014-04-03-hacking-zap-3-passive-scan-rules/)  
  
Active scan rules are another relatively simple way to enhance ZAP. Active scan rules attack the server, and therefore are only run when
explicitly invoked by the user. You should only use active scan rules against applications that you have permission to attack.  
You can also write active scan rules dynamically using scripts, as we will see later in this series, but even then it's very useful to understand
some of the concepts underlying classes available to you.  

##  Where to start

As with passive rules, the easiest way to get started is to rip off an existing rule.  The (main) active scan rules can be found in 3 add-ons in the
[zap-extensions](https://github.com/zaproxy/zap-extensions/) project, depending on their status:  

  * Release quality:  [addOns/ascanrules](https://github.com/zaproxy/zap-extensions/tree/master/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules)
  * Beta quality:       [addOns/ascanrulesBeta](https://github.com/zaproxy/zap-extensions/tree/master/addOns/ascanrulesBeta/src/main/java/org/zaproxy/zap/extension/ascanrulesBeta)
  * Alpha quality:     [addOns/ascanrulesAlpha](https://github.com/zaproxy/zap-extensions/tree/master/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha)

There are also some simple examples that we will examine in more detail. These are all in the `ascanrulesAlpha` add-on.  

##  The main classes

Unlike passive scan rules there are different classes that you should extend depending on the type of rule you want to implement.  
[`AbstractPlugin`](https://github.com/zaproxy/zaproxy/blob/develop/zap/src/main/java/org/parosproxy/paros/core/scanner/AbstractPlugin.java) - you typically
will not extend this class directly, but it provides key methods that you will need to use and abstract methods that will need to be
implemented.  
[`AbstractHostPlugin`](https://github.com/zaproxy/zaproxy/blob/develop/zap/src/main/java/org/parosproxy/paros/core/scanner/AbstractHostPlugin.java) - extend
this class if you want your code to be run once against the top node that the user scans. This is ideal for scanning things that are not ‘page’
related, such as the SSL certificate. The key method you’ll need to implement is the `scan()` method inherited from `AbstractPlugin` - this is
where you perform your attacks.  
[`AbstractAppPlugin`](https://github.com/zaproxy/zaproxy/blob/develop/zap/src/main/java/org/parosproxy/paros/core/scanner/AbstractAppPlugin.java) - extend this
class if you want your code to be run against every node (or page) being scanned. This is ideal for scanning elements that are not related to
existing parameters, such as trying new debug flags. The key method you’ll need to implement is the `scan()` method inherited from
`AbstractPlugin` - this is where you perform your attacks.  
[`AbstractAppParamPlugin`](https://github.com/zaproxy/zaproxy/blob/develop/zap/src/main/java/org/parosproxy/paros/core/scanner/AbstractAppParamPlugin.java) - extend this class if you want your code to run against every parameter in every node being scanned. This is ideal for scanning existing
parameters. The key method you’ll need to implement is `scan(HttpMessage msg, String param, String value)` - this is where you attack the
specified parameter.  

###  Performing attacks

Unlike passive scan rules, active scan rules are expected to make requests to the server.

You should use the `AbstractPlugin.getNewMsg()` method to get hold of a new `HttpMessage` that you can use for your attack. If you make multiple
requests then call `getNewMsg()` for each request. The message will be a copy of the original request but with an empty response. You can access
the original request and response via the `getBaseMsg()` but you should not modify it. You should use one of the
`AbstractPlugin.sendAndReceive(HttpMessage msg, …)` methods to actually make the request. The variants allow you to choose whether the underlying
code should handle redirects and/or anti-CSRF tokens.  The `sendAndReceive` methods also handle user controlled features like authenticating as a
specified user. When you find potential issues you can raise them via one of the `AbstractPlugin.bingo(…)` methods.  
Like passive scan rules, active scan rules support `AlertThreshold`s which allow the user to indicate how strictly you should check for
vulnerabilities.  

##  Simple example

The [`ExampleSimpleActiveScanner`](https://github.com/zaproxy/zap-extensions/tree/master/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/ExampleSimpleActiveScanner.java) class implements a very simple active scan
rule. As you will see, it just raises an alert randomly, so it isn't of any practical use. Like the simple example passive scanner introduced in
the previous post it uses the `Vulnerabilities` class for the documentation associated with the vulnerability. Most of the methods should be self
explanatory, but there are 2 that are worth explaining. The `getCategory()` method is used to group related rules in the UI. And the `getRisk()`
method affects the order the rules are run - the rules which report higher risks are run before those that report lower risks.  

##  File based example

The [`ExampleFileActiveScanner`](https://github.com/zaproxy/zap-extensions/tree/master/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/ExampleFileActiveScanner.java) class implements a slightly more complex
active scan rule which is equivalent to the example file passive scan rule introduced in the previous post. This class introduces another
feature, the attack strength, which allows the user to adjust the number of attacks each rule performs. If you are implementing a rule just for
your own use then you don't need to worry about this. However if you plan to publish it for others to use then you should consider supporting it.  
The `getAttackStrength()` method returns an `AttackStrength` which can be one of:

  * `LOW`:         Limit to around 6 requests per scan call
  * `MEDIUM`:   Limit to around 12 requests
  * `HIGH`:       Limit to around 24 requests
  * `INSANE`:   No limit, although 1000s wouldn't be a good idea

  
You should periodically check to see if the [`AbstractPlugin.isStop()`](https://github.com/zaproxy/zaproxy/blob/develop/zap/src/main/java/org/parosproxy/paros/core/scanner/AbstractPlugin.java#L596) method
returns true - this indicates that the user has stopped the scan so your code should immediately return. The infrastructure will check this
before invoking your code to scan a new target (e.g. page or parameter).  

##  Advanced features

If your rule depends on another rule having been run then you need to specify that via the `getDependency()` method.  
The persistent XSS rules do this, e.g. in [`TestPersistentXSSSpider`](https://github.com/zaproxy/zap-extensions/blob/master/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/TestPersistentXSSSpider.java) and [`TestPersistentXSSAttack`](https://github.com/zaproxy/zap-extensions/blob/master/addOns/ascanrules/src/main/java/org/zaproxy/zap/extension/ascanrules/TestPersistentXSSAttack.java).  
If you need to know the exact type of parameter you are scanning, for example to ignore some types that are not relevant, then you can override
the [`AbstractAppParamPlugin.scan(HttpMessage msg, NameValuePair originalParam)`](https://github.com/zaproxy/zaproxy/blob/develop/zap/src/main/java/org/parosproxy/paros/core/scanner/AbstractAppParamPlugin.java#L284) method and provide an
empty `scan(HttpMessage msg, String param, String value)` method. The `NameValuePair` class includes the parameter type.

##  Building and deploying

The alpha active scan rules add-on build file is [addOns/ascanrulesAlpha/ascanrulesAlpha.gradle.kts](https://github.com/zaproxy/zap-extensions/blob/master/addOns/ascanrulesAlpha/ascanrulesAlpha.gradle.kts). All you need to do is run the Gradle task `:addOns:ascanrulesAlpha:copyZapAddOn` in the `zap-extensions` project and the relevant add-on will be built and copied to the correct location, assuming you have a ZAP core project called `zaproxy`. If you want to deploy to a different location then you can use the command line argument `--into=/path/to/copy/into/`.  

##  Updating the help

As with passive scan rules it's good to add a short description of the rule to the help file: [`ascanalpha.html`](https://github.com/zaproxy/zap-extensions/blob/master/addOns/ascanrulesAlpha/src/main/javahelp/org/zaproxy/zap/extension/ascanrulesAlpha/resources/help/contents/ascanalpha.html).

The next post in this series will be: Hacking ZAP #5: Extensions

