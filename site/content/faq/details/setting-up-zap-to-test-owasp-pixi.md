---
title: "Setting up ZAP to Test OWASP Pixi"
type: faq
category: Technologies Supported
weight: 7
---

**Notes**:

- This FAQ is a work in progress as of 2018-June-1
- This FAQ contains spoilers: `<details>` tags have been used to make them expandable and not immediately visible (which should work in most modern browsers).
- These instructions assume you've created a user: `test@example.com` with password: `testExample` (via http://localhost:8000/register).

The following the steps are based on spider/scan of Pixi at `http://localhost:8000/` using ZAP 2.7.0.

- Access Pixi (http://localhost:8000/) while proxying through ZAP.
- Register a user (then logout if you're automatically logged in). Login with that user. Logout.
- Create "pixi" context (or edit the "Default Context"):
  - "Include in Context": `http://localhost:8000.*`
  - "Exclude from Context": `http://localhost:8000/logout`
  - "Flag as Context" > "pixi: Form-based Auth Login Request" `POST:login(pass,user)`.
  - Set "Username Parameter" as `user` and "Password Parameter" as `pass`.
- Navigate to http://localhost:8000/about (while proxying through ZAP).
  - Find `GET:about` in the Sites tree, in the response find "My Profile". While "My Profile" is highlighted right click and "Flag as Context" > "pixi : Authentication Logged-in Indicator".
- Open the "pixi" context and goto the "Users" panel.
  - Click "Add..."
  - Create a user as follows:
    - User Name: `test`
    - Username: `test@example.com`
    - Password: `testExample`
- Back in the Sites tree, right click "http://localhost:8000" select "Attack" then "Spider...".
  - In the Spider dialog select `test` from the "User" dropdown menu.
  - Click "Start Scan".
- In your browser access "My Profile" and note the URL. (It should be something like `http://localhost:8000/profile/45`.) Find the URL in the Sites tree (ex: `GET:45` in the "profile" folder) right click and exclude it from the Context (or just the Scanner). [This is done to prevent the scanner from changing the password of the user account being used to scan.]
- Optionally run the Ajax spider (using the context and configured user).
- At this point you should login as the admin user. Hopefully you've already figured out the vulnerability to get those details.

{{<details summary="Spoiler: Getting the Admin user details" details="Access \"http://localhost:8000/service.conf\".">}}

- As was done earlier make a new 'admin' user, based on the details obtained in the previous step.
