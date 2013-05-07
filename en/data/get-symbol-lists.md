---
layout: en
title: Symbol Lists
category: data
permalink: get-symbol-lists/
weight: 6
---

### Summary

Returns a list of all Symbol Lists

### Details

* Method: `GET`
* Path: `/data/symbollists/`
* URI Parameters: 

  * None
* Authentication: Requires at a minimum, Client Level Credentials
* Returns: A collection of [Symbol List](../../objects/symbol-list) objects

### Errors

* `401` | Unauthorized
* `400` | Bad Request
* `5xx` | Unknown internal service error. [Contact TradeStation](mailto:webapi@tradestation.com)


### Examples

Example Request:

    GET http://api.tradestation.com/v2/data/symbollists HTTP/1.0
    Authorization: Bearer accesstokengoeshere
    Accept: application/json
    Host: api.tradestation.com

Example Response: ([Symbol List](../../objects/symbol-list))

    HTTP/1.1 200 OK
    Cache-Control: private
    Content-Length: 94333
    Content-Type: application/json; charset=utf-8
    Server: Microsoft-IIS/7.5
    X-AspNet-Version: 4.0.30319
    X-Powered-By: ASP.NET
    Date: Mon, 12 Dec 2011 15:52:07 GMT
    Connection: close

    [{
        "Category": "Index Components",
        "ID": "$BUX.X",
        "Name": "B2B Internet  HOLDRS (3)",
        "Path": "\/TradeStation Symbol Lists\/Index Components\/AMEX HOLDRS Indexes\/B2B Internet  HOLDRS (3)",
        "RootCategory": "TradeStation Symbol Lists",
        "Subcategory": "AMEX HOLDRS Indexes"
    }, {
        "Category": "Index Components",
        "ID": "$IBH.X",
        "Name": "Biotech HOLDRS (16)",
        "Path": "\/TradeStation Symbol Lists\/Index Components\/AMEX HOLDRS Indexes\/Biotech HOLDRS (16)",
        "RootCategory": "TradeStation Symbol Lists",
        "Subcategory": "AMEX HOLDRS Indexes"
    }]
