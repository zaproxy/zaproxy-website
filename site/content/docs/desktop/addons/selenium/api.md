---
# This page was generated from the add-on.
title: Selenium API
type: userguide
weight: 2
---

# Selenium API

The 'selenium' API allows to set and view the paths to the required WebDrivers and binary.

## API actions/views

| Name                         | Type   | Parameters | Description                                              |
| ---------------------------- | ------ | ---------- | -------------------------------------------------------- |
| optionChromeDriverPath       | view   |            | Returns the current path to ChromeDriver                 |
| optionFirefoxBinaryPath      | view   |            | Returns the current path to Firefox binary               |
| optionFirefoxDriverPath      | view   |            | Returns the current path to Firefox driver (geckodriver) |
| optionPhantomJsBinaryPath    | view   |            | Returns the current path to PhantomJS binary             |
| setOptionChromeDriverPath    | action | String\*   | Sets the current path to ChromeDriver                    |
| setOptionFirefoxBinaryPath   | action | String\*   | Sets the current path to Firefox binary                  |
| setOptionFirefoxDriverPath   | action | String\*   | Sets the current path to Firefox driver (geckodriver)    |
| setOptionPhantomJsBinaryPath | action | String\*   | Sets the current path to PhantomJS binary                |

Starred parameters are mandatory

## See also

|     |                                                                   |                                         |
| --- | ----------------------------------------------------------------- | --------------------------------------- |
|     | [Selenium](/docs/desktop/addons/selenium/)                        | for an overview of the Selenium add-on  |
|     | [Options Selenium screen](/docs/desktop/addons/selenium/options/) | for an overview of the Selenium Options |
