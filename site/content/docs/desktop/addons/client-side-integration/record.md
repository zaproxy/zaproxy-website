---
# This page was generated from the add-on.
title: Client Side Integration
type: userguide
weight: 2
---

# Recording Client Side Scripts

The ZAP Browser extensions allow you to record all of the actions you take in the browser as a Zest script. They can be used to record things like authentication scripts or other complex interactions. Zest scripts can be replayed in ZAP, whether in the desktop or in automation.


The "full" ZAP Browser Extension is automatically added to Firefox and Chrome browsers launched from ZAP.


You can also manually install these add-on, or the cut down "Browser Recorder" extensions:

* Firefox [ZAP by Checkmarx Browser Extension](https://addons.mozilla.org/en-GB/firefox/addon/zap-browser-extension)
* Firefox [ZAP by Checkmarx Browser Recorder](https://addons.mozilla.org/en-GB/firefox/addon/zap-by-checkmarx-recorder/)
* Chrome [ZAP by Checkmarx Browser Extension](https://chromewebstore.google.com/detail/zap-by-checkmarx-browser/cgkggmillbmmpokepnicllalaohphffo)
* Chrome [ZAP by Checkmarx Browser Recorder](https://chromewebstore.google.com/detail/zap-by-checkmarx-recorder/belmenkmkfloppjbbgibipmgcmnkaiki)

The Browser Recorder extension only allows you to record a Zest script and will not attempt to communicate with ZAP.


The ZAP Browser extensions all include detailed help via the popup panel.

## Recording from ZAP

The easiest way to record a client side script from ZAP is to use the "Record Zest Script" dialog.  
You will need to change the "Record Type" to "Client (browser) side script" and supply a valid URL.  
ZAP will launch your chosen browser and record the Zest statements in the Script Console as you perform actions in the browser.

## Recorder Advice and Guidance

If you are going to use the recorded script for authentication then you need to make sure that the browser will be in the same state as when it is launched from ZAP.


If the login URL is static then you can open that page before starting to record.  

If the URL is dynamic then you should enter a suitable static URL in the Recorder Dialog. This URL will then
be recorded in the script and the browser will handle the dynamic redirects as required.


In all cases you should start to record before dismissing any dialogs, such as cookie warnings and other disclaimers,
as ZAP will need to do the same things.


It is often better to use private/incognito mode when recording so that the browser will not have any existing
application state.


The 'buttons' on some modern web apps can be complicated HTML components that are sometimes hard to click on using automation.
If your forms can be submitted using the RETURN key then that is often a better option to use when recording.
