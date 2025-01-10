---
# This page was generated from the add-on.
title: Modes
type: userguide
weight: 16
---

# Modes


ZAP has a 'mode' which can be:

* Safe - no potentially dangerous operations permitted.
* Protected - you can only perform (potentially) dangerous actions on URLs in the [scope](/docs/desktop/start/features/scope/).
* Standard - does not restrict anything.
* ATTACK - new nodes that are in [scope](/docs/desktop/start/features/scope/) are [actively scanned](/docs/desktop/start/features/ascan/) as soon as they are discovered.

It is recommended that you use the Protected mode to ensure that you only attack sites that you mean to.  

The mode can be changed via the [toolbar](/docs/desktop/ui/tltoolbar/) (or the ZAP API) and is persisted between sessions.  

Examples of the things that will not be possible in either Safe mode or in Protected mode when not acting on URLs in the Scope:

* Spidering
* Active Scanning
* Fuzzing
* Force Browsing
* Breaking (intercepting)
* Resending requests

You can define the [Scan Policy](/docs/desktop/start/features/scanpolicy/) to be used for the Attack mode the [Options Active Scan screen](/docs/desktop/ui/dialogs/options/ascan/).  

## See also

|   |                                           |                                       |
|---|-------------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)          | for an overview of the user interface |
|   | [Features](/docs/desktop/start/features/) | provided by ZAP                       |
