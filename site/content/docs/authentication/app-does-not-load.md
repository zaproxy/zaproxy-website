---
title: "Auth: App Does Not Load in Time"
type: page
layout: decision-action
action: Increase the "Time to wait"
---

Some modern apps can take a long time to load.

Keep increasing the 'Time to Wait (seconds)' field in the Authentication Tester and retesting until you see your app completely load in the browser.

This field controls the time the browser will wait before closing.
Be aware it might take even longer in CI/CD.

#### Next Step: [Run the Auth Tester](../auth-tester-results/) again
