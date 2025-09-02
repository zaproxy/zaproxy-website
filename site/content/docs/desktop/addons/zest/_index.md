---
# This page was generated from the add-on.
title: Zest
type: userguide
weight: 1
cascade:
  addon:
    id: zest
    version: 48.9.0
---

# Zest


Zest is an experimental specialized scripting language (also known as a domain-specific language)
originally developed by the Mozilla security team and is intended to be used in web oriented security tools.


It is included by default with ZAP.  


## Engine Name

The engine is named `Mozilla Zest`, which should be used when manually/programmatically configuring ZAP.

## Creating Zest scripts

There are a variety of ways to create Zest scripts:

### Record a new Zest script Button

* Press the 'Record a new Zest script' button on the main toolbar
* Type in a suitable name for your script in the 'Add a Zest Script' dialog
* Select the prefix you want to record requests for, or leave blank to record all requests
* Press the 'Save' button
* The 'Record a new Zest script' button will stay pressed, change to 'Recording a new Zest script' and show a red icon.

The new Zest script will be shown in the Scripts tab with a red 'recording' icon.  
Any requests that you make underneath the specified prefix will be added to the script.  
Press the 'Recording a new Zest script' again to stop recording the requests.  
Note that you can only record 'Stand Alone' Zest scripts in this way. If you want to create other types of Zest script you must use another mechanism.   

You can also right click any Stand Alone Zest script and use the 'Start recording' and 'Stop recording' buttons.   

There are two primary methods for script recording: server-side and client-side. For client-side recording, we leverage the ZAP browser extension and a dedicated client add-on.   
This combination allows us to efficiently capture and save user interactions in Zest scripts.

### New Script Button

* Navigate to the Scripts tree tab
* Press the 'New Script...' button
* Type in a suitable name for your script in the 'New Script' dialog
* Select the script type (see the Scripts add-on help page for more details)
* Select the Zest script engine
* Select one of the templates (if relevant)
* Press the 'Save' button

Any type of Zest script can be created this way.

### Right clicking a Zest template

* Navigate to the Scripts tree tab
* Expand the 'Templates' node and find a template you want to use
* Right click on the template and select 'New Script...'
* Press the 'Save' button

Any type of Zest script can be created this way.

### Right clicking requests

* Navigate to any tab that shows requests, such as the History tab
* Select one or more requests
* Right click on them
* Select the 'Add to Zest Script' menu which allows you to select an existing Stand Alone script or create a new one

Note that you can only add request to 'Stand Alone' Zest scripts.

### Plug-n-Hack

If you are using a recent version of Firefox then you can create Zest scripts from within your browser.  

* Press the 'Plug-n-Hack' button on the ZAP 'Quick Start' tab
* Install the Plug-n-Hack Firefox Add-on and accept all of the dialogs
* Press 'Shift F2' in Firefox to access the Developer Toolbar
* Type 'zap record on global' to start recording a new Zest script
* Any requests you make through ZAP will be added to the script
* Type 'zap record off global' to stop recording the script

Note that you can only record 'Stand Alone' Zest scripts in this way. If you want to create other types of Zest script you must use another mechanism.

## Editing Zest scripts

Zest scripts are edited graphically in the Scripts tree tab.  
Each statement is a node in the tree - double click nodes to edit the statement properties.  
You can add, move and remove statements via right clicking the Zest nodes.  
You can also add requests to 'Stand alone' Zest scripts by right clicking the requests in any of the other tabs.  
There are also some right click options available when you select text in the Request or Response tabs.  

Zest includes a set of 'built in' variables as well as allowing you to declare your own.  
A right click menu is provided (where relevant) in the edit dialogs to allow you to paste in any of the available variable names.  

## Authentication Scripts

Authentication scripts can use a custom ZAP variable, called `TOTP`, to send a value to an input field with a TOTP code generated from the user's credentials TOTP data.

## External links

|   |                                    |                                                               |
|---|------------------------------------|---------------------------------------------------------------|
|   | <https://github.com/zaproxy/zest/> | The Zest GitHub repository, including details of the language |
