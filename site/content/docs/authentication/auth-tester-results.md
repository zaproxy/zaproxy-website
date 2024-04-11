---
title: "Auth: Tester Outcome"
type: page
layout: decision-question
question: What happens when you run the Authentication Tester?
answers:
- answer: Browser fails to launch
  link: ../browser-fails-to-launch/
- answer: Login page not found
  link: ../cannot-access-app/
- answer: Fails to find username or password field
  link: ../login-fields-not-found/
- answer: Browser logs in, but app doesn't load in time
  link: ../app-does-not-load/
- answer: Fails to identify session
  link: ../session-not-identified/
- answer: Fails to identify verification URL
  link: ../verification-not-identified/
- answer: Everything passes
  link: ../update-the-context/
addBreadcrumbs: true
---

The [Authentication Tester](/blog/2023-05-23-authentication-tester/) will help us understand which parts of the authentication process ZAP can automatically handle.

If ZAP can automatically handle things then it will make your life easier.
Even if it cannot handle everything it may still give you a better starting point.