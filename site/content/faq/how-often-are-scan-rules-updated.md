---
title: "How often are scan rules updated?"
type: faq
category: Scanning
weight: 3
---
Scan rules are defined in add-ons so they can be updated and published whenever they are improved.

However this may be less frequently than you might expect, and there are good reasons for that.

Some security tools focus on finding known vulnerabilities in known applications. 
New vulnerabilities are being found all of the time so the rules for these tools need to be frequently updated.
These rules are often quite simple, they just need to detect that you are running a specific version of an application that has known vulnerabilities.

ZAP focuses on finding vulnerabilities in unknown (custom) applications. 
It attacks these applications in the same way a malicious attacker would in order to find vulnerabilities.
The ZAP rules are often more complicated and there is a tradeoff between implementing an ever increasing number of tests and the length of time that these tests take.
If a ZAP scan takes far too long then people will not use it.

We are always looking to improve the ZAP scan rules but the techniques for finding vulnerabilities do not change that frequently.
If you do have suggestions for ways in which the scan rules could be improved then please get in touch, or even better submit a pull request!
