---
# This page was generated from the add-on.
title: Client Side Integration - Automation Framework Support
type: userguide
weight: 1
---

# Client Side Integration - Automation Framework Support

This add-on supports the Automation Framework.

## Job: spiderClient

The spiderClient job allows you to run the [Client Spider](/docs/desktop/addons/client-side-integration/spider/), which is designed to explore modern web apps more effectively.


This job supports monitor tests.

```
  - type: spiderClient                 # The client spider - a spider which explores modern web apps more effectively
    parameters:
      context:                         # String: Name of the context to spider, default: first context
      user:                            # String: An optional user to use for authentication, must be defined in the env
      url:                             # String: URL to start spidering from, default: first context URL
      maxDuration:                     # Int: The max time in minutes the spider will be allowed to run for, default: 0 unlimited
      maxCrawlDepth:                   # Int: The maximum tree depth to explore, default 5
      maxChildren:                     # Int: The maximum number of children to add to each node in the tree
      numberOfBrowsers:                # Int: The number of browsers the spider will use, more will be faster but will use up more memory, default: number of cores
      browserId:                       # String: Browser ID to use, default: firefox-headless
      initialLoadTime:                 # Int: The time in seconds to wait after the initial URL is loaded, default: 5
      pageLoadTime:                    # Int: The time in seconds to wait after a new URL is loaded, default: 1
      shutdownTime:                    # Int: The time in seconds to wait after no activity before shutting down, default: 5
```
