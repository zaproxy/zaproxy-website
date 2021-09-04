---
# This page was generated from the add-on.
title: Authentication Statistics
type: userguide
weight: 1
cascade:
  addon:
    id: authstats
    version: 2.0.0
---

# Authentication Statistics

This add-on records authentication related statistics for all contexts that are in scope.  
The statistics are recorded on a per site basis and cover:

|                                             |                                                                                   |
| ------------------------------------------- | --------------------------------------------------------------------------------- |
| stats.auth._component_.state.noauth         | The context does not have an authentication method                                |
| stats.auth._component_.state.nothtml        | Non HTML responses (which are unlikely to have logged in/out indicators)          |
| stats.auth._component_.state.notsuccess     | Unsuccessful HTML responses (which are unlikely to have logged in/out indicators) |
| stats.auth._component_.state.noindicator    | No logged in/out indicators have been defined                                     |
| stats.auth._component_.state.loggedinandout | Both the logged in and out indicators present                                     |
| stats.auth._component_.state.loggedin       | Just the logged in indicator present                                              |
| stats.auth._component_.state.loggedout      | Just the logged out indicator present                                             |
| stats.auth._component_.state.unknown        | Neither the logged in or out indicators present                                   |

The component can be:

|        |                                                              |
| ------ | ------------------------------------------------------------ |
| ascan  | Active Scanner                                               |
| auth   | Authentication                                               |
| fuzz   | Fuzzer                                                       |
| manual | Manual requests                                              |
| proxy  | Proxied requests                                             |
| spider | Spider                                                       |
| _id_   | The integer identifier of another component not listed above |

the statistics can be accessed via the ZAP API.

The icon for this add-on was derived from the
[Fugue icons](https://github.com/yusukekamiyamane/fugue-icons)
[chart.png](https://github.com/yusukekamiyamane/fugue-icons/blob/master/icons/chart.png) and
[locl-small.png](https://github.com/yusukekamiyamane/fugue-icons/blob/master/icons/lock-small.png)
