---
title: "Auth: Token Based Authentication"
type: page
layout: decision-question
question: Do you have one or more authentication tokens you can use?
answers:
- answer: 'Yes, one header'
  link: ../one-header/
- answer: 'Yes, more than one header'
  link: ../multiple-headers/
- answer: 'No'
  link: ../follow-other-guides/
---
Your app is either an API or a traditional web app.

If you have a reliable token that will not be invalidated during the scan then this is probably your best option to use.
