---
title: "How Can I set Variables in the Automation Framework?"
type: faq
category: Automation
weight: 8
---

The [Automation Framework](/docs/automate/automation-framework/) supports 
[variables](/docs/desktop/addons/automation-framework/environment/#variables), which includes environment variables.
You can use these to set values referenced in your plan from the command line, including secrets such as credentials.

To see this in action download the 
[ScriptEnvVarAccess.yaml](https://github.com/zaproxy/community-scripts/blob/main/other/af-plans/ScriptEnvVarAccess.yaml)
plan and store it in your current working directory.

Edit the script and change `PATH` to `MyVar`.

On Linux run:
```bash
export MyVar="Test 1 2 3"
zap.sh -cmd -autorun ScriptEnvVarAccess.yaml
```

On Windows run:
```bash
set MyVar=Test 1 2 3
zap.bat -cmd -autorun ScriptEnvVarAccess.yaml
```

You may need to specify the full path to the relevant ZAP script on your computer.

In both cases you shoud see output similar to:
```bash
Job script set action = add
Job script set type = standalone
Job script set engine = ECMAScript : Graal.js
Job script set name = print-env-vars.js
Job script set inline = print(Java.type("java.lang.System").getenv("MyVar"));

Job script set action = run
Job script set type = standalone
Job script set name = print-env-vars.js
Job script started
Job: script Start action: add
Job script finished, time taken: 00:00:00
Job script started
Job: script Start action: run
Test 1 2 3
Job script finished, time taken: 00:00:00
Automation plan succeeded!
```
