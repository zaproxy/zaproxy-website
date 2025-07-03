---
title: "Authentication Improvements"
summary: >
  We've made a lot of improvements in ZAP's handling of authentication - here's a summary of the most significant changes we've made.
images:
- https://www.zaproxy.org/blog/2025-07-03-authentication-improvements/images/blog-auth-improve.png
type: post
tags:
- blog
- authentication
date: "2025-07-03"
authors:
- simon
---

Configuring a DAST tool like ZAP to handle web based authentication is hard. Really hard.

APIs tend to be easier to handle as by nature they are designed for automation, but there are no real standards
around authenticating users to web apps so everyone seems to do it differently.

ZAP has been able to handle pretty much anything .. but only if you configure it to completely understand the target
application's authentication and session handling. This is not always easy to do.

If you are not able to get ZAP to handle an app's authentication then ZAP becomes much less useful in automation 
(where we know ZAP is used heavily), so this has been a significant focus for us over the last few months.

There's no 'one big change', just a series of significant changes that are all working together to make your life much easier.

In this blog post I'll give you an overview of those changes - we will be publishing more details "soon".

### Non-Regression

The first thing to stress is that although we have made lots of changes, if you have already configured ZAP to handle 
authentication for your apps then don't worry, everything should still continue to work as before.

We have not changed the underlying principals the ZAP uses. ZAP still needs to know:

* How to authenticate
* How to maintain the session
* How to verify the session is still valid

What we have done is to build on top of the existing ZAP features to make the whole process of configuring authentication much easier, at least in many cases.

### Authenticating in the Browser

Traditionally the usual way to get ZAP to handle authentication has been via either:

* [Form-based authentication](/docs/desktop/ui/dialogs/session/context-auth/#form-based-authentication)
* [JSON-based authentication](/docs/desktop/ui/dialogs/session/context-auth/#json-based-authentication)
* [Script-based authentication](/docs/desktop/ui/dialogs/session/context-auth/#script-based-authentication)

We do NOT recommend using these options going forwards!

We will not be removing them (so they will continue to work as now) but we do not recommend using them anymore and do not plan to make any enhancements to them.

Why do we not recommend them?

Most new web apps appear to be "modern", which is to say that they heavily depend on JavaScript.
The only way to effectively crawl these apps is by using a browser, either using the 
[AJAX Spider](/docs/desktop/addons/ajax-spider/) or the 
[Client Spider](/docs/desktop/addons/client-side-integration/spider/) (the "modern spiders").

The Form / JSON based methods can only send requests directly from ZAP to the target, and while scripts _can_ launch browsers these are "stand alone" browsers rather than the ones launched by the modern spiders.

We need the browsers launched by the modern spiders to be logged in, otherwise we will not be able to crawl the content
shown to an authenticated user.
While it is in _theory_ possible to inject the client state into a running browser, in practice it is application specific,
easy to get wrong, and in many cases not even possible.

Our solution to this problem is to authenticate in the browsers launched by the modern spiders, in exactly the same way that a user would.

As always, there is no "one size fits all" approach, so we have a few options.

The easiest way to test all of these options is via the updated [Authentication Tester](/docs/desktop/addons/authentication-helper/auth-tester/).

### Browser Based Authentication

This is the "easy" option :grin:

By default [Browser Based Authentication](/docs/desktop/addons/authentication-helper/browser-auth/) will attempt to fill in authentication forms as a user.
You only need to supply a suitable URL and valid credentials.

It can handle login dialogs with no direct URL link as long as there is a link to the form that ZAP can identify on the URL you specify.

It should be able to fill in login forms even if they are on multiple screens, as long as the only parameters it needs to set are for the credentials.

### Browser Based Authentication with Steps

[Browser Based Authentication](/docs/desktop/addons/authentication-helper/browser-auth/) can also handle manually defined
Authentication Steps. These are in effect a half-way house to full scripting. They are less powerful than full scripting, but 
will allow you to configure ZAP to handle arbitrary fields and pop-ups. 

You may find it easier to record a script for authenticating (as detailed below). 
However defining the steps can be done manually. 
Recording a client script is best done via one of the ZAP browser extensions,
and if you are working in an environment in which you cannot install any new browser extensions then this will not be an option for you.

The Authentication Steps also support TOTP fields! We will explain exactly how to configure this option soon.


### Client Script Authentication

[Client Script Authentication](/docs/desktop/addons/authentication-helper/client-script/) is a new way to authenticate, and is different from [Script-based authentication](/docs/desktop/ui/dialogs/session/context-auth/#script-based-authentication).

For Client Script Authentication only client side Zest scripts are supported.
The good news is that they are easy to create - you can record them in a browser.

You can record them in various ways:
* Via the updated [Authentication Tester](/docs/desktop/addons/authentication-helper/auth-tester/) - this is the recommended option
* Via the [Record a new Zest Script](/docs/desktop/addons/zest/#record-a-new-zest-script-button) button 
* Directly [in your browser](/docs/desktop/addons/client-side-integration/record/)

### Authentication Auto-Detection

The new authentication methods detailed above will make it much easier for you to configure ZAP to handle authentication,
but that's only half (or actually a third) of the story.
ZAP still needs to know how to maintain the session and a suitable verification URL.

As detailed in the [Authentication Auto-Detection](/blog/2023-05-02-authentication-auto-detection/) blog post, ZAP can now automatically detect these things in many cases.

Since that blog post we've made a lot of improvements, so if you tried this option before and it didn't work for you
then please try it again now.
Again, this can be done via the [Authentication Tester](/docs/desktop/addons/authentication-helper/auth-tester/).

### Logout Avoidance

As many of you will already know, you need to configure ZAP to exclude logout requests while performing authenticated
spidering or active scanning.

What you may not be aware of is that you also need to exclude logout UI elements from the AJAX Spider, otherwise it will also
be logged out and will no longer be able to crawl the authenticated content.

As this can be tricky to set up we have added new options to both the traditional spider and the AJAX Spider - 
"Logout Avoidance".

If you select this option on either of these spiders (it is supported via the desktop, Automation Framework and API) then
these spiders will not follow any links or click any elements which appear to be related to logging out.

Note that the Client Spider does not currently support this option, we hope to implement it soon.

Please try this new option out and let us know how you get on.
It _may_ become the default option at some point in the future, depending on your feedback.

### Authentication Report

Diagnosing authentication problems can be hard even when you have direct access to the app and valid credentials.

Trying to diagnose them without access to the app is _really_ hard!

To help with this we have created a new [Authentication Report](/docs/desktop/addons/authentication-helper/auth-report-json/).

This is a "standard" ZAP report, but will only provide useful information if you enable the auth diagnostics.

You can enable them via:

* The [Authentication Tester](/docs/desktop/addons/authentication-helper/auth-tester/)
* The Automation Framework using the "diagnostics" flag on:
  * [Browser Based Authentication](/docs/desktop/addons/authentication-helper/browser-auth/#automation-framework)
  * [Client Script Authentication](/docs/desktop/addons/authentication-helper/client-script/#automation-framework)

The JSON report contains lots of data which really helps us understand what is going on, including:

* Screenshots
* The HTTP(S) traffic
* Local storage
* Session storage
* Web elements

If you have problems with authentication then this is the set of information we need to solve them.
You can share this information with us privately, of course.

