---
title: "ZAP vs Websites Vulnerable to SSTI"
type: page
EditableContent: true
---
Websites Vulnerable to SSTI is a set of simple servers which are vulnerable to Server Side Template Injection. 

It is not available online, the GitHub repo is https://github.com/DiogoMRSilva/websitesVulnerableToSSTI
It is actively maintained by a ZAP contributor: [Diogo Silva](https://github.com/DiogoMRSilva). 

The vulnerabilities are reported by various ZAP scan rules - if any of them find a vulnerability then we count that as a pass.

Note that the "Non Vulnerable" site _is_ actually vulnerable to XSS attacks :smile:

{{< ssti-table target="ssti" section="all" >}}
