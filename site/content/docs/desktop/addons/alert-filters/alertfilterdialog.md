---
# This page was generated from the add-on.
title: Alert Filter Dialog
type: userguide
---

# Alert Filter Dialog


This dialog is shown when you add or modify a
[Context Alert Filter](/docs/desktop/addons/alert-filters/contextalertfilter/)
or a [Global Alert Filter](/docs/desktop/addons/alert-filters/globalalertfilter/)


It has the following fields:

### Scope

This can either be 'Global' for a Global Alert Filter or the name of an existing context. It is only editable when you create an Alert Filter from an existing Alert.

### Alert Type

The first pull down lists all of the active and passive alert rules currently installed along with their (known) alert references. The second pull down lists all known IDs (scan rules and alert references). It also allows to manually specify one, if not listed (e.g. custom rule or not yet installed).

### New Risk Level

The new risk level to be assigned to any alerts raised that match the criteria defined by the rule.

### URL

An optional URL.  
If specified then this rule will be applied if the URL matches the URL of a raised alert.  

### URL is Regex?

If set and a URL is specified then the URL will be treated as a regex expression when compared with the URL of the alert.  
If it is not set then any specified URL must exactly match the URL of the alert.

### Parameter

An optional parameter.  
If specified then this rule will be applied if the parameter exactly matches the parameter of a raised alert.  

### Parameter is Regex?

If set and a parameter is specified then the parameter will be treated as a regex expression when compared with the parameter of the alert.  
If it is not set then any specified parameter must exactly match the parameter of the alert.

### Attack

An optional attack.  
If specified then this rule will be applied if the attack exactly matches the attack of a raised alert.  

### Attack is Regex?

If set and a attack is specified then the attack will be treated as a regex expression when compared with the attack of the alert.  
If it is not set then any specified attack must exactly match the attack of the alert.

### Evidence

An optional evidence.  
If specified then this rule will be applied if the evidence exactly matches the evidence of a raised alert.  

### Evidence is Regex?

If set and a evidence is specified then the evidence will be treated as a regex expression when compared with the evidence of the alert.  
If it is not set then any specified evidence must exactly match the evidence of the alert.

### Method

An optional method.  
If specified then this rule will be applied if the method matches (case insensitive) the method of a raised alert.  

### Enabled

If set then this rule will be applied to all alerts raise against the given context.

### Test Filter

The 'Test' button will show a count of how many existing alerts the filter will apply to. It is disabled if the filter is disabled.

### Apply Filter

The 'Apply' button will actually apply the filter to all of the existing alerts that it applies to. It will then show a count of the number of alerts iit changed. It is disabled if the filter is disabled.
