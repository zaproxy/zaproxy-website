---
title: "Auth: Browser Fails to Launch"
type: page
layout: decision-action
action: Fix any Browser Issues
---

##### Follow the FAQ [How can I fix 'browser was not found'?](/faq/how-can-i-fix-browser-was-not-found/)

#### Next Step: [Run the Auth Tester](../auth-tester-results/) again

Keep following the FAQ until you can launch a browser, or until you get to the end of the FAQ.

If you cannot get ZAP to launch a browser then you will need assistance:

#### Next Step: [Ask for Support](../ask-for-support/)


##### Background

Browsers are updated regularly, and if you do not have the latest webdriver add-on installed then they will
probably not work. Updating all of the add-ons solves most problems, but the FAQ covers more than that.

You will need to make sure ZAP can launch browsers, for a range of reasons including:
* Authenticating via Login forms
* Using the AJAX spider to explore modern apps
* Testing for DOM XSS vulnerabilities
