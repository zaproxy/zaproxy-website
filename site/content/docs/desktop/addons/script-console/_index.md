---
# This page was generated from the add-on.
title: Script Console
type: userguide
weight: 1
cascade:
  addon:
    id: scripts
    version: 45.5.0
---

# Script Console

The Script Console add-on allows you to run scripts that can be embedded within ZAP and can access internal ZAP data structures.  
It supports any scripting language that supports JSR 223 (http://www.jcp.org/en/jsr/detail?id=223) , including:

* ECMAScript / JavaScript (using [Nashorn engine](https://docs.oracle.com/javase/8/docs/technotes/guides/scripting/nashorn/), included by default)
* Zest <https://developer.mozilla.org/en-US/docs/zest> (included by default)
* Groovy <http://groovy-lang.org/>
* Python <http://www.jython.org>
* Ruby - <http://jruby.org/>
* and many more...

**WARNING - scripts run with the same permissions as ZAP, so do not run any scripts that you do not trust!**

## Script Types

Different types of scripts are supported:

* Stand Alone - scripts that are self contained and are only run when your start them manually
* Active Rules - these run as part of the Active Scanner and can be individually enabled
* Passive Rules - these run as part of the Passive Scanner and can be individually enabled
* Proxy - these run 'inline', can change every request and response and can be individually enabled. They can also trigger break points
* HTTP Sender - scripts that run against every request/response sent/received by ZAP. This includes the proxied messages, messages sent during active scanner, fuzzer, ...
* Targeted - scripts that are invoked with a target URL and are only run when your start them manually
* Authentication - scripts that are invoked when authentication is performed for a Context. To be used, they need to be selected when configuring the Script-Based Authentication Method for a Context.
* Script Input Vector - scripts for defining exactly what ZAP should attack
* Extender - scripts which can add new functionality, including graphical elements and new API end points

**Note:** Add-ons can add additional types of scripts, which should be described in the help of the corresponding add-on.

All scripts that are run automatically are initially 'disabled' - you must enable them via the [The Scripts 'tree' tab](/docs/desktop/addons/script-console/tree/)
before they will run.  
If an error occurs when they run then they will be disabled.  
When you select the script then the last error will be shown in the [Script Console tab](/docs/desktop/addons/script-console/console/).  
Targeted scripts can be invoked by right clicking on a record in the Sites or History tabs and selecting the 'Invoke with script...' menu item.

All scripting languages can be used for all script types, but only those languages that have been downloaded from the ZAP Marketplace
will typically have templates. However you may well be able to adapt a template for another language.  
If your favourite language is not available on the Marketplace then please raise a new issue via the "Online/Report an issue" menu item.  

## Global Variables

Variables can be shared between all scripts via the class org.zaproxy.zap.extension.script.ScriptVars.  
For example in JavaScript you can use this class as follows:  

`
org.zaproxy.zap.extension.script.ScriptVars.setGlobalVar("var.name","value")`  
`
org.zaproxy.zap.extension.script.ScriptVars.getGlobalVar("var.name")`  
`
`

## Script Variables

Variables can be shared between separate invocations of the same script via the same org.zaproxy.zap.extension.script.ScriptVars class.  
For example in JavaScript you can use this class as follows:  

`
org.zaproxy.zap.extension.script.ScriptVars.setScriptVar(this.context, "var.name","value")`  
`
org.zaproxy.zap.extension.script.ScriptVars.getScriptVar(this.context, "var.name")`  
`
`   
Note that these methods are only usable from scripting languages that provide access to the ScriptContext (like JavaScript). For other scripting languages (in ZAP versions after 2.7.0) the variables can be accessed/set by manually specifying the name of the script:  

`
org.zaproxy.zap.extension.script.ScriptVars.setScriptVar("ScriptName", "var.name","value")`  
`
org.zaproxy.zap.extension.script.ScriptVars.getScriptVar("ScriptName", "var.name")`  
`
`

## Custom Global/Script Variables

Newer versions of ZAP (after 2.8.0) allow to set custom global/script variables, which can be of any type not just strings, for example, lists, maps.  
In JavaScript they are accessed/set as follows:  

`
var ScriptVars = Java.type("org.zaproxy.zap.extension.script.ScriptVars")
ScriptVars.setScriptCustomVar(this.context, "var.name", {x: 1, y: 3})
print(ScriptVars.getScriptCustomVar(this.context, "var.name").y) // Prints 3
ScriptVars.setGlobalCustomVar("var.name", ["A", "B", "C", "D"])
print(ScriptVars.getGlobalCustomVar("var.name")[2]) // Prints C
`

## See also

|   |                                                                        |   |
|---|------------------------------------------------------------------------|---|
|   | [The Script Console tab](/docs/desktop/addons/script-console/console/) |   |
|   | [The Scripts 'tree' tab](/docs/desktop/addons/script-console/tree/)    |   |

## External links

|   |                                                                       |                       |
|---|-----------------------------------------------------------------------|-----------------------|
|   | <https://github.com/zaproxy/zaproxy/wiki/InternalDetails>             | ZAP internal objects  |
|   | <https://javadoc.io/doc/org.zaproxy/zap>                              | ZAP javadocs          |
|   | <https://wiki.openjdk.java.net/display/Nashorn/Rhino+Migration+Guide> | Rhino Migration Guide |
