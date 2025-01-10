---
# This page was generated from the add-on.
title: The Edit menu
type: userguide
---

# The Edit menu

This menu handles finding strings in specific tabs, searching for strings across all requests and responses, changing ZAP's mode, and managing forced user mode.

### ZAP Mode

This allows you to change the current [mode](/docs/desktop/start/features/modes/).

### Find...

This opens the [Find dialog](/docs/desktop/ui/dialogs/find/) which allows you to find a string in the currently selected window.  

### Search...

This sub-menu facilitates access to the following items:

#### Search...

This selects the [Search tab](/docs/desktop/ui/tabs/search/) which allows you to search for regular expressions in all URLs, requests, and responses.

#### Next Result

This selects the next occurrence of the last string searched for.  
The relevant message will be selected in the Search tab and the string will be displayed and highlighted in the [Request](/docs/desktop/ui/tabs/request/) or [Response](/docs/desktop/ui/tabs/response/) tab as appropriate.

#### Previous Result

This selects the previous occurrence of the last string searched for.  
The relevant message will be selected in the Search tab and the string will be displayed and highlighted in the [Request](/docs/desktop/ui/tabs/request/) or [Response](/docs/desktop/ui/tabs/response/) tab as appropriate.

### Enable / Disable Forced User Mode

This switches [Forced User Mode](/docs/desktop/start/features/authentication/#forceduser) on and off.  
The menu item is only enabled when you have defined a forced user for at least one [context](/docs/desktop/start/features/contexts/), which can be done via the [Session Contexts](/docs/desktop/ui/dialogs/session/contexts/) dialog.


Note that [add-ons](/docs/desktop/start/features/addons/) can add additional menu items.

## See also

|   |                                                |                                       |
|---|------------------------------------------------|---------------------------------------|
|   | [The top level menu](/docs/desktop/ui/tlmenu/) |                                       |
|   | [UI Overview](/docs/desktop/ui/)               | for an overview of the user interface |
