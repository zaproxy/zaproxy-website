---
title: "Getting Further with Authentication"
type: page
layout: links
links:
  - name: 'Authentication decision tree'
    link: /docs/authentication/
    desc: start here, it might just solve all of your authentication problems

  - name: 'How to make your life easier'
    link: make-your-life-easier/
    desc: authentication is hard, don't make it harder than it needs to be

  - name: 'Auto-Detection'
    link: auto-detection/
    desc: if this works for you then it will make your life so much easier

  - name: 'Documented SSO Solutions'
    link: documented-sso-solutions/
    desc: these SSO providers have documented ways to make integration with tools like ZAP easier

  - name: 'Manual authentication'
    link: manual-auth/
    desc: how you can authenticate when testing manually

  - name: ZAP authentication concepts
    link: concepts/
    desc: you will need to understand these in order to configure authentication in ZAP

  - name: 'Handling authentication yourself in automation'
    link: handling-auth-yourself/
    desc: how to handle authentication without as much ZAP configuration

  - name: Finding a verification URL
    link: finding-a-verification-url/
    desc: you will need one of these

  - name: Session handling
    link: session-handling/
    desc: how to configure ZAP to maintain sessions

  - name: Authentication methods
    link: authentication-methods/
    desc: how ZAP authenticates to an app

  - name: Verification strategies
    desc: Coming Soon

  - name: Diagnosing authentication problems
    link: diagnosing-auth-problems/
    desc: what to do if you are getting stuck

  - name: Monitoring with statistics
    desc: Coming Soon

cascade:
  EditableContent: true
  addBreadcrumbs: true
---

Most apps protect their main functionality using authentication.
If you cannot authenticate to the app then you will not be able to find the most interesting and impactful vulnerabilities.
Unfortunately authentication is hard, especially as there are so many different ways that apps handle authentication.

These pages will tell you everything you need to know about testing an app with valid credentials in ZAP,
they do not cover testing the authentication mechanism itself.
