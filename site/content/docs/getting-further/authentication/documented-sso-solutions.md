---
title: "Authentication - Documented SSO Solutions"
tags: 
- authentication
- guide
type: page
aliases:
  /docs/authentication/documented-sso-solutions/
---

The following SSO providers have documented solutions for automation.

We will aim to test ZAP with as many of these providers as possible in order to provide specific ZAP integration details. 
If you would like to help with this effort then please get in touch :grin:.

#### Keycloak

* Documentation: https://www.keycloak.org/docs/latest/securing_apps/#_resource_owner_password_credentials_flow
* Test service: none

Suggested way to get a session token using a direct grant:

```
curl \
  -d "client_id=myclient" \
  -d "client_secret=40cc097b-2a57-4c17-b36a-8fdf3fc2d578" \
  -d "username=user" \
  -d "password=password" \
  -d "grant_type=password" \
  "http://{{keycloak_address}}/realms/{{realm}}/protocol/openid-connect/token"
```

Way to check if the user session is still valid:

```
http://{{keycloak_address}}/realms/{{realm}}/protocol/openid-connect/userinfo
```

Expected failure likely to be a 401 with:

```
{
    "error": "invalid_request",
    "error_description": "User session not found or doesn't have client attached on it"
}
```


#### LemonlDAP:NG

* Documentation: https://lemonldap-ng.org/documentation/latest/testopenidconnect.html
* Test service: https://oidctest.wsweet.org/

{{<prevnext prevUrl="../auto-detection/" prevTitle="Auto Detection" nextUrl="../manual-auth/" nextTitle="Manual authentication">}}