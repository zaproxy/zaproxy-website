---
# This page was generated from the add-on.
title: AI Assisted Authentication
type: userguide
weight: 3
---

# AI Assisted Authentication

This [add-on](/docs/desktop/addons/authentication-helper/) adds a new authentication method which uses an LLM to drive a browser and login to the target website.


Unlike [Browser Based Authentication](/docs/desktop/addons/authentication-helper/browser-auth/), which relies on heuristics to find the username and password fields, this method
sends the LLM a description of the current page (URL, title, visible text and form elements) at each step and asks it to decide what to click, type
or select next, repeating until it detects that login has succeeded or failed (or a maximum number of turns is reached).


The **LLM Support** add-on must be installed and configured with a working provider, since it is used to drive the login flow.

## Hints

Some login flows have non-obvious steps that an LLM cannot infer just by looking at the page, for example choosing a specific option from a dropdown, or dismissing a cookie banner in a particular way. A free-text "Hints" field can be supplied (in the method's options or in the [Authentication Tester](/docs/desktop/addons/authentication-helper/auth-tester/) dialog) to give the LLM this kind of guidance, for example:

```
      Set the domain dropdown to Project1 before clicking Next.
```

## Converting to Client Script Authentication

Running the LLM to drive a browser on every authentication attempt would be slow and unreliable (since it depends on a third-party service). Instead, this method is only intended to be used once to work out how to login to a given page: while it drives the browser it records every successful action, and on success it automatically builds a Zest script from those actions and switches the context to use [Client Script Authentication](/docs/desktop/addons/authentication-helper/client-script/) with that script - which is then used for all subsequent (much faster and deterministic) authentication attempts.


If a script with the same name already exists (for example because AI Assisted Authentication was run before against the same login page) it is
replaced.

## Automation Framework

AI Assisted Authentication can be configured in the environment section of an Automation Framework plan using:

```
      authentication:
        method: "ai"
        parameters:
          loginPageUrl:                 # String, the URL of the login page, mandatory
          browserId:                    # String, Browser Id to use, default: firefox-headless
          loginPageWait:                # Int, the time in seconds to wait after the login page has loaded, default: 5
          hint:                         # String, the free-text hint described above
```


As with [Browser Based Authentication](/docs/desktop/addons/authentication-helper/browser-auth/), credentials are supplied under the user in the usual way:

```
      credentials:
        username: …
        password: …
```


Once AI Assisted Authentication succeeds it automatically switches the context to [Client Script Authentication](/docs/desktop/addons/authentication-helper/client-script/),
as described above. If you re-run the plan then the context will use the generated script rather than the LLM from that point onwards, unless
the context's authentication method is explicitly reset back to `"ai"`.

## API

AI Assisted Authentication can also be configured via the ZAP API using the `aiAssistedAuthentication` action of the `authentication` API, which takes the following parameters:

|      Name       | Mandatory |                               Description                                |
|-----------------|-----------|--------------------------------------------------------------------------|
| `loginPageUrl`  | Yes       | The URL of the login page.                                               |
| `browserId`     | No        | The browser to use, default: firefox-headless.                           |
| `loginPageWait` | No        | The time in seconds to wait after the login page has loaded, default: 5. |
| `hint`          | No        | The free-text hint described above.                                      |


Note that due to restrictions in the core:

* Existing contexts are not updated in the GUI if you add or remove this add-on

This restriction will be addressed in a future release.


Latest code: [AiAssistedAuthenticationMethodType.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/authhelper/src/main/java/org/zaproxy/addon/authhelper/llm/AiAssistedAuthenticationMethodType.java)
