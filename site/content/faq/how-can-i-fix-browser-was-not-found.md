---
title: "How can I fix 'browser was not found'?"
type: faq
category: Howtos
weight: 4
aliases:
  - no-browser/
---

If you want to manually explore your target app then the easiest way is to launch your favourite browser
from ZAP. ZAP will automatically configure it to proxy via ZAP and to ignore the certificate warnings
you would otherwise get from the ZAP root CA certificate.

But what can you do if ZAP fails to launch your browser?

### Check for Updates

In ZAP:
- The first thing to do is to 'Check for Updates' in ZAP and install any add-ons which are out of date,
in particular, the webdriver and [Selenium](/docs/desktop/addons/selenium/) ones.

In your local browser:
- Browsers are updated very frequently, and the updates often require corresponding changes to the webdrivers.
If you don’t have the right webdrivers then ZAP will not be able to launch the browsers. **ZAP ties to your local browser**, so even though it launches its own instance of web browsers, check you have the latest version installed locally.

If you are on Windows then you may also need to restart ZAP. 
Windows will refuse to allow ZAP to copy the webdrivers to the correct location if they are currently being used.

To make sure the webdrivers are correctly updated on Windows we recommend:

1. In ZAP go to `Help` > `Support Info ...`
1. Click on the `Open ZAP Home` button
1. Close ZAP (the Explorer directory should stay open)
1. Delete the whole `webdriver` directory
1. Restart ZAP

ZAP will recreate the webdriver directory with the right webdrivers in it.

### Make sure your browser has finished updating

Browsers can act "strangely" if they are in the process of updating.
Close all instances of the relevant browser, then open it outside of ZAP and check if it is updating.
If it is then wait until it has finished, close the instance and try again.

### Make sure ZAP can find your browser

If that does not solve your problem then check that your browser is on your path - 
if it is not then ZAP may not be able to find it.

You can configure the locations of both Chrome and Firefox via the [Selenium Options](/docs/desktop/addons/selenium/options/) screen.

On macOS you may need to specify the full path to the executable, e.g. `/Applications/Firefox.app/Contents/MacOS/firefox`

### Is Firefox installed using Flatpack or Snap?

There is a known problem (which is outside of our control) related to Firefox installed via Flatpack or Snap.

For a workaround see https://github.com/mozilla/geckodriver/releases/tag/v0.32.0

### Check the zap.log file

If that does not help then [check the zap.log file](/faq/somethings-not-working-what-should-i-do/#check-the-log-file) 
for any relevant errors.

One possibility is that we have updated the webdrivers to the latest versions, but you are (for some reason) 
using an older version of the browser. This should be apparent from the error messages.
If this is the case then either update your browser or download the compatible webdriver and configure ZAP to use it -
you can do that via the [Selenium Options](/docs/desktop/addons/selenium/options/) screen as well.

### Ask on the User Group

If all fails then ask on the [ZAP User Group](https://groups.google.com/group/zaproxy-users), but make sure you mention you have checked this FAQ otherwise
you will just be redirected back to here!
