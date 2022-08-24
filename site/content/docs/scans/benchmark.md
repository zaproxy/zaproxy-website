---
title: "ZAP vs OWASP Benchmark"
type: page
EditableContent: true
---

OWASP Benchmark is a Java test suite designed to verify the speed and accuracy of vulnerability detection tools.

You can find the home page for the project at https://owasp.org/www-project-benchmark/ and the source code at https://github.com/OWASP-Benchmark/BenchmarkJava.

Click on the Sections to see the full set of results, which include the path of the test in the application and the scan rule which should find the vulnerability.

{{< scan-table >}}

  {{< scan-results target="benchmark" section="cmdi" nolinks=true >}}

{{< /scan-table >}}

| Config | Details |
| --- | --- |
| Frequency | Daily |
| Scripts | https://github.com/zapbot/zap-mgmt-scripts/blob/master/scans/benchmark/ |
| Action | https://github.com/zapbot/zap-mgmt-scripts/actions/workflows/zap-vs-owasp-benchmark.yml | 
