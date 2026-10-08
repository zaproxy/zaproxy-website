---
# This page was generated from the add-on.
title: OAuth2 Authentication
type: userguide
weight: 10
---

# OAuth2 Authentication

This [add-on](/docs/desktop/addons/authentication-helper/) adds an authentication method which gets an OAuth2 access token directly from the token endpoint, without using a browser. It supports these grant types:

* `client_credentials`
* `password` (Resource Owner Password Credentials)

### Configuration

The following fields are set on the authentication method, and are shared by all of the users of the context:

|                  Field                  |                                                                            Description                                                                             |
|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Grant Type                              | The grant type to use.                                                                                                                                             |
| Token Endpoint                          | The URL of the token endpoint. This is the only mandatory field.                                                                                                   |
| Client ID, Client Secret                | The credentials of the OAuth2 client (see *Client Authentication* below).                                                                                          |
| Client Authentication Method            | How the client credentials are sent (see below).                                                                                                                   |
| Scope                                   | The scope(s) to request.                                                                                                                                           |
| Access Token Field, Refresh Token Field | The names of the fields in the token response which hold the tokens. Only change these if the server does not use the standard `access_token` and `refresh_token`. |
| Extra Token Parameters                  | Optional, see below.                                                                                                                                               |
| Record Diagnostics                      | Records each token request and response, to help troubleshoot a failing authentication. They can be viewed in the add-on's Diagnostics panel.                      |


The `password` grant type also needs a `username` and `password`, which are set in the
credentials of each user. The `client_credentials` grant type needs no user credentials.

### Client Authentication

The Client Authentication Method controls how the Client ID and Client Secret are sent to the token endpoint:

|         Value         |                                               Description                                               |
|-----------------------|---------------------------------------------------------------------------------------------------------|
| `client_secret_basic` | Sent using HTTP Basic Authentication. This is the default.                                              |
| `client_secret_post`  | Sent as parameters in the request body.                                                                 |
| `none`                | Only the Client ID is sent, in the request body. Use this for public clients that do not have a secret. |

### Extra Token Parameters

Some servers need additional parameters in the token request, for example `audience` for Auth0. Add them to the Extra Token Parameters table, which is sent with every token request. Use the Add, Modify and Remove buttons to manage the entries, each of which has a name and a value.


If a name is the same as one of the standard parameters, such as `scope`, the value from the table is used.

### Using the Access Token

The token response is made available to the context's Session Management Method. To send the access token with each request, use [Header Based Session Management](/docs/desktop/addons/authentication-helper/session-header/) with an `Authorization` header of `Bearer {%json:access_token%}`. The refresh token is available as `{%json:refresh_token%}`. These names are always used, even if the server uses different field names and you have set the Access Token Field and Refresh Token Field.

### Refresh Tokens

If the token response includes a refresh token, ZAP stores it automatically and uses it the next time the user needs to be authenticated again. If the server rejects it, ZAP falls back to the configured grant type. Servers which issue a new refresh token each time are supported.


**Note:** ZAP does not track when the access token expires. It only authenticates again when it detects that the user is
no longer logged in, so without Verification an expired token may continue to be sent.

### Verification

Verification is how ZAP detects that the user is no longer logged in, which triggers a new authentication. If Session Management and/or Verification are set to `autodetect`, they are configured automatically when authentication succeeds:

* **Session Management** is set to Header Based, using `Authorization: Bearer {%json:access_token%}`.
* **Verification** treats a `200 OK` response as logged in and a `401 Unauthorized` response as logged out. This works for most APIs protected by bearer tokens, but it does not check anything specific to your application.

To use a different check, configure the context's Verification yourself, for example with a poll URL.

## Automation Framework

OAuth2 Authentication can be configured in the environment section of an Automation Framework plan using:

```
      authentication:
        method: "oauth2"
        parameters:
          grantType:                   # String, one of: client_credentials, password. Default: client_credentials
          tokenEndpoint:               # String, the URL of the token endpoint, mandatory
          clientId:                    # String, the OAuth2 Client ID
          clientSecret:                # String, the OAuth2 Client Secret
          clientAuthMethod:            # String, one of: client_secret_basic, client_secret_post, none. Default: client_secret_basic
          scope:                       # String, the OAuth2 scope(s) to request
          accessTokenField:            # String, the JSON field name of the access token in the token response. Default: access_token
          refreshTokenField:           # String, the JSON field name of the refresh token in the token response. Default: refresh_token
          extraTokenParams:            # Map, extra parameters to send in the token request, e.g. { audience: "https://api.example.com" }
          diagnostics:                 # Boolean, record diagnostics for troubleshooting. Default: false
      sessionManagement:
        method: "headers"
        parameters:
          Authorization: "Bearer {%json:access_token%}"
```


Credentials for the `password` grant type are defined as usual under the user credentials, for example:

```
      credentials:
        username: …
        password: …
```


Latest code: [OAuth2AuthenticationMethodType.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/authhelper/src/main/java/org/zaproxy/addon/authhelper/OAuth2AuthenticationMethodType.java)
