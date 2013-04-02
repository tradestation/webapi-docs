---
layout: en
title: Quote
category: data
permalink: quote/
weight: 1
---

### Summary

Snapshot quote for the specified symbol(s)

### Details

* Method: `GET`
* Path: `/data/quote/{symbols}?$select={quote fields}`
* URI Parameters:
  * {symbols} = comma separated list of symbols
  * {quote fields} = comma separated list of quote fields
* Query String Parameters:

  * {culture} = `en-US`, `ja-JP`, `ja-kana-JP`
* Authentication: Requires a valid access token
* Returns: [Quote](../../objects/quote) object

### Errors

* `401` | Unauthorized
* `5xx` | Unknown internal service error. [Contact TradeStation](mailto:webapi@tradestation.com)
* An invalid symbol will still result in a `200`, but the ERROR property in the response will be set to: "Error": "FAILED, INVALID SYMBOL"

### Examples

Example Request:

    GET https://api.tradestation.com/v2/Data/Quote/goog,msft HTTP/1.1
    Authorization: Bearer accesstokengoeshere
    Accept: application/JSON
    Content-Type: application/x-www-form-urlencoded
    Host: api.tradestation.com

Example Response: ([Quote](../../objects/quote) object details)

    HTTP/1.1 200 OK
    Cache-Control: private
    Content-Length: 1578
    Content-Type: application/JSON; charset=utf-8
    Server: Microsoft-IIS/7.5
    Access-Control-Allow-Origin: *
    X-AspNet-Version: 4.0.30319
    X-Powered-By: ASP.NET
    Date: Thu, 06 Jan 2011 15:29:52 GMT

    [{
        "Ask": 617.41,
        "AskPriceDisplay": "617.41",
        "AskSize": 100,
        "AssetType": "STOCK",
        "Bid": 617.28,
        "BidPriceDisplay": "617.28",
        "BidSize": 100,
        "CountryCode": "United States",
        "Currency": "USD",
        "Description": "Google Inc Cl A",
        "Error": null,
        "Exchange": "NASDAQ",
        "FractionalDisplay": false,
        "High": 618.43,
        "High52Week": 630.85,
        "High52WeekPriceDisplay": "630.85",
        "HighPriceDisplay": "618.43",
        "Last": 617.36,
        "LastPriceDisplay": "617.36",
        "Low": 610.05,
        "Low52Week": 433.63,
        "Low52WeekPriceDisplay": "433.63",
        "LowPriceDisplay": "610.05",
        "MinMove": 1,
        "NameExt": "",
        "NetChange": 8.29,
        "NetChangePct": 0.0136109150015597550363669201,
        "Open": 610.68,
        "OpenPriceDisplay": "610.68",
        "PointValue": 1,
        "PreviousClose": 609.07,
        "PreviousClosePriceDisplay": "609.07",
        "PreviousVolume": 2532225,
        "StrikePrice": 0,
        "Symbol": "GOOG",
        "SymbolRoot": "GOOG",
        "Volume": 746497
    }, {
        "Ask": 27.98,
        "AskPriceDisplay": "27.98",
        "AskSize": 10800,
        "AssetType": "STOCK",
        "Bid": 27.97,
        "BidPriceDisplay": "27.97",
        "BidSize": 34600,
        "CountryCode": "United States",
        "Currency": "USD",
        "Description": "Microsoft Corp",
        "Error": null,
        "Exchange": "NASDAQ",
        "FractionalDisplay": false,
        "High": 28.1,
        "High52Week": 31.58,
        "High52WeekPriceDisplay": "31.58",
        "HighPriceDisplay": "28.1",
        "Last": 27.98,
        "LastPriceDisplay": "27.98",
        "Low": 27.86,
        "Low52Week": 22.73,
        "Low52WeekPriceDisplay": "22.73",
        "LowPriceDisplay": "27.86",
        "MinMove": 1,
        "NameExt": "",
        "NetChange": -0.02,
        "NetChangePct": -0.0007142857142857142857142857,
        "Open": 28.04,
        "OpenPriceDisplay": "28.04",
        "PointValue": 1,
        "PreviousClose": 28,
        "PreviousClosePriceDisplay": "28",
        "PreviousVolume": 58998239,
        "StrikePrice": null,
        "Symbol": "MSFT",
        "SymbolRoot": "MSFT",
        "Volume": 12690079
    }]
