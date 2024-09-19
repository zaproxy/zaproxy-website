---
# This page was generated from the add-on.
title: Configuring Proxies
type: userguide
weight: 1
---

# Configuring Proxies

You will need to configure your browser to use ZAP as a proxy.  
By default, ZAP uses an Address of 'localhost' and a Port of '8080', but these can be changed via the Options \> Network \> Local Servers/Proxies screen.
Instructions for the latest versions of the most commonly used browsers:

### Chrome (on Windows)

|   |            |                                                          |
|---|------------|----------------------------------------------------------|
|   | Press the  | 'Customise and control Google Chrome' button (top right) |
|   | Select the | 'Options..' menu item                                    |
|   | Press the  | 'Change proxy settings' button                           |
|   | Press the  | 'LAN Settings' button                                    |
|   | Follow the | 'Windows LAN Settings' section below                     |

**Note:** To proxy `localhost` (and related addresses) with newer Chrome versions (\>= 72) the command line argument `--proxy-bypass-list=<-loopback>` must be provided.

### Firefox (on Windows)

|   |              |                                                                                                                                                                                                                                                   |
|---|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   | Select the   | 'Tools' menu                                                                                                                                                                                                                                      |
|   | Select the   | 'Options..' menu item                                                                                                                                                                                                                             |
|   | Select the   | 'General' panel                                                                                                                                                                                                                                   |
|   | Scroll to    | 'Network Settings' section                                                                                                                                                                                                                        |
|   | Press the    | 'Settings...' button                                                                                                                                                                                                                              |
|   | Select the   | 'Manual proxy configuration' radio button                                                                                                                                                                                                         |
|   | Enter in the | 'HTTP Proxy:' field the 'Address' you configured in the options screen                                                                                                                                                                            |
|   | Enter in the | 'Port' field to the right of the 'HTTP Proxy' field the 'Port' you configured in the options screen. Ensure 'SSL Proxy' is also configured, either by selecting 'Use this proxy server for all protocols' or by setting the corresponding values. |
|   | Press the    | Connection Setting 'OK' button                                                                                                                                                                                                                    |
|   | Press the    | Options 'OK' button                                                                                                                                                                                                                               |

**Note:** To proxy `localhost` (and related addresses) with newer Firefox versions (\>= 67) the preference `network.proxy.allow_hijacking_localhost` (accessible through the `about:config` page) must be set to `true`.

### Firefox (on Linux)

|   |            |                                             |
|---|------------|---------------------------------------------|
|   | Select the | 'Edit' menu                                 |
|   | Select the | 'Preferences' menu item                     |
|   | Follow the | instructions above from the 'General' panel |

### Firefox (on OS X)

|   |            |                                             |
|---|------------|---------------------------------------------|
|   | Select the | 'Firefox' menu                              |
|   | Select the | 'Preferences...' menu item                  |
|   | Follow the | instructions above from the 'General' panel |

### Internet Explorer 7 and 8

|   |            |                                      |
|---|------------|--------------------------------------|
|   | Select the | 'Tools' menu                         |
|   | Select the | 'Internet Options' menu item         |
|   | Select the | 'Connections' tab                    |
|   | Press the  | 'LAN Settings' button                |
|   | Follow the | 'Windows LAN Settings' section below |

### Opera

|   |              |                                                                                 |
|---|--------------|---------------------------------------------------------------------------------|
|   | Select the   | 'Menu' in the top left hand corner                                              |
|   | Select the   | 'Settings' menu item                                                            |
|   | Select the   | 'Preferences' menu item                                                         |
|   | Select the   | 'Advanced' tab                                                                  |
|   | Select the   | 'Network' item in the left hand list                                            |
|   | Press the    | 'Proxy Servers' button                                                          |
|   | Select the   | 'HTTP' checkbox                                                                 |
|   | Enter in the | field to the right of 'HTTP' the 'Address' you configured in the options screen |
|   | Enter in the | HTTP 'Port' field the 'Port' you configured in the options screen               |
|   | Press the    | Proxy servers 'OK' button                                                       |
|   | Press the    | Preferences 'OK' button                                                         |

### Safari (on OS X)

|   |            |                                                       |
|---|------------|-------------------------------------------------------|
|   | Press the  | 'Safari settings' button in the top right hand corner |
|   | Select the | 'Preferences' menu item                               |
|   | Select the | 'Advanced' tab                                        |
|   | Press the  | 'Change Settings' button next to the 'Proxies' label  |
|   | Follow the | 'OS X System Proxy settings' section below            |

### Safari (on Windows)

|   |            |                                                                                 |
|---|------------|---------------------------------------------------------------------------------|
|   | Press the  | 'Display a menu of general Safari settings' button in the top right hand corner |
|   | Select the | 'Preferences' menu item                                                         |
|   | Select the | 'Advanced' tab                                                                  |
|   | Press the  | 'Change Settings' button next to the 'Proxies' label                            |
|   | Press the  | 'LAN Settings' button                                                           |
|   | Follow the | 'Windows LAN Settings' section below                                            |

### OS X System Proxy settings

|   |              |                                                                     |
|---|--------------|---------------------------------------------------------------------|
|   | Select the   | 'Web proxy (HTTP)'                                                  |
|   | Enter in the | 'Address:' field the 'Address' you configured in the options screen |
|   | Enter in the | 'Port' field the 'Port' you configured in the options screen        |
|   | Press the    | Proxies Setting 'OK' button                                         |
|   | Press the    | Network Options 'Apply' button                                      |

### Linux Gnome Proxy settings

|   |              |                                                                                     |
|---|--------------|-------------------------------------------------------------------------------------|
|   | Select the   | 'Gnome Settings'                                                                    |
|   | Enter in the | 'Network'                                                                           |
|   | Enter in the | 'Proxy' in the 'Proxy' section                                                      |
|   | Press the    | 'Network Proxy' toggle                                                              |
|   | Select       | 'Manual' in the 'Configuration' section                                             |
|   | Enter in the | HTTP (or HTTPs) Proxy 'URL' field the 'URL' you configured in the options screen    |
|   | Enter in the | HTTP (or HTTPs) Proxy 'Port' field the 'Port' you configured in the options screen  |

### Windows LAN Settings

|   |              |                                                                     |
|---|--------------|---------------------------------------------------------------------|
|   | Select the   | 'Use a proxy server for your LAN' checkbox                          |
|   | Enter in the | 'Address:' field the 'Address' you configured in the options screen |
|   | Enter in the | 'Port' field the 'Port' you configured in the options screen        |
|   | Press the    | Local Area Network (LAN) Setting 'OK' button                        |
|   | Press the    | Internet Options 'OK' button                                        |

## See also

|   |                                         |                                       |
|---|-----------------------------------------|---------------------------------------|
|   | [Getting Started](/docs/desktop/start/) | for details of how to start using ZAP |
|   | [Introduction](/docs/desktop/)          | the introduction to ZAP               |
