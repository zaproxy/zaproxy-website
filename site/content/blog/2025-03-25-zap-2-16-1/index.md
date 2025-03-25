---
title: "ZAP 2.16.1"
summary: "ZAP 2.16.1 has just been [released](/docs/desktop/releases/2.16.1/). This is a bug fix release, along with some minor enhancements"
images:
- https://www.zaproxy.org/blog/2025-03-25-zap-2-16-1/images/blog-2-16-1.png
type: post
tags:
- blog
- release
date: "2025-03-25"
authors:
    - simon
---
ZAP 2.16.1 has just been [released](/docs/desktop/releases/2.16.1/)!

This release was made possible thanks to [Checkmarx](https://checkmarx.com/) 
who employ 3 of the [Core Team](/docs/team/) to work fulltime on ZAP 🎉

This is a bug fix release, along with some minor enhancements:

### Use Main Output Tab for Scripts

The [Script Console](/docs/desktop/addons/script-console/) no longer includes its own "Script Output" panel.
Instead it uses the main [Output](/docs/desktop/ui/tabs/output/) tab.

### Support Sub-tabs in Output Tab

The [Output](/docs/desktop/ui/tabs/output/) tab now supports sub-tabs.
The Scripts add-on will add one tab for each script that generates any output, making it much easier to see where output messages come from.

### API Support for Plugable Authentication and Session Management

The API now supports plugable Authentication and Session Management methods, which means you can configure modern
options like [Browser Based Authentication](/docs/desktop/addons/authentication-helper/browser-auth/).

### Authentication Enhancements

Many enhancements have been made to ensure ZAP handles authentication more easily and effectively,
including support for TOTP.

### Windows Native Decorations Support

ZAP now supports Native Decorations on Windows systems, providing a more unified and visually pleasing experience.

### AJAX Spider URL Count

The [AJAX Spider](/docs/desktop/addons/ajax-spider/) no longer counts URLs that are out of scope. This may affect any tests you have in place.

### Release Notes

See the [release notes](/docs/desktop/releases/2.16.1/) for dependency updates, other enhancements, and fixes.  
  
Thank you to everyone who contributed to this release.
