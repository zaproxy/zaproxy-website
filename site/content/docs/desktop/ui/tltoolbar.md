---
# This page was generated from the add-on.
title: Top Level Toolbar
type: userguide
weight: 3
---

# Top Level Toolbar


This toolbar provides a set of controls for commonly used functionality.

## Mode pulldown

This allows you to change the current [mode](/docs/desktop/start/features/modes/).

## ![](/docs/desktop/images/16/171.png) New Session

This button is the same as the [File menu](/docs/desktop/ui/tlmenu/file/) 'New Session' menu item.

## ![](/docs/desktop/images/16/047.png) Open Session

This button is the same as the [File menu](/docs/desktop/ui/tlmenu/file/) 'Open Session' menu item.

## ![](/docs/desktop/images/16/096.png) Persist Session...

This button is the same as the [File menu](/docs/desktop/ui/tlmenu/file/) 'Persist Session...' menu item.

## :camera: Snapshot Session

This button is the same as the [File menu](/docs/desktop/ui/tlmenu/file/) 'Snapshot Session' menu item.

## ![](/docs/desktop/images/16/024.png) Session Properties...

This button is the same as the [File menu](/docs/desktop/ui/tlmenu/file/) 'Properties...' menu item.

## ![](/docs/desktop/images/16/041.png) Options...

This button is the same as the [Tools menu](/docs/desktop/ui/tlmenu/tools/) 'Options...' menu item.

## ![](/docs/desktop/images/fugue/ui-color-picker-switch.png) Dynamically switch the Look and Feel

This allows you to dynamically switch the Look and Feel which defines the appearance of the ZAP Desktop UI and includes support for 'Dark Modes'.

## ![](/docs/desktop/images/fugue/ui-tab-show.png) Show all tabs

This button reveals all of the hidden tabs.

## ![](/docs/desktop/images/fugue/ui-tab-hide.png) Hide unpinned tabs

This button hides all of the tabs that are 'unpinned'. Tabs can be pinned and unpinned via the small 'pin' icon that is shown when the tab is selected.

## ![](/docs/desktop/images/ui_tab_text.png) Show Tab Names and Icons

This button toggles the displaying of the tab names.

## ![](/docs/desktop/images/expand_sites.png) Expand Sites Tab

This changes the display so that the 'tree' window containing the Sites tab extends for the full length of the left hand side.  
This will reduce the amount of space available to the 'information' window.

## ![](/docs/desktop/images/expand_info.png) Expand Information Tabs

This changes the display so that the 'information' window extends for the full length of the bottom.  
This will reduce the amount of space available to the 'tree' window.

## ![](/docs/desktop/images/expand_full.png) Full Layout

This changes the display so that the selected tab takes up the full screen.  
This is useful when using ZAP on small screens.

## ![](/docs/desktop/images/layout_tabbed.png) Request and Response Tabs Side by Side

This changes the display so that the request and response tabs are side by side.  
This increases the information that can be displayed but means you cannot see both the request and response at the same time.

## ![](/docs/desktop/images/layout_tabbed_split.png) Request and Response Panels Side by Side in the Same Tab

This changes the display so that the request and response panels are shown side by side in the same tab.  
This decreases the information that can be displayed but means you can see both the request and response at the same time.

## ![](/docs/desktop/images/layout_vertical_split.png) Request Shown above Response

This changes the display so that the request panel is shown above the response panel.  
This decreases the information that can be displayed but means you can see both the request and response at the same time.

## ![](/docs/desktop/images/layout_horizontal_split.png) Request and Response Panels Side by Side

This changes the display so that the request panel is shown to the left of the response panel.  
This decreases the information that can be displayed but means you can see both the request and response at the same time.

## ![](/docs/desktop/images/16/152.png) / ![](/docs/desktop/images/16/151.png) Set / Unset Break on All Requests and Responses

This sets and unsets a 'global' [breakpoint](/docs/desktop/start/features/breakpoints/) that will trap and display the next request or response in the [Break tab](/docs/desktop/ui/tabs/break/).  
You can then change any part of the request or response that you want to and send it to the target application by pressing either of the 'Step' or 'Continue' buttons.  
Alternatively you can press the 'Drop' button to dispose of the request or response.  
You can switch between a single 'combined' break button and separates ones for requests and responses via the [Options breakpoints screen](/docs/desktop/ui/dialogs/options/breakpoints/)

