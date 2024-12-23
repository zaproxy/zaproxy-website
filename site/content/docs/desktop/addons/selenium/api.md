---
# This page was generated from the add-on.
title: Selenium API
type: userguide
weight: 2
---

# Selenium API

The 'selenium' API allows to set and view the paths to the required WebDrivers and binary.

## API actions/views

|            Name            |  Type  |           Parameters           |                        Description                         |
|----------------------------|--------|--------------------------------|------------------------------------------------------------|
| getBrowserArguments        | view   | browser\*                      | Gets the browser arguments.                                |
| optionChromeBinaryPath     | view   |                                | Returns the current path to Chrome binary                  |
| optionChromeDriverPath     | view   |                                | Returns the current path to ChromeDriver                   |
| optionFirefoxBinaryPath    | view   |                                | Returns the current path to Firefox binary                 |
| optionFirefoxDriverPath    | view   |                                | Returns the current path to Firefox driver (geckodriver)   |
| addBrowserArgument         | action | browser\* argument\* enabled   | Adds a browser argument.                                   |
| launchBrowser              | action | browser\*                      | Launches a browser proxying through ZAP, for manual usage. |
| removeBrowserArgument      | action | browser\* argument\*           | Removes a browser argument.                                |
| setBrowserArgumentEnabled  | action | browser\* argument\* enabled\* | Sets whether or not a browser argument is enabled.         |
| setOptionChromeBinaryPath  | action | String\*                       | Sets the current path to Chrome binary                     |
| setOptionChromeDriverPath  | action | String\*                       | Sets the current path to ChromeDriver                      |
| setOptionFirefoxBinaryPath | action | String\*                       | Sets the current path to Firefox binary                    |
| setOptionFirefoxDriverPath | action | String\*                       | Sets the current path to Firefox driver (geckodriver)      |

Starred parameters are mandatory

## See also

|   |                                                                   |                                         |
|---|-------------------------------------------------------------------|-----------------------------------------|
|   | [Selenium](/docs/desktop/addons/selenium/)                        | for an overview of the Selenium add-on  |
|   | [Options Selenium screen](/docs/desktop/addons/selenium/options/) | for an overview of the Selenium Options |
