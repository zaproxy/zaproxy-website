---
# This page was generated from the add-on.
title: Options Scripts screen
type: userguide
weight: 16
---

# Options Scripts screen


This screen allows you to configure the script options:

### Enable scripts loaded from directories

If this option is selected then all of the scripts loaded from the specified directories will be enabled by default.

### Directories

A list of directories from which scripts will be loaded. ZAP will read (and write) the scripts using the character encoding UTF-8.

The scripts must be in subdirectories named after the relevant script type (such as 'active', 'passive', 'proxy' etc) and must have an appropriate extension for the script language used.

Scripts that cannot be written to will be added to the Templates section.

The ZAP community scripts repository is a good option to add: <https://github.com/zaproxy/community-scripts>

You will need to clone a local copy but you can then access all of the scripts that the community add, and even upload your own scripts via GitHub pull requests.

## See also

|   |                                                      |                                                 |
|---|------------------------------------------------------|-------------------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                     | for an overview of the user interface           |
|   | [Options dialogs](/docs/desktop/ui/dialogs/options/) | for details of the other Options dialog screens |
