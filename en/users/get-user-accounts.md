---
layout: en
title: Get User Accounts
category: users
permalink: accounts/
weight: 1
---

### Summary

Requesting accounts associated to a particular user

### Details

* Method: `GET`
* Path: `/users/{userid}/accounts`
* URI Parameters:

  * {userid}
* Authentication: Requires a valid access token

### Returns

[Account Info](../../objects/account-info) object

### Errors

* `401` | Unauthorized
* `5xx` | Unknown internal service error. [Contact TradeStation](mailto:webapi@tradestation.com)

### Examples

Example Request:

    GET https://api.tradestation.com/users/userid/accounts HTTP/1.1
    Authorization: Bearer Ym5BcWVGVHB5NjNKSkJ2bjFHR0FrMEVYekF0M3VuMlZZ
    Accept: application/JSON
    Host: api.tradestation.com

Example Response: ([Account Info](../../objects/account-info) object details)

    HTTP/1.1 200 OK
    Cache-Control: private
    Content-Length: 205
    Content-Type: application/JSON; charset=utf-8
    Server: Microsoft-IIS/7.5
    X-AspNet-Version: 4.0.30319
    X-Powered-By: ASP.NET
    Date: Thu, 06 Jan 2011 17:21:43 GMT
    
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
    }, {
        "Key": 114278,
        "Name": "FX543061 QA",
        "Type": "X",
        "TypeDescription": "Forex"
    }]