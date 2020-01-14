---
title: "Fonts in ZAP look bad on my system - what should I do?"
type: faq
category: Desktop UI
weight: 7
---


This seems to come up on various Linux distros from time to time. For example:
<https://github.com/zaproxy/zaproxy/issues/3051>

The following suggestions may let you work past the issue.

  1. Try starting ZAP from the [command line](/docs/desktop/cmdline/) instead of starting it from a shortcut (such as a Plasma/KDE button, dock icon, etc.)
  2. Try adding the following to `/etc/environment`:

    
    
    _JAVA_OPTIONS='-Dawt.useSystemAAFontSettings=on'
