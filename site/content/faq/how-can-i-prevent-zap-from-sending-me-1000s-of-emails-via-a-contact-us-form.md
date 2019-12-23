---
title: "How can I prevent ZAP from sending me 1000s of emails via a 'Contact Us' form?"
type: faq
category: Scanning
weight: 3
---


In this case prevention is definitely better than cure.

By default when you use the ZAP spider and active scanner then ZAP will access
all of the URLs, forms, and functionality it can find. If one of those results
in your application sending emails then someone is going to get a LOT of
emails. (Consider other scenarios like sending orders, HR actions, helpdesk
tickets, etc.)

If that has already happened then there is basically nothing you can do in ZAP
to prevent those emails from being sent. You can stop the ZAP spider or
scanner if it is still running, but ZAP will already have submitted the form
many times and so the resulting emails will have been sent to your email
server.

You may be able to stop the emails at the mail server (or maybe within the
application, if it queues them) but that has nothing to do with ZAP.

The best option is to make sure that ZAP does not submit the relevant form(s)
in the first place, or that you execute the tests in a non-production
environment.

You can configure both the spider and active scanner to not submit any forms,
but that will significantly reduce the effectiveness of these tools.

The best option is to explicitly exclude those pages from the spider and
active scanner or from ZAP as a whole via 'exclusions' - these can be accessed
via the right click 'Exclude from' menu or the Session Properties dialog.
