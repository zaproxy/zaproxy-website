---
# This page was generated from the add-on.
title: Encode / Decode / Hash dialog
type: userguide
weight: 1
cascade:
  addon:
    id: encoder
    version: 0.7.0
---

# Encode / Decode / Hash dialog

This allows you to encode, decode or hash text.

## Common Fields

The dialog has one field that is common to all of the tabs:

### Text to be encoded/decoded/hashed:

This field is for the text that you want to be encoded, decoded or hashed.  
If any text is selected when the dialog is invoked then it will be put in this field. The other fields will be updated dynamically if you change the text  

## Toolbar

* ![](/docs/desktop/addons/encode-decode-hash/images/ui-tab--plus.png) Add New Tab - Adds a new tab to the dialog.
* ![](/docs/desktop/addons/encode-decode-hash/images/ui-tab--delete.png) Remove Selected Tab - Removes the selected (or current) tab from the dialog.
* ![](/docs/desktop/addons/encode-decode-hash/images/ui-output--plus.png) Add Output Panel to Current Tab - Adds an output panel to the current tab.
* Reset - Reset all the tabs/panels to their default state.

## Default Dialog Tabs \& Panels

In its default state the Encode/Decode/Hash dialog displays tabs and output panels with the following setup:

### Encode tab fields

* Base 64 Encode
* Base 64 URL Encode
* URL Encode
* Full URL Encode
* ASCII Hex Encode
* HTML Encode
* Full HTML Encode
* JavaScript Encode

### Decode tab fields

* Base 64 Decode
* Base 64 URL Decode
* URL Decode
* Full URL Decode
* ASCII Hex Decode
* HTML Decode
* JavaScript Decode

### Hash tab fields

* SHA256 Hash
* SHA1 Hash
* MD5 Hash

### Illegal UTF-8

* 2 byte
* 3 byte
* 4 byte

### Unicode

* Escaped Text
* Unescaped Text

## Predefined Encode / Decode / Hash Processors

### Encoders

#### 2 byte Illegal UTF-8

Will display with an illegal UTF-8 character sequence with 2 bytes.

#### 3 byte Illegal UTF-8

Will display illegal UTF-8 character sequence with 3 bytes.

#### 4 byte Illegal UTF-8

Will display an illegal UTF-8 character sequence with 4 bytes.

#### ASCII Hex Encode

Will display the ASCII hex encoding of the text you enter.

### Base 64 Encode

Will display the base 64 encoding of the text you enter.  

### Base 64 URL Encode

Will display the base 64 URL encoding of the text you enter. Base64URL is a modification to the primary base 64 standard the purpose of which is the ability to use the encoding result as filename or URL address. Base64URL is described in [RFC 4648](https://tools.ietf.org/html/rfc4648), which notes that the standard base 64 alphabet includes characters that are invalid for URLs and file names (for example: plus sign and question mark are problematic). The main standard will encode `<<???>>` to `PDw/Pz8+Pg==` while Base64URL will convert it to `PDw_Pz8-Pg`.

#### Escaped Unicode Text

Will display escaped Unicode characters. For example, the text `Açores` would be encoded as `%u0041%u00e7%u006f%u0072%u0065%u0073`.

#### HTML Encode

Will display the HTML encoding of the text you enter. For example, the text `"piñata"` would be encoded as `&quot;pi&ntilde;ata&quot;`.

#### Full HTML Encode

Will display the full HTML encoding of the text you enter. For example, the text `<script>` would be encoded as `&#60;&#115;&#99;&#114;&#105;&#112;&#116;&#62;`

#### JavaScript Encode

Will display escaped JavaScript literals of the text you enter. For example, the text `"2￠"` would be encoded as `\"2\uFFE0\"`.

#### URL Encode

Will display the URL encoding of the text you enter.

#### Full URL Encode

Will display the full URL encoding of the text you enter (all characters converted to HEX and percent prepended).

#### Unescaped Unicode Text

Will display the unescaped Unicode characters. For example, the text `%u0041%u00e7%u006f%u0072%u0065%u0073` would be decoded as `Açores`.

### Decoders

#### ASCII Hex Decode

Will display the ASCII hex decoding of the text you enter.  
If there is no valid decoding then the field will be disabled.

#### Base 64 Decode

Will display the base 64 decoding of the text you enter.  

#### Base 64 URL Decode

Will display the base 64 URL decoding of the text you enter. Base64URL is a modification to the primary base 64 standard the purpose of which is the ability to use the encoding result as filename or URL address. Base64URL is described in [RFC 4648](https://tools.ietf.org/html/rfc4648), which notes that the standard base 64 alphabet includes characters that are invalid for URLs and file names (for example: plus sign and question mark are problematic).

#### HTML Decode

Will display the HTML decoding of the text you enter. For example, the text `&quot;pi&ntilde;ata&quot;` would be decoded as `"piñata"`.

#### JavaScript Decode

Will display the unescaped JavaScript literals of the text you enter. For example, the text `\"2\uFFE0\"` would be decoded as `"2￠"`.

#### URL Decode

Will display the URL decoding of the text you enter.

#### Full URL Decode

Will display the URL decoding of the text you enter (percent signs removed and HEX decoded).

### Hashers

#### MD5 Hash

Will display the MD5 hash of the text you enter.

#### SHA1 Hash

Will display the SHA1 hash of the text you enter.

#### SHA256 Hash

Will display the SHA256 hash of the text you enter.

### Custom

Custom "Encode/Decode" scripts can be created/added to the Scripts Tree and used by custom Output Panels.

## Accessed via

|   |                                                                                                                                        |
|---|----------------------------------------------------------------------------------------------------------------------------------------|
|   | Tools menu 'Encode/Decode/Hash...' item                                                                                                |
|   | Many text areas such as the Output tab, Scripts console, Request and Response panels via 'Encode/Decode/Hash...' right click menu item |
