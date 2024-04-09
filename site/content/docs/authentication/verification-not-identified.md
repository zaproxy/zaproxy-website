---
title: "Auth: Verification Not Identified"
type: page
layout: decision-action
action: Try Exploring the App Manually"
---

#### Next Step: [Run the Auth Tester](../auth-tester-results/) again

This time try exploring the app by clicking on links and filling in fields once ZAP has successfully logged in.

You may need to keep [Increasing the "Time to Wait"](../app-does-not-load) in order to give you enough time
to explore the app.

#### Next Step: [Manually Identify Verification Handling](../manual-verification/)

If ZAP can still not identify the verification handling then you will need to do it manually.

##### Background

The Authentication Tester relies on the app to make enough background calls for it to identify the session handling and verification URL.

Traditional web apps might not make enough background calls for ZAP to use, so in this case you need to explore the app 
in order to give ZAP more to work with.