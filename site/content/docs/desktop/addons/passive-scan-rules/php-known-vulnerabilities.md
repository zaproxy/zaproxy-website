---
# This page was generated from the add-on.
title: PHP Known Vulnerabilities
type: userguide
weight: 1
---

# PHP Known Vulnerabilities

This page lists the known vulnerabilities (CVEs) in PHP itself which the "PHP Version with Known Vulnerabilities" alert of the [Server Side Technology Version with Known Vulnerabilities](/docs/desktop/addons/passive-scan-rules/#id-20020) passive scan rule checks disclosed PHP versions against.


The vulnerability details below are generated from the [php-src security
advisories](https://github.com/php/php-src/security/advisories) when the add-on is built, so they are not translated. Vulnerabilities are listed most severe first.


Last updated: 2026-10-22. Vulnerabilities listed: 63.

## CVE-2026-109618 (Critical) {#cve-2026-109618}

**RCE via OOM corruption**


PHP uses longjmp() for out-of-memory (OOM) errors to exit the current context and abort handling of the request. In some contexts, request memory is temporarily reachable before it is fully initialized. If any allocation fails at that point, PHP does not properly account for the early exit and leaves the request memory in an invalid state. The failed allocation does not need to be related to the invalid memory. The request shutdown procedure may then read or branch on it. Multiple OOM strategies...


|                    |                                                                                                                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 9.2                                                                                                                                                                              |
| Published:         | 2026-10-21                                                                                                                                                                       |
| GHSA:              | GHSA-w8hw-w9fx-j79w                                                                                                                                                              |
| Affected versions: | all versions before 8.2.35 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.36 8.4.0 and later, before 8.4.27 8.5.0 and later, before 8.5.12 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-109618>
* <https://www.php.net/ChangeLog-8.php#8.2.35>
* <https://www.php.net/ChangeLog-8.php#8.3.36>
* <https://www.php.net/ChangeLog-8.php#8.4.27>
* <https://www.php.net/ChangeLog-8.php#8.5.12>

## CVE-2026-109619 (Critical) {#cve-2026-109619}

**RCE via stale global state**


PHP contains various global state, such as error, session, object and extension state that is retained by a worker but points to memory owned by one request. That state must be reset before the request memory is released. Some input, configuration, session and error handling operations run before normal initialization of the next request. They inadvertently access stale state not reset by the previous request before initialization has a chance to replace it, causing a use after free. A...


|                    |                                                                                                                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 9.2                                                                                                                                                                              |
| Published:         | 2026-10-21                                                                                                                                                                       |
| GHSA:              | GHSA-6wmf-4rv5-p3rp                                                                                                                                                              |
| Affected versions: | all versions before 8.2.35 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.36 8.4.0 and later, before 8.4.27 8.5.0 and later, before 8.5.12 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-109619>
* <https://www.php.net/ChangeLog-8.php#8.2.35>
* <https://www.php.net/ChangeLog-8.php#8.3.36>
* <https://www.php.net/ChangeLog-8.php#8.4.27>
* <https://www.php.net/ChangeLog-8.php#8.5.12>

## CVE-2024-1874 (Critical) {#cve-2024-1874}

**Command injection via array-ish $command parameter of proc_open even if bypass_shell option enabled on Windows**


NOTE: There are undergoing reports regarding the command injection when executing the batch file, and several programming languages are coordinating the disclosure date. If you decide to not consider this as a vulnerability, please do not disclose this behavior until the end of February. If the coordinated disclosure is needed, please let me know.


|                    |                                                                                                                                                  |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 9.4                                                                                                                                              |
| Published:         | 2024-04-11                                                                                                                                       |
| GHSA:              | GHSA-pc52-254m-w9w7                                                                                                                              |
| Affected versions: | all versions before 8.1.28 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.18 8.3.0 and later, before 8.3.6 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-pc52-254m-w9w7>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-1874>
* <https://www.php.net/ChangeLog-8.php#8.1.28>
* <https://www.php.net/ChangeLog-8.php#8.2.18>
* <https://www.php.net/ChangeLog-8.php#8.3.6>

## CVE-2023-3824 (Critical) {#cve-2023-3824}

**Buffer overflow and overread in phar_dir_read()**


Buffer mismanagement in phar_dir_read() causes a buffer overflow and a buffer overread later.


|                    |                                                                                     |
|--------------------|-------------------------------------------------------------------------------------|
| CVSS score:        | 9.4                                                                                 |
| Published:         | 2023-08-05                                                                          |
| GHSA:              | GHSA-jqcx-ccgc-xwhv                                                                 |
| Affected versions: | all versions before 8.0.30 (assumed, older branches are not listed in the advisory) |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-jqcx-ccgc-xwhv>
* <https://nvd.nist.gov/vuln/detail/CVE-2023-3824>
* <https://www.php.net/ChangeLog-8.php#8.0.30>

## CVE-2019-11043 (Critical) {#cve-2019-11043}

**PHP-FPM remote code execution**


An underflow in the PHP-FPM env_path_info handling allows an attacker to write beyond a buffer when PHP-FPM is behind a misconfigured nginx (regexp with PATH_INFO), leading to remote code execution.


|                    |                                                                                              |
|--------------------|----------------------------------------------------------------------------------------------|
| CVSS score:        | 9.8                                                                                          |
| Affected versions: | 7.3.0 and later, before 7.3.11 7.2.0 and later, before 7.2.24 7.1.0 and later, before 7.1.33 |


References:

* <https://nvd.nist.gov/vuln/detail/CVE-2019-11043>
* <https://bugs.php.net/bug.php?id=78599>
* <https://github.com/neex/phuip-fpizdam>

## CVE-2026-91765 (High) {#cve-2026-91765}

**SOAP: Unbounded Recursion in Server-Side cleanup_xml_node**


cleanup_xml_node() in the SOAP XML parser recurses once per XML nesting level with no depth limit. An unauthenticated attacker can post a SOAP request containing tens of thousands of nested elements to any SoapServer endpoint, exhaust the stack and crash the process. The same unbounded recursion exists in the SOAP value decoder and in the WSDL node search helper.


|                    |                                                                                                                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 7.5                                                                                                                                                                              |
| Component:         | ext-soap                                                                                                                                                                         |
| Published:         | 2026-09-24                                                                                                                                                                       |
| GHSA:              | GHSA-rgrp-mwpx-f6rm                                                                                                                                                              |
| Affected versions: | all versions before 8.2.34 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.35 8.4.0 and later, before 8.4.26 8.5.0 and later, before 8.5.11 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-rgrp-mwpx-f6rm>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-91765>
* <https://www.php.net/ChangeLog-8.php#8.2.34>
* <https://www.php.net/ChangeLog-8.php#8.3.35>
* <https://www.php.net/ChangeLog-8.php#8.4.26>
* <https://www.php.net/ChangeLog-8.php#8.5.11>

## CVE-2026-17543 (High) {#cve-2026-17543}

**SQL injection in ext-pgsql via E'...' backslash breakout**


php_pgsql_convert() is used to convert and escape user-provided parameters in pg_insert(), pg_update(), pg_select(), and pg_delete(). It does so using PQescapeStringConn() and then wraps the result in an escape string constant, E'...' (via php_pgsql_add_quotes()).


|                    |                                                                                                                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Component:         | ext-pgsql                                                                                                                                                                       |
| Published:         | 2026-07-30                                                                                                                                                                      |
| GHSA:              | GHSA-7qpv-r5mr-78m4                                                                                                                                                             |
| Affected versions: | all versions before 8.2.33 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.33 8.4.0 and later, before 8.4.24 8.5.0 and later, before 8.5.9 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-7qpv-r5mr-78m4>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-17543>
* <https://www.php.net/ChangeLog-8.php#8.2.33>
* <https://www.php.net/ChangeLog-8.php#8.3.33>
* <https://www.php.net/ChangeLog-8.php#8.4.24>
* <https://www.php.net/ChangeLog-8.php#8.5.9>

## CVE-2026-17544 (High) {#cve-2026-17544}

**Out-of-bounds write in bccomp() via crafted operand and scale**


A call to bccomp() with attacker-supplied inputs can lead to an out-of-bounds write to either stack or heap memory. The bug occurs in bc_str2num() when the scale truncates a number whose trailing zeros are subsequently trimmed.


|                    |                                                                                                                   |
|--------------------|-------------------------------------------------------------------------------------------------------------------|
| Component:         | ext-bcmath                                                                                                        |
| Published:         | 2026-07-30                                                                                                        |
| GHSA:              | GHSA-x692-q9x7-8c3f                                                                                               |
| Affected versions: | all versions before 8.4.24 (assumed, older branches are not listed in the advisory) 8.5.0 and later, before 8.5.9 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-x692-q9x7-8c3f>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-17544>
* <https://www.php.net/ChangeLog-8.php#8.4.24>
* <https://www.php.net/ChangeLog-8.php#8.5.9>

## CVE-2026-12184 (High) {#cve-2026-12184}

**Failure to setup TLS with a remote server can result in a remote DoS**


In php_stream_url_wrap_http_ex, when TLS crypto setup fails (via php_stream_xport_crypto_setup or php_stream_xport_crypto_enable), the stream is closed and reset to NULL. However, the subsequent peer name cleanup block unconditionally tries to reset the peer name. This is triggerable via a failure to validate the peer name or an expired certificate.


|                    |                                                                                                                                                  |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 8.2                                                                                                                                              |
| Published:         | 2026-07-02                                                                                                                                       |
| GHSA:              | GHSA-mhmq-mmqj-2v39                                                                                                                              |
| Affected versions: | all versions before 8.3.32 (assumed, older branches are not listed in the advisory) 8.4.0 and later, before 8.4.21 8.5.0 and later, before 8.5.6 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-mhmq-mmqj-2v39>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-12184>
* <https://www.php.net/ChangeLog-8.php#8.3.32>
* <https://www.php.net/ChangeLog-8.php#8.4.21>
* <https://www.php.net/ChangeLog-8.php#8.5.6>

## CVE-2025-14179 (High) {#cve-2025-14179}

**SQL injection in pdo_firebird via NUL bytes in quoted strings**


Improper handling of NUL bytes during the preparation of Firebird SQL queries leads to sections of the of the query being dropped. NUL bytes can find their way into queries even under regular circumstances via PDO::quote().


|                    |                                                                                                                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 9.2                                                                                                                                                                             |
| Component:         | ext-pdo_firebird                                                                                                                                                                |
| Published:         | 2026-05-07                                                                                                                                                                      |
| GHSA:              | GHSA-w476-322c-wpvm                                                                                                                                                             |
| Affected versions: | all versions before 8.2.31 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.31 8.4.0 and later, before 8.4.21 8.5.0 and later, before 8.5.6 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-w476-322c-wpvm>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-14179>
* <https://www.php.net/ChangeLog-8.php#8.2.31>
* <https://www.php.net/ChangeLog-8.php#8.3.31>
* <https://www.php.net/ChangeLog-8.php#8.4.21>
* <https://www.php.net/ChangeLog-8.php#8.5.6>

## CVE-2026-6722 (High) {#cve-2026-6722}

**Use-After-Free in SOAP using Apache map with Remote Code Execution**


ext-soap supports deduplicating objects in the XML graph through id and href. When traversing the XML graph, ext-soap will remember all plain PHP objects using the hash map SOAP_GLOBAL(ref_map), where the pointer to the libxml2 node acts as a key, and the PHP object as a value. This happens in soap_add_xml_ref().


|                    |                                                                                                                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 9.4                                                                                                                                                                             |
| Component:         | ext-soap                                                                                                                                                                        |
| Published:         | 2026-05-07                                                                                                                                                                      |
| GHSA:              | GHSA-85c2-q967-79q5                                                                                                                                                             |
| Affected versions: | all versions before 8.2.31 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.31 8.4.0 and later, before 8.4.21 8.5.0 and later, before 8.5.6 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-85c2-q967-79q5>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-6722>
* <https://www.php.net/ChangeLog-8.php#8.2.31>
* <https://www.php.net/ChangeLog-8.php#8.3.31>
* <https://www.php.net/ChangeLog-8.php#8.4.21>
* <https://www.php.net/ChangeLog-8.php#8.5.6>

## CVE-2026-7263 (High) {#cve-2026-7263}

**DoS attack via DOMNode::C14N()**


Researcher: Nikita Sveshnikov (Positive Technologies)


|                    |                                                                                                                   |
|--------------------|-------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 8.2                                                                                                               |
| Component:         | ext-dom                                                                                                           |
| Published:         | 2026-05-07                                                                                                        |
| GHSA:              | GHSA-4jhr-8w89-j733                                                                                               |
| Affected versions: | all versions before 8.4.21 (assumed, older branches are not listed in the advisory) 8.5.0 and later, before 8.5.6 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-4jhr-8w89-j733>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-7263>
* <https://www.php.net/ChangeLog-8.php#8.4.21>
* <https://www.php.net/ChangeLog-8.php#8.5.6>

## CVE-2024-8929 (High) {#cve-2024-8929}

**\[Mysqlnd\] Leak partial content of the heap through heap buffer over-read**


By connecting to a fake MySQL server or tampering with network packets and initiating a SQL Query, it is possible to abuse the function static enum_func_status php_mysqlnd_rset_field_read when parsing MySQL fields packets in order to include the rest of the heap content starting from the address of the cursor of the currently read buffer. Using PHP-FPM which stays alive between request, and between two different SQL query requests, as the previous buffer used to store received data from MySQL is...


|                    |                                                                                                                                                   |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2024-11-21                                                                                                                                        |
| GHSA:              | GHSA-h35g-vwh6-m678                                                                                                                               |
| Affected versions: | all versions before 8.1.31 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.26 8.3.0 and later, before 8.3.14 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-h35g-vwh6-m678>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-8929>
* <https://www.php.net/ChangeLog-8.php#8.1.31>
* <https://www.php.net/ChangeLog-8.php#8.2.26>
* <https://www.php.net/ChangeLog-8.php#8.3.14>

## CVE-2024-4577 (High) {#cve-2024-4577}

**PHP RCE: A Bypass of CVE-2012-1823, Argument Injection in PHP-CGI**


An attacker can execute arbitrary PHP code on the remote server. This vulnerability affects the PHP built with Windows.


|                    |                                                                                                                                                  |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2024-09-28                                                                                                                                       |
| GHSA:              | GHSA-3qgc-jrrr-25jv                                                                                                                              |
| Affected versions: | all versions before 8.1.29 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.20 8.3.0 and later, before 8.3.8 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-3qgc-jrrr-25jv>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-4577>
* <https://www.php.net/ChangeLog-8.php#8.1.29>
* <https://www.php.net/ChangeLog-8.php#8.2.20>
* <https://www.php.net/ChangeLog-8.php#8.3.8>

## CVE-2024-5585 (High) {#cve-2024-5585}

**bypass CVE-2024-1874**


same as CVE-2024-1874 \> due to the improper handling of command line arguments on Windows, maliciously crafted arguments can inject arbitrary commands even if the bypass_shell option is enabled.


|                    |                               |
|--------------------|-------------------------------|
| CVSS score:        | 7.7                           |
| Published:         | 2024-06-09                    |
| GHSA:              | GHSA-9fcc-425m-g385           |
| Affected versions: | 8.3.6 and later, before 8.3.8 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-9fcc-425m-g385>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-5585>
* <https://www.php.net/ChangeLog-8.php#8.3.8>

## CVE-2024-2757 (High) {#cve-2024-2757}

**mb_encode_mimeheader runs endlessly for some inputs**


Certain inputs provided to mb_encode_mimeheader trigger an endless loop.


|                    |                                                                                    |
|--------------------|------------------------------------------------------------------------------------|
| CVSS score:        | 7.5                                                                                |
| Published:         | 2024-04-11                                                                         |
| GHSA:              | GHSA-fjp9-9hwx-59fq                                                                |
| Affected versions: | all versions before 8.3.6 (assumed, older branches are not listed in the advisory) |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-fjp9-9hwx-59fq>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-2757>
* <https://www.php.net/ChangeLog-8.php#8.3.6>

## CVE-2023-3823 (High) {#cve-2023-3823}

**Security issue with external entity loading in XML without enabling it**


After working on the issue some days, we more and more come to the assumption, that the actual issue is lower in the stack than the Nextcloud Server's PHP code. We were able to isolate it to a few lines of plain PHP code (but seemling only after performing a "Nextcloud login")


|                    |                                                                                     |
|--------------------|-------------------------------------------------------------------------------------|
| CVSS score:        | 8.6                                                                                 |
| Published:         | 2023-08-05                                                                          |
| GHSA:              | GHSA-3qrf-m4j2-pcrr                                                                 |
| Affected versions: | all versions before 8.0.30 (assumed, older branches are not listed in the advisory) |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-3qrf-m4j2-pcrr>
* <https://nvd.nist.gov/vuln/detail/CVE-2023-3823>
* <https://www.php.net/ChangeLog-8.php#8.0.30>

## CVE-2023-0662 (High) {#cve-2023-0662}

**DoS vulnerability when parsing multipart request body**


The request body parsing in PHP allows any unauthenticated attacker to consume a large amount of CPU time and trigger excessive logging.


|                    |                                                                                                                                                  |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 7.5                                                                                                                                              |
| Published:         | 2023-02-15                                                                                                                                       |
| GHSA:              | GHSA-54hq-v5wp-fqgv                                                                                                                              |
| Affected versions: | all versions before 8.0.28 (assumed, older branches are not listed in the advisory) 8.1.0 and later, before 8.1.16 8.2.0 and later, before 8.2.3 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-54hq-v5wp-fqgv>
* <https://nvd.nist.gov/vuln/detail/CVE-2023-0662>
* <https://www.php.net/ChangeLog-8.php#8.0.28>
* <https://www.php.net/ChangeLog-8.php#8.1.16>
* <https://www.php.net/ChangeLog-8.php#8.2.3>

## CVE-2025-14181 (Medium) {#cve-2025-14181}

**Integer overflow to buffer overflow in soap HTTP parsing**


The SOAP HTTP client guards its response buffer growth with a check that relies on signed integer overflow, which is undefined behaviour and is not guaranteed to trigger. When the check is optimised away, a malicious SOAP server can make the client allocate a buffer far smaller than the data it then writes into it, producing a heap buffer overflow.


|                    |                                                                                                                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 6.5                                                                                                                                                                              |
| Component:         | ext-soap                                                                                                                                                                         |
| Published:         | 2026-09-24                                                                                                                                                                       |
| GHSA:              | GHSA-cj93-vc83-wgqv                                                                                                                                                              |
| Affected versions: | all versions before 8.2.34 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.35 8.4.0 and later, before 8.4.26 8.5.0 and later, before 8.5.11 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-cj93-vc83-wgqv>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-14181>
* <https://www.php.net/ChangeLog-8.php#8.2.34>
* <https://www.php.net/ChangeLog-8.php#8.3.35>
* <https://www.php.net/ChangeLog-8.php#8.4.26>
* <https://www.php.net/ChangeLog-8.php#8.5.11>

## CVE-2026-17545 (Medium) {#cve-2026-17545}

**PHP on Windows: Reserved Device Names Are Not Rejected Before File/Stream I/O which can cause DoS**


On Windows, PHP's filesystem and stream APIs do not reject reserved device names such as CON, PRN, AUX, NUL, COM1 to COM9, LPT1 to LPT9, CONIN$ and CONOUT$ when they appear as a component of a path. An attacker-controlled filename therefore reaches CreateFileW() and opens a device instead of the regular file the application expected, which can block or hang the request and exhaust worker processes.


|                    |                                                                                                                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 6.9                                                                                                                                                                              |
| Published:         | 2026-09-24                                                                                                                                                                       |
| GHSA:              | GHSA-9f67-6fw4-hpfp                                                                                                                                                              |
| Affected versions: | all versions before 8.2.34 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.35 8.4.0 and later, before 8.4.26 8.5.0 and later, before 8.5.11 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-9f67-6fw4-hpfp>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-17545>
* <https://www.php.net/ChangeLog-8.php#8.2.34>
* <https://www.php.net/ChangeLog-8.php#8.3.35>
* <https://www.php.net/ChangeLog-8.php#8.4.26>
* <https://www.php.net/ChangeLog-8.php#8.5.11>

## CVE-2026-6103 (Medium) {#cve-2026-6103}

**Phar TAR phar_tar_number() Integer Overflow - Archive Entry Injection**


phar_tar_number() parses the octal size field of a TAR header into a uint32_t with no overflow check. The field is 11 octal digits wide and holds values up to 0x1FFFFFFFF, so a size above 0xFFFFFFFF silently wraps. The parser then skips the wrong number of data blocks and interprets attacker-controlled file content as the next TAR header, which lets a crafted archive inject entries that PharData reports and extracts as if they were genuine.


|                    |                                                                                                                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 4.0                                                                                                                                                                              |
| Component:         | ext-phar                                                                                                                                                                         |
| Published:         | 2026-09-24                                                                                                                                                                       |
| GHSA:              | GHSA-j3wh-g957-2m85                                                                                                                                                              |
| Affected versions: | all versions before 8.2.34 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.35 8.4.0 and later, before 8.4.26 8.5.0 and later, before 8.5.11 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-j3wh-g957-2m85>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-6103>
* <https://www.php.net/ChangeLog-8.php#8.2.34>
* <https://www.php.net/ChangeLog-8.php#8.3.35>
* <https://www.php.net/ChangeLog-8.php#8.4.26>
* <https://www.php.net/ChangeLog-8.php#8.5.11>

## CVE-2026-91766 (Medium) {#cve-2026-91766}

**Cross-origin credential leak in HTTP stream wrapper redirects**


When the http:// stream wrapper follows a redirect it forwards the user-supplied Authorization, Cookie and Proxy-Authorization headers unchanged, even when the redirect target is a different host, a different port, or a downgrade from HTTPS to HTTP. A server that can steer a redirect therefore receives credentials that were only meant for the original origin. This is the same class of issue that libcurl fixed in 7.58.0 (CVE-2018-1000007).


|                    |                                                                                                                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 5.9                                                                                                                                                                              |
| Component:         | ext-standard                                                                                                                                                                     |
| Published:         | 2026-09-24                                                                                                                                                                       |
| GHSA:              | GHSA-fpwc-w8rq-cr92                                                                                                                                                              |
| Affected versions: | all versions before 8.2.34 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.35 8.4.0 and later, before 8.4.26 8.5.0 and later, before 8.5.11 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-fpwc-w8rq-cr92>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-91766>
* <https://www.php.net/ChangeLog-8.php#8.2.34>
* <https://www.php.net/ChangeLog-8.php#8.3.35>
* <https://www.php.net/ChangeLog-8.php#8.4.26>
* <https://www.php.net/ChangeLog-8.php#8.5.11>

## CVE-2026-91767 (Medium) {#cve-2026-91767}

**Heap-buffer-overflow in php_openssl_matches_wildcard_name on crafted server cert wildcard CN**


php_openssl_matches_wildcard_name() in ext/openssl/xp_ssl.c underflows the length argument passed to memchr() when a TLS server certificate presents a wildcard name whose literal characters are together longer than the hostname being verified. A malicious server presenting such a certificate makes the PHP client read up to SIZE_MAX bytes past the end of a heap allocation. The path is reachable from any default client stream, because verify_peer_name is enabled by default.


|                    |                                                                                                                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 6.5                                                                                                                                                                              |
| Component:         | ext-openssl                                                                                                                                                                      |
| Published:         | 2026-09-24                                                                                                                                                                       |
| GHSA:              | GHSA-xr7j-rvgx-xq5p                                                                                                                                                              |
| Affected versions: | all versions before 8.2.34 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.35 8.4.0 and later, before 8.4.26 8.5.0 and later, before 8.5.11 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-xr7j-rvgx-xq5p>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-91767>
* <https://www.php.net/ChangeLog-8.php#8.2.34>
* <https://www.php.net/ChangeLog-8.php#8.3.35>
* <https://www.php.net/ChangeLog-8.php#8.4.26>
* <https://www.php.net/ChangeLog-8.php#8.5.11>

## CVE-2026-91768 (Medium) {#cve-2026-91768}

**IPv6 ACL bypass in FastCGI listen.allowed_clients due to partial address comparison (memcmp 12 bytes)**


The IPv6 branch of the FastCGI client access check compares only the first 12 bytes of a 16-byte IPv6 address, so listen.allowed_clients matches on a /96 prefix instead of the exact address. An attacker who can source an address sharing the first 96 bits with an allowed one passes the check and reaches the FastCGI endpoint.


|                    |                                                                                                                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 6.5                                                                                                                                                                              |
| Component:         | PHP-FPM                                                                                                                                                                          |
| Published:         | 2026-09-24                                                                                                                                                                       |
| GHSA:              | GHSA-62xp-839h-2637                                                                                                                                                              |
| Affected versions: | all versions before 8.2.34 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.35 8.4.0 and later, before 8.4.26 8.5.0 and later, before 8.5.11 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-62xp-839h-2637>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-91768>
* <https://www.php.net/ChangeLog-8.php#8.2.34>
* <https://www.php.net/ChangeLog-8.php#8.3.35>
* <https://www.php.net/ChangeLog-8.php#8.4.26>
* <https://www.php.net/ChangeLog-8.php#8.5.11>

## CVE-2026-91769 (Medium) {#cve-2026-91769}

**TLS Hostname Verification Falls Back to CN After SAN Mismatch**


PHP's OpenSSL stream peer verification checks the certificate's subjectAltName entries first and, whenever no entry matches, falls back to the Common Name. RFC 6125 requires the CN to be ignored once the certificate presents any service identity, so a certificate carrying a non-matching DNS SAN was still accepted when its CN matched the requested peer_name. A certificate trusted by the client for one name can therefore be used to impersonate another.


|                    |                                                                                                                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 4.3                                                                                                                                                                              |
| Component:         | ext-openssl                                                                                                                                                                      |
| Published:         | 2026-09-24                                                                                                                                                                       |
| GHSA:              | GHSA-vvx9-73fr-5jjx                                                                                                                                                              |
| Affected versions: | all versions before 8.2.34 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.35 8.4.0 and later, before 8.4.26 8.5.0 and later, before 8.5.11 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-vvx9-73fr-5jjx>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-91769>
* <https://www.php.net/ChangeLog-8.php#8.2.34>
* <https://www.php.net/ChangeLog-8.php#8.3.35>
* <https://www.php.net/ChangeLog-8.php#8.4.26>
* <https://www.php.net/ChangeLog-8.php#8.5.11>

## CVE-2026-92842 (Medium) {#cve-2026-92842}

**OOB read / info leak in convert.\* stream filters when line-break-chars contains NUL**


The convert.base64-encode, convert.quoted-printable-encode and convert.quoted-printable-decode stream filters accept a line-break-chars option whose length is tracked separately from the string itself. The filter constructors duplicate the value with pestrdup(), which stops at the first NUL byte, while keeping the original length. When the filter later emits a line break it copies the recorded length out of the truncated allocation, reading past its end and placing adjacent heap bytes into the...


|                    |                                                                                                                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 5.9                                                                                                                                                                              |
| Component:         | ext-standard                                                                                                                                                                     |
| Published:         | 2026-09-24                                                                                                                                                                       |
| GHSA:              | GHSA-88hq-2827-7pg6                                                                                                                                                              |
| Affected versions: | all versions before 8.2.34 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.35 8.4.0 and later, before 8.4.26 8.5.0 and later, before 8.5.11 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-88hq-2827-7pg6>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-92842>
* <https://www.php.net/ChangeLog-8.php#8.2.34>
* <https://www.php.net/ChangeLog-8.php#8.3.35>
* <https://www.php.net/ChangeLog-8.php#8.4.26>
* <https://www.php.net/ChangeLog-8.php#8.5.11>

## CVE-2026-93682 (Medium) {#cve-2026-93682}

**Out-of-bounds read in the HTTP stream wrapper when following a redirect with an empty Location header**


When the HTTP stream wrapper follows a redirect and the response carries a Location header with an empty value, the redirect code reads one byte past the end of the heap buffer holding the location. The value of that out-of-bounds byte decides which redirect target is built, so a malicious server controls whether the client is sent to the host root or to the current directory.


|                    |                                                                                                                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 5.3                                                                                                                                                                              |
| Component:         | ext-standard                                                                                                                                                                     |
| Published:         | 2026-09-24                                                                                                                                                                       |
| GHSA:              | GHSA-7875-c8px-7q5f                                                                                                                                                              |
| Affected versions: | all versions before 8.2.34 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.35 8.4.0 and later, before 8.4.26 8.5.0 and later, before 8.5.11 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-7875-c8px-7q5f>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-93682>
* <https://www.php.net/ChangeLog-8.php#8.2.34>
* <https://www.php.net/ChangeLog-8.php#8.3.35>
* <https://www.php.net/ChangeLog-8.php#8.4.26>
* <https://www.php.net/ChangeLog-8.php#8.5.11>

## CVE-2026-7260 (Medium) {#cve-2026-7260}

**Stack overflow in phar with circular symlinks**


phar_get_link_source() in ext/phar/util.c recursively follows symbolic links in phar archives without any depth limit or cycle detection. A crafted tar-based phar archive containing circular symlinks causes unbounded recursion, exhausting the C stack and crashing the PHP process.


|                    |                                                                                                                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 5.5                                                                                                                                                                             |
| Component:         | ext-phar                                                                                                                                                                        |
| Published:         | 2026-07-30                                                                                                                                                                      |
| GHSA:              | GHSA-vc5h-9ppw-p5f3                                                                                                                                                             |
| Affected versions: | all versions before 8.2.33 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.33 8.4.0 and later, before 8.4.24 8.5.0 and later, before 8.5.9 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-vc5h-9ppw-p5f3>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-7260>
* <https://www.php.net/ChangeLog-8.php#8.2.33>
* <https://www.php.net/ChangeLog-8.php#8.3.33>
* <https://www.php.net/ChangeLog-8.php#8.4.24>
* <https://www.php.net/ChangeLog-8.php#8.5.9>

## CVE-2026-14355 (Medium) {#cve-2026-14355}

**ext/openssl: Memory corruption (zend_mm_heap corrupted) in openssl_encrypt with AES-WRAP-PAD**


Usate of AES-WRAP-PAD can result in memory corruption and abort of application.


|                    |                                                                                                                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 4.8                                                                                                                                                                             |
| Published:         | 2026-07-02                                                                                                                                                                      |
| GHSA:              | GHSA-7jrw-539f-x6vr                                                                                                                                                             |
| Affected versions: | all versions before 8.2.32 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.32 8.4.0 and later, before 8.4.23 8.5.0 and later, before 8.5.8 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-7jrw-539f-x6vr>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-14355>
* <https://www.php.net/ChangeLog-8.php#8.2.32>
* <https://www.php.net/ChangeLog-8.php#8.3.32>
* <https://www.php.net/ChangeLog-8.php#8.4.23>
* <https://www.php.net/ChangeLog-8.php#8.5.8>

## CVE-2026-6104 (Medium) {#cve-2026-6104}

**Global buffer over-read in mb_convert_encoding() with attacker-supplied encoding**


A global buffer over-read exists in mbfl_name2encoding_ex() (ext/mbstring/libmbfl/mbfl/mbfl_encoding.c, line 352), called from mb_convert_encoding(...) and other mbstring functions, when parsing encoding names with embedded NUL bytes.


|                    |                                                                                                                   |
|--------------------|-------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 6.3                                                                                                               |
| Component:         | ext-mbstring                                                                                                      |
| Published:         | 2026-05-07                                                                                                        |
| GHSA:              | GHSA-74r9-qxhc-fx53                                                                                               |
| Affected versions: | all versions before 8.4.21 (assumed, older branches are not listed in the advisory) 8.5.0 and later, before 8.5.6 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-74r9-qxhc-fx53>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-6104>
* <https://www.php.net/ChangeLog-8.php#8.4.21>
* <https://www.php.net/ChangeLog-8.php#8.5.6>

## CVE-2026-6735 (Medium) {#cve-2026-6735}

**XSS within PHP-FPM status endpoint**


Improper sanitization of the request URI within the PHP-FPM status page allows an attacker to execute arbitrary JavaScript code (XSS) on the victims machine, possibly stealing cookies on insufficiently hardened systems, or stealing other sensitive data such as the information from the status page itself. An attacker does not require authentication or access to the /status endpoint in order to trigger XSS, but may simply visit a URI embedding the malicious code.


|                    |                                                                                                                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 7.6                                                                                                                                                                             |
| Component:         | PHP-FPM                                                                                                                                                                         |
| Published:         | 2026-05-07                                                                                                                                                                      |
| GHSA:              | GHSA-7qg2-v9fj-4mwv                                                                                                                                                             |
| Affected versions: | all versions before 8.2.31 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.31 8.4.0 and later, before 8.4.21 8.5.0 and later, before 8.5.6 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-7qg2-v9fj-4mwv>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-6735>
* <https://www.php.net/ChangeLog-8.php#8.2.31>
* <https://www.php.net/ChangeLog-8.php#8.3.31>
* <https://www.php.net/ChangeLog-8.php#8.4.21>
* <https://www.php.net/ChangeLog-8.php#8.5.6>

## CVE-2026-7258 (Medium) {#cve-2026-7258}

**Out-of-bounds read in urldecode()**


Consider the following snippet within php_url_decode_ex() at ext/standard/url.c, called from PHPs urldecode() function:


|                    |                                                                                                                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 6.3                                                                                                                                                                             |
| Published:         | 2026-05-07                                                                                                                                                                      |
| GHSA:              | GHSA-m8rr-4c36-8gq4                                                                                                                                                             |
| Affected versions: | all versions before 8.2.31 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.31 8.4.0 and later, before 8.4.21 8.5.0 and later, before 8.5.6 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-m8rr-4c36-8gq4>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-7258>
* <https://www.php.net/ChangeLog-8.php#8.2.31>
* <https://www.php.net/ChangeLog-8.php#8.3.31>
* <https://www.php.net/ChangeLog-8.php#8.4.21>
* <https://www.php.net/ChangeLog-8.php#8.5.6>

## CVE-2026-7261 (Medium) {#cve-2026-7261}

**SoapServer session-persisted object use-after-free via SOAP header fault**


SOAP_PERSISTENCE_SESSION allows to persist the SOAP handler object between requests using the session storage. Normally the object is immediately released after SoapServer::handle(), unless this setting is specified. This differentiation happens with the service-\>soap_class.persistence != SOAP_PERSISTENCE_SESSION check. soap.c fails to account for this flag in two places:


|                    |                                                                                                                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 6.3                                                                                                                                                                             |
| Component:         | ext-soap                                                                                                                                                                        |
| Published:         | 2026-05-07                                                                                                                                                                      |
| GHSA:              | GHSA-m33r-qmcv-p97q                                                                                                                                                             |
| Affected versions: | all versions before 8.2.31 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.31 8.4.0 and later, before 8.4.21 8.5.0 and later, before 8.5.6 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-m33r-qmcv-p97q>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-7261>
* <https://www.php.net/ChangeLog-8.php#8.2.31>
* <https://www.php.net/ChangeLog-8.php#8.3.31>
* <https://www.php.net/ChangeLog-8.php#8.4.21>
* <https://www.php.net/ChangeLog-8.php#8.5.6>

## CVE-2026-7262 (Medium) {#cve-2026-7262}

**NULL pointer dereference in SOAP apache:Map decoder with missing \<value\>**


to_zval_map() in ext/soap/php_encoding.c decodes apache:Map nodes. The \<key\> branch correctly guards against missing keys, but the \<value\> branch rechecks xmlKey instead of xmlValue:


|                    |                                                                                                                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 6.3                                                                                                                                                                             |
| Component:         | ext-soap                                                                                                                                                                        |
| Published:         | 2026-05-07                                                                                                                                                                      |
| GHSA:              | GHSA-hmxp-6pc4-f3vv                                                                                                                                                             |
| Affected versions: | all versions before 8.2.31 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.31 8.4.0 and later, before 8.4.21 8.5.0 and later, before 8.5.6 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-hmxp-6pc4-f3vv>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-7262>
* <https://www.php.net/ChangeLog-8.php#8.2.31>
* <https://www.php.net/ChangeLog-8.php#8.3.31>
* <https://www.php.net/ChangeLog-8.php#8.4.21>
* <https://www.php.net/ChangeLog-8.php#8.5.6>

## CVE-2025-14177 (Medium) {#cve-2025-14177}

**Information Leak of Memory in getimagesize**


Product: PHP EXT/STANDARD Version: 8.6.0 CWE-ID: • CWE-524: Use of Cache Containing Sensitive Information • CAPEC-204: Lifting Sensitive Data Embedded in Cache CVSS vector v.4.0: 6.3 (AV:N/AC:L/AT:P/PR:N/UI:N/VC:L/VI:N/VA:N/SC:N/SI:N/SA:N) Description: The application insufficiently controls access to information processed by the application data caching tool. As a result, an attacker can gain access to cached data. Mitigation: Restrict access to information processed by the application data...


|                    |                                                                                                                                                                                                                |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 6.3                                                                                                                                                                                                            |
| Published:         | 2025-12-18                                                                                                                                                                                                     |
| GHSA:              | GHSA-3237-qqm7-mfv7                                                                                                                                                                                            |
| Affected versions: | all versions before 8.1.34 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.30 8.3.0 and later, before 8.3.29 8.4.0 and later, before 8.4.16 8.5.0 and later, before 8.5.1 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-3237-qqm7-mfv7>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-14177>
* <https://www.php.net/ChangeLog-8.php#8.1.34>
* <https://www.php.net/ChangeLog-8.php#8.2.30>
* <https://www.php.net/ChangeLog-8.php#8.3.29>
* <https://www.php.net/ChangeLog-8.php#8.4.16>
* <https://www.php.net/ChangeLog-8.php#8.5.1>

## CVE-2025-14178 (Medium) {#cve-2025-14178}

**Heap buffer overflow in array_merge()**


If we were using a memory safe language we would "just" be limited to the DoS, but now we have heap corruption and all the joys of it. This bug has been in PHP since PHP 7.1.


|                    |                                                                                                                                                                                                                |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 6.5                                                                                                                                                                                                            |
| Published:         | 2025-12-18                                                                                                                                                                                                     |
| GHSA:              | GHSA-h96m-rvf9-jgm2                                                                                                                                                                                            |
| Affected versions: | all versions before 8.1.34 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.30 8.3.0 and later, before 8.3.29 8.4.0 and later, before 8.4.16 8.5.0 and later, before 8.5.1 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-h96m-rvf9-jgm2>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-14178>
* <https://www.php.net/ChangeLog-8.php#8.1.34>
* <https://www.php.net/ChangeLog-8.php#8.2.30>
* <https://www.php.net/ChangeLog-8.php#8.3.29>
* <https://www.php.net/ChangeLog-8.php#8.4.16>
* <https://www.php.net/ChangeLog-8.php#8.5.1>

## CVE-2025-14180 (Medium) {#cve-2025-14180}

**NULL Pointer Dereference in PDO quoting**


Product: PHP Version: 8.5.0-DEV (CLI) CWE-ID: CWE-476: NULL Pointer Dereference CVSS vector v.4.0: 8.2 (AV:N/AC:H/AT:P/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N) Description: A NULL pointer dereference occurs when the application dereferences a pointer that it expects to be valid, but is NULL, typically causing a crash or exit. Exploitation conditions: An unauthorized user Mitigation: Explicitly check whether a NULL pointer exists before dereferencing it. Researcher: Aleksey Solovev (Positive...


|                    |                                                                                                                                                                                                                |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 6.3                                                                                                                                                                                                            |
| Published:         | 2025-12-18                                                                                                                                                                                                     |
| GHSA:              | GHSA-8xr5-qppj-gvwj                                                                                                                                                                                            |
| Affected versions: | all versions before 8.1.34 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.30 8.3.0 and later, before 8.3.29 8.4.0 and later, before 8.4.16 8.5.0 and later, before 8.5.1 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-8xr5-qppj-gvwj>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-14180>
* <https://www.php.net/ChangeLog-8.php#8.1.34>
* <https://www.php.net/ChangeLog-8.php#8.2.30>
* <https://www.php.net/ChangeLog-8.php#8.3.29>
* <https://www.php.net/ChangeLog-8.php#8.4.16>
* <https://www.php.net/ChangeLog-8.php#8.5.1>

## CVE-2025-1735 (Medium) {#cve-2025-1735}

**pgsql extension does not check for errors during escaping**


Missing error checking could result in SQL injection and missing error handling could lead to crashes due to null pointer dereferences.


|                    |                                                                                                                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2025-07-03                                                                                                                                                                       |
| GHSA:              | GHSA-hrwm-9436-5mv3                                                                                                                                                              |
| Affected versions: | all versions before 8.1.33 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.29 8.3.0 and later, before 8.3.23 8.4.0 and later, before 8.4.10 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-hrwm-9436-5mv3>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-1735>
* <https://www.php.net/ChangeLog-8.php#8.1.33>
* <https://www.php.net/ChangeLog-8.php#8.2.29>
* <https://www.php.net/ChangeLog-8.php#8.3.23>
* <https://www.php.net/ChangeLog-8.php#8.4.10>

## CVE-2025-6491 (Medium) {#cve-2025-6491}

**NULL Pointer Dereference in PHP SOAP Extension via Large XML Namespace Prefix**


If a SoapVar instance is created with a fully qualified name larger than 2G, this will cause a NULL pointer dereference resulting in a segmentation fault, leading to a denial of service.


|                    |                                                                                                                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 5.9                                                                                                                                                                              |
| Published:         | 2025-07-03                                                                                                                                                                       |
| GHSA:              | GHSA-453j-q27h-5p8x                                                                                                                                                              |
| Affected versions: | all versions before 8.1.33 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.29 8.3.0 and later, before 8.3.23 8.4.0 and later, before 8.4.10 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-453j-q27h-5p8x>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-6491>
* <https://www.php.net/ChangeLog-8.php#8.1.33>
* <https://www.php.net/ChangeLog-8.php#8.2.29>
* <https://www.php.net/ChangeLog-8.php#8.3.23>
* <https://www.php.net/ChangeLog-8.php#8.4.10>

## CVE-2024-11235 (Medium) {#cve-2024-11235}

**Reference counting in php_request_shutdown causes Use-After-Free**


Exception handler frees variables via cleanup_live_vars for termination. However, the subsequent php_request_shutdown performs reference counting on these variables using zend_gc_refcount(read) and zend_gc_delref(write), resulting in use-after-free. Since zend_mm_free_small stores metadata in freed memory chunks, this use-after-free vulnerability may allows manipulation of the Zend allocator through reference count behaviors.


|                    |                                                                                                                   |
|--------------------|-------------------------------------------------------------------------------------------------------------------|
| Published:         | 2025-03-13                                                                                                        |
| GHSA:              | GHSA-rwp7-7vc6-8477                                                                                               |
| Affected versions: | all versions before 8.3.19 (assumed, older branches are not listed in the advisory) 8.4.0 and later, before 8.4.5 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-rwp7-7vc6-8477>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-11235>
* <https://www.php.net/ChangeLog-8.php#8.3.19>
* <https://www.php.net/ChangeLog-8.php#8.4.5>

## CVE-2025-1217 (Medium) {#cve-2025-1217}

**Header parser of \`http\` stream wrapper does not handle folded headers**


The header parser of the http stream wrapper does not handle folded headers and passes incorrect MIME types to an attached stream notifier.


|                    |                                                                                                                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2025-03-13                                                                                                                                                                      |
| GHSA:              | GHSA-v8xr-gpvj-cx9g                                                                                                                                                             |
| Affected versions: | all versions before 8.1.32 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.28 8.3.0 and later, before 8.3.19 8.4.0 and later, before 8.4.5 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-v8xr-gpvj-cx9g>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-1217>
* <https://www.php.net/ChangeLog-8.php#8.1.32>
* <https://www.php.net/ChangeLog-8.php#8.2.28>
* <https://www.php.net/ChangeLog-8.php#8.3.19>
* <https://www.php.net/ChangeLog-8.php#8.4.5>

## CVE-2025-1219 (Medium) {#cve-2025-1219}

**libxml streams use wrong \`content-type\` header when requesting a redirected resource**


When requesting a HTTP resource using the DOM or SimpleXML extensions, the wrong content-type header is used to determine the charset when the requested resource performs a redirect.


|                    |                                                                                                                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2025-03-13                                                                                                                                                                      |
| GHSA:              | GHSA-p3x9-6h7p-cgfc                                                                                                                                                             |
| Affected versions: | all versions before 8.1.32 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.28 8.3.0 and later, before 8.3.19 8.4.0 and later, before 8.4.5 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-p3x9-6h7p-cgfc>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-1219>
* <https://www.php.net/ChangeLog-8.php#8.1.32>
* <https://www.php.net/ChangeLog-8.php#8.2.28>
* <https://www.php.net/ChangeLog-8.php#8.3.19>
* <https://www.php.net/ChangeLog-8.php#8.4.5>

## CVE-2025-1734 (Medium) {#cve-2025-1734}

**Streams HTTP wrapper does not fail for headers with invalid name and no colon**


This can allow issues in the application when parsing the array - e.g. application could consider it as a valid header or as a continuation of the previous one (currently folding header are misbehaving so there could be some logic for that in the application that could result in a security issue). So some sort of request smuggling could be possible in this case


|                    |                                                                                                                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2025-03-13                                                                                                                                                                      |
| GHSA:              | GHSA-pcmh-g36c-qc44                                                                                                                                                             |
| Affected versions: | all versions before 8.1.32 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.28 8.3.0 and later, before 8.3.19 8.4.0 and later, before 8.4.5 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-pcmh-g36c-qc44>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-1734>
* <https://www.php.net/ChangeLog-8.php#8.1.32>
* <https://www.php.net/ChangeLog-8.php#8.2.28>
* <https://www.php.net/ChangeLog-8.php#8.3.19>
* <https://www.php.net/ChangeLog-8.php#8.4.5>

## CVE-2025-1736 (Medium) {#cve-2025-1736}

**Stream HTTP wrapper header check might omit basic auth header**


Preventing authorization header to be sent.


|                    |                                                                                                                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2025-03-13                                                                                                                                                                      |
| GHSA:              | GHSA-hgf5-96fm-v528                                                                                                                                                             |
| Affected versions: | all versions before 8.1.32 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.28 8.3.0 and later, before 8.3.19 8.4.0 and later, before 8.4.5 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-hgf5-96fm-v528>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-1736>
* <https://www.php.net/ChangeLog-8.php#8.1.32>
* <https://www.php.net/ChangeLog-8.php#8.2.28>
* <https://www.php.net/ChangeLog-8.php#8.3.19>
* <https://www.php.net/ChangeLog-8.php#8.4.5>

## CVE-2025-1861 (Medium) {#cve-2025-1861}

**Stream HTTP wrapper truncate redirect location to 1024 bytes**


The URI truncation might result in omitting some critical information (e.g. from the query) or even redirection to other resources. It could even result in DOS of the remote site if the trucated URL results in error.


|                    |                                                                                                                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2025-03-13                                                                                                                                                                      |
| GHSA:              | GHSA-52jp-hrpf-2jff                                                                                                                                                             |
| Affected versions: | all versions before 8.1.32 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.28 8.3.0 and later, before 8.3.19 8.4.0 and later, before 8.4.5 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-52jp-hrpf-2jff>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-1861>
* <https://www.php.net/ChangeLog-8.php#8.1.32>
* <https://www.php.net/ChangeLog-8.php#8.2.28>
* <https://www.php.net/ChangeLog-8.php#8.3.19>
* <https://www.php.net/ChangeLog-8.php#8.4.5>

## CVE-2024-11233 (Medium) {#cve-2024-11233}

**Single byte overread with convert.quoted-printable-decode filter**


A memory-related vulnerability in PHP’s filter handling system, particularly when processing input with convert.quoted-printable-decode filters, leads to a segmentation fault. This vulnerability is triggered through specific sequences of input data, causing PHP to crash. When exploited, it allows an attacker to extract a single byte of data from the heap or cause a DoS.


|                    |                                                                                                                                                   |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 4.8                                                                                                                                               |
| Published:         | 2024-11-21                                                                                                                                        |
| GHSA:              | GHSA-r977-prxv-hc43                                                                                                                               |
| Affected versions: | all versions before 8.1.31 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.26 8.3.0 and later, before 8.3.14 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-r977-prxv-hc43>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-11233>
* <https://www.php.net/ChangeLog-8.php#8.1.31>
* <https://www.php.net/ChangeLog-8.php#8.2.26>
* <https://www.php.net/ChangeLog-8.php#8.3.14>

## CVE-2024-11234 (Medium) {#cve-2024-11234}

**Configuring a proxy in a stream context might allow for CRLF injection in URIs**


Configuring a proxy in a stream context might allow for CRLF injection in URIs, resulting in HTTP request smuggling attacks.


|                    |                                                                                                                                                   |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2024-11-21                                                                                                                                        |
| GHSA:              | GHSA-c5f2-jwm7-mmq2                                                                                                                               |
| Affected versions: | all versions before 8.1.31 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.26 8.3.0 and later, before 8.3.14 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-c5f2-jwm7-mmq2>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-11234>
* <https://www.php.net/ChangeLog-8.php#8.1.31>
* <https://www.php.net/ChangeLog-8.php#8.2.26>
* <https://www.php.net/ChangeLog-8.php#8.3.14>

## CVE-2024-11236 (Medium) {#cve-2024-11236}

**Integer overflow in the firebird and dblib quoters causing OOB writes**


The following code: https://github.com/php/php-src/blob/5070fbf1613015e351bc4629ac7997b26359320b/ext/pdo_firebird/firebird_driver.c#L805-L808


|                    |                                                                                                                                                   |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2024-11-21                                                                                                                                        |
| GHSA:              | GHSA-5hqh-c84r-qjcv                                                                                                                               |
| Affected versions: | all versions before 8.1.31 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.26 8.3.0 and later, before 8.3.14 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-5hqh-c84r-qjcv>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-11236>
* <https://www.php.net/ChangeLog-8.php#8.1.31>
* <https://www.php.net/ChangeLog-8.php#8.2.26>
* <https://www.php.net/ChangeLog-8.php#8.3.14>

## CVE-2024-8932 (Medium) {#cve-2024-8932}

**OOB access in ldap_escape**


Uncontrolled long string inputs to ldap_escape on 32-bit systems can cause an integer overflow, resulting in an out-of-bounds write.


|                    |                                                                                                                                                   |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2024-11-21                                                                                                                                        |
| GHSA:              | GHSA-g665-fm4p-vhff                                                                                                                               |
| Affected versions: | all versions before 8.1.31 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.26 8.3.0 and later, before 8.3.14 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-g665-fm4p-vhff>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-8932>
* <https://www.php.net/ChangeLog-8.php#8.1.31>
* <https://www.php.net/ChangeLog-8.php#8.2.26>
* <https://www.php.net/ChangeLog-8.php#8.3.14>

## CVE-2024-8926 (Medium) {#cve-2024-8926}

**PHP CGI Parameter Injection Vulnerability (CVE-2024-4577 bypass)**


This vulnerability is a bypass of CVE-2024-4577 when using a non-standard configuration of Windows codepages, only obtainable through the registry by pointing the ACP codepage to an OEM codepage. The required configuration is unlikely to occur in a real environment.


|                    |                                                                                                                                                   |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2024-09-27                                                                                                                                        |
| GHSA:              | GHSA-p99j-rfp4-xqvq                                                                                                                               |
| Affected versions: | all versions before 8.1.30 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.24 8.3.0 and later, before 8.3.12 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-p99j-rfp4-xqvq>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-8926>
* <https://www.php.net/ChangeLog-8.php#8.1.30>
* <https://www.php.net/ChangeLog-8.php#8.2.24>
* <https://www.php.net/ChangeLog-8.php#8.3.12>

## CVE-2024-8927 (Medium) {#cve-2024-8927}

**cgi.force_redirect configuration is bypassable due to the environment variable collision**


According to \<https://www.php.net/manual/en/security.cgi-bin.force-redirect.php\>, the configuration directive cgi.force_redirect prevents anyone from calling PHP directly with a URL like http://host.example/cgi-bin/php/secretdir/script.php. The default value of cgi.force_redirect is 1.


|                    |                                                                                                                                                   |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 5.3                                                                                                                                               |
| Published:         | 2024-09-27                                                                                                                                        |
| GHSA:              | GHSA-94p6-54jq-9mwp                                                                                                                               |
| Affected versions: | all versions before 8.1.30 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.24 8.3.0 and later, before 8.3.12 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-94p6-54jq-9mwp>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-8927>
* <https://www.php.net/ChangeLog-8.php#8.1.30>
* <https://www.php.net/ChangeLog-8.php#8.2.24>
* <https://www.php.net/ChangeLog-8.php#8.3.12>

## CVE-2024-5458 (Medium) {#cve-2024-5458}

**Filter bypass in filter_var (FILTER_VALIDATE_URL)**


An early-return in filter_var (FILTER_VALIDATE_URL) will result in invalid user information (username + password part of URLs) being treated as valid user information.


|                    |                                                                                                                                                                                            |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 5.3                                                                                                                                                                                        |
| Published:         | 2024-06-09                                                                                                                                                                                 |
| GHSA:              | GHSA-w8qr-v226-r27w                                                                                                                                                                        |
| Affected versions: | 7.3.27 and later, before 7.3.34 7.4.15 and later, before 7.4.34 8.0.2 and later, before 8.0.31 8.1.0 and later, before 8.1.29 8.2.0 and later, before 8.2.20 8.3.0 and later, before 8.3.8 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-w8qr-v226-r27w>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-5458>
* <https://www.php.net/ChangeLog-8.php#8.1.29>
* <https://www.php.net/ChangeLog-8.php#8.2.20>
* <https://www.php.net/ChangeLog-8.php#8.3.8>

## CVE-2024-2408 (Medium) {#cve-2024-2408}

**PHP is vulnerable to the Marvin Attack**


The implementation of RSA decryption with PKCS#1 v1.5 padding is vulnerable to a timing variant of the Bleichenabcher attack called the Marvin Attack.


|                    |                                 |
|--------------------|---------------------------------|
| CVSS score:        | 5.9                             |
| Published:         | 2024-06-06                      |
| GHSA:              | GHSA-hh26-4ppw-5864             |
| Affected versions: | 8.2.12 and later, before 8.2.13 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-hh26-4ppw-5864>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-2408>

## CVE-2024-2756 (Medium) {#cve-2024-2756}

**__Host-/__Secure- cookie bypass due to partial CVE-2022-31629 fix**


Due to an incomplete fix to CVE-2022-31629, network and same-site attackers can set a standard insecure cookie in the victim's browser which is treated as a __Host- or __Secure- cookie by PHP applications.


|                    |                                                                                              |
|--------------------|----------------------------------------------------------------------------------------------|
| Published:         | 2024-04-11                                                                                   |
| GHSA:              | GHSA-wpj3-hf5j-x4v4                                                                          |
| Affected versions: | 8.1.12 and later, before 8.1.28 8.2.0 and later, before 8.2.18 8.3.0 and later, before 8.3.6 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-wpj3-hf5j-x4v4>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-2756>
* <https://www.php.net/ChangeLog-8.php#8.1.28>
* <https://www.php.net/ChangeLog-8.php#8.2.18>
* <https://www.php.net/ChangeLog-8.php#8.3.6>

## CVE-2025-1218 (Low) {#cve-2025-1218}

**Various packet overreads in mysqlnd_writeprotocol.c**


The mysqlnd wire protocol parser reads fields out of server packets before checking that the packet still holds enough bytes for them. A malicious or compromised MySQL server can send a truncated packet and make the client read past the end of the packet buffer, which is undefined behaviour and can crash the process.


|                    |                                                                                                                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 3.1                                                                                                                                                                              |
| Component:         | ext-mysqlnd                                                                                                                                                                      |
| Published:         | 2026-09-24                                                                                                                                                                       |
| GHSA:              | GHSA-r6x9-5r99-36j7                                                                                                                                                              |
| Affected versions: | all versions before 8.2.34 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.35 8.4.0 and later, before 8.4.26 8.5.0 and later, before 8.5.11 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-r6x9-5r99-36j7>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-1218>
* <https://www.php.net/ChangeLog-8.php#8.2.34>
* <https://www.php.net/ChangeLog-8.php#8.3.35>
* <https://www.php.net/ChangeLog-8.php#8.4.26>
* <https://www.php.net/ChangeLog-8.php#8.5.11>

## CVE-2026-7259 (Low) {#cve-2026-7259}

**Null pointer dereference in php_mb_check_encoding() via mb_ereg_search_init()**


The following PHP code triggers a segmentation fault due to a NULL pointer dereference:


|                    |                                                                                                                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Component:         | ext-mbstring                                                                                                                                                                    |
| Published:         | 2026-05-07                                                                                                                                                                      |
| GHSA:              | GHSA-wm6j-2649-pv75                                                                                                                                                             |
| Affected versions: | all versions before 8.2.31 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.31 8.4.0 and later, before 8.4.21 8.5.0 and later, before 8.5.6 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-wm6j-2649-pv75>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-7259>
* <https://www.php.net/ChangeLog-8.php#8.2.31>
* <https://www.php.net/ChangeLog-8.php#8.3.31>
* <https://www.php.net/ChangeLog-8.php#8.4.21>
* <https://www.php.net/ChangeLog-8.php#8.5.6>

## CVE-2026-7568 (Low) {#cve-2026-7568}

**Signed integer overflow in metaphone()**


Researcher: Aleksey Solovev (Positive Technologies)


|                    |                                                                                                                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Component:         | ext-standard                                                                                                                                                                    |
| Published:         | 2026-05-07                                                                                                                                                                      |
| GHSA:              | GHSA-96wq-48vp-hh57                                                                                                                                                             |
| Affected versions: | all versions before 8.2.31 (assumed, older branches are not listed in the advisory) 8.3.0 and later, before 8.3.31 8.4.0 and later, before 8.4.21 8.5.0 and later, before 8.5.6 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-96wq-48vp-hh57>
* <https://nvd.nist.gov/vuln/detail/CVE-2026-7568>
* <https://www.php.net/ChangeLog-8.php#8.2.31>
* <https://www.php.net/ChangeLog-8.php#8.3.31>
* <https://www.php.net/ChangeLog-8.php#8.4.21>
* <https://www.php.net/ChangeLog-8.php#8.5.6>

## CVE-2025-1220 (Low) {#cve-2025-1220}

**Null byte termination in hostnames**


fsockopen() doesn't regard hostname as well, hostname is terminated at the null byte. This can cause Server Side Request Forgery in general case.


|                    |                                                                                                                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2025-07-03                                                                                                                                                                       |
| GHSA:              | GHSA-3cr5-j632-f35r                                                                                                                                                              |
| Affected versions: | all versions before 8.1.33 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.29 8.3.0 and later, before 8.3.23 8.4.0 and later, before 8.4.10 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-3cr5-j632-f35r>
* <https://nvd.nist.gov/vuln/detail/CVE-2025-1220>
* <https://www.php.net/ChangeLog-8.php#8.1.33>
* <https://www.php.net/ChangeLog-8.php#8.2.29>
* <https://www.php.net/ChangeLog-8.php#8.3.23>
* <https://www.php.net/ChangeLog-8.php#8.4.10>

## CVE-2024-8925 (Low) {#cve-2024-8925}

**Erroneous parsing of multipart form data**


Erroneous parsing of multipart form data contained in an HTTP POST request could lead to legitimate data not being processed thus, violating data integrity.


|                    |                                                                                                                                                   |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 3.1                                                                                                                                               |
| Published:         | 2024-09-27                                                                                                                                        |
| GHSA:              | GHSA-9pqp-7h25-4f32                                                                                                                               |
| Affected versions: | all versions before 8.1.30 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.24 8.3.0 and later, before 8.3.12 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-9pqp-7h25-4f32>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-8925>
* <https://www.php.net/ChangeLog-8.php#8.1.30>
* <https://www.php.net/ChangeLog-8.php#8.2.24>
* <https://www.php.net/ChangeLog-8.php#8.3.12>

## CVE-2024-9026 (Low) {#cve-2024-9026}

**\[PHP-FPM\] Logs from childrens may be altered**


In PHP-FPM, when configured to catch workers output through catch_workers_output = yes configuration, it may be possible to pollute the final log with up to 4 characters from the FPM_STDIO_CMD_FLUSH macro, or remove up to 4 characters from the logs. Additionally, If PHP-FPM is configured to use a syslog, it seems that much more characters can be excluded from the logs, even though it has not been tested.


|                    |                                                                                                                                                   |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| CVSS score:        | 3.3                                                                                                                                               |
| Published:         | 2024-09-27                                                                                                                                        |
| GHSA:              | GHSA-865w-9rf3-2wh5                                                                                                                               |
| Affected versions: | all versions before 8.1.30 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.24 8.3.0 and later, before 8.3.12 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-865w-9rf3-2wh5>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-9026>
* <https://www.php.net/ChangeLog-8.php#8.1.30>
* <https://www.php.net/ChangeLog-8.php#8.2.24>
* <https://www.php.net/ChangeLog-8.php#8.3.12>

## CVE-2024-3096 (Low) {#cve-2024-3096}

**password_verify can erroneously return true, opening ATO risk**


If a password stored with password_hash starts with a null byte (\\x00), testing a blank string as the password via password_verify will incorrectly return true.


|                    |                                                                                                                                                  |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2024-04-11                                                                                                                                       |
| GHSA:              | GHSA-h746-cjrr-wfmr                                                                                                                              |
| Affected versions: | all versions before 8.1.28 (assumed, older branches are not listed in the advisory) 8.2.0 and later, before 8.2.18 8.3.0 and later, before 8.3.6 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-h746-cjrr-wfmr>
* <https://nvd.nist.gov/vuln/detail/CVE-2024-3096>
* <https://www.php.net/ChangeLog-8.php#8.1.28>
* <https://www.php.net/ChangeLog-8.php#8.2.18>
* <https://www.php.net/ChangeLog-8.php#8.3.6>

## CVE-2023-3247 (Low) {#cve-2023-3247}

**Missing error check and insufficient random bytes in HTTP Digest authentication for SOAP**


The random byte generation function used in the SOAP HTTP Digest authentication code is not checked for failure. This can result in a stack information leak. Furthermore, there's an insufficient number of random bytes used.


|                    |                                                                                                                                                  |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2023-06-12                                                                                                                                       |
| GHSA:              | GHSA-76gg-c692-v2mw                                                                                                                              |
| Affected versions: | all versions before 8.0.29 (assumed, older branches are not listed in the advisory) 8.1.0 and later, before 8.1.20 8.2.0 and later, before 8.2.7 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-76gg-c692-v2mw>
* <https://nvd.nist.gov/vuln/detail/CVE-2023-3247>
* <https://www.php.net/ChangeLog-8.php#8.0.29>
* <https://www.php.net/ChangeLog-8.php#8.1.20>
* <https://www.php.net/ChangeLog-8.php#8.2.7>

## CVE-2023-0567 (Low) {#cve-2023-0567}

**BCrypt hashes erroneously validate if the salt is cut short by \`$\`**


Malformatted BCrypt hashes that include a $ within their salt part will trigger a buffer overread and may erroneously validate any password as valid.


|                    |                                                                                                                                                  |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Published:         | 2023-02-15                                                                                                                                       |
| GHSA:              | GHSA-7fj2-8x79-rjf4                                                                                                                              |
| Affected versions: | all versions before 8.0.28 (assumed, older branches are not listed in the advisory) 8.1.0 and later, before 8.1.16 8.2.0 and later, before 8.2.3 |


References:

* <https://github.com/php/php-src/security/advisories/GHSA-7fj2-8x79-rjf4>
* <https://nvd.nist.gov/vuln/detail/CVE-2023-0567>
* <https://www.php.net/ChangeLog-8.php#8.0.28>
* <https://www.php.net/ChangeLog-8.php#8.1.16>
* <https://www.php.net/ChangeLog-8.php#8.2.3>
