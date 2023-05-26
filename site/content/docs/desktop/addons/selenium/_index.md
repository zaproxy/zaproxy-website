---
# This page was generated from the add-on.
title: Selenium
type: userguide
weight: 1
cascade:
  addon:
    id: selenium
    version: 15.12.1
---

# Selenium

The Selenium add-on provides WebDrivers, for other add-ons, to invoke and remotely
control web browsers. It's also bundled the HtmlUnit web browser, an headless Java based
web browser.

It adds a 'Selenium' script type - these scripts are invoked whenever selenium launches a browser,
for example for the Ajax Spider or for manual browsing.

The add-on also adds a right click option to ZAP panels that list URLs (such at the History and Sites tree)
which allows you to open the selected URL in any of the supported browsers. The Selenium scripts have access to the
launched browser and can interact with it, for example, run JavaScript scripts, access URLs, fill forms, click buttons...

**Note:** The Selenium scripts are executed synchronously for the AJAX Spider, to prevent interferences
with the crawler later, it's up to the scripts to access the required URLs.

## Supported Browsers

The following web browsers are supported:

|       Name       |        ID        |                                                                                                                                                                                                          Requirements/Notes                                                                                                                                                                                                           |
|------------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Chrome           | chrome           | The following versions are known to work: 59 and 60 (older versions might work too). Requires ChromeDriver, if not on the system's PATH, it can be set in the options. For more information on ChromeDriver and how to obtain it refer to the [ChromeDriver website](https://sites.google.com/a/chromium.org/chromedriver/).                                                                                                          |
| Chrome Headless  | chrome-headless  | Starts Chrome without GUI.                                                                                                                                                                                                                                                                                                                                                                                                            |
| Firefox          | firefox          | The following versions are known to work: 45 (ESR), 46, 47.0.1, 54, and 55 (older versions might work too). Some versions are known to not work, for example, 47.0. Newer versions (≥ 48) require geckodriver, it can be set in the options. For more information on geckodriver and how to obtain it refer to the [geckodriver website](https://github.com/mozilla/geckodriver) (see footer note for caveat when using geckodriver). |
| Firefox Headless | firefox-headless | Starts Firefox without GUI.                                                                                                                                                                                                                                                                                                                                                                                                           |
| HtmlUnit         | htmlunit         | Bundled browser, does not have any requirement.                                                                                                                                                                                                                                                                                                                                                                                       |
| Opera            | opera            | Temporarily not working.                                                                                                                                                                                                                                                                                                                                                                                                              |
| PhantomJS        | phantomjs        | The following version is known to work: 2.1.1 (older versions might work too). Requires PhantomJS binary, if not on the system's PATH, it can be set in the options. For more information on PhantomJS and how to obtain it refer to the [PhantomJS website](http://phantomjs.org/) (see footer note for caveat when using PhantomJS).                                                                                                |
| Safari           | safari           |                                                                                                                                                                                                                                                                                                                                                                                                                                       |

To use Firefox, Chrome, Opera, PhantomJS and Safari, you must
have them installed in your system. The ID of the browser can be used to choose the
browser when configuring ZAP through the command line or using the ZAP API (for example,
to set the AJAX Spider to use one or other browser).

Some of the requirements (e.g. WebDrivers) of the browsers can be configured in the [Options Selenium screen](/docs/desktop/addons/selenium/options/).

## Bundled WebDrivers

ZAP provides add-ons with the WebDrivers, when those add-ons are installed ZAP will attempt to use those bundled WebDrivers by default. Some OSs might not have a WebDriver for some of the browsers, in those cases ZAP will inform, in the options panel, that there's no bundled WebDriver available. The bundled WebDrivers can also be (re)set with the 'Bundled' button (for example, if another WebDriver was manually set). Not all browser versions are supported with the bundled WebDrivers, it's recommended that newer/latest versions of the browsers be used whenever possible.

**Note:** ZAP add-ons can add additional browsers.

**Firefox/geckodriver Note:** There's an issue ([Bug 1103196](https://bugzilla.mozilla.org/show_bug.cgi?id=1103196)) that
prevents HTTPS sites from being used in versions ≥ 48 and \< 52.

**PhantomJS Note:** There's an issue ([Issue #11342](https://github.com/ariya/phantomjs/issues/11342)) that prevents
sites at localhost, 127.0.0.1 and ::1 from being proxied through ZAP. Until a fix is
available is advised to not use it in those cases. Some add-ons might choose to show
warning message when that happens. As workaround one could define, in the `hosts`
file, a domain name mapping to the local address and use that domain name instead.

## See also

|   |                                                                   |                                         |
|---|-------------------------------------------------------------------|-----------------------------------------|
|   | [Options Selenium screen](/docs/desktop/addons/selenium/options/) | for an overview of the Selenium Options |
|   | [API](/docs/desktop/addons/selenium/api/)                         | for an overview of the Selenium API     |
