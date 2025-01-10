---
# This page was generated from the add-on.
title: Options AJAX Spider screen
type: userguide
weight: 4
---

# Options AJAX Spider screen

This screen allows you to configure the [AJAX Spider](/docs/desktop/addons/ajax-spider/) options. The AJAX Spider is an add-on for a crawler called Crawljax. The add-on sets up a local proxy in ZAP to talk to Crawljax. The AJAX Spider allows you to crawl web applications written in AJAX in far more depth than the native Spider. Use the AJAX Spider if you may have web applications written in AJAX. You should also use the native Spider as well for complete coverage of a web application (e.g., to cover HTML comments).   

## Configuration Options


|                     Field                     |                                                                                                                             Details                                                                                                                             |     Default      |
|-----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| Browser                                       | AJAX Spider relies on an external browser to crawl the targeted site. You can specify which one you want to use. For more details on supported browsers refer to "Selenium" add-on help pages.                                                                  | Firefox Headless |
| Number of Browser Windows to Open             | You can configure the number of windows to be used by AJAX Spider. The more windows, the faster the process will be.                                                                                                                                            | Num cores        |
| Maximum Crawl Depth                           | The maximum depth that the crawler can reach. Zero means unlimited depth.                                                                                                                                                                                       | 10               |
| Maximum Crawl States                          | The maximum number of states that the crawler should crawl. Zero means unlimited crawl states.                                                                                                                                                                  | 0 (unlimited)    |
| Maximum Duration                              | The maximum time that the crawler is allowed to run. Zero means unlimited running time.                                                                                                                                                                         | 60 minutes       |
| Event Wait Time                               | The time to wait after a client side event is fired.                                                                                                                                                                                                            | 1000 ms          |
| Reload Wait Time                              | The time to wait after URL is loaded.                                                                                                                                                                                                                           | 1000 ms          |
| Enable Browser Extensions                     | When enabled, any browser extensions added by other add-ons will be enabled in the browsers used for crawling.                                                                                                                                                  | False            |
| Click Elements Once                           | When enabled, the crawler attempts to interact with each element (e.g., by clicking) only once. If this is not set, the crawler will attempt to click multiple times. Unsetting this option is more rigorous but may take considerably more time.               | True             |
| Use Random Values in Form Fields              | When enabled, inserts random values into form fields. Otherwise, it uses empty values.                                                                                                                                                                          | True             |
| Click Default Elements Only                   | When enabled, only elements "a", "button" and "input" will be clicked during crawl. Otherwise, it uses the table below to determine which elements will be clicked. For more in depth analysis, disable this and configure the clickable elements in the table. | True             |
| Select elements to click during crawl (table) | The list of elements to crawl. This table only applies when "click default elements only" is not enabled. Use "enable all" for a more in depth analysis, though it may take somewhat longer.                                                                    | All enabled      |
| Allowed Resources (table)                     | The list of allowed resources. The allowed resources are always fetched even if out of scope, allowing to include necessary resources (e.g. scripts) from 3rd-parties.                                                                                          |                  |

## See also

|   |                                                                    |                                           |
|---|--------------------------------------------------------------------|-------------------------------------------|
|   | [AJAX Spider](/docs/desktop/addons/ajax-spider/)                   | for an overview of the AJAX Spider        |
|   | [AJAX Spider tab](/docs/desktop/addons/ajax-spider/tab/)           | for an overview of the AJAX Spider Tab    |
|   | [AJAX Spider dialog](/docs/desktop/addons/ajax-spider/scandialog/) | for an overview of the AJAX Spider Dialog |
