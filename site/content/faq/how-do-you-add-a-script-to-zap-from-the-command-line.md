---
title: "How do you add a script to ZAP from the command line?"
type: faq
category: Howtos
---

You can set any of the ZAP configuration file values via the command line, the
trick is knowing what to set.

The best way to do this is to set whatever you want to configure via the ZAP
UI and then work out what values ZAP sets in the config.xml file.

To add a script you'll need to use the following cmdline options (with the
values changed to match your requirements of course;)

    
    
    -config script.scripts.name="Remove Strict-Transport-Security"
    -config script.scripts.engine="Mozilla Zest"
    -config script.scripts.type=proxy
    -config script.scripts.enabled=true
    -config script.scripts.file="/home/user/scripts/Remove Strict-Transport-Security.zst"
    
