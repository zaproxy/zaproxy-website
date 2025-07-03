---
title: "How do you find out what key to use to set a config value on the command line?"
type: faq
category: Howtos
weight: 4
---

If you need to set options via the command line then have a look at the 
[Automation Framework](/docs/automate/automation-framework/) first.
This is well documented and has support for all of the most commonly needed configuration parameters.


The [ZAP command line](/docs/desktop/cmdline/) allows you to set individual values as follows:
    
    -config api.key=12345 -config network.connection.timeoutInSecs=60

How can you find out what keys to use to set the values you want?

The keys are a dot notation of the XML used in the config.xml file.

One way to find out which value you need to change is:

  1. Start ZAP with a clean directory, e.g. `./zap.sh -dir test1`
  2. Close ZAP
  3. Start ZAP with another clean directory, e.g. `./zap.sh -dir test2`
  4. Set the option you want to know the key of
  5. Close ZAP
  6. Diff the 2 config files: `diff test1/config.xml test2/config.xml`
  7. Work out the XML hierarchy of the item that has changed
  8. Convert that to dot notation

For example, the maximum number of threads per host for the active is in:

```XML
<scanner><threadPerHost>2</threadPerHost></scanner>
```

Which in dot notation is:
    
    scanner.threadPerHost=2
    

Note that you can set 'arrays' using keys like:
    
    -config replacer.full_list\(0\).description=auth1 \
    -config replacer.full_list\(0\).enabled=true \
    -config replacer.full_list\(0\).matchtype=REQ_HEADER \
    -config replacer.full_list\(0\).matchstr=Authorization \
    -config replacer.full_list\(0\).regex=false \
    -config replacer.full_list\(0\).replacement=SBSBSB \
    -config replacer.full_list\(1\).description=auth2 \
    -config replacer.full_list\(1\).enabled=true \
    -config replacer.full_list\(1\).matchtype=REQ_HEADER \
    -config replacer.full_list\(1\).matchstr=AnotherHeader \
    -config replacer.full_list\(1\).regex=false \
    -config replacer.full_list\(1\).replacement=BLAHBLAH
    

You can also put all of the keys you want to set in a file and use that file
on the command line:
    
    -configfile conf
    

for the above example the file `conf` would contain:
    
    replacer.full_list(0).description=auth1
    replacer.full_list(0).enabled=true
    replacer.full_list(0).matchtype=REQ_HEADER
    replacer.full_list(0).matchstr=Authorization
    replacer.full_list(0).regex=false
    replacer.full_list(0).replacement=SBSBSB
    replacer.full_list(1).description=auth2
    replacer.full_list(1).enabled=true
    replacer.full_list(1).matchtype=REQ_HEADER
    replacer.full_list(1).matchstr=AnotherHeader
    replacer.full_list(1).regex=false
    replacer.full_list(1).replacement=BLAHBLAH
    
