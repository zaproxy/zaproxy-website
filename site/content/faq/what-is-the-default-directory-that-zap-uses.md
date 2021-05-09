---
title: "What is the default directory that ZAP uses?"
type: faq
category: General Questions
weight: 2
---

The default directory that ZAP uses depends on the OS.

Note that you can override this using the -dir [command line](/docs/desktop/cmdline/) option.

##  Windows 7 / 8

    
    
    C:\Users\<username>\OWASP ZAP
    

##  Windows XP

    
    
    C:\Documents and Settings\<username>\OWASP ZAP
    

##  Linux

    
    
    ~/.ZAP
    

##  Mac OS

    
    
    /Applications/OWASP\ ZAP.app/Contents/Java
    

##  Weekly releases

Note that for weekly releases `_D` is appended to the above directory. Development builds also use this directory.
