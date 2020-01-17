---
# This page was generated from the add-on.
title: Plug-n-Hack Clients tab
type: userguide
weight: 1
---

# Plug-n-Hack Clients tab

Plug-n-Hack allows you to monitor client (browser) events in order to help test HTML5 applications.  
In order to support as wide a range of modern browsers as possible this is implemented by injecting javascript
into the response returned to the browser.  
As it means changing the response this functionality has to be manually enabled.

To receive client events:

* Access the pages you want to monitor while proxying through ZAP
* Right click in the relevant node(s) in the Sites tree and select 'Monitor clients -\> Include subtree'
* Force your browser to reload those pages
* Client events (such as postMessage, click, mouseover, etc.) will then be listed in this tab - select them to see the full details.


The injected javascript sends a heartbeat to ZAP, so ZAP can display all of the 'active' clients in this tab.  
In this case 'active' clients are pages that are currently open in a browser tab.  
You can edit and resend any event via a right click menu item as long as the original client is active.  

You can also intercept and change postMessages on the fly.  
Client messages are intercepted if the ‘break on all requests’ button is selected on the top level toolbar.  
You can also set custom client breakpoints via a button on the Clients tab.  

You can fuzz postMessages in the same way as any other message - highlight the string you want to fuzz in the Request tab, right click and select “Fuzz”.  
This option will only be available if the relevant browser still has that page open,as PnH sends the payloads to the browser.  
Standard ‘XSS’ payloads can be used to detect DOM XSS vulnerabilities, but you will need to manually monitor the UI to see if any of them are successful.  

PnH also adds a Custom fuzzing file called “PlugnHack DOM XSS Oracle”.  
This file is based on the OWASP XSS cheatsheet and invokes an ‘xss’ JavaScript method that is injected into the page.   
This method invokes the ZAP API which in turn flags the relevant attack in the UI - these are confirmed DOM XSS vulnerabilities,
although (as always) you should check that they can really be exploited in the application you are testing without a tool like ZAP.  
