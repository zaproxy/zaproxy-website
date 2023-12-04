---
title: "ZAP Development Focus Questionnaire Results"
summary: >
  The questionnaire results, and what we're doing about the things you care about most.
images:
- https://www.zaproxy.org/blog/2023-12-04-development-focus-results/images/questionnaire-results.png
type: post
tags:
- blog
- update
date: "2023-12-04"
authors:
- simon
---
{{< chart-script >}}

In [August 2023](/blog/2023-08-29-what-should-we-focus-on/) we asked you to tell us what you think we, the [ZAP team](/docs/team/), should focus on.

Over 100 of you have replied, and this is what you said:

## Questionnaire Results

We asked you the top 3 things you would like us to focus on.
To get an overall total score we multiplied the votes for the first choices by 3, the second choices by 2 and then added those to the votes for the third choice.

{{< pie-chart name="2023-dev-focus-summary">}}

As you will see the top 4 are pretty close:

1. Modern Web App Handling - 18.6%
1. Authentication - 16.3%
1. Automation - 16.2%
1. Ease of Use - 14.6%
1. Manual Testing - 11.6%
1. Scan Rules - 10.4%
1. Documentation - 5.8%
1. 3rd Party Integration - 3.9%
1. Scalability - 2.6%

The good news is that we were already focusing on the top 3 and knew that Ease of Use was something that we should look at soon as well.

For the exact break down see the [Full Results](#full-results) section below.

## What Are We Doing?

We will continue to improve aspects of ZAP outside of the top 4 mentioned here, but as we are a small underfunded team we have to focus on a limited set of areas.

### Modern Web App Handling

This has been a major focus for us recently, see:

* Blog post: [Handling Modern Web Apps Better - Part 1](/blog/2023-11-03-handling-modern-web-apps-better-part1/)
* Video: [ZAP Chat 05 Modern Apps Part 1](https://www.youtube.com/watch?v=Rq_d7OLmMfw) 
* Help: [Client Passive Scanning](/docs/desktop/addons/client-side-integration/pscan/)

We are working on more improvements which will be announced in due course.

### Authentication

Authentication handling received a significant update earlier in the year:

* Blog Post: [Authentication Auto-Detection](/blog/2023-05-02-authentication-auto-detection/)
* Blog Post: [Authentication Tester Dialog](/blog/2023-05-23-authentication-tester/)

While we have more plans for improving Authentication we need your input.

Please try out [Auto Detection](/blog/2023-05-23-authentication-tester/), which is now our recommended authentication option, and let us know how you get on in the 
[Authentication Auto-detection Questionnaire](https://docs.google.com/forms/d/e/1FAIpQLSeNYpjq5BfFVHEDNG-ul3yDHNBSS9yhKJWW-OtGpcNcvH1q2Q/viewform)

### Automation

Automation is one of ZAP's strengths and so is an ongoing focus.

Only last month we released 4 new Automation videos:

* [ZAP Chat 06 Automation Introduction](https://www.youtube.com/watch?v=PnCbIAnauD8)
* [ZAP Chat 07 Automation Framework Part 1](https://www.youtube.com/watch?v=19Rptj2be1Y)
* [ZAP Chat 08 Automation Framework Part 2](https://www.youtube.com/watch?v=1fcpU54N-mA)
* [ZAP Chat 09 Automation Framework Part 3](https://www.youtube.com/watch?v=4phnMy9iCPY)

The next significant development will be a new GitHub Action which will support the [Automation Framework](/docs/automate/automation-framework/).

We hope to announce initial support for that soon!

### Ease of Use

It's not a huge surprise that this scored highly, but it is a challenging aspect of ZAP.

Anecdotally we hear that some people like the ZAP UI and some dislike it .. but we get very little direct feedback as to exactly how the people who dislike it would like it to change.

One thing we have come to realise is that we really don't know enough about how most people use ZAP.

For this reason we have started a new initiative, which will start by trying to help us understand the different types of people who use ZAP and what they are looking for.

Anyone can download ZAP and use it without telling us anything about what they are trying to achieve, and most people do just that.

We will be publishing more questionnaires focused on ZAP usage and usability very soon, and we NEED your input.

## Full Results

The results for each of the 3 questions were:

{{< pie-chart name="2023-dev-focus-q1">}}

{{< pie-chart name="2023-dev-focus-q2">}}

{{< pie-chart name="2023-dev-focus-q3">}}

We did receive a set of "other" answers but none of them were significant compared to the votes for the categories we defined.

A big thank you to everyone who took part, your feedback was very helpful!