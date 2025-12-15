---
# This page was generated from the add-on.
title: Scan Policy Dialog
type: userguide
weight: 1
---

# Scan Policy Dialog


This allows you to enable and disable the rules that are run when performing an [active scan](/docs/desktop/start/features/ascan/).  

The first screen allows you to define the default levels as well as the levels for all of the rules in a specific category.  



The category screens allow you to define the levels for every individual rule.  

### Locked

Locked policies do not allow the use of any other scan rules than the ones defined in their configuration, preventing the inadvertent use of other/new scan rules.

### Threshold

This controls how likely ZAP is to report potential vulnerabilities.  

* If you select Off then the scan rule won't run.
* If you select Low then more potential issues will be raised which may increase the number of false positives.
* If you select High then fewer potential issues will be raised which may mean that some real issues are missed (false negatives).

### Strength

This controls the number of attacks that ZAP will perform.  
If you select Low then fewer attacks will be used which will be quicker but may miss some issues.  
If you select High then more attacks will be used which may find more issues but will take longer.  
The Insane level should typically only be used for small parts of an application as it can result in a very large number of attacks being used, which can take a considerable length of time.


**Note:** Please be aware that use of the moniker "Insane" with regard to scan
strength is simply a name chosen to represent the most extreme strength of scanning, it is not a
commentary or reference to mental health or personal stability.

## Accessed via

|   |                                                                       |   |
|---|-----------------------------------------------------------------------|---|
|   | [Scan Policy Manager dialog](/docs/desktop/ui/dialogs/scanpolicymgr/) |   |

## See also

|   |                                      |                                       |
|---|--------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)     | for an overview of the user interface |
|   | [Dialogs](/docs/desktop/ui/dialogs/) | for details of the dialogs or popups  |
