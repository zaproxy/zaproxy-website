---
# This page was generated from the add-on.
title: Authentication
type: userguide
weight: 6
---

# Authentication

ZAP can handle a wide range of authentication mechanisms.  
If you are new to ZAP automation then the best place to start is the ZAP [Authentication Decision Tree](/docs/authentication/) (external link).


Each [Context](/docs/desktop/start/features/contexts/) has:

* an [Authentication Method](/docs/desktop/start/features/authmethods/) which defines how authentication is handled. The authentication is used to create Web Sessions that correspond to authenticated webapp [Users](/docs/desktop/start/features/users/).
* an [Authentication Verification Strategy](/docs/desktop/start/features/authstrategies/) which defines how ZAP should detect when messages correspond to authenticated requests.

You can use any combination of Authentication Method and Verification Strategy which works for your webapp.


In order to perform the authentication of a user on a website /
in a webapp, the Authentication Method and Verification Strategy define how the authentication
is done (the process), while the necessary credentials (the exact
identifiers) are dependent on the user, so, in ZAP, they are
configured in the Users.


The generic **main steps** that are needed to configure authentication for a web application
are the following:

1. Configure a ZAP [Context](/docs/desktop/start/features/contexts/) for the web application, ensuring that all required URLs are included
2. Set up the [Session Management Method](/docs/desktop/start/features/sessionmanagement/) for the context to the one that is used in your app
3. Configure the [Authentication Method](/docs/desktop/start/features/authmethods/) for your application, specifying all the requirements
4. Configure the [Authentication Verification Strategy](/docs/desktop/start/features/authstrategies/) for your application, specifying at least one of the *Logged In Indicator* or the *Logged out indicator*
5. Configure one or more [Users](/docs/desktop/start/features/users/) for the context that directly correspond to the authentication method for the context

## Configuration example

A configuration example showing how to fully configure a webapp that uses *form-based authentication* ,
*cookie-based session management* and returns full HTML pages (including an indication of whether the user is logged in) is seen below:

1. Set up a context for the web application
2. Set up the session management method to *Cookie-based Session Management*
3. Make sure your browser proxies everything through ZAP and log into your application using the browser
4. Go to ZAP and identify the request that was done for the login (most usually it's a HTTP POST request containing the username and the password and possibly other elements)
5. If there is an anti-CSRF token in the login request, add the token name in [Options Anti CSRF screen](/docs/desktop/ui/dialogs/options/anticsrf/), if not present.
6. Set up the authentication method:
    1. Right click on the authentication request and 'Flag as Context... Form-based Auth Login Request'
    2. A window will be opened already containing the request URL and the parameters (if any). Use the dropdown options to select which of the parameters correspond to the username and to the password
7. Set up the authentication verification strategy:
    1. Select a message which has a suitable logged in or logged out indicator e.g. a logout link or a welcome message
    2. Select the relevant text, right click on it and select either 'Flag as Context... Authentication Logged-in Indicator' or 'Flag as Context... Authentication Logged-out Indicator' as appropriate
8. Define as many users as you need in the Session Properties -\> Users section.

After configuring authentication, various actions are available in ZAP. For example, you can now select the user in the Spider dialogue.   
Most of the steps above apply as well for other authentication methods. The only things that change when trying to configure authentication using a different method is step 6. Instead of that, select the authentication method required from the drop-down list and configure it as needed. More details about configuring each type of authentication can be found in the [Authentication Methods](/docs/desktop/start/features/authmethods/) page and in the [Context Session screens](/docs/desktop/ui/dialogs/session/contexts/).

## Forced User Mode {#forceduser}

When Forced User Mode is enabled then all interactions that go through ZAP for a given context will be updated to be from the perspective of the specified User.  
The Forced User Mode is enabled via a button in the toolbar (the one with the user and the lock) and is configured via Session Properties -\> Forced User Mode.  
**Important:** Forced User Mode is just intended for manual testing and should not be used in automation - there are much better alternatives.

## Authentication Header Environmental Variables {#envvars}

A set of environmental variables are available which allow you to easily add an authentication header to all of the requests that are proxied through ZAP or initiated by the ZAP tools, including the spiders and active scanner:

* ZAP_AUTH_HEADER_VALUE - if this is defined then its value will be added as a header to all of the requests
* ZAP_AUTH_HEADER - if this is defined then its value will be used as the header name - if it is not defined then the standard [Authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) header will be used
* ZAP_AUTH_HEADER_SITE - if this is defined then header will only be included in sites who's name includes its value

## Configured via

|   |                                                                              |   |
|---|------------------------------------------------------------------------------|---|
|   | [Session Properties dialog](/docs/desktop/ui/dialogs/session/contexts/#auth) |   |

## See also

|   |                                                                       |                                                                                                                                   |
|---|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
|   | [Youtube tutorial](https://youtu.be/cR4gw-cPZOA)                      | of the Authentication, Session Management and Users Management features of ZAP \[external link to https://youtu.be/cR4gw-cPZOA\]. |
|   | [UI Overview](/docs/desktop/ui/)                                      | for an overview of the user interface                                                                                             |
|   | [Features](/docs/desktop/start/features/)                             | provided by ZAP                                                                                                                   |
|   | [Session Contexts Dialog](/docs/desktop/ui/dialogs/session/contexts/) | for an overview of the Session Properties                                                                                         |
|   | [Users](/docs/desktop/start/features/users/)                          | for an overview of Users                                                                                                          |
|   | [Anti-CSRF tokens](/docs/desktop/start/features/anticsrf/)            | for an overview of anti-CSRF tokens                                                                                               |

## Official Videos

|   |                                                                                                               |
|---|---------------------------------------------------------------------------------------------------------------|
|   | [ZAP In Ten: Authentication: Basic and Digest](https://play.sonatype.com/watch/ttqKANDzJCAdBUkPrsz6Td) (9:57) |
|   | [ZAP In Ten: Authentication: Form Based](https://play.sonatype.com/watch/B1vhaLSUsme7eA5hU8WeGB) (12:59)      |
|   | [ZAP In Ten: ADDO Automation and Authentication Workshop](/addo-auth-workshop/) (8 videos)                    |
