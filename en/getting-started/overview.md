---
layout: en
title: Overview
category: getting-started
permalink: overview/
weight: 1
---

The WebAPI is a collection of RESTful web services for interacting with TradeStation. These services accept and/or return object data via standard HTTP requests.

The WebAPI exposes streaming barchart resources, however, this data is throttled.

All requests are made via HTTPS URIs that represent objects as a hierarchy of resources and/or actions. The data object format is either JSON or XML and is determined by the request's accept header. [Security](../security-overview) is based on the OAuth 2.0 spec and all requests require a user access token be included.

We are currently on Version 2 of the WebAPI - baseurl = [https://api.tradestation.com/v2](https://api.tradestation.com/v2)

Here is a simple example of requesting a list of accounts for a particular user:

### HTTP Request

    GET https://api.tradestation.com/v2/users/testuser/accounts HTTP/1.1
    Authorization: token
    Accept: application/json
    Content-Type: application/x-www-form-urlencoded
    Host: api.tradestation.com

### HTTP Response

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

## Other Notes

* URLs are NOT case sensitive
* All data is assumed to be UTF8 encoded
