---
# This page was generated from the add-on.
title: Session Context screens
type: userguide
weight: 2
---

# Session Context screens


These screens allows you manage [contexts](/docs/desktop/start/features/contexts/).


There is a set of screens for each context you define.

### Top screen

This allows you to set the context name and description.

### Include in Context

This allows you to manage the URLs which will be included in the context.  
URLs which dont match any of the regexs will not be included in the context.   
**Note:** The regular expressions must match the whole URL.   
**Note** When testing targets that operate on default ports (80 for http, 443 for https), the colon port portion of the URL should not be included. Including that portion (for example: http://example.com:80) may result in an inability to crawl or test the target. If a 'default' port is specified both browsers and ZAP treat it without the default port being included then it doesn't match the expectation within the Context and there's nothing to interact with as part of the Context.

### Exclude from Context

This allows you to manage the URLs which will be excluded from the context.  
You only need to specify regexs for URLs that you do not want to include but which match one or more of the 'include' regexes.   
**Note:** The regular expressions must match the whole URL.

### Structure {#struct}

See the [Session Context Structure screen](/docs/desktop/ui/dialogs/session/context-struct/).

### Technology

This allows you to specify the technologies used in the context, if known.  
By default all technologies are included.  
If you exclude technologies that you know are not used then this may speed up [active scanning](/docs/desktop/start/features/ascan/) as rules specific to the excluded technologies can be skipped.

### Authentication {#auth}

See the [Session Context Authentication screen](/docs/desktop/ui/dialogs/session/context-auth/).

### Session Management {#sm}

This allows you to manage the way in which Session Management is being done for the Context. After selecting the Session Management Method type, the options that need to be configured depend on the Session Management Method.

#### Cookie-Based Session Management

No configuration is needed for this session management method. Read [more](/docs/desktop/start/features/sessionmanagement/#cbsm)...

#### HTTP Authentication Session Management

No configuration is needed for this session management method. Read [more](/docs/desktop/start/features/sessionmanagement/#hasm)...

#### Script-Based Session Management

To use this session management method, you **first** need to write (and save) a **Session Management Script** using the **Scripts** tab (see the provided examples and templates for this script type in the Scripts tab). Then you need to supply the name of the script in the dropdown list. After selecting the script, you need to press the **Load** button, loading all the requirements of the script. Any parameters that you have specified as *required* or *optional* in the script will be shown in the interface to be defined. Their values are available to be used in the script, during the session management process, as seen in the provided examples for Session Management Scripts. Make sure that after doing any changes to the parameters required by the Session Management script you re-load the script. Otherwise, the parameters shown in the interface might not be the ones used during the session management process and errors might occur. Read [more](/docs/desktop/start/features/sessionmanagement/#sbsm)...

### Users {#users}

This allows you to configure a set of Users that may be used for various other actions throughout the application.

The credentials section of the Users depends on the Authentication Method configured
for the Context.

## Custom Page {#custompages}

This functionality allows you to handle situations in which the target does not return a RFC compliant or expected error response when for conditions such as 404 - Not Found, 500 - Internal Server Error, etc. Often developers implement custom 404 or 500 handling but do not actually return an appropriate status code. Leveraging Custom Page definitions you can define URLs or response content which identify error responses regardless of the status code associated with the response. Read [more](/docs/desktop/start/features/custompages/)...

## URL regexs

In the *Include in \** , *Exclude from \** panels and the *Logged in/out indicators* of the *Authentication* panel, etc. you can enter regular expressions to define excluded URLs. While you can escape a single meta-character with a backslash, you can also use the **\\Q...\\E** escape sequence. All the characters between the **\\Q** and the **\\E** are interpreted as literal characters. E.g. \\Q\*\\d+\*\\E matches the literal text \*\\d+\*. This escape sequence is used in ZAP when you exclude URLs via some context menus.   
**Note:** If your URL contains a "\\E", then you have to do the following steps when using the **\\Q...\\E** escape sequence:

* Open the escape sequence
* Close the escape sequence before the "character" \\E
* Escape the backslash
* Open after the "\\E" another escape sequence;
* Close the escape sequence as normally would.


Example: subdomain.example.com/path?a=**\\E** \&moredata=2 should appear as *\\Qsubdomain.example.com/path?a=\\E* **\\\\E** *\\Q\&moredata=2\\E*

## Accessed via

|   |                                           |                        |
|---|-------------------------------------------|------------------------|
|   | [Sites tab](/docs/desktop/ui/tabs/sites/) | Double click a Context |

## See also

|   |                                                                       |                                        |
|---|-----------------------------------------------------------------------|----------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                                      | for an overview of the user interface  |
|   | [Dialogs](/docs/desktop/ui/dialogs/)                                  | for details of the dialogs or popups   |
|   | [Authentication](/docs/desktop/start/features/authentication/)        | for an overview of Authentication      |
|   | [Session Management](/docs/desktop/start/features/sessionmanagement/) | for an overview of Session Management  |
|   | [Custom Page](/docs/desktop/start/features/custompages/)              | for an overview of Custom Page details |
