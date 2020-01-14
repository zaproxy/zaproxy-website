---
# This page was generated from the add-on.
title: Session Context Authentication screen
type: userguide
weight: 3
---

# Session Context Authentication screen

This is one of the [Session Context screens](/docs/desktop/ui/dialogs/session/contexts/)
which allows you to manage the way in which [Authentication](/docs/desktop/start/features/authentication/) is being done for the Context.
After selecting the Authentication Method type, the options that need to be configured depend on the Authentication Method.

**Note:** Changing the authentication method after Users have been defined might cause its credentials to be reset,
as the type of user credentials need to match the authentication scheme. A confirmation dialogue will be shown when that happens.

#### Manual Authentication

No configuration is needed for this authentication method. Read [more](/docs/desktop/start/features/authentication/#manual)...

#### Form-Based Authentication

To configure this authentication method, you need to supply the **login url** , to which the login request is performed, the **request body** (POST data), if needed, and identify the **parameters** used to supply the 'username' and 'password'. If no request body is supplied, the login request is performed as a HTTP GET, otherwise an HTTP POST is used. The credentials themselves are configured in the [Users](/docs/desktop/ui/dialogs/session/contexts/#users) tab. The **login page** can also be supplied to indicate from where to obtain a new session (e.g. cookies) and regenerate [Anti CSRF tokens](/docs/desktop/start/features/anticsrf/) present in the **request body** . If the **login page** is not supplied it is used the **login url** .   
Read [more](/docs/desktop/start/features/authentication/#formBased)...

#### JSON-Based Authentication

To configure this authentication method, you need to supply the **login url** , to which the login request is performed, the **JSON object** (POST data, `application/json`), and identify the **parameters** used to supply the 'username' and 'password'. The credentials themselves are configured in the [Users](/docs/desktop/ui/dialogs/session/contexts/#users) tab. The **login page** can also be supplied to indicate from where to obtain a new session (e.g. cookies). If the **login page** is not supplied it is used the **login url** .   
Read [more](/docs/desktop/start/features/authentication/#jsonBased)...   
Examples of POST data:

* `{"username":"{%username%}","password":"{%password%}"}`
* `{"user":{"mail":"{%username%}","password":"{%password%}"}}`

where `{%username%}` and `{%password%}` indicate where the authentication credentials are set.

#### HTTP/NTLM Authentication

To configure this authentication method, you need to supply the **hostname** and the **port** of the server the authentication is done with and the **realm** the credentials apply to. The credentials themselves are configured in the [Users](/docs/desktop/ui/dialogs/session/contexts/#users) tab. Read [more](/docs/desktop/start/features/authentication/#httpAuth)...

#### Script-Based Authentication

To use this authentication method, you **first** need to write (and save) an **Authentication Script** using the **Scripts** tab (see the provided examples and templates for this script type in the Scripts tab). Then you need to supply the name of the script in the dropdown list. After selecting the script, you need to press the **Load** button, loading all the requirements of the script. Any parameters that you have specified as *required* or *optional* in the script will be shown in the interface to be defined. Their values are available to be used in the script, during the authentication, as seen in the provided examples for Authentication Scripts. Make sure that after doing any changes to the parameters required by the Authentication script you re-load the script. Otherwise, the parameters shown in the interface might not be the ones used during the authentication and errors might occur. The *credentials* used for each User during the authentication processed can be also specified in the Authentication Script and are configured in the [Users](/docs/desktop/ui/dialogs/session/contexts/#users) tab. Read [more](/docs/desktop/start/features/authentication/#scriptBased)...

## Accessed via

|   |                                                      |                           |
|---|------------------------------------------------------|---------------------------|
|   | [Top level File menu](/docs/desktop/ui/tlmenu/file/) | 'Properties...' menu item |

## See also

|   |                                                                       |                                          |
|---|-----------------------------------------------------------------------|------------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                                      | for an overview of the user interface    |
|   | [Dialogs](/docs/desktop/ui/dialogs/)                                  | for details of the dialogs or popups     |
|   | [Session Context screens](/docs/desktop/ui/dialogs/session/contexts/) | for details of the other Context screens |
|   | [Authentication](/docs/desktop/start/features/authentication/)        | for an overview of Authentication        |
