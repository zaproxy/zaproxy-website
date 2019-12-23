---
title: "How can I add an application icon for ZAP to Fedora / Gnome 3?"
type: faq
category: Howtos
weight: 4
---

As root create a file called `/usr/share/applications/owasp-zap.desktop` containing:

    [Desktop Entry]
    Name=OWASP ZAP
    Exec=/opt/owasp/ZAP_2.8.0/zap.sh
    Icon=/opt/owasp/ZAP_2.8.0/zap.ico
    Categories=Programming;Security;
    Type=Application

Make sure you correct the paths to match your environment!
