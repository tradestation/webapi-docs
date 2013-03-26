---
layout: en
title: Response Formats
category: getting-started
permalink: response-formats/
weight: 3
---

The TradeStation WebAPI currently supports JSON and XML request/response body formats for all non-streaming methods. The streaming services use JSON exclusively. JSON is the preferred format because it is lighter weight and generally faster to parse.

The format is determined by the `Accept` header of the request.

If no format is specified, the defaulted format is `application/json`.

### Example

    GET https://api.tradestation.com/WebAPI/users/testuser/accounts HTTP/1.1
    Authorization: QUNCSmI
    Accept: application/json
    Content-Type: application/x-www-form-urlencoded
    Host: api.tradestation.com
    
    HTTP/1.1 200 OK
    Cache-Control: private
    Content-Length: 218
    Content-Type: application/json; charset=utf-8
    Server: Microsoft-IIS/7.5
    X-AspNet-Version: 4.0.30319
    X-Powered-By: ASP.NET
    Date: Fri, 18 Mar 2011 18:21:45 GMT
    
    [{
        "Key": 114275,
        "Name": "543061 QA",
        "Type": "C",
        "TypeDescription": "Cash"
    }, {
        "Key": 114276,
        "Name": "5430611 QA",
        "Type": "M",
        "TypeDescription": "Margin"
    }, {
        "Key": 114277,
        "Name": "5430612 QA",
        "Type": "F",
        "TypeDescription": "Futures"
    }]

*Notes:*
* *Documentation examples use json format but support xml formatting unless otherwise specified.*
