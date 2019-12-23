---
title: "Setting up ZAP to Test Damn Vulnerable Web App (DVWA)"
type: faq
category: Technologies Supported
weight: 7
---

Following the steps used to spider/scan DVWA v1.9 at `http://localhost/DVWA` using ZAP 2.4.3:

* Create a new authentication JavaScript/ECMAScript script [1] and replace/set the script contents with the following:

``` JavaScript
function authenticate(helper, paramsValues, credentials) {
    var loginUrl = paramsValues.get("Login URL");
    var csrfTokenName = paramsValues.get("CSRF Field");
    var csrfTokenValue = extractInputFieldValue(getPageContent(helper, loginUrl), csrfTokenName);
    var postData = paramsValues.get("POST Data");

    postData = postData.replace('{%username%}', encodeURIComponent(credentials.getParam("Username")));
    postData = postData.replace('{%password%}', encodeURIComponent(credentials.getParam("Password")));
    postData = postData.replace('{%' + csrfTokenName + '%}', encodeURIComponent(csrfTokenValue));

    var msg = sendAndReceive(helper, loginUrl, postData);
    return msg;
}

function getRequiredParamsNames() {
    return [ "Login URL", "CSRF Field", "POST Data" ];
}

function getOptionalParamsNames() {
    return [];
}

function getCredentialsParamsNames() {
    return [ "Username", "Password" ];
}

function getPageContent(helper, url) {
    var msg = sendAndReceive(helper, url);
    return msg.getResponseBody().toString();
}

function sendAndReceive(helper, url, postData) {
    var msg = helper.prepareMessage();

    var method = "GET";
    if (postData) {
        method = "POST";
        msg.setRequestBody(postData);
    }

    var requestUri = new org.apache.commons.httpclient.URI(url, true);
    var requestHeader = new org.parosproxy.paros.network.HttpRequestHeader(method, requestUri, "HTTP/1.0");
    msg.setRequestHeader(requestHeader);

    helper.sendAndReceive(msg);

    return msg;
}

function extractInputFieldValue(page, fieldName) {
    // Rhino:
    var src = new net.htmlparser.jericho.Source(page);
    // Nashorn:
    // var Source = Java.type("net.htmlparser.jericho.Source");
    // var src = new Source(page);

    var it = src.getAllElements('input').iterator();

    while (it.hasNext()) {
        var element = it.next();
        if (element.getAttributeValue('name') == fieldName) {
            return element.getAttributeValue('value');
        }
    }
    return '';
}
```

* Create "DVWA" context (or edit the "Default Context"):
  * Context Name: `DVWAv1.9` <br>
  * In "Include in Context" panel add: `\Qhttp://localhost/DVWA\E.*` <br>
  * In "Exclude from Context" panel add:  <br>
`\Qhttp://localhost/DVWA/login.php\E` <br>
`\Qhttp://localhost/DVWA/logout.php\E` <br>
`\Qhttp://localhost/DVWA/setup.php\E` <br>
  * In "Authentication" panel, choose "Script-Based Authentication" [3], select the "DVWA" authentication script, load it and fill the fields: <br>
Login URL: `http://localhost/DVWA/login.php` <br>
CSRF Field: `user_token` <br>
POST Data: `username={%username%}&password={%password%}&Login=Login&user_token={%user_token%}` <br>
Logged in: `\Q<a href="logout.php">Logout</a>\E`  <br>
Logged Out: `(?:Location: [./]*login\.php)|(?:\Q<form action="login.php" method="post">\E)` <br>
  * In "Users" panel, add the user: <br>
User Name: `Administrator` <br>
Username: `admin` <br>
Password: `password` <br>
  * Close the dialogue. <br>

* Verify authentication is working, create seed for the spider and configure DVWA: <br>
  * Enable "Force User Mode" [4] and access the main page (e.g. "http://localhost/DVWA") while proxying through ZAP, cookies should be disabled in the browser; It should show the main page thus the authentication is working and the spider has a seed; <br>
  * Access "http://localhost/DVWA/security.php" and change the "Security Level" to "low"; <br>
  * Disable the "Forced User Mode" (no longer needed). <br>
  * Exclude from the context the following URLs, to prevent the spider from changing the "Security Level" and the password: <br>
`\Qhttp://localhost/DVWA/security.php\E` <br>
`\Qhttp://localhost/DVWA/vulnerabilities/csrf\E.*` <br>

With the context and authentication set up, it's possible to spider/scan as user.

* Spider:
  * Select "Spider" tab and click the button "New Scan";
  * Click "Select...", choose the context (e.g. "DVWAv1.9") and click OK;
  * Select the user "Administrator" and click "Start Scan";
  * Spider should start and spider as user "Administrator". The spider can be run a second time to ensure that all URLs are found.

* Active Scan:
  * Select "Active Scan" tab and click the button "New Scan";
  * Click "Select...", choose the context (e.g. "DVWAv1.9") and click OK;
  * Select the user "Administrator" and click "Start Scan";
  * Active scanner should start and scan as user "Administrator".

Active scanner should find some issues:

  - Cross Site Scripting (Persistent) (4)
  - Cross Site Scripting (Reflected) (6)
  - Path Traversal
  - Remote OS Command Injection
  - SQL Injection - MySQL
  - SQL Injection (2)
  - Directory Browsing (7)

* Fuzzing:

If you are tackling a fuzzing challenge in DVWA and need to handle CSRF tokens, the following details may be of assistance:

 - The script works with Nashorn script engine (Java 8), if you are using Java 7 it needs some changes (the changes are mentioned in the original script).
 - The constants defined in the beginning of the file might need to be changed (e.g. SOURCE_URL to match the target server/webapp).
 - The script assumes that the message being fuzzed has a valid DVWA session.

``` JavaScript
var SOURCE_URL = "http://localhost/DVWA/vulnerabilities/brute/";
var CSRF_TOKEN_NAME = "user_token";
var REQUEST_URI = new org.apache.commons.httpclient.URI(SOURCE_URL, true);

function processMessage(utils, message) {
    var msg = message.cloneRequest();
    msg.getRequestHeader().setURI(REQUEST_URI);
    var csrfTokenValue = extractInputFieldValue(getPageContent(utils, msg), CSRF_TOKEN_NAME);

    var params = message.getUrlParams();
    replace(params, CSRF_TOKEN_NAME, encodeURIComponent(csrfTokenValue));
    message.getRequestHeader().setGetParams(params);
}

function processResult(utils, fuzzResult){
    return true;
}

function getPageContent(utils, msg) {
    utils.sendMessage(msg);
    utils.addMessageToResults("Refresh " + CSRF_TOKEN_NAME, msg)
    return msg.getResponseBody().toString();
}

function extractInputFieldValue(page, fieldName) {
    var Source = Java.type("net.htmlparser.jericho.Source");
    var src = new Source(page);

    var it = src.getAllElements('input').iterator();

    while (it.hasNext()) {
        var element = it.next();
        if (element.getAttributeValue('name') == fieldName) {
            return element.getAttributeValue('value');
        }
    }
    return '';
}

function replace(params, name, value) {
    var it = params.iterator();

    while (it.hasNext()) {
        var param = it.next();
        if (param.getName() == name) {
            param.setValue(value);
            return;
        }
    }
}
```  
