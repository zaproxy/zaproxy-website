---
title: "How can ZAP automatically authenticate via forms?"
type: faq
category: Howtos
weight: 4
---

ZAP supports form based authentication, and can automatically
(re)authenticate, for example when using the Spider or Active Scanner.

There are a few steps required to set this up which can be performed via
either the UI or the API.

Via the UI:

1. Explore your app while proxying through ZAP
2. Login using a valid username and password
3. Define a [Context](/docs/desktop/start/features/contexts/), e.g. by right clicking the top node of your app in the Sites tab and selecting ["Include in Context"](/docs/desktop/ui/tabs/sites/#include-in-context)
4. Find the 'Login request' in the Sites or History tab
5. Right click it and select ["Flag as Context"](/docs/desktop/ui/tabs/sites/#flag-as-context) / " Form-based Auth Login request"
6. Check that the Username and Password parameters are set correctly - they almost certainly wont be!
7. Find a string in a response which can be used to determine if the user is logged in or not
8. Highlight this string, right click and select "Flag as Context" / " Logged in/out Indicator" as relevant - you only need to set one of these, not both
9. Double click on the relevant Context node and navigate to the "Users" page - check the user details are correct, add any other users you want to use and enable them all
10. Navigate to the Context "Forced User" page and make sure the user you want to test is selected
11. The ![](/docs/desktop/images/fugue/forcedUserOff.png) "[Forced User Mode disabled - click to enable](/docs/desktop/ui/tltoolbar/#--forced-user-mode-on--off)" button should now be enabled
12. Pressing this button in will cause ZAP to resend the authentication request whenever it detects that the user is no longer logged in, i.e. by using the 'logged in' or 'logged out' indicator.

The [API documentation](/docs/api/#form-based-authentication) explains the above process using the ZAP API.

## Diagnosing problems

If the "Forced User Mode disabled - click to enable" button is not enabled
then you have not configured enough information for ZAP to authenticate -
double check that you have performed all of the above steps.

If you have enable forced user mode and are still not logged in when you
access your application then look at the requests in the History tab:

- If there is no login request then you have probably not chosen a suitable "logged in/out" indicator, try changing it and trying again
- If there is a login request then look at the requests and response and see if you can work out why the login failed - you may need to change the request or even make multiple requests

If you need to make multiple requests to login then the best option is to
record a [Zest](/docs/desktop/addons/zest/) authentication script and to test this in isolation first.

Links:

- Help Concept: [Authentication](/docs/desktop/start/features/authentication/)
