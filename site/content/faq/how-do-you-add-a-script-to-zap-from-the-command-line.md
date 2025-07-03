---
title: "How do you add a script to ZAP from the command line?"
type: faq
category: Howtos
weight: 4
---

If you are doing anything non-trivial with ZAP from the command line then you should use the 
[Automation Framework](/docs/automate/automation-framework/).
This has direct support for [scripts](/docs/desktop/addons/script-console/automation/).

If you cannot use the Automation Framework for any reason then you'll need to use the following [command line](/docs/desktop/cmdline/) options (with the values changed to match your requirements of course;)
    
    -config script.scripts.name="Remove Strict-Transport-Security"
    -config script.scripts.engine="Mozilla Zest"
    -config script.scripts.type=proxy
    -config script.scripts.enabled=true
    -config script.scripts.file="/home/user/scripts/Remove Strict-Transport-Security.zst"

See also the FAQ: [How do you find out what key to use to set a config value on the command line?](/faq/how-do-you-find-out-what-key-to-use-to-set-a-config-value-on-the-command-line/)
