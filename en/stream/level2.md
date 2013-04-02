---
layout: en
title: Level2
category: stream
permalink: level2/
weight: 5
---

### Summary

Streams Level 2 data for a given symbol

### Details

* Method: `GET`
* Path: `/stream/level2/{symbol}`
* URI Parameters:

  * {symbol}
* QueryString Parameters:
  * aggregate = {bool} - Combines quotes at the same price level by ECN
  * include = {bool} - Include NASDAQ Level II (or TotalView)/NYSE Market Depth with ECN Books
  * books = {ARCA, BATS, BATY, BOSX, BTRD, EDGA, EDGX}

### Returns

[Level2](../../objects/level2) object

### Errors

* `401` | Unauthorized
* `5xx` | Unknown internal service error. [Contact TradeStation](mailto:webapi@tradestation.com)

### Examples

Example Request:

    GET https://api.tradestation.com/v2/stream/level2/eurusd HTTP/1.1
    Authorization: Bearer b0R4MHZ5WjhVUVBzQW5wT

Example Response:

    HTTP/1.1 200 OK
    Cache-Control: private
    Transfer-Encoding: chunked
    Content-Type: text/plain
    Date: Tue, 05 Jun 2012 20:54:21 GMT

    a1
    {
        "ID": "65537",
        "ReferenceNumber": "",
        "Name": "FOREX",
        "Type": "Bid",
        "Size": 2000000,
        "Price": 1.24504,
        "DateTime": "\/Date(4178984053000-0500)\/",
        "Depth": 1,
        "Status": "New"
    }
    2

    a1
    {
        "ID": "65538",
        "ReferenceNumber": "",
        "Name": "FOREX",
        "Type": "Bid",
        "Size": 1300000,
        "Price": 1.24502,
        "DateTime": "\/Date(4178984053000-0500)\/",
        "Depth": 1,
        "Status": "New"
    }
    2

    a1
    {
        "ID": "65536",
        "ReferenceNumber": "",
        "Name": "FOREX",
        "Type": "Bid",
        "Size": 4500000,
        "Price": 1.24501,
        "DateTime": "\/Date(4178984053000-0500)\/",
        "Depth": 1,
        "Status": "New"
    }
    2