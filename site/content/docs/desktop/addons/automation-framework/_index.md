---
# This page was generated from the add-on.
title: Automation Framework
type: userguide
weight: 1
cascade:
  addon:
    id: automation
    version: 0.58.0
---

# Automation Framework

This add-on provides a framework that allows ZAP to be automated in an easy and flexible way.

### Command Line Options {#command-line-options}

It provides the following command line options:

* -autorun \<source\> Run the automation jobs specified in the file or from the URL.
* -autogenmin \<filename\> Generate template automation file with the key parameters.
* -autogenmax \<filename\> Generate template automation file with all parameters.
* -autogenconf \<filename\> Generate template automation file using the current configuration.
* -autocheck \<source\> Check the specified automation plan in the file or from the URL.

### Exit Codes {#exit-codes}

If the `-autorun` option is used with the ZAP `-cmd` option then the ZAP exit value will be set by default as follows:

* 0 - The plan completed successfully with no errors or warnings
* 1 - The plan reported one or more errors
* 2 - The plan reported no errors but one or more warnings

These values can be overridden by the [exitStatus](/docs/desktop/addons/automation-framework/job-exitstatus/) job.  
Whether the plan completed after encountering errors or warnings will depend on the settings used in the [environment](/docs/desktop/addons/automation-framework/environment/).

### Usage {#usage}

To use the automation framework:

1. Generate a template automation file using one of the `-autogen*` command line options
2. Edit the file to match your requirements
3. Run the file using the `-autorun` commandline option e.g. `./zap.sh -cmd -autorun config.yaml`

**Note:** The Jobs are executed in the order in which they appear (top to bottom) within the Plan.


In most cases it is recommended to also use the `-cmd` command line option so that the ZAP desktop is not displayed
and ZAP exits as soon as it has finished generating or running the jobs defined in the file.
However you can choose to run Automation Framework jobs using the ZAP desktop to help you debug issues.

## Authentication {#authentication}

The Automation Framework supports all of the [authentication](/docs/desktop/addons/automation-framework/authentication/) mechanisms supported by ZAP.

## GUI {#gui}

A [GUI](/docs/desktop/addons/automation-framework/gui/) is under development and provides an ever increasing set of features.

## Options {#options}

The [Automation Options](/docs/desktop/addons/automation-framework/options/) screen allows you to configure specific options.

## API {#api}

The following API endpoints are provided by this add-on:

* Action: endDelayJob() - ends the currently running delay job, if any
* Action: runPlan(filePath) - loads and asynchronously runs the plan in the specified file, returning a planId
* Action: stopPlan(planId) - stops the running plan identified by the planId
* View: planProgress(planId) - returns the progress details for the specified planId

If the ZAP desktop is being used then the plan will also be shown in the GUI to make it easier to diagnose any problems.


Note that some jobs may not stop immediately, for example if authentication is being handled.

## Environment {#environment}

The [environment](/docs/desktop/addons/automation-framework/environment/) section of the file defines the applications which the rest of the jobs can act on.

## File Paths {#file-paths}

All file and directory paths can either be absolute or relative to the directory containing the plan. Relative paths are recommended for portability.

## Jobs {#jobs}


The following automation jobs are supported by this add-on:

* [activeScan-config](/docs/desktop/addons/automation-framework/job-ascanconfig/) - configures the active scanner
* [activeScan-policy](/docs/desktop/addons/automation-framework/job-ascanpolicy/) - creates an active policy
* [addOns](/docs/desktop/addons/automation-framework/job-addons/) - add-on management, now deprecated
* [delay](/docs/desktop/addons/automation-framework/job-delay/) - pauses the plan for a specified period of time or a specific condition is met
* [requestor](/docs/desktop/addons/automation-framework/job-requestor/) - crafts specific requests to send to the corresponding targets
* [activeScan](/docs/desktop/addons/automation-framework/job-ascan/) - runs the active scanner
* [exitStatus](/docs/desktop/addons/automation-framework/job-exitstatus/) - sets ZAP's exit code based on scan results

### General Job Options {#gen-options}

The following options can be applied to all jobs, via the automation plan or the [GUI](/docs/desktop/addons/automation-framework/gui/):

* `enabled` - only jobs that are enabled will run.
* `alwaysRun` - enabled jobs with this option will run even if the plan exits early.

### Importance of Job Order

The order of jobs is relevant and important. For example:

* there is no point putting a passiveScan-wait job before any sort of spidering or importing
* configuring an alertFilter job after alerts have been generated by passive or active scanning will have no effect on the Alerts that were raised by those components in earlier jobs


[Job tests](/docs/desktop/addons/automation-framework/tests/) can be added to jobs to check that the jobs have performed as expected.


This framework is plugable and so other add-ons may add support for other jobs, see the
[Automation Framework](/docs/automate/automation-framework/) website pages for a more complete list.


The 'min' and 'max' templates include comments giving more information about the fields.
