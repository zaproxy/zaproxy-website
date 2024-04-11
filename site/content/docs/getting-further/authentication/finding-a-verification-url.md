---
title: "Finding a Verification URL"
tags: 
- authentication
- guide
type: page
aliases:
  /docs/authentication/finding-a-verification-url/
---

If you need to set up ZAP to handle authentication then you really need to find a suitable verification URL in your app.

You should always try [Auto Detection](../auto-detection) first as if this works it will find a suitable verification URL for you.

The verification URL will be one that you can request from the [Manual Request Editor dialog](/docs/desktop/addons/requester/dialogs/) and which will send a response that allows you to work out whether you are logged in or not. What that looks like will entirely depend on your app, but could be something like:

* Any page or API endpoint which returns the authenticated user's Id
* A user details page or API endpoint
* A user preferences page or API endpoint
* A page containing a login link
* A page containing a logout link

For traditional apps this may be easy to find - all HTML responses may give you enough information.

Modern Single Page Apps may take more time to find a suitable URL.

Explore your app manually with a browser proxied through ZAP while authenticated and examine all of the responses from the app.
Look for anything in the browser which indicated you are logged in, then [search](/docs/desktop/ui/tabs/search/) for that string in the responses returned to ZAP.
Once you have identified a potential URL then logout and make sure that the response is different.

If your app supports authentication then you will be able to find a verification URL like this - if the app responds exactly the same to all authenticated and unauthenticated requests then there would be no point in supporting authentication.

{{<prevnext prevUrl="../handling-auth-yourself/" prevTitle="Handling authentication yourself" nextUrl="../session-handling/" nextTitle="Session handling">}}