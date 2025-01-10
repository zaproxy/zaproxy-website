---
# This page was generated from the add-on.
title: Options Display screen
type: userguide
weight: 9
---

# Options Display screen


The Display screen allows you to configure:

### Images

If ZAP processes images.

### Show (local) CONNECT requests

If the HTTP CONNECT requests received by ZAP's proxies should be persisted in the current [session](/docs/desktop/ui/tlmenu/file/) and shown in the [History tab](/docs/desktop/ui/tabs/history/). The default is to not show those requests, they happen frequently (in preparation for TLS/SSL, WebSocket... connections) and, unless inspecting the behaviour of the client application, are not (usually) of much interest.

### Display

The layout of the 3 main panels.  
The following options are available:

* Maximise left (Sites) tab - The 'tree' panel containing the Sites tab extends for the full length of the left hand side. This will reduce the amount of space available to the 'information' panel.
* Maximise bottom (History etc) tabs - The 'information' panel extends for the full length of the bottom. This will reduce the amount of space available to the 'tree' panel.
* Full Layout - The selected tab takes up the full screen. This is useful when using ZAP on small screens.

### Response Panel Position

Allows to configure the position of the Response tab with respect to Request tab.  
The following options are available:

* Tabs Side by Side - The Request and Response tabs are side by side. This increases the information that can be displayed but means you cannot see both the request and response at the same time.
* Side by Side in Tab - The Request and Response panels are shown side by side in the same tab. This decreases the information that can be displayed but means you can see both the request and response at the same time.
* Panels Side by Side - The Request panel is shown to the left of the Response panel. This decreases the information that can be displayed but means you can see both the request and response at the same time.
* Request Shown Above Response - The Request panel is shown above the Response panel. This decreases the information that can be displayed but means you can see both the request and response at the same time.

The Response Panel Position option does not apply when the Display option is set to Full Layout.

### Show break buttons

The location of the break buttons.

### Large request view min size

The minimum size of a request body in bytes at which point a 'large request body' message will be shown instead of the actual body.  
This is to prevent very large bodies from slowing down the UI.  
Setting this value to -1 will result in request always being displayed no matter how large it is.

### Large response view min size

The minimum size of a response body in bytes at which point a 'large response body' message will be shown instead of the actual body.  
This is to prevent very large bodies from slowing down the UI.  
Setting this value to -1 will result in response always being displayed no matter how large it is.

### Output Tabs Time Stamp Options

Once you've enabled time stamps on the output tab you can configure the format you would like those time stamps to appear in. Either select a pre-defined format from the drop-down list or enter one of your own choosing. The format is based on Java's SimpleDateFormat. After choosing or entering a time stamp format if you press enter the example on the right will be updated to reflect your choice. If ZAP is unable to use a format you've entered then the example is displayed based on the Default format.

|                 |                        |
|-----------------|------------------------|
| Long \& Default | yyyy-MM-dd HH:mm:ss    |
| ISO8601         | yyyy-MM-dd'T'HH:mm:ssZ |
| Time Only       | HH:mm:ss               |

### Font Controls

The General Font section controls default text font and size used for the ZAP display, while the Work Panels Font section controls the font used for the top right section of ZAP's main window (Ex: Request/Response, Edit and Resend tool, etc.). If you set this to -1 then the system default size will be used.  
The 'Font Example' field will show you how large the default text will appear.  
**Note:** This setting will only take effect when ZAP is restarted.

### Look and Feel

Allows to choose the look and feel of ZAP. If empty the default is used, `Nimbus` in Windows and Linux, the native system look and feel in macOS.  
The system property `swing.defaultlaf` takes precedence over this option.

## See also

|   |                                                      |                                                  |
|---|------------------------------------------------------|--------------------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                     | for an overview of the user interface.           |
|   | [Options dialogs](/docs/desktop/ui/dialogs/options/) | for details of the other Options dialog screens. |

## External Links

|   |                                                                                                                 |
|---|-----------------------------------------------------------------------------------------------------------------|
|   | [Details of Java's SimpleDateFormat](https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html) |
