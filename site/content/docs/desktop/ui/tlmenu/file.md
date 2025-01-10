---
# This page was generated from the add-on.
title: The File menu
type: userguide
---

# The File menu

This menu handles the current session. By default the following menu items will be present:  

### New Session

This creates a new session.  
If you have not saved your current session then a warning will be displayed.  
Starting a new session without saving the current session will loose all of the data in the current session.

### Open Session...

This opens a session that has been previously saved.  
Opening a session without saving the current session will loose all of the data in the current session.

### Open Recent

A list of files that have been recently accessed.

### Persist Session...

This persists the current session.   
While the session is always stored in a database on disk, it will be lost when ZAP is stopped unless it has been persisted.  
You only need to persist it once - after that all changes will be saved.

### Snapshot Session As...

This saves a snapshot of a session that has already been persisted.  
It will suggest the same filename as the persisted session with a date-time string appended to it, and allow the user to set whatever name they choose.  

### Session Properties...

This displays the [Session Properties](/docs/desktop/ui/dialogs/session/) dialog.  
This allows you to set the session name and description.

### Import Context...

Allows to import a [Context](/docs/desktop/start/features/contexts/).

### Export Context...

Allows to export a Context.

### Load Add-on file...

Load a local [add-on](/docs/desktop/start/features/addons/) file.  
Add-ons are typically installed from via the [Manage Add-ons](/docs/desktop/ui/dialogs/manageaddons/) dialog, but this option can be useful if you have downloaded an add-on manually or are testing one you have developed yourself.  
Add-ons remain installed until you manually uninstall them.

### Exit and Delete Session...

This will exit ZAP and delete the session, even if you have previously persisted it.  
The session will no longer be accessible when you restart ZAP, although any snapshots you took will still be available.  
A warning dialog will be displayed to ensure you really meant to choose this option.

### Exit

This will exit ZAP.  
If you have not saved the current session then you will be given the option to do so.


Note that [add-ons](/docs/desktop/start/features/addons/) can add additional menu items.

## See also

|   |                                                |                                       |
|---|------------------------------------------------|---------------------------------------|
|   | [The top level menu](/docs/desktop/ui/tlmenu/) |                                       |
|   | [UI Overview](/docs/desktop/ui/)               | for an overview of the user interface |
