---
title: "How do you configure ZAP logging?"
type: faq
category: Howtos
weight: 4
---

ZAP logs to a file called "zap.log" in the ZAP ['home'
directory](/faq/what-is-the-default-directory-that-zap-uses/).

The logging is configured by the
[log4j2.properties](https://github.com/zaproxy/zaproxy/blob/main/zap/src/main/resources/org/zaproxy/zap/resources/log4j2-home.properties)
file in the same directory.

By default the 'main' logging levels are set to `info` by these lines:

    
    
    logger.paros.name = org.parosproxy.paros
    logger.paros.level = info
    
    logger.zap.name = org.zaproxy.zap
    logger.zap.level = info
    

Changing these to `debug` (and restarting ZAP) will _significantly_ increase
the amount of logging performed:

    
    
    logger.paros.name = org.parosproxy.paros
    logger.paros.level = debug
    
    logger.zap.name = org.zaproxy.zap
    logger.zap.level = debug
    

Logging can be selectively enabled using a [Stand Alone script](/docs/desktop/addons/script-console/#script-types) while ZAP is
running (the example below is a JavaScript script):

```JavaScript
var Level = Java.type("org.apache.logging.log4j.Level")
var LoggerContext = Java.type("org.apache.logging.log4j.core.LoggerContext")

var context = LoggerContext.getContext()
var config = context.getConfiguration()

// The following will enable DEBUG logging for the API
config.getLoggerConfig("org.zaproxy.zap.extension.api.API").setLevel(Level.DEBUG)
// The following will enable DEBUG logging for the Session Fixation scan rule
config.getLoggerConfig("org.zaproxy.zap.extension.ascanrulesBeta.SessionFixationScanRule").setLevel(Level.DEBUG)

context.updateLoggers()
```
