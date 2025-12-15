---
# This page was generated from the add-on.
title: Options Active Scan screen
type: userguide
weight: 1
---

# Options Active Scan screen


This screen allows you to configure the [active scan](/docs/desktop/start/features/ascan/) options:

### Number of Hosts Scanned Concurrently

The maximum number of hosts that will be scanned at the same time.  

Increasing this may put extra strain on the computer ZAP is running on.

### Concurrent Scanning Threads per Host

The number of threads the scanner will use per host.  

Increasing the number of threads will speed up the scan but may put extra strain on the computer ZAP is running on and the target host.

### Persist Temporary HTTP Messages

If this option is selected the active scanner will persist all HTTP messages sent while active scanning, which allows to further inspect them (e.g. custom passive scanners, manually).
They are temporary and removed once the session is closed, for cases where the HTTP messages are not necessary it is advised to disable this option for performance reasons (I/O, disk space).  

The option is disabled by default when running ZAP [inline](/docs/desktop/cmdline/), where the sessions are usually discarded.

### Max Results to List

The number of results that will be shown in the Active Scan tab.  

Displaying a large number of results can significantly increase the time a scan takes.

### Maximum Rule Duration (minutes; 0 is unlimited)

The maximum time any individual rule can run for in minutes. Zero means no limit. This can be used to prevent rules that are taking an excessive amount of time.

### Max alerts any rule can raise

The maximum number of alerts any rule can raise during the active scan, scan rules that reach this value are skipped.  

**Note:** The maximum might be exceed due to threading.

### Maximum Scan Duration (minutes; 0 is unlimited)

The maximum time that the whole scan can run for in minutes. Zero means no limit. This can be used to ensure that a scan is completed around a set time.

### Delay When Scanning (In Milliseconds)

The delay in milliseconds between each request.  

Setting this to a non zero value will increase the time an active scan takes, but will put less of a strain
on the target host.

**Note:** This option has been deprecated and it will be removed in a future release. Use the Network \> Rate Limit option instead. The latter option
allows to enforce the rate at which the requests are sent while the Delay When Scanning doesn't.

### Inject plugin ID in header for all active scan requests.

If this option is selected the active scanner will inject the request header `X-ZAP-Scan-ID` with the ID of
the scan rule that's sending the HTTP requests.

### Handle anti-CSRF tokens.

If this option is selected then the active scanner will attempt to automatically request
[anti CSRF](/docs/desktop/start/features/anticsrf/) tokens when required.  

Previously this would have forced the scanner to only use one thread, but that is no longer the case.
You are strongly recommended to check that the anti CSRF tokens are being correctly generated if more than one thread is being used,
for example using custom [tags](/docs/desktop/start/features/tags/) to check for success / failure patterns in the response.

### In Attack Mode prompt to rescan nodes when scope changed.

If this option is selected then when you select Attack [mode](/docs/desktop/start/features/modes/) you will be prompted to choose whether to rescan nodes in scope.  

If the option is not selected then the following option will control whether the nodes are rescanned.

### In Attack Mode always rescan nodes when scope changed.

If this option is selected then when running in Attack [mode](/docs/desktop/start/features/modes/) all nodes in scope will be rescanned if the scope changes.  

This is not recommended for large sites as it could take a long time.

### Default Active Scan Policy

The [Scan Policy](/docs/desktop/start/features/scanpolicy/) that is used by default when you start an active scan.

### Attack Mode Scan Policy

The [Scan Policy](/docs/desktop/start/features/scanpolicy/) that is used for scanning in
Attack [mode](/docs/desktop/start/features/modes/).

### Max Progress Chart in Mins

The maximum time in minutes for which response codes will be charted in the
[Scan Progress dialog](/docs/desktop/ui/dialogs/scanprogress/).  

To disable the chart the option should be set to zero minutes.

## See also

|   |                                                                |                                                 |
|---|----------------------------------------------------------------|-------------------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                               | for an overview of the user interface           |
|   | [Options dialogs](/docs/desktop/ui/dialogs/options/)           | for details of the other Options dialog screens |
|   | [Active Scan options](/docs/desktop/ui/dialogs/options/ascan/) |                                                 |
