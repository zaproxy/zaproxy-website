---
# This page was generated from the add-on.
title: Options API screen
type: userguide
weight: 5
---

# Options API screen


This screen allows you to configure the [API](/docs/desktop/start/features/api/) options:

### Enabled

If enabled then the API is available to all machines that are able to access ZAP's proxies that expose the API.  

### Web UI Enabled

If enabled then the API Web UI is available to all machines that are able to access ZAP's proxies that expose the API. To access the API Web UI point your browser to the host and port that ZAP is listening on.  

### Secure Only

If enabled then the API will only be available via HTTPS. Otherwise it will be available via both HTTP and HTTPS.  

### File Transfer Enabled {#filexferenabled}

If enabled then files can be transfered to and from ZAP via the API. This option is only available if the API key is *not* disabled. For more details see [File Transfer](/docs/desktop/start/features/api/#filexfer).


You can also enable this option via the command line using the parameter: `-config api.filexfer=true`

### Transfer Directory {#xferdir}

The directory used to transfer files to and from ZAP via the API. This option is only available if the API key is *not* disabled. For more details see [File Transfer](/docs/desktop/start/features/api/#filexfer).


You can also set the Transfer Directory via the command line using: `-config api.xferdir=/full/path/to/dir`

### API Key

A key that must be specified on all API 'actions' and some 'other' operations.  
The API key is used to prevent malicious sites from accessing the ZAP API.  
It is strongly recommended that you set a key unless you are using ZAP in a completely isolated environment.  

### Addresses permitted to use the API

By default only the machine ZAP is running on is able to access the ZAP API.  
You can allow other machines access to the API by adding suitable regex patterns.  
You should only add IP addresses that you trust.  
Note that the ZAP API also now checks the host header, so that must also be one of the permitted addresses.

### Disable the API Key

Selecting this option disables the API key.  
This is not recommended unless you are using ZAP in a completely isolated environment, as it allows malicious sites to access the ZAP API.

### Do not require an API key for safe operations

If enabled then the API key is not required for Views or Other operations that are considered 'safe', in other words operations that do not make any changes to ZAP. Such operations do however give access to ZAP data such as alert, messages, and file system paths. They can also be used by web applications to detect the presence of ZAP.

### Report permission errors via API

If enabled then ZAP will report permission errors via the API, which can be used by web applications to detect the presence of ZAP. This is not a serious problem in a safe environment but if you are using ZAP against potentially malicious sites then you should not enable it.

### Report error details via API

If this option is selected then more error details are returned via the API.  
This is not recommended except for debugging purposes as these error messages can leak information to malicious sites.  
Note that the full error details are always written to the ZAP log file.

### Autofill API key in the API UI

If this option is selected then the API key is automatically included in the API UI.  
This is not recommended unless you are using ZAP in a completely isolated environment, as it allows malicious sites to access the ZAP API Key.  

### Enable JSONP

Selecting this option enables the JSONP format.  
This can be useful for some applications, but it is generally not recommended as it increases the ZAP attack surface area, ie the features that a malicious site can abuse.  
If JSONP is enabled then all API operations using JSONP (including views) will require the API key to prevent malicious sites from accessing sensitive information maintained by ZAP, such as session keys.

## See also

|   |                                                      |                                                 |
|---|------------------------------------------------------|-------------------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                     | for an overview of the user interface           |
|   | [Options dialogs](/docs/desktop/ui/dialogs/options/) | for details of the other Options dialog screens |
