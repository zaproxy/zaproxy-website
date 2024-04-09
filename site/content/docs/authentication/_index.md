---
title: "Authentication Decision Tree"
type: page
layout: decision-question
question: Does your app have a login page?
answers:
- answer: 'Yes'
  link: run-auth-tester/
- answer: 'No'
  link: what-app-type/
cascade:
  EditableContent: true
  addBreadcrumbs: true
---

This guide explains how to set up ZAP to handle authentication in your applications.
It is in the format of a decision tree - follow the relevant answers and it will lead you to the best solution for your apps.

If your application uses authentication then you will need to configure ZAP to handle it,
otherwise ZAP will not be able to access any of the protected functionality.

Unfortunately web app authentication is very complicated and there are many ways in which applications implement it.

ZAP typically needs to handle apps with login pages differently than those without, so this is why we start with this question.
