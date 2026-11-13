---
# This page was generated from the add-on.
title: Apache HTTP Server Known Vulnerabilities
type: userguide
weight: 1
---

# Apache HTTP Server Known Vulnerabilities

This page lists the known vulnerabilities (CVEs) in the Apache HTTP Server itself which the "Apache HTTP Server Version with Known Vulnerabilities" alert of the [Server Side Technology Version with Known Vulnerabilities](/docs/desktop/addons/passive-scan-rules/#id-20020) passive scan rule checks disclosed versions against.


The vulnerability details below are generated from the [Apache HTTP Server
project's CVE records](https://httpd.apache.org/security/) when the add-on is built, so they are not translated. Vulnerabilities are listed most severe first.
Versions marked as assumed to be affected were listed by the project as only possibly affected.


Last updated: 2026-11-12. Vulnerabilities listed: 290.

## CVE-2026-119618 (Critical) {#cve-2026-119618}

**mod_http2: heap corruption and RCE in assign_headers**


Concurrent Execution using Shared Resource with Improper Synchronization vulnerability in Apache HTTP Server's mod_http2 in assign_headers() can lead to RCE.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2026-11-11                      |
| Affected versions: | 2.4.55 and later, before 2.4.71 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-119618>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-119618>
* <https://httpd.apache.org/security/json/CVE-2026-119618.json>

## CVE-2021-42013 (Critical) {#cve-2021-42013}

**Path Traversal and Remote Code Execution in Apache HTTP Server 2.4.49 and 2.4.50 (incomplete fix of CVE-2021-41773)**


It was found that the fix for CVE-2021-41773 in Apache HTTP Server 2.4.50 was insufficient. An attacker could use a path traversal attack to map URLs to files outside the directories configured by Alias-like directives.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2021-10-07                      |
| Affected versions: | 2.4.49 and later, before 2.4.51 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2021-42013>
* <https://nvd.nist.gov/vuln/detail/CVE-2021-42013>
* <https://httpd.apache.org/security/json/CVE-2021-42013.json>

## CVE-2021-41773 (Critical) {#cve-2021-41773}

**Path traversal and file disclosure vulnerability in Apache HTTP Server 2.4.49**


A flaw was found in a change made to path normalization in Apache HTTP Server 2.4.49. An attacker could use a path traversal attack to map URLs to files outside the directories configured by Alias-like directives.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2021-10-04                      |
| Affected versions: | 2.4.49 and later, before 2.4.50 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2021-41773>
* <https://nvd.nist.gov/vuln/detail/CVE-2021-41773>
* <https://httpd.apache.org/security/json/CVE-2021-41773.json>

## CVE-2004-0786 (Critical) {#cve-2004-0786}

**IPv6 URI parsing heap overflow**


Testing using the Codenomicon HTTP Test Tool performed by the Apache Software Foundation security group and Red Hat uncovered an input validation issue in the IPv6 URI parsing routines in the apr-util library. If a remote attacker sent a request including a carefully crafted URI, an httpd child process could be made to crash. One some BSD systems it is believed this flaw may be able to lead to remote code execution.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2004-09-15                      |
| Affected versions: | 2.0.35 and later, before 2.0.51 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2004-0786>
* <https://nvd.nist.gov/vuln/detail/CVE-2004-0786>
* <https://httpd.apache.org/security/json/CVE-2004-0786.json>

## CVE-2003-0245 (Critical) {#cve-2003-0245}

**APR remote crash**


A vulnerability in the apr_psprintf function in the Apache Portable Runtime (APR) library allows remote attackers to cause a denial of service (crash) and possibly execute arbitrary code via long strings, as demonstrated using XML objects to mod_dav, and possibly other vectors.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2003-05-28                      |
| Affected versions: | 2.0.37 and later, before 2.0.46 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2003-0245>
* <https://nvd.nist.gov/vuln/detail/CVE-2003-0245>
* <https://httpd.apache.org/security/json/CVE-2003-0245.json>

## CVE-2003-0016 (Critical) {#cve-2003-0016}

**MS-DOS device name filtering**


On Windows platforms Apache did not correctly filter MS-DOS device names which could lead to denial of service attacks or remote code execution.


|                    |                                                                                                          |
|--------------------|----------------------------------------------------------------------------------------------------------|
| Published:         | 2003-01-20                                                                                               |
| Affected versions: | 2.0.35 and later, before 2.0.43 (assumed, not confirmed by the advisory) 2.0.43 and later, before 2.0.44 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2003-0016>
* <https://nvd.nist.gov/vuln/detail/CVE-2003-0016>
* <https://httpd.apache.org/security/json/CVE-2003-0016.json>

## CVE-2002-0392 (Critical) {#cve-2002-0392}

**Apache Chunked encoding vulnerability**


Malicious requests can cause various effects ranging from a relatively harmless increase in system resources through to denial of service attacks and in some cases the ability to execute arbitrary remote code.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2002-06-17                                                     |
| Affected versions: | 1.3.0 and later, before 1.3.26 2.0.35 and later, before 2.0.37 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2002-0392>
* <https://nvd.nist.gov/vuln/detail/CVE-2002-0392>
* <https://httpd.apache.org/security/json/CVE-2002-0392.json>

## CVE-2002-0061 (Critical) {#cve-2002-0061}

**Win32 Apache Remote command execution**


Apache for Win32 before 1.3.24 and 2.0.34-beta allows remote attackers to execute arbitrary commands via parameters passed to batch file CGI scripts.


|                    |                                                                                                         |
|--------------------|---------------------------------------------------------------------------------------------------------|
| Published:         | 2002-03-22                                                                                              |
| Affected versions: | 1.3.0 and later, before 1.3.22 (assumed, not confirmed by the advisory) 1.3.22 and later, before 1.3.24 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2002-0061>
* <https://nvd.nist.gov/vuln/detail/CVE-2002-0061>
* <https://httpd.apache.org/security/json/CVE-2002-0061.json>

## CVE-2026-106023 (High) {#cve-2026-106023}

**mod_md NULL pointer dereference leads to child process crash**


NULL pointer dereference vulnerability in Apache HTTP Server's mod_md during HTTP request processing.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2026-11-11                      |
| Affected versions: | 2.4.30 and later, before 2.4.71 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-106023>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-106023>
* <https://httpd.apache.org/security/json/CVE-2026-106023.json>

## CVE-2026-23918 (High) {#cve-2026-23918}

**Apache HTTP Server: http2: double free and possible RCE on early reset**


Double Free and possible RCE vulnerability in Apache HTTP Server with the HTTP/2 protocol.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2026-05-04                      |
| Affected versions: | 2.4.66 and later, before 2.4.67 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-23918>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-23918>
* <https://httpd.apache.org/security/json/CVE-2026-23918.json>

## CVE-2024-40725 (High) {#cve-2024-40725}

**Apache HTTP Server: source code disclosure with handlers configured via AddType**


A partial fix for CVE-2024-39884 in the core of Apache HTTP Server 2.4.61 ignores some use of the legacy content-type based configuration of handlers. "AddType" and similar configuration, under some circumstances where files are requested indirectly, result in source code disclosure of local content. For example, PHP scripts may be served instead of interpreted.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2024-07-17                      |
| Affected versions: | 2.4.60 and later, before 2.4.62 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2024-40725>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-40725>
* <https://httpd.apache.org/security/json/CVE-2024-40725.json>

## CVE-2024-40898 (High) {#cve-2024-40898}

**Apache HTTP Server: SSRF with mod_rewrite in server/vhost context on Windows**


SSRF in Apache HTTP Server on Windows with mod_rewrite in server/vhost context, allows to potentially leak NTLM hashes to a malicious server via SSRF and malicious requests.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2024-07-17                     |
| Affected versions: | 2.4.0 and later, before 2.4.62 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2024-40898>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-40898>
* <https://httpd.apache.org/security/json/CVE-2024-40898.json>

## CVE-2024-39884 (High) {#cve-2024-39884}

**Apache HTTP Server: source code disclosure with handlers configured via AddType**


A regression in the core of Apache HTTP Server 2.4.60 ignores some use of the legacy content-type based configuration of handlers. "AddType" and similar configuration, under some circumstances where files are requested indirectly, result in source code disclosure of local content. For example, PHP scripts may be served instead of interpreted.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2024-07-03                      |
| Affected versions: | 2.4.60 and later, before 2.4.61 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2024-39884>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-39884>
* <https://httpd.apache.org/security/json/CVE-2024-39884.json>

## CVE-2024-38472 (High) {#cve-2024-38472}

**Apache HTTP Server on WIndows UNC SSRF**


SSRF in Apache HTTP Server on Windows allows to potentially leak NTLM hashes to a malicious server via SSRF and malicious requests or content Users are recommended to upgrade to version 2.4.60 which fixes this issue. Note: Existing configurations that access UNC paths will have to configure new directive "UNCList" to allow access during request processing.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2024-07-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.60 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2024-38472>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-38472>
* <https://httpd.apache.org/security/json/CVE-2024-38472.json>

## CVE-2024-38474 (High) {#cve-2024-38474}

**Apache HTTP Server weakness with encoded question marks in backreferences**


Substitution encoding issue in mod_rewrite in Apache HTTP Server 2.4.59 and earlier allows attacker to execute scripts in directories permitted by the configuration but not directly reachable by any URL or source disclosure of scripts meant to only to be executed as CGI.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2024-07-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.60 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2024-38474>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-38474>
* <https://httpd.apache.org/security/json/CVE-2024-38474.json>

## CVE-2024-38475 (High) {#cve-2024-38475}

**Apache HTTP Server weakness in mod_rewrite when first segment of substitution matches filesystem path.**


Improper escaping of output in mod_rewrite in Apache HTTP Server 2.4.59 and earlier allows an attacker to map URLs to filesystem locations that are permitted to be served by the server but are not intentionally/directly reachable by any URL, resulting in code execution or source code disclosure.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2024-07-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.60 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2024-38475>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-38475>
* <https://httpd.apache.org/security/json/CVE-2024-38475.json>

## CVE-2024-38476 (High) {#cve-2024-38476}

**Apache HTTP Server may use exploitable/malicious backend application output to run local handlers via internal redirect**


Vulnerability in core of Apache HTTP Server 2.4.59 and earlier are vulnerably to information disclosure, SSRF or local script execution via backend applications whose response headers are malicious or exploitable.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2024-07-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.60 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2024-38476>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-38476>
* <https://httpd.apache.org/security/json/CVE-2024-38476.json>

## CVE-2024-38477 (High) {#cve-2024-38477}

**Apache HTTP Server: Crash resulting in Denial of Service in mod_proxy via a malicious request**


null pointer dereference in mod_proxy in Apache HTTP Server 2.4.59 and earlier allows an attacker to crash the server via a malicious request. Users are recommended to upgrade to version 2.4.60, which fixes this issue.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2024-07-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.60 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2024-38477>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-38477>
* <https://httpd.apache.org/security/json/CVE-2024-38477.json>

## CVE-2023-25690 (High) {#cve-2023-25690}

**HTTP request splitting with mod_rewrite and mod_proxy**


Some mod_proxy configurations on Apache HTTP Server versions 2.4.0 through 2.4.55 allow a HTTP Request Smuggling attack.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2023-03-07                     |
| Affected versions: | 2.4.0 and later, before 2.4.56 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2023-25690>
* <https://nvd.nist.gov/vuln/detail/CVE-2023-25690>
* <https://httpd.apache.org/security/json/CVE-2023-25690.json>

## CVE-2022-22720 (High) {#cve-2022-22720}

**HTTP request smuggling vulnerability in Apache HTTP Server 2.4.52 and earlier**


Apache HTTP Server 2.4.52 and earlier fails to close inbound connection when errors are encountered discarding the request body, exposing the server to HTTP Request Smuggling


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2022-03-14                     |
| Affected versions: | 2.4.0 and later, before 2.4.53 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2022-22720>
* <https://nvd.nist.gov/vuln/detail/CVE-2022-22720>
* <https://httpd.apache.org/security/json/CVE-2022-22720.json>

## CVE-2022-23943 (High) {#cve-2022-23943}

**mod_sed: Read/write beyond bounds**


Out-of-bounds Write vulnerability in mod_sed of Apache HTTP Server allows an attacker to overwrite heap memory with possibly attacker provided data.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2022-03-14                     |
| Affected versions: | 2.4.0 and later, before 2.4.53 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2022-23943>
* <https://nvd.nist.gov/vuln/detail/CVE-2022-23943>
* <https://httpd.apache.org/security/json/CVE-2022-23943.json>

## CVE-2021-44790 (High) {#cve-2021-44790}

**Possible buffer overflow when parsing multipart content in mod_lua of Apache HTTP Server 2.4.51 and earlier**


A carefully crafted request body can cause a buffer overflow in the mod_lua multipart parser (r:parsebody() called from Lua scripts). The Apache httpd team is not aware of an exploit for the vulnerabilty though it might be possible to craft one.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2021-12-20                     |
| Affected versions: | 2.4.0 and later, before 2.4.52 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2021-44790>
* <https://nvd.nist.gov/vuln/detail/CVE-2021-44790>
* <https://httpd.apache.org/security/json/CVE-2021-44790.json>

## CVE-2021-40438 (High) {#cve-2021-40438}

**mod_proxy SSRF**


A crafted request uri-path can cause mod_proxy to forward the request to an origin server choosen by the remote user.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2021-09-16                     |
| Affected versions: | 2.4.0 and later, before 2.4.49 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2021-40438>
* <https://nvd.nist.gov/vuln/detail/CVE-2021-40438>
* <https://httpd.apache.org/security/json/CVE-2021-40438.json>

## CVE-2021-31618 (High) {#cve-2021-31618}

**NULL pointer dereference on specially crafted HTTP/2 request**


Apache HTTP Server protocol handler for the HTTP/2 protocol checks received request headers against the size limitations as configured for the server and used for the HTTP/1 protocol as well. On violation of these restrictions and HTTP response is sent to the client with a status code indicating why the request was rejected.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2021-06-01                      |
| Affected versions: | 2.4.47 and later, before 2.4.48 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2021-31618>
* <https://nvd.nist.gov/vuln/detail/CVE-2021-31618>
* <https://httpd.apache.org/security/json/CVE-2021-31618.json>

## CVE-2020-9490 (High) {#cve-2020-9490}

**Push Diary Crash on Specifically Crafted HTTP/2 Header**


In Apache HTTP Server versions 2.4.20 to 2.4.43, a specially crafted value for the 'Cache-Digest' header in a HTTP/2 request would result in a crash when the server actually tries to HTTP/2 PUSH a resource afterwards. Configuring the HTTP/2 feature via "H2Push off" will mitigate this vulnerability for unpatched servers.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2020-08-07                      |
| Affected versions: | 2.4.20 and later, before 2.4.44 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2020-9490>
* <https://nvd.nist.gov/vuln/detail/CVE-2020-9490>
* <https://httpd.apache.org/security/json/CVE-2020-9490.json>

## CVE-2019-0211 (High) {#cve-2019-0211}

**Apache HTTP Server privilege escalation from modules' scripts**


In Apache HTTP Server 2.4 releases 2.4.17 to 2.4.38, with MPM event, worker or prefork, code executing in less-privileged child processes or threads (including scripts executed by an in-process scripting interpreter) could execute arbitrary code with the privileges of the parent process (usually root) by manipulating the scoreboard. Non-Unix systems are not affected.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2019-04-01                      |
| Affected versions: | 2.4.17 and later, before 2.4.39 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2019-0211>
* <https://nvd.nist.gov/vuln/detail/CVE-2019-0211>
* <https://httpd.apache.org/security/json/CVE-2019-0211.json>

## CVE-2019-0215 (High) {#cve-2019-0215}

**mod_ssl access control bypass**


In Apache HTTP Server 2.4 releases 2.4.37 and 2.4.38, a bug in mod_ssl when using per-location client certificate verification with TLSv1.3 allowed a client supporting Post-Handshake Authentication to bypass configured access control restrictions.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2019-04-01                      |
| Affected versions: | 2.4.37 and later, before 2.4.39 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2019-0215>
* <https://nvd.nist.gov/vuln/detail/CVE-2019-0215>
* <https://httpd.apache.org/security/json/CVE-2019-0215.json>

## CVE-2019-0217 (High) {#cve-2019-0217}

**mod_auth_digest access control bypass**


In Apache HTTP Server 2.4 release 2.4.38 and prior, a race condition in mod_auth_digest when running in a threaded server could allow a user with valid credentials to authenticate using another username, bypassing configured access control restrictions.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2019-04-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.39 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2019-0217>
* <https://nvd.nist.gov/vuln/detail/CVE-2019-0217>
* <https://httpd.apache.org/security/json/CVE-2019-0217.json>

## CVE-2019-0190 (High) {#cve-2019-0190}

**mod_ssl 2.4.37 remote DoS when used with OpenSSL 1.1.1**


A bug exists in the way mod_ssl handled client renegotiations. A remote attacker could send a carefully crafted request that would cause mod_ssl to enter a loop leading to a denial of service. This bug can be only triggered with Apache HTTP Server version 2.4.37 when using OpenSSL version 1.1.1 or later, due to an interaction in changes to handling of renegotiation attempts.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2019-01-22                      |
| Affected versions: | 2.4.37 and later, before 2.4.38 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2019-0190>
* <https://nvd.nist.gov/vuln/detail/CVE-2019-0190>
* <https://httpd.apache.org/security/json/CVE-2019-0190.json>

## CVE-2017-9788 (High) {#cve-2017-9788}

**Uninitialized memory reflection in mod_auth_digest**


The value placeholder in \[Proxy-\]Authorization headers of type 'Digest' was not initialized or reset before or between successive key=value assignments. by mod_auth_digest. Providing an initial key with no '=' assignment could reflect the stale value of uninitialized pool memory used by the prior request, leading to leakage of potentially confidential information, and a segfault.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2017-07-11                                                    |
| Affected versions: | 2.2.0 and later, before 2.2.34 2.4.1 and later, before 2.4.27 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2017-9788>
* <https://nvd.nist.gov/vuln/detail/CVE-2017-9788>
* <https://httpd.apache.org/security/json/CVE-2017-9788.json>

## CVE-2017-9789 (High) {#cve-2017-9789}

**Read after free in mod_http2**


When under stress, closing many connections, the HTTP/2 handling code would sometimes access memory after it has been freed, resulting in potentially erratic behaviour.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2017-07-11                      |
| Affected versions: | 2.4.26 and later, before 2.4.27 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2017-9789>
* <https://nvd.nist.gov/vuln/detail/CVE-2017-9789>
* <https://httpd.apache.org/security/json/CVE-2017-9789.json>

## CVE-2017-3167 (High) {#cve-2017-3167}

**ap_get_basic_auth_pw() Authentication Bypass**


Use of the ap_get_basic_auth_pw() by third-party modules outside of the authentication phase may lead to authentication requirements being bypassed. Third-party module writers SHOULD use ap_get_basic_auth_components(), available in 2.2.34 and 2.4.26, instead of ap_get_basic_auth_pw(). Modules which call the legacy ap_get_basic_auth_pw() during the authentication phase MUST either immediately authenticate the user after the call, or else stop the request immediately with an error response, to...


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2017-06-19                                                    |
| Affected versions: | 2.2.0 and later, before 2.2.34 2.4.1 and later, before 2.4.26 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2017-3167>
* <https://nvd.nist.gov/vuln/detail/CVE-2017-3167>
* <https://httpd.apache.org/security/json/CVE-2017-3167.json>

## CVE-2017-3169 (High) {#cve-2017-3169}

**mod_ssl Null Pointer Dereference**


mod_ssl may dereference a NULL pointer when third-party modules call ap_hook_process_connection() during an HTTP request to an HTTPS port.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2017-06-19                                                    |
| Affected versions: | 2.2.0 and later, before 2.2.34 2.4.1 and later, before 2.4.26 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2017-3169>
* <https://nvd.nist.gov/vuln/detail/CVE-2017-3169>
* <https://httpd.apache.org/security/json/CVE-2017-3169.json>

## CVE-2017-7659 (High) {#cve-2017-7659}

**mod_http2 Null Pointer Dereference**


A maliciously constructed HTTP/2 request could cause mod_http2 to dereference a NULL pointer and crash the server process.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2017-06-19                      |
| Affected versions: | 2.4.25 and later, before 2.4.26 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2017-7659>
* <https://nvd.nist.gov/vuln/detail/CVE-2017-7659>
* <https://httpd.apache.org/security/json/CVE-2017-7659.json>

## CVE-2017-7668 (High) {#cve-2017-7668}

**ap_find_token() Buffer Overread**


The HTTP strict parsing changes added in 2.2.32 and 2.4.24 introduced a bug in token list parsing, which allows ap_find_token() to search past the end of its input string. By maliciously crafting a sequence of request headers, an attacker may be able to cause a segmentation fault, or to force ap_find_token() to return an incorrect value.


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| Published:         | 2017-06-19                                                      |
| Affected versions: | 2.2.32 and later, before 2.2.34 2.4.25 and later, before 2.4.26 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2017-7668>
* <https://nvd.nist.gov/vuln/detail/CVE-2017-7668>
* <https://httpd.apache.org/security/json/CVE-2017-7668.json>

## CVE-2017-7679 (High) {#cve-2017-7679}

**mod_mime Buffer Overread**


mod_mime can read one byte past the end of a buffer when sending a malicious Content-Type response header.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2017-06-19                                                    |
| Affected versions: | 2.2.0 and later, before 2.2.34 2.4.1 and later, before 2.4.26 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2017-7679>
* <https://nvd.nist.gov/vuln/detail/CVE-2017-7679>
* <https://httpd.apache.org/security/json/CVE-2017-7679.json>

## CVE-2016-8743 (High) {#cve-2016-8743}

**Apache HTTP Request Parsing Whitespace Defects**


Apache HTTP Server, prior to release 2.4.25 (and 2.2.32), accepted a broad pattern of unusual whitespace patterns from the user-agent, including bare CR, FF, VTAB in parsing the request line and request header lines, as well as HTAB in parsing the request line. Any bare CR present in request lines was treated as whitespace and remained in the request field member "the_request", while a bare CR in the request header field name would be honored as whitespace, and a bare CR in the request header...


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2016-12-20                                                    |
| Affected versions: | 2.2.0 and later, before 2.2.32 2.4.1 and later, before 2.4.25 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2016-8743>
* <https://nvd.nist.gov/vuln/detail/CVE-2016-8743>
* <https://httpd.apache.org/security/json/CVE-2016-8743.json>

## CVE-2016-4979 (High) {#cve-2016-4979}

**TLS/SSL X.509 client certificate auth bypass with HTTP/2**


For configurations enabling support for HTTP/2, SSL client certificate validation was not enforced if configured, allowing clients unauthorized access to protected resources over HTTP/2. This issue affected releases 2.4.18 and 2.4.20 only.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2016-07-05                      |
| Affected versions: | 2.4.18 and later, before 2.4.23 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2016-4979>
* <https://nvd.nist.gov/vuln/detail/CVE-2016-4979>
* <https://httpd.apache.org/security/json/CVE-2016-4979.json>

## CVE-2014-3523 (High) {#cve-2014-3523}

**WinNT MPM denial of service**


A flaw was found in the WinNT MPM in httpd versions 2.4.1 to 2.4.9, when using the default AcceptFilter for that platform. A remote attacker could send carefully crafted requests that would leak memory and eventually lead to a denial of service against the server.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2014-07-15                     |
| Affected versions: | 2.4.1 and later, before 2.4.10 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2014-3523>
* <https://nvd.nist.gov/vuln/detail/CVE-2014-3523>
* <https://httpd.apache.org/security/json/CVE-2014-3523.json>

## CVE-2014-0231 (High) {#cve-2014-0231}

**mod_cgid denial of service**


A flaw was found in mod_cgid. If a server using mod_cgid hosted CGI scripts which did not consume standard input, a remote attacker could cause child processes to hang indefinitely, leading to denial of service.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2014-07-14                                                    |
| Affected versions: | 2.2.0 and later, before 2.2.29 2.4.1 and later, before 2.4.10 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2014-0231>
* <https://nvd.nist.gov/vuln/detail/CVE-2014-0231>
* <https://httpd.apache.org/security/json/CVE-2014-0231.json>

## CVE-2012-3502 (High) {#cve-2012-3502}

**Response mixup when using mod_proxy_ajp or mod_proxy_http**


The modules mod_proxy_ajp and mod_proxy_http did not always close the connection to the back end server when necessary as part of error handling. This could lead to an information disclosure due to a response mixup between users.


|                    |                               |
|--------------------|-------------------------------|
| Published:         | 2012-08-16                    |
| Affected versions: | 2.4.1 and later, before 2.4.3 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2012-3502>
* <https://nvd.nist.gov/vuln/detail/CVE-2012-3502>
* <https://httpd.apache.org/security/json/CVE-2012-3502.json>

## CVE-2011-3192 (High) {#cve-2011-3192}

**Range header remote DoS**


A flaw was found in the way the Apache HTTP Server handled Range HTTP headers. A remote attacker could use this flaw to cause httpd to use an excessive amount of memory and CPU time via HTTP requests with a specially-crafted Range header. This could be used in a denial of service attack. Advisory: CVE-2011-3192.txt


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2011-08-20                                                     |
| Affected versions: | 2.0.35 and later, before 2.0.65 2.2.0 and later, before 2.2.20 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2011-3192>
* <https://nvd.nist.gov/vuln/detail/CVE-2011-3192>
* <https://httpd.apache.org/security/json/CVE-2011-3192.json>

## CVE-2010-2791 (High) {#cve-2010-2791}

**Timeout detection flaw (mod_proxy_http)**


An information disclosure flaw was found in mod_proxy_http in version 2.2.9 only, on Unix platforms. Under certain timeout conditions, the server could return a response intended for another user. Only those configurations which trigger the use of proxy worker pools are affected. There was no vulnerability on earlier versions, as proxy pools were not yet introduced. The simplest workaround is to globally configure: SetEnv proxy-nokeepalive 1


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2010-07-23                     |
| Affected versions: | 2.2.9 and later, before 2.2.10 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2010-2791>
* <https://nvd.nist.gov/vuln/detail/CVE-2010-2791>
* <https://httpd.apache.org/security/json/CVE-2010-2791.json>

## CVE-2010-2068 (High) {#cve-2010-2068}

**Timeout detection flaw (mod_proxy_http)**


An information disclosure flaw was found in mod_proxy_http in versions 2.2.9 through 2.2.15, 2.3.4-alpha and 2.3.5-alpha. Under certain timeout conditions, the server could return a response intended for another user. Only Windows, Netware and OS2 operating systems are affected. Only those configurations which trigger the use of proxy worker pools are affected. There was no vulnerability on earlier versions, as proxy pools were not yet introduced. The simplest workaround is to globally...


|                    |                                                              |
|--------------------|--------------------------------------------------------------|
| Published:         | 2010-06-09                                                   |
| Affected versions: | 2.2.9 and later, before 2.2.16 2.3.4 and later, before 2.3.6 |


References:

* <https://httpd.apache.org/security/vulnerabilities_23.html#CVE-2010-2068>
* <https://nvd.nist.gov/vuln/detail/CVE-2010-2068>
* <https://httpd.apache.org/security/json/CVE-2010-2068.json>

## CVE-2010-0425 (High) {#cve-2010-0425}

**mod_isapi module unload flaw**


A flaw was found with within mod_isapi which would attempt to unload the ISAPI dll when it encountered various error states. This could leave the callbacks in an undefined state and result in a segfault. On Windows platforms using mod_isapi, a remote attacker could send a malicious request to trigger this issue, and as win32 MPM runs only one process, this would result in a denial of service, and potentially allow arbitrary code execution.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2010-03-02                                                     |
| Affected versions: | 2.0.37 and later, before 2.0.64 2.2.0 and later, before 2.2.15 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2010-0425>
* <https://nvd.nist.gov/vuln/detail/CVE-2010-0425>
* <https://httpd.apache.org/security/json/CVE-2010-0425.json>

## CVE-2009-1890 (High) {#cve-2009-1890}

**mod_proxy reverse proxy DoS**


A denial of service flaw was found in the mod_proxy module when it was used as a reverse proxy. A remote attacker could use this flaw to force a proxy process to consume large amounts of CPU time.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2009-07-02                     |
| Affected versions: | 2.2.0 and later, before 2.2.12 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2009-1890>
* <https://nvd.nist.gov/vuln/detail/CVE-2009-1890>
* <https://httpd.apache.org/security/json/CVE-2009-1890.json>

## CVE-2009-1191 (High) {#cve-2009-1191}

**mod_proxy_ajp information disclosure**


An information disclosure flaw was found in mod_proxy_ajp in version 2.2.11 only. In certain situations, if a user sent a carefully crafted HTTP request, the server could return a response intended for another user.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2009-04-21                      |
| Affected versions: | 2.2.11 and later, before 2.2.12 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2009-1191>
* <https://nvd.nist.gov/vuln/detail/CVE-2009-1191>
* <https://httpd.apache.org/security/json/CVE-2009-1191.json>

## CVE-2006-3747 (High) {#cve-2006-3747}

**mod_rewrite off-by-one error**


An off-by-one flaw exists in the Rewrite module, mod_rewrite. Depending on the manner in which Apache httpd was compiled, this software defect may result in a vulnerability which, in combination with certain types of Rewrite rules in the web server configuration files, could be triggered remotely. For vulnerable builds, the nature of the vulnerability can be denial of service (crashing of web server processes) or potentially allow arbitrary code execution.


|                    |                                                                                               |
|--------------------|-----------------------------------------------------------------------------------------------|
| Published:         | 2006-07-27                                                                                    |
| Affected versions: | 1.3.28 and later, before 1.3.37 2.0.46 and later, before 2.0.59 2.2.0 and later, before 2.2.3 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2006-3747>
* <https://nvd.nist.gov/vuln/detail/CVE-2006-3747>
* <https://httpd.apache.org/security/json/CVE-2006-3747.json>

## CVE-2005-2700 (High) {#cve-2005-2700}

**SSLVerifyClient bypass**


A flaw in the mod_ssl handling of the "SSLVerifyClient" directive. This flaw would occur if a virtual host has been configured using "SSLVerifyClient optional" and further a directive "SSLVerifyClient required" is set for a specific location. For servers configured in this fashion, an attacker may be able to access resources that should otherwise be protected, by not supplying a client certificate when connecting.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2005-08-30                      |
| Affected versions: | 2.0.35 and later, before 2.0.55 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2005-2700>
* <https://nvd.nist.gov/vuln/detail/CVE-2005-2700>
* <https://httpd.apache.org/security/json/CVE-2005-2700.json>

## CVE-2004-0942 (High) {#cve-2004-0942}

**Memory consumption DoS**


An issue was discovered where the field length limit was not enforced for certain malicious requests. This could allow a remote attacker who is able to send large amounts of data to a server the ability to cause Apache children to consume proportional amounts of memory, leading to a denial of service.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2004-11-01                      |
| Affected versions: | 2.0.35 and later, before 2.0.53 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2004-0942>
* <https://nvd.nist.gov/vuln/detail/CVE-2004-0942>
* <https://httpd.apache.org/security/json/CVE-2004-0942.json>

## CVE-2004-0811 (High) {#cve-2004-0811}

**Basic authentication bypass**


A flaw in Apache 2.0.51 (only) broke the merging of the Satisfy directive which could result in access being granted to resources despite any configured authentication


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2004-09-18                      |
| Affected versions: | 2.0.51 and later, before 2.0.52 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2004-0811>
* <https://nvd.nist.gov/vuln/detail/CVE-2004-0811>
* <https://httpd.apache.org/security/json/CVE-2004-0811.json>

## CVE-2004-0748 (High) {#cve-2004-0748}

**SSL connection infinite loop**


An issue was discovered in the mod_ssl module in Apache 2.0. A remote attacker who forces an SSL connection to be aborted in a particular state may cause an Apache child process to enter an infinite loop, consuming CPU resources.


|                    |                                                                                                          |
|--------------------|----------------------------------------------------------------------------------------------------------|
| Published:         | 2004-07-07                                                                                               |
| Affected versions: | 2.0.35 and later, before 2.0.50 (assumed, not confirmed by the advisory) 2.0.50 and later, before 2.0.51 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2004-0748>
* <https://nvd.nist.gov/vuln/detail/CVE-2004-0748>
* <https://httpd.apache.org/security/json/CVE-2004-0748.json>

## CVE-2004-0493 (High) {#cve-2004-0493}

**Header parsing memory leak**


A memory leak in parsing of HTTP headers which can be triggered remotely may allow a denial of service attack due to excessive memory consumption.


|                    |                                                                                                          |
|--------------------|----------------------------------------------------------------------------------------------------------|
| Published:         | 2004-07-01                                                                                               |
| Affected versions: | 2.0.35 and later, before 2.0.49 (assumed, not confirmed by the advisory) 2.0.49 and later, before 2.0.50 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2004-0493>
* <https://nvd.nist.gov/vuln/detail/CVE-2004-0493>
* <https://httpd.apache.org/security/json/CVE-2004-0493.json>

## CVE-2003-0132 (High) {#cve-2003-0132}

**Line feed memory leak DoS**


Apache 2.0 versions before Apache 2.0.45 had a significant Denial of Service vulnerability. Remote attackers could cause a denial of service (memory consumption) via large chunks of linefeed characters, which causes Apache to allocate 80 bytes for each linefeed.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2004-04-02                      |
| Affected versions: | 2.0.35 and later, before 2.0.45 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2003-0132>
* <https://nvd.nist.gov/vuln/detail/CVE-2003-0132>
* <https://httpd.apache.org/security/json/CVE-2003-0132.json>

## CVE-2004-0174 (High) {#cve-2004-0174}

**listening socket starvation**


A starvation issue on listening sockets occurs when a short-lived connection on a rarely-accessed listening socket will cause a child to hold the accept mutex and block out new connections until another connection arrives on that rarely-accessed listening socket. This issue is known to affect some versions of AIX, Solaris, and Tru64; it is known to not affect FreeBSD or Linux.


|                    |                                                                                                                                         |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2004-03-18                                                                                                                              |
| Affected versions: | 1.3.0 and later, before 1.3.29 (assumed, not confirmed by the advisory) 1.3.29 and later, before 1.3.31 2.0.35 and later, before 2.0.49 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2004-0174>
* <https://nvd.nist.gov/vuln/detail/CVE-2004-0174>
* <https://httpd.apache.org/security/json/CVE-2004-0174.json>

## CVE-2004-0113 (High) {#cve-2004-0113}

**mod_ssl memory leak**


A memory leak in mod_ssl allows a remote denial of service attack against an SSL-enabled server by sending plain HTTP requests to the SSL port.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2004-02-20                      |
| Affected versions: | 2.0.35 and later, before 2.0.49 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2004-0113>
* <https://nvd.nist.gov/vuln/detail/CVE-2004-0113>
* <https://httpd.apache.org/security/json/CVE-2004-0113.json>

## CVE-2003-0993 (High) {#cve-2003-0993}

**Allow/Deny parsing on big-endian 64-bit platforms**


A bug in the parsing of Allow/Deny rules using IP addresses without a netmask on big-endian 64-bit platforms causes the rules to fail to match.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2003-10-15                     |
| Affected versions: | 1.3.0 and later, before 1.3.31 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2003-0993>
* <https://nvd.nist.gov/vuln/detail/CVE-2003-0993>
* <https://httpd.apache.org/security/json/CVE-2003-0993.json>

## CVE-2003-0460 (High) {#cve-2003-0460}

**RotateLogs DoS**


The rotatelogs support program on Win32 and OS/2 would quit logging and exit if it received special control characters such as 0x1A.


|                    |                                                                                                         |
|--------------------|---------------------------------------------------------------------------------------------------------|
| Published:         | 2003-07-18                                                                                              |
| Affected versions: | 1.3.0 and later, before 1.3.27 (assumed, not confirmed by the advisory) 1.3.27 and later, before 1.3.28 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2003-0460>
* <https://nvd.nist.gov/vuln/detail/CVE-2003-0460>
* <https://httpd.apache.org/security/json/CVE-2003-0460.json>

## CVE-2003-0253 (High) {#cve-2003-0253}

**Remote DoS with multiple Listen directives**


In a server with multiple listening sockets a certain error returned by accept() on a rarely access port can cause a temporary denial of service, due to a bug in the prefork MPM.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2003-07-09                      |
| Affected versions: | 2.0.35 and later, before 2.0.47 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2003-0253>
* <https://nvd.nist.gov/vuln/detail/CVE-2003-0253>
* <https://httpd.apache.org/security/json/CVE-2003-0253.json>

## CVE-2003-0189 (High) {#cve-2003-0189}

**Basic Authentication DoS**


A build system problem in Apache 2.0.40 through 2.0.45 allows remote attackers to cause a denial of access to authenticated content when a threaded server is used.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2003-05-28                      |
| Affected versions: | 2.0.40 and later, before 2.0.46 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2003-0189>
* <https://nvd.nist.gov/vuln/detail/CVE-2003-0189>
* <https://httpd.apache.org/security/json/CVE-2003-0189.json>

## CVE-2003-0134 (High) {#cve-2003-0134}

**OS2 device name DoS**


Apache on OS2 up to and including Apache 2.0.45 have a Denial of Service vulnerability caused by device names.


|                    |                                                                                                          |
|--------------------|----------------------------------------------------------------------------------------------------------|
| Published:         | 2003-03-31                                                                                               |
| Affected versions: | 2.0.35 and later, before 2.0.45 (assumed, not confirmed by the advisory) 2.0.45 and later, before 2.0.46 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2003-0134>
* <https://nvd.nist.gov/vuln/detail/CVE-2003-0134>
* <https://httpd.apache.org/security/json/CVE-2003-0134.json>

## CVE-2003-0017 (High) {#cve-2003-0017}

**Apache can serve unexpected files**


On Windows platforms Apache could be forced to serve unexpected files by appending illegal characters such as '\<' to the request URL


|                    |                                                                                                          |
|--------------------|----------------------------------------------------------------------------------------------------------|
| Published:         | 2003-01-20                                                                                               |
| Affected versions: | 2.0.35 and later, before 2.0.43 (assumed, not confirmed by the advisory) 2.0.43 and later, before 2.0.44 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2003-0017>
* <https://nvd.nist.gov/vuln/detail/CVE-2003-0017>
* <https://httpd.apache.org/security/json/CVE-2003-0017.json>

## CVE-2002-0839 (High) {#cve-2002-0839}

**Shared memory permissions lead to local privilege escalation**


The permissions of the shared memory used for the scoreboard allows an attacker who can execute under the Apache UID to send a signal to any process as root or cause a local denial of service attack.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2002-10-03                     |
| Affected versions: | 1.3.0 and later, before 1.3.27 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2002-0839>
* <https://nvd.nist.gov/vuln/detail/CVE-2002-0839>
* <https://httpd.apache.org/security/json/CVE-2002-0839.json>

## CVE-2002-0843 (High) {#cve-2002-0843}

**Buffer overflows in ab utility**


Buffer overflows in the benchmarking utility ab could be exploited if ab is run against a malicious server


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2002-10-03                     |
| Affected versions: | 1.3.0 and later, before 1.3.27 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2002-0843>
* <https://nvd.nist.gov/vuln/detail/CVE-2002-0843>
* <https://httpd.apache.org/security/json/CVE-2002-0843.json>

## CVE-2002-0661 (High) {#cve-2002-0661}

**Path vulnerability**


Certain URIs would bypass security and allow users to invoke or access any file depending on the system configuration. Affects Windows, OS2, Netware and Cygwin platforms only.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2002-08-09                      |
| Affected versions: | 2.0.35 and later, before 2.0.40 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2002-0661>
* <https://nvd.nist.gov/vuln/detail/CVE-2002-0661>
* <https://httpd.apache.org/security/json/CVE-2002-0661.json>

## CVE-2001-0729 (High) {#cve-2001-0729}

**Requests can cause directory listing to be displayed**


A vulnerability was found in the Win32 port of Apache 1.3.20. A client submitting a very long URI could cause a directory listing to be returned rather than the default index page.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2001-09-28                      |
| Affected versions: | 1.3.20 and later, before 1.3.22 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2001-0729>
* <https://nvd.nist.gov/vuln/detail/CVE-2001-0729>
* <https://httpd.apache.org/security/json/CVE-2001-0729.json>

## CVE-2001-0731 (High) {#cve-2001-0731}

**Multiviews can cause a directory listing to be displayed**


A vulnerability was found when Multiviews are used to negotiate the directory index. In some configurations, requesting a URI with a QUERY_STRING of M=D could return a directory listing rather than the expected index page.


|                    |                                                                                                         |
|--------------------|---------------------------------------------------------------------------------------------------------|
| Published:         | 2001-07-09                                                                                              |
| Affected versions: | 1.3.0 and later, before 1.3.20 (assumed, not confirmed by the advisory) 1.3.20 and later, before 1.3.22 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2001-0731>
* <https://nvd.nist.gov/vuln/detail/CVE-2001-0731>
* <https://httpd.apache.org/security/json/CVE-2001-0731.json>

## CVE-2001-1342 (High) {#cve-2001-1342}

**Denial of service attack on Win32 and OS2**


A vulnerability was found in the Win32 and OS2 ports of Apache 1.3. A client submitting a carefully constructed URI could cause a General Protection Fault in a child process, bringing up a message box which would have to be cleared by the operator to resume operation. This vulnerability introduced no identified means to compromise the server other than introducing a possible denial of service.


|                    |                                                                                                         |
|--------------------|---------------------------------------------------------------------------------------------------------|
| Published:         | 2001-05-22                                                                                              |
| Affected versions: | 1.3.0 and later, before 1.3.20 (assumed, not confirmed by the advisory) 1.3.20 and later, before 1.3.21 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2001-1342>
* <https://nvd.nist.gov/vuln/detail/CVE-2001-1342>
* <https://httpd.apache.org/security/json/CVE-2001-1342.json>

## CVE-2001-0925 (High) {#cve-2001-0925}

**Requests can cause directory listing to be displayed**


The default installation can lead mod_negotiation and mod_dir or mod_autoindex to display a directory listing instead of the multiview index.html file if a very long path was created artificially by using many slashes.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2001-02-28                      |
| Affected versions: | 1.3.11 and later, before 1.3.19 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2001-0925>
* <https://nvd.nist.gov/vuln/detail/CVE-2001-0925>
* <https://httpd.apache.org/security/json/CVE-2001-0925.json>

## CVE-2000-1204 (High) {#cve-2000-1204}

**Mass virtual hosting can display CGI source**


A security problem for users of the mass virtual hosting module, mod_vhost_alias, causes the source to a CGI to be sent if the cgi-bin directory is under the document root. However, it is not normal to have your cgi-bin directory under a document root.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2000-10-13                     |
| Affected versions: | 1.3.9 and later, before 1.3.14 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2000-1204>
* <https://nvd.nist.gov/vuln/detail/CVE-2000-1204>
* <https://httpd.apache.org/security/json/CVE-2000-1204.json>

## CVE-2000-0913 (High) {#cve-2000-0913}

**Rewrite rules that include references allow access to any file**


The Rewrite module, mod_rewrite, can allow access to any file on the web server. The vulnerability occurs only with certain specific cases of using regular expression references in RewriteRule directives: If the destination of a RewriteRule contains regular expression references then an attacker will be able to access any file on the server.


|                    |                                                                                                         |
|--------------------|---------------------------------------------------------------------------------------------------------|
| Published:         | 2000-09-29                                                                                              |
| Affected versions: | 1.3.0 and later, before 1.3.12 (assumed, not confirmed by the advisory) 1.3.12 and later, before 1.3.14 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2000-0913>
* <https://nvd.nist.gov/vuln/detail/CVE-2000-0913>
* <https://httpd.apache.org/security/json/CVE-2000-0913.json>

## CVE-2000-1205 (High) {#cve-2000-1205}

**Cross-site scripting can reveal private session information**


Apache was vulnerable to cross site scripting issues. It was shown that malicious HTML tags can be embedded in client web requests if the server or script handling the request does not carefully encode all information displayed to the user. Using these vulnerabilities attackers could, for example, obtain copies of your private cookies used to authenticate you to other sites.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2000-02-25                     |
| Affected versions: | 1.3.0 and later, before 1.3.12 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2000-1205>
* <https://nvd.nist.gov/vuln/detail/CVE-2000-1205>
* <https://httpd.apache.org/security/json/CVE-2000-1205.json>

## CVE-1999-1199 (High) {#cve-1999-1199}

**Multiple header Denial of Service vulnerability**


A serious problem exists when a client sends a large number of headers with the same header name. Apache uses up memory faster than the amount of memory required to simply store the received data itself. That is, memory use increases faster and faster as more headers are received, rather than increasing at a constant rate. This makes a denial of service attack based on this method more effective than methods which cause Apache to use memory at a constant rate, since the attacker has to send less...


|                    |                               |
|--------------------|-------------------------------|
| Published:         | 1998-09-23                    |
| Affected versions: | 1.3.0 and later, before 1.3.2 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-1999-1199>
* <https://nvd.nist.gov/vuln/detail/CVE-1999-1199>
* <https://httpd.apache.org/security/json/CVE-1999-1199.json>

## CVE-2026-42528 (Medium) {#cve-2026-42528}

**mod_dav shared lock overflow**


A memory calculation bug in mod_dav in Apache httpd 2.4.67 and earlier allows an attacker with permission to create WebDAV locks to crash server child processes.


|                    |                            |
|--------------------|----------------------------|
| Published:         | 2026-10-01                 |
| Affected versions: | all versions before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-42528>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-42528>
* <https://httpd.apache.org/security/json/CVE-2026-42528.json>

## CVE-2026-57941 (Medium) {#cve-2026-57941}

**Apache HTTP Server: mod_http2 use-after-free / wild write via shared session-\>bbtmp re-entrancy**


Use After Free vulnerability in Apache HTTP Server's mod_http2 via shared session-\>bbtmp re-entrancy


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2026-10-01                      |
| Affected versions: | 2.4.17 and later, before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-57941>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-57941>
* <https://httpd.apache.org/security/json/CVE-2026-57941.json>

## CVE-2026-59685 (Medium) {#cve-2026-59685}

**Out-of-Bounds Write in ap_directory_walk() Canonical-Name Rewrite on CASE_BLIND_FILESYSTEM**


Out-of-bounds Write vulnerability in Apache HTTP Server on Windows while processing paths with 8.3 names that may grow when expanded.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-10-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-59685>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-59685>
* <https://httpd.apache.org/security/json/CVE-2026-59685.json>

## CVE-2026-63292 (Medium) {#cve-2026-63292}

**mod_vhost_alias stack overflow**


Stack-based buffer overflow in mod_vhost_alias in Apache Software Foundation Apache HTTP Server through 2.4.68 on all platforms allows a remote client to cause a denial of service or potentially execute arbitrary code via an HTTP request with a Host header exceeding 8192 bytes when VirtualDocumentRoot uses a hostname format specifier and LimitRequestFieldSize is raised above the default.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-10-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-63292>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-63292>
* <https://httpd.apache.org/security/json/CVE-2026-63292.json>

## CVE-2026-93546 (Medium) {#cve-2026-93546}

**mod_dav_fs namespace overflow**


Integer overflow in mod_dav_fs in Apache HTTP Server through 2.4.68 allows an authenticated WebDAV client with write access to crash worker processes and persistently corrupt a directory's property database via PROPPATCH requests declaring many XML namespaces.


|                    |                            |
|--------------------|----------------------------|
| Published:         | 2026-10-01                 |
| Affected versions: | all versions before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-93546>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-93546>
* <https://httpd.apache.org/security/json/CVE-2026-93546.json>

## CVE-2026-34355 (Medium) {#cve-2026-34355}

**mod_proxy_html buffer overflow**


A buffer overflow in mod_proxy_html in Apache HTTP Server 2.4.67 and earlier allows an attack by an untrusted backend. Users are recommended to upgrade to version 2.4.68, which fixes this issue.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-06-08                     |
| Affected versions: | 2.4.0 and later, before 2.4.68 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-34355>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-34355>
* <https://httpd.apache.org/security/json/CVE-2026-34355.json>

## CVE-2026-42535 (Medium) {#cve-2026-42535}

**mod_dav_fs protected directory access**


A path handling issue in mod_dav_fs in Apache 2.4.67 and earlier allows a WebDAV content author to directly manipulate trusted DAV property databases, potentially causing child process crashes.


|                    |                            |
|--------------------|----------------------------|
| Published:         | 2026-06-08                 |
| Affected versions: | all versions before 2.4.68 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-42535>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-42535>
* <https://httpd.apache.org/security/json/CVE-2026-42535.json>

## CVE-2026-43951 (Medium) {#cve-2026-43951}

**OOB Read in \`merge_response_headers\` can cause crash**


Out-of-bounds Read vulnerability in Apache HTTP Server with mod_headers and mod_mime and multiple response languages.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-06-08                     |
| Affected versions: | 2.4.0 and later, before 2.4.68 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-43951>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-43951>
* <https://httpd.apache.org/security/json/CVE-2026-43951.json>

## CVE-2026-44119 (Medium) {#cve-2026-44119}

**escalation of privilege through expressions in .htaccess in multiple modules**


Improper Privilege Management vulnerability in Apache HTTP Server 2.4.67 and earlier allows local .htaccess authors to read files with the privileges of the httpd user.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-06-08                     |
| Affected versions: | 2.4.0 and later, before 2.4.68 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-44119>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-44119>
* <https://httpd.apache.org/security/json/CVE-2026-44119.json>

## CVE-2026-44186 (Medium) {#cve-2026-44186}

**Loop in \`proxy_ftp_handler\` in mod_proxy_ftp**


Loop with Unreachable Exit Condition ('Infinite Loop') vulnerability in the mod_proxy_ftp module in Apache HTTP Server with an attacker controlled backend FTP server.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-06-08                     |
| Affected versions: | 2.4.0 and later, before 2.4.68 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-44186>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-44186>
* <https://httpd.apache.org/security/json/CVE-2026-44186.json>

## CVE-2026-49975 (Medium) {#cve-2026-49975}

**mod_http2 denial of service**


Memory Allocation with Excessive Size Value vulnerability in Apache HTTP Server's mod_http leads to denial of service via malicious HTTP requests.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2026-06-08                      |
| Affected versions: | 2.4.17 and later, before 2.4.68 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-49975>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-49975>
* <https://httpd.apache.org/security/json/CVE-2026-49975.json>

## CVE-2026-24072 (Medium) {#cve-2026-24072}

**Apache HTTP Server: mod_rewrite elevation of privileges via ap_expr**


An escalation of privilege bug in various modules in Apache HTTP 2.4.66 and earlier allows local .htaccess authors to read files with the privileges of the httpd user.


|                    |                            |
|--------------------|----------------------------|
| Published:         | 2026-05-04                 |
| Affected versions: | all versions before 2.4.67 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-24072>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-24072>
* <https://httpd.apache.org/security/json/CVE-2026-24072.json>

## CVE-2026-33006 (Medium) {#cve-2026-33006}

**mod_auth_digest timing attack**


A timing attack against mod_auth_digest in Apache HTTP Server 2.4.66 allows a bypass of Digest authentication by a remote attacker.


|                    |                            |
|--------------------|----------------------------|
| Published:         | 2026-05-04                 |
| Affected versions: | all versions before 2.4.67 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-33006>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-33006>
* <https://httpd.apache.org/security/json/CVE-2026-33006.json>

## CVE-2025-58098 (Medium) {#cve-2025-58098}

**Apache HTTP Server: Server Side Includes adds query string to #exec cmd=...**


Apache HTTP Server 2.4.65 and earlier with Server Side Includes (SSI) enabled and mod_cgid (but not mod_cgi) passes the shell-escaped query string to #exec cmd="..." directives.


|                    |                            |
|--------------------|----------------------------|
| Published:         | 2025-12-04                 |
| Affected versions: | all versions before 2.4.66 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2025-58098>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-58098>
* <https://httpd.apache.org/security/json/CVE-2025-58098.json>

## CVE-2025-59775 (Medium) {#cve-2025-59775}

**Apache HTTP Server: NTLM Leakage on Windows through UNC SSRF**


Server-Side Request Forgery (SSRF) vulnerability


|                    |                            |
|--------------------|----------------------------|
| Published:         | 2025-12-04                 |
| Affected versions: | all versions before 2.4.66 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2025-59775>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-59775>
* <https://httpd.apache.org/security/json/CVE-2025-59775.json>

## CVE-2025-66200 (Medium) {#cve-2025-66200}

**Apache HTTP Server: mod_userdir+suexec bypass via AllowOverride FileInfo**


mod_userdir+suexec bypass via AllowOverride FileInfo vulnerability in Apache HTTP Server. Users with access to use the RequestHeader directive in htaccess can cause some CGI scripts to run under an unexpected userid.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2025-12-04                     |
| Affected versions: | 2.4.7 and later, before 2.4.66 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2025-66200>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-66200>
* <https://httpd.apache.org/security/json/CVE-2025-66200.json>

## CVE-2025-54090 (Medium) {#cve-2025-54090}

**Apache HTTP Server: 'RewriteCond expr' always evaluates to true in 2.4.64**


A bug in Apache HTTP Server 2.4.64 results in all "RewriteCond expr ..." tests evaluating as "true".


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2025-07-23                      |
| Affected versions: | 2.4.64 and later, before 2.4.65 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2025-54090>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-54090>
* <https://httpd.apache.org/security/json/CVE-2025-54090.json>

## CVE-2024-42516 (Medium) {#cve-2024-42516}

**Apache HTTP Server: HTTP response splitting**


HTTP response splitting in the core of Apache HTTP Server allows an attacker who can manipulate the Content-Type response headers of applications hosted or proxied by the server can split the HTTP response.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2025-07-10                     |
| Affected versions: | 2.4.0 and later, before 2.4.64 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2024-42516>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-42516>
* <https://httpd.apache.org/security/json/CVE-2024-42516.json>

## CVE-2024-43394 (Medium) {#cve-2024-43394}

**Apache HTTP Server: SSRF on Windows due to UNC paths**


Server-Side Request Forgery (SSRF) in Apache HTTP Server on Windows allows to potentially leak NTLM hashes to a malicious server via mod_rewrite or apache expressions that pass unvalidated request input.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2025-07-10                     |
| Affected versions: | 2.4.0 and later, before 2.4.64 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2024-43394>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-43394>
* <https://httpd.apache.org/security/json/CVE-2024-43394.json>

## CVE-2025-23048 (Medium) {#cve-2025-23048}

**Apache HTTP Server: mod_ssl access control bypass with session resumption**


In some mod_ssl configurations on Apache HTTP Server 2.4.35 through to 2.4.62, an access control bypass by trusted clients is possible using TLS 1.3 session resumption.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2025-07-10                      |
| Affected versions: | 2.4.35 and later, before 2.4.64 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2025-23048>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-23048>
* <https://httpd.apache.org/security/json/CVE-2025-23048.json>

## CVE-2025-49812 (Medium) {#cve-2025-49812}

**Apache HTTP Server: mod_ssl TLS upgrade attack**


In some mod_ssl configurations on Apache HTTP Server versions through to 2.4.63, an HTTP desynchronisation attack allows a man-in-the-middle attacker to hijack an HTTP session via a TLS upgrade.


|                    |                            |
|--------------------|----------------------------|
| Published:         | 2025-07-10                 |
| Affected versions: | all versions before 2.4.64 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2025-49812>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-49812>
* <https://httpd.apache.org/security/json/CVE-2025-49812.json>

## CVE-2025-53020 (Medium) {#cve-2025-53020}

**Apache HTTP Server: HTTP/2 DoS by Memory Increase**


Late Release of Memory after Effective Lifetime vulnerability in Apache HTTP Server.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2025-07-10                      |
| Affected versions: | 2.4.17 and later, before 2.4.64 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2025-53020>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-53020>
* <https://httpd.apache.org/security/json/CVE-2025-53020.json>

## CVE-2024-38473 (Medium) {#cve-2024-38473}

**Apache HTTP Server proxy encoding problem**


Encoding problem in mod_proxy in Apache HTTP Server 2.4.59 and earlier allows request URLs with incorrect encoding to be sent to backend services, potentially bypassing authentication via crafted requests. This affects configurations where mechanisms other than ProxyPass/ProxyPassMatch or RewriteRule with the 'P' flag are used to configure a request to be proxied, such as SetHandler or inadvertent proxying via CVE-2024-39573. Note that these alternate mechanisms may be used within .htaccess.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2024-07-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.60 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2024-38473>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-38473>
* <https://httpd.apache.org/security/json/CVE-2024-38473.json>

## CVE-2024-39573 (Medium) {#cve-2024-39573}

**Apache HTTP Server: mod_rewrite proxy handler substitution**


Potential SSRF in mod_rewrite in Apache HTTP Server 2.4.59 and earlier allows an attacker to cause unsafe RewriteRules to unexpectedly setup URL's to be handled by mod_proxy. Users are recommended to upgrade to version 2.4.60, which fixes this issue.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2024-07-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.60 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2024-39573>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-39573>
* <https://httpd.apache.org/security/json/CVE-2024-39573.json>

## CVE-2023-38709 (Medium) {#cve-2023-38709}

**Apache HTTP Server: HTTP response splitting**


Faulty input validation in the core of Apache allows malicious or exploitable backend/content generators to split HTTP responses.


|                    |                            |
|--------------------|----------------------------|
| Published:         | 2024-04-04                 |
| Affected versions: | all versions before 2.4.59 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2023-38709>
* <https://nvd.nist.gov/vuln/detail/CVE-2023-38709>
* <https://httpd.apache.org/security/json/CVE-2023-38709.json>

## CVE-2024-27316 (Medium) {#cve-2024-27316}

**Apache HTTP Server: HTTP/2 DoS by memory exhaustion on endless continuation frames**


HTTP/2 incoming headers exceeding the limit are temporarily buffered in nghttp2 in order to generate an informative HTTP 413 response. If a client does not stop sending headers, this leads to memory exhaustion.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2024-04-04                      |
| Affected versions: | 2.4.17 and later, before 2.4.59 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2024-27316>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-27316>
* <https://httpd.apache.org/security/json/CVE-2024-27316.json>

## CVE-2023-45802 (Medium) {#cve-2023-45802}

**Apache HTTP Server: HTTP/2 stream memory not reclaimed right away on RST**


When a HTTP/2 stream was reset (RST frame) by a client, there was a time window were the request's memory resources were not reclaimed immediately. Instead, de-allocation was deferred to connection close. A client could send new requests and resets, keeping the connection busy and open and causing the memory footprint to keep on growing. On connection close, all resources were reclaimed, but the process might run out of memory before that.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2023-10-19                      |
| Affected versions: | 2.4.17 and later, before 2.4.58 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2023-45802>
* <https://nvd.nist.gov/vuln/detail/CVE-2023-45802>
* <https://httpd.apache.org/security/json/CVE-2023-45802.json>

## CVE-2023-27522 (Medium) {#cve-2023-27522}

**Apache HTTP Server: mod_proxy_uwsgi HTTP response splitting**


HTTP Response Smuggling vulnerability in Apache HTTP Server via mod_proxy_uwsgi. This issue affects Apache HTTP Server: from 2.4.30 through 2.4.55.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2023-03-07                      |
| Affected versions: | 2.4.30 and later, before 2.4.56 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2023-27522>
* <https://nvd.nist.gov/vuln/detail/CVE-2023-27522>
* <https://httpd.apache.org/security/json/CVE-2023-27522.json>

## CVE-2006-20001 (Medium) {#cve-2006-20001}

**mod_dav out of bounds read, or write of zero byte**


A carefully crafted If: request header can cause a memory read, or write of a single zero byte, in a pool (heap) memory location beyond the header value sent. This could cause the process to crash.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2023-01-17                     |
| Affected versions: | 2.4.0 and later, before 2.4.55 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2006-20001>
* <https://nvd.nist.gov/vuln/detail/CVE-2006-20001>
* <https://httpd.apache.org/security/json/CVE-2006-20001.json>

## CVE-2022-36760 (Medium) {#cve-2022-36760}

**Apache HTTP Server: mod_proxy_ajp Possible request smuggling**


Inconsistent Interpretation of HTTP Requests ('HTTP Request Smuggling') vulnerability in mod_proxy_ajp of Apache HTTP Server allows an attacker to smuggle requests to the AJP server it forwards requests to. This issue affects Apache HTTP Server Apache HTTP Server 2.4 version 2.4.54 and prior versions.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2023-01-17                     |
| Affected versions: | 2.4.0 and later, before 2.4.55 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2022-36760>
* <https://nvd.nist.gov/vuln/detail/CVE-2022-36760>
* <https://httpd.apache.org/security/json/CVE-2022-36760.json>

## CVE-2022-37436 (Medium) {#cve-2022-37436}

**Apache HTTP Server: mod_proxy prior to 2.4.55 allows a backend to trigger HTTP response splitting**


Prior to Apache HTTP Server 2.4.55, a malicious backend can cause the response headers to be truncated early, resulting in some headers being incorporated into the response body. If the later headers have any security purpose, they will not be interpreted by the client.


|                    |                            |
|--------------------|----------------------------|
| Published:         | 2023-01-17                 |
| Affected versions: | all versions before 2.4.55 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2022-37436>
* <https://nvd.nist.gov/vuln/detail/CVE-2022-37436>
* <https://httpd.apache.org/security/json/CVE-2022-37436.json>

## CVE-2022-26377 (Medium) {#cve-2022-26377}

**mod_proxy_ajp: Possible request smuggling**


Inconsistent Interpretation of HTTP Requests ('HTTP Request Smuggling') vulnerability in mod_proxy_ajp of Apache HTTP Server allows an attacker to smuggle requests to the AJP server it forwards requests to. This issue affects Apache HTTP Server Apache HTTP Server 2.4 version 2.4.53 and prior versions.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2022-06-08                     |
| Affected versions: | 2.4.0 and later, before 2.4.54 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2022-26377>
* <https://nvd.nist.gov/vuln/detail/CVE-2022-26377>
* <https://httpd.apache.org/security/json/CVE-2022-26377.json>

## CVE-2022-22719 (Medium) {#cve-2022-22719}

**mod_lua Use of uninitialized value of in r:parsebody**


A carefully crafted request body can cause a read to a random memory area which could cause the process to crash.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2022-03-14                     |
| Affected versions: | 2.4.0 and later, before 2.4.53 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2022-22719>
* <https://nvd.nist.gov/vuln/detail/CVE-2022-22719>
* <https://httpd.apache.org/security/json/CVE-2022-22719.json>

## CVE-2021-44224 (Medium) {#cve-2021-44224}

**Possible NULL dereference or SSRF in forward proxy configurations in Apache HTTP Server 2.4.51 and earlier**


A crafted URI sent to httpd configured as a forward proxy (ProxyRequests on) can cause a crash (NULL pointer dereference) or, for configurations mixing forward and reverse proxy declarations, can allow for requests to be directed to a declared Unix Domain Socket endpoint (Server Side Request Forgery).


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2021-12-20                     |
| Affected versions: | 2.4.7 and later, before 2.4.52 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2021-44224>
* <https://nvd.nist.gov/vuln/detail/CVE-2021-44224>
* <https://httpd.apache.org/security/json/CVE-2021-44224.json>

## CVE-2021-41524 (Medium) {#cve-2021-41524}

**null pointer dereference in h2 fuzzing**


While fuzzing the 2.4.49 httpd, a new null pointer dereference was detected during HTTP/2 request processing, allowing an external source to DoS the server. This requires a specially crafted request.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2021-10-04                      |
| Affected versions: | 2.4.49 and later, before 2.4.50 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2021-41524>
* <https://nvd.nist.gov/vuln/detail/CVE-2021-41524>
* <https://httpd.apache.org/security/json/CVE-2021-41524.json>

## CVE-2021-34798 (Medium) {#cve-2021-34798}

**NULL pointer dereference in httpd core**


Malformed requests may cause the server to dereference a NULL pointer.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2021-09-16                     |
| Affected versions: | 2.4.0 and later, before 2.4.49 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2021-34798>
* <https://nvd.nist.gov/vuln/detail/CVE-2021-34798>
* <https://httpd.apache.org/security/json/CVE-2021-34798.json>

## CVE-2021-36160 (Medium) {#cve-2021-36160}

**mod_proxy_uwsgi out of bound read**


A carefully crafted request uri-path can cause mod_proxy_uwsgi to read above the allocated memory and crash (DoS).


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2021-09-16                      |
| Affected versions: | 2.4.30 and later, before 2.4.49 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2021-36160>
* <https://nvd.nist.gov/vuln/detail/CVE-2021-36160>
* <https://httpd.apache.org/security/json/CVE-2021-36160.json>

## CVE-2021-33193 (Medium) {#cve-2021-33193}

**Request splitting via HTTP/2 method injection and mod_proxy**


A crafted method sent through HTTP/2 will bypass validation and be forwarded by mod_proxy, which can lead to request splitting or cache poisoning.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2021-08-06                      |
| Affected versions: | 2.4.17 and later, before 2.4.49 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2021-33193>
* <https://nvd.nist.gov/vuln/detail/CVE-2021-33193>
* <https://httpd.apache.org/security/json/CVE-2021-33193.json>

## CVE-2019-17567 (Medium) {#cve-2019-17567}

**mod_proxy_wstunnel tunneling of non Upgraded connections**


Apache HTTP Server versions 2.4.6 to 2.4.46 mod_proxy_wstunnel configured on an URL that is not necessarily Upgraded by the origin server was tunneling the whole connection regardless, thus allowing for subsequent requests on the same connection to pass through with no HTTP validation, authentication or authorization possibly configured.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2021-06-01                     |
| Affected versions: | 2.4.6 and later, before 2.4.48 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2019-17567>
* <https://nvd.nist.gov/vuln/detail/CVE-2019-17567>
* <https://httpd.apache.org/security/json/CVE-2019-17567.json>

## CVE-2020-13938 (Medium) {#cve-2020-13938}

**Improper Handling of Insufficient Privileges**


Apache HTTP Server versions 2.4.0 to 2.4.46 Unprivileged local users can stop httpd on Windows


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2021-06-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.48 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2020-13938>
* <https://nvd.nist.gov/vuln/detail/CVE-2020-13938>
* <https://httpd.apache.org/security/json/CVE-2020-13938.json>

## CVE-2021-30641 (Medium) {#cve-2021-30641}

**Unexpected URL matching with 'MergeSlashes OFF'**


Apache HTTP Server versions 2.4.39 to 2.4.46 Unexpected matching behavior with 'MergeSlashes OFF'


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2021-06-01                      |
| Affected versions: | 2.4.39 and later, before 2.4.48 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2021-30641>
* <https://nvd.nist.gov/vuln/detail/CVE-2021-30641>
* <https://httpd.apache.org/security/json/CVE-2021-30641.json>

## CVE-2020-11984 (Medium) {#cve-2020-11984}

**mod_proxy_uwsgi buffer overflow**


In Apache HTTP Server versions 2.4.32 to 2.4.43, mod_proxy_uwsgi has a information disclosure and possible RCE


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2020-08-07                      |
| Affected versions: | 2.4.33 and later, before 2.4.44 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2020-11984>
* <https://nvd.nist.gov/vuln/detail/CVE-2020-11984>
* <https://httpd.apache.org/security/json/CVE-2020-11984.json>

## CVE-2020-11993 (Medium) {#cve-2020-11993}

**Push Diary Crash on Specifically Crafted HTTP/2 Header**


In Apache HTTP Server versions 2.4.20 to 2.4.43, when trace/debug was enabled for the HTTP/2 module and on certain traffic edge patterns, logging statements were made on the wrong connection, causing concurrent use of memory pools. Configuring the LogLevel of mod_http2 above "info" will mitigate this vulnerability for unpatched servers.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2020-08-07                      |
| Affected versions: | 2.4.20 and later, before 2.4.44 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2020-11993>
* <https://nvd.nist.gov/vuln/detail/CVE-2020-11993>
* <https://httpd.apache.org/security/json/CVE-2020-11993.json>

## CVE-2019-10081 (Medium) {#cve-2019-10081}

**mod_http2, memory corruption on early pushes**


HTTP/2 very early pushes, for example configured with "H2PushResource", could lead to an overwrite of memory in the pushing request's pool, leading to crashes. The memory copied is that of the configured push link header values, not data supplied by the client.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2019-08-14                      |
| Affected versions: | 2.4.20 and later, before 2.4.41 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2019-10081>
* <https://nvd.nist.gov/vuln/detail/CVE-2019-10081>
* <https://httpd.apache.org/security/json/CVE-2019-10081.json>

## CVE-2019-10082 (Medium) {#cve-2019-10082}

**mod_http2, read-after-free in h2 connection shutdown**


Using fuzzed network input, the http/2 session handling could be made to read memory after being freed, during connection shutdown.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2019-08-14                      |
| Affected versions: | 2.4.18 and later, before 2.4.41 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2019-10082>
* <https://nvd.nist.gov/vuln/detail/CVE-2019-10082>
* <https://httpd.apache.org/security/json/CVE-2019-10082.json>

## CVE-2019-10097 (Medium) {#cve-2019-10097}

**CVE-2019-10097 mod_remoteip: Stack buffer overflow and NULL pointer dereference**


When mod_remoteip was configured to use a trusted intermediary proxy server using the "PROXY" protocol, a specially crafted PROXY header could trigger a stack buffer overflow or NULL pointer deference. This vulnerability could only be triggered by a trusted proxy and not by untrusted HTTP clients.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2019-08-14                      |
| Affected versions: | 2.4.33 and later, before 2.4.41 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2019-10097>
* <https://nvd.nist.gov/vuln/detail/CVE-2019-10097>
* <https://httpd.apache.org/security/json/CVE-2019-10097.json>

## CVE-2019-9517 (Medium) {#cve-2019-9517}

**mod_http2, DoS attack by exhausting h2 workers.**


A malicious client could perform a DoS attack by flooding a connection with requests and basically never reading responses on the TCP connection. Depending on h2 worker dimensioning, it was possible to block those with relatively few connections.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2019-08-14                      |
| Affected versions: | 2.4.20 and later, before 2.4.41 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2019-9517>
* <https://nvd.nist.gov/vuln/detail/CVE-2019-9517>
* <https://httpd.apache.org/security/json/CVE-2019-9517.json>

## CVE-2016-4975 (Medium) {#cve-2016-4975}

**mod_userdir CRLF injection**


Possible CRLF injection allowing HTTP response splitting attacks for sites which use mod_userdir. This issue was mitigated by changes made in 2.4.25 and 2.2.32 which prohibit CR or LF injection into the "Location" or other outbound header key or value.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2018-08-14                                                    |
| Affected versions: | 2.2.0 and later, before 2.2.32 2.4.1 and later, before 2.4.25 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2016-4975>
* <https://nvd.nist.gov/vuln/detail/CVE-2016-4975>
* <https://httpd.apache.org/security/json/CVE-2016-4975.json>

## CVE-2018-8011 (Medium) {#cve-2018-8011}

**mod_md, DoS via Coredumps on specially crafted requests**


By specially crafting HTTP requests, the mod_md challenge handler would dereference a NULL pointer and cause the child process to segfault. This could be used to DoS the server.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2018-07-18                      |
| Affected versions: | 2.4.33 and later, before 2.4.34 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2018-8011>
* <https://nvd.nist.gov/vuln/detail/CVE-2018-8011>
* <https://httpd.apache.org/security/json/CVE-2018-8011.json>

## CVE-2018-1283 (Medium) {#cve-2018-1283}

**Tampering of mod_session data for CGI applications**


When mod_session is configured to forward its session data to CGI applications (SessionEnv on, not the default), a remote user may influence their content by using a "Session" header. This comes from the "HTTP_SESSION" variable name used by mod_session to forward its data to CGIs, since the prefix "HTTP_" is also used by the Apache HTTP Server to pass HTTP header fields, per CGI specifications. The severity is set to Moderate because "SessionEnv on" is not a default nor common configuration, it...


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2018-03-21                     |
| Affected versions: | 2.4.1 and later, before 2.4.33 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2018-1283>
* <https://nvd.nist.gov/vuln/detail/CVE-2018-1283>
* <https://httpd.apache.org/security/json/CVE-2018-1283.json>

## CVE-2014-0117 (Medium) {#cve-2014-0117}

**mod_proxy denial of service**


A flaw was found in mod_proxy in httpd versions 2.4.6 to 2.4.9. A remote attacker could send a carefully crafted request to a server configured as a reverse proxy, and cause the child process to crash. This could lead to a denial of service against a threaded MPM.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2014-07-15                     |
| Affected versions: | 2.4.6 and later, before 2.4.10 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2014-0117>
* <https://nvd.nist.gov/vuln/detail/CVE-2014-0117>
* <https://httpd.apache.org/security/json/CVE-2014-0117.json>

## CVE-2014-0118 (Medium) {#cve-2014-0118}

**mod_deflate denial of service**


A resource consumption flaw was found in mod_deflate. If request body decompression was configured (using the "DEFLATE" input filter), a remote attacker could cause the server to consume significant memory and/or CPU resources. The use of request body decompression is not a common configuration.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2014-07-14                                                    |
| Affected versions: | 2.2.0 and later, before 2.2.29 2.4.1 and later, before 2.4.10 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2014-0118>
* <https://nvd.nist.gov/vuln/detail/CVE-2014-0118>
* <https://httpd.apache.org/security/json/CVE-2014-0118.json>

## CVE-2014-0226 (Medium) {#cve-2014-0226}

**mod_status buffer overflow**


A race condition was found in mod_status. An attacker able to access a public server status page on a server using a threaded MPM could send a carefully crafted request which could lead to a heap buffer overflow. Note that it is not a default or recommended configuration to have a public accessible server status page.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2014-07-14                                                    |
| Affected versions: | 2.2.0 and later, before 2.2.29 2.4.1 and later, before 2.4.10 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2014-0226>
* <https://nvd.nist.gov/vuln/detail/CVE-2014-0226>
* <https://httpd.apache.org/security/json/CVE-2014-0226.json>

## CVE-2013-6438 (Medium) {#cve-2013-6438}

**mod_dav crash**


XML parsing code in mod_dav incorrectly calculates the end of the string when removing leading spaces and places a NUL character outside the buffer, causing random crashes. This XML parsing code is only used with DAV provider modules that support DeltaV, of which the only publicly released provider is mod_dav_svn.


|                    |                                                              |
|--------------------|--------------------------------------------------------------|
| Published:         | 2014-03-17                                                   |
| Affected versions: | 2.2.0 and later, before 2.2.27 2.4.1 and later, before 2.4.9 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2013-6438>
* <https://nvd.nist.gov/vuln/detail/CVE-2013-6438>
* <https://httpd.apache.org/security/json/CVE-2013-6438.json>

## CVE-2013-2249 (Medium) {#cve-2013-2249}

**mod_session_dbd session fixation flaw**


A flaw in mod_session_dbd caused it to proceed with save operations for a session without considering the dirty flag and the requirement for a new session ID.


|                    |                               |
|--------------------|-------------------------------|
| Published:         | 2013-07-22                    |
| Affected versions: | 2.4.1 and later, before 2.4.6 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2013-2249>
* <https://nvd.nist.gov/vuln/detail/CVE-2013-2249>
* <https://httpd.apache.org/security/json/CVE-2013-2249.json>

## CVE-2013-1896 (Medium) {#cve-2013-1896}

**mod_dav crash**


Sending a MERGE request against a URI handled by mod_dav_svn with the source href (sent as part of the request body as XML) pointing to a URI that is not configured for DAV will trigger a segfault.


|                    |                                                              |
|--------------------|--------------------------------------------------------------|
| Published:         | 2013-05-23                                                   |
| Affected versions: | 2.2.0 and later, before 2.2.25 2.4.1 and later, before 2.4.6 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2013-1896>
* <https://nvd.nist.gov/vuln/detail/CVE-2013-1896>
* <https://httpd.apache.org/security/json/CVE-2013-1896.json>

## CVE-2012-4558 (Medium) {#cve-2012-4558}

**XSS in mod_proxy_balancer**


A XSS flaw affected the mod_proxy_balancer manager interface.


|                    |                                                              |
|--------------------|--------------------------------------------------------------|
| Published:         | 2013-02-18                                                   |
| Affected versions: | 2.2.0 and later, before 2.2.24 2.4.1 and later, before 2.4.4 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2012-4558>
* <https://nvd.nist.gov/vuln/detail/CVE-2012-4558>
* <https://httpd.apache.org/security/json/CVE-2012-4558.json>

## CVE-2012-0053 (Medium) {#cve-2012-0053}

**error responses can expose cookies**


A flaw was found in the default error response for status code 400. This flaw could be used by an attacker to expose "httpOnly" cookies when no custom ErrorDocument is specified.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2012-01-23                                                     |
| Affected versions: | 2.0.35 and later, before 2.0.65 2.2.0 and later, before 2.2.22 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2012-0053>
* <https://nvd.nist.gov/vuln/detail/CVE-2012-0053>
* <https://httpd.apache.org/security/json/CVE-2012-0053.json>

## CVE-2011-4317 (Medium) {#cve-2011-4317}

**mod_proxy reverse proxy exposure**


An additional exposure was found when using mod_proxy in reverse proxy mode. In certain configurations using RewriteRule with proxy flag or ProxyPassMatch, a remote attacker could cause the reverse proxy to connect to an arbitrary server, possibly disclosing sensitive information from internal web servers not directly accessible to attacker.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2012-01-22                     |
| Affected versions: | 2.2.0 and later, before 2.2.22 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2011-4317>
* <https://nvd.nist.gov/vuln/detail/CVE-2011-4317>
* <https://httpd.apache.org/security/json/CVE-2011-4317.json>

## CVE-2011-3368 (Medium) {#cve-2011-3368}

**mod_proxy reverse proxy exposure**


An exposure was found when using mod_proxy in reverse proxy mode. In certain configurations using RewriteRule with proxy flag or ProxyPassMatch, a remote attacker could cause the reverse proxy to connect to an arbitrary server, possibly disclosing sensitive information from internal web servers not directly accessible to attacker. No update of 1.3 will be released. Patches will be published to https://archive.apache.org/dist/httpd/patches/apply_to_1.3.42/


|                    |                                                                                              |
|--------------------|----------------------------------------------------------------------------------------------|
| Published:         | 2011-10-05                                                                                   |
| Affected versions: | 1.3.2 and later, before 1.4.0 2.0.35 and later, before 2.0.65 2.2.0 and later, before 2.2.22 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2011-3368>
* <https://nvd.nist.gov/vuln/detail/CVE-2011-3368>
* <https://httpd.apache.org/security/json/CVE-2011-3368.json>

## CVE-2011-3348 (Medium) {#cve-2011-3348}

**mod_proxy_ajp remote DoS**


A flaw was found when mod_proxy_ajp is used together with mod_proxy_balancer. Given a specific configuration, a remote attacker could send certain malformed HTTP requests, putting a backend server into an error state until the retry timeout expired. This could lead to a temporary denial of service.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2011-09-14                      |
| Affected versions: | 2.2.12 and later, before 2.2.21 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2011-3348>
* <https://nvd.nist.gov/vuln/detail/CVE-2011-3348>
* <https://httpd.apache.org/security/json/CVE-2011-3348.json>

## CVE-2011-0419 (Medium) {#cve-2011-0419}

**apr_fnmatch flaw leads to mod_autoindex remote DoS**


A flaw was found in the apr_fnmatch() function of the bundled APR library. Where mod_autoindex is enabled, and a directory indexed by mod_autoindex contained files with sufficiently long names, a remote attacker could send a carefully crafted request which would cause excessive CPU usage. This could be used in a denial of service attack. Workaround: Setting the 'IgnoreClient' option to the 'IndexOptions' directive disables processing of the client-supplied request query arguments, preventing...


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2011-05-10                                                     |
| Affected versions: | 2.0.35 and later, before 2.0.65 2.2.0 and later, before 2.2.19 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2011-0419>
* <https://nvd.nist.gov/vuln/detail/CVE-2011-0419>
* <https://httpd.apache.org/security/json/CVE-2011-0419.json>

## CVE-2010-0408 (Medium) {#cve-2010-0408}

**mod_proxy_ajp DoS**


mod_proxy_ajp would return the wrong status code if it encountered an error, causing a backend server to be put into an error state until the retry timeout expired. A remote attacker could send malicious requests to trigger this issue, resulting in denial of service.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2010-03-02                     |
| Affected versions: | 2.2.0 and later, before 2.2.15 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2010-0408>
* <https://nvd.nist.gov/vuln/detail/CVE-2010-0408>
* <https://httpd.apache.org/security/json/CVE-2010-0408.json>

## CVE-2010-0010 (Medium) {#cve-2010-0010}

**mod_proxy overflow on 64-bit systems**


An incorrect conversion between numeric types flaw was found in the mod_proxy module which affects some 64-bit architecture systems. A malicious HTTP server to which requests are being proxied could use this flaw to trigger a heap buffer overflow in an httpd child process via a carefully crafted response.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2010-01-27                     |
| Affected versions: | 1.3.2 and later, before 1.3.42 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2010-0010>
* <https://nvd.nist.gov/vuln/detail/CVE-2010-0010>
* <https://httpd.apache.org/security/json/CVE-2010-0010.json>

## CVE-2009-2699 (Medium) {#cve-2009-2699}

**Solaris pollset DoS**


Faulty error handling was found affecting Solaris pollset support (Event Port backend) caused by a bug in APR. A remote attacker could trigger this issue on Solaris servers which used prefork or event MPMs, resulting in a denial of service.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2009-09-23                     |
| Affected versions: | 2.2.0 and later, before 2.2.14 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2009-2699>
* <https://nvd.nist.gov/vuln/detail/CVE-2009-2699>
* <https://httpd.apache.org/security/json/CVE-2009-2699.json>

## CVE-2009-0023 (Medium) {#cve-2009-0023}

**APR-util heap underwrite**


A heap-based underwrite flaw was found in the way the bundled copy of the APR-util library created compiled forms of particular search patterns. An attacker could formulate a specially-crafted search keyword, that would overwrite arbitrary heap memory locations when processed by the pattern preparation engine.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2009-06-01                     |
| Affected versions: | 2.2.0 and later, before 2.2.12 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2009-0023>
* <https://nvd.nist.gov/vuln/detail/CVE-2009-0023>
* <https://httpd.apache.org/security/json/CVE-2009-0023.json>

## CVE-2009-1955 (Medium) {#cve-2009-1955}

**APR-util XML DoS**


A denial of service flaw was found in the bundled copy of the APR-util library Extensible Markup Language (XML) parser. A remote attacker could create a specially-crafted XML document that would cause excessive memory consumption when processed by the XML decoding engine.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2009-06-01                     |
| Affected versions: | 2.2.0 and later, before 2.2.12 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2009-1955>
* <https://nvd.nist.gov/vuln/detail/CVE-2009-1955>
* <https://httpd.apache.org/security/json/CVE-2009-1955.json>

## CVE-2009-1956 (Medium) {#cve-2009-1956}

**APR-util off-by-one overflow**


An off-by-one overflow flaw was found in the way the bundled copy of the APR-util library processed a variable list of arguments. An attacker could provide a specially-crafted string as input for the formatted output conversion routine, which could, on big-endian platforms, potentially lead to the disclosure of sensitive information or a denial of service.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2009-04-24                     |
| Affected versions: | 2.2.0 and later, before 2.2.12 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2009-1956>
* <https://nvd.nist.gov/vuln/detail/CVE-2009-1956>
* <https://httpd.apache.org/security/json/CVE-2009-1956.json>

## CVE-2008-2364 (Medium) {#cve-2008-2364}

**mod_proxy_http DoS**


A flaw was found in the handling of excessive interim responses from an origin server when using mod_proxy_http. A remote attacker could cause a denial of service or high memory usage.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2008-06-10                                                    |
| Affected versions: | 2.0.35 and later, before 2.0.64 2.2.0 and later, before 2.2.9 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2008-2364>
* <https://nvd.nist.gov/vuln/detail/CVE-2008-2364>
* <https://httpd.apache.org/security/json/CVE-2008-2364.json>

## CVE-2007-6388 (Medium) {#cve-2007-6388}

**mod_status XSS**


A flaw was found in the mod_status module. On sites where mod_status is enabled and the status pages were publicly accessible, a cross-site scripting attack is possible. Note that the server-status page is not enabled by default and it is best practice to not make this publicly available.


|                    |                                                                                              |
|--------------------|----------------------------------------------------------------------------------------------|
| Published:         | 2008-01-02                                                                                   |
| Affected versions: | 1.3.2 and later, before 1.3.41 2.0.35 and later, before 2.0.63 2.2.0 and later, before 2.2.8 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2007-6388>
* <https://nvd.nist.gov/vuln/detail/CVE-2007-6388>
* <https://httpd.apache.org/security/json/CVE-2007-6388.json>

## CVE-2007-5000 (Medium) {#cve-2007-5000}

**mod_imagemap XSS**


A flaw was found in the mod_imagemap module. On sites where mod_imagemap is enabled and an imagemap file is publicly available, a cross-site scripting attack is possible.


|                    |                                                                                              |
|--------------------|----------------------------------------------------------------------------------------------|
| Published:         | 2007-12-11                                                                                   |
| Affected versions: | 1.3.0 and later, before 1.3.41 2.0.35 and later, before 2.0.63 2.2.0 and later, before 2.2.8 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2007-5000>
* <https://nvd.nist.gov/vuln/detail/CVE-2007-5000>
* <https://httpd.apache.org/security/json/CVE-2007-5000.json>

## CVE-2006-5752 (Medium) {#cve-2006-5752}

**mod_status cross-site scripting**


A flaw was found in the mod_status module. On sites where the server-status page is publicly accessible and ExtendedStatus is enabled this could lead to a cross-site scripting attack. Note that the server-status page is not enabled by default and it is best practice to not make this publicly available.


|                    |                                                                                              |
|--------------------|----------------------------------------------------------------------------------------------|
| Published:         | 2007-06-20                                                                                   |
| Affected versions: | 1.3.2 and later, before 1.3.39 2.0.35 and later, before 2.0.61 2.2.0 and later, before 2.2.6 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2006-5752>
* <https://nvd.nist.gov/vuln/detail/CVE-2006-5752>
* <https://httpd.apache.org/security/json/CVE-2006-5752.json>

## CVE-2007-3304 (Medium) {#cve-2007-3304}

**Signals to arbitrary processes**


The Apache HTTP server did not verify that a process was an Apache child process before sending it signals. A local attacker with the ability to run scripts on the HTTP server could manipulate the scoreboard and cause arbitrary processes to be terminated which could lead to a denial of service.


|                    |                                                                                              |
|--------------------|----------------------------------------------------------------------------------------------|
| Published:         | 2007-06-19                                                                                   |
| Affected versions: | 1.3.0 and later, before 1.3.39 2.0.35 and later, before 2.0.61 2.2.0 and later, before 2.2.6 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2007-3304>
* <https://nvd.nist.gov/vuln/detail/CVE-2007-3304>
* <https://httpd.apache.org/security/json/CVE-2007-3304.json>

## CVE-2007-1863 (Medium) {#cve-2007-1863}

**mod_cache proxy DoS**


A bug was found in the mod_cache module. On sites where caching is enabled, a remote attacker could send a carefully crafted request that would cause the Apache child process handling that request to crash. This could lead to a denial of service if using a threaded Multi-Processing Module.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2007-06-18                                                    |
| Affected versions: | 2.0.37 and later, before 2.0.61 2.2.0 and later, before 2.2.6 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2007-1863>
* <https://nvd.nist.gov/vuln/detail/CVE-2007-1863>
* <https://httpd.apache.org/security/json/CVE-2007-1863.json>

## CVE-2007-1862 (Medium) {#cve-2007-1862}

**mod_cache information leak**


The recall_headers function in mod_mem_cache in Apache 2.2.4 did not properly copy all levels of header data, which can cause Apache to return HTTP headers containing previously used data, which could be used by remote attackers to obtain potentially sensitive information.


|                    |                               |
|--------------------|-------------------------------|
| Published:         | 2007-06-01                    |
| Affected versions: | 2.2.4 and later, before 2.2.6 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2007-1862>
* <https://nvd.nist.gov/vuln/detail/CVE-2007-1862>
* <https://httpd.apache.org/security/json/CVE-2007-1862.json>

## CVE-2007-3847 (Medium) {#cve-2007-3847}

**mod_proxy crash**


A flaw was found in the Apache HTTP Server mod_proxy module. On sites where a reverse proxy is configured, a remote attacker could send a carefully crafted request that would cause the Apache child process handling that request to crash. On sites where a forward proxy is configured, an attacker could cause a similar crash if a user could be persuaded to visit a malicious site using the proxy. This could lead to a denial of service if using a threaded Multi-Processing Module.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2006-12-10                                                    |
| Affected versions: | 2.0.35 and later, before 2.0.61 2.2.0 and later, before 2.2.6 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2007-3847>
* <https://nvd.nist.gov/vuln/detail/CVE-2007-3847>
* <https://httpd.apache.org/security/json/CVE-2007-3847.json>

## CVE-2006-3918 (Medium) {#cve-2006-3918}

**Expect header Cross-Site Scripting**


A flaw in the handling of invalid Expect headers. If an attacker can influence the Expect header that a victim sends to a target site they could perform a cross-site scripting attack. It is known that some versions of Flash can set an arbitrary Expect header which can trigger this flaw. Not marked as a security issue for 2.0 or 2.2 as the cross-site scripting is only returned to the victim after the server times out a connection.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2006-05-08                     |
| Affected versions: | 1.3.3 and later, before 1.3.35 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2006-3918>
* <https://nvd.nist.gov/vuln/detail/CVE-2006-3918>
* <https://httpd.apache.org/security/json/CVE-2006-3918.json>

## CVE-2005-3352 (Medium) {#cve-2005-3352}

**mod_imap Referer Cross-Site Scripting**


A flaw in mod_imap when using the Referer directive with image maps. In certain site configurations a remote attacker could perform a cross-site scripting attack if a victim can be forced to visit a malicious URL using certain web browsers.


|                    |                                                                                              |
|--------------------|----------------------------------------------------------------------------------------------|
| Published:         | 2005-12-12                                                                                   |
| Affected versions: | 1.3.0 and later, before 1.3.35 2.0.35 and later, before 2.0.58 2.2.0 and later, before 2.2.2 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2005-3352>
* <https://nvd.nist.gov/vuln/detail/CVE-2005-3352>
* <https://httpd.apache.org/security/json/CVE-2005-3352.json>

## CVE-2005-2728 (Medium) {#cve-2005-2728}

**Byterange filter DoS**


A flaw in the byterange filter would cause some responses to be buffered into memory. If a server has a dynamic resource such as a CGI script or PHP script which generates a large amount of data, an attacker could send carefully crafted requests in order to consume resources, potentially leading to a Denial of Service.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2005-07-07                      |
| Affected versions: | 2.0.35 and later, before 2.0.55 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2005-2728>
* <https://nvd.nist.gov/vuln/detail/CVE-2005-2728>
* <https://httpd.apache.org/security/json/CVE-2005-2728.json>

## CVE-2005-2088 (Medium) {#cve-2005-2088}

**HTTP Request Spoofing**


A flaw occured when using the Apache server as a HTTP proxy. A remote attacker could send a HTTP request with both a "Transfer-Encoding: chunked" header and a Content-Length header, causing Apache to incorrectly handle and forward the body of the request in a way that causes the receiving server to process it as a separate HTTP request. This could allow the bypass of web application firewall protection or lead to cross-site scripting (XSS) attacks.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2005-06-11                      |
| Affected versions: | 2.0.35 and later, before 2.0.55 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2005-2088>
* <https://nvd.nist.gov/vuln/detail/CVE-2005-2088>
* <https://httpd.apache.org/security/json/CVE-2005-2088.json>

## CVE-2004-0940 (Medium) {#cve-2004-0940}

**mod_include overflow**


A buffer overflow in mod_include could allow a local user who is authorised to create server side include (SSI) files to gain the privileges of a httpd child.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2004-10-21                     |
| Affected versions: | 1.3.0 and later, before 1.3.33 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2004-0940>
* <https://nvd.nist.gov/vuln/detail/CVE-2004-0940>
* <https://httpd.apache.org/security/json/CVE-2004-0940.json>

## CVE-2004-0885 (Medium) {#cve-2004-0885}

**SSLCipherSuite bypass**


An issue has been discovered in the mod_ssl module when configured to use the "SSLCipherSuite" directive in directory or location context. If a particular location context has been configured to require a specific set of cipher suites, then a client will be able to access that location using any cipher suite allowed by the virtual host configuration.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2004-10-01                      |
| Affected versions: | 2.0.35 and later, before 2.0.53 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2004-0885>
* <https://nvd.nist.gov/vuln/detail/CVE-2004-0885>
* <https://httpd.apache.org/security/json/CVE-2004-0885.json>

## CVE-2003-0789 (Medium) {#cve-2003-0789}

**CGI output information leak**


A bug in mod_cgid mishandling of CGI redirect paths can result in CGI output going to the wrong client when a threaded MPM is used.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2003-10-27                      |
| Affected versions: | 2.0.35 and later, before 2.0.48 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2003-0789>
* <https://nvd.nist.gov/vuln/detail/CVE-2003-0789>
* <https://httpd.apache.org/security/json/CVE-2003-0789.json>

## CVE-2003-0254 (Medium) {#cve-2003-0254}

**Remote DoS via IPv6 ftp proxy**


When a client requests that proxy ftp connect to a ftp server with IPv6 address, and the proxy is unable to create an IPv6 socket, an infinite loop occurs causing a remote Denial of Service.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2003-07-09                      |
| Affected versions: | 2.0.35 and later, before 2.0.47 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2003-0254>
* <https://nvd.nist.gov/vuln/detail/CVE-2003-0254>
* <https://httpd.apache.org/security/json/CVE-2003-0254.json>

## CVE-2004-0492 (Medium) {#cve-2004-0492}

**mod_proxy buffer overflow**


A buffer overflow was found in the Apache proxy module, mod_proxy, which can be triggered by receiving an invalid Content-Length header. In order to exploit this issue an attacker would need to get an Apache installation that was configured as a proxy to connect to a malicious site. This would cause the Apache child processing the request to crash, although this does not represent a significant Denial of Service attack as requests will continue to be handled by other Apache child processes. This...


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2003-06-10                      |
| Affected versions: | 1.3.26 and later, before 1.3.32 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2004-0492>
* <https://nvd.nist.gov/vuln/detail/CVE-2004-0492>
* <https://httpd.apache.org/security/json/CVE-2004-0492.json>

## CVE-2002-1156 (Medium) {#cve-2002-1156}

**CGI scripts source revealed using WebDAV**


In Apache 2.0.42 only, for a location where both WebDAV and CGI were enabled, a POST request to a CGI script would reveal the CGI source to a remote user.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2002-10-03                      |
| Affected versions: | 2.0.42 and later, before 2.0.43 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2002-1156>
* <https://nvd.nist.gov/vuln/detail/CVE-2002-1156>
* <https://httpd.apache.org/security/json/CVE-2002-1156.json>

## CVE-2002-1593 (Medium) {#cve-2002-1593}

**mod_dav crash**


A flaw was found in handling of versioning hooks in mod_dav. An attacker could send a carefully crafted request in such a way to cause the child process handling the connection to crash. This issue will only result in a denial of service where a threaded process model is in use.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2002-09-19                      |
| Affected versions: | 2.0.35 and later, before 2.0.42 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2002-1593>
* <https://nvd.nist.gov/vuln/detail/CVE-2002-1593>
* <https://httpd.apache.org/security/json/CVE-2002-1593.json>

## CVE-2001-0730 (Medium) {#cve-2001-0730}

**split-logfile can cause arbitrary log files to be written to**


A vulnerability was found in the split-logfile support program. A request with a specially crafted Host: header could allow any file with a .log extension on the system to be written to.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2001-09-28                     |
| Affected versions: | 1.3.0 and later, before 1.3.22 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2001-0730>
* <https://nvd.nist.gov/vuln/detail/CVE-2001-0730>
* <https://httpd.apache.org/security/json/CVE-2001-0730.json>

## CVE-2000-0505 (Medium) {#cve-2000-0505}

**Requests can cause directory listing to be displayed on NT**


A security hole on Apache for Windows allows a user to view the listing of a directory instead of the default HTML page by sending a carefully constructed request.


|                    |                                                                                                         |
|--------------------|---------------------------------------------------------------------------------------------------------|
| Published:         | 2000-10-13                                                                                              |
| Affected versions: | 1.3.0 and later, before 1.3.12 (assumed, not confirmed by the advisory) 1.3.12 and later, before 1.3.14 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2000-0505>
* <https://nvd.nist.gov/vuln/detail/CVE-2000-0505>
* <https://httpd.apache.org/security/json/CVE-2000-0505.json>

## CVE-2000-1206 (Medium) {#cve-2000-1206}

**Mass virtual hosting security issue**


A security problem can occur for sites using mass name-based virtual hosting (using the new mod_vhost_alias module) or with special mod_rewrite rules.


|                    |                                                                                                       |
|--------------------|-------------------------------------------------------------------------------------------------------|
| Published:         | 2000-01-21                                                                                            |
| Affected versions: | 1.3.0 and later, before 1.3.9 (assumed, not confirmed by the advisory) 1.3.9 and later, before 1.3.11 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2000-1206>
* <https://nvd.nist.gov/vuln/detail/CVE-2000-1206>
* <https://httpd.apache.org/security/json/CVE-2000-1206.json>

## CVE-2026-109163 (Low) {#cve-2026-109163}

**mod_vhost_alias 1 byte stack buffer overwrite (after CVE-2026-63292)**


Stack-based buffer overflow vulnerability in Apache HTTP Server's mod_vhost_alias (after CVE-2026-63292)


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2026-11-11                      |
| Affected versions: | 2.4.69 and later, before 2.4.71 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-109163>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-109163>
* <https://httpd.apache.org/security/json/CVE-2026-109163.json>

## CVE-2026-42356 (Low) {#cve-2026-42356}

**limited RCE for some internal redirects to non-CGI files in CGI directories**


Deployment of wrong handler vulnerability in Apache HTTP Server allows the target of some internal redirects from CGI programs to also be treated as CGI and executed. The target must already be in a directory enabled for CGI and have no other extension understood by mod_mime.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2026-10-01                      |
| Affected versions: | 2.4.60 and later, before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-42356>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-42356>
* <https://httpd.apache.org/security/json/CVE-2026-42356.json>

## CVE-2026-46729 (Low) {#cve-2026-46729}

**mod_heartmonitor denial of service**


NULL Pointer Dereference vulnerability in Apache HTTP Servers mod_heartmonitor over unicast listener.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-10-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-46729>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-46729>
* <https://httpd.apache.org/security/json/CVE-2026-46729.json>

## CVE-2026-47360 (Low) {#cve-2026-47360}

**mod_session: Session cookie not removed during internal redirect**


Exposure of Sensitive Information to an Unauthorized Actor vulnerability in Apache HTTP Server's mod_session_cookie module.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-10-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-47360>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-47360>
* <https://httpd.apache.org/security/json/CVE-2026-47360.json>

## CVE-2026-48005 (Low) {#cve-2026-48005}

**mod_auth_digest reauthentication attack**


Missing authentication checks in mod_auth_digest in Apache Software Foundation Apache HTTP Server before 2.4.69 on all platforms allows an unauthenticated remote client to cause a denial of service (forced re-authentication) via forged Authorization headers when Digest authentication is enabled with AuthDigestNcCheck .


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-10-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-48005>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-48005>
* <https://httpd.apache.org/security/json/CVE-2026-48005.json>

## CVE-2026-56153 (Low) {#cve-2026-56153}

**mod_charset_lite: Heap overflow in finish_partial_char**


Out-of-bounds Write vulnerability in Apache HTTP Server's mod_charset_lite.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-10-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-56153>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-56153>
* <https://httpd.apache.org/security/json/CVE-2026-56153.json>

## CVE-2026-56154 (Low) {#cve-2026-56154}

**mod_rewrite use-after-free via %{LA-U:HTTP:...}**


Use After Free vulnerability in Apache HTTP Server's mod_rewrite when using lookahead (%{LA-U:HTTP:...})


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-10-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-56154>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-56154>
* <https://httpd.apache.org/security/json/CVE-2026-56154.json>

## CVE-2026-56449 (Low) {#cve-2026-56449}

**mod_proxy_html: crash in dump_content**


Out-of-bounds Write vulnerability in Apache HTTP Server's mod_proxy_html with crafted HTTP response bodies.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2026-10-01                      |
| Affected versions: | 2.4.68 and later, before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-56449>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-56449>
* <https://httpd.apache.org/security/json/CVE-2026-56449.json>

## CVE-2026-58415 (Low) {#cve-2026-58415}

**mod_dav_fs property database read access**


Internal state files accessible to external parties in mod_dav_fs in Apache Software Foundation Apache HTTP Server before 2.4.69 on all platforms allows a remote client to read WebDAV dead properties of resources it cannot author via a GET request for the .DAV state directory


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-10-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-58415>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-58415>
* <https://httpd.apache.org/security/json/CVE-2026-58415.json>

## CVE-2026-59797 (Low) {#cve-2026-59797}

**mod_ssl SSLRequire allows .htaccess ap_expr file-function**


Improper Privilege Management vulnerability in Apache HTTP Server's mod_ssl via SSLRequire and file-related expressions.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-10-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-59797>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-59797>
* <https://httpd.apache.org/security/json/CVE-2026-59797.json>

## CVE-2026-63045 (Low) {#cve-2026-63045}

**mod_proxy_ftp PASV address handling**


Improper validation of FTP PASV reply address in mod_proxy_ftp in Apache Software Foundation Apache HTTP Server through 2.4.68 on all platforms allows, in forward proxy configurations, an untrusted FTP server to cause the proxy to open a data connection to an arbitrary third-party host via a crafted PASV response.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-10-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-63045>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-63045>
* <https://httpd.apache.org/security/json/CVE-2026-63045.json>

## CVE-2026-63686 (Low) {#cve-2026-63686}

**mod_xml2enc crash on charset conversion failure**


A NULL pointer dereference in mod_xml2enc in Apache Software Foundation Apache HTTP Server before 2.4.69 on all platforms allows an untrusted backend server to cause a denial of service via a proxied response with a charset whose conversion partially succeeds then fails.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-10-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-63686>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-63686>
* <https://httpd.apache.org/security/json/CVE-2026-63686.json>

## CVE-2026-63718 (Low) {#cve-2026-63718}

**mod_proxy_uwsgi Transfer-Encoding response smuggling**


Inconsistent Interpretation of HTTP Requests ('HTTP Request/Response Smuggling') response smuggling vulnerability in Apache HTTP Server via mod_proxy_uwsgi and a crafted uwsgi response with Transfer-Encoding.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2026-10-01                      |
| Affected versions: | 2.4.30 and later, before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-63718>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-63718>
* <https://httpd.apache.org/security/json/CVE-2026-63718.json>

## CVE-2026-73636 (Low) {#cve-2026-73636}

**mod_auth_digest one-time-nonce replay attack**


Authentication bypass by capture-replay in mod_auth_digest in Apache Software Foundation Apache HTTP Server 2.4.x on all platforms allows a man-in-the-middle (MITM) attacker to replay captured digest authentication credentials via crafted requests that trigger garbage collection of the client's shared memory entry when AuthDigestNonceLifetime is set to 0.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-10-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-73636>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-73636>
* <https://httpd.apache.org/security/json/CVE-2026-73636.json>

## CVE-2026-73637 (Low) {#cve-2026-73637}

**mod_auth_digest DoS attack**


Use after free in mod_auth_digest in Apache Software Foundation Apache HTTP Server before 2.4.69 on all platforms allows an unauthenticated remote client to cause authentication state corruption via concurrent Digest authentication requests when AuthDigestNcCheck is enabled or AuthDigestNonceLifetime is set to 0.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-10-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-73637>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-73637>
* <https://httpd.apache.org/security/json/CVE-2026-73637.json>

## CVE-2026-79768 (Low) {#cve-2026-79768}

**mod_userdir information disclosure**


Path equivalence: '/./' (single dot directory) vulnerability in Apache HTTP Server's mod_userdir module when configured with absolute non-wildcard UserDir directive (the 2nd form in https://httpd.apache.org/docs/2.4/mod/mod_userdir.html#userdir)


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-10-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.69 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-79768>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-79768>
* <https://httpd.apache.org/security/json/CVE-2026-79768.json>

## CVE-2026-29167 (Low) {#cve-2026-29167}

**mod_ldap per-dir use-after-free**


Use After Free vulnerability in Apache HTTP Server with mod_ldap in per-directory configuration


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-06-08                     |
| Affected versions: | 2.4.0 and later, before 2.4.68 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-29167>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-29167>
* <https://httpd.apache.org/security/json/CVE-2026-29167.json>

## CVE-2026-29170 (Low) {#cve-2026-29170}

**mod_proxy_ftp XSS**


A cross-site scripting vulnerability exists in mod_proxy_ftp's HTML directory list generation in Apache HTTP Server 2.4.67 and earlier when listing FTP directory contents either via forward or reverse proxy configuration.


|                    |                            |
|--------------------|----------------------------|
| Published:         | 2026-06-08                 |
| Affected versions: | all versions before 2.4.68 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-29170>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-29170>
* <https://httpd.apache.org/security/json/CVE-2026-29170.json>

## CVE-2026-34356 (Low) {#cve-2026-34356}

**ProxyPassReverseCookieMap buffer overflow**


Heap-based Buffer Overflow vulnerability in Apache HTTP Server with malicious backend servers and ProxyPassReverseCookie


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-06-08                     |
| Affected versions: | 2.4.0 and later, before 2.4.68 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-34356>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-34356>
* <https://httpd.apache.org/security/json/CVE-2026-34356.json>

## CVE-2026-42536 (Low) {#cve-2026-42536}

**mod_xml2enc heap overflow**


Heap-based Buffer Overflow vulnerability in Apache HTTP Server with mod_xml2enc, xml2StartParse, and untrusted content


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-06-08                     |
| Affected versions: | 2.4.0 and later, before 2.4.68 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-42536>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-42536>
* <https://httpd.apache.org/security/json/CVE-2026-42536.json>

## CVE-2026-44185 (Low) {#cve-2026-44185}

**Stack Buffer Over-Read in mod_ssl OCSP \`send_request\`**


Buffer Over-read vulnerability in Apache HTTP Server via outbound OCSP requests to an attacker controlled OCSP server


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-06-08                     |
| Affected versions: | 2.4.0 and later, before 2.4.68 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-44185>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-44185>
* <https://httpd.apache.org/security/json/CVE-2026-44185.json>

## CVE-2026-44631 (Low) {#cve-2026-44631}

**Heap Underflow in \`ap_regname\` via Signed Char Overflow**


Buffer Underwrite vulnerability in Apache HTTP Server on crafted regular expressions in the configuration.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-06-08                     |
| Affected versions: | 2.4.0 and later, before 2.4.68 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-44631>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-44631>
* <https://httpd.apache.org/security/json/CVE-2026-44631.json>

## CVE-2026-48913 (Low) {#cve-2026-48913}

**mod_http2 memory corruption when file handles exhausted**


Use After Free vulnerability in Apache HTTP Server module mod_http2 when file handles are already exhausted.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2026-06-08                      |
| Affected versions: | 2.4.55 and later, before 2.4.68 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-48913>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-48913>
* <https://httpd.apache.org/security/json/CVE-2026-48913.json>

## CVE-2026-28780 (Low) {#cve-2026-28780}

**Apache HTTP Server: buffer overflow in mod_proxy_ajp via ajp_msg_check_header()**


Heap-based Buffer Overflow vulnerability in mod_proxy_ajp of Apache HTTP Server. If mod_proxy_ajp connects to a malicious AJP server this AJP server can send a malicious AJP message back to mod_proxy_ajp and cause it to write 4 attacker controlled bytes after the end of a heap based buffer.


|                    |                            |
|--------------------|----------------------------|
| Published:         | 2026-05-04                 |
| Affected versions: | all versions before 2.4.67 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-28780>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-28780>
* <https://httpd.apache.org/security/json/CVE-2026-28780.json>

## CVE-2026-29168 (Low) {#cve-2026-29168}

**Apache HTTP Server: mod_md unrestricted OCSP response**


Allocation of Resources Without Limits or Throttling vulnerability in Apache HTTP Server's mod_md via OCSP response data.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2026-05-04                      |
| Affected versions: | 2.4.30 and later, before 2.4.67 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-29168>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-29168>
* <https://httpd.apache.org/security/json/CVE-2026-29168.json>

## CVE-2026-29169 (Low) {#cve-2026-29169}

**mod_dav_lock indirect lock crash**


A NULL pointer dereference in mod_dav_lock in Apache HTTP Server 2.4.66 and earlier may allow an attacker to crash the server with a malicious request.mod_dav_lock is not used internally by mod_dav or mod_dav_fs.


|                    |                            |
|--------------------|----------------------------|
| Published:         | 2026-05-04                 |
| Affected versions: | all versions before 2.4.67 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-29169>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-29169>
* <https://httpd.apache.org/security/json/CVE-2026-29169.json>

## CVE-2026-33007 (Low) {#cve-2026-33007}

**mod_authn_socache crash**


A NULL pointer dereference in the mod_authn_socache in Apache HTTP Server 2.4.66 and earlier allows an unauthenticated remote user to crash a child process in a caching forward proxy configuration.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-05-04                     |
| Affected versions: | 2.4.0 and later, before 2.4.67 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-33007>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-33007>
* <https://httpd.apache.org/security/json/CVE-2026-33007.json>

## CVE-2026-33523 (Low) {#cve-2026-33523}

**multiple modules: HTTP response splitting forwarding malicious status line**


HTTP response splitting vulnerability in multiple Apache HTTP Server modules with untrusted or compromised backend servers.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2026-05-04                     |
| Affected versions: | 2.4.0 and later, before 2.4.67 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-33523>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-33523>
* <https://httpd.apache.org/security/json/CVE-2026-33523.json>

## CVE-2026-33857 (Low) {#cve-2026-33857}

**Apache HTTP Server: Off-by-one OOB reads in AJP getter functions**


Out-of-bounds Read vulnerability in mod_proxy_ajp of


|                    |                            |
|--------------------|----------------------------|
| Published:         | 2026-05-04                 |
| Affected versions: | all versions before 2.4.67 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-33857>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-33857>
* <https://httpd.apache.org/security/json/CVE-2026-33857.json>

## CVE-2026-34032 (Low) {#cve-2026-34032}

**mod_proxy_ajp: Heap Buffer Over-Read Due to Missing Null-Termination Check (ajp_msg_get_string)**


Improper Null Termination, Out-of-bounds Read vulnerability in Apache HTTP Server.


|                    |                            |
|--------------------|----------------------------|
| Published:         | 2026-05-04                 |
| Affected versions: | all versions before 2.4.67 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-34032>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-34032>
* <https://httpd.apache.org/security/json/CVE-2026-34032.json>

## CVE-2026-34059 (Low) {#cve-2026-34059}

**Apache HTTP Server: mod_proxy_ajp: Heap Over-Read and memory disclosure in ajp_parse_data()**


Buffer Over-read vulnerability in Apache HTTP Server.


|                    |                            |
|--------------------|----------------------------|
| Published:         | 2026-05-04                 |
| Affected versions: | all versions before 2.4.67 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2026-34059>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-34059>
* <https://httpd.apache.org/security/json/CVE-2026-34059.json>

## CVE-2025-55753 (Low) {#cve-2025-55753}

**Apache HTTP Server: mod_md (ACME), unintended retry intervals**


An integer overflow in the case of failed ACME certificate renewal leads, after a number of failures (\~30 days in default configurations), to the backoff timer becoming 0. Attempts to renew the certificate then are repeated without delays until it succeeds.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2025-12-04                      |
| Affected versions: | 2.4.30 and later, before 2.4.66 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2025-55753>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-55753>
* <https://httpd.apache.org/security/json/CVE-2025-55753.json>

## CVE-2025-65082 (Low) {#cve-2025-65082}

**Apache HTTP Server: CGI environment variable override**


Improper Neutralization of Escape, Meta, or Control Sequences vulnerability in Apache HTTP Server through environment variables set via the Apache configuration unexpectedly superseding variables calculated by the server for CGI programs.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2025-12-04                     |
| Affected versions: | 2.4.0 and later, before 2.4.66 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2025-65082>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-65082>
* <https://httpd.apache.org/security/json/CVE-2025-65082.json>

## CVE-2024-43204 (Low) {#cve-2024-43204}

**Apache HTTP Server: SSRF with mod_headers setting Content-Type header**


SSRF in Apache HTTP Server with mod_proxy loaded allows an attacker to send outbound proxy requests to a URL controlled by the attacker. Requires an unlikely configuration where mod_headers is configured to modify the Content-Type request or response header with a value provided in the HTTP request.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2025-07-10                     |
| Affected versions: | 2.4.0 and later, before 2.4.64 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2024-43204>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-43204>
* <https://httpd.apache.org/security/json/CVE-2024-43204.json>

## CVE-2024-47252 (Low) {#cve-2024-47252}

**Apache HTTP Server: mod_ssl error log variable escaping**


Insufficient escaping of user-supplied data in mod_ssl in Apache HTTP Server 2.4.63 and earlier allows an untrusted SSL/TLS client to insert escape characters into log files in some configurations.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2025-07-10                     |
| Affected versions: | 2.4.0 and later, before 2.4.64 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2024-47252>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-47252>
* <https://httpd.apache.org/security/json/CVE-2024-47252.json>

## CVE-2025-49630 (Low) {#cve-2025-49630}

**Apache HTTP Server: mod_proxy_http2 denial of service**


In certain proxy configurations, a denial of service attack against Apache HTTP Server versions 2.4.26 through to 2.4.63 can be triggered by untrusted clients causing an assertion in mod_proxy_http2.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2025-07-10                      |
| Affected versions: | 2.4.26 and later, before 2.4.64 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2025-49630>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-49630>
* <https://httpd.apache.org/security/json/CVE-2025-49630.json>

## CVE-2024-36387 (Low) {#cve-2024-36387}

**Apache HTTP Server: DoS by Null pointer in websocket over HTTP/2**


Serving WebSocket protocol upgrades over a HTTP/2 connection could result in a Null Pointer dereference, leading to a crash of the server process, degrading performance.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2024-07-01                      |
| Affected versions: | 2.4.55 and later, before 2.4.60 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2024-36387>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-36387>
* <https://httpd.apache.org/security/json/CVE-2024-36387.json>

## CVE-2024-24795 (Low) {#cve-2024-24795}

**Apache HTTP Server: HTTP Response Splitting in multiple modules**


HTTP Response splitting in multiple modules in Apache HTTP Server allows an attacker that can inject malicious response headers into backend applications to cause an HTTP desynchronization attack.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2024-04-04                     |
| Affected versions: | 2.4.0 and later, before 2.4.59 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2024-24795>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-24795>
* <https://httpd.apache.org/security/json/CVE-2024-24795.json>

## CVE-2023-31122 (Low) {#cve-2023-31122}

**mod_macro buffer over-read**


Out-of-bounds Read vulnerability in mod_macro of Apache HTTP Server.This issue affects Apache HTTP Server: through 2.4.57.


|                    |                            |
|--------------------|----------------------------|
| Published:         | 2023-10-19                 |
| Affected versions: | all versions before 2.4.58 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2023-31122>
* <https://nvd.nist.gov/vuln/detail/CVE-2023-31122>
* <https://httpd.apache.org/security/json/CVE-2023-31122.json>

## CVE-2023-43622 (Low) {#cve-2023-43622}

**Apache HTTP Server: DoS in HTTP/2 with initial windows size 0**


An attacker, opening a HTTP/2 connection with an initial window size of 0, was able to block handling of that connection indefinitely in Apache HTTP Server. This could be used to exhaust worker resources in the server, similar to the well known "slow loris" attack pattern. This has been fixed in version 2.4.58, so that such connection are terminated properly after the configured connection timeout.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2023-10-19                      |
| Affected versions: | 2.4.55 and later, before 2.4.58 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2023-43622>
* <https://nvd.nist.gov/vuln/detail/CVE-2023-43622>
* <https://httpd.apache.org/security/json/CVE-2023-43622.json>

## CVE-2022-28330 (Low) {#cve-2022-28330}

**read beyond bounds in mod_isapi**


Apache HTTP Server 2.4.53 and earlier on Windows may read beyond bounds when configured to process requests with the mod_isapi module.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2022-06-08                     |
| Affected versions: | 2.4.0 and later, before 2.4.54 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2022-28330>
* <https://nvd.nist.gov/vuln/detail/CVE-2022-28330>
* <https://httpd.apache.org/security/json/CVE-2022-28330.json>

## CVE-2022-28614 (Low) {#cve-2022-28614}

**read beyond bounds via ap_rwrite()**


The ap_rwrite() function in Apache HTTP Server 2.4.53 and earlier may read unintended memory if an attacker can cause the server to reflect very large input using ap_rwrite() or ap_rputs(), such as with mod_luas r:puts() function.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2022-06-08                     |
| Affected versions: | 2.4.0 and later, before 2.4.54 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2022-28614>
* <https://nvd.nist.gov/vuln/detail/CVE-2022-28614>
* <https://httpd.apache.org/security/json/CVE-2022-28614.json>

## CVE-2022-28615 (Low) {#cve-2022-28615}

**Read beyond bounds in ap_strcmp_match()**


Apache HTTP Server 2.4.53 and earlier may crash or disclose information due to a read beyond bounds in ap_strcmp_match() when provided with an extremely large input buffer. While no code distributed with the server can be coerced into such a call, third-party modules or lua scripts that use ap_strcmp_match() may hypothetically be affected.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2022-06-08                     |
| Affected versions: | 2.4.0 and later, before 2.4.54 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2022-28615>
* <https://nvd.nist.gov/vuln/detail/CVE-2022-28615>
* <https://httpd.apache.org/security/json/CVE-2022-28615.json>

## CVE-2022-29404 (Low) {#cve-2022-29404}

**Denial of service in mod_lua r:parsebody**


In Apache HTTP Server 2.4.53 and earlier, a malicious request to a lua script that calls r:parsebody(0) may cause a denial of service due to no default limit on possible input size.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2022-06-08                     |
| Affected versions: | 2.4.0 and later, before 2.4.54 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2022-29404>
* <https://nvd.nist.gov/vuln/detail/CVE-2022-29404>
* <https://httpd.apache.org/security/json/CVE-2022-29404.json>

## CVE-2022-30522 (Low) {#cve-2022-30522}

**mod_sed denial of service**


If Apache HTTP Server 2.4.53 is configured to do transformations with mod_sed in contexts where the input to mod_sed may be very large, mod_sed may make excessively large memory allocations and trigger an abort.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2022-06-08                      |
| Affected versions: | 2.4.53 and later, before 2.4.54 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2022-30522>
* <https://nvd.nist.gov/vuln/detail/CVE-2022-30522>
* <https://httpd.apache.org/security/json/CVE-2022-30522.json>

## CVE-2022-30556 (Low) {#cve-2022-30556}

**Information Disclosure in mod_lua with websockets**


Apache HTTP Server 2.4.53 and earlier may return lengths to applications calling r:wsread() that point past the end of the storage allocated for the buffer.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2022-06-08                     |
| Affected versions: | 2.4.0 and later, before 2.4.54 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2022-30556>
* <https://nvd.nist.gov/vuln/detail/CVE-2022-30556>
* <https://httpd.apache.org/security/json/CVE-2022-30556.json>

## CVE-2022-31813 (Low) {#cve-2022-31813}

**mod_proxy X-Forwarded-For dropped by hop-by-hop mechanism**


Apache HTTP Server 2.4.53 and earlier may not send the X-Forwarded- headers to the origin server based on client side Connection header hop-by-hop mechanism. This may be used to bypass IP based authentication on the origin server/application.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2022-06-08                     |
| Affected versions: | 2.4.0 and later, before 2.4.54 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2022-31813>
* <https://nvd.nist.gov/vuln/detail/CVE-2022-31813>
* <https://httpd.apache.org/security/json/CVE-2022-31813.json>

## CVE-2022-22721 (Low) {#cve-2022-22721}

**core: Possible buffer overflow with very large or unlimited LimitXMLRequestBody**


If LimitXMLRequestBody is set to allow request bodies larger than 350MB (defaults to 1M) on 32 bit systems an integer overflow happens which later causes out of bounds writes.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2022-03-14                     |
| Affected versions: | 2.4.0 and later, before 2.4.53 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2022-22721>
* <https://nvd.nist.gov/vuln/detail/CVE-2022-22721>
* <https://httpd.apache.org/security/json/CVE-2022-22721.json>

## CVE-2021-39275 (Low) {#cve-2021-39275}

**ap_escape_quotes buffer overflow**


ap_escape_quotes() may write beyond the end of a buffer when given malicious input. No included modules pass untrusted data to these functions, but third-party / external modules may.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2021-09-16                     |
| Affected versions: | 2.4.0 and later, before 2.4.49 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2021-39275>
* <https://nvd.nist.gov/vuln/detail/CVE-2021-39275>
* <https://httpd.apache.org/security/json/CVE-2021-39275.json>

## CVE-2020-13950 (Low) {#cve-2020-13950}

**mod_proxy_http NULL pointer dereference**


Apache HTTP Server versions 2.4.41 to 2.4.46 mod_proxy_http can be made to crash (NULL pointer dereference) with specially crafted requests using both Content-Length and Transfer-Encoding headers, leading to a Denial of Service


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2021-06-01                      |
| Affected versions: | 2.4.41 and later, before 2.4.48 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2020-13950>
* <https://nvd.nist.gov/vuln/detail/CVE-2020-13950>
* <https://httpd.apache.org/security/json/CVE-2020-13950.json>

## CVE-2020-35452 (Low) {#cve-2020-35452}

**mod_auth_digest possible stack overflow by one nul byte**


Apache HTTP Server versions 2.4.0 to 2.4.46 A specially crafted Digest nonce can cause a stack overflow in mod_auth_digest. There is no report of this overflow being exploitable, nor the Apache HTTP Server team could create one, though some particular compiler and/or compilation option might make it possible, with limited consequences anyway due to the size (a single byte) and the value (zero byte) of the overflow


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2021-06-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.48 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2020-35452>
* <https://nvd.nist.gov/vuln/detail/CVE-2020-35452>
* <https://httpd.apache.org/security/json/CVE-2020-35452.json>

## CVE-2021-26690 (Low) {#cve-2021-26690}

**mod_session NULL pointer dereference**


Apache HTTP Server versions 2.4.0 to 2.4.46 A specially crafted Cookie header handled by mod_session can cause a NULL pointer dereference and crash, leading to a possible Denial Of Service


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2021-06-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.48 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2021-26690>
* <https://nvd.nist.gov/vuln/detail/CVE-2021-26690>
* <https://httpd.apache.org/security/json/CVE-2021-26690.json>

## CVE-2021-26691 (Low) {#cve-2021-26691}

**mod_session response handling heap overflow**


Apache HTTP Server versions 2.4.0 to 2.4.46 A specially crafted SessionHeader sent by an origin server could cause a heap overflow


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2021-06-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.48 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2021-26691>
* <https://nvd.nist.gov/vuln/detail/CVE-2021-26691>
* <https://httpd.apache.org/security/json/CVE-2021-26691.json>

## CVE-2020-11985 (Low) {#cve-2020-11985}

**IP address spoofing when proxying using mod_remoteip and mod_rewrite**


For configurations using proxying with mod_remoteip and certain mod_rewrite rules, an attacker could spoof their IP address for logging and PHP scripts. Note this issue was fixed in Apache HTTP Server 2.4.24 but was retrospectively allocated a low severity CVE in 2020.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2020-08-07                     |
| Affected versions: | 2.4.1 and later, before 2.4.25 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2020-11985>
* <https://nvd.nist.gov/vuln/detail/CVE-2020-11985>
* <https://httpd.apache.org/security/json/CVE-2020-11985.json>

## CVE-2020-1927 (Low) {#cve-2020-1927}

**mod_rewrite CWE-601 open redirect**


In Apache HTTP Server versions 2.4.0 to 2.4.41 some mod_rewrite configurations vulnerable to open redirect.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2020-04-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.42 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2020-1927>
* <https://nvd.nist.gov/vuln/detail/CVE-2020-1927>
* <https://httpd.apache.org/security/json/CVE-2020-1927.json>

## CVE-2020-1934 (Low) {#cve-2020-1934}

**mod_proxy_ftp use of uninitialized value**


in Apache HTTP Server versions 2.4.0 to 2.4.41, mod_proxy_ftp use of uninitialized value with malicious FTP backend.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2020-04-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.42 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2020-1934>
* <https://nvd.nist.gov/vuln/detail/CVE-2020-1934>
* <https://httpd.apache.org/security/json/CVE-2020-1934.json>

## CVE-2019-10092 (Low) {#cve-2019-10092}

**Limited cross-site scripting in mod_proxy error page**


A limited cross-site scripting issue was reported affecting the mod_proxy error page. An attacker could cause the link on the error page to be malfomed and instead point to a page of their choice. This would only be exploitable where a server was set up with proxying enabled but was misconfigured in such a way that the Proxy Error page was displayed. We have taken this opportunity to also remove request data from many other in-built error messages. Note however this issue did not affect them...


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2019-08-14                     |
| Affected versions: | 2.4.0 and later, before 2.4.41 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2019-10092>
* <https://nvd.nist.gov/vuln/detail/CVE-2019-10092>
* <https://httpd.apache.org/security/json/CVE-2019-10092.json>

## CVE-2019-10098 (Low) {#cve-2019-10098}

**mod_rewrite potential open redirect**


Redirects configured with mod_rewrite that were intended to be self-referential might be fooled by encoded newlines and redirect instead to an an unexpected URL within the request URL.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2019-08-14                     |
| Affected versions: | 2.4.0 and later, before 2.4.41 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2019-10098>
* <https://nvd.nist.gov/vuln/detail/CVE-2019-10098>
* <https://httpd.apache.org/security/json/CVE-2019-10098.json>

## CVE-2019-0196 (Low) {#cve-2019-0196}

**mod_http2, read-after-free on a string compare**


Using fuzzed network input, the http/2 request handling could be made to access freed memory in string comparision when determining the method of a request and thus process the request incorrectly.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2019-04-01                      |
| Affected versions: | 2.4.17 and later, before 2.4.39 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2019-0196>
* <https://nvd.nist.gov/vuln/detail/CVE-2019-0196>
* <https://httpd.apache.org/security/json/CVE-2019-0196.json>

## CVE-2019-0197 (Low) {#cve-2019-0197}

**mod_http2, possible crash on late upgrade**


When HTTP/2 was enabled for a http: host or H2Upgrade was enabled for h2 on a https: host, an Upgrade request from http/1.1 to http/2 that was not the first request on a connection could lead to a misconfiguration and crash. A server that never enabled the h2 protocol or that only enabled it for https: and did not configure the "H2Upgrade on" is unaffected by this.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2019-04-01                      |
| Affected versions: | 2.4.34 and later, before 2.4.39 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2019-0197>
* <https://nvd.nist.gov/vuln/detail/CVE-2019-0197>
* <https://httpd.apache.org/security/json/CVE-2019-0197.json>

## CVE-2019-0220 (Low) {#cve-2019-0220}

**Apache httpd URL normalization inconsistincy**


When the path component of a request URL contains multiple consecutive slashes ('/'), directives such as LocationMatch and RewriteRule must account for duplicates in regular expressions while other aspects of the servers processing will implicitly collapse them.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2019-04-01                     |
| Affected versions: | 2.4.0 and later, before 2.4.39 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2019-0220>
* <https://nvd.nist.gov/vuln/detail/CVE-2019-0220>
* <https://httpd.apache.org/security/json/CVE-2019-0220.json>

## CVE-2018-17189 (Low) {#cve-2018-17189}

**DoS for HTTP/2 connections via slow request bodies**


By sending request bodies in a slow loris way to plain resources, the h2 stream for that request unnecessarily occupied a server thread cleaning up that incoming data. This affects only HTTP/2 connections. A possible mitigation is to not enable the h2 protocol.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2019-01-22                      |
| Affected versions: | 2.4.17 and later, before 2.4.38 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2018-17189>
* <https://nvd.nist.gov/vuln/detail/CVE-2018-17189>
* <https://httpd.apache.org/security/json/CVE-2018-17189.json>

## CVE-2018-17199 (Low) {#cve-2018-17199}

**mod_session_cookie does not respect expiry time**


In Apache HTTP Server 2.4 release 2.4.37 and prior, mod_session checks the session expiry time before decoding the session. This causes session expiry time to be ignored for mod_session_cookie sessions since the expiry time is loaded when the session is decoded.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2019-01-22                     |
| Affected versions: | 2.4.0 and later, before 2.4.38 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2018-17199>
* <https://nvd.nist.gov/vuln/detail/CVE-2018-17199>
* <https://httpd.apache.org/security/json/CVE-2018-17199.json>

## CVE-2018-11763 (Low) {#cve-2018-11763}

**DoS for HTTP/2 connections by continuous SETTINGS**


By sending continous SETTINGS frames of maximum size an ongoing HTTP/2 connection could be kept busy and would never time out. This can be abused for a DoS on the server. This only affect a server that has enabled the h2 protocol.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2018-09-25                      |
| Affected versions: | 2.4.18 and later, before 2.4.35 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2018-11763>
* <https://nvd.nist.gov/vuln/detail/CVE-2018-11763>
* <https://httpd.apache.org/security/json/CVE-2018-11763.json>

## CVE-2018-1333 (Low) {#cve-2018-1333}

**DoS for HTTP/2 connections by crafted requests**


By specially crafting HTTP/2 requests, workers would be allocated 60 seconds longer than necessary, leading to worker exhaustion and a denial of service. This issue only affects servers that have configured and enabled HTTP/2 support, which is not the default


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2018-07-18                      |
| Affected versions: | 2.4.18 and later, before 2.4.34 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2018-1333>
* <https://nvd.nist.gov/vuln/detail/CVE-2018-1333>
* <https://httpd.apache.org/security/json/CVE-2018-1333.json>

## CVE-2017-15710 (Low) {#cve-2017-15710}

**Out of bound write in mod_authnz_ldap when using too small Accept-Language values**


mod_authnz_ldap, if configured with AuthLDAPCharsetConfig, uses the Accept-Language header value to lookup the right charset encoding when verifying the user's credentials. If the header value is not present in the charset conversion table, a fallback mechanism is used to truncate it to a two characters value to allow a quick retry (for example, 'en-US' is truncated to 'en'). A header value of less than two characters forces an out of bound write of one NUL byte to a memory location that is not...


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2018-03-21                     |
| Affected versions: | 2.4.1 and later, before 2.4.33 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2017-15710>
* <https://nvd.nist.gov/vuln/detail/CVE-2017-15710>
* <https://httpd.apache.org/security/json/CVE-2017-15710.json>

## CVE-2017-15715 (Low) {#cve-2017-15715}

**\<FilesMatch\> bypass with a trailing newline in the file name**


The expression specified in \<FilesMatch\> could match '$' to a newline character in a malicious filename, rather than matching only the end of the filename. This could be exploited in environments where uploads of some files are are externally blocked, but only by matching the trailing portion of the filename.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2018-03-21                     |
| Affected versions: | 2.4.1 and later, before 2.4.33 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2017-15715>
* <https://nvd.nist.gov/vuln/detail/CVE-2017-15715>
* <https://httpd.apache.org/security/json/CVE-2017-15715.json>

## CVE-2018-1301 (Low) {#cve-2018-1301}

**Possible out of bound access after failure in reading the HTTP request**


A specially crafted request could have crashed the Apache HTTP Server prior to version 2.4.33, due to an out of bound access after a size limit is reached by reading the HTTP header. This vulnerability is considered very hard if not impossible to trigger in non-debug mode (both log and build level), so it is classified as low risk for common server usage.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2018-03-21                     |
| Affected versions: | 2.4.1 and later, before 2.4.33 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2018-1301>
* <https://nvd.nist.gov/vuln/detail/CVE-2018-1301>
* <https://httpd.apache.org/security/json/CVE-2018-1301.json>

## CVE-2018-1302 (Low) {#cve-2018-1302}

**Possible write of after free on HTTP/2 stream shutdown**


When an HTTP/2 stream was destroyed after being handled, the Apache HTTP Server prior to version 2.4.33 could have written a NULL pointer potentially to an already freed memory. The memory pools maintained by the server make this vulnerabilty hard to trigger in usual configurations, the reporter and the team could not reproduce it outside debug builds, so it is classified as low risk.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2018-03-21                      |
| Affected versions: | 2.4.17 and later, before 2.4.33 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2018-1302>
* <https://nvd.nist.gov/vuln/detail/CVE-2018-1302>
* <https://httpd.apache.org/security/json/CVE-2018-1302.json>

## CVE-2018-1303 (Low) {#cve-2018-1303}

**Possible out of bound read in mod_cache_socache**


A specially crafted HTTP request header could have crashed the Apache HTTP Server prior to version 2.4.33 due to an out of bound read while preparing data to be cached in shared memory. It could be used as a Denial of Service attack against users of mod_cache_socache.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2018-03-21                     |
| Affected versions: | 2.4.6 and later, before 2.4.33 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2018-1303>
* <https://nvd.nist.gov/vuln/detail/CVE-2018-1303>
* <https://httpd.apache.org/security/json/CVE-2018-1303.json>

## CVE-2018-1312 (Low) {#cve-2018-1312}

**Weak Digest auth nonce generation in mod_auth_digest**


When generating an HTTP Digest authentication challenge, the nonce sent to prevent reply attacks was not correctly generated using a pseudo-random seed. In a cluster of servers using a common Digest authentication configuration, HTTP requests could be replayed across servers by an attacker without detection.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2018-03-21                     |
| Affected versions: | 2.4.1 and later, before 2.4.33 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2018-1312>
* <https://nvd.nist.gov/vuln/detail/CVE-2018-1312>
* <https://httpd.apache.org/security/json/CVE-2018-1312.json>

## CVE-2017-9798 (Low) {#cve-2017-9798}

**Use-after-free when using \<Limit \> with an unrecognized method in .htaccess ("OptionsBleed")**


When an unrecognized HTTP Method is given in an \<Limit {method}\> directive in an .htaccess file, and that .htaccess file is processed by the corresponding request, the global methods table is corrupted in the current worker process, resulting in erratic behaviour. This behavior may be avoided by listing all unusual HTTP Methods in a global httpd.conf RegisterHttpMethod directive in httpd release 2.4.25 and later. To permit other .htaccess directives while denying the \<Limit \> directive, see the...


|                    |                                                              |
|--------------------|--------------------------------------------------------------|
| Published:         | 2017-09-18                                                   |
| Affected versions: | 2.2.0 and later, before 2.3.0 2.4.1 and later, before 2.4.28 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2017-9798>
* <https://nvd.nist.gov/vuln/detail/CVE-2017-9798>
* <https://httpd.apache.org/security/json/CVE-2017-9798.json>

## CVE-2016-0736 (Low) {#cve-2016-0736}

**Padding Oracle in Apache mod_session_crypto**


Prior to Apache HTTP release 2.4.25, mod_sessioncrypto was encrypting its data/cookie using the configured ciphers with possibly either CBC or ECB modes of operation (AES256-CBC by default), hence no selectable or builtin authenticated encryption. This made it vulnerable to padding oracle attacks, particularly with CBC. An authentication tag (SipHash MAC) is now added to prevent such attacks.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2016-12-20                     |
| Affected versions: | 2.4.1 and later, before 2.4.25 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2016-0736>
* <https://nvd.nist.gov/vuln/detail/CVE-2016-0736>
* <https://httpd.apache.org/security/json/CVE-2016-0736.json>

## CVE-2016-2161 (Low) {#cve-2016-2161}

**DoS vulnerability in mod_auth_digest**


Malicious input to mod_auth_digest will cause the server to crash, and each instance continues to crash even for subsequently valid requests.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2016-12-20                     |
| Affected versions: | 2.4.1 and later, before 2.4.25 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2016-2161>
* <https://nvd.nist.gov/vuln/detail/CVE-2016-2161>
* <https://httpd.apache.org/security/json/CVE-2016-2161.json>

## CVE-2016-8740 (Low) {#cve-2016-8740}

**HTTP/2 CONTINUATION denial of service**


The HTTP/2 protocol implementation (mod_http2) had an incomplete handling of the LimitRequestFields directive. This allowed an attacker to inject unlimited request headers into the server, leading to eventual memory exhaustion.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2016-12-04                      |
| Affected versions: | 2.4.17 and later, before 2.4.25 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2016-8740>
* <https://nvd.nist.gov/vuln/detail/CVE-2016-8740>
* <https://httpd.apache.org/security/json/CVE-2016-8740.json>

## CVE-2016-1546 (Low) {#cve-2016-1546}

**mod_http2: denial of service by thread starvation**


By manipulating the flow control windows on streams, a client was able to block server threads for long times, causing starvation of worker threads. Connections could still be opened, but no streams where processed for these. This issue affected HTTP/2 support in 2.4.17 and 2.4.18.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2016-04-11                      |
| Affected versions: | 2.4.17 and later, before 2.4.20 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2016-1546>
* <https://nvd.nist.gov/vuln/detail/CVE-2016-1546>
* <https://httpd.apache.org/security/json/CVE-2016-1546.json>

## CVE-2015-3183 (Low) {#cve-2015-3183}

**HTTP request smuggling attack against chunked request parser**


An HTTP request smuggling attack was possible due to a bug in parsing of chunked requests. A malicious client could force the server to misinterpret the request length, allowing cache poisoning or credential hijacking if an intermediary proxy is in use.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2015-06-09                                                    |
| Affected versions: | 2.2.0 and later, before 2.2.31 2.4.1 and later, before 2.4.16 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2015-3183>
* <https://nvd.nist.gov/vuln/detail/CVE-2015-3183>
* <https://httpd.apache.org/security/json/CVE-2015-3183.json>

## CVE-2015-3185 (Low) {#cve-2015-3185}

**ap_some_auth_required API unusable**


A design error in the "ap_some_auth_required" function renders the API unusuable in httpd 2.4.x. In particular the API is documented to answering if the request required authentication but only answers if there are Require lines in the applicable configuration. Since 2.4.x Require lines are used for authorization as well and can appear in configurations even when no authentication is required and the request is entirely unrestricted. This could lead to modules using this API to allow access when...


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2015-06-09                     |
| Affected versions: | 2.4.0 and later, before 2.4.16 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2015-3185>
* <https://nvd.nist.gov/vuln/detail/CVE-2015-3185>
* <https://httpd.apache.org/security/json/CVE-2015-3185.json>

## CVE-2015-0253 (Low) {#cve-2015-0253}

**Crash in ErrorDocument 400 handling**


A crash in ErrorDocument handling was found. If ErrorDocument 400 was configured pointing to a local URL-path with the INCLUDES filter active, a NULL dereference would occur when handling the error, causing the child process to crash. This issue affected the 2.4.12 release only.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2015-03-05                      |
| Affected versions: | 2.4.12 and later, before 2.4.16 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2015-0253>
* <https://nvd.nist.gov/vuln/detail/CVE-2015-0253>
* <https://httpd.apache.org/security/json/CVE-2015-0253.json>

## CVE-2015-0228 (Low) {#cve-2015-0228}

**mod_lua: Crash in websockets PING handling**


A stack recursion crash in the mod_lua module was found. A Lua script executing the r:wsupgrade() function could crash the process if a malicious client sent a carefully crafted PING request. This issue affected releases 2.4.7 through 2.4.12 inclusive.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2015-02-04                     |
| Affected versions: | 2.4.7 and later, before 2.4.16 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2015-0228>
* <https://nvd.nist.gov/vuln/detail/CVE-2015-0228>
* <https://httpd.apache.org/security/json/CVE-2015-0228.json>

## CVE-2014-3583 (Low) {#cve-2014-3583}

**mod_proxy_fcgi out-of-bounds memory read**


An out-of-bounds memory read was found in mod_proxy_fcgi. A malicious FastCGI server could send a carefully crafted response which could lead to a crash when reading past the end of a heap memory or stack buffer. This issue affects version 2.4.10 only.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2014-11-12                      |
| Affected versions: | 2.4.10 and later, before 2.4.12 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2014-3583>
* <https://nvd.nist.gov/vuln/detail/CVE-2014-3583>
* <https://httpd.apache.org/security/json/CVE-2014-3583.json>

## CVE-2014-8109 (Low) {#cve-2014-8109}

**mod_lua multiple "Require" directive handling is broken**


Fix handling of the Require line in mod_lua when a LuaAuthzProvider is used in multiple Require directives with different arguments. This could lead to different authentication rules than expected.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2014-11-09                     |
| Affected versions: | 2.4.1 and later, before 2.4.12 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2014-8109>
* <https://nvd.nist.gov/vuln/detail/CVE-2014-8109>
* <https://httpd.apache.org/security/json/CVE-2014-8109.json>

## CVE-2014-3581 (Low) {#cve-2014-3581}

**mod_cache crash with empty Content-Type header**


A NULL pointer deference was found in mod_cache. A malicious HTTP server could cause a crash in a caching forward proxy configuration. This crash would only be a denial of service if using a threaded MPM.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2014-09-08                     |
| Affected versions: | 2.4.1 and later, before 2.4.12 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2014-3581>
* <https://nvd.nist.gov/vuln/detail/CVE-2014-3581>
* <https://httpd.apache.org/security/json/CVE-2014-3581.json>

## CVE-2013-4352 (Low) {#cve-2013-4352}

**mod_cache crash**


A NULL pointer dereference was found in mod_cache. A malicious HTTP server could cause a crash in a caching forward proxy configuration. (Note that this vulnerability was fixed in the 2.4.7 release, but the security impact was not disclosed at the time of the release.)


|                    |                               |
|--------------------|-------------------------------|
| Published:         | 2014-07-14                    |
| Affected versions: | 2.4.6 and later, before 2.4.7 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2013-4352>
* <https://nvd.nist.gov/vuln/detail/CVE-2013-4352>
* <https://httpd.apache.org/security/json/CVE-2013-4352.json>

## CVE-2014-0098 (Low) {#cve-2014-0098}

**mod_log_config crash**


A flaw was found in mod_log_config. A remote attacker could send a specific truncated cookie causing a crash. This crash would only be a denial of service if using a threaded MPM.


|                    |                                                              |
|--------------------|--------------------------------------------------------------|
| Published:         | 2014-03-17                                                   |
| Affected versions: | 2.2.0 and later, before 2.2.27 2.4.1 and later, before 2.4.9 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2014-0098>
* <https://nvd.nist.gov/vuln/detail/CVE-2014-0098>
* <https://httpd.apache.org/security/json/CVE-2014-0098.json>

## CVE-2013-5704 (Low) {#cve-2013-5704}

**HTTP Trailers processing bypass**


HTTP trailers could be used to replace HTTP headers late during request processing, potentially undoing or otherwise confusing modules that examined or modified request headers earlier. This fix adds the "MergeTrailers" directive to restore legacy behavior.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2013-10-19                                                    |
| Affected versions: | 2.2.0 and later, before 2.2.29 2.4.1 and later, before 2.4.12 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2013-5704>
* <https://nvd.nist.gov/vuln/detail/CVE-2013-5704>
* <https://httpd.apache.org/security/json/CVE-2013-5704.json>

## CVE-2013-1862 (Low) {#cve-2013-1862}

**mod_rewrite log escape filtering**


mod_rewrite does not filter terminal escape sequences from logs, which could make it easier for attackers to insert those sequences into terminal emulators containing vulnerabilities related to escape sequences.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2013-04-19                                                     |
| Affected versions: | 2.0.35 and later, before 2.0.65 2.2.0 and later, before 2.2.25 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2013-1862>
* <https://nvd.nist.gov/vuln/detail/CVE-2013-1862>
* <https://httpd.apache.org/security/json/CVE-2013-1862.json>

## CVE-2012-3499 (Low) {#cve-2012-3499}

**XSS due to unescaped hostnames**


Various XSS flaws due to unescaped hostnames and URIs HTML output in mod_info, mod_status, mod_imagemap, mod_ldap, and mod_proxy_ftp.


|                    |                                                              |
|--------------------|--------------------------------------------------------------|
| Published:         | 2013-02-18                                                   |
| Affected versions: | 2.2.0 and later, before 2.2.24 2.4.1 and later, before 2.4.4 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2012-3499>
* <https://nvd.nist.gov/vuln/detail/CVE-2012-3499>
* <https://httpd.apache.org/security/json/CVE-2012-3499.json>

## CVE-2012-2687 (Low) {#cve-2012-2687}

**XSS in mod_negotiation when untrusted uploads are supported**


Possible XSS for sites which use mod_negotiation and allow untrusted uploads to locations which have MultiViews enabled. Note: This issue is also known as CVE-2008-0455.


|                    |                                                              |
|--------------------|--------------------------------------------------------------|
| Published:         | 2012-06-13                                                   |
| Affected versions: | 2.2.0 and later, before 2.2.23 2.4.1 and later, before 2.4.3 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2012-2687>
* <https://nvd.nist.gov/vuln/detail/CVE-2012-2687>
* <https://httpd.apache.org/security/json/CVE-2012-2687.json>

## CVE-2012-0883 (Low) {#cve-2012-0883}

**insecure LD_LIBRARY_PATH handling**


Insecure handling of LD_LIBRARY_PATH was found that could lead to the current working directory to be searched for DSOs. This could allow a local user to execute code as root if an administrator runs apachectl from an untrusted directory.


|                    |                                                              |
|--------------------|--------------------------------------------------------------|
| Published:         | 2012-03-02                                                   |
| Affected versions: | 2.2.0 and later, before 2.2.23 2.4.1 and later, before 2.4.2 |


References:

* <https://httpd.apache.org/security/vulnerabilities_24.html#CVE-2012-0883>
* <https://nvd.nist.gov/vuln/detail/CVE-2012-0883>
* <https://httpd.apache.org/security/json/CVE-2012-0883.json>

## CVE-2012-0031 (Low) {#cve-2012-0031}

**scoreboard parent DoS**


A flaw was found in the handling of the scoreboard. An unprivileged child process could cause the parent process to crash at shutdown rather than terminate cleanly.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2012-01-11                                                     |
| Affected versions: | 2.0.35 and later, before 2.0.65 2.2.0 and later, before 2.2.22 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2012-0031>
* <https://nvd.nist.gov/vuln/detail/CVE-2012-0031>
* <https://httpd.apache.org/security/json/CVE-2012-0031.json>

## CVE-2012-4557 (Low) {#cve-2012-4557}

**mod_proxy_ajp remote DoS**


A flaw was found when mod_proxy_ajp connects to a backend server that takes too long to respond. Given a specific configuration, a remote attacker could send certain requests, putting a backend server into an error state until the retry timeout expired. This could lead to a temporary denial of service.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2012-01-04                      |
| Affected versions: | 2.2.12 and later, before 2.2.22 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2012-4557>
* <https://nvd.nist.gov/vuln/detail/CVE-2012-4557>
* <https://httpd.apache.org/security/json/CVE-2012-4557.json>

## CVE-2012-0021 (Low) {#cve-2012-0021}

**mod_log_config crash**


A flaw was found in mod_log_config. If the '%{cookiename}C' log format string is in use, a remote attacker could send a specific cookie causing a crash. This crash would only be a denial of service if using a threaded MPM.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2011-11-28                      |
| Affected versions: | 2.2.17 and later, before 2.2.22 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2012-0021>
* <https://nvd.nist.gov/vuln/detail/CVE-2012-0021>
* <https://httpd.apache.org/security/json/CVE-2012-0021.json>

## CVE-2011-3607 (Low) {#cve-2011-3607}

**mod_setenvif .htaccess privilege escalation**


An integer overflow flaw was found which, when the mod_setenvif module is enabled, could allow local users to gain privileges via a .htaccess file.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2011-11-02                                                     |
| Affected versions: | 2.0.35 and later, before 2.0.65 2.2.0 and later, before 2.2.22 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2011-3607>
* <https://nvd.nist.gov/vuln/detail/CVE-2011-3607>
* <https://httpd.apache.org/security/json/CVE-2011-3607.json>

## CVE-2010-1623 (Low) {#cve-2010-1623}

**apr_bridage_split_line DoS**


A flaw was found in the apr_brigade_split_line() function of the bundled APR-util library, used to process non-SSL requests. A remote attacker could send requests, carefully crafting the timing of individual bytes, which would slowly consume memory, potentially leading to a denial of service.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2010-10-01                                                     |
| Affected versions: | 2.0.35 and later, before 2.0.64 2.2.0 and later, before 2.2.17 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2010-1623>
* <https://nvd.nist.gov/vuln/detail/CVE-2010-1623>
* <https://httpd.apache.org/security/json/CVE-2010-1623.json>

## CVE-2010-1452 (Low) {#cve-2010-1452}

**mod_cache and mod_dav DoS**


A flaw was found in the handling of requests by mod_cache (2.2) and mod_dav (2.0 and 2.2). A malicious remote attacker could send a carefully crafted request and cause a httpd child process to crash. This crash would only be a denial of service if using the worker MPM. This issue is further mitigated as mod_dav is only affected by requests that are most likely to be authenticated, and mod_cache is only affected if the uncommon "CacheIgnoreURLSessionIdentifiers" directive, introduced in version...


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2010-07-25                                                     |
| Affected versions: | 2.0.35 and later, before 2.0.64 2.2.0 and later, before 2.2.16 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2010-1452>
* <https://nvd.nist.gov/vuln/detail/CVE-2010-1452>
* <https://httpd.apache.org/security/json/CVE-2010-1452.json>

## CVE-2010-0434 (Low) {#cve-2010-0434}

**Subrequest handling of request headers (mod_headers)**


A flaw in the core subrequest process code was fixed, to always provide a shallow copy of the headers_in array to the subrequest, instead of a pointer to the parent request's array as it had for requests without request bodies. This meant all modules such as mod_headers which may manipulate the input headers for a subrequest would poison the parent request in two ways, one by modifying the parent request, which might not be intended, and second by leaving pointers to modified header fields in...


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2009-12-09                                                     |
| Affected versions: | 2.0.35 and later, before 2.0.64 2.2.0 and later, before 2.2.15 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2010-0434>
* <https://nvd.nist.gov/vuln/detail/CVE-2010-0434>
* <https://httpd.apache.org/security/json/CVE-2010-0434.json>

## CVE-2009-3560 (Low) {#cve-2009-3560}

**expat DoS**


A buffer over-read flaw was found in the bundled expat library. An attacker who is able to get Apache to parse an untrused XML document (for example through mod_dav) may be able to cause a crash. This crash would only be a denial of service if using the worker MPM.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2009-12-02                                                     |
| Affected versions: | 2.0.35 and later, before 2.0.64 2.2.0 and later, before 2.2.17 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2009-3560>
* <https://nvd.nist.gov/vuln/detail/CVE-2009-3560>
* <https://httpd.apache.org/security/json/CVE-2009-3560.json>

## CVE-2009-3095 (Low) {#cve-2009-3095}

**mod_proxy_ftp FTP command injection**


A flaw was found in the mod_proxy_ftp module. In a reverse proxy configuration, a remote attacker could use this flaw to bypass intended access restrictions by creating a carefully-crafted HTTP Authorization header, allowing the attacker to send arbitrary commands to the FTP server.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2009-09-03                                                     |
| Affected versions: | 2.0.35 and later, before 2.0.64 2.2.0 and later, before 2.2.14 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2009-3095>
* <https://nvd.nist.gov/vuln/detail/CVE-2009-3095>
* <https://httpd.apache.org/security/json/CVE-2009-3095.json>

## CVE-2009-3094 (Low) {#cve-2009-3094}

**mod_proxy_ftp DoS**


A NULL pointer dereference flaw was found in the mod_proxy_ftp module. A malicious FTP server to which requests are being proxied could use this flaw to crash an httpd child process via a malformed reply to the EPSV or PASV commands, resulting in a limited denial of service.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2009-09-02                                                     |
| Affected versions: | 2.0.35 and later, before 2.0.64 2.2.0 and later, before 2.2.14 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2009-3094>
* <https://nvd.nist.gov/vuln/detail/CVE-2009-3094>
* <https://httpd.apache.org/security/json/CVE-2009-3094.json>

## CVE-2009-2412 (Low) {#cve-2009-2412}

**APR apr_palloc heap overflow**


A flaw in apr_palloc() in the bundled copy of APR could cause heap overflows in programs that try to apr_palloc() a user controlled size. The Apache HTTP Server itself does not pass unsanitized user-provided sizes to this function, so it could only be triggered through some other application which uses apr_palloc() in a vulnerable way.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2009-08-04                                                     |
| Affected versions: | 2.0.35 and later, before 2.0.64 2.2.0 and later, before 2.2.13 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2009-2412>
* <https://nvd.nist.gov/vuln/detail/CVE-2009-2412>
* <https://httpd.apache.org/security/json/CVE-2009-2412.json>

## CVE-2009-1891 (Low) {#cve-2009-1891}

**mod_deflate DoS**


A denial of service flaw was found in the mod_deflate module. This module continued to compress large files until compression was complete, even if the network connection that requested the content was closed before compression completed. This would cause mod_deflate to consume large amounts of CPU if mod_deflate was enabled for a large file.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2009-06-26                                                     |
| Affected versions: | 2.0.35 and later, before 2.0.64 2.2.0 and later, before 2.2.12 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2009-1891>
* <https://nvd.nist.gov/vuln/detail/CVE-2009-1891>
* <https://httpd.apache.org/security/json/CVE-2009-1891.json>

## CVE-2009-1195 (Low) {#cve-2009-1195}

**AllowOverride Options handling bypass**


A flaw was found in the handling of the "Options" and "AllowOverride" directives. In configurations using the "AllowOverride" directive with certain "Options=" arguments, local users were not restricted from executing commands from a Server-Side-Include script as intended.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2009-04-22                     |
| Affected versions: | 2.2.0 and later, before 2.2.12 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2009-1195>
* <https://nvd.nist.gov/vuln/detail/CVE-2009-1195>
* <https://httpd.apache.org/security/json/CVE-2009-1195.json>

## CVE-2009-3720 (Low) {#cve-2009-3720}

**expat DoS**


A buffer over-read flaw was found in the bundled expat library. An attacker who is able to get Apache to parse an untrused XML document (for example through mod_dav) may be able to cause a crash. This crash would only be a denial of service if using the worker MPM.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2009-01-17                                                     |
| Affected versions: | 2.0.35 and later, before 2.0.64 2.2.0 and later, before 2.2.17 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2009-3720>
* <https://nvd.nist.gov/vuln/detail/CVE-2009-3720>
* <https://httpd.apache.org/security/json/CVE-2009-3720.json>

## CVE-2008-2939 (Low) {#cve-2008-2939}

**mod_proxy_ftp globbing XSS**


A flaw was found in the handling of wildcards in the path of a FTP URL with mod_proxy_ftp. If mod_proxy_ftp is enabled to support FTP-over-HTTP, requests containing globbing characters could lead to cross-site scripting (XSS) attacks.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2008-08-05                                                     |
| Affected versions: | 2.0.35 and later, before 2.0.64 2.2.0 and later, before 2.2.10 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2008-2939>
* <https://nvd.nist.gov/vuln/detail/CVE-2008-2939>
* <https://httpd.apache.org/security/json/CVE-2008-2939.json>

## CVE-2008-0456 (Low) {#cve-2008-0456}

**CRLF injection in mod_negotiation when untrusted uploads are supported**


Possible CRLF injection allowing HTTP response splitting attacks for sites which use mod_negotiation and allow untrusted uploads to locations which have MultiViews enabled.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2008-01-21                     |
| Affected versions: | 2.2.0 and later, before 2.2.12 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2008-0456>
* <https://nvd.nist.gov/vuln/detail/CVE-2008-0456>
* <https://httpd.apache.org/security/json/CVE-2008-0456.json>

## CVE-2007-6420 (Low) {#cve-2007-6420}

**mod_proxy_balancer CSRF**


The mod_proxy_balancer provided an administrative interface that could be vulnerable to cross-site request forgery (CSRF) attacks.


|                    |                               |
|--------------------|-------------------------------|
| Published:         | 2008-01-09                    |
| Affected versions: | 2.2.0 and later, before 2.2.9 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2007-6420>
* <https://nvd.nist.gov/vuln/detail/CVE-2007-6420>
* <https://httpd.apache.org/security/json/CVE-2007-6420.json>

## CVE-2008-0005 (Low) {#cve-2008-0005}

**mod_proxy_ftp UTF-7 XSS**


A workaround was added in the mod_proxy_ftp module. On sites where mod_proxy_ftp is enabled and a forward proxy is configured, a cross-site scripting attack is possible against Web browsers which do not correctly derive the response character set following the rules in RFC 2616.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2008-01-08                                                    |
| Affected versions: | 2.0.35 and later, before 2.0.63 2.2.0 and later, before 2.2.8 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2008-0005>
* <https://nvd.nist.gov/vuln/detail/CVE-2008-0005>
* <https://httpd.apache.org/security/json/CVE-2008-0005.json>

## CVE-2007-6421 (Low) {#cve-2007-6421}

**mod_proxy_balancer XSS**


A flaw was found in the mod_proxy_balancer module. On sites where mod_proxy_balancer is enabled, a cross-site scripting attack against an authorized user is possible.


|                    |                               |
|--------------------|-------------------------------|
| Published:         | 2008-01-02                    |
| Affected versions: | 2.2.0 and later, before 2.2.8 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2007-6421>
* <https://nvd.nist.gov/vuln/detail/CVE-2007-6421>
* <https://httpd.apache.org/security/json/CVE-2007-6421.json>

## CVE-2007-6422 (Low) {#cve-2007-6422}

**mod_proxy_balancer DoS**


A flaw was found in the mod_proxy_balancer module. On sites where mod_proxy_balancer is enabled, an authorized user could send a carefully crafted request that would cause the Apache child process handling that request to crash. This could lead to a denial of service if using a threaded Multi-Processing Module.


|                    |                               |
|--------------------|-------------------------------|
| Published:         | 2008-01-02                    |
| Affected versions: | 2.2.0 and later, before 2.2.8 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2007-6422>
* <https://nvd.nist.gov/vuln/detail/CVE-2007-6422>
* <https://httpd.apache.org/security/json/CVE-2007-6422.json>

## CVE-2005-3357 (Low) {#cve-2005-3357}

**mod_ssl access control DoS**


A NULL pointer dereference flaw in mod_ssl was discovered affecting server configurations where an SSL virtual host is configured with access control and a custom 400 error document. A remote attacker could send a carefully crafted request to trigger this issue which would lead to a crash. This crash would only be a denial of service if using the worker MPM.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2005-12-12                                                    |
| Affected versions: | 2.0.35 and later, before 2.0.58 2.2.0 and later, before 2.2.2 |


References:

* <https://httpd.apache.org/security/vulnerabilities_22.html#CVE-2005-3357>
* <https://nvd.nist.gov/vuln/detail/CVE-2005-3357>
* <https://httpd.apache.org/security/json/CVE-2005-3357.json>

## CVE-2005-2970 (Low) {#cve-2005-2970}

**Worker MPM memory leak**


A memory leak in the worker MPM would allow remote attackers to cause a denial of service (memory consumption) via aborted connections, which prevents the memory for the transaction pool from being reused for other connections. This issue was downgraded in severity to low (from moderate) as sucessful exploitation of the race condition would be difficult.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2005-10-14                      |
| Affected versions: | 2.0.36 and later, before 2.0.55 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2005-2970>
* <https://nvd.nist.gov/vuln/detail/CVE-2005-2970>
* <https://httpd.apache.org/security/json/CVE-2005-2970.json>

## CVE-2005-2491 (Low) {#cve-2005-2491}

**PCRE overflow**


An integer overflow flaw was found in PCRE, a Perl-compatible regular expression library included within httpd. A local user who has the ability to create .htaccess files could create a maliciously crafted regular expression in such as way that they could gain the privileges of a httpd child.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2005-08-01                      |
| Affected versions: | 2.0.35 and later, before 2.0.55 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2005-2491>
* <https://nvd.nist.gov/vuln/detail/CVE-2005-2491>
* <https://httpd.apache.org/security/json/CVE-2005-2491.json>

## CVE-2005-1268 (Low) {#cve-2005-1268}

**Malicious CRL off-by-one**


An off-by-one stack overflow was discovered in the mod_ssl CRL verification callback. In order to exploit this issue the Apache server would need to be configured to use a malicious certificate revocation list (CRL)


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2005-06-08                      |
| Affected versions: | 2.0.35 and later, before 2.0.55 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2005-1268>
* <https://nvd.nist.gov/vuln/detail/CVE-2005-1268>
* <https://httpd.apache.org/security/json/CVE-2005-1268.json>

## CVE-2004-0747 (Low) {#cve-2004-0747}

**Environment variable expansion flaw**


A buffer overflow was found in the expansion of environment variables during configuration file parsing. This issue could allow a local user to gain the privileges of a httpd child if a server can be forced to parse a carefully crafted .htaccess file written by a local user.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2004-09-15                      |
| Affected versions: | 2.0.35 and later, before 2.0.51 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2004-0747>
* <https://nvd.nist.gov/vuln/detail/CVE-2004-0747>
* <https://httpd.apache.org/security/json/CVE-2004-0747.json>

## CVE-2004-0809 (Low) {#cve-2004-0809}

**WebDAV remote crash**


An issue was discovered in the mod_dav module which could be triggered for a location where WebDAV authoring access has been configured. A malicious remote client which is authorized to use the LOCK method could force an httpd child process to crash by sending a particular sequence of LOCK requests. This issue does not allow execution of arbitrary code. and will only result in a denial of service where a threaded process model is in use.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2004-09-12                      |
| Affected versions: | 2.0.35 and later, before 2.0.51 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2004-0809>
* <https://nvd.nist.gov/vuln/detail/CVE-2004-0809>
* <https://httpd.apache.org/security/json/CVE-2004-0809.json>

## CVE-2004-0751 (Low) {#cve-2004-0751}

**Malicious SSL proxy can cause crash**


An issue was discovered in the mod_ssl module in Apache 2.0.44-2.0.50 which could be triggered if the server is configured to allow proxying to a remote SSL server. A malicious remote SSL server could force an httpd child process to crash by sending a carefully crafted response header. This issue is not believed to allow execution of arbitrary code and will only result in a denial of service where a threaded process model is in use.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2004-07-07                      |
| Affected versions: | 2.0.44 and later, before 2.0.51 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2004-0751>
* <https://nvd.nist.gov/vuln/detail/CVE-2004-0751>
* <https://httpd.apache.org/security/json/CVE-2004-0751.json>

## CVE-2004-0488 (Low) {#cve-2004-0488}

**FakeBasicAuth overflow**


A buffer overflow in the mod_ssl FakeBasicAuth code could be exploited by an attacker using a (trusted) client certificate with a subject DN field which exceeds 6K in length.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2004-05-17                      |
| Affected versions: | 2.0.35 and later, before 2.0.50 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2004-0488>
* <https://nvd.nist.gov/vuln/detail/CVE-2004-0488>
* <https://httpd.apache.org/security/json/CVE-2004-0488.json>

## CVE-2004-1834 (Low) {#cve-2004-1834}

**mod_disk_cache stores sensitive headers**


The experimental mod_disk_cache module stored client authentication credentials for cached objects such as proxy authentication credentials and Basic Authentication passwords on disk.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2004-03-20                      |
| Affected versions: | 2.0.35 and later, before 2.0.53 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2004-1834>
* <https://nvd.nist.gov/vuln/detail/CVE-2004-1834>
* <https://httpd.apache.org/security/json/CVE-2004-1834.json>

## CVE-2003-0987 (Low) {#cve-2003-0987}

**mod_digest nonce checking**


mod_digest does not properly verify the nonce of a client response by using a AuthNonce secret. This could allow a malicious user who is able to sniff network traffic to conduct a replay attack against a website using Digest protection. Note that mod_digest implements an older version of the MD5 Digest Authentication specification which is known not to work with modern browsers. This issue does not affect mod_auth_digest.


|                    |                                |
|--------------------|--------------------------------|
| Published:         | 2003-12-18                     |
| Affected versions: | 1.3.0 and later, before 1.3.31 |


References:

* <https://httpd.apache.org/security/vulnerabilities_13.html#CVE-2003-0987>
* <https://nvd.nist.gov/vuln/detail/CVE-2003-0987>
* <https://httpd.apache.org/security/json/CVE-2003-0987.json>

## CVE-2003-0542 (Low) {#cve-2003-0542}

**Local configuration regular expression overflow**


By using a regular expression with more than 9 captures a buffer overflow can occur in mod_alias or mod_rewrite. To exploit this an attacker would need to be able to create a carefully crafted configuration file (.htaccess or httpd.conf)


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2003-10-27                                                     |
| Affected versions: | 1.3.0 and later, before 1.3.29 2.0.35 and later, before 2.0.48 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2003-0542>
* <https://nvd.nist.gov/vuln/detail/CVE-2003-0542>
* <https://httpd.apache.org/security/json/CVE-2003-0542.json>

## CVE-2003-0192 (Low) {#cve-2003-0192}

**mod_ssl renegotiation issue**


A bug in the optional renegotiation code in mod_ssl included with Apache httpd can cause cipher suite restrictions to be ignored. This is triggered if optional renegotiation is used (SSLOptions +OptRenegotiate) along with verification of client certificates and a change to the cipher suite over the renegotiation.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2003-07-09                      |
| Affected versions: | 2.0.35 and later, before 2.0.47 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2003-0192>
* <https://nvd.nist.gov/vuln/detail/CVE-2003-0192>
* <https://httpd.apache.org/security/json/CVE-2003-0192.json>

## CVE-2003-0020 (Low) {#cve-2003-0020}

**Error log escape filtering**


Apache does not filter terminal escape sequences from error logs, which could make it easier for attackers to insert those sequences into terminal emulators containing vulnerabilities related to escape sequences.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2003-02-24                                                     |
| Affected versions: | 1.3.0 and later, before 1.3.31 2.0.35 and later, before 2.0.49 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2003-0020>
* <https://nvd.nist.gov/vuln/detail/CVE-2003-0020>
* <https://httpd.apache.org/security/json/CVE-2003-0020.json>

## CVE-2003-0083 (Low) {#cve-2003-0083}

**Filtered escape sequences**


Apache did not filter terminal escape sequences from its access logs, which could make it easier for attackers to insert those sequences into terminal emulators containing vulnerabilities related to escape sequences.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2003-02-24                                                     |
| Affected versions: | 1.3.0 and later, before 1.3.26 2.0.35 and later, before 2.0.46 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2003-0083>
* <https://nvd.nist.gov/vuln/detail/CVE-2003-0083>
* <https://httpd.apache.org/security/json/CVE-2003-0083.json>

## CVE-2002-0840 (Low) {#cve-2002-0840}

**Error page XSS using wildcard DNS**


Cross-site scripting (XSS) vulnerability in the default error page of Apache 2.0 before 2.0.43, and 1.3.x up to 1.3.26, when UseCanonicalName is "Off" and support for wildcard DNS is present, allows remote attackers to execute script as other web page visitors via the Host: header.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2002-10-02                                                     |
| Affected versions: | 1.3.0 and later, before 1.3.27 2.0.35 and later, before 2.0.43 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2002-0840>
* <https://nvd.nist.gov/vuln/detail/CVE-2002-0840>
* <https://httpd.apache.org/security/json/CVE-2002-0840.json>

## CVE-2002-0654 (Low) {#cve-2002-0654}

**Path revealing exposures**


A path-revealing exposure was present in multiview type map negotiation (such as the default error documents) where a module would report the full path of the typemapped .var file when multiple documents or no documents could be served. Additionally a path-revealing exposure in cgi/cgid when Apache fails to invoke a script. The modules would report "couldn't create child process /path-to-script/script.pl" revealing the full path of the script.


|                    |                                                                                                          |
|--------------------|----------------------------------------------------------------------------------------------------------|
| Published:         | 2002-08-09                                                                                               |
| Affected versions: | 2.0.35 and later, before 2.0.39 (assumed, not confirmed by the advisory) 2.0.39 and later, before 2.0.40 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2002-0654>
* <https://nvd.nist.gov/vuln/detail/CVE-2002-0654>
* <https://httpd.apache.org/security/json/CVE-2002-0654.json>

## CVE-2002-1592 (Low) {#cve-2002-1592}

**Warning messages could be displayed to users**


In some cases warning messages could get returned to end users in addition to being recorded in the error log. This could reveal the path to a CGI script for example, a minor security exposure.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2002-04-22                      |
| Affected versions: | 2.0.35 and later, before 2.0.36 |


References:

* <https://httpd.apache.org/security/vulnerabilities_20.html#CVE-2002-1592>
* <https://nvd.nist.gov/vuln/detail/CVE-2002-1592>
* <https://httpd.apache.org/security/json/CVE-2002-1592.json>
