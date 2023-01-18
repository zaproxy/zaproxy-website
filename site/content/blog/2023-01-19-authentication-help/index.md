---
title: "Authentication Help"
summary: >
  Handling authentication in automation is hard, but help is on its way.
images:
- https://www.zaproxy.org/blog/2023-01-19-authentication-help/images/auth-help.png
type: post
tags:
- blog
- authentication
date: "2023-01-19"
authors: 
    - simon
---

![ZAPbot authentication help](images/auth-help.png)

All aspects of authentication are hard.
But if you are automating ZAP scans on web apps then its something you just have to deal with.

ZAP has very powerful features to help authenticating to apps but apart from some simple cases the support that ZAP provides is very low level. You have to understand exactly how your app's authentication works.

### Why Authenticate?

If an app does anything of use then it will typically need to limit who is allowed to use it.
While there are options such as limiting access via IP address, the vast majority of web apps implement some form of authentication.

If you are using ZAP to manually test your app then authentication is less of a problem. 
You should have permission to test the app and have access to valid credentials - you can manually enter these via the app's login page and therefore get access to the interesting features.

However, if you are automating ZAP then you cannot manually enter any credentials.

Without valid credentials ZAP will probably only be able to access the publicly accessible parts of your app - these are not usually the ones which can do 'interesting' things. ZAP will therefore not be able to explore or attack the functionality that is the most important to test.

### Turning Authentication Off

You should always aim to [make your life easier](/docs/authentication/make-your-life-easier/).

If you can completely disable authentication in a safe environment then that is an ideal option.

Unfortunately this is not possible with many apps.

### Why Not Handle Authentication Yourself?

You may be able to handle authentication yourself without configuring ZAP to understand it.

If your app allows access using a specific authentication header which you can generate on demand then you can tell ZAP to use that via [authentication environmental variables](/docs/authentication/handling-auth-yourself/#authentication-env-vars).

You can also write scripts (either ZAP ones or external ones) which login to your app and then inject the relevant authentication tokens in the right places.

However, you should be aware that handling authentication yourself is risky:

1. ZAP will try to test everything it finds, unless you specifically configure it not to.
Most apps will have an option to Log Out - if ZAP uses this then from that point on its requests may be unauthenticated.
1. ZAP also submits lots of requests that look malicious. Some applications may detect these sort of requests and then log ZAP out.
1. Apps change over time. If the authentication process changes then it may break your scripts and ZAP will once again be scanning unauthenticated.

### Why Configure ZAP to Understand Authentication?

ZAP has a more sophisticated understanding of authentication.

If configured correctly then ZAP will be able to tell whether or not its requests are authenticated and if they are not then it will automatically authenticate again.

It also maintains a set of [statistics](/internal-statistics/) which allow you to see whether or not ZAP is successfully authenticating to your app.
The [Automation Framework](/docs/automate/automation-framework/) makes it easy to [test statistics](/docs/desktop/addons/automation-framework/authentication/#authentication-statistics) so that automated tests can fail if the authentication starts to fail.

### What Does ZAP Need to Know?

ZAP needs to know the following information:

* How to make an authentication (login) request
* How the app's session handling works
* How to tell if requests from ZAP are authenticated (the verification strategy)

ZAP may also need to know how to store authentication tokens in a browser, depending on how your client side code works.

To be able to configure ZAP to handle authentication you therefore need to know _exactly_ how your app's authentication and session handling works as well as how your client side handles session tokens.

This can be tricky to find out, and if you configure any of it slightly wrong then authentication will fail.

### Help is on its Way!

We know authentication is hard to figure out and configure in all security tools, but we have plans in to make it much easier in ZAP.

There is a new [Authentication Helper](/docs/desktop/addons/authentication-helper/) add-on - this is available right now on the [ZAP Marketplace](/addons/) and will be included in the weekly releases.

Right now it is quite simple, but many more enhancements are planned.

By default it will raise an [information level alert](/docs/alerts/10111/) if an authentication request is identified.
The 'Other Info' field in the alert contains a set of `key=value` lines which identify any relevant fields - these contain enough information to configure ZAP authentication (but just authentication, not session handling or verification).

In addition to that, if the request is in a context which is set to “Manual Authentication” then this rule will attempt to automatically change the authentication to match the request identified.

### What is Coming Next?

The following changes are planned:

* Header based session handling - a new session management method which will support an arbitrary number of headers based on data from the authentication response.
* Session handling detection - automatically detecting common session management methods.
* Session handling configuration - automatically configuring ZAP to handle session management in a similar way to the authentication handling above.
* Verification detection - reporting a set of URLs that appear to be suitable for authentication verification.
* Verification configuration - automatically configuring ZAP to handle authentication verification.

These changes will hopefully allow ZAP to automatically configure itself to handle a range of common authentication and session management strategies.

We know that there are many cases which will be more difficult to handle, including SSO, but we intend to keep improving ZAP's authentication handling to make it easier in all cases.

### How Can You Help?

We need your feedback!

Install the new [Authentication Helper](/docs/desktop/addons/authentication-helper/) add-on and see if it correctly identifies authentication requests for your apps.

Let us know whether it works, and if not it would be great to know as many details that you can safely share about your app.

Keep an eye out for the new features which we will be adding soon, try them out and give us feedback on those as well.

We _can_ make it much easier to configure authentication in ZAP, but only with your help!