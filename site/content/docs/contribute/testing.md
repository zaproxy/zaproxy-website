---
title: "Contribute: Test ZAP"
type: page
---

ZAP is designed to attack real world apps, so we do not tune ZAP just to score better against vulnerable test apps.
However, such test apps are still very worthwhile and can be representative of real world apps.

There are a large number of deliberately vulnerable apps - see the 
[OWASP VWAD](https://owasp.org/www-project-vulnerable-web-applications-directory/) project.

We would love to test ZAP against all of them, but these things take time and ZAP has a relatively small 
[Core Team](/docs/team/) so we cannot do everything that we want to.

This is another area where you can help!

Try using ZAP to test one of the apps that we are not [regularly testing ZAP against](/docs/scans/).

ZAP can sometimes be a bit tricky to configure to handle specific apps.
We do have some FAQs which may help, see: [Can ZAP be used to test my favorite vulnerable app?](https://www.zaproxy.org/faq/can-zap-be-used-to-test-my-favorite-vulnerable-app/)
If a FAQ doesn't exist for the app you are testing then you could create one and submit it as a PR to this site.

Check the documentation of the app to see what vulnerabilities should be there, or test it yourself manually.

If ZAP does not find specific vulnerabilities then you can either report these to us straight away via the 
[ZAP User Group](https://groups.google.com/group/zaproxy-users) or you can try to investigate them yourself first.
The latter can be a great way to learn more about both ZAP and security testing.
This feedback can help us improve the default ZAP settings or improve the [scan rules](../scan-rules/).

We also want to increase the number of vulnerable apps we test ZAP against every day.
Getting ZAP to attack the apps is usually easy, the time consuming part is scoring how well ZAP does.
If you think you feel up to this challenge then just get in touch with us and we'll help you increase our test coverage.