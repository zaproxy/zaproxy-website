---
# This page was generated from the add-on.
title: Options Applications screen
type: userguide
weight: 1
---

# Options Applications screen


This screen allows you to configure the [applications](/docs/desktop/addons/invoke-applications/) that
can be invoked.  
By default there are no applications available, you need to add
all of the applications that you want to use.

### Display Name

The name that will be used for this application in ZAP.   

### Full Command

The full path of the application you want to invoke.   
Only one command can be specified. If you want to run multiple commands in one go, or set up environmental variables, then you should create a script or batch file and then invoke this from ZAP.

### Parameters

The parameters that ZAP should pass to the command.   
The following tags may be used to pass parameters:

|   |                       |                                                                                                                                            |
|---|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
|   | %url%                 | the full url, e.g. 'http://localhost/test?a=b'                                                                                             |
|   | %site%                | the site, e.g. 'http://localhost:8080/'                                                                                                    |
|   | %host%                | the hostname, e.g. 'localhost'                                                                                                             |
|   | %port%                | the port, e.g. '80'                                                                                                                        |
|   | %cookie%              | the first cookie field from the request header (if any)                                                                                    |
|   | %postdata%            | the POST data sent, if any, with any newlines replaced with "\\n"                                                                          |
|   | %msgid%               | the HTTP message id to fetch data from the API (/JSON/core/view/message/?id=$msgid), does not alway exist, will return -1 if no message id |
|   | %header-{{ header }}% | the request header by name (if any), e.g. `%header-user-agent%` would return the value of the User-Agent header                            |

So if a command accepted a URL using '-u' you would specify the parameters as: '-u %url%'

### Capture Output

If checked then the command run and any output it generates will be displayed on the *Output tab* .   
You should always use this option when running scripts or commands that do not have a UI.   
You can also use this option for troubleshooting - if an application does not run as expected then copy the command run and try it from a command line prompt.

### Output to Note

If checked then any output will be appended to a *Note* attached to the relevant *History tab* record.   
Note that some nodes in the *Sites tab* do not have associated *History tab* records - for those nodes this option will have no effect.
