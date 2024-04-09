---
title: "Authentication - Concepts"
tags: 
- authentication
- guide
type: page
aliases:
  /docs/authentication/concepts/
---

These are the concepts that you will need to understand in order to configure authentication in ZAP.

### Contexts

ZAP [contexts](/docs/desktop/start/features/contexts/) are a way of relating a set of URLs together.
You can define any contexts you like, but it is expected that a context will correspond to a web application.

Authentication data (including the session handling and user credentials) is associated with a context, so your context should represent the entire app that is protected by authentication.

### Sessions Handling

HTTP is a stateless protocol ([RFC2616](https://www.ietf.org/rfc/rfc2616.txt) section 5), where each request and response pair is independent of other web interactions. [^1]

A session ID or token binds the user authentication credentials (in the form of a [user session](/docs/desktop/start/features/sessionmanagement/)) to the user HTTP traffic.
These IDs are typically passed in the HTTP request headers, but some apps have been known to pass them via URL parameters or even POST data.

ZAP has to understand how an app manages the user session in order to set the required ID in the HTTP requests that it sends.
ZAP has built in support for Cookie and HTTP Authentication Session Management but it can also be extended to support any session handling
method using scripts.

### Authentication Methods

Authentication is the process of verifying that an individual, entity or website is whom it claims to be. Authentication in the context of web applications is commonly performed by submitting a username or ID and one or more items of private information that only a given user should know. [^2]

There are a very large number of ways that apps handle authentication - in ZAP these are called authentication methods.
ZAP has built in support for common authentication methods but it can also be extended to support any authentication method using scripts.

### Credentials

User credentials are typically a user identifier and one or more pieces of information that only the user should know.

ZAP has to have access to the user credentials in order to authenticate as that user.

You can configure as many users as you need and can specify which one to use when using the ZAP spiders and active scanner.

### Verification Strategies

Application sessions do not typically remain valid indefinitely. They can be invalidated after a period of time, if a logout feature is activated or in some cases if the app detects that the user is doing something inappropriate.

ZAP relies on verification strategies in order to tell if a user is still authenticated to the app.
If it appears that the user is no longer authenticated during an authenticated scan then ZAP will re-authenticate using the configured credentials.

[^1]: [OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
[^2]: [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

{{<prevnext prevUrl="../manual-auth/" prevTitle="Manual authentication" nextUrl="../handling-auth-yourself/" nextTitle="Handling authentication yourself in automation">}}