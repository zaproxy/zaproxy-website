---
# This page was generated from the add-on.
title: Selenium
type: userguide
weight: 1
cascade:
  addon:
    id: selenium
    version: 15.40.0
---

# Selenium

The Selenium add-on provides WebDrivers, for other add-ons, to invoke and remotely
control web browsers. It's also bundled the HtmlUnit web browser, an headless Java based
web browser.

It adds a 'Selenium' script type - these scripts are invoked whenever selenium launches a browser,
for example for the Ajax Spider or for manual browsing.

The add-on also adds a right click option to ZAP panels that list URLs (such as the History and Sites tree)
which allows you to open the selected URL in any of the supported browsers. The Selenium scripts have access to the
launched browser and can interact with it, for example, run JavaScript scripts, access URLs, fill forms, click buttons...

**Note:** The Selenium scripts are executed synchronously for the AJAX Spider, to prevent interferences
with the crawler later, it's up to the scripts to access the required URLs.

## Supported Browsers

The following web browsers are supported:

|       Name       |        ID        |                                                                                                                Requirements/Notes                                                                                                                 |
|------------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Chrome           | chrome           | Requires ChromeDriver, if not on the system's PATH, it can be set in the options. For more information on ChromeDriver and how to obtain it refer to the [ChromeDriver website](https://sites.google.com/a/chromium.org/chromedriver/).           |
| Chrome Headless  | chrome-headless  | Starts Chrome without GUI.                                                                                                                                                                                                                        |
| Edge             | edge             | Requires EdgeDriver, if not on the system's PATH, it can be set in the options. For more information on EdgeDriver and how to obtain it refer to the [EdgeDriver website](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/). |
| Edge Headless    | edge-headless    | Starts Edge without GUI.                                                                                                                                                                                                                          |
| Firefox          | firefox          | Requires geckodriver, it can be set in the options. For more information on geckodriver and how to obtain it refer to the [geckodriver website](https://github.com/mozilla/geckodriver),                                                          |
| Firefox Headless | firefox-headless | Starts Firefox without GUI.                                                                                                                                                                                                                       |
| HtmlUnit         | htmlunit         | Bundled browser, does not have any requirement.                                                                                                                                                                                                   |
| Safari           | safari           |                                                                                                                                                                                                                                                   |

To use Firefox, Chrome, Edge, and Safari, you must
have them installed in your system. The ID of the browser can be used to choose the
browser when configuring ZAP through the command line or using the ZAP API (for example,
to set the AJAX Spider to use one or other browser).


Some of the requirements (e.g. WebDrivers) of the browsers can be configured in the [Options Selenium screen](/docs/desktop/addons/selenium/options/).

## Bundled WebDrivers

ZAP provides add-ons with the WebDrivers, when those add-ons are installed ZAP will attempt to use those bundled WebDrivers by default. Some OSs might not have a WebDriver for some of the browsers, in those cases ZAP will inform, in the options panel, that there's no bundled WebDriver available. The bundled WebDrivers can also be (re)set with the 'Bundled' button (for example, if another WebDriver was manually set). Not all browser versions are supported with the bundled WebDrivers, it's recommended that newer/latest versions of the browsers be used whenever possible.


**Note:** ZAP add-ons can add additional browsers.

## See also

|   |                                                                   |                                         |
|---|-------------------------------------------------------------------|-----------------------------------------|
|   | [Options Selenium screen](/docs/desktop/addons/selenium/options/) | for an overview of the Selenium Options |
|   | [API](/docs/desktop/addons/selenium/api/)                         | for an overview of the Selenium API     |
