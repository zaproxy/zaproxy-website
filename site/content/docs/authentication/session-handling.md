---
title: "Authentication - Session Handling"
tags: 
- authentication
- guide
type: page
---
{{<vinyard-script>}}
If ZAP is handling authentication then it needs to handle sessions as well - logging in is of no use if ZAP does not maintain the session as the target app will just treat ZAP as being unauthenticated.

[Session management](/docs/desktop/start/features/sessionmanagement/) configuration is part of a ZAP context.

* In the ZAP desktop it is configured via the Context [Session Management](/docs/desktop/ui/dialogs/session/contexts/) screen.
* In the [Authentication Framework](https://www.zaproxy.org/docs/automate/automation-framework/) it is part of a context defined in the [environment](/docs/desktop/addons/automation-framework/environment/).
* In the API it is configured via endpoints underneath the [sessionManagement](/docs/api/#zap-api-sessionmanagement) component.

ZAP supports Cookie and HTTP Authentication Session Management out of the box.

If your app uses another mechanism then you can handle that using a custom [session management script](https://github.com/zaproxy/community-scripts/tree/main/session).

Applications may implement session handling server-side, client-side or on both sides.

Session Management is difficult to test in isolation so you will typically need to also configure ZAP to handle authentication before you can test it.

### Server-side Session Management

Server-side Session Management is nearly always handled by HTTP headers and is typically straightforward to configure - getting hold of the authentication tokens to put in the headers may well be harder.

If you do not know what type of session management your application uses then authenticate manually to your app while proxying through ZAP and look at the responses from the app.

#### Cookie-based Session Management

If you can see any `Set-Cookie` headers being returned then it is likely that your app is using cookie-based session management.

Make a request to your [verification URL](../finding-a-verification-url/) while authenticated and then open that request in the [Manual Request Editor dialog](/docs/desktop/ui/dialogs/man_req/).

Check that there is a `Cookie` header in the request and that when you `Send` the request then it indicates you are logged in.

If that is the case then remove the `Cookie` header from the request and `Send` again - if the response indicates you are no longer logged in then your app uses Cookie-based session management.

Configure your context to use this - you do not need any other configuration, such as which cookies to use.

#### HTTP Authentication Session Management

If you see a `WWW-Authenticate` response header and then a `Authorization` header then your app is using [HTTP Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication).

As above, make a request to your [verification URL](../finding-a-verification-url/) while authenticated and then open that request in the [Manual Request Editor dialog](/docs/desktop/ui/dialogs/man_req/).

Check that there is an `Authorization` header in the request and that when you `Send` the request then it indicates you are logged in.

If that is the case then remove the `Authorization` header from the request and `Send` again - if the response indicates you are no longer logged in then your app uses HTTP Authentication session management.

Configure your context to use this - you do not need any other configuration.

### Client-side Session Management

Client-side Session Management is handled in the browser. It cannot be handle by ZAP automatically and is typically harder to configure.
However you will need to configure ZAP to handle it if you need to use the [Ajax Spider](/docs/desktop/addons/ajax-spider/) or the [DOM XSS Scanner rule](/docs/desktop/addons/dom-xss-active-scan-rule/) while authenticated.

You will typically need to inject authentication tokens into the browser using ZAP [selenium](https://github.com/zaproxy/community-scripts/tree/main/selenium) scripts.

This video explains and demonstrates how to set ZAP up to handle both server-side and client-side session management with 
[OWASP Juice Shop](https://owasp.org/www-project-juice-shop/):

{{< vinyard uuid="igf3A8UdZ6QAGiFjEpLH86" >}}

{{<prevnext prevUrl="../finding-a-verification-url/" prevTitle="Finding a verification URL" nextTitle="Authentication methods (coming soon)">}}