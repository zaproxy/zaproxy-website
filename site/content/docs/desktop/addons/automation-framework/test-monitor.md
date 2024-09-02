---
# This page was generated from the add-on.
title: Automation Framework - Monitor Job Test
type: userguide
weight: 9
---

# Automation Framework - Monitor Job Test

Monitor tests are supported by long running jobs, such as [activeScan](/docs/desktop/addons/automation-framework/job-ascan/) and spider.

Unlike the other Job Tests, monitor tests run while a job is running.
They work in a similar way to [statistic](/docs/desktop/addons/automation-framework/test-stats/) tests in that they check a specified statistic,
but there is no 'operator' - instead the test will fail if the value of the statistic exceeds the given threshold.

Monitor tests can be used to terminate a long running job early, for example if there are too many authentication failures.

An up to date list of the statistics ZAP maintains can be found at
[https://www.zaproxy.org/docs/internal-statistics/](/docs/internal-statistics/).

A job can have tests for multiple statistics and multiple tests can be created for the same statistic.

Note that monitor tests will function correctly only if in memory statistics have been
[enabled](/docs/desktop/ui/dialogs/options/stats/#in-memory-statistics-enabled).

## YAML

```
  jobs:
  - type: example
    parameters:
      jobSpecificParam: 'value'
    tests:
      - name: 'test one'                      # Name of the test, optional
        type: monitor                         # Specifies that the test is of type 'monitor'
        statistic: 'stats.addon.something'    # Name of an integer / long statistic
        site:                                 # Name of the site for site specific tests, supports vars
        threshold: 10                         # The threshold at which a statistic fails
        onFail: 'info'                        # String: One of 'warn', 'error', 'info', mandatory
```
