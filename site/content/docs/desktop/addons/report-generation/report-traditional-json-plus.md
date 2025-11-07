---
# This page was generated from the add-on.
title: Traditional JSON Report with Requests and Responses
type: userguide
---

# Traditional JSON Report with Requests and Responses

### Sections

| Section                    | ID              |
|:---------------------------|:----------------|
| Statistics                 | statistics      |
| Sequence Details           | sequencedetails |
| Automation Framework State | afstate         |

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
                            "otherinfo": "",
                            "request-header": "GET http://localhost:8080/bodgeit/search.jsp?q=%3C%2Ffont%3E%3CscrIpt%3Ealert%281%29%3B%3C%2FscRipt%3E%3Cfont%3E HTTP/1.1\r\n...",
                            "request-body": "",
                            "response-header": "HTTP/1.1 200\r\nContent-Type: text/html;charset=ISO-8859-1\r\nContent-Length: 2045\r\nDate: Fri, 04 Feb 2022 11:56:38 GMT\r\n\r\n",
                            "response-body": "\n\n\n\n\n\n\n<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 3.2//EN\">\n<html>..."
                        },
                        {
                            "uri": "http://localhost:8080/bodgeit/contact.jsp",
                            "nodeName": "http://localhost:8080/bodgeit/contact.jsp",
                            "method": "POST",
                            "param": "comments",
                            "attack": "</td><scrIpt>alert(1);</scRipt><td>",
                            "evidence": "</td><scrIpt>alert(1);</scRipt><td>",
                            "otherinfo": "",
                            "request-header": "POST http://localhost:8080/bodgeit/contact.jsp HTTP/1.1\r\nHost: localhost:8080\r\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0)...",
                            "request-body": "null=&anticsrf=0.7583553183173598&comments=%3C%2Ftd%3E%3CscrIpt%3Ealert%281%29%3B%3C%2FscRipt%3E%3Ctd%3E",
                            "response-header": "HTTP/1.1 200\r\nContent-Type: text/html;charset=ISO-8859-1\r\nContent-Length: 2025\r\nDate: Fri, 04 Feb 2022 11:56:35 GMT\r\n\r\n",
                            "response-body": "\n\n\n\n\n\n<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 3.2//EN\">\n<html>..."
                        }
                    ],                   
                    "count": "2", 
                    "systemic": false, 
                    "solution": "<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not ...</p>",
                    "otherinfo": "",
                    "reference": "<p>http://projects.webappsec.org/Cross-Site-Scripting</p><p>http://cwe.mitre.org/data/definitions/79.html</p>",
                    "cweid": "79",
                    "wascid": "8",
                    "sourceid": "36977",
                    "tags":[ 
                        {
                            "tag": "OWASP_2021_A03",
                            "link": "https://owasp.org/Top10/A03_2021-Injection/"
                        },
                        {
                            "tag": "WSTG-v42-INPV-01",
                            "link": "https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/07-Input_Validation_Testing/01-Testing_for_Reflected_Cross_Site_Scripting"
                        },
                        {
                            "tag": "OWASP_2017_A07",
                            "link": "https://owasp.org/www-project-top-ten/2017/A7_2017-Cross-Site_Scripting_(XSS).html"
                        }
                    ]
                },
                ...
            ]
        }
    ]
}
```

#### Statistics Section

The report can also include statistics, per site and global, for example:

```
{
    ...
    "site":[
        {
            ...
            "statistics": {
                "site.specific.stat.a": 1,
                "site.specific.stat.b": 2
            }
        }
    ],
    "statistics": {
        "global.stat.a": 1,
        "global.stat.b": 2
    }
}
```

#### Sequence Details Section

The report can also include details of Sequences and related active scanning results, for example:

```
{
    ...
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
              "method": "GET",
              "request-header": "GET https://www.example.com/step1 HTTP/1.1\r\nhost: www.example.com\r\nuser-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0\r\npragma: no-cache\r\ncache-control: no-cache\r\nTest: Foo-Header\\x0000\\x0013\r\n\r\n",
              "request-body": "\\x0000\\x0013",
              "response-header": "HTTP/1.0 0\r\nTest: Foo-Header\\x0000\\x0013\r\n\r\n",
              "response-body": "\\x0000\\x0013"
            },
            "replay": {
              "uri": "https://www.example.com/step1",
              "method": "GET",
              "request-header": "GET https://www.example.com/step1 HTTP/1.1\r\nhost: www.example.com\r\nuser-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0\r\npragma: no-cache\r\ncache-control: no-cache\r\nTest: Foo-Header\\x0000\\x0013\r\n\r\n",
              "request-body": "\\x0000\\x0013",
              "response-header": "HTTP/1.0 0\r\nTest: Foo-Header\\x0000\\x0013\r\n\r\n",
              "response-body": "\\x0000\\x0013"
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
              "method": "GET",
              "request-header": "GET https://www.example.com/step2 HTTP/1.1\r\nhost: www.example.com\r\nuser-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0\r\npragma: no-cache\r\ncache-control: no-cache\r\nTest: Foo-Header\\x0000\\x0013\r\n\r\n",
              "request-body": "\\x0000\\x0013",
              "response-header": "HTTP/1.0 0\r\nTest: Foo-Header\\x0000\\x0013\r\n\r\n",
              "response-body": "\\x0000\\x0013"
            },
            "replay": {
              "uri": "https://www.example.com/step2",
              "method": "GET",
              "request-header": "GET https://www.example.com/step2 HTTP/1.1\r\nhost: www.example.com\r\nuser-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0\r\npragma: no-cache\r\ncache-control: no-cache\r\nTest: Foo-Header\\x0000\\x0013\r\n\r\n",
              "request-body": "\\x0000\\x0013",
              "response-header": "HTTP/1.0 0\r\nTest: Foo-Header\\x0000\\x0013\r\n\r\n",
              "response-body": "\\x0000\\x0013"
            }
          }
        ]
      }
    ]
}
```

#### Automation Framework State Section

The report can also include Automation Framework errors and warnings, for example:

```
{
    ...
    "afPlanErrors": [
        "AError A"
    ],
    "afPlanWarns": [
        "Warning B"
    ]
}
```
