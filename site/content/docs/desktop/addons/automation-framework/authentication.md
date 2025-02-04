---
# This page was generated from the add-on.
title: Automation Framework - authentication
type: userguide
weight: 4
---

# Automation Framework - authentication

The Automation Framework supports all of the authentication mechanisms supported by ZAP.

## Environmental Variables

ZAP supports a set of Authentication Header Environmental Variables - these will be applied by ZAP if they are defined however ZAP is run, including via the Automation Framework.


These environmental variables must be defined at the system level - if they are defined in the [environment](/docs/desktop/addons/automation-framework/environment/)
env section then they will be ignored.

## Context Based Authentication

The Automation Framework supports the following methods of authentication supported by ZAP:

* Manual (use this if you are using the Authentication Header Environmental Variable)
* HTTP / NTLM
* Form-based
* JSON-based
* Script

The Automation Framework supports the following methods of authentication provided by the Authentication Helper add-on:


* Auto-Detect Authentication
* Browser-based Authentication
* Client Script Authentication

## Authentication Statistics

ZAP maintains authentication statistics - search for 'auth' in the key field on the [ZAP Internal Statistics](/docs/internal-statistics/) website page. These are ideal to use in [tests](/docs/desktop/addons/automation-framework/tests/) to make sure the authentication is working as you expect.


The authentication statistics are maintained for all supported authentication methods (including 'manual')
but only if you have configured all of the authentication elements correctly.  

You are strongly advised to test this via the ZAP desktop GUI.

## Configuring Authentication

The recommended way to configure authentication is to do so via the ZAP desktop GUI - this gives you complete control over all aspects and allows you to test it in place.  
Then you can create a new Automation Framework plan using the context(s) you have tested - the authentication elements will be correctly initialised for all aspects supported.


It is worth noting that the authentication elements cannot be edited via the Automation Framework [GUI](/docs/desktop/addons/automation-framework/gui/),
but they will not get lost if you use the GUI as long as you do not use it to delete the contexts.


The GUI will be updated to support all of the authentication elements in due course.
