---
title: "Auth: All Information Available"
type: page
layout: decision-action
action: Test the Context
---

You have a context for your app and have configured it to handle authentication.

We now need to check that it really does work as expected.

#### Action: Create an Automation Framework Plan

There are other ways to test the context manually, but this will make it easier to retest if you need to make any changes.

1. Switch to the Automation tab. If it is not visible then you will need to click on the green "plus" icon in the bottom tab.
1. Click on the "New Plan" button
1. Select the context you have configured for authentication
1. Select just the "requester" job
1. Click "Save"

#### Action: Configure and Run the Plan

In the 'Automation' tab:

1. Double click on the "requester" job
1. Select the Authenticated User
1. Select the "Requests" tab
1. Click the "Add" button
1. Add a suitable URL - this should be in scope
1. Click the "Save" button
1. Click the "Run Plan..." button

#### Action: Check Everything Worked

You should see the browser launched and successfully log in, at least once (maybe more times).

##### Output tab

Select the 'Output' tab.

You should see one or more lines like:
* `Session token identified in History ID: 674` 

and a final line: 
* `Authentication successful.`

##### History tab

Select the 'History' tab and look at the messages.

The final message should have a Source of 'Manual'.

Prior to that there should be a set of messages of Source 'Auth' - these were requested by the browser.

The last 'Auth' message should be to the 'verification URL' and should have succeeded:

![History tab, successful authentication](/img/docs/authentication/history-auth-success.png)

You can select any of the messages in the History tab and then see all of their details in the 'Request' and 'Response' tabs.

#### Next Step: [Use The Context](../use-the-context/)