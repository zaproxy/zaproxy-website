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
* file: mandatory, the full file path, must be a readable text file

## Action: remove

Removes the specified script from ZAP.

* name: mandatory, the name of the script in ZAP

## Action: run

Runs the specified standalone script to ZAP. The script must already be available in ZAP, for example added using the 'add' action.

* type: mandatory, must be 'standalone'
* name: mandatory, the name of the script in ZAP

## YAML definition

Not all of the parameters are valid for all of the actions, see above for details.

```
  - type: script
    parameters:
      action:                    # String: The executed action - available actions: add, remove, run
      type:                      # String: The type of the script
      engine:                    # String: The script engine to use - can be used to override the default engine for the file extension
      name:                      # String: The name of the script, defaults to the file name
      file:                      # String: The full file path, must be readable
	
```
