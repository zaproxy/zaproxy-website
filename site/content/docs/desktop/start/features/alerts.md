---
# This page was generated from the add-on.
title: Alerts
type: userguide
weight: 3
---

# Alerts


An alert is a potential vulnerability and is associated with a specific request.  

A request can have more than one alert.  


Alerts are shown in the UI with a flag indicating the risk:

|   |                                                     |   |
|---|-----------------------------------------------------|---|
|   | ![](/docs/desktop/images/16/071.png) High           |   |
|   | ![](/docs/desktop/images/16/076.png) Medium         |   |
|   | ![](/docs/desktop/images/16/074.png) Low            |   |
|   | ![](/docs/desktop/images/16/073.png) Informational  |   |
|   | ![](/docs/desktop/images/16/072.png) False Positive |   |


Alerts can be raised by various ZAP components, including but not limited to: [active scanning](/docs/desktop/start/features/ascan/), [passive scanning](/docs/desktop/start/features/pscan/),
scripts, by addons (extensions), or manually using the [Add Alert dialog](/docs/desktop/ui/dialogs/addalert/)
(which also allows you to update or change alert details/information).


Alerts are flagged in the [History tab](/docs/desktop/ui/tabs/history/) with a flag which indicates
the highest risk alert.  

All alerts are listed in the [Alerts tab](/docs/desktop/ui/tabs/alerts/)
and a count of the total number of alerts by risk is shown in the [footer](/docs/desktop/ui/footer/).

## Alert overrides

Alerts raised by ZAP include both generic and specific information about the alerts raised. The specific information relates directly to the potential issue found, such as the URL and the parameter affected. The generic information includes things like a description and links to related online resources.


You can replace or add to the generic information using an 'alert override' configuration file.
This allows you to include information that is specific to your company such as mandated policies, internal links or
advice for specific technologies you use.


An alert override configuration file is a UTF-8 property file containing just the information you would like to change.
Lines starting with '#' are treated as comments and ignored.


The format is:

```
<alertid>.<property> = [ + | - ] <your information>
```

The following properties are supported:

* name
* description
* solution
* otherInfo
* reference

The format for alert tags is:

```
<alertid>.tag.<key> = [ + | - ] [ <value> ]
```

Note that:

* Spaces in the tag key must be escaped with a backslash.
* The tag value is optional.

For example

```
# 40012 = Reflected XSS
40012.solution = Follow our company specific guidelines at http://internet.example.com/xss.html
40012.tag.Bug\ Tracker\ URL = https://example.com/issues/1234
```

If the value starts with a '+' then it is appended to the existing information.   
If it starts with a '-' then it is prepended to the existing information.   
If it does not start with a '+' or '-' then it replaces the existing information.


The alert override configuration file can be specified via the [API](/docs/desktop/start/features/api/),
[Options Alert screen](/docs/desktop/ui/dialogs/options/alert/)
or using the [command line](/docs/desktop/cmdline/) option:

```
-config alert.overridesFilename=<filename>
```

## See also

|   |                                           |                                       |
|---|-------------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)          | for an overview of the user interface |
|   | [Features](/docs/desktop/start/features/) | provided by ZAP                       |
