---
# This page was generated from the add-on.
title: Script Console Options
type: userguide
weight: 3
---

# Script Console Options

## When the Script in the Console Changes on Disk

This setting allows you to configure the default behaviour when a script open in the Script Console changes on disk,
for example if it was updated in another code editor. There are three options to choose from:

* **Ask Each Time**: This will prompt you each time the script is changed on disk, allowing you to choose whether to keep the script in the console or replace it with the changed script.
* **Keep Script**: This will always keep the script in the console, even if it is changed on disk.
* **Replace Script**: This will always replace the script in the console with the changed script.

Note that if there are unsaved changes to the script, you will always be prompted to choose which version to keep.

## Font

### Font Name

Set the name of the font used in the script console.
A monospaced font is used by default.

### Font Size

Set the size of the font used in the script console.
The default font size is 12.

## Code Style

### Tab Size

Set the width by which the code should be indented when you press Tab.
The unit is the width of one space character.
The default tab size is 4.

### Use Tab Character

Use tab characters (`\t`) instead of spaces for indentation.
The size of one tab character is determined by the **Tab Size** setting.
The default is to use spaces.
