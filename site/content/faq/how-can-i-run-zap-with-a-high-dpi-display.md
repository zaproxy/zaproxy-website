---
title: "How can I run ZAP with a high DPI display?"
type: faq
category: Desktop UI
weight: 7
---


If ZAP is displayed in a really tiny window then its probably because you have
a high DPI display.

The solution is easy - use Java 9+

If you need to have multiple versions of Java on Windows then you may find it
difficult to specify which one should be used. However changing the last line
of the existing `zap.bat` batch file to specify the path to the right version
of Java should solve this problem, e.g.:

    
    
    "C:\Program Files\Java\jdk-11.0.1\bin\java" %jvmopts% -jar zap-2.8.0.jar %*
    

If you can only use Java 8 on Windows 10 then you can set the compatibility
settings:

![image](https://user-
images.githubusercontent.com/3179932/45785579-c6a12080-bc64-11e8-92c4-9860a1437c4e.png)

On Linux you can try editing the zap.sh file to include the java command line
option like:

    
    
     -Dsun.java2d.uiScale=2.5
    

You can change the scale to which ever value works for you.

Finally, if all else fails, you can increase the Font Size via the ZAP Options
/ Display - this will also scale all of the images as well, although some
graphical elements such as checkboxes and tree expand/collapse controls may
not scale.

If none of these solutions work for you then raise an
[issue](https://github.com/zaproxy/zaproxy/issues/new) stating exactly which
system and versions of Java you are using.
