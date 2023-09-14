---
title: "Contribute: Scan Rules"
type: page
---

Scan rules are a good place to start contributing as they are relatively self contained and do not require you to understand the rest of the ZAP code base. They are also a great way to learn more about security.

### Finding Something to Improve

If you already know of a vulnerability that ZAP doesn't find, or a False Positive that ZAP reports (for example as you have run ZAP against one of your own apps) then you can skip this part.

Otherwise you can have a look at the existing ZAP issues labelled with:

* [FalseNegative](https://github.com/zaproxy/zaproxy/issues?q=is%3Aopen+is%3Aissue+label%3AFalseNegative)
* [FalsePositive](https://github.com/zaproxy/zaproxy/issues?q=is%3Aopen+is%3Aissue+label%3AFalsePositive)

Alternatively you can try running ZAP against one of the many [deliberately vulnerable web applications](../testing/).

To see the results of ZAP running against well known vulnerable apps go to [ZAP Scans](/docs/scans/) - any issues that ZAP fails to find on these apps could be a good candidate for fixing.

However it must be stressed that the key focus for ZAP is to find vulnerabilities in real world apps. Scoring better against test apps should be as a consequence of improving the rules for real world apps rather than the end goal.

### Finding the Relevant Scan Rule

You can see the list of current ZAP rules on the [Alert Details](/docs/alerts/) page.

Note that there may be more than one rule that could potentially identify any given vulnerability.

If you are looking to fix a false positive then you should be able to identify the relevant rule from the title.

Once you find the relevant rule select it and you will see a link to the code at the bottom of the page.

If you cannot see one that applies then you might need to create a new scan rule, but ask on the [ZAP Developer Group](https://groups.google.com/group/zaproxy-develop) just to make sure.

### Deciding if Improvements are Possible

You will need to be able to reproduce any vulnerability manually before you can enhance ZAP to find it.

When you have done so you need to decide if it is reasonable for an automated scanner like ZAP to be able to find it.

Many vulnerabilities will require more knowledge or understanding of an app than an automated scanner will be able to deduce.
If in doubt ask on the [ZAP Developer Group](https://groups.google.com/group/zaproxy-develop).

In a similar way some false positives may still be reasonable for ZAP to report if the only way to tell that they are false positives is by a knowledgeable person.

### Implementation Details

The following blog posts will help you get started with scan rules - they are a bit old but they are mostly still accurate:
* [Hacking ZAP #3 - Passive scan rules](/blog/2014-04-03-hacking-zap-3-passive-scan-rules/)
* [Hacking ZAP #4 - Active scan rules](/blog/2014-04-30-hacking-zap-4-active-scan-rules/)

All changes should be covered by unit tests - see [Verifying Your Changes](/docs/developer/verifying-your-changes/).

For scan rules this means that you will need simulate a web server - most of the existing scan rule unit test already do this, so look at the existing tests to see how this can be done.

#### Number of Requests

Active scan rules should limit the number of requests they make based on the Strength set by the user:

* LOW:      Limit to around 6 requests per scan call
* MEDIUM:   Limit to around 12 requests
* HIGH:     Limit to around 24 requests
* INSANE:   No limit, although 1000s wouldn’t be a good idea

### Alert Field Details

The following advice and guidance should be followed for any new alerts raised.
There may still be some alerts raised which do not follow this guidance, they should be changed to follow it as well.

All text that is not copied from a request or response should be internationalised, as per the rest of the ZAP code base.

Some of the fields below state that they must not be dynamic. ZAP is used as the engine behind a number of 
[3rd Party Products and Services](/third-party-services/) some of which we know replace these fields with ones that are more relevant to their users. In these cases any dynamic information would be lost.

For any fields not mentioned below see the [Add Alert dialog](/docs/desktop/ui/dialogs/addalert/) page for more information.

#### Name

Alert names must not be dynamic.

A rule can raise alerts with differing names but it must then implement the [getExampleAlerts()](https://javadoc.io/doc/org.zaproxy/zap/latest/org/zaproxy/zap/extension/alert/ExampleAlertProvider.html) method (which is used to populate the [alert pages](/docs/alerts/)) and [set the AlertRef](https://javadoc.io/doc/org.zaproxy/zap/latest/org/parosproxy/paros/core/scanner/Alert.html#setAlertRef(java.lang.String)) field correctly.

#### Parameter

The name of the URL or form parameter or the header being attacked or affected. It must be left empty if none are relevant.

#### Attack

The exact attack string used. This is not relevant for passive scan rules.

#### Evidence

A string from the request or response which can be used as evidence of the vulnerability. It must not contain anything that is not in the request or response.

#### Description

A clear and concise description of the vulnerability - this must not be dynamic. Different descriptions can be defined as long as they are reported as different [example alerts](https://javadoc.io/doc/org.zaproxy/zap/latest/org/zaproxy/zap/extension/alert/ExampleAlertProvider.html).

#### Solution

A clear and concise description of the solution - this must not be dynamic. Different solutions can be defined as long as they are reported as different [example alerts](https://javadoc.io/doc/org.zaproxy/zap/latest/org/zaproxy/zap/extension/alert/ExampleAlertProvider.html).

#### Other Info

This is a general purpose field which can be used to provide more context and information to the user.

This field may be dynamic.
