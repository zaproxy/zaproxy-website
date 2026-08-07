---
# This page was generated from the add-on.
title: Options Fuzz screen
type: userguide
weight: 1
---

# Options Fuzzer screen


This screen allows you to configure the [fuzzing](/docs/desktop/addons/fuzzer/) options:

### Default Category

The category that will initially be selected when the [Fuzz dialog](/docs/desktop/addons/fuzzer/dialogue/) is displayed.

### Add Custom Fuzz File

Allows you to add your own files to be used when fuzzing.  
These should be text files with one payload per line.  
Files are added to the 'fuzzers' directory underneath the ZAP home directory.

### Finished Fuzzers in UI

It defines the numbers of fuzzers (that have completed their execution) visible in the fuzzer tab.

### Retries on IO Error

The number of retries when an input/output error occurs sending a request to the target.

### Max. Errors Allowed

If the number of errors exceed this limit, the fuzzer will stop its execution.

### Payload Replacement Strategy


Controls how multiple payload lists are combined when you fuzz more than one location.  

Locations are processed in **message location sort order**, not the order you added them in the Fuzz dialog.

* **Cluster Bomb** - try every combination: the **last** fuzz location is cycled through all of its payloads before an earlier location advances.
* **Pitchfork** - pair payloads by position: 1st with 1st, 2nd with 2nd, and so on. The fuzzer stops when the **shortest** payload list is used up.

With a single fuzz location, both strategies produce the same order.

Example setup (two locations, two payloads each):

* **Location A** payloads: 1, 2
* **Location B** payloads: a, b

#### Cluster Bomb Example


The last location (B) changes on every request. Location A changes only after B has used every payload.

| Request | Location A | Location B |
|---------|------------|------------|
| 1       | 1          | a          |
| 2       | 1          | b          |
| 3       | 2          | a          |
| 4       | 2          | b          |

#### Pitchfork Example


The same payload position is used in every location on each request (1st with 1st, then 2nd with 2nd, and so on).

| Request | Location A | Location B |
|---------|------------|------------|
| 1       | 1          | a          |
| 2       | 2          | b          |

### Concurrent Scanning Threads per Scan

The number of threads the fuzzer will use per scan.  
Increasing the number of threads will speed up the scan but may put extra strain on the computer ZAP is running on as well as the target.

### Delay when Fuzzing (in milliseconds)

The number of milliseconds between requests by the fuzzer to the target host, usually done to avoid getting blocked by the target or if the target implements some sort of throttling requirement.

## See also

|   |                                                 |
|---|-------------------------------------------------|
|   | [Fuzzer concepts](/docs/desktop/addons/fuzzer/) |
