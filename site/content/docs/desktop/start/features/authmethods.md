---
# This page was generated from the add-on.
title: Authentication Methods
type: userguide
weight: 7
---

# Authentication Methods


ZAP handles multiple types of authentication (called **Authentication
Methods** ) that can be used for websites / webapps. Each **[Context](/docs/desktop/start/features/contexts/)** has an Authentication Method
defined which dictates how authentication is handled. The
authentication is used to create Web Sessions that correspond to
authenticated webapp [Users](/docs/desktop/start/features/users/).

Authentication methods can be used in multiple places around
ZAP. Some of the examples include:

* defining Users and automatic login
* detection of authenticated/unauthenticated states
* performing automatic re-authentication

Multiple authentication methods have been implemented and the
system supports easy addition of new methods, according to user needs.
They main ones are described below.

## Manual Authentication {#manual}

This method allows users to perform the authentication manually
(e.g. authenticate in the browser while proxy-ing through ZAP) and
then select the corresponding HTTP session. As the actual
authentication is being performed by you, this method does not support
re-authentication in case the webapp logs a user out.
However if you do define an [Authentication Verification Strategy](/docs/desktop/start/features/authstrategies/)
then ZAP will maintain the authentication [statistics](/docs/desktop/start/features/stats/).

When using this authentication method, configuring a User for the context
require choosing an authenticated HTTP session.

## Form-Based Authentication {#formBased}


This method is used for websites / webapps where authentication is
done by submitting a form or performing a GET request to a 'login url'
using a 'username/password' pair of authentication credentials.
Re-authentication is possible. Configuration can be done using the [Session
Contexts Authentication screen](/docs/desktop/ui/dialogs/session/context-auth/) or using the contextual PopupMenu: *Flag as...
Form-Based Authentication Login Request*.

When using this authentication method, configuring a User for the context requires
setting up the *username/password* pair of credentials that are used for the form based
authentication.


If the application requires submitting the anti-CSRF token presented in the login page, ZAP will
handle it automatically. Make sure the token
name is configured in [Options Anti CSRF screen](/docs/desktop/ui/dialogs/options/anticsrf/).

## JSON-Based Authentication {#jsonBased}


This method is used for websites / webapps where authentication is
done by submitting a JSON object to a 'login url' using a 'username/password'
pair of authentication credentials.
Re-authentication is possible. Configuration can be done using the [Session
Contexts Authentication screen](/docs/desktop/ui/dialogs/session/context-auth/) or using the contextual PopupMenu: *Flag as...
JSON-Based Authentication Login Request*.

When using this authentication method, configuring a User for the context requires
setting up the *username/password* pair of credentials that are used for the
authentication.

## HTTP/NTLM Authentication {#httpAuth}


This method is used for websites / webapps where authentication is
enforced using the HTTP or NTLM Authentication mechanisms employing HTTP message headers.
Three authentication schemes are supported: Basic, Digest and NTLM.
Re-authentication is possible, as the authentication headers are sent with every authenticated
request. Configuration can be done using the [Session
Contexts Authentication screen](/docs/desktop/ui/dialogs/session/context-auth/).

When using this authentication method, configuring a User for the context requires
setting up the *username/password* pair of credentials that are used for the HTTP/NTLM authentication.

## Script-Based Authentication {#scriptBased}


This method is useful for websites / webapps where the authentication is a more complex one and some custom
scripts that handle the authentication process are beneficial. To use this method, you must first define an Authentication
[script](/docs/desktop/start/features/scripts/) which sends messages or performs other actions as needed by your web-application.
This script is then selected for use for a given Context
and it is called whenever an authentication is performed. Re-authentication is possible.
Configuration can be done using the [Session Contexts Authentication screen](/docs/desktop/ui/dialogs/session/context-auth/).

When using this authentication method, configuring a User for the context requires
setting up the a set of parameters defined in the script. For more details, see the provided Authentication Script examples.

## Configured via

|   |                                                                                          |   |
|---|------------------------------------------------------------------------------------------|---|
|   | [Session Contexts Authentication screen](/docs/desktop/ui/dialogs/session/context-auth/) |   |

## See also

|   |                                                                       |                                                                                                                                   |
|---|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
|   | [Authentication](/docs/desktop/start/features/authentication/)        | overview                                                                                                                          |
|   | [Youtube tutorial](https://youtu.be/cR4gw-cPZOA)                      | of the Authentication, Session Management and Users Management features of ZAP \[external link to https://youtu.be/cR4gw-cPZOA\]. |
|   | [UI Overview](/docs/desktop/ui/)                                      | for an overview of the user interface                                                                                             |
|   | [Features](/docs/desktop/start/features/)                             | provided by ZAP                                                                                                                   |
|   | [Session Contexts Dialog](/docs/desktop/ui/dialogs/session/contexts/) | for an overview of the Session Properties                                                                                         |
|   | [Users](/docs/desktop/start/features/users/)                          | for an overview of Users                                                                                                          |
|   | [Anti-CSRF tokens](/docs/desktop/start/features/anticsrf/)            | for an overview of anti-CSRF tokens                                                                                               |
