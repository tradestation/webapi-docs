---
layout: en
title: JSONP Overview
category: getting-started
permalink: jsonp-overview/
weight: 5
---

### Errors

JSONP requests will always return a 200, but if there was an error with the resource request, the error will be wrapped in the callback response.

*401: Unauthorized*

    HTTP/1.1 200 OK
    Content-Length: 58
    Content-Type: text/javascript
    jsonp-callback: jsonpCallback
    
    jsonpCallback({"Message":"Unauthorized","StatusCode":401})

*500: Internal Server Error*

    HTTP/1.1 200 OK
    Content-Length: 95
    Content-Type: text/javascript
    jsonp-callback: jsonpCallback
    
    jQuery171048671673075295985_1331849273756({"Message":"Internal Server Error","StatusCode":500})
