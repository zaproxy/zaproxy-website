---
# This page was generated from the add-on.
title: Automation Framework
type: userguide
weight: 1
cascade:
  addon:
    id: automation
    version: 0.0.1
---

# Automation Framework

This add-on provides a framework that allows ZAP to be automated in an easy and flexible way.

It provides the following command line options:

* -autorun \<filename\> Run the automation jobs specified in the file.
* -autogenmin \<filename\> Generate template automation file with the key parameters.
* -autogenmax \<filename\> Generate template automation file with all parameters.
* -autogenconf \<filename\> Generate template automation file using the current configuration.

To use the automation framework:

1. Generate a template automation file using one of the `-autogen*` command line options
2. Edit the file to match your requirements
3. Run the file using the `-autorun` commandline option

In all cases it is recommended to also use the `-cmd` command line option so that the ZAP desktop is not displayed and ZAP exits as soon as it has finished generating or running the jobs defined in the file.

## Environment

The [environment](/docs/desktop/addons/automation-framework/environment/) section of the file defines the applications which the rest of the jobs can act on.

## Jobs

The following automation jobs are supported by this add-on:

* [addOns](/docs/desktop/addons/automation-framework/job-addons/) - add-on management
* [passiveScan-config](/docs/desktop/addons/automation-framework/job-pscanconf/) - passive scan configuration
* [passiveScan-wait](/docs/desktop/addons/automation-framework/job-pscanwait/) - waits for the passive scanner to finish processing the current queue
* [spider](/docs/desktop/addons/automation-framework/job-spider/) - runs the traditional spider
* [activeScan](/docs/desktop/addons/automation-framework/job-ascan/) - runs the active scanner

This framework is plugable and so other add-ons may add support for other jobs.

The 'min' and 'max' templates include comments giving more information about the fields.
