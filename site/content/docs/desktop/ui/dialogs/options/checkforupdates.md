---
# This page was generated from the add-on.
title: Options Check for Updates screen
type: userguide
weight: 7
---

# Options Check for Updates screen


This screen allows you to configure whether ZAP checks to see if you are running
the latest version when it starts, and if so what it does.

### Check for Updates on startup

If selected then ZAP will automatically check for updates to the whole application and all of the add-ons when it starts.  
It is strongly recommended that you check this box.  
If for any reason you choose not to then you should manually check for updates frequently.  
ZAP will only make one request, and the only information included will be the current version you are on.

### Automatically download new ZAP releases.

If selected then ZAP will automatically download new ZAP releases when they are available and prompt you to install them.

### Automatically install updates to the add-ons you have installed.

If selected then ZAP will automatically download and install any updates to the add-ons you have installed.

### Automatically install updates to the scan rules you have installed.

If selected then ZAP will automatically download and install any updates to the scan rules you have installed.  
These are a subset of the full set of add-ons installed.

### Report new Release status add-ons.

If selected then ZAP will inform you if and when any add-ons are promoted to 'release' status.  
These add-ons will have been thoroughly tested and reviewed, and you can be sure they are of the highest status.

### Report new Beta status add-ons.

If selected then ZAP will inform you if and when any add-ons are promoted to 'beta' status.  
These add-ons will have been tested and reviewed, and are considered to be of a reasonable status and mostly fit for purpose.  
However they may be incomplete or need further testing.  
Some of the add-ons included with ZAP by default are still at the beta level.

### Report new Alpha status add-ons.

If selected then ZAP will inform you if and when any new add-ons are added at 'alpha' status.  
These add-ons will have been reviewed but they are typically at an early stage of development.  
They may be incomplete, contain significant issues or cause stability problems.

### Add-on directories

ZAP will load all of the add-ons from the [default `plugin`
directories](/docs/desktop/start/features/addons/).  
You can also add as many additional add-on directories as you need by adding them here.  
This can be very useful when running multiple ZAP instances on one machine, for example in a CI environment.  
You can then just download new or updated add-ons once and immediately share them between multiple instances.  
Add-ons downloaded into shared directories will be only added to new ZAP instances, not to ones that are already running, with the exception of the instance that actually downloaded the add-on.

### Download directory

This is the directory ZAP will download new or updated add-ons to.  
By default it will be the local directory, but you can also choose one of the shared directories as long as this ZAP instance can write to it.  
ZAP will only move add-ons to a shared directory after they are completely downloaded, so that other ZAP instances do not try to load an incomplete add-on.

## See also

|   |                                                      |                                                 |
|---|------------------------------------------------------|-------------------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                     | for an overview of the user interface           |
|   | [Options dialogs](/docs/desktop/ui/dialogs/options/) | for details of the other Options dialog screens |
