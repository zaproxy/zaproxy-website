---
# This page was generated from the add-on.
title: Encode / Decode / Hash dialog
type: userguide
weight: 5
---

# Encode / Decode / Hash dialog

This allows you to encode, decode or hash text.

## Common fields

The dialog has one field that is common to all of the tabs:

### Text to be encoded/decoded/hashed

This field is for the text that you want to be encoded, decoded or hashed.  
If any text is selected when the dialog is invoked then it will be put in this field. The other fields will be updated dynamically if you change the text  

## Encode tab fields

This tab has the following fields:

### Base 64 Encode

This read only field will be updated with the base 64 encoding of the text you enter.

### URL Encode

This read only field will be updated with the URL encoding of the text you enter.

### ASCII Hex Encode

This read only field will be updated with the ASCII hex encoding of the text you enter.

### HTML Encode

This read only field will be updated with the HTML encoding of the text you enter. For example, the text `"piñata"` would be encoded as `&quot;pi&ntilde;ata&quot;`.

### JavaScript Encode

This read only field will be updated with the escaped JavaScript literals of the text you enter. For example, the text `"2￠"` would be encoded as `\"2\uFFE0\"`.

## Decode tab fields

This tab has the following fields:

### Base 64 Decode

This read only field will be updated with the base 64 decoding of the text you enter.  
If there is no valid decoding then the field will be disabled.

### URL Decode

This read only field will be updated with the URL decoding of the text you enter.

### ASCII Hex Decode

This read only field will be updated with the ASCII hex decoding of the text you enter.  
If there is no valid decoding then the field will be disabled.

### HTML Decode

This read only field will be updated with the HTML decoding of the text you enter. For example, the text `&quot;pi&ntilde;ata&quot;` would be decoded as `"piñata"`.

### JavaScript Decode

This read only field will be updated with the unescaped JavaScript literals of the text you enter. For example, the text `\"2\uFFE0\"` would be decoded as `"2￠"`.

## Hash tab fields

This tab has the following fields:

### SHA1 Hash

This read only field will be updated with the SHA1 hash of the text you enter.

### MD5 Hash

This read only field will be updated with the MD5 hash of the text you enter.

## Illegal UTF-8

This tab has the following fields:

### 2 byte

This read only field will be updated with an illegal UTF-8 character sequence with 2 bytes.

### 3 byte

This read only field will be updated with an illegal UTF-8 character sequence with 3 bytes.

### 4 byte

This read only field will be updated with an illegal UTF-8 character sequence with 4 bytes.

## Unicode

This tab has the following fields:

### Escaped Text

This read only field will be updated with escaped Unicode characters. For example, the text `Açores` would be encoded as `%u0041%u00e7%u006f%u0072%u0065%u0073`.

### Unescaped Text

This read only field will be updated with the unescaped Unicode characters. For example, the text `%u0041%u00e7%u006f%u0072%u0065%u0073` would be decoded as `Açores`.

## Accessed via

|   |                                                      |                                               |
|---|------------------------------------------------------|-----------------------------------------------|
|   | [Top level Edit menu](/docs/desktop/ui/tlmenu/edit/) | 'Encode/Decode/Hash...' menu item             |
|   | [Break tab](/docs/desktop/ui/tabs/break/)            | 'Encode/Decode/Hash...' right click menu item |
|   | [Request tab](/docs/desktop/ui/tabs/request/)        | 'Encode/Decode/Hash...' right click menu item |
|   | [Response tab](/docs/desktop/ui/tabs/response/)      | 'Encode/Decode/Hash...' right click menu item |
|   | [Spider tab](/docs/desktop/ui/tabs/spider/)          | 'Encode/Decode/Hash...' right click menu item |

## See also

|   |                                      |                                       |
|---|--------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)     | for an overview of the user interface |
|   | [Dialogs](/docs/desktop/ui/dialogs/) | for details of the dialogs or popups  |
