---
title: "How do I use Chrome with ZAP in Docker?"
type: faq
category: General Questions
weight: 2
---

The Chrome browser is not included by default in the [ZAP Docker](/docs/docker/about/) images. This FAQ entry will walk-through the steps necessary
to install and run Chrome with ZAP in a Docker container, to be used by its tools (e.g. [DOM XSS Scan Rule](/docs/desktop/addons/dom-xss-active-scan-rule/), [AJAX Spider](/docs/desktop/addons/ajax-spider/)).

1. Create a `Dockerfile` using one of the ZAP images and installing Chrome, e.g.:
```
FROM --platform=linux/amd64 zaproxy/zap-stable:latest

USER root

RUN apt-get update && \
	wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
	apt-get install -y ./google-chrome-stable_current_amd64.deb && \
	rm -rf /var/lib/apt/lists/*

USER zap
```

2. Build the new image, e.g.: `zap-chrome`
```bash
docker build -f Dockerfile --platform linux/amd64 -t zap-chrome .
```

To verify everything is working create an [Automation Framework](/docs/automate/automation-framework/) plan called `chrome.yaml` with the following contents:
```yml
---
env:
  contexts:
  - name: "Chrome Headless Test"
    urls:
    - "https://demo.owasp-juice.shop"
  parameters:
    failOnError: true
    failOnWarning: true
    progressToStdout: true
jobs:
- parameters:
    maxDuration: 1
    numberOfBrowsers: 1
    browserId: "chrome-headless"
  tests:
  - name: "At least one URL found"
    onFail: "WARN"
    statistic: "spiderAjax.urls.added"
    site: ""
    operator: ">="
    value: 20
    type: "stats"
  name: "spiderAjax"
  type: "spiderAjax"
```

In the same directory as the plan run ZAP using the Docker image created previously, e.g.:
```
docker run --rm -v "$(pwd)":/zap/wrk/:rw -it zap-chrome zap.sh -cmd -autorun /zap/wrk/chrome.yaml
```

The plan should output something like:
```
Job spiderAjax set numberOfBrowsers = 1
Job spiderAjax set maxDuration = 1
Job spiderAjax set browserId = chrome-headless
Job spiderAjax/stats/null set name = At least one URL found
Job spiderAjax/stats/null set onFail = Warn
Job spiderAjax/stats/null set statistic = spiderAjax.urls.added
Job spiderAjax/stats/null set site = 
Job spiderAjax/stats/null set operator = >=
Job spiderAjax/stats/null set value = 20
Job spiderAjax/stats/null set type = stats
Job spiderAjax adding test of type stats : At least one URL found
Job spiderAjax started
Job spiderAjax found 254 URLs
Job spiderAjax test of type stats passed: At least one URL found [254 >= 20]
Job spiderAjax finished, time taken: 00:01:01
Automation plan succeeded!
```

If Chrome fails to start because the container is being run with the `root` user, you might need to start ZAP with:
```
-config selenium.chromeArgs.arg.argument=--no-sandbox
```
Before you do so, read more about the sandbox in https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/design/sandbox_faq.md
and consider using the `zap` user instead.

For DOM XSS to use Chrome run ZAP with:
```
-config rules.domxss.browserid=chrome-headless
```

If you have any issues or feedback get in touch through the [ZAP User Group](https://groups.google.com/group/zaproxy-users).
