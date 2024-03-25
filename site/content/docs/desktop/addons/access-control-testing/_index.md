---
# This page was generated from the add-on.
title: Access Control Testing
type: userguide
weight: 1
cascade:
  addon:
    id: accessControl
    version: 10.0.0
---

# Access Control Testing

This add-on enables users to compare which parts of a web-application are available to some users, do access control
testing and identify potential access control issues. It allows configuration of access rules and conducts a full
attack aimed to help identify sections of a web application which are accessible by unauthorized clients.

There are two main concepts related to this add-on that should be explained: the **Access Rules** and the **testing
procedure**.

## Access Rules

In order to identify potential access control issues, ZAP needs to know which parts of the web application are
supposed to be accessed by which user. In ZAP, the name for these rules is: *Access Rules* and generally have
the meaning: "*PageA should/shouldn't be accessed by UserX*".

The rules are configured for a Context and, for each User of that Context, each Site Node (web page) will be
associated to one of the following values:

* **Allowed** - the resource **can** be accessed by the User to which the rule refers
* **Denied** - the resource **should not** be accessed by the User to which the rule refers
* **Unknown** - there is **no information** regarding whether the resource should or shouldn't be accessible to the User to which the rule refers

In order to simplify the access rules definition process, ZAP is making use of the tree-based structure of URLs.
When analyzing the rules, an inference algorithm is used to detect the matching rules for each node based on its
parent in the URL if no particular rules are defined. This means that, when configuring the access rules, only 1
rule needs to be set explicitly for an entire subtree, while for the other nodes rules are inferred. More details
about this can be found on the Access Control [Context options](/docs/desktop/addons/access-control-testing/contextoptions/) help page.

## Testing procedure

As a whole, in order to fully perform access control testing for a web application, the next steps should be
followed:

* the tester defines set of Users and how they authenticate;
* the tester defines how ZAP can identify un-authorized requests (via the Authorization panel in the Session Properties);
* the web-application is explored either manually or via the Spider;
* the tester define the Access Rules for each of the Users associated to the Context, basically letting ZAP know which parts of the web application are supposed to be accessed by which users;
* an ‘attack’ is performed by ZAP by trying to access every URL of the web-app from the perspective of every user;
* in the corresponding Status Tab, the results are displayed, showing which pages were accessed successfully by which users and marking the cases where the access rules where not followed.

**Note:** Access control testing is not allowed in `Safe` mode nor `Protected` if the context is not in scope.

## Alerts {#alerts}

The following Alerts may be raised by the add-on:

### Access Control Issue - Improper Authentication {#id-10101}

Insufficient Authentication occurs when a web site permits an attacker to access sensitive content or functionality without having to properly authenticate. Web-based administration tools are a good example of web sites providing access to sensitive functionality. Depending on the specific online resource, these web applications should not be directly accessible without requiring the user to properly verify their identity.

Latest Code: [AccessControlScannerThread.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/accessControl/src/main/java/org/zaproxy/zap/extension/accessControl/AccessControlScannerThread.java)

Alert ID: [10101](/docs/alerts/10101/).

### Access Control Issue - Improper Authorization {#id-10102}

Insufficient Authorization results when an application does not perform adequate authorization checks to ensure that the user is performing a function or accessing data in a manner consistent with the security policy. Authorization procedures should enforce what a user, service or application is permitted to do. When a user is authenticated to a web site, it does not necessarily mean that the user should have full access to all content and functionality.

Latest Code: [AccessControlScannerThread.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/accessControl/src/main/java/org/zaproxy/zap/extension/accessControl/AccessControlScannerThread.java)

Alert ID: [10102](/docs/alerts/10102/).

## API

The Addon exposes the following API endpoints:

### Actions

#### scan

Starts an Access Control scan with the given context ID and user ID (can be comma separated list of IDs). (Optional parameters: boolean identifying if an unauthenticated user should be included (default false), boolean identifying whether or not Alerts are raised (default true), and the Risk level for the Alerts (default High).) \[**Note:** This assumes the Access Control rules were previously established via ZAP gui and the necessary Context exported/imported.\]

#### writeHTMLreport

Generates an Access Control report for the given context ID and saves it based on the provided filename (path).

### Views

#### getScanProgress

Gets the Access Control scan progress (percentage integer) for the given context ID.

#### getScanStatus

Gets the Access Control scan status (description string) for the given context ID.

## See also

|   |                                                                                               |                                                        |
|---|-----------------------------------------------------------------------------------------------|--------------------------------------------------------|
|   | [Access Control Testing Tab](/docs/desktop/addons/access-control-testing/tab/)                | for a description of the status tab used by the add-on |
|   | [Access Control Context options](/docs/desktop/addons/access-control-testing/contextoptions/) | to learn about the related context options             |
