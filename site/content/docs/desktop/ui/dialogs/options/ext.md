---
# This page was generated from the add-on.
title: Options Extensions screen
type: userguide
weight: 13
---

# Options Extensions screen

This screen allows you to enable/disable extensions that are
available to ZAP, either core or added by [add-ons](/docs/desktop/start/features/addons/).

### Enable/Disable Extensions

Enabled extensions will be loaded by ZAP, thus adding the functionalities provided by those extensions. Disabled extensions will not be loaded.

### Core Extensions

Core extensions are extensions that if disabled will impair ZAP's minimal functionality. Extensions marked as core cannot be disabled.


*Note: Core extensions can be disabled through the configuration
file, although it's not recommend.*

### Extensions' Dependencies

Extensions may depend on other extensions to work. When one of those extensions (dependencies) is disabled it will make ZAP automatically disable all the extensions that depend on them. So it may happen that when disabling one extension other extensions (that depend on it) will also be disabled. Automatically disabled extensions will not be allowed to be enabled until all the dependencies are enabled.


*Note: You will need to restart ZAP for the changes to take
effect.*

## See also

|   |                                                      |                                                 |
|---|------------------------------------------------------|-------------------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                     | for an overview of the user interface           |
|   | [Options dialogs](/docs/desktop/ui/dialogs/options/) | for details of the other Options dialog screens |
