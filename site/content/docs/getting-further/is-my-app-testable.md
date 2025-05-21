---
title: "Is My App Security Testable?"
type: page
tags: 
- advanced
EditableContent: true
addBreadcrumbs: true
---
Web app security is hard, and there are many, many aspects to it (see [OWASP](https://www.owasp.org) for more details).

When it comes to security testing the best way to test the security of a web app is via a pentest conducted by experts.
However, such pentests are expensive, and I have not heard of any company that can afford to carry out
regular pentests on all of their web apps.

This is where ZAP shines! ZAP is a cheap and effective way to test all of your web apps, whenever you need them tested.

ZAP can help you secure your web apps, but you can make life much more difficult for ZAP, and that in turn makes life more difficult for you.

Making it harder for ZAP to test your web apps will not make them more secure, it can in fact make them less secure.
If you make automated testing too hard then the race to find vulnerabilities in your apps will be between
the pentesters you hire and the malicious attackers who are out to compromise you.

### Provisioning

Can you set up your app in a test environment with no manual input?

This includes provisioning all of the services, configuring them to work together, creating a good range of test data, and provisioning test users for all valid roles.
Your app should not depend on any third party services that cannot be mocked, or interact with any other services which are not part of the isolated test environment.

If you cannot easily set up your app in a reliable state in a dedicated test environment then the reliability of the results you get will vary.

If for any reason you need to run ZAP against a production site see the FAQ: 
[Is there any danger when scanning with ZAP against a live website ?](/faq/is-there-any-danger-when-scanning-with-zap-against-a-live-website-e-g-create-delete-update-corrupt-data/)

### Performance

If your test environment is slow under normal circumstances then it will really struggle when scanned by a tool like ZAP.
ZAP may fail to discover content or miss vulnerabilities that it would otherwise find due to requests timing out.

You can configure ZAP to handle apps that perform badly, but that is a manual process which you may not realise you need to perform.

### Authentication
Can automated tools authenticate to your application easily?

Complex login procedures make it harder for ZAP to authenticate to your app. If ZAP cannot login to your app then it cannot test it effectively.

ZAP can handle pretty much any form of authentication, but the more complex it is the more manual configuration will be required.

### Exploration
Can ZAP explore your app effectively?

If your web app is designed for humans then you will hopefully have designed it in a way that makes it clear to humans how to navigate your app.
That is not the same as making your app easy to navigate by automated tools.

HTML links are easy to identify. Event handlers on elements like DIVs are much harder to identify.

The [AJAX Spider](/docs/desktop/addons/ajax-spider/) can struggle with popup menus, although the 
[Client Spider](/docs/desktop/addons/client-side-integration/spider/) can handle these in many cases.

If your app frequently logs the user out for doing bad/unexpected things then the spiders will struggle with it, and if
it automatically redirects the browser to the login page if a direct URL is used even when authenticated then crawling your app
will be almost impossible.

None of the ZAP spiders can currently handle Shadow DOMs.

If you have integration tests for you app then you should look at [proxying](/docs/getting-further/automation/exploring-your-app/#proxying-integration-tests)
then through ZAP as these can significantly increase coverage.

### API Definitions
Do you provide an API definition?

If your app provides an API then you should also maintain an API definition that can be used by automated tools. 
This definition does not have to be public, but it should be generated automatically to ensure it is kept up-to-date.

The full set of API definitions that ZAP can import are listed on the 
[Exploring Your App](/docs/getting-further/automation/exploring-your-app/#importing-api-definitions) page.

### Anti-Automation Features
You may well have a range of security controls added to your production environments, such as:
* CAPTCHAs
* Multi Factor Authentication
* Web app firewalls
* Relatively short session timeouts
* Limiting the number of active sessions per user
* Randomising field identifiers

These controls are there to protect your production environment by making automation much harder.
Not surprisingly they will make automating ZAP testing much harder as well.

You should not use these controls in your security test environment, as all they will do is to make ZAP less effective.

### Switchable UI Components
Your app may well include UI components which cause problems with automated testing.

These include:
* Mandatory click throughs
* Popups, for example for signing up to a newsletter

It should be possible to disable these sorts of UI elements automatically when you provision your test app,
otherwise they will make ZAP less effective.

### Messaging Integration
By default ZAP will attack anything in-scope that it discovers. 
If that includes messaging features, such as feedback forms or chatbots, then that can result in the generation of a large number of 
["spam" messages](/faq/how-can-i-prevent-zap-from-sending-me-1000s-of-emails-via-a-contact-us-form/).

These sorts of integrations should be disconnected if possible. 
Note that completely disabling them could hide vulnerabilities such as SQL injection or Cross Site Scripting.
