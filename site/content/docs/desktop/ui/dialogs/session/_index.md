---
# This page was generated from the add-on.
title: Session Properties dialog
type: userguide
weight: 13
---

# Session Properties dialog


This allows you to set the session properties and is made up of the following screens:

### General

This allows you to set the session name and description.

### Exclude from Proxy

This allows you to manage the URLs which will be ignored by the local proxies.

### Exclude from Scanner

This allows you to manage the URLs which will be ignored by the scanner.

### Exclude from Spider

This allows you to manage the URLs which will be ignored by the spiders (standard and AJAX).

### Contexts

A set of screens for managing [contexts](/docs/desktop/start/features/contexts/)

## URL regexs

In the *Exclude from \** dialogs, you can enter regular expressions to define excluded URLs. While you can escape a single meta-character with a backslash, you can also use the **\\Q...\\E** escape sequence. All the characters between the **\\Q** and the **\\E** are interpreted as literal characters. E.g. \\Q\*\\d+\*\\E matches the literal text \*\\d+\*. This escape sequence is used in ZAP when you exclude URLs via some context menus.   
**Note:** If your URL contains a "\\E", then you have to do the following steps when using the **\\Q...\\E** escape sequence:

* Open the escape sequence
* Close the escape sequence before the "character" \\E
* Escape the backslash
* Open after the "\\E" another escape sequence;
* Close the escape sequence as normally would.


Example: subdomain.example.com/path?a=**\\E** \&moredata=2 should appear as *\\Qsubdomain.example.com/path?a=\\E* **\\\\E** *\\Q\&moredata=2\\E*

## Accessed via

|   |                                                      |                                   |
|---|------------------------------------------------------|-----------------------------------|
|   | [Top level File menu](/docs/desktop/ui/tlmenu/file/) | 'Session Properties...' menu item |

## See also

|   |                                      |                                       |
|---|--------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)     | for an overview of the user interface |
|   | [Dialogs](/docs/desktop/ui/dialogs/) | for details of the dialogs or popups  |
