---
title: "Where is ZAP installed?"
type: faq
category: General Questions
weight: 2
---

ZAP is installed in different places depending on the OS.

The install directory contains everything that's bundled with ZAP originally.

## Windows 7 / 8 / 10

Underneath the `Program Files` directory, e.g.

- `C:\Program Files\OWASP\Zed Attack Proxy` - For 64bit installs.
- `C:\Program Files (x86)\OWASP\Zed Attack Proxy` - For 32bit installs.

## Linux

The Linux package is actually just a tar.gz file, so ZAP will be 'installed'
wherever you expand the archive.

## Mac OS

Same as for Linux, the Mac OS package is just a zip file. The contained "Owasp
ZAP" app can be executed instantly, regardless of the directory. As for any
other Mac application, most users preferably put the app into the
`/Applications` directory.
