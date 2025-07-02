---
title: "Authentication Methods"
tags: 
- authentication
- guide
type: page
aliases:
  /docs/authentication/authentication-methods/
---
Authentication Methods are the means by which ZAP actually authenticates to a web app.

The following methods are supported: 

### Manual Authentication

This is the default method, and means that you are [handling authentication yourself](../manual-auth/).

### Auto Detect

[Auto-Detect Authentication](/docs/desktop/addons/authentication-helper/autodetect-auth/) indicates that the 
[Authentication Request Identification](/docs/desktop/addons/authentication-helper/auth-req-id/) passive scan rule should attempt to configure the Authentication method automatically.

### Browser Based Authentication

[Browser Based Authentication](/docs/desktop/addons/authentication-helper/browser-auth/) works in the browser and will attempt 
to fill in the correct credentials for the specified user.

This is often the most effective option, especially for modern apps which you need to explore using the 
[Ajax Spider](/docs/desktop/addons/ajax-spider/).

Browser Based Authentication can be configured with manual authentication steps.
These can handle any number of forms and fields, as well as TOTP.

### Client Script Authentication

[Client Script Authentication](/docs/desktop/addons/authentication-helper/client-script/) works in the browser
and runs the configured client side Zest script, which will typically have been [recorded in a browser](/docs/desktop/addons/client-side-integration/record/).

This is a good option for modern apps which have a more complex authentication flow than can be handled by 
Browser Based Authentication.

### HTTP / NTLM Authentication

This method handles both [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) 
and NTLM authentication.
You will need to supply the hostname, port and realm. 

### Form-based Authentication

> [!WARNING]
> This is no longer recommended as it is not effective for modern apps.

[Form-based Authentication](/docs/desktop/ui/dialogs/session/context-auth/#form-based-authentication) handles traditional HTML FORMs with user and password fields which are submitted using a standard HTTP GET or POST.

### JSON-based Authentication

> [!WARNING]
> This is no longer recommended as it is not effective for modern apps.

[JSON-based Authentication](/docs/desktop/ui/dialogs/session/context-auth/#json-based-authentication) handles form-based authentication where the user and password fields are submitted as a JSON object using an HTTP POST.

### Script-based Authentication

> [!CAUTION]
> This option gives you complete control, but it is hard to get right, and so only recommended as a last resort.

[Script-based Authentication](/docs/desktop/ui/dialogs/session/context-auth/#script-based-authentication) allows you to use a script which will give you complete control over the authentication process.

For examples see the [authentication](https://github.com/zaproxy/community-scripts/tree/main/authentication) directory 
in the Community Scripts repo.

{{<prevnext prevUrl="../session-handling/" prevTitle="Session handling" nextTitle="Verification Strategies (coming soon)">}}