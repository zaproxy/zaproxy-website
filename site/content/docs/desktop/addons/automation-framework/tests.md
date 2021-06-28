---
# This page was generated from the add-on.
title: Automation Framework - Job Tests
type: userguide
weight: 7
---

# Automation Framework - Job Outcome Tests

The automation framework supports testing the job outcomes based on conditions that you can set in the YAML file. Currently, the only type of tests available are statistical ones. More types will be added in the future.

## Statistics

Statistics-based tests are supported by all add-ons that have an automation job. If there is a relevant statistic used by an add-on, a test can be created for it. A job can have tests for multiple statistics and multiple tests can be created for the same statistic. Note that statistics-based tests will function correctly only if in memory statistics have been [enabled](/docs/desktop/ui/dialogs/options/stats/#in-memory-statistics-enabled).

## YAML

```
  jobs:
  - type: example
    parameters:
      jobSpecificParam: 'value'
    tests:
      - name: 'test one'                      # Name of the test, optional
        type: stats                           # Only type initially supported
        statistic: 'stats.addon.something'    # Name of an integer / long statistic
        operator: '>='                        # One of '==', '!=', '>=', '>', '<', '<='
        value: 10                             # Value to compare statistic against
        onFail: 'warn'                        # One of 'warn', 'error', 'ignore'

```
