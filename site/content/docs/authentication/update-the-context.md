---
title: "Auth: Preparing to Test"
type: page
layout: decision-action
action: Update the Context
---

Either ZAP has identified all of the information required, or you have found the parts it could not identify.

We now need to update the context created by the Authentication Tester to test it.

To edit the context double click on the 'Authentication Test' context in the Sites tree.

![ZAP Sites tab, Authentication Test context highlighted](/img/docs/authentication/sites-auth-test.png)

#### Action: Change the Context name

Select the 'Authentication Test' node in the Session Properties tree.

Change the 'Context Name' to something more meaningful to you.
This will help you to remember what it is for, 
and will prevent it from getting overwritten if you run the Authentication Tester again. 

#### Action: Configure Authentication Verification

Select the 'Authentication' node under your context in the Session Properties tree.

If ZAP automatically identified a suitable verification URL without your help then change the verification to 'Auto-Detect'.

![ZAP Context dialog, Authentication panel](/img/docs/authentication/context-verif.png)

If you had to explore the app manually before ZAP could identify the Verification URL then leave everything as is.

If you had to manually identify the Verification URL then you will need to identify and configure one or both of:
* Regex pattern used to identify Logged In messages
* Regex pattern used to identify Logged Out messages

#### Action: Configure Session Handling

Select the 'Session Management' node under your context in the Session Properties tree.

If ZAP automatically identified the session handling without your help then change the verification to 'Auto-Detect'.

If you had to explore the app manually before ZAP could identify the session handling then leave everything as is.

If you had to manually identify the session handling then you will need to identify and configure the correct
session management details.

#### Next Step: [Test Your Context](../test-the-context/)