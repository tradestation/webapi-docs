---
layout: en
title: Get Symbol
category: data
permalink: get-symbol/
weight: 3
---

### Summary

Request symbol information for a given symbol

### Details

* Method: `GET`
* Path: `/data/symbol/{symbol}`
* URI Parameters:

  * {symbol} = symbol
* Authentication: Requires a valid access token
* Returns: [Symbol](../../objects/symbol) object

### Errors

* `401` | Unauthorized
* `5xx` | Unknown internal service error. [Contact TradeStation](mailto:webapi@tradestation.com)
* `404` | Invalid Symbol

### Examples

Example Request:

    GET https://api.tradestation.com/data/symbol/msft HTTP/1.1
    Authorization: Bearer accesstokengoeshere
    Accept: application/JSON
    Host: api.tradestation.com

Example Response: ([Symbol](../../objects/symbol))

    HTTP/1.1 200 OK

    [{
        "Category": "Stock",
        "Country": "United States",
        "Currency": "USD",
        "Description": "Microsoft Corp",
        "Error": null,
        "Exchange": "NASDAQ",
        "ExchangeID": 122,
        "ExpirationDate": "\/Date(-62135575200000)\/",
        "FutureType": "None",
        "MinMove": 0,
        "Name": "MSFT",
        "OptionType": "NA",
        "PointValue": 0,
        "Root": "MSFT",
        "StrikePrice": 0
    }]
