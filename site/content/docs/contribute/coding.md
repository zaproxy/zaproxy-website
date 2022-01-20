---
title: "Contribute: Coding"
type: page
cascade:
  EditableContent: true
  addBreadcrumbs: true
---
There's always lots of coding to be done!

This can be one of the most rewarding ways to contribute to ZAP - just look at the 
ZAP [Student Hall of Fame](/student-hall-of-fame/) to see how many students have made major contributions to ZAP and where it's led them.

You don't have to be a student of course, anyone who know is interested will be able to help us out with the ZAP code base.

### Getting Started

You should start by becoming familiar with the ZAP Desktop app even if you plan to just help with automation - it is very difficult to improve something that you do not understand and the desktop is the best way to learn about the way ZAP works.

Once you have started to get familiar with it then you will need to set up a development environment - for that see the
[ZAP Developer Guide](/developer/)

### What to Work On?

#### Good First Issues

If you are new to ZAP development then a good place to start is by fixing an issue labelled 
[good first issue](https://github.com/zaproxy/zaproxy/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22).

These are issues which we think are suitable for people new to ZAP development and which should be explained fairly well.

Do not be afraid to ask questions on a specific issue if anything is not clear to you.

#### Scan Rules

Scan rules are a good place to start as they are relatively self contained and do not require a great understanding of the rest of the ZAP codebase.

If you do not have a specific rule you would like to add / improve (and if you do not find a relevant issue that appeals to you) then try running ZAP against one of the many [deliberately vulnerable web applications](https://owasp.org/www-project-vulnerable-web-applications-directory/).

You can see the list of current ZAP rules on the [Alert Details](/docs/alerts/) page.

The following blog posts will help you get started with scan rules - they are a bit old but they are mostly still accurate:
* [Hacking ZAP #3 - Passive scan rules](/blog/2014-04-03-hacking-zap-3-passive-scan-rules/)
* [Hacking ZAP #4 - Active scan rules](/blog/2014-04-30-hacking-zap-4-active-scan-rules/)

#### Projects

We have a set of open issues labelled [project](https://github.com/zaproxy/zaproxy/issues?q=is%3Aopen+is%3Aissue+label%3A%22project%22+) - 
these are bigger changes which are more suitable for someone who is going to spend more time on ZAP.

If you have any other ideas for projects then feel free to get in touch with us to talk about them.

### The HUD

Most of the ZAP code base is written in Java.

The one major exception is the [Heads Up Display](https://github.com/zaproxy/zap-hud) which has a significant amount of JavaScript.

If you are looking for an unusual and innovative JavaScript project then have a look at that.