---
title: "ZAP JWT Support Add-on"
description: "How to scan and fuzz JWT's using OWASP ZAP"
images:
- https://www.zaproxy.org/blog/2020-04-17-zap-jwt-scanner/images/jwt-options-panel.png
type: post
tags:
- blog
date: "2020-09-03"
addSocialPreview: true
authors:
    - preetkaran20 (Karan Preet Singh Sasan)
---

With the popularity of JSON Web Tokens (JWTs) there comes the need to secure their use so that they are not misused because of bad configuration, older libraries, or buggy implementations. So the JWT Support Add-on is used to find such vulnerabilities and this blog explains on how to use it.

## Configuration
As JWT add-on includes a rule for the Active Scanner and Fuzzer but there are configuration details which are specific for the JWT add-on
Under ZAP's Options dialog you will find a JWT section as shown below:
![JWT](./images/jwt-options-panel.png)
 
### Explanation

#### Scanner Configuration: 

In case the application which you are trying to scan is using RSA or more specifically RS* algorithm then please configure the public certificate TrustStore path and TrustStore password. These fields are used to find certain vulnerabilities related to RS* based JWTs.

Enable Client Configuration Scan flag is used to enable client side validations like JWT being sent to the browser in an insecure or non-recommended way.

#### Fuzzer Configuration:

As JWT is a signed token hence fuzzing field values require resigning the JWT and hence for signing fuzzer requires HMac secret key or RSA's private key as per the algorithm header field of JWT. So Fuzzer configurations corresponds to the same.

### Scanner Vulnerability Coverage
The JWT add-on's scan rule attempts to identified vulnerabilities in both Client/Browser and Server/Library implementations.

For the Client side it covers most of the vulnerabilities mentioned in the [OWASP JWT CheatSheet](https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_Cheat_Sheet_for_Java.html#token-storage-on-client-side).

For Server side it mainly covers following vulnerabilities:
1. [None Algorithm attack](https://auth0.com/blog/critical-vulnerabilities-in-json-web-token-libraries/#Meet-the--None--Algorithm)
2. [Algorithm Confusion attack](https://auth0.com/blog/critical-vulnerabilities-in-json-web-token-libraries/#RSA-or-HMAC-)
3. [Trusting JWK provided with the Token](https://nvd.nist.gov/vuln/detail/CVE-2018-0114)
4. Empty JWT
5. Null Byte Injection attack

### Fuzzer View
JWT fuzzer view is different from Http Fuzzer view as JWT's needs to be parsed and then JWT field values can be fuzzed so following is the Fuzzer view:
![Fuzzer View](./images/fuzzer-view.png)

The **Signature Operation** drop down is used to control the operations on the Signature field of JWT.
1. **No Signature**: This value is used to remove the signature component from the newly fuzzed JWT.
2. **Same Signature**: This value is used to use the same signature for the newly fuzzed JWT.
3. **New Signature**: This value is used to generate new signature for the newly fuzzed JWT.

The **Component** drop down is used to choose the **Header** or the **Payload** components of the JWT.

The **Key** drop down is used to choose the fields to be fuzzed in the **Header** or **Payload** components of the JWT.

For more information please visit [JWT Support](https://github.com/SasanLabs/owasp-zap-jwt-addon)
