---
# This page was generated from the add-on.
title: Traditional JSON Report
type: userguide
---

# Traditional JSON Report

### Sample

```
{
    "@version": "Dev Build",
    "@generated": "Fri, 4 Feb 2022 13:04:51",
    "created": "2022-02-04T13:04:51.236211400Z",
    "site":[
        {
            "@name": "http://localhost:8080",
            "@host": "localhost",
            "@port": "8080",
            "@ssl": "false",
            "alerts": [
                {
                    "pluginid": "40012",
                    "alertRef": "40012",
                    "alert": "Cross Site Scripting (Reflected)",
                    "name": "Cross Site Scripting (Reflected)",
                    "riskcode": "3",
                    "confidence": "2",
                    "riskdesc": "High (Medium)",
                    "desc": "<p>Cross-site Scripting (XSS) is an attack technique that involves ...</p>",
                    "instances":[
                        {
                            "uri": "http://localhost:8080/bodgeit/search.jsp?q=%3C%2Ffont%3E%3CscrIpt%3Ealert%281%29%3B%3C%2FscRipt%3E%3Cfont%3E",
                            "nodeName": "http://localhost:8080/bodgeit/search.jsp (q)",
                            "method": "GET",
                            "param": "q",
                            "attack": "</font><scrIpt>alert(1);</scRipt><font>",
                            "evidence": "</font><scrIpt>alert(1);</scRipt><font>",
                            "otherinfo": ""
                        },
                        {
                            "uri": "http://localhost:8080/bodgeit/contact.jsp",
                            "nodeName": "http://localhost:8080/bodgeit/contact.jsp",
                            "method": "POST",
                            "param": "comments",
                            "attack": "</td><scrIpt>alert(1);</scRipt><td>",
                            "evidence": "</td><scrIpt>alert(1);</scRipt><td>",
                            "otherinfo": ""
                        }
                    ],                   
                    "count": "2", 
                    "systemic": false, 
                    "solution": "<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not ...</p>",
                    "otherinfo": "",
                    "reference": "<p>http://projects.webappsec.org/Cross-Site-Scripting</p><p>http://cwe.mitre.org/data/definitions/79.html</p>",
                    "cweid": "79",
                    "wascid": "8",
                    "sourceid": "36977"
                },

```

The report can also include details of Sequences and related active scanning results, for example:

```
    "sequences": [
      {
        "name": "Seq name",
        "steps": [
          {
            "step": "1",
            "pass": "true",
            "resultDetails": "Pass",
            "alertIds": [],
            "original": {
              "uri": "https://www.example.com/step1",
              "method": "GET"
            },
            "replay": {
              "uri": "https://www.example.com/step1",
              "method": "GET"
            }
          },
          {
            "step": "2",
            "pass": "false",
            "resultDetails": "Fail",
            "alertIds": [
              2,
              4
            ],
            "original": {
              "uri": "https://www.example.com/step2",
              "method": "GET"
            },
            "replay": {
              "uri": "https://www.example.com/step2",
              "method": "GET"
            }
          }
        ]
      }
    ]
```
