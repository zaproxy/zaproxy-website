---
title: "How can I use the ZAP API in my own regression tests?"
type: faq
category: API
weight: 7
---


You can use ZAP to perform security regression tests on your own products.

Note that this answer is very basic and WILL need to be improved ;)

You need to have installed Java and ZAP.

To launch ZAP from a java program you can do something like:

    
    
    ProcessBuilder pb = new ProcessBuilder("/home/myuser/fullpath/ZAP_1.3.0/zap.sh");  // full path to script, use zap.bat on Windows
    pb.directory(new File("/home/myuser/fullpath/ZAP_1.3.0/"));  // directory ZAP script in
    Process p = pb.start();
    

Note that this will bring up the full UI, which is useful for initial testing.
To launch it in the background pass "-daemon" as an argument to the script.
Obviously there will be equivalents in other languages - you just need to run
the relevant script (zap.sh or zap.bat) with the working directory set up to
the location of that script.

Next run your unit tests proxying via ZAP. Then you can do things like kicking
off the spider via:

    
    
    http://zap/json/spider/action/scan/?url=http://localhost:8080/zap-wave/
    

Or the active scanner via

    
    
    http://zap/json/ascan/action/scan/?url=http://localhost:8080/
    

These are both async, so you'll have to wait for them to complete. You can
then access any alerts raised etc. ZAP supports JSON and XML.

Theres examples here (including waiting for the async ops to complete):

<https://github.com/zaproxy/zaproxy/blob/develop/src/org/zaproxy/zap/junit/TestDaemonWave.java>

To stop ZAP use

    
    
    http://zap/json/core/action/shutdown/
    

Note that you can browse the APIs available via

    
    
    http://zap/
    

once you are proxying via ZAP.
