---
title: "Development Rules and Guidelines"
tags: 
- guide
type: page
date: "2021-01-20"
---

This may look like a long list of rules but hopefully many of them are just good development practice.

If you are just getting started with ZAP development then do not worry to much about them, 
but if you plan to make bigger contributions then you should check them before making too many changes that you might need to rework.

### General Guidelines

* Ease of use is key. New functionality is great too, but it should not make ZAP more complicated to use.
* Only check in a consistent set of changes. They dont have to fully implement new functionality, but they must not break existing functionality.
* All significant new code should be under the [org.zaproxy.zap](https://github.com/zaproxy/zaproxy/tree/develop/zap/src/main/java/org/zaproxy/zap) package.
* All code under the [org.zaproxy.zap](https://github.com/zaproxy/zaproxy/tree/develop/zap/src/main/java/org/zaproxy/zap) package should compile without any warnings.
* ZAP and ZAP add-ons should not depend on an internet connection to work, so all resources required should be bundled with ZAP or the add-on
* Add-ons should not make unsolicited external requests except for the purposes of checking for updates to resources, and even then only if explicitly approved by the user
* Please create [Issues](https://github.com/zaproxy/zaproxy/issues) for all significant changes and post messages to the [development group](https://groups.google.com/group/zaproxy-develop) so that everyone knows whats going on
* All functionality should be fully documented in the [help pages](https://github.com/zaproxy/zap-core-help/tree/main/addOns/help/). However the documentation can be added after the code has been checked in as long as this is done before the next release. Note that the wiki help pages must not be changed manually - these reflect the last release, and are generated from the help pages using a script.

### Licensing Guidelines

* Any changes to the Paros classes (under the [org.parosproxy.paros](https://github.com/zaproxy/zaproxy/tree/develop/zap/src/main/java/org/parosproxy/paros) packages) must be commented at the beginning of the class (This is a requirement of the Paros licence), and the comments should start with `// ZAP: YYYY/MM/DD`
* Make sure that any 3rd party code and libraries you introduce is licensed in a compatible way with the Apache v2 license. GPL code and libraries _can_ be used but only with the explicit consent of the original authors. Ask on the [Dev group](https://groups.google.com/group/zaproxy-develop) if you are unsure.
* If you copy code (having checked the license as above) you should always acknowledge the original author and if possible include a link to the original version

### UI Guidelines

* All strings that are displayed on the UI must be internationalized.
* The UI should be consistent, so all controls should look similar and act in the same way. We can change the UI look and feel, but see the above point.
* Any significant changes (as opposed to additions) to the UI should initially be checked in as a non default option. Once everyone else has had a chance to try the changes out we can come to a collective decision as to which option should be the new default (old options can also be completely dropped).
* There should be a clean split between the functionality and the UI. OK, so thats not true of a lot of the existing code, but new code should have that split, and hopefully over time we'll be able to update all of the old code as well. This will make it much easier to create regression tests and make more of the functionality accessible in headless mode.
* Extensions should not expose graphical elements, such as Panels. Instead public methods should provide full access to as much of the functionality the extension provides via non graphical classes.
* Use the `labelFor` attribute on `JLabel` for improved usability. Refer to the [Java documentation](https://docs.oracle.com/en/java/javase/11/docs/api/java.desktop/javax/swing/JLabel.html#setLabelFor(java.awt.Component)) for more information.

### Code Guidelines

* If it is possible avoid introducing [un/boxings](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html) in new code.
* The @Override annotation should precede all the method declarations that are intended to implement or override another method declaration.
* Check in code that is cleaner than you checked out, aka ['Clean Code'](http://www.cleancoders.com/)
* Do not add "(non-Javadoc)" comments to overriding methods (the default comment automatically added when overriding a method).
* Scan rule classes should be named with the suffix `ScanRule` for consistency. There is no need for a prefix such as `Test` or `Scan`, and acronyms within class names should follow camelCase (not be full caps).

### Unit Test Specific Guidelines

These have been moved to [Verifying Your Changes](../verifying-your-changes).

### Style Guidelines

The following guidelines apply to ZAP's text elements as represented in English (en-GB, en-US, and en-CA).

##### ZAP's Name

The name `ZAP` should be used in the majority of cases. If the article or context is more formal then `Zed Attack Proxy`. In general `Zaproxy` shouldn't be used, it has been used as an identifier various places when ZAP (zap) wasn't available or applicable (too short, etc). If `Zaproxy` must be used please be aware that it should be said (or read) as "Zed-Ay-proxy".

#### Text: Titles, Menu Items, and Options
Titles, menu items, and options text should be represented using Title Capitalization as defined by the 'Chicago Manual of Style'. For quick reference you can use this online tool: https://capitalizemytitle.com/#Chicago (make sure you select the "Chicago" tab). The only exception here would be for strings that form full sentences (ending with proper punctuation).

#### Usage of "and/or"

The dev team would prefer that "and/or" be avoided in ZAP's UI and help content. In the majority of English cases simply using "or" is just fine.
