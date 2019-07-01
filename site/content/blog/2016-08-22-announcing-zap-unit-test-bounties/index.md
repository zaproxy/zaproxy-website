---
title: "Announcing ZAP Unit Test Bounties"
type: post
tags:
- TODO
date: "2016-08-22"
authors:
    - simon
---
Unit tests are wonderful things, but they are painful to add to a mature project that doesn’t have enough of them. We would love to have more
ZAP unit tests, and we are therefore launching a Unit Test Bounty program, where we pay for unit tests for specific areas of the ZAP codebase.  
  
We are going to start with the passive scan rules (release and beta quality).  
These are all defined in the zap-extensions src packages:  

  * [org.zaproxy.zap.extension.pscanrules](https://github.com/zaproxy/zap-extensions/tree/master/src/org/zaproxy/zap/extension/pscanrules) (master branch)
  * [org.zaproxy.zap.extension.pscanrulesBeta](https://github.com/zaproxy/zap-extensions/tree/beta/src/org/zaproxy/zap/extension/pscanrulesBeta) (beta branch)

We do already have some release quality unit tests in the corresponding test package:  

  * [org.zaproxy.zap.extension.pscanrules](https://github.com/zaproxy/zap-extensions/tree/master/test/org/zaproxy/zap/extension/pscanrules)

These can be used as a basis of the new tests. Unit tests should be included for real issues (true positives) as well as false positives.  
For details of how passive scan rules work see the blog post: [Hacking ZAP #3 Passive Scan Rules](https://zaproxy.blogspot.com/2014/04/hacking-
zap-3-passive-scan-rules.html)  
  
We have raised issues for all of the release and beta quality passive scan rules that do not have unit tests, and assigned a bounty on them in
Bounty Source. The bounties vary based on the amount of work we expect will be required. We will increase the bounties paid if the pull request
(PR) include fixes for false positives or false negatives.  
  
The open bounties can all be seen on the [Bounty Source page](https://www.bountysource.com/teams/zap/bounties)  
  
We plan to extend the bounties to cover active scan rules in the future. We expect the bounties to typically be higher than for the passive scan
rules due to the added complexity.  
  
We will pay out these bounties only when we have merged a PR that has an associated bounty. The PRs must test all of the associated rule
functionality and must conform to our [Development Rules and Guidelines](https://github.com/zaproxy/zaproxy/wiki/DevGuidelines). Also see
[CONTRIBUTING.md](https://github.com/zaproxy/zaproxy/blob/develop/CONTRIBUTING.md#guidelines-for-pull-request-pr-submission-and-processing)  
We will work with submitters to help them improve any non-conforming PRs so that they meet our standards. We will also give the first person who
submits a nearly conforming PR a reasonable time (eg 2 weeks) to reach the required standard rather than immediately accepting another later PR
from someone else that does conform.  
We will not reserve issues in advance, nor will we reserve an issue based on an inadequate PR.  
  
You will see that the bounties are not huge. In our defence there are quite a few of them, implementing them should not take too much work and
in any case we are an open source project with no revenue stream other than donations!  
  
We also have plans to expand this program to other aspects of ZAP. If you would be interested in sponsoring such plans then please get in touch,
or you can just donate money directly to the ZAP project via the [Bounty Source page](https://salt.bountysource.com/checkout/amount?team=zap) or
via the ‘Donate’ Paypal button on <https://www.owasp.org/index.php/ZAP>. You can also donate money to ZAP when you join or renew your OWASP
membership.  
Do let us know if you are explicitly sponsoring this initiative so that we can give you the public credit you deserve :)

