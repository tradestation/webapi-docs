---
layout: en
title: Symbol List
category: data
permalink: get-symbol-list/
weight: 5
---

### Summary

Returns a specific Symbol List

### Details

* Method: `GET`
* Path: `/data/symbollists/{symbolList ID}`
* URI Parameters:

  * symbolList ID
* Authentication: Requires at a minimum, Client Level Credentials
* Returns: A [Symbol List](../../objects/symbol-list) object

### Errors

* `401` | Unauthorized
* `400` | Bad Request
* `5xx` | Unknown internal service error. [Contact TradeStation](mailto:webapi@tradestation.com)

### Examples

Example Request:

    GET http://api.tradestation.com/data/symbollists/_CHMMFG HTTP/1.0
    Authorization: TXYxdThoa2ppSFlTQ05G
    Accept: application/json
    Host: api.tradestation.com

Example Response: ([Symbol List](../../objects/symbol-list))

    HTTP/1.1 200 OK
    Cache-Control: private
    Content-Length: 260
    Content-Type: application/json; charset=utf-8
    Server: Microsoft-IIS/7.5
    X-AspNet-Version: 4.0.30319
    X-Powered-By: ASP.NET
    Date: Mon, 12 Dec 2011 15:52:07 GMT
    Connection: close

    {
        "Category": "Index Components",
        "ID": "$BUX.X",
        "Name": "B2B Internet  HOLDRS (3)",
        "Path": "\/TradeStation Symbol Lists\/Index Components\/AMEX HOLDRS Indexes\/B2B Internet  HOLDRS (3)",
        "RootCategory": "TradeStation Symbol Lists",
        "Subcategory": "AMEX HOLDRS Indexes"
    }
