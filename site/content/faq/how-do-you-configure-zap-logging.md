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
var Configurator = Java.type("org.apache.logging.log4j.core.config.Configurator");
var Level = Java.type("org.apache.logging.log4j.Level");

// https://logging.apache.org/log4j/2.x/javadoc.html
Configurator.setLevel({
  // The following will enable DEBUG logging for the API
  "org.zaproxy.zap.extension.api.API" : Level.DEBUG,
  // The following will enable DEBUG logging for the Session Fixation scan rule
  "org.zaproxy.zap.extension.ascanrulesBeta.SessionFixationScanRule" : Level.DEBUG,
  // The following will enable DEBUG logging for the spider add-on
  "org.zaproxy.addon.spider" : Level.DEBUG,
});
```

Since ZAP 2.15.0 (or in weeklies released after Jan 17, 2024), the logging for ZAP classes may be configured via the `-loglevel` CLI option. For example,

```shell
zap.sh -daemon -loglevel debug
```
