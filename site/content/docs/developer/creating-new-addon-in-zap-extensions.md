---
title: "Creating a New Add-on in zap-extensions"
description: "This guide will get you started with building and running ZAP in the Eclipse IDE."
tags: 
- guide
- tutorial
type: page
date: "2021-03-22"
---

ZAP has a plugin architecture and new functionality is implemented via add-ons.

Add-ons can be defined in any repository but most of the ones that the ZAP core team maintains live in 
[zap-extensions](https://github.com/zaproxy/zap-extensions/).
You should use this repository if you are planning on contributing your add-on to the ZAP project, 
but please talk to the ZAP Core team about this first via the [ZAP Developer Group](https://groups.google.com/g/zaproxy-develop). 
If you are planning on maintaining your add-on yourself then you should create it in another repository.

This guide will explain how you can quickly create a brand new add-on in this repository that you can then customise as you want.

## Preparation
You will need to have followed the [Quick Start Guide to Building ZAP](../quick-start-build/) and have imported the ZAP code into your favourite IDE.

For the command line instructions given below you should be in the `zap-extensions` directory.

## Copy the Simple Example Add-on

The Simple Example is just what it sounds like, a simple example of a ZAP add-on.

Copy this add-on into a new directory, for example called `myaddon`. 
If you choose a different name then make sure that you use the name you have chosen in all of the commands below.

On Linux and MacOS this can be done from the command line using:
```bash
cp -R addOns/simpleexample addOns/myaddon
```
On Windows this can be done from the command line using:
```bash
xcopy addOns\simpleexample addOns\myaddon\ /E/H
```

## Update the Project Files

### simpleexample.gradle.kts

Rename the file `simpleexample.gradle.kts` to be `myaddon.gradle.kts`.
On Linux and MacOS:
```bash
mv addOns/myaddon/simpleexample.gradle.kts addOns/myaddon/myaddon.gradle.kts
```
On Windows this can be done from the command line using:
```bash
rename addOns\myaddon\simpleexample.gradle.kts addOns\myaddon\myaddon.gradle.kts
```
Edit the new file `myaddon.gradle.kts`, change the version, description, and name:
```
version = "0.0.1"
description = "A new description."

zapAddOn {
    addOnName.set("My AddOn")
    zapVersion.set("2.10.0")

    manifest {
        author.set("ZAP Dev Team")
    }
}
```

### settings.gradle.kts

Edit the file `settings.gradle.kts` and add `myaddon` into the `addOns` list.

Refresh the Gradle project in your IDE.

## Update the Source Code

These are the minimum changes needed to get your new add-on working. 

### Message.properties

Edit the file `addOns/myaddon/src/main/resources/org/zaproxy/zap/extension/simpleexample/resources/Messages.properties` 
and change all of the instances of `simpleexample` in the keys to `myaddon` as well as changing the `Simple Example` strings to something like `My Add-on`. 

```
# An example ZAP extension which adds a top level menu item. 
#
# This file defines the default (English) variants of all of the internationalised messages

myaddon.api.action.helloWorld = Logs "hello world called" with debug level.
myaddon.desc = My Add-on
myaddon.error.nofile = File not found : {0}
myaddon.panel.msg = <html>This is My Add-on's status panel</html>
myaddon.panel.title = My Add-on
myaddon.popup.msg = Example right click menu invoked for:\n {0}
myaddon.popup.title = My Add-on: Example right click menu
myaddon.topmenu.tools.msg = My Add-on: Example message
myaddon.topmenu.tools.title = My Add-on: Example top menu
```

### ExtensionSimpleExample.java

Edit the file `addOns/myaddon/src/main/java/org/zaproxy/zap/extension/simpleexample/ExtensionSimpleExample.java` and change the NAME and PREFIX strings:

```
    // The name is public so that other extensions can access it
    public static final String NAME = "ExtensionMyAddOn";

    // The i18n prefix, by default the package name - defined in one place to make it easier
    // to copy and change this example
    protected static final String PREFIX = "myaddon";
```

## Deploy your Add-on

Deploy your add-on via the Gradle task:

On Linux and MacOS:
```bash
./gradlew addOns:myaddon:copyZapAddOn
```
On Windows this can be done from the command line using:
```bash
gradlew.bat addOns:myaddon:copyZapAddOn
```

## Restart ZAP

Your new add-on should now be available in ZAP. It will add a new menu item and a new tab in the bottom window - you will need to click on the green plus to see it.

![ZAP Screenshot with My Add-on](/img/docs/developer/myaddon.png)

## Next Steps

You should update the following files before you make too many other changes:

### Package Name

Change the package from `org/zaproxy/zap/extension/simpleexample` to something like `org/zaproxy/addon/myaddon/`
You can change the package name (and class names in the following section) by just editing the files but in general your IDE is likely to make this easier.

### Class Names

Change the class names to something more appropriate for your add-on. 

