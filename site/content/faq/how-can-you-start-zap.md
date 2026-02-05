---
title: "How can you start ZAP?"
type: faq
category: Howtos
weight: 4
---

Again, this depends on the OS:

###  Windows

There are 3 options on Windows:

1. Via the desktop icon (assuming you selected this option during installation)
1. Via the 'Start' menu:
   * All Programs
     * ZAP 
       * Zed Attack Proxy 
         * `ZAP <version>`
1. Via the 'zap.bat' command line script in the [installation directory](/faq/where-is-zap-installed/)

###  Linux

On Linux there's just a 'zap.sh' script in the [installation
directory](/faq/where-is-zap-installed/), although you can create a desktop icon manually as
well.

###  Mac OS

Generally, most user's tend to use the Mac OS build, which is a ordinary Mac
OS app that can be started as any other app: Double-Click on the app to start
it. 

If you have installed ZAP in '/Applications' then you can run it from the command line using 
'/Applications/ZAP.app/Contents/Java/zap.sh'

If you have installed ZAP in another directory then change the initial '/Applications' part accordingly.

If you have downloaded the Linux package, which can also be run on Mac OS,
you can use the 'zap.sh' script, as per linux.
