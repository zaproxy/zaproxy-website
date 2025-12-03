---
# This page was generated from the add-on.
title: Options Selenium screen
type: userguide
weight: 1
---

# Options Selenium screen

This screen allows you to setup the requirements of some of the WebDrivers.   

## Configuration Options

### WebDrivers

|    Field     |                                 Details                                 |                     Default                      |                               Config File                                |
|--------------|-------------------------------------------------------------------------|--------------------------------------------------|--------------------------------------------------------------------------|
| ChromeDriver | This allows you to select the location of ChromeDriver.                 | The path to the bundled WebDriver, if available. | Key: `selenium.chromeDriver` Value: file system path to the ChromeDriver |
| EdgeDriver   | This allows you to select the location of EdgeDriver.                   | The path to the bundled WebDriver, if available. | Key: `selenium.edgeDriver` Value: file system path to the EdgeDriver     |
| geckodriver  | This allows you to select the location of geckodriver (Firefox driver). | The path to the bundled WebDriver, if available. | Key: `selenium.firefoxDriver` Value: file system path to the geckodriver |

### Binaries

|  Field  |                                                         Details                                                         | Default |                                 Config File                                 |
|---------|-------------------------------------------------------------------------------------------------------------------------|---------|-----------------------------------------------------------------------------|
| Chrome  | This allows you to select the location of Chrome binary (for example, to use a version other than the system default).  | (None)  | Key: `selenium.chromeBinary` Value: file system path to the Chrome binary   |
| Edge    | This allows you to select the location of Edge binary (for example, to use a version other than the system default).    | (None)  | Key: `selenium.edgeBinary` Value: file system path to the Edge binary       |
| Firefox | This allows you to select the location of Firefox binary (for example, to use a version other than the system default). | (None)  | Key: `selenium.firefoxBinary` Value: file system path to the Firefox binary |

**Note:** It's also possible to set the above locations (binaries and WebDrivers) using Java system properties, in which case the above options will be overridden and those values shown instead.


More details about the bundled WebDrivers can be found on the overview page.

#### Browser Arguments

Chrome, Edge, and Firefox binaries can have additional (CLI) arguments specified through the `Arguments...` button.


**Note:** Adding invalid arguments might cause the browser to fail to start. ZAP already adds some arguments (e.g. headless).

#### Browser Profiles

You can choose which Firefox profile to use by default. The `<temporary>` profile is one which is created by Selenium each time the browser is launched.


**Note:** The 'client' add-on creates a profile called zap-client-profile -
if you choose another profile then the Client add-on will not work without manual configuration.

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
