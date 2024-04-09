---
title: "Auth: All Done"
type: page
layout: decision-action
action: Use the Context
---

You now have a context that handles authentication for your app.

However if you do not do anything with it then it will be lost when you close the ZAP desktop!

#### Change to use a Headless Browser

By default the Authentication Tester will use the Firefox browser - this means that you will see the browser being launched in order to login.
This helps when testing as we can then see what is going on.

In automation it is better to use headless browsers.

You can change this in the context 'Authentication' panel - both 'Firefox Headless' and 'Chrome Headless' are available.
Note that the ZAP Docker images currently only include Firefox and not Chrome.

Right now the Automation Plan UI does not support changing the context authentication.
However you can easily create a new plan and then import the context you have just changed.

#### Export the Context

You can save the context by clicking on the 'Export Context...' button at the top on the Sites tree.
This will save the context in a text file.

You can then use the context file in various ways:

* [Import](/docs/desktop/ui/tlmenu/file/#import-context) it in another ZAP desktop session
* Specify it when running ZAP via one of the [packaged scans](/docs/docker/about/#packaged-scans)

#### Action: Create a new Automation Framework Plan

You can create a new Automation Framework plan using your context and configure it to do exactly what you want.

Note that you will need to configure each job to use the relevant user in order to make authenticated requests.

#### Congratulations!

Well done, you have configured ZAP to handle authentication for your app.