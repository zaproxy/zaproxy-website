---
title: "How can I use the ZAP API in my own regression tests?"
type: faq
category: API
weight: 7
---


You can use ZAP to perform security regression tests on your own products.

Note that this answer is very basic and WILL need to be improved ;)

You need to have installed Java and ZAP.

To launch ZAP from a Java program you can do something like:

```Java
ProcessBuilder pb = new ProcessBuilder("/home/myuser/fullpath/ZAP 2.9.0/zap.sh");  // full path to script, use zap.bat on Windows
pb.directory(new File("/home/myuser/fullpath/ZAP 2.9.0/"));  // directory where the script is in
Process p = pb.start();
```

Note that this will bring up the full UI, which is useful for initial testing.
To launch it in the background pass "-daemon" as an argument to the script.
Obviously there will be equivalents in other languages - you just need to run
the relevant script (zap.sh or zap.bat) with the working directory set up to
the location of that script.

Next run your unit tests proxying via ZAP. You can then control ZAP using the [ZAP API](/docs/api/), for example, to spider or active scan.
