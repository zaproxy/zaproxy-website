---
title: "Someone is using ZAP to attack my website - what should I do?"
type: faq
category: Scanning
---

ZAP is a free tool designed to help everyone secure their own websites.
Unfortunately this means that other people can use it to attack your website
as well.

ZAP is not designed to be a covert tool - it uses various variations of "ZAP"
in its attacks, so if someone does use ZAP to attack your site then this
should be apparent in your web server logs.

If someone is using ZAP to attack your site then there are 2 main questions:

  * Do you have any evidence that your site might have been compromised?
  * Has any approved security testing been performed on your site at any stage?

If there is no evidence of compromise and you have had your site security
tested recently then theres probably not much to worry about.

If no security testing has been performed then you should look into this asap.
There are many options, from performing your own testing (using ZAP or a
similar tool) to paying a reputable security company to perform the testing
for you. The latter would be ideal, but will cost money. Note that it's
generally best not to test your production site - ideally you should use a
development or staging site that is a copy of your production site.

If you think your site might have been compromised, eg by changes being made
that should only be possible by an authenticated account, then you should
definitely take stronger measures. You will want to find how your site was
compromised. If it's a vulnerability in your site (rather than something like
a weak admin password) then you will need to fix that before doing anything
else.
