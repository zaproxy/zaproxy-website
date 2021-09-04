---
title: "What is the default directory that ZAP uses?"
type: faq
category: General Questions
weight: 2
---

The default directory that ZAP uses depends on the OS.

It can be overridden using the `-dir` [command line](/docs/desktop/cmdline/) option.

The default or home directory contains ZAP files added or modified at runtime. Including (but not limited to): config files, add-ons, input files, logs, etc. It is also the save location, for: scripts, active scan policy files, exported contexts, etc.

Note: ZAP's home is not the same as the user's home directory, which is also OS dependent, and is the initial save location for sessions, reports, exported URLs, etc.

## Windows 7 / 8 / 10

`C:\Users\<username>\OWASP ZAP`

## Linux

`~/.ZAP`

## Mac OS

`~/Library/Application Support/ZAP`

## Weekly releases

Note that for weekly releases `_D` is appended to the above directory. Development builds also use this directory.
