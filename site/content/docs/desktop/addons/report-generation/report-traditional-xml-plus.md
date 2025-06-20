---
# This page was generated from the add-on.
title: Traditional XML Report with Requests and Responses
type: userguide
---

# Traditional XML Report with Requests and Responses

### Sample

#### About riskdesc

riskdesc - Is a combination identifier, showing Risk followed by Confidence (in brackets). For example `High (Medium)` would indicate a High risk issue identified with Medium confidence.

```
        <?xml version="1.0"?>
        <OWASPZAPReport version="2.11.1" generated="Fr., 30 Sep. 2022 08:40:35">
                        <site name="http://localhost:8080" host="localhost" port="8080" ssl="false">
                                <alerts>
                                        
                                                <alertitem>
                                                        <pluginid>90027</pluginid>
                                                        <alertRef>90027</alertRef>
                                                        <alert>Cookie Slack Detector</alert>
                                                        <name>Cookie Slack Detector</name>
                                                        <riskcode>1</riskcode>
                                                        <confidence>1</confidence>
                                                        <riskdesc>Low (Low)</riskdesc>
                                                        <confidencedesc>Low</confidencedesc>
                                                        <desc>Repeated GET requests: drop a different cookie each time, followed by normal request with all cookies to stabilize session, compare responses against original baseline GET. This can reveal areas where cookie based authentication/attributes are not actually enforced.</desc>
                                                        <instances>
                                                                
                                                                        <instance>
                                                                                <uri>http://localhost:8080/bodgeit/js</uri>
                                                                                <method>GET</method>
                                                                                <param></param>
                                                                                <attack></attack>
                                                                                <evidence></evidence>
                                                                                <otherinfo></otherinfo>
                                                                                <requestheader>GET http://localhost:8080/bodgeit/js HTTP/1.1
        Host: localhost:8080
        User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:105.0) Gecko/20100101 Firefox/105.0
        Accept: */*
        Accept-Language: de,en-US;q=0.7,en;q=0.3
        Connection: keep-alive
        Referer: https://localhost:8080/bodgeit/
        Cookie: JSESSIONID=9E75E26E50F681208096FFAA0B566901
        Sec-Fetch-Dest: script
        Sec-Fetch-Mode: no-cors
        Sec-Fetch-Site: same-origin
        Content-Length: 0
        
        </requestheader>
                                                                                <requestbody></requestbody>
                                                                                <responseheader>HTTP/1.1 302 Found
        Server: Apache-Coyote/1.1
        Location: /bodgeit/js/
        Content-Length: 0
        Date: Fri, 30 Sep 2022 06:40:17 GMT
        
        </responseheader>
                                                                                <responsebody></responsebody>
                                                                        </instance>
                                                                
                                                                
                                                                        <instance>
                                                                                <uri>http://localhost:8080/bodgeit/js/util.js</uri>
                                                                                <method>GET</method>
                                                                                <param></param>
                                                                                <attack></attack>
                                                                                <evidence></evidence>
                                                                                <otherinfo></otherinfo>
                                                                                <requestheader>GET http://localhost:8080/bodgeit/js/util.js HTTP/1.1
        Host: localhost:8080
        User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:105.0) Gecko/20100101 Firefox/105.0
        Accept: */*
        Accept-Language: de,en-US;q=0.7,en;q=0.3
        Connection: keep-alive
        Referer: https://localhost:8080/bodgeit/
        Cookie: JSESSIONID=9E75E26E50F681208096FFAA0B566901
        Sec-Fetch-Dest: script
        Sec-Fetch-Mode: no-cors
        Sec-Fetch-Site: same-origin
        Content-Length: 0
        
        </requestheader>
                                                                                <requestbody></requestbody>
                                                                                <responseheader>HTTP/1.1 200 OK
        Server: Apache-Coyote/1.1
        Accept-Ranges: bytes
        ETag: W/&quot;1812-1343651578000&quot;
        Last-Modified: Mon, 30 Jul 2012 12:32:58 GMT
        Content-Type: application/javascript
        Content-Length: 1812
        Date: Fri, 30 Sep 2022 06:40:17 GMT
        
        </responseheader>
                                                                                <responsebody>
        function loadfile(filename){
                var filetype = filename.split(&apos;.&apos;).pop();
                switch (filetype){
                case &quot;js&quot;:
                        var insert=document.createElement(&apos;script&apos;)
                        insert.setAttribute(&quot;type&quot;,&quot;text/javascript&quot;)
                        insert.setAttribute(&quot;src&quot;, filename)
                        break;
                case &apos;css&apos;:
                var insert=document.createElement(&quot;link&quot;);
                insert.setAttribute(&quot;type&quot;, &quot;text/css&quot;)
                insert.setAttribute(&quot;href&quot;, filename)
                insert.setAttribute(&quot;rel&quot;, &quot;stylesheet&quot;)
                break;
                }
                if (typeof insert!=&quot;undefined&quot;)
                document.getElementsByTagName(&quot;head&quot;)[0].appendChild(insert);
                return false;
        }
        
        
        ////The following is from:
        //http://stackoverflow.com/questions/316781/how-to-build-query-string-with-javascript
        
        function form_to_params( form )
        {
                var output = &quot;&quot;;
                var length = form.elements.length
                for( var i = 0; i &lt; length; i++ )
                {
                element = form.elements[i]
        
                if(element.tagName == &apos;TEXTAREA&apos; )
                {
                        output += &quot;|&quot; + element.name + &quot;:&quot; + element.value; 
                }
                else if( element.tagName == &apos;INPUT&apos; )
                {
                        switch(element.type){
                        case &apos;radio&apos;:
                        case &apos;checkbox&apos;:
                                if(element.checked &amp;&amp; !element.value){
                                output += &quot;|&quot; + element.name + &quot;:on&quot;;
                                break;
                                }
                        case &apos;text&apos;:
                        case &apos;hidden&apos;:
                        case &apos;password&apos;:
                                if(element.value)
                                output += &quot;|&quot; + element.name + &quot;:&quot; + element.value;
                        break;     
                        }
                }
                }
                return output.substring(1);
        }
        
        
        function htmlEntities(str) {
                return String(str).replace(/&amp;/g, &apos;&amp;amp;&apos;).replace(/&lt;/g, &apos;&amp;lt;&apos;).replace(/&gt;/g, &apos;&amp;gt;&apos;).replace(/&quot;/g, &apos;&amp;quot;&apos;);
        }</responsebody>
                                                                        </instance>
                                                                
                                                        </instances>
                                                        <count>3</count>
                                                        <solution></solution>
                                                        <otherinfo>NOTE: Because of its name this cookie may be important, but dropping it appears to have no effect: [JSESSIONID] 
        Cookies that don&apos;t have expected effects can reveal flaws in application logic. In the worst case, this can reveal where authentication via cookie token(s) is not actually enforced.
        These cookies affected the response: 
        These cookies did NOT affect the response: JSESSIONID
        </otherinfo>
                                                        <reference>http://projects.webappsec.org/Fingerprinting
        </reference>
                                                        <cweid>200</cweid>
                                                        <wascid>45</wascid>
                                                        <sourceid>2420</sourceid>
                                                        <tags>
                                                                <tag>
                                                                        <tag>OWASP_2017_A06 </tag>
                                                                        <link>https://owasp.org/www-project-top-ten/2017/A6_2017-Security_Misconfiguration.html </link>
                                                                </tag>
                                                                <tag>
                                                                        <tag>OWASP_2021_A05 </tag>
                                                                        <link>https://owasp.org/Top10/A05_2021-Security_Misconfiguration/ </link>
                                                                </tag>
                                                                <tag>
                                                                        <tag>WSTG-v42-SESS-02 </tag>
                                                                        <link>https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes </link>
                                                                </tag>

                                                        </tags>
                                                </alertitem>
                                </alerts>
                                <statistics>
                                        <statistic>
                                                <key>site.specific.stat.a</key>
                                                <value>1</value>
                                        </statistic>
                                        <statistic>
                                                <key>site.specific.stat.b</key>
                                                <value>2</value>
                                        </statistic>
                                </statistics>
                        </site>
                        <statistics>
                                <statistic>
                                        <key>global.stat.a</key>
                                        <value>1</value>
                                </statistic>
                                <statistic>
                                        <key>global.stat.b</key>
                                        <value>2</value>
                                </statistic>
                        </statistics>
        </OWASPZAPReport>                
```