## ![](/docs/desktop/images/16/105.png) / ![](/docs/desktop/images/16/105r.png) Set / Unset Break on All Requests

This sets and unsets a 'global' [breakpoint](/docs/desktop/start/features/breakpoints/) that will trap and display the next request in the [Break tab](/docs/desktop/ui/tabs/break/).  
You can then change any part of the request that you want to and send it to the target application by pressing either of the 'Step' or 'Continue' buttons.  
Alternatively you can press the 'Drop' button to dispose of the request.  
You can switch between a single 'combined' break button and separates ones for requests and responses via the [Options breakpoints screen](/docs/desktop/ui/dialogs/options/breakpoints/)

## ![](/docs/desktop/images/16/106.png) / ![](/docs/desktop/images/16/106r.png) Set / Unset break on all responses

This sets and unsets a 'global' [breakpoint](/docs/desktop/start/features/breakpoints/) that will trap and display the next response in the [Break tab](/docs/desktop/ui/tabs/break/).  
You can then change any part of the response that you want to and send it to your browser by pressing either of the 'Step' or 'Continue' buttons.  
Alternatively you can press the 'Drop' button to dispose of the request.  
You can switch between a single 'combined' break button and separates ones for requests and responses via the [Options breakpoints screen](/docs/desktop/ui/dialogs/options/breakpoints/)

## ![](/docs/desktop/images/16/143.png) Step

This allows the trapped request or response to continue to the application or your browser with any changes that you have made to it.  
The 'global' [breakpoint](/docs/desktop/start/features/breakpoints/) will remain set so that the next request or response will also be caught.  
This button is only enabled when a request or response is trapped.

## ![](/docs/desktop/images/16/131.png) Continue

The 'global' [breakpoint](/docs/desktop/start/features/breakpoints/) will be unset so that subsequent requests and responses will no longer be caught by ZAP unless you have set breakpoints on specific URLs.  
This button is only enabled when a request or response is trapped.

## ![](/docs/desktop/images/16/150.png) Drop

This drops the trapped request or response so that it is not passed on to the application or your browser.  
This button is only enabled when a request or response is trapped.

## ![](/docs/desktop/images/16/break_add.png) Add a custom HTTP breakpoint

This displays the [Add breakpoint](/docs/desktop/ui/dialogs/addbreak/) dialog which allows you to specify the criteria for a [breakpoint](/docs/desktop/start/features/breakpoints/).

## ![](/docs/desktop/images/fugue/equalizer.png) Scan Policy Manager...

Shows the [Scan Policy Manager](/docs/desktop/ui/dialogs/scanpolicymgr/) dialog which allows configuration of [scan policies](/docs/desktop/start/features/scanpolicy/).

## ![](/docs/desktop/images/fugue/block.png) Manage Add-ons

This shows the [Manage Add-ons](/docs/desktop/ui/dialogs/manageaddons/) dialog which allows you to discover, install and update add-ons from the online marketplace.  
It also allows you to uninstall add-ons.

## ![](/docs/desktop/images/fugue/forcedUserOff.png) / ![](/docs/desktop/images/fugue/forcedUserOn.png) Forced User Mode On / Off

This switches forced user mode on and off.  
The button is only enabled when you have defined a forced user for at least one [context](/docs/desktop/start/features/contexts/), which can be done via the [Session Contexts](/docs/desktop/ui/dialogs/session/contexts/) dialog.


Note that [add-ons](/docs/desktop/start/features/addons/) can add additional buttons.

## See also

[The user interface overview](/docs/desktop/ui/)  

|   |                                         |                                       |
|---|-----------------------------------------|---------------------------------------|
|   | [Getting Started](/docs/desktop/start/) | for details of how to start using ZAP |
|   | [Dialogs](/docs/desktop/ui/dialogs/)    | for details of the dialogs or popups  |
|   | [Introduction](/docs/desktop/)          | the introduction to ZAP               |
