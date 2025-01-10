---
# This page was generated from the add-on.
title: Retest
type: userguide
weight: 1
cascade:
  addon:
    id: retest
    version: 0.11.0
---

# Support for Retesting alerts

The Retest add-on allows you to retest for the presence/absence of certain alerts in your web application.

The user can select one or more alerts from the Alert tab, right click on them and choose "Retest".
This would lead them to the Retest dialog, where they can add/remove alerts to be included in a "Retest Plan".

The user can choose to verify the plan they are about to create by clicking on the "Verify" button, which checks
for the presence of all the alerts which have been included in the plan, and updates the status of each alert as
"Present" or "Absent" accordingly.

The user can click on create, which would create the plan and load it in the Automation Panel at the bottom.
From there, the user can run the plan from within the panel, and see the relevant output in the Output Tab. Note that
all while retesting, the strength of the rule as well the threshold of the alert are set to "Medium".

More information about the Automation Framework and how it allows modification of plans can be found
[here.](/docs/desktop/addons/automation-framework/)
