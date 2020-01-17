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
| geckodriver  | This allows you to select the location of geckodriver (Firefox driver). | The path to the bundled WebDriver, if available. | Key: `selenium.firefoxDriver` Value: file system path to the geckodriver |

### Binaries

|   Field   |                                                         Details                                                         | Default |                                   Config File                                   |
|-----------|-------------------------------------------------------------------------------------------------------------------------|---------|---------------------------------------------------------------------------------|
| Firefox   | This allows you to select the location of Firefox binary (for example, to use a version other than the system default). | (None)  | Key: `selenium.firefoxBinary` Value: file system path to the Firefox binary     |
| PhantomJS | This allows you to select the location of PhantomJS binary.                                                             | (None)  | Key: `selenium.phantomJsBinary` Value: file system path to the PhantomJS binary |

**Note:** It's also possible to set the above locations (binaries and WebDrivers) using Java system properties, in which case the above options will be overridden and those values shown instead.

More details about the bundled WebDrivers can be found on the overview page.

## See also

|   |                                            |                                        |
|---|--------------------------------------------|----------------------------------------|
|   | [Selenium](/docs/desktop/addons/selenium/) | for an overview of the Selenium add-on |
|   | [API](/docs/desktop/addons/selenium/api/)  | for an overview of the Selenium API    |
