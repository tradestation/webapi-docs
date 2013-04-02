---
layout: en
title: Symbol List Symbols
category: data
permalink: get-symbols-in-a-symbol-list/
weight: 4
---

### Summary

Returns the symbols in a specific Symbol List. The first record returned contains the id of the Symbol List in the Name field

### Details

* Method: `GET`
* Path: `/data/symbollists/{symbolList ID}/symbols`
* URI Parameters:

  * symbolList ID
* Authentication: Requires at a minimum, Client Level Credentials
* Returns: A collection of [Symbol Info](../../objects/symbol-info) objects

### Errors

* `401` | Unauthorized
* `400` | Bad Request
* `5xx` | Unknown internal service error. [Contact TradeStation](mailto:webapi@tradestation.com)

### Examples

Example Request:

    GET http://api.tradestation.com/data/symbollists/$BUX.X/symbols HTTP/1.0
    Authorization: TXYxdThoa2ppSFlTQ05G
    Accept: application/json
    Host: api.tradestation.com

Example Response: ([Symbol Info](../../objects/symbol-info))

    HTTP/1.1 200 OK
    Cache-Control: private
    Content-Length: 178
    Content-Type: application/json; charset=utf-8
    Server: Microsoft-IIS/7.5
    X-AspNet-Version: 4.0.30319
    X-Powered-By: ASP.NET
    Date: Mon, 12 Dec 2011 17:15:43 GMT
    Connection: close

    [{
        "Description": "",
        "Exchange": "",
        "Name": "$BUX.X"
    }, {
        "Description": "Ariba Inc",
        "Exchange": "NASDQ",
        "Name": "ARBA"
    }, {
        "Description": "ICG Group, Inc.",
        "Exchange": "NASDQ",
        "Name": "ICGE"
    }]
