---
title: "Setting up ZAP to Test OWASP Pixi"
type: faq
category: Technologies Supported
weight: 7
---

**Note**: This FAQ is a work in progress as of 2018-June-11.<br>

The following the steps are based on spider/scan of Pixi at `http://localhost:8000/` using ZAP 2.7.0.<br>

**Note**: This FAQ contains spoilers: `<details>` tags have been used to make them expandable and not immediately visible (which should work in most modern browsers).<br>
**Note**: These instructions assume you've created a user: `test@example.com` with password: `testExample` (via http://localhost:8000/register).

1. Access Pixi (http://localhost:8000/) while proxying through ZAP.
2. Register a user (then logout if you're automatically logged in). Login with that user. Logout.
3. Create "pixi" context (or edit the "Default Context"): <br>
  1. "Include in Context": `http://localhost:8000.*` <br>
  1. "Exclude from Context":  `http://localhost:8000/logout` <br>
  1. "Flag as Context" > "pixi: Form-based Auth Login Request" `POST:login(pass,user)`.<br>
  1. Set "Username Parameter" as `user` and "Password Parameter" as `pass`.<br>
1. Navigate to http://localhost:8000/about (while proxying through ZAP).<br>
  1. Find `GET:about` in the Sites tree, in the response find "My Profile". While "My Profile" is highlighted right click and "Flag as Context" > "pixi : Authentication Logged-in Indicator".
1. Open the "pixi" context and goto the "Users" panel.<br>
  1. Click "Add..."<br>
  1. Create a user as follows:
      * User Name: `test`
      * Username: `test@example.com`
      * Password: `testExample`
1. Back in the Sites tree, right click "http://localhost:8000" select "Attack" then "Spider...".<br>
  1. In the Spider dialog select `test` from the "User" dropdown menu.<br>
  1. Click "Start Scan".
1. In your browser access "My Profile" and note the URL. (It should be something like `http://localhost:8000/profile/45`.) Find the URL in the Sites tree (ex: `GET:45` in the "profile" folder) right click and exclude it from the Context (or just the Scanner). [This is done to prevent the scanner from changing the password of the user account being used to scan.]
1. Optionally run the Ajax spider (using the context and configured user).
1. At this point you should login as the admin user. Hopefully you've already figured out the vulnerability to get those details.
    <details>
      <summary>Spoiler: Getting the Admin user details</summary>
      Access "http://localhost:8000/service.conf".
    </details>
1. As was done earlier make a new 'admin' user, based on the details obtained in the previous step.
