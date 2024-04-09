---
title: "Authentication - Make your Life Easier"
tags: 
- authentication
- guide
type: page
aliases:
  /docs/authentication/make-your-life-easier/
---

Authentication is a key way of restricting access to an app.
Some authentication mechanisms also make it significantly harder to use tools like ZAP, even for those people who have permission to use them.

### Test in a Safe Environment

Testing with valid credentials in a production environment is a really bad idea. 
You will pollute data stores with invalid data and you always run the risk of taking the service down or impacting valid users in some other way.

### Disable Security Controls

You are in a safe environment and you want to test the app not the security controls, so disable any firewalls or other security features 
that you use in production.

### Disable or Simplify Authentication

If your app can be run with full functionality and without authentication then just do that - in this case you are testing the app, not the authentication controls.

Single Sign On systems can be especially hard to work with. 
If you can use a simpler authentication mechanism like HTTP auth or a simple POST form then do that - these options will be much
easier to set up and much less likely to break your testing.
Some SSO providers do document ways to authenticate automatically - see the next page.

Two factor authentication (2FA) can be even harder to work with.
ZAP does not work by magic - if you want to perform automated scanning but need a 2FA token then you are going to need to be able to 
get that token to ZAP. If you cannot do that then you will not be able to automate your authentication.

If you are testing your own app then seriously consider what options you have you making it easier for you to test it using automation.

### Test with the ZAP Desktop

Although you probably want to use authentication in automation it is still much easier to test it in the ZAP Desktop.

You will be able to see the requests and responses sent through ZAP and be able to change them on the fly in order to see what works and what does not work.

{{<prevnext nextUrl="../auto-detection/" nextTitle="Auto Detection">}}
