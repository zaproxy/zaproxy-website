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
* Edge [ZAP by Checkmarx Browser Recorder](https://microsoftedge.microsoft.com/addons/detail/zap-by-checkmarx-recorder/okgkpllibfpmngdhhponlojjgeabfeee)

The Browser Recorder extension only allows you to record a Zest script and will not attempt to communicate with ZAP.


The ZAP Browser extensions all include detailed help via the popup panel.

## Recording from ZAP

The easiest way to record a client side script from ZAP is to use the "Record Zest Script" dialog.  
You will need to change the "Record Type" to "Client (browser) side script" and supply a valid URL.  
ZAP will launch your chosen browser and record the Zest statements in the Script Console as you perform actions in the browser.

## Recorder Advice and Guidance

If you have any problems recording or replaying client side scripts then start by making sure that you have the latest version of the ZAP Recorder (if you have installed that) or the Client Side Integration (if you are launching the recording from ZAP).


If you are going to use the recorded script for authentication then you need to make sure that the browser
will be in the same state as when it is launched from ZAP.


If the login URL is static then you can open that page before starting to record.  

If the URL is dynamic then you should enter a suitable static URL in the Recorder Dialog. This URL will then
be recorded in the script and the browser will handle the dynamic redirects as required.


In all cases you should start to record before dismissing any dialogs, such as cookie warnings and other disclaimers,
as ZAP will need to do the same things.


It is often better to use private/incognito mode when recording so that the browser will not have any existing
application state.


The 'buttons' on some modern web apps can be complicated HTML components that are sometimes hard to click on using automation.
If your forms can be submitted using the RETURN key then that is often a better option to use when recording.


Try recording the same script twice, making sure you perform exactly the same actions.
Then diff the scripts - if they are significantly different then its possible that ZAP is using
values to reference HTML elements that are not consistent.
If that is the case then you may need to manually edit the script in order to use values which are consistent.

## Recorder Diagnostics

If you still have problems recording or replaying client side scripts then please report them to the ZAP team via a [new issue](https://github.com/zaproxy/zaproxy/issues/new?template=bug-report.yml).


We will need to know:

* The ZAP and add-on versions - Help / Support Info...
* The browser extension version
* The failing Zest statement, obfuscating anything sensitive
* A detailed description of what you are doing, and what goes wrong
* Whether the problem is consistent
* Any relevant error messages
* The HTML for the element that is causing problems:
    * In your browser, right click the element and "Inspect"
    * In the Dev Tools (Chrome, Edge) / Inspector (Firefox) right click the element
    * Select "Copy" -\> "Copy outerHTML" / "Outer HTML"
