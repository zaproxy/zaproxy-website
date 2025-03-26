---
title: "How can I run ZAP with a high DPI display?"
type: faq
category: Desktop UI
weight: 7
---


If ZAP is displayed in a really tiny window then it's probably because you have
a high DPI display.

We believe High DPI displays and ZAP should behave properly with Windows and Java 11+.

If you're using Windows and encounter an issue then you can set the compatibility settings:

![Windows Settings High-DPI](/img/faq/windows-settings-high-dpi.png)

There may also be benefit in setting [JVM Options](/docs/desktop/ui/dialogs/options/jvm/) to include the Java command line
parameter: `-Dsun.java2d.uiScale=2.5`. You can change the scale to which ever value works for you.

Finally, if all else fails, you can increase the Font Size via the ZAP Options
/ Display - this will also scale all of the images as well, although some
graphical elements such as checkboxes and tree expand/collapse controls may
not scale.

If none of these solutions work for you then raise an
[issue](https://github.com/zaproxy/zaproxy/issues/new/choose) stating exactly which
system and versions of Java you are using.
