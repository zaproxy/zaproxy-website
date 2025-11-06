---
title: "Diagnosing Authentication Problems"
tags: 
- authentication
- guide
type: page
aliases:
  /docs/authentication/diagnosing-auth-problems/
---

If you ask a question related to authentication on one of the ZAP forums then you will be directed here.

We know that the ZAP authentication documentation needs improving.
One of the reasons why it has not been improved is that we are too busy trying to answer authentication questions :wink:.

We are currently focusing on improving the authentication docs which means that we will not have as much time for answering specific questions.
This is why you have been redirected here :smile:.

### Understand Your App

Authentication is hard.
We would love to be able to program ZAP to automatically understand all forms of authentication but that is a _long_ way off.

We probably do not have access to your app, and even if we did we would not have the time to understand it for you.

This means that you need to understand exactly how your app handles authentication (and session handling) in order to configure ZAP to handle it for you.

### Use the Authentication Tester

The [Authentication Tester](/blog/2023-05-23-authentication-tester/) makes it significantly easier to configure
ZAP to handle most applications with login forms.

It shows you what has worked, what has failed, and generates a context you can use for testing. 

If for any reason you cannot use the ZAP Desktop then you can use the
[BrowserAuthTest.yaml](https://github.com/zaproxy/community-scripts/blob/main/other/af-plans/BrowserAuthTest.yaml) Automation Framework plan.
This generates an [Authentication Report](/docs/desktop/addons/authentication-helper/auth-report-json/)
which you can either analyse yourself or import into ZAP via the "Auth Diags" tab.


### Common Problems

#### Failure to Access the App

See the FAQ: [Why can't ZAP connect to my web application?](/faq/why-cant-zap-connect-to-my-website/)

#### Failure to Fill in the Login Form

Watch the browser when it is launched from the Authentication Tester, or check the screenshots in the Authentication Report.

If you do not see the correct login form then try to find and configure the correct URL.

If there is not a fixed URL you can use then select a fixed URL that has a link to the login URL.

If the application is using anti-automation features like CAPTCHAs or OTPs then you should disable them.

You can configure ZAP to handle TOTP but it will complicate your setup.

If you need to fill in more information than just username and password then you should record a client side script. This can be done from within the Authentication Tester.

If the recording fails then open the login page in a browser and check to see if the HTML element that the recording fails on is present. The failing element should be specified in the error message.

If your app generates different IDs each time the login form is generated then you 
will either need to change your app to make it more automation friendly, or hand craft a Zest client side script to cope with them. XPath expressions may work more effectively that IDs.

#### Failure to Identify Session or Verification

Watch the browser when it is launched from the Authentication Tester, or check the screenshots in the Authentication Report.

If the app does not fully load then increase the "Time to Wait" until you can see that it has fully loaded.

Have a look at the domains in the Sites Tree. If there are any that you know are part of your app (such as APIs) or which could be related to authentication then add these domains in the Authentication Tester: Domains tab.

If you are using the Authentication Tester then keep an eye on the passive scan threads in the [footer](/docs/desktop/ui/footer/).
If there are still passive scan threads running when the browser is closed then the passive scan rules which
detect the session and verification details may not have run.

You can try disabling all of the passive scan rules except for the following ones:
* [Authentication Request Identified](/docs/alerts/10111/)
* [Session Management Request Identified](/docs/alerts/10112/)
* [Verification Request Identified](/docs/alerts/10113/)

If you still see failures then get in touch with us via the [User Group](https://groups.google.com/group/zaproxy-users) so that we can keep improving ZAP.

You can also try to configure them manually:

* [Session Handling](/docs/getting-further/authentication/session-handling/)
* [Finding a Verification URL](/docs/getting-further/authentication/finding-a-verification-url/)

### Other Resources

There are a lot of other resources that can help you:

* [ZAP Authentication](/docs/authentication/) - the docs we are currently working on
* [Official ZAP Videos](/videos-list/) - search for "auth" in the "Tags" field
* [User Group](https://groups.google.com/group/zaproxy-users) - search for "auth" or similar, more recent answers are likely to be more relevant
* [Developer Group](https://groups.google.com/group/zaproxy-develop) - search for "auth" as per the User Group. Please don't post your auth questions here, this group is for topics related to adding/changing ZAP code or add-ons. Having said that there are some historic threads that may assist you.
* [FAQ: How can ZAP automatically authenticate via forms?](/faq/how-can-zap-automatically-authenticate-via-forms/) - note that the Diagnosing Problems section applies to most forms of authentication