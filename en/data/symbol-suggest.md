---
layout: en
title: Symbol Suggest
category: data
permalink: symbol-suggest/
weight: 7
---

### Summary

Returns a list of symbol objects that have a symbol name or a description that contains a word that starts with the provided input

### Details

* Method: `GET`
* Path: `/data/symbols/suggest/{suggestText}`
* URI Parameters:

  * {suggestText} = search text
* Query String Parameters:

  * Culture

    * ja-jp
* Authentication: Requires a valid access token

### Returns

A collection of [Symbol](../../objects/symbol) objects

### Results Filter

This endpoint accommodates a subset of the [Open Data Protocol](http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html#_Toc406398094) which can be used with the $top and $filter querystring parameters to filter responses.

Example symbols suggest request that filters result set to the top 20 where Country = United States and Category = Stock.

    https://api.tradestation.com/v2/data/symbols/suggest/G?$top=20&$filter=Country%20eq%20'United%20States'&$filter=Category%20eq%20'Stock'

### Errors

* `401` | Unauthorized
* `5xx` | Unknown internal service error. [Contact TradeStation](mailto:webapi@tradestation.com)

### Examples

Request:

    GET https://api.tradestation.com/v2/data/symbols/suggest/msf HTTP/1.1
    Authorization: Bearer T1dEaXUwTGgxZEw
    Host: api.tradestation.com
    Content-Length: 0
    Content-Type: application/json

Response:

    HTTP/1.1 200 OK
    Content-Length: 2245
    Content-Type: application/json

    [{
        "Category": 2,
        "Country": "United States",
        "Currency": 1,
        "Description": "Morgan Stan Emerging Mkt",
        "Error": null,
        "Exchange": "NYSE",
        "ExpirationDate": "\/Date(-62135578800000-0500)\/",
        "FutureType": 0,
        "Name": "MSF",
        "OptionType": 0,
        "Root": "MSF",
        "StrikePrice": 0
    }, {
        "Category": 2,
        "Country": "United States",
        "Currency": 1,
        "Description": "Medical Safetec Inc",
        "Error": null,
        "Exchange": "OTC",
        "ExpirationDate": "\/Date(-62135578800000-0500)\/",
        "FutureType": 0,
        "Name": "MSFC",
        "OptionType": 0,
        "Root": "MSFC",
        "StrikePrice": 0
    }]
