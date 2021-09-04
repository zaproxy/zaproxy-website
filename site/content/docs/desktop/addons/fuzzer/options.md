---
# This page was generated from the add-on.
title: Options Fuzz screen
type: userguide
weight: 1
---

# Options Fuzzer screen

This screen allows you to configure the [fuzzing](/docs/desktop/addons/fuzzer/) options:

### Default category

The category that will be initially selected shown when the [Fuzz dialog](/docs/desktop/addons/fuzzer/dialogue/) is displayed.

### Concurrent scanning threads per host

The number of threads the scanner will use per host.  
Increasing the number of threads will speed up the scan but may put extra strain on the computer ZAP is running on and the target host.

### Add custom Fuzz file

Allows you to add your own files to be used when fuzzing.  
These should be text files with one attack per line.  
Files are added to the 'fuzzers' directory underneath the ZAP home directory.

## See also

|     |                                                 |
| --- | ----------------------------------------------- |
|     | [Fuzzer concepts](/docs/desktop/addons/fuzzer/) |
