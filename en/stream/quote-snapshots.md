---
layout: en
title: Quote/Snapshots
category: stream
permalink: quote-snapshots/
weight: 2
---

### Summary

Streams full quotes for a list of symbols

### Details

* Method: `GET`
* Path: `/stream/quote/snapshots/{symbols}`
* URI Parameters:

  * {symbols}
* Authentication: Requires a valid access token

### Returns

`Quote` object

### Errors

* `401` | Unauthorized
* `5xx` | Unknown internal service error. [Contact TradeStation](mailto:webapi@tradestation.com)
* An invalid symbol will still result in a `200`, however the ERROR property in the resonse will be set to: "Error":"FAILED, INVALID SYMBOL"

### Examples

Example Request

    GET https://api.tradestation.com/v2/stream/quote/snapshots/yhoo, msft HTTP/1.1
    Authorization: Beraer accesstokengoeshere
    Accept: application/JSON

Example Response:

    HTTP/1.1 200 OK
    Transfer-Encoding: chunked
    Content-Type: text/plain
    
    33a
    {
        "Symbol": "YHOO",
        "SymbolRoot": "YHOO",
        "Description": "Yahoo Inc",
        "AssetType": "STOCK",
        "Exchange": "NASDAQ",
        "FractionalDisplay": false,
        "DisplayType": 3,
        "Open": 15.01,
        "OpenPriceDisplay": "15.01",
        "High": 15.1,
        "HighPriceDisplay": "15.1",
        "Low": 14.87,
        "LowPriceDisplay": "14.87",
        "PreviousClose": 14.86,
        "PreviousClosePriceDisplay": "14.86",
        "Last": 14.875,
        "LastPriceDisplay": "14.875",
        "Ask": 14.88,
        "AskPriceDisplay": "14.88",
        "AskSize": 44900,
        "Bid": 14.87,
        "BidPriceDisplay": "14.87",
        "BidSize": 20400,
        "NetChange": 0.015,
        "NetChangePct": 0.0010094212651413189771197847,
        "High52Week": 18.84,
        "High52WeekPriceDisplay": "18.84",
        "Low52Week": 12.94,
        "Low52WeekPriceDisplay": "12.94",
        "Volume": 13950256,
        "PreviousVolume": 22793682,
        "Currency": "USD",
        "CountryCode": "United States",
        "StrikePrice": 0.0,
        "StrikePriceDisplay": "0",
        "NameExt": "",
        "MinMove": 1.0,
        "PointValue": 1.0,
        "Error": null
    }
    2
    
    33a
    {
        "Symbol": "YHOO",
        "SymbolRoot": "YHOO",
        "Description": "Yahoo Inc",
        "AssetType": "STOCK",
        "Exchange": "NASDAQ",
        "FractionalDisplay": false,
        "DisplayType": 3,
        "Open": 15.01,
        "OpenPriceDisplay": "15.01",
        "High": 15.1,
        "HighPriceDisplay": "15.1",
        "Low": 14.87,
        "LowPriceDisplay": "14.87",
        "PreviousClose": 14.86,
        "PreviousClosePriceDisplay": "14.86",
        "Last": 14.875,
        "LastPriceDisplay": "14.875",
        "Ask": 14.88,
        "AskPriceDisplay": "14.88",
        "AskSize": 44900,
        "Bid": 14.87,
        "BidPriceDisplay": "14.87",
        "BidSize": 20300,
        "NetChange": 0.015,
        "NetChangePct": 0.0010094212651413189771197847,
        "High52Week": 18.84,
        "High52WeekPriceDisplay": "18.84",
        "Low52Week": 12.94,
        "Low52WeekPriceDisplay": "12.94",
        "Volume": 13950256,
        "PreviousVolume": 22793682,
        "Currency": "USD",
        "CountryCode": "United States",
        "StrikePrice": 0.0,
        "StrikePriceDisplay": "0",
        "NameExt": "",
        "MinMove": 1.0,
        "PointValue": 1.0,
        "Error": null
    }
    2
    
    337
    {
        "Symbol": "YHOO",
        "SymbolRoot": "YHOO",
        "Description": "Yahoo Inc",
        "AssetType": "STOCK",
        "Exchange": "NASDAQ",
        "FractionalDisplay": false,
        "DisplayType": 3,
        "Open": 15.01,
        "OpenPriceDisplay": "15.01",
        "High": 15.1,
        "HighPriceDisplay": "15.1",
        "Low": 14.87,
        "LowPriceDisplay": "14.87",
        "PreviousClose": 14.86,
        "PreviousClosePriceDisplay": "14.86",
        "Last": 14.88,
        "LastPriceDisplay": "14.88",
        "Ask": 14.88,
        "AskPriceDisplay": "14.88",
        "AskSize": 44900,
        "Bid": 14.87,
        "BidPriceDisplay": "14.87",
        "BidSize": 20300,
        "NetChange": 0.02,
        "NetChangePct": 0.0013458950201884253028263795,
        "High52Week": 18.84,
        "High52WeekPriceDisplay": "18.84",
        "Low52Week": 12.94,
        "Low52WeekPriceDisplay": "12.94",
        "Volume": 13950356,
        "PreviousVolume": 22793682,
        "Currency": "USD",
        "CountryCode": "United States",
        "StrikePrice": 0.0,
        "StrikePriceDisplay": "0",
        "NameExt": "",
        "MinMove": 1.0,
        "PointValue": 1.0,
        "Error": null
    }
    2
