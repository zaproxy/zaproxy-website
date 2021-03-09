---
# This page was generated from the add-on.
title: Automation Framework - Environment
type: userguide
weight: 1
---

# Automation Framework - Environment

This section of the YAML configuration file defines the applications which the rest of the jobs can act on.

```
env:                                   # The environment, mandatory
  contexts :                           # List of 1 or more contexts, mandatory
    - name: context 1                  # Name to be used to refer to this context in other jobs, mandatory
      url:                             # The top level url, mandatory, everything under this will be included
      includePaths:                    # TBA: An optional list of regexes to include
      excludePaths:                    # TBA: An optional list of regexes to exclude
      authentication:                  # TBA: In time to cover all auth configs
  parameters:
    failOnError: true                  # If set exit on an error         
    failOnWarning: false               # If set exit on a warning
    progressToStdout: true             # If set will write job progress to stdout
```
