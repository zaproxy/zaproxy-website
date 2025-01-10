---
# This page was generated from the add-on.
title: Script Console Tab
type: userguide
weight: 2
---

# Script Console Tab


The Scripts Console allows you to write scripts which run within ZAP.  

It is made up of:

* A toolbar
* A text area (top) in which you can write your scripts
* An output text area (bottom) for debug and error messages, with "print" statements.

To create a new script or to load or switch scripts see the [The Scripts 'tree' tab](/docs/desktop/addons/script-console/tree/).


Right-click in the script area for display and editing options.


In ZAP versions after 2.7.0 if the script currently displayed in the console is changed by another program then you
will be given the option to keep the script in the console or replace it with the changed script.  

If a script is changed by another program when it is not being displayed and has not previously been changed in the script console
then that script will be loaded and the new contents will be used when the script is run.


Templates can be viewed in the console but cannot be edited.  


## Toolbar Buttons

### Save Script

This button allows you to save the script currently displayed in the console to a file.  
The shortcut \`ctrl+S\` (or \`cmd+S\` on macOS) may also be used for this purpose.  

### Enable / Disable Script

This button may be used to enable or disable the script currently displayed in the console.  

### Run and Stop Buttons

You can run 'Stand Alone' scripts using the 'Run' button on the tab toolbar.  
All other types of scripts will be run when enabled or if explicitly invoked.  

### Auto-complete

The console supports a limited form of auto-complete, controlled by a button on the toolbar.  
When enabled a popup will be shown when you type the name of one of the defined parameters followed by a dot - this will show you all of the methods available for you to call. Selecting one of them will insert the method and parameters into your script. If you type another dot immediately after the method call then you will be shown another prompt for the methods available to the return type, if any. You will be able to keep expanding the types returned until you start typing something else.

## See also

|   |                                                                     |   |
|---|---------------------------------------------------------------------|---|
|   | [The Scripts add-on](/docs/desktop/addons/script-console/)          |   |
|   | [The Scripts 'tree' tab](/docs/desktop/addons/script-console/tree/) |   |
