---
# This page was generated from the add-on.
title: nginx Known Vulnerabilities
type: userguide
weight: 2
---

# nginx Known Vulnerabilities

This page lists the known vulnerabilities (CVEs) in nginx itself which the "nginx Version with Known Vulnerabilities" alert of the [Server Side Technology Version with Known Vulnerabilities](/docs/desktop/addons/passive-scan-rules/#id-20020) passive scan rule checks disclosed versions against.


The vulnerability details below are generated from the [nginx
security advisories](https://nginx.org/en/security_advisories.html) and CVE records when the add-on is built, so they are not translated. Vulnerabilities are listed most severe first.
Ranges marked as assumed apply to nginx on Windows only, which the version disclosed does not rule out.


Last updated: 2026-11-18. Vulnerabilities listed: 77.

## CVE-2026-113425 (High) {#cve-2026-113425}

**Use-after-free in mail proxy module**


When NGINX Plus or NGINX Open Source is configured as a mail proxy, undisclosed traffic can cause a use-after-free in an nginx worker process. Additionally, attackers can execute code on systems with Address Space Layout Randomization (ASLR) disabled or when the attacker can bypass ASLR.


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 9.2                                                             |
| Published:         | 2026-11-18                                                      |
| Affected versions: | 0.5.33 and later, before 1.30.7 1.31.0 and later, before 1.31.9 |


References:

* <https://my.f5.com/manage/s/article/K000163931>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-113425>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-113425>

## CVE-2026-118899 (High) {#cve-2026-118899}

**Infinite loop while reading client request body over TLS 1.3**


When using the listen directive with the ssl parameter in the http block with TLSv1.3 enabled, an attacker can use a specially crafted TLS connection to cause an infinite loop in the NGINX worker process while reading the HTTP request body. As a result, the worker process stops accepting new connections and processing existing connections. Note: Software versions which have reached End of Technical Support (EoTS) are not evaluated.


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 8.7                                                             |
| Published:         | 2026-11-18                                                      |
| Affected versions: | 1.13.0 and later, before 1.30.7 1.31.0 and later, before 1.31.9 |


References:

* <https://my.f5.com/manage/s/article/K000163930>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-118899>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-118899>

## CVE-2026-123007 (High) {#cve-2026-123007}

**Memory corruption in HTTP/2 flow control**


This issue affects NGINX Plus or NGINX Open Source configurations that use HTTP/2. When NGINX processes undisclosed traffic, the flow control window can exceed the allowed threshold, potentially resulting in a heap buffer overflow typically followed by an NGINX worker segmentation fault. Additionally, attackers can execute code on systems with Address Space Layout Randomization (ASLR) disabled or when the attacker can bypass ASLR.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| CVSS score:        | 9.2                                                            |
| Published:         | 2026-11-18                                                     |
| Affected versions: | 1.9.5 and later, before 1.30.7 1.31.0 and later, before 1.31.9 |


References:

* <https://my.f5.com/manage/s/article/K000163926>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-123007>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-123007>

## CVE-2026-42533 (High) {#cve-2026-42533}

**Buffer overflow when using map and regex**


A vulnerability exists in NGINX Plus and NGINX Open Source when a map directive uses regex matching and a string expression references the map's regex capture variables before referencing the map output variable. Alternatively, the same result could be achieved by using a non-cacheable variable in a string expression under certain conditions. An unauthenticated attacker along with conditions beyond their control can exploit this vulnerability by sending crafted HTTP requests. This may cause a...


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| CVSS score:        | 9.2                                                            |
| Published:         | 2026-07-15                                                     |
| Affected versions: | 0.9.6 and later, before 1.30.4 1.31.0 and later, before 1.31.3 |


References:

* <https://my.f5.com/manage/s/article/K000162097>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-42533>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-42533>

## CVE-2026-42530 (High) {#cve-2026-42530}

**Use-after-free in HTTP/3**


NGINX Open Source has a vulnerability in the ngx_http_v3_module module. When NGINX Open Source is configured to use the HTTP/3 QUIC module, a remote unauthenticated attacker along with conditions beyond their control can use a specially crafted HTTP/3 session to reopen a QPACK encoder stream. This may cause a Use-after-Free in the NGINX worker process leading to a restart. Additionally, attackers can execute code on systems with Address Space Layout Randomization (ASLR) disabled or when the...


|                    |                                 |
|--------------------|---------------------------------|
| CVSS score:        | 9.2                             |
| Published:         | 2026-06-17                      |
| Affected versions: | 1.31.0 and later, before 1.31.2 |


References:

* <https://my.f5.com/manage/s/article/K000161616>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-42530>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-42530>

## CVE-2024-24989 (High) {#cve-2024-24989}

**NULL pointer dereference in HTTP/3**


When NGINX Plus or NGINX OSS are configured to use the HTTP/3 QUIC module, undisclosed requests can cause NGINX worker processes to terminate.


|                    |                                 |
|--------------------|---------------------------------|
| CVSS score:        | 7.5                             |
| Published:         | 2024-02-14                      |
| Affected versions: | 1.25.3 and later, before 1.25.4 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2024/NW6MNW34VZ6HDIHH5YFBIJYZJN7FGNAV.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2024-24989>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-24989>

## CVE-2024-24990 (High) {#cve-2024-24990}

**Use-after-free in HTTP/3**


When NGINX Plus or NGINX OSS are configured to use the HTTP/3 QUIC module, undisclosed requests can cause NGINX worker processes to terminate.


|                    |                                 |
|--------------------|---------------------------------|
| CVSS score:        | 7.5                             |
| Published:         | 2024-02-14                      |
| Affected versions: | 1.25.0 and later, before 1.25.4 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2024/NW6MNW34VZ6HDIHH5YFBIJYZJN7FGNAV.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2024-24990>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-24990>

## CVE-2014-0088 (High) {#cve-2014-0088}

**SPDY memory corruption**


The SPDY implementation in the ngx_http_spdy_module module in nginx 1.5.10 before 1.5.11, when running on a 32-bit platform, allows remote attackers to execute arbitrary code via a crafted request.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2014-04-29                      |
| Affected versions: | 1.5.10 and later, before 1.5.11 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2014/000132.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2014-0088>
* <https://nvd.nist.gov/vuln/detail/CVE-2014-0088>

## CVE-2014-0133 (High) {#cve-2014-0133}

**SPDY heap buffer overflow**


Heap-based buffer overflow in the SPDY implementation in nginx 1.3.15 before 1.4.7 and 1.5.x before 1.5.12 allows remote attackers to execute arbitrary code via a crafted request.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2014-03-28                                                    |
| Affected versions: | 1.3.15 and later, before 1.4.7 1.5.0 and later, before 1.5.12 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2014/000135.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2014-0133>
* <https://nvd.nist.gov/vuln/detail/CVE-2014-0133>

## CVE-2013-2028 (High) {#cve-2013-2028}

**Stack-based buffer overflow with specially crafted request**


The ngx_http_parse_chunked function in http/ngx_http_parse.c in nginx 1.3.9 through 1.4.0 allows remote attackers to cause a denial of service (crash) and execute arbitrary code via a chunked Transfer-Encoding request with a large chunk size, which triggers an integer signedness error and a stack-based buffer overflow.


|                    |                               |
|--------------------|-------------------------------|
| Published:         | 2013-07-18                    |
| Affected versions: | 1.3.9 and later, before 1.4.1 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2013/000112.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2013-2028>
* <https://nvd.nist.gov/vuln/detail/CVE-2013-2028>

## CVE-2012-1180 (High) {#cve-2012-1180}

**Memory disclosure with specially crafted backend responses**


Use-after-free vulnerability in nginx before 1.0.14 and 1.1.x before 1.1.17 allows remote HTTP servers to obtain sensitive information from process memory via a crafted backend response, in conjunction with a client request.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2012-04-17                                                    |
| Affected versions: | 0.1.0 and later, before 1.0.14 1.1.0 and later, before 1.1.17 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2012/000076.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2012-1180>
* <https://nvd.nist.gov/vuln/detail/CVE-2012-1180>

## CVE-2012-2089 (High) {#cve-2012-2089}

**Buffer overflow in the ngx_http_mp4_module**


Buffer overflow in ngx_http_mp4_module.c in the ngx_http_mp4_module module in nginx 1.0.7 through 1.0.14 and 1.1.3 through 1.1.18, when the mp4 directive is used, allows remote attackers to cause a denial of service (memory overwrite) or possibly execute arbitrary code via a crafted MP4 file.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2012-04-17                                                    |
| Affected versions: | 1.0.7 and later, before 1.0.15 1.1.3 and later, before 1.1.19 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2012/000080.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2012-2089>
* <https://nvd.nist.gov/vuln/detail/CVE-2012-2089>

## CVE-2010-2263 (High) {#cve-2010-2263}

**Vulnerabilities with Windows file default stream**


nginx 0.8 before 0.8.40 and 0.7 before 0.7.66, when running on Windows, allows remote attackers to obtain source code or unparsed content of arbitrary files under the web document root by appending ::$DATA to the URI.


|                    |                                                                                                                                                  |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2010-06-14                                                                                                                                       |
| Affected versions: | 0.7.52 and later, before 0.7.66 (assumed, not confirmed by the advisory) 0.8.0 and later, before 0.8.40 (assumed, not confirmed by the advisory) |


References:

* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2010-2263>
* <https://nvd.nist.gov/vuln/detail/CVE-2010-2263>

## CVE-2010-2266 (High) {#cve-2010-2266}

**Vulnerabilities with invalid UTF-8 sequence on Windows**


nginx 0.8.36 allows remote attackers to cause a denial of service (crash) via certain encoded directory traversal sequences that trigger memory corruption, as demonstrated using the "%c0.%c0." sequence.


|                    |                                                                                                                                                  |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2010-06-14                                                                                                                                       |
| Affected versions: | 0.7.52 and later, before 0.7.67 (assumed, not confirmed by the advisory) 0.8.0 and later, before 0.8.41 (assumed, not confirmed by the advisory) |


References:

* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2010-2266>
* <https://nvd.nist.gov/vuln/detail/CVE-2010-2266>

## CVE-2009-3896 (High) {#cve-2009-3896}

**Null pointer dereference vulnerability**


src/http/ngx_http_parse.c in nginx (aka Engine X) 0.1.0 through 0.4.14, 0.5.x before 0.5.38, 0.6.x before 0.6.39, 0.7.x before 0.7.62, and 0.8.x before 0.8.14 allows remote attackers to cause a denial of service (NULL pointer dereference and worker process crash) via a long URI.


|                    |                                                                                                                             |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2009-11-24                                                                                                                  |
| Affected versions: | 0.1.0 and later, before 0.5.38 0.6.0 and later, before 0.6.39 0.7.0 and later, before 0.7.62 0.8.0 and later, before 0.8.14 |


References:

* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2009-3896>
* <https://nvd.nist.gov/vuln/detail/CVE-2009-3896>

## CVE-2009-3555 (High) {#cve-2009-3555}

**The renegotiation vulnerability in SSL protocol**


The TLS protocol, and the SSL protocol 3.0 and possibly earlier, as used in Microsoft Internet Information Services (IIS) 7.0, mod_ssl in the Apache HTTP Server 2.2.14 and earlier, OpenSSL before 0.9.8l, GnuTLS 2.8.5 and earlier, Mozilla Network Security Services (NSS) 3.12.4 and earlier, multiple Cisco products, and other products, does not properly associate renegotiation handshakes with an existing connection, which allows man-in-the-middle attackers to insert data into HTTPS sessions, and...


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2009-11-09                                                    |
| Affected versions: | 0.1.0 and later, before 0.7.64 0.8.0 and later, before 0.8.23 |


References:

* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2009-3555>
* <https://nvd.nist.gov/vuln/detail/CVE-2009-3555>

## CVE-2009-2629 (High) {#cve-2009-2629}

**Buffer underflow vulnerability**


Buffer underflow in src/http/ngx_http_parse.c in nginx 0.1.0 through 0.5.37, 0.6.x before 0.6.39, 0.7.x before 0.7.62, and 0.8.x before 0.8.15 allows remote attackers to execute arbitrary code via crafted HTTP requests.


|                    |                                                                                                                             |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2009-09-15                                                                                                                  |
| Affected versions: | 0.1.0 and later, before 0.5.38 0.6.0 and later, before 0.6.39 0.7.0 and later, before 0.7.62 0.8.0 and later, before 0.8.15 |


References:

* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2009-2629>
* <https://nvd.nist.gov/vuln/detail/CVE-2009-2629>

## CORE-2010-0121 (High) {#core-2010-0121}

**Vulnerabilities with Windows 8.3 filename pseudonyms**


|                    |                                                                                                                                                  |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Affected versions: | 0.7.52 and later, before 0.7.65 (assumed, not confirmed by the advisory) 0.8.0 and later, before 0.8.33 (assumed, not confirmed by the advisory) |


References:

* <http://www.coresecurity.com/content/filename-pseudonyms-vulnerabilities>
* <https://nginx.org/en/security_advisories.html>

## CVE-2026-120967 (Medium) {#cve-2026-120967}

**SNI bypass when using client certificate validation in stream**


When NGINX Plus or NGINX Open Source is configured to require client certificates ("ssl_verify_client on") in a non-default stream virtual server, a remote attacker could bypass verification of client certificates.


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 6.3                                                             |
| Published:         | 2026-11-18                                                      |
| Affected versions: | 1.25.5 and later, before 1.30.7 1.31.0 and later, before 1.31.9 |


References:

* <https://my.f5.com/manage/s/article/K000163934>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-120967>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-120967>

## CVE-2026-121810 (Medium) {#cve-2026-121810}

**Use-after-free in HTTP/3**


Description: This issue affects NGINX Plus and NGINX Open Source configurations that use HTTP/3. A remote, unauthenticated attacker can cause a use-after-free condition in the NGINX worker process, leading to a restart. Exploitation also depends on conditions beyond the attacker’s control. Additionally, attackers can execute code on systems with Address Space Layout Randomization (ASLR) disabled or when the attacker can bypass ASLR.


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 9.2                                                             |
| Published:         | 2026-11-18                                                      |
| Affected versions: | 1.25.0 and later, before 1.30.7 1.31.0 and later, before 1.31.9 |


References:

* <https://my.f5.com/manage/s/article/K000163927>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-121810>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-121810>

## CVE-2026-123633 (Medium) {#cve-2026-123633}

**Use-after-free in HTTP/2**


When NGINX Plus or NGINX Open Source is configured to use HTTP/2 for client connections and proxy client requests to a backend, a specially crafted request can result in use-after-free in the worker process, if this process is running low on worker_connections. Additionally, attackers can execute code on systems with Address Space Layout Randomization (ASLR) disabled or when the attacker can bypass ASLR.


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 9.2                                                             |
| Published:         | 2026-11-18                                                      |
| Affected versions: | 1.19.7 and later, before 1.30.7 1.31.0 and later, before 1.31.9 |


References:

* <https://my.f5.com/manage/s/article/K000163928>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-123633>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-123633>

## CVE-2026-123634 (Medium) {#cve-2026-123634}

**Use-after-free during response processing in resolver**


This issue occurs when NGINX Plus or NGINX Open Source is configured as a proxy, the proxied server name includes variables, and a Server Side Includes (SSI) or mirror directive sends a subrequest to a location that resolves the same server name. Under these conditions, a specially crafted HTTP request may cause a use-after-free condition in a worker process. An attacker may also be able to execute code if Address Space Layout Randomization (ASLR) is disabled or the attacker can bypass ASLR.


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 9.2                                                             |
| Published:         | 2026-11-18                                                      |
| Affected versions: | 0.6.18 and later, before 1.30.7 1.31.0 and later, before 1.31.9 |


References:

* <https://my.f5.com/manage/s/article/K000163925>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-123634>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-123634>

## CVE-2026-15176 (Medium) {#cve-2026-15176}

**Buffer overflow when using alias with rewrite**


A vulnerability exists in NGINX Plus and NGINX Open Source when a location is configured that uses the alias directive together with rewrite and a set or return directive referencing the $request_filename variable. Alternatively, the same result could be achieved when the $request_filename variable is used in an access log format directive. An unauthenticated attacker along with conditions beyond their control can exploit this vulnerability by sending crafted HTTP requests. This may cause a heap...


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 9.2                                                             |
| Published:         | 2026-10-14                                                      |
| Affected versions: | 0.1.29 and later, before 1.30.6 1.31.0 and later, before 1.31.7 |


References:

* <https://my.f5.com/manage/s/article/K000162416>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-15176>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-15176>

## CVE-2026-93479 (Medium) {#cve-2026-93479}

**Buffer overflow in script evaluation**


A vulnerability exists in NGINX Plus and NGINX Open Source when a map directive uses regex matching and the root directive or access log format references the map's regex capture variables before referencing the map output variable. Alternatively, the same result could be achieved by using a non-cacheable variable in a string expression under certain conditions. An unauthenticated attacker along with conditions beyond their control can exploit this vulnerability by sending crafted HTTP requests....


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 9.2                                                             |
| Published:         | 2026-10-14                                                      |
| Affected versions: | 1.30.0 and later, before 1.30.6 1.31.2 and later, before 1.31.7 |


References:

* <https://my.f5.com/manage/s/article/K000162607>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-93479>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-93479>

## CVE-2026-95101 (Medium) {#cve-2026-95101}

**Request body injection in HTTP/3**


Description NGINX Plus and NGINX Open Source have a vulnerability in the ngx_http_v3_module module. When using HTTP/3 with


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 6.9                                                             |
| Published:         | 2026-10-14                                                      |
| Affected versions: | 1.25.0 and later, before 1.30.6 1.31.0 and later, before 1.31.7 |


References:

* <https://my.f5.com/manage/s/article/K000162613>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-95101>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-95101>

## CVE-2026-97205 (Medium) {#cve-2026-97205}

**Use-after-free when using asynchronous file I/O (AIO)**


NGINX Plus and NGINX Open Source have a vulnerability in the ngx_http_core_module module. When asynchronous file I/O (AIO) is enabled in certain configurations, processing a Server Side Includes (SSI) page containing “include virtual” commands may trigger a Use-After-Free (UAF) in the NGINX worker process. This may cause memory corruption or a worker process crash. Additionally, attackers can execute code on systems with Address Space Layout Randomization (ASLR) disabled or when the attacker can...


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 9.2                                                             |
| Published:         | 2026-10-14                                                      |
| Affected versions: | 0.8.11 and later, before 1.30.6 1.31.0 and later, before 1.31.7 |


References:

* <https://my.f5.com/manage/s/article/K000162608>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-97205>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-97205>

## CVE-2026-97629 (Medium) {#cve-2026-97629}

**Session forgery when using TLS session tickets**


Description When NGINX Plus or NGINX Open Source is configured with ssl_session_cache


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 8.3                                                             |
| Published:         | 2026-10-14                                                      |
| Affected versions: | 1.23.2 and later, before 1.30.6 1.31.0 and later, before 1.31.7 |


References:

* <https://my.f5.com/manage/s/article/K000162606>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-97629>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-97629>

## CVE-2026-90439 (Medium) {#cve-2026-90439}

**Buffer overflow when using ngx_http_v3_module**


NGINX Plus and NGINX Open Source have a vulnerability in the ngx_http_v3_module module. When using HTTP/3 with OpenSSL versions \<= OpenSSL 3.5.0 under certain configurations, a limited heap buffer overflow could happen while processing a TLS handshake. This can happen in a non-deterministic manner that is beyond the attacker's control. This may cause a heap buffer overflow in the NGINX worker process leading to a restart and/or limited data corruption.


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 6.9                                                             |
| Published:         | 2026-09-15                                                      |
| Affected versions: | 1.29.2 and later, before 1.30.5 1.31.0 and later, before 1.31.6 |


References:

* <https://my.f5.com/manage/s/article/K000162604>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-90439>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-90439>

## CVE-2026-56434 (Medium) {#cve-2026-56434}

**Use-after-free when using ngx_http_ssi_module**


NGINX Plus and NGINX Open Source have a vulnerability in the ngx_http_ssi_module module. This vulnerability may exist when the Server-Side Includes (SSI), proxy_pass, and proxy_buffering off directives are configured. With this configuration, an unauthenticated attacker with man-in-the-middle (MITM) ability to control responses from an upstream server may be able to cause a use-after-free in the NGINX worker process. This issue may lead to limited modification of memory or a restart of the NGINX...


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 8.3                                                             |
| Published:         | 2026-07-15                                                      |
| Affected versions: | 0.8.11 and later, before 1.30.4 1.31.0 and later, before 1.31.3 |


References:

* <https://my.f5.com/manage/s/article/K000162098>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-56434>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-56434>

## CVE-2026-60005 (Medium) {#cve-2026-60005}

**Memory disclosure when using ngx_http_slice_module**


NGINX Plus and NGINX Open Source have a vulnerability in the ngx_http_slice_module module. When the slice directive and unnamed regex captures are configured or when a background cache update happens, unauthenticated attackers can send requests that may cause uninitialized memory access in the NGINX worker process, leading to limited disclosure of memory or a restart.


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 8.8                                                             |
| Published:         | 2026-07-15                                                      |
| Affected versions: | 1.15.8 and later, before 1.30.4 1.31.0 and later, before 1.31.3 |


References:

* <https://my.f5.com/manage/s/article/K000162100>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-60005>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-60005>

## CVE-2026-42055 (Medium) {#cve-2026-42055}

**Buffer overflow in the ngx_http_proxy_v2_module and ngx_http_grpc_module**


NGINX Plus and NGINX Open Source have a vulnerability in the ngx_http_proxy_v2_module and ngx_http_grpc_module modules. This vulnerability exists when the proxy_http_version to 2 or grpc_pass directives are used to proxy HTTP/2 traffic, the ignore_invalid_headers directive is set to off, and the large_client_header_buffers directive size is larger than 2 megabytes. A remote, unauthenticated attacker, along with conditions beyond their control, could send large headers while creating an upstream...


|                    |                                                                  |
|--------------------|------------------------------------------------------------------|
| CVSS score:        | 9.2                                                              |
| Published:         | 2026-06-17                                                       |
| Affected versions: | 1.13.10 and later, before 1.30.3 1.31.0 and later, before 1.31.2 |


References:

* <https://my.f5.com/manage/s/article/K000161584>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-42055>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-42055>

## CVE-2026-9256 (Medium) {#cve-2026-9256}

**Buffer overflow in the ngx_http_rewrite_module**


NGINX Plus and NGINX Open Source have a vulnerability in the ngx_http_rewrite_module module. This vulnerability exists when a rewrite directive uses a regex pattern with distinct, overlapping Perl-Compatible Regular Expression (PCRE) captures (for example, \^/((.))$) and a replacement string that references multiple such captures (for example, $1$2) in a redirect or arguments context. An unauthenticated attacker along with conditions beyond their control can exploit this vulnerability by sending...


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 9.2                                                             |
| Published:         | 2026-05-22                                                      |
| Affected versions: | 0.1.17 and later, before 1.30.2 1.31.0 and later, before 1.31.1 |


References:

* <https://my.f5.com/manage/s/article/K000161377>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-9256>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-9256>

## CVE-2026-40460 (Medium) {#cve-2026-40460}

**HTTP/3 address spoofing**


When NGINX Plus or NGINX Open Source are configured to use the HTTP/3 QUIC module, an attacker may be able to spoof their source IP address allowing for bypass of authorization or bypass of rate limiting. Note: Software versions which have reached End of Technical Support (EoTS) are not evaluated.


|                    |                                 |
|--------------------|---------------------------------|
| CVSS score:        | 6.9                             |
| Published:         | 2026-05-13                      |
| Affected versions: | 1.25.0 and later, before 1.30.1 |


References:

* <https://my.f5.com/manage/s/article/K000161068>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-40460>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-40460>

## CVE-2026-40701 (Medium) {#cve-2026-40701}

**resolver use-after-free in OCSP**


NGINX Plus and NGINX Open Source have a vulnerability in the ngx_http_ssl_module module when the ssl_verify_client directive is set to "on" or "optional," and the ssl_ocsp directive is set to "on" or the leaf parameters are configured with a resolver. With this configuration, an unauthenticated attacker can send requests along with conditions beyond its control that may cause a heap-use-after-free error in the NGINX worker process. This vulnerability may result in limited modification of data or...


|                    |                                 |
|--------------------|---------------------------------|
| CVSS score:        | 6.3                             |
| Published:         | 2026-05-13                      |
| Affected versions: | 1.19.0 and later, before 1.30.1 |


References:

* <https://my.f5.com/manage/s/article/K000161021>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-40701>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-40701>

## CVE-2026-42926 (Medium) {#cve-2026-42926}

**HTTP/2 request injection in the ngx_http_proxy_module**


When NGINX Open Source is configured to proxy HTTP/2 traffic by setting proxy_http_version to 2, and also uses proxy_set_body, an attacker may be able to inject frame headers and payload bytes to the upstream peer. Note: Software versions which have reached End of Technical Support (EoTS) are not evaluated.


|                    |                                 |
|--------------------|---------------------------------|
| CVSS score:        | 6.3                             |
| Published:         | 2026-05-13                      |
| Affected versions: | 1.29.4 and later, before 1.30.1 |


References:

* <https://my.f5.com/manage/s/article/K000161131>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-42926>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-42926>

## CVE-2026-42945 (Medium) {#cve-2026-42945}

**Buffer overflow in the ngx_http_rewrite_module**


NGINX Plus and NGINX Open Source have a vulnerability in the ngx_http_rewrite_module module. This vulnerability exists when the rewrite directive is followed by a rewrite, if, or set directive and an unnamed Perl-Compatible Regular Expression (PCRE) capture (for example, $1, $2) with a replacement string that includes a question mark (?). An unauthenticated attacker along with conditions beyond its control can exploit this vulnerability by sending crafted HTTP requests. This may cause a heap...


|                    |                                 |
|--------------------|---------------------------------|
| CVSS score:        | 9.2                             |
| Published:         | 2026-05-13                      |
| Affected versions: | 0.6.27 and later, before 1.30.1 |


References:

* <https://my.f5.com/manage/s/article/K000161019>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-42945>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-42945>

## CVE-2026-42946 (Medium) {#cve-2026-42946}

**Buffer overread in the ngx_http_scgi_module and ngx_http_uwsgi_module**


A vulnerability exists in the ngx_http_scgi_module and ngx_http_uwsgi_module modules that may result in excessive memory allocation or an over-read of data. When scgi_pass or uwsgi_pass is configured, an unauthenticated attacker with man-in-the-middle (MITM) ability to control responses from an upstream server may be able to read the memory of the NGINX worker process or restart it. Note: Software versions which have reached End of Technical Support (EoTS) are not evaluated.


|                    |                                 |
|--------------------|---------------------------------|
| CVSS score:        | 8.3                             |
| Published:         | 2026-05-13                      |
| Affected versions: | 0.8.42 and later, before 1.30.1 |


References:

* <https://my.f5.com/manage/s/article/K000161027>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-42946>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-42946>

## CVE-2026-27654 (Medium) {#cve-2026-27654}

**Buffer overflow in ngx_http_dav_module**


NGINX Open Source and NGINX Plus have a vulnerability in the ngx_http_dav_module module that might allow an attacker to trigger a buffer overflow to the NGINX worker process; this vulnerability may result in termination of the NGINX worker process or modification of source or destination file names outside the document root. This issue affects NGINX Open Source and NGINX Plus when the configuration file uses DAV module MOVE or COPY methods, prefix location (nonregular expression location...


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 8.8                                                             |
| Published:         | 2026-03-24                                                      |
| Affected versions: | 0.5.13 and later, before 1.28.3 1.29.0 and later, before 1.29.7 |


References:

* <https://my.f5.com/manage/s/article/K000160382>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-27654>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-27654>

## CVE-2026-27784 (Medium) {#cve-2026-27784}

**Buffer overflow in the ngx_http_mp4_module**


The 32-bit implementation of NGINX Open Source has a vulnerability in the ngx_http_mp4_module module, which might allow an attacker to over-read or over-write NGINX worker memory resulting in its termination, using a specially crafted MP4 file. The issue only affects 32-bit NGINX Open Source if it is built with the ngx_http_mp4_module module and the mp4 directive is used in the configuration file. Additionally, the attack is possible only if an attacker can trigger the processing of a specially...


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 8.5                                                             |
| Published:         | 2026-03-24                                                      |
| Affected versions: | 1.1.19 and later, before 1.28.3 1.29.0 and later, before 1.29.7 |


References:

* <https://my.f5.com/manage/s/article/K000160364>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-27784>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-27784>

## CVE-2026-28753 (Medium) {#cve-2026-28753}

**Injection in auth_http and XCLIENT**


NGINX Plus and NGINX Open Source have a vulnerability in the ngx_mail_smtp_module module due to the improper handling of CRLF sequences in DNS responses. This allows an attacker-controlled DNS server to inject arbitrary headers into SMTP upstream requests, leading to potential request manipulation. Note: Software versions which have reached End of Technical Support (EoTS) are not evaluated.


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 6.3                                                             |
| Published:         | 2026-03-24                                                      |
| Affected versions: | 0.6.27 and later, before 1.28.3 1.29.0 and later, before 1.29.7 |


References:

* <https://my.f5.com/manage/s/article/K000160367>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-28753>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-28753>

## CVE-2026-28755 (Medium) {#cve-2026-28755}

**OCSP result bypass in stream**


NGINX Plus and NGINX Open Source have a vulnerability in the ngx_stream_ssl_module module due to the improper handling of revoked certificates when configured with the ssl_verify_client on and ssl_ocsp on directives, allowing the TLS handshake to succeed even after an OCSP check identifies the certificate as revoked.


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 5.3                                                             |
| Published:         | 2026-03-24                                                      |
| Affected versions: | 1.27.2 and later, before 1.28.3 1.29.0 and later, before 1.29.7 |


References:

* <https://my.f5.com/manage/s/article/K000160368>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-28755>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-28755>

## CVE-2026-32647 (Medium) {#cve-2026-32647}

**Buffer overflow in the ngx_http_mp4_module**


NGINX Open Source and NGINX Plus have a vulnerability in the ngx_http_mp4_module module, which might allow an attacker to trigger a buffer over-read or over-write to the NGINX worker memory resulting in its termination or possibly code execution, using a specially crafted MP4 file. This issue affects NGINX Open Source and NGINX Plus if it is built with the ngx_http_mp4_module module and the mp4 directive is used in the configuration file. Additionally, the attack is possible only if an attacker...


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 8.5                                                             |
| Published:         | 2026-03-24                                                      |
| Affected versions: | 1.1.19 and later, before 1.28.3 1.29.0 and later, before 1.29.7 |


References:

* <https://my.f5.com/manage/s/article/K000160366>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-32647>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-32647>

## CVE-2026-1642 (Medium) {#cve-2026-1642}

**SSL upstream injection**


A vulnerability exists in NGINX OSS and NGINX Plus when configured to proxy to upstream Transport Layer Security (TLS) servers. An attacker with a man-in-the-middle (MITM) position on the upstream server side—along with conditions beyond the attacker's control—may be able to inject plain text data into the response from an upstream proxied server. Note: Software versions which have reached End of Technical Support (EoTS) are not evaluated.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| CVSS score:        | 8.2                                                            |
| Published:         | 2026-02-04                                                     |
| Affected versions: | 1.3.0 and later, before 1.28.2 1.29.0 and later, before 1.29.5 |


References:

* <https://my.f5.com/manage/s/article/K000159824>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-1642>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-1642>

## CVE-2025-23419 (Medium) {#cve-2025-23419}

**SSL session reuse vulnerability**


When multiple server blocks are configured to share the same IP address and port, an attacker can use session resumption to bypass client certificate authentication requirements on these servers. This vulnerability arises when TLS Session Tickets https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_session_ticket_key are used and/or the SSL session cache https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_session_cache are used in the default server and the default server is...


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 5.3                                                             |
| Published:         | 2025-02-05                                                      |
| Affected versions: | 1.11.4 and later, before 1.26.3 1.27.0 and later, before 1.27.4 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2025/NYEUJX7NCBCGJGXDFVXNMAAMJDFSE45G.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2025-23419>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-23419>

## CVE-2024-31079 (Medium) {#cve-2024-31079}

**Stack overflow and use-after-free in HTTP/3**


When NGINX Plus or NGINX OSS are configured to use the HTTP/3 QUIC module, undisclosed HTTP/3 requests can cause NGINX worker processes to terminate or cause other potential impact. This attack requires that a request be specifically timed during the connection draining process, which the attacker has no visibility and limited influence over.


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 4.8                                                             |
| Published:         | 2024-05-29                                                      |
| Affected versions: | 1.25.0 and later, before 1.25.6 1.26.0 and later, before 1.26.1 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2024/GMY32CSHFH6VFTN76HJNX7WNEX4RLHF6.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2024-31079>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-31079>

## CVE-2024-32760 (Medium) {#cve-2024-32760}

**Buffer overwrite in HTTP/3**


When NGINX Plus or NGINX OSS are configured to use the HTTP/3 QUIC module, undisclosed HTTP/3 encoder instructions can cause NGINX worker processes to terminate or cause or other potential impact.


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 6.5                                                             |
| Published:         | 2024-05-29                                                      |
| Affected versions: | 1.25.0 and later, before 1.25.6 1.26.0 and later, before 1.26.1 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2024/GMY32CSHFH6VFTN76HJNX7WNEX4RLHF6.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2024-32760>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-32760>

## CVE-2024-34161 (Medium) {#cve-2024-34161}

**Memory disclosure in HTTP/3**


When NGINX Plus or NGINX OSS are configured to use the HTTP/3 QUIC module and the network infrastructure supports a Maximum Transmission Unit (MTU) of 4096 or greater without fragmentation, undisclosed QUIC packets can cause NGINX worker processes to leak previously freed memory.


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 5.3                                                             |
| Published:         | 2024-05-29                                                      |
| Affected versions: | 1.25.0 and later, before 1.25.6 1.26.0 and later, before 1.26.1 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2024/GMY32CSHFH6VFTN76HJNX7WNEX4RLHF6.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2024-34161>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-34161>

## CVE-2024-35200 (Medium) {#cve-2024-35200}

**NULL pointer dereference in HTTP/3**


When NGINX Plus or NGINX OSS are configured to use the HTTP/3 QUIC module, undisclosed HTTP/3 requests can cause NGINX worker processes to terminate.


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 5.3                                                             |
| Published:         | 2024-05-29                                                      |
| Affected versions: | 1.25.0 and later, before 1.25.6 1.26.0 and later, before 1.26.1 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2024/GMY32CSHFH6VFTN76HJNX7WNEX4RLHF6.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2024-35200>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-35200>

## CVE-2022-41741 (Medium) {#cve-2022-41741}

**Memory corruption in the ngx_http_mp4_module**


NGINX Open Source before versions 1.23.2 and 1.22.1, NGINX Open Source Subscription before versions R2 P1 and R1 P1, and NGINX Plus before versions R27 P1 and R26 P1 have a vulnerability in the module ngx_http_mp4_module that might allow a local attacker to corrupt NGINX worker memory, resulting in its termination or potential other impact using a specially crafted audio or video file. The issue affects only NGINX products that are built with the ngx_http_mp4_module, when the mp4 directive is...


|                    |                                                                                               |
|--------------------|-----------------------------------------------------------------------------------------------|
| CVSS score:        | 7.0                                                                                           |
| Published:         | 2022-10-19                                                                                    |
| Affected versions: | 1.0.7 and later, before 1.0.16 1.1.3 and later, before 1.22.1 1.23.0 and later, before 1.23.2 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2022/RBRRON6PYBJJM2XIAPQBFBVLR4Q6IHRA.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2022-41741>
* <https://nvd.nist.gov/vuln/detail/CVE-2022-41741>

## CVE-2022-41742 (Medium) {#cve-2022-41742}

**Memory disclosure in the ngx_http_mp4_module**


NGINX Open Source before versions 1.23.2 and 1.22.1, NGINX Open Source Subscription before versions R2 P1 and R1 P1, and NGINX Plus before versions R27 P1 and R26 P1 have a vulnerability in the module ngx_http_mp4_module that might allow a local attacker to cause a worker process crash, or might result in worker process memory disclosure by using a specially crafted audio or video file. The issue affects only NGINX products that are built with the module ngx_http_mp4_module, when the mp4...


|                    |                                                                                               |
|--------------------|-----------------------------------------------------------------------------------------------|
| CVSS score:        | 7.1                                                                                           |
| Published:         | 2022-10-19                                                                                    |
| Affected versions: | 1.0.7 and later, before 1.0.16 1.1.3 and later, before 1.22.1 1.23.0 and later, before 1.23.2 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2022/RBRRON6PYBJJM2XIAPQBFBVLR4Q6IHRA.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2022-41742>
* <https://nvd.nist.gov/vuln/detail/CVE-2022-41742>

## CVE-2021-23017 (Medium) {#cve-2021-23017}

**1-byte memory overwrite in resolver**


A security issue in nginx resolver was identified, which might allow an attacker who is able to forge UDP packets from the DNS server to cause 1-byte memory overwrite, resulting in worker process crash or potential other impact.


|                    |                                 |
|--------------------|---------------------------------|
| Published:         | 2021-06-01                      |
| Affected versions: | 0.6.18 and later, before 1.20.1 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2021/000300.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2021-23017>
* <https://nvd.nist.gov/vuln/detail/CVE-2021-23017>

## CVE-2019-9511 (Medium) {#cve-2019-9511}

**Excessive CPU usage in HTTP/2 with small window updates**


Some HTTP/2 implementations are vulnerable to window size manipulation and stream prioritization manipulation, potentially leading to a denial of service. The attacker requests a large amount of data from a specified resource over multiple streams. They manipulate window size and stream priority to force the server to queue the data in 1-byte chunks. Depending on how efficiently this data is queued, this can consume excess CPU, memory, or both.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| CVSS score:        | 7.5                                                            |
| Published:         | 2019-08-13                                                     |
| Affected versions: | 1.9.5 and later, before 1.16.1 1.17.0 and later, before 1.17.3 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2019/000249.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2019-9511>
* <https://nvd.nist.gov/vuln/detail/CVE-2019-9511>

## CVE-2018-16845 (Medium) {#cve-2018-16845}

**Memory disclosure in the ngx_http_mp4_module**


nginx before versions 1.15.6, 1.14.1 has a vulnerability in the ngx_http_mp4_module, which might allow an attacker to cause infinite loop in a worker process, cause a worker process crash, or might result in worker process memory disclosure by using a specially crafted mp4 file. The issue only affects nginx if it is built with the ngx_http_mp4_module (the module is not built by default) and the .mp4. directive is used in the configuration file. Further, the attack is only possible if an attacker...


|                    |                                                                                               |
|--------------------|-----------------------------------------------------------------------------------------------|
| CVSS score:        | 8.2                                                                                           |
| Published:         | 2018-11-07                                                                                    |
| Affected versions: | 1.0.7 and later, before 1.0.16 1.1.3 and later, before 1.14.1 1.15.0 and later, before 1.15.6 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2018/000221.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2018-16845>
* <https://nvd.nist.gov/vuln/detail/CVE-2018-16845>

## CVE-2017-7529 (Medium) {#cve-2017-7529}

**Integer overflow in the range filter**


Nginx versions since 0.5.6 up to and including 1.13.2 are vulnerable to integer overflow vulnerability in nginx range filter module resulting into leak of potentially sensitive information triggered by specially crafted request.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2017-07-13                                                     |
| Affected versions: | 0.5.6 and later, before 1.12.1 1.13.0 and later, before 1.13.3 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2017/000200.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2017-7529>
* <https://nvd.nist.gov/vuln/detail/CVE-2017-7529>

## CVE-2016-4450 (Medium) {#cve-2016-4450}

**NULL pointer dereference while writing client request body**


os/unix/ngx_files.c in nginx before 1.10.1 and 1.11.x before 1.11.1 allows remote attackers to cause a denial of service (NULL pointer dereference and worker process crash) via a crafted request, involving writing a client request body to a temporary file.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| Published:         | 2016-06-07                                                     |
| Affected versions: | 1.3.9 and later, before 1.10.1 1.11.0 and later, before 1.11.1 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2016/000179.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2016-4450>
* <https://nvd.nist.gov/vuln/detail/CVE-2016-4450>

## CVE-2016-0742 (Medium) {#cve-2016-0742}

**Invalid pointer dereference in resolver**


The resolver in nginx before 1.8.1 and 1.9.x before 1.9.10 allows remote attackers to cause a denial of service (invalid pointer dereference and worker process crash) via a crafted UDP DNS response.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2016-02-15                                                    |
| Affected versions: | 0.6.18 and later, before 1.8.1 1.9.0 and later, before 1.9.10 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2016/000169.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2016-0742>
* <https://nvd.nist.gov/vuln/detail/CVE-2016-0742>

## CVE-2016-0746 (Medium) {#cve-2016-0746}

**Use-after-free during CNAME response processing in resolver**


Use-after-free vulnerability in the resolver in nginx 0.6.18 through 1.8.0 and 1.9.x before 1.9.10 allows remote attackers to cause a denial of service (worker process crash) or possibly have unspecified other impact via a crafted DNS response related to CNAME response processing.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2016-02-15                                                    |
| Affected versions: | 0.6.18 and later, before 1.8.1 1.9.0 and later, before 1.9.10 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2016/000169.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2016-0746>
* <https://nvd.nist.gov/vuln/detail/CVE-2016-0746>

## CVE-2016-0747 (Medium) {#cve-2016-0747}

**Insufficient limits of CNAME resolution in resolver**


The resolver in nginx before 1.8.1 and 1.9.x before 1.9.10 does not properly limit CNAME resolution, which allows remote attackers to cause a denial of service (worker process resource consumption) via vectors related to arbitrary name resolution.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2016-02-15                                                    |
| Affected versions: | 0.6.18 and later, before 1.8.1 1.9.0 and later, before 1.9.10 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2016/000169.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2016-0747>
* <https://nvd.nist.gov/vuln/detail/CVE-2016-0747>

## CVE-2014-3556 (Medium) {#cve-2014-3556}

**STARTTLS command injection**


The STARTTLS implementation in mail/ngx_mail_smtp_handler.c in the SMTP proxy in nginx 1.5.x and 1.6.x before 1.6.1 and 1.7.x before 1.7.4 does not properly restrict I/O buffering, which allows man-in-the-middle attackers to insert commands into encrypted SMTP sessions by sending a cleartext command that is processed after TLS is in place, related to a "plaintext command injection" attack, a similar issue to CVE-2011-0411.


|                    |                                                             |
|--------------------|-------------------------------------------------------------|
| Published:         | 2014-12-29                                                  |
| Affected versions: | 1.5.6 and later, before 1.6.1 1.7.0 and later, before 1.7.4 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2014/000144.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2014-3556>
* <https://nvd.nist.gov/vuln/detail/CVE-2014-3556>

## CVE-2014-3616 (Medium) {#cve-2014-3616}

**SSL session reuse vulnerability**


nginx 0.5.6 through 1.7.4, when using the same shared ssl_session_cache or ssl_session_ticket_key for multiple servers, can reuse a cached SSL session for an unrelated context, which allows remote attackers with certain privileges to conduct "virtual host confusion" attacks.


|                    |                                                             |
|--------------------|-------------------------------------------------------------|
| Published:         | 2014-12-08                                                  |
| Affected versions: | 0.5.6 and later, before 1.6.2 1.7.0 and later, before 1.7.5 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2014/000147.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2014-3616>
* <https://nvd.nist.gov/vuln/detail/CVE-2014-3616>

## CVE-2013-4547 (Medium) {#cve-2013-4547}

**Request line parsing vulnerability**


nginx 0.8.41 through 1.4.3 and 1.5.x before 1.5.7 allows remote attackers to bypass intended restrictions via an unescaped space character in a URI.


|                    |                                                              |
|--------------------|--------------------------------------------------------------|
| Published:         | 2013-11-23                                                   |
| Affected versions: | 0.8.41 and later, before 1.4.4 1.5.0 and later, before 1.5.7 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2013/000125.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2013-4547>
* <https://nvd.nist.gov/vuln/detail/CVE-2013-4547>

## CVE-2013-2070 (Medium) {#cve-2013-2070}

**Memory disclosure with specially crafted HTTP backend responses**


http/modules/ngx_http_proxy_module.c in nginx 1.1.4 through 1.2.8 and 1.3.0 through 1.4.0, when proxy_pass is used with untrusted HTTP servers, allows remote attackers to cause a denial of service (crash) and obtain sensitive information from worker process memory via a crafted proxy response, a similar vulnerability to CVE-2013-2028.


|                    |                                                             |
|--------------------|-------------------------------------------------------------|
| Published:         | 2013-07-18                                                  |
| Affected versions: | 1.1.4 and later, before 1.2.9 1.3.9 and later, before 1.4.1 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2013/000114.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2013-2070>
* <https://nvd.nist.gov/vuln/detail/CVE-2013-2070>

## CVE-2011-4963 (Medium) {#cve-2011-4963}

**Vulnerabilities with Windows directory aliases**


nginx/Windows 1.3.x before 1.3.1 and 1.2.x before 1.2.1 allows remote attackers to bypass intended access restrictions and access restricted files via (1) a trailing . (dot) or (2) certain "$index_allocation" sequences in a request.


|                    |                                                                                                                                                |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2012-07-26                                                                                                                                     |
| Affected versions: | 0.7.52 and later, before 1.2.1 (assumed, not confirmed by the advisory) 1.3.0 and later, before 1.3.1 (assumed, not confirmed by the advisory) |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2012/000086.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2011-4963>
* <https://nvd.nist.gov/vuln/detail/CVE-2011-4963>

## CVE-2011-4315 (Medium) {#cve-2011-4315}

**Buffer overflow in resolver**


Heap-based buffer overflow in compression-pointer processing in core/ngx_resolver.c in nginx before 1.0.10 allows remote resolvers to cause a denial of service (daemon crash) or possibly have unspecified other impact via a long response.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2011-12-08                                                    |
| Affected versions: | 0.6.18 and later, before 1.0.10 1.1.0 and later, before 1.1.8 |


References:

* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2011-4315>
* <https://nvd.nist.gov/vuln/detail/CVE-2011-4315>

## CVE-2026-120993 (Low) {#cve-2026-120993}

**NULL pointer dereference when using PROXY protocol version 2**


When NGINX Plus or NGINX Open Source is configured to use the ngx_stream_ssl_module module with dynamic certificate loading and the ngx_stream_proxy_module module with the proxy_protocol v2 directive, an abbreviated SSL handshake can cause a worker process to terminate.


|                    |                                 |
|--------------------|---------------------------------|
| CVSS score:        | 6.9                             |
| Published:         | 2026-11-18                      |
| Affected versions: | 1.31.4 and later, before 1.31.9 |


References:

* <https://my.f5.com/manage/s/article/K000163932>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-120993>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-120993>

## CVE-2026-123640 (Low) {#cve-2026-123640}

**Insufficient validation in stream ssl_preread module**


Description When NGINX Plus or NGINX Open Source is configured with the ngx_stream_ssl_preread_module module, a specially crafted ClientHello message from an unauthenticated attacker causes forged values of the ngx_stream_ssl_preread_module variables, affecting virtual server selection. In addition, it may also cause a disagreement with a proxied server terminating the SSL/TLS connection without Transport Layer Security (TLS) 1.3 support.


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 6.9                                                             |
| Published:         | 2026-11-18                                                      |
| Affected versions: | 1.15.2 and later, before 1.30.7 1.31.0 and later, before 1.31.9 |


References:

* <https://my.f5.com/manage/s/article/K000163935>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-123640>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-123640>

## CVE-2026-125283 (Low) {#cve-2026-125283}

**Buffer overflow when using alias with try_files**


When NGINX Plus or NGINX Open Source is configured to use the try_files and alias directives with a map variable, certain combinations of regular expression captures in map and try_files can cause a segmentation fault in an NGINX worker process.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| CVSS score:        | 6.9                                                            |
| Published:         | 2026-11-18                                                     |
| Affected versions: | 0.9.6 and later, before 1.30.7 1.31.0 and later, before 1.31.9 |


References:

* <https://my.f5.com/manage/s/article/K000163933>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-125283>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-125283>

## CVE-2026-48142 (Low) {#cve-2026-48142}

**Buffer overread in the ngx_http_charset_module**


NGINX Plus and NGINX Open Source have a vulnerability in the ngx_http_charset_module module. When content is served or proxied through a location block with both source_charset utf-8; and a charset directive (for example, charset koi8-r;) configured, remote, unauthenticated attackers can send requests (in conjunction with conditions beyond their control) to cause a heap buffer over-read in the NGINX worker process, leading to limited disclosure of memory or a restart.


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 6.3                                                             |
| Published:         | 2026-06-17                                                      |
| Affected versions: | 0.3.50 and later, before 1.30.3 1.31.0 and later, before 1.31.2 |


References:

* <https://my.f5.com/manage/s/article/K000161585>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-48142>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-48142>

## CVE-2026-42934 (Low) {#cve-2026-42934}

**Buffer overread in the ngx_http_charset_module**


NGINX Plus and NGINX Open Source have a vulnerability in the ngx_http_charset_module module. When charset, source_charset, and charset_map and proxy_pass with disabled buffering ("off") directives are configured, unauthenticated attackers can send requests that with conditions beyond the attackers' control to cause a heap buffer over-read in the NGINX worker process, leading to limited disclosure of memory or a restart.


|                    |                                 |
|--------------------|---------------------------------|
| CVSS score:        | 6.3                             |
| Published:         | 2026-05-13                      |
| Affected versions: | 0.3.50 and later, before 1.30.1 |


References:

* <https://my.f5.com/manage/s/article/K000161028>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-42934>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-42934>

## CVE-2026-27651 (Low) {#cve-2026-27651}

**NULL pointer dereference while using CRAM-MD5 or APOP**


When the ngx_mail_auth_http_module module is enabled on NGINX Plus or NGINX Open Source, undisclosed requests can cause worker processes to terminate. This issue may occur when (1) CRAM-MD5 or APOP authentication is enabled, and (2) the authentication server permits retry by returning the Auth-Wait response header. Note: Software versions which have reached End of Technical Support (EoTS) are not evaluated.


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 8.7                                                             |
| Published:         | 2026-03-24                                                      |
| Affected versions: | 0.5.15 and later, before 1.28.3 1.29.0 and later, before 1.29.7 |


References:

* <https://my.f5.com/manage/s/article/K000160383>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2026-27651>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-27651>

## CVE-2025-53859 (Low) {#cve-2025-53859}

**Buffer overread in the ngx_mail_smtp_module**


NGINX Open Source and NGINX Plus have a vulnerability in the ngx_mail_smtp_module that might allow an unauthenticated attacker to over-read NGINX SMTP authentication process memory; as a result, the server side may leak arbitrary bytes sent in a request to the authentication server. This issue happens during the NGINX SMTP authentication process and requires the attacker to make preparations against the target system to extract the leaked data. The issue affects NGINX only if (1) it is built...


|                    |                                 |
|--------------------|---------------------------------|
| CVSS score:        | 6.3                             |
| Published:         | 2025-08-13                      |
| Affected versions: | 0.7.22 and later, before 1.29.1 |


References:

* <https://my.f5.com/manage/s/article/K000152786>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2025-53859>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-53859>

## CVE-2024-7347 (Low) {#cve-2024-7347}

**Buffer overread in the ngx_http_mp4_module**


NGINX Open Source and NGINX Plus have a vulnerability in the ngx_http_mp4_module, which might allow an attacker to over-read NGINX worker memory resulting in its termination, using a specially crafted mp4 file. The issue only affects NGINX if it is built with the ngx_http_mp4_module and the mp4 directive is used in the configuration file. Additionally, the attack is possible only if an attacker can trigger the processing of a specially crafted mp4 file with the ngx_http_mp4_module. Note:...


|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| CVSS score:        | 5.7                                                             |
| Published:         | 2024-08-14                                                      |
| Affected versions: | 1.5.13 and later, before 1.26.2 1.27.0 and later, before 1.27.1 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2024/UUOCLLONPR6244YQYU65PO5LB7JDYCWM.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2024-7347>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-7347>

## CVE-2019-9513 (Low) {#cve-2019-9513}

**Excessive CPU usage in HTTP/2 with priority changes**


Some HTTP/2 implementations are vulnerable to resource loops, potentially leading to a denial of service. The attacker creates multiple request streams and continually shuffles the priority of the streams in a way that causes substantial churn to the priority tree. This can consume excess CPU.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| CVSS score:        | 7.5                                                            |
| Published:         | 2019-08-13                                                     |
| Affected versions: | 1.9.5 and later, before 1.16.1 1.17.0 and later, before 1.17.3 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2019/000249.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2019-9513>
* <https://nvd.nist.gov/vuln/detail/CVE-2019-9513>

## CVE-2019-9516 (Low) {#cve-2019-9516}

**Excessive memory usage in HTTP/2 with zero length headers**


Some HTTP/2 implementations are vulnerable to a header leak, potentially leading to a denial of service. The attacker sends a stream of headers with a 0-length header name and 0-length header value, optionally Huffman encoded into 1-byte or greater headers. Some implementations allocate memory for these headers and keep the allocation alive until the session dies. This can consume excess memory.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| CVSS score:        | 7.5                                                            |
| Published:         | 2019-08-13                                                     |
| Affected versions: | 1.9.5 and later, before 1.16.1 1.17.0 and later, before 1.17.3 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2019/000249.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2019-9516>
* <https://nvd.nist.gov/vuln/detail/CVE-2019-9516>

## CVE-2018-16843 (Low) {#cve-2018-16843}

**Excessive memory usage in HTTP/2**


nginx before versions 1.15.6 and 1.14.1 has a vulnerability in the implementation of HTTP/2 that can allow for excessive memory consumption. This issue affects nginx compiled with the ngx_http_v2_module (not compiled by default) if the 'http2' option of the 'listen' directive is used in a configuration file.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| CVSS score:        | 5.3                                                            |
| Published:         | 2018-11-07                                                     |
| Affected versions: | 1.9.5 and later, before 1.14.1 1.15.0 and later, before 1.15.6 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2018/000220.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2018-16843>
* <https://nvd.nist.gov/vuln/detail/CVE-2018-16843>

## CVE-2018-16844 (Low) {#cve-2018-16844}

**Excessive CPU usage in HTTP/2**


nginx before versions 1.15.6 and 1.14.1 has a vulnerability in the implementation of HTTP/2 that can allow for excessive CPU usage. This issue affects nginx compiled with the ngx_http_v2_module (not compiled by default) if the 'http2' option of the 'listen' directive is used in a configuration file.


|                    |                                                                |
|--------------------|----------------------------------------------------------------|
| CVSS score:        | 5.3                                                            |
| Published:         | 2018-11-07                                                     |
| Affected versions: | 1.9.5 and later, before 1.14.1 1.15.0 and later, before 1.15.6 |


References:

* <https://mailman.nginx.org/pipermail/nginx-announce/2018/000220.html>
* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2018-16844>
* <https://nvd.nist.gov/vuln/detail/CVE-2018-16844>

## CVE-2009-3898 (Low) {#cve-2009-3898}

**Directory traversal vulnerability**


Directory traversal vulnerability in src/http/modules/ngx_http_dav_module.c in nginx (aka Engine X) before 0.7.63, and 0.8.x before 0.8.17, allows remote authenticated users to create or overwrite arbitrary files via a .. (dot dot) in the Destination HTTP header for the WebDAV (1) COPY or (2) MOVE method.


|                    |                                                               |
|--------------------|---------------------------------------------------------------|
| Published:         | 2009-11-24                                                    |
| Affected versions: | 0.1.0 and later, before 0.7.63 0.8.0 and later, before 0.8.17 |


References:

* <https://nginx.org/en/security_advisories.html>
* <https://www.cve.org/CVERecord?id=CVE-2009-3898>
* <https://nvd.nist.gov/vuln/detail/CVE-2009-3898>
