---
# This page was generated from the add-on.
title: Options HUD screen
type: userguide
weight: 1
---

# Options HUD screen

## Enable when using the ZAP Desktop

When set the HUD will be injected into HTML responses when the ZAP Desktop is used. This defaults to true.

## Enable when using ZAP in daemon mode

When set the HUD will be injected into HTML responses when ZAP is started in daemon or 'headless' mode. This defaults to false as many people use ZAP for automation, injecting the HUD would not help and could cause existing tests to break.

## Enable anonymous telemetry

When set will send pings to a bit.ly URL when:

- The HUD is used
- The HUD tutorial first page is visited
- The HUD tutorial last page is visited

Each ping is sent at most once per ZAP run and the only information available to the ZAP team is the number of pings made and the countries they have come from.  
We get very little feedback and so information like this really helps us understand how ZAP is being used. We have limited time to spend and so want to focus on features that people are actually using.

## Show the HUD welcome screen when a browser is opened

When set the HUD Welcome screen, which includes a link to the tutorial, will be shown whenever a browser that is proxying through ZAP is opened. The welcome screen includes an option to not show the screen again, if that is selected then this is the only way to make the welcome screen appear again.

## Enable the HUD only for URLs that are in scope

If selected then only URLs flagged as 'in scope' in ZAP will have the HUD injected into them. The plan is to expose this option via the HUD, but until that time if the option is enabled then you will need to add URLs to the scope via the ZAP Desktop.

When this option is selected then the HUD icon in the desktop toolbar will have a small 'target' overlay on the
bottom right hand side.

## Enable on-domain messages

Allow messages to be sent from the target domain to the ZAP domain. This is needed for features such as showing the number of hidden fields and displaying the alert associated with a specific field. If you think that the target domain could be malicious then you can turn this option off. The HUD does not trust any messages from the target domain but a malicious site could potentially do mildly annoying things such as causing ZAP alerts to be displayed unexpectedly. You will need to restart your browser after changing this setting in order for it to take effect.

## Remove CSP from target pages

The HUD will not currently work if a strong CSP policy is used in target web sites. By default ZAP will strip off the CSP, turning this option off may well cause the HUD to break.

## Development mode

If set then various options are set that can be useful when debugging the HUD, including:

- Setting the client side debug level to DEBUG
- Sending the client side logging to the ZAP Output tab
- Adding the 'HUD Errors' tool which shows any errors logged

## Base directory

This should not be changed at this time.

## Allow unsafe-evals

This is currently required in order for the HUD to work. In the future the plan is to only require this when actually developing the HUD.

## Skip tutorial tasks

Setting this option allows you to view all of the tutorial pages without passing the tasks.

## Reset tutorial tasks

Clicking on this button will reset the tasks so that you will be able to take them again.

## See also

|     |                                  |                                   |
| --- | -------------------------------- | --------------------------------- |
|     | [HUD](/docs/desktop/addons/hud/) | for an overview of the HUD add-on |
