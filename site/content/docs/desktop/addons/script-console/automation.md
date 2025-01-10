---
# This page was generated from the add-on.
title: Scripts Automation Framework Support
type: userguide
weight: 1
---

# Scripts Automation Framework Support

This add-on supports the Automation Framework.

## Job: script

The script job allows you to execute various actions with scripts:

## Action: add

Adds the specified script to ZAP. Scripts are enabled but not configured to be loaded when ZAP restarts.


By default the default script engine for the file extension (if any) will be used - this may be overridden using the 'engine' parameter.

* type: mandatory, can be any of the script types supported by ZAP
* engine: optional, can be used to override the default engine for the file extension
* name: optional, defaults to the file name, can be used to specify the script in another job
* source: mandatory, the path to the file (absolute or relative to the plan), must be a readable text file

The `source` parameter was previously called `file`, both will work.

## Action: remove

Removes the specified script from ZAP.

* name: mandatory, the name of the script in ZAP

## Action: run

Runs the specified script to ZAP. The script must already be available in ZAP, for example added using the 'add' action.

* type: mandatory, can be 'standalone' or 'targeted'
* name: mandatory, the name of the script in ZAP
* engine: optional, can be used to override the default engine for the file extension
* target: mandatory, if type is 'targeted', the target URL to be invoked for 'targeted' script

## Action: loaddir

Loads all of the scripts in the subdirectories under the specified source path to ZAP. Scripts are enabled but not configured to be loaded when ZAP restarts.


The scripts must be in subdirectories named after the relevant script type (such as ‘active’, ‘passive’, ‘proxy’ etc)
and must have an appropriate extension for the script language used.

* source: mandatory, the path to the directory (absolute or relative to the plan).

## Action: enable

Enables the specified script. The script must already be available in ZAP, for example added using the 'add' action.

* name: mandatory, the name of the script in ZAP

## Action: disable

Disables the specified script. The script must already be available in ZAP, for example added using the 'add' action.

* name: mandatory, the name of the script in ZAP

## YAML definition

Not all of the parameters are valid for all of the actions, see above for details.

```
  - type: script
    parameters:
      action:                    # String: The executed action - available actions: add, remove, run, enable, disable
      type:                      # String: The type of the script
      engine:                    # String: The script engine to use - can be used to override the default engine for the file extension
      name:                      # String: The name of the script, defaults to the file name
      source:                    # String: The full or relative file path, must be readable
      inline:                    # String: The full script (may be multi-line) - supply this or 'file' not both
      target:                    # String: The URL to be invoked for "targeted" script type
	
```

The `source` parameter was previously called `file`, both will work.

## Inline Scripts

Inline scripts are where the script contents are in the YAML plan rather that a separate file. An example of adding and running a simple standalone inline script is:

```
  - type: script
      parameters:
        action: "add"
        type: "standalone"
        engine: "ECMAScript : Graal.js"
        name: "inline-test"
        inline: |
          print("This is a simple example")
          print("Of a multi-line script")
  - type: script
      parameters:
        action: "run"
        type: "standalone"
        name: "inline-test"
	
```

## Interacting with plans

Scripts can interact with running plans using code like:


    var extAF = control.getExtensionLoader().getExtension("ExtensionAutomation");

    var plans = extAF.getRunningPlans();

    if (plans.size() >  0) {
      plans.get(0).getProgress().info("An info message added by a script");
    } else {
      print('No running plans');
    }
    	
