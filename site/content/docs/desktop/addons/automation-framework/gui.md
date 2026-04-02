---
# This page was generated from the add-on.
title: Automation Framework - GUI
type: userguide
weight: 1
---

# Automation Framework - GUI

The Automation Framework has a GUI that is in the process of being developed.

## Automation Tab

This tab allows you to create, load, edit and run automation jobs.


A toolbar provides the following buttons:

* New Plan... - this launches the New Plan dialog
* Load Plan... - this allows you to load a plan from a yaml file
* Load Plan from Clipboard - this allows you to load a plan from the contents of the clipboard
* Save Plan - this saves the current plan to a yaml file
* Run Plan - this runs the current plan
* Stop Plan - this stops the current plan
* Add Job... - this launches the Add Job dialog to add a job to the current plan
* Remove Job... - this removes the selected job from the current plan
* Move Job Up - this moves the selected job up one place in the current plan
* Move Job Down - this moves the selected job down one place in the current plan
* Add Test... - this launches the Add Test dialog to add a test to the current job
* Remove Test... - this removes the selected test from the current job

Below the toolbar, you can find a graphical representation of the plan which also shows the state of the plan when it is run.  
You can edit any of the elements of the plan by double clicking on them.


You can also change the following general job options via the plan table:

* Enabled - only jobs that are enabled will run.
* Always Run - enabled jobs with this option will run even if the plan exits early.

## Output

Any output generated while loading or running the plan will appear in the Automation sub-tab of the Output tab.

## Future Plans

Future versions of this add-on will add:

* Support for multiple plans
* Creating the plan from the current config
