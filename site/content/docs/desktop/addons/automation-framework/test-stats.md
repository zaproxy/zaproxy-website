---
# This page was generated from the add-on.
title: Automation Framework - Statistics Job Test
type: userguide
weight: 10
---

# Automation Framework - Statistics Job Test

Statistics-based tests are supported by all add-ons that have an automation job. If there is a relevant statistic used by an add-on, a test can be created for it.  
An up to date list of the statistics ZAP maintains can be found at [https://www.zaproxy.org/docs/internal-statistics/](/docs/internal-statistics/).

A job can have tests for multiple statistics and multiple tests can be created for the same statistic.

Note that statistics-based tests will function correctly only if in memory statistics have been
[enabled](/docs/desktop/ui/dialogs/options/stats/#in-memory-statistics-enabled).

## YAML

```
  jobs:
  - type: example
    parameters:
      jobSpecificParam: 'value'
    tests:
      - name: 'test one'                      # Name of the test, optional
        type: stats                           # Specifies that the test is of type 'stats'
        statistic: 'stats.addon.something'    # Name of an integer / long statistic
        site:                                 # Name of the site for site specific tests, supports vars
        operator: '>='                        # One of '==', '!=', '>=', '>', '<', '<='
        value: 10                             # Value to compare statistic against
        onFail: 'info'                        # String: One of 'warn', 'error', 'info', mandatory

```
