---
# This page was generated from the add-on.
title: Contexts
type: userguide
weight: 10
---

# Contexts


Contexts are a way of relating a set of URLs together.  

You can define any contexts you like, but it is expected that a context will correspond to
a web application.  

It is recommended that you define a new contexts for each web application
that makes up the system you are testing, and set them in scope as you test each one.


Contexts are defined as a set of regular expressions (regexs) which are applied to all of the URLs in the
[Sites Tree](/docs/desktop/start/features/sitestree/).  

**Note:** The regular expressions must match the whole URL.


You can configure contexts via:

* Right click menu items in the in the Sites or History tab
* The [Session Contexts dialogs](/docs/desktop/ui/dialogs/session/contexts/).

## See also

|   |                                                                  |                                                                           |
|---|------------------------------------------------------------------|---------------------------------------------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                                 | for an overview of the user interface                                     |
|   | [Features](/docs/desktop/start/features/)                        | provided by ZAP                                                           |
|   | [Structural Modifiers](/docs/desktop/start/features/structmods/) | controls which change how ZAP represents the structure of the application |
