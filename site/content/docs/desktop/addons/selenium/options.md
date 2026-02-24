---
# This page was generated from the add-on.
title: Options Selenium screen
type: userguide
weight: 1
---

# Options Selenium screen

This screen allows you to manage the browsers which can be launched from ZAP.   

## Configuration Options

### Browsers

This section allows you to configure all browsers, including the built-in browsers (Chrome, Edge, Firefox) and any custom browsers you add. The table displays the following information for each browser:

* **Name:** The browser name
* **Driver:** The path to the WebDriver executable (e.g., ChromeDriver, geckodriver)
* **Binary:** The path to the browser binary executable (optional, for using a specific version)
* **Type:** The browser type - either Chromium-based or Firefox-based

#### Built-in Browsers

The built-in browsers (Chrome, Edge, and Firefox) are automatically included in the table and cannot be removed. You can modify their configuration (driver path, binary path, and arguments) by selecting a browser and clicking the `Modify...` button. If you attempt to remove a built-in browser, a warning message will be displayed.

#### Custom Browsers

You can add your own custom browsers by clicking the `Add...` button. Custom browsers allow you to:

* Specify a custom name for the browser
* Set the WebDriver path (e.g., for a custom Chromium or Firefox build)
* Set the browser binary path
* Choose the browser type (Chromium or Firefox)
* Add custom browser arguments

If you leave the driver or binary path empty for a custom browser, the default WebDriver and binary paths configured for the corresponding built-in browser (Chrome/Edge for Chromium type, Firefox for Firefox type) will be used. Custom browsers can be modified or removed using the `Modify...` and `Remove` buttons. Custom browsers are saved in the configuration and will persist across ZAP restarts.


Custom browsers can be accessed programmatically using the keys:

* `custom.<name>`
* `custom.<name>-headless`


**Note:** Custom browsers automatically support headless mode for automation purposes.
When using automation tools that support headless browsers, you will see two options for each custom browser:
one with the browser name and one with the browser name followed by " Headless".

#### Browser Arguments

Each browser (built-in or custom) can have additional (CLI) arguments specified through the `Arguments...` button in the modify dialog.


**Note:** Adding invalid arguments might cause the browser to fail to start. ZAP already adds some arguments (e.g. headless mode arguments).

#### Browser Preferences

Each browser (built-in or custom) can have name/value preferences configured via the `Preferences...` button in the modify dialog. Preferences are applied when the browser is launched:

* **Chrome / Edge:** Preferences are passed as the `prefs` experimental option. Use dotted names (e.g. `profile.default_content_setting_values.notifications`). Values can be text, numbers, or `true`/`false`.
* **Firefox:** Preferences are set via `about:config`-style names (e.g. `network.proxy.type`). Values are coerced to string, integer, or boolean as appropriate.

Only **enabled** preferences are applied. Duplicate preference names are not allowed when adding or modifying an entry.

#### Browser Profiles

You can choose which Firefox profile to use by default for Firefox browsers. The `<temporary>` profile is one which is created by Selenium each time the browser is launched.


**Note:** The 'client' add-on creates a profile called zap-client-profile -
if you choose another profile then the Client add-on will not work without manual configuration.

#### System Properties

It's also possible to set browser driver and binary locations using Java system properties, in which case the options will be overridden and those values shown instead. The system properties are:

* `webdriver.chrome.driver` - ChromeDriver path
* `webdriver.edge.driver` - EdgeDriver path
* `webdriver.gecko.driver` - geckodriver (Firefox) path
* `selenium.chromeBinary` - Chrome binary path
* `selenium.edgeBinary` - Edge binary path
* `selenium.firefoxBinary` - Firefox binary path


More details about the bundled WebDrivers can be found on the overview page.

### Browser Extensions

You can add, remove, enable, or disable browser extensions via the relevant buttons on this screen. Supported browsers and extensions are:

* Firefox: .xpi
* Chrome/Edge: unpacked, directory containing the extension files

Add-ons can also add new browser extensions. If you delete a browser extension via this screen then it will be added again by the add-on so either just disable it or uninstall the add-on to remove the browser extension.

## See also

|   |                                            |                                        |
|---|--------------------------------------------|----------------------------------------|
|   | [Selenium](/docs/desktop/addons/selenium/) | for an overview of the Selenium add-on |
|   | [API](/docs/desktop/addons/selenium/api/)  | for an overview of the Selenium API    |
