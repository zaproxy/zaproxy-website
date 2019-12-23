---
title: "Where does ZAP put its logs?"
type: faq
category: General Questions
weight: 2
---

ZAP logs to a file called "zap.log" in the ZAP ['home'
directory](faq/what-is-the-default-directory-that-zap-uses/).

The logging is configured by the
[log4j.properties](https://github.com/zaproxy/zaproxy/blob/develop/src/xml/log4j.properties)
file in the same directory.

By default the 'main' logging levels are set to "INFO" by these 2 lines:

    
    
    log4j.logger.org.parosproxy.paros=INFO
    log4j.logger.org.zaproxy.zap=INFO
    

Changing these to "DEBUG" (and restarting ZAP) will _significantly_ increase
the amount of logging performed:

    
    
    log4j.logger.org.parosproxy.paros=DEBUG
    log4j.logger.org.zaproxy.zap=DEBUG
    

Logging can be selectively enabled using a Stand Alone script while ZAP is
running (the examples below are Javascript scripts):

    
    
    // The following will enable DEBUG logging for the API
    org.apache.log4j.Logger.getLogger("org.zaproxy.zap.extension.api.API").setLevel(org.apache.log4j.Level.DEBUG);
    // The following will enable DEBUG logging for the SessionFixation scanner
    org.apache.log4j.Logger.getLogger("org.zaproxy.zap.extension.ascanrulesBeta.SessionFixation").setLevel(org.apache.log4j.Level.DEBUG);
