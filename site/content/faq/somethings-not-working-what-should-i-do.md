---
title: "Somethings not working. What should I do?"
type: faq
category: Troubleshooting
weight: 1
---

Somethings not working as you expect with ZAP, and you're not sure if it's a
bug or a misunderstanding of how ZAP works.

The following steps may well help:

###  Check for Updates

Click on the 'Manage Add-ons' button on the toolbar and then click on the
'Check for updates' button.

Note that there will not be a 'Check for updates' button if you've configured
ZAP to check on startup (which is recommended).

If there is a new version of ZAP and/or new versions of any of the add-ons
then you should install them.

We are constantly improving ZAP and the add-ons and newer versions may fix the
problems that you are experiencing.

###  Check the ZAP Documentation

ZAP includes a User Guide is available [online](/docs/desktop/).

It can be accessed via the 'Help / OWASP ZAP User Guide' menu, the help
button on the right hand side of the top toolbar, via help buttons on
individual dialogs or via the F1 key (which is context dependant).

The [Frequently Asked Questions](/faq/) cover a range of issues that lots of people come across.

The [ZAP user group](https://groups.google.com/group/zaproxy-users) is searchable and has a wide range of discussions about all aspect of ZAP.

###  Check the Log File

Look in the zap.log file to see if any errors have been logged. This is either
in the directory you specified via the '-dir' [command line](/docs/desktop/cmdline/) option or in
the [default directory](/faq/what-is-the-default-directory-that-zap-uses/) if you didn't specify one.

If there are error messages that appear to indicate a Java memory problem then
try increasing the memory available via the [JVM options](/docs/desktop/ui/dialogs/options/jvm/).

###  Ask on the ZAP User Group

The [ZAP user group](https://groups.google.com/group/zaproxy-users) is a great
place to ask questions about using ZAP. All of the ZAP developers are on the
user group as are many knowledgeable ZAP users who may also be able to help
you.

Be aware that lots of webapps do weird and wonderful things, often in bizarre ways. We can't second guess them, so when asking for help you'll need to give us sanitized examples to help us figure out what's going on.

###  Ask on Slack

You can chat with the ZAP team on [Slack](/slack/), if you have not already joined then you will need an [invite](/slack/invite/).

###  Raise an Issue

You can raise issues (bugs or new features) at the [issue
tracker](https://github.com/zaproxy/zaproxy/issues/new/choose).

{{< blockquote-alert type="warning">}}
Please do not ask questions as issues - they will be closed and you will be redirected to the [ZAP user group](https://groups.google.com/group/zaproxy-users).
{{< /blockquote-alert >}}
