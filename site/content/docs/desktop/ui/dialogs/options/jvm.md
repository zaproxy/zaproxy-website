---
# This page was generated from the add-on.
title: Options JVM screen
type: userguide
weight: 12
---

# Options JVM screen


This screen allows you to configure the JVM options used when starting ZAP.

### JVM Options

A free format text field which will be added to the Java command line call when invoking ZAP via either zap.sh or zap.bat.



The option was added so that the Java maximum memory allocation pool size can be set,
which is of the form: -Xmx*n* where *n* is the size in bytes.  

Good values for this field could be:

* -Xmx256m
* -Xmx512m
* -Xmx1024m


Unlike the other ZAP options these are held in the file `.ZAP_JVM.properties` in the user's default ZAP directory,
which depends on the OS being used, for example:

* Windows 7/8: C:\\Users\\*\<username\>*\\ZAP
* Windows XP: C:\\Documents and Settings\\*\<username\>*\\ZAP
* Linux: \~/.ZAP
* Mac OS: \~/Library/Application Support/ZAP

If you make a mistake when setting these options then ZAP may fail to start.  
If that happens then deleting this file should fix the problem.


**Windows Notes:** These options are not used when starting ZAP via the executable. The directory where the file `.ZAP_JVM.properties` is located depends on the environment variable `%USERPROFILE%`.

### JVM Memory Details

The lower portion of the dialog displays details of the current JVM memory configuration. Including:

* Size - the amount of memory currently allocated to the JVM.
* Used - the amount of currently allocated memory used (not free).
* Max - the amount of memory that the JVM could grow to occupy.

The values are displayed in human readable IEC units based on base 2 calculation (for example: 1024Bytes equals 1KiB, etc).


Generally max should be close to -Xmx (if specified). However, the following behavior was observed during testing under Java 8 on Windows OS.


-Xmx512m was specified (which should calculate out to \~488MiB), however, 455.5MiB was displayed.  

-Xms512m -Xmx512m was specified, however, 475MiB was displayed.  

-XX:+AlwaysPreTouch -Xms512m -Xmx512m, and 474.5MiB was displayed.


So it seems the JVM does some calculation/manipulation at execution which may mean that the results may not align as expected for the
options the user inputs (this is a JVM issue, not a ZAP issue).

## See also

|   |                                                      |                                                 |
|---|------------------------------------------------------|-------------------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                     | for an overview of the user interface           |
|   | [Options dialogs](/docs/desktop/ui/dialogs/options/) | for details of the other Options dialog screens |

## External links

|   |                                                                                                    |
|---|----------------------------------------------------------------------------------------------------|
|   | [Java 8 options](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/java.html#BABDJJFI) |
