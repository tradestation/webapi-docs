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

[Quote](../../objects/quote) object

### Errors

* `401` | Unauthorized
* `5xx` | Unknown internal service error. [Contact TradeStation](mailto:webapi@tradestation.com)
* An invalid symbol will still result in a `200`, however the ERROR property in the response will be set to: "Error":"FAILED, INVALID SYMBOL"

### Examples

Example Request:

    GET https://api.tradestation.com/v2/stream/quote/snapshots/yhoo,msft HTTP/1.1
    Authorization: Bearer accesstokengoeshere
    Accept: application/json

Example Response:

    HTTP/1.1 200 OK
    Transfer-Encoding: chunked
    Content-Type: text/plain
    
    {
        "Symbol": "YHOO",
        "SymbolRoot": "YHOO",
        "Description": "Yahoo Inc",
        "AssetType": "STOCK",
        "Exchange": "NASDAQ",
        "FractionalDisplay": false,
        "DisplayType": 3,
        "Open": 26.6,
        "OpenPriceDisplay": "26.60",
        "High": 26.78,
        "HighPriceDisplay": "26.78",
        "Low": 26.36,
        "LowPriceDisplay": "26.36",
        "PreviousClose": 26.66,
        "PreviousClosePriceDisplay": "26.66",
        "Last": 26.56,
        "LastPriceDisplay": "26.56",
        "Ask": 26.57,
        "AskPriceDisplay": "26.57",
        "AskSize": 2700,
        "Bid": 26.56,
        "BidPriceDisplay": "26.56",
        "BidSize": 1900,
        "NetChange": -0.10,
        "NetChangePct": -0.3750937734433608402100525131,
        "High52Week": 27.68,
        "High52WeekPriceDisplay": "27.68",
        "Low52Week": 14.59,
        "Low52WeekPriceDisplay": "14.59",
        "Volume": 5715465,
        "PreviousVolume": 9711376,
        "Currency": "USD",
        "CountryCode": "United States",
        "StrikePrice": 0.0,
        "StrikePriceDisplay": "0.00",
        "NameExt": "",
        "MinMove": 1.0,
        "PointValue": 1.0,
        "Close": 26.56,
        "ClosePriceDisplay": "26.56",
        "Error": null,
        "DailyOpenInterest": 0,
        "IsDelayed": false
    }
    {
        "Symbol": "MSFT",
        "SymbolRoot": "MSFT",
        "Description": "Microsoft Corp",
        "AssetType": "STOCK",
        "Exchange": "NASDAQ",
        "FractionalDisplay": false,
        "DisplayType": 3,
        "Open": 0.0,
        "OpenPriceDisplay": "0.00",
        "High": 0.0,
        "HighPriceDisplay": "0.00",
        "Low": 0.0,
        "LowPriceDisplay": "0.00",
        "PreviousClose": 34.98,
        "PreviousClosePriceDisplay": "34.98",
        "Last": 34.97,
        "LastPriceDisplay": "34.97",
        "Ask": 34.93,
        "AskPriceDisplay": "34.93",
        "AskSize": 2800,
        "Bid": 34.92,
        "BidPriceDisplay": "34.92",
        "BidSize": 4000,
        "NetChange": -0.01,
        "NetChangePct": -0.0285877644368210405946255003,
        "High52Week": 35.78,
        "High52WeekPriceDisplay": "35.78",
        "Low52Week": 26.26,
        "Low52WeekPriceDisplay": "26.26",
        "Volume": 12505562,
        "PreviousVolume": 28622929,
        "Currency": "USD",
        "CountryCode": "United States",
        "StrikePrice": 0.0,
        "StrikePriceDisplay": "0.00",
        "NameExt": "",
        "MinMove": 1.0,
        "PointValue": 1.0,
        "Close": 34.97,
        "ClosePriceDisplay": "34.97",
        "Error": null,
        "DailyOpenInterest": 0,
        "IsDelayed": false
    }
    {
        "Symbol": "MSFT",
        "SymbolRoot": "MSFT",
        "Description": "Microsoft Corp",
        "AssetType": "STOCK",
        "Exchange": "NASDAQ",
        "FractionalDisplay": false,
        "DisplayType": 3,
        "Open": 0.0,
        "OpenPriceDisplay": "0.00",
        "High": 0.0,
        "HighPriceDisplay": "0.00",
        "Low": 0.0,
        "LowPriceDisplay": "0.00",
        "PreviousClose": 34.98,
        "PreviousClosePriceDisplay": "34.98",
        "Last": 34.9701,
        "LastPriceDisplay": "34.97",
        "Ask": 34.93,
        "AskPriceDisplay": "34.93",
        "AskSize": 2800,
        "Bid": 34.92,
        "BidPriceDisplay": "34.92",
        "BidSize": 3800,
        "NetChange": -0.0099,
        "NetChangePct": -0.0283018867924528301886792453,
        "High52Week": 35.78,
        "High52WeekPriceDisplay": "35.78",
        "Low52Week": 26.26,
        "Low52WeekPriceDisplay": "26.26",
        "Volume": 15696341,
        "PreviousVolume": 28622929,
        "Currency": "USD",
        "CountryCode": "United States",
        "StrikePrice": 0.0,
        "StrikePriceDisplay": "0.00",
        "NameExt": "",
        "MinMove": 1.0,
        "PointValue": 1.0,
        "Close": 34.9701,
        "ClosePriceDisplay": "34.97",
        "Error": null,
        "DailyOpenInterest": 0,
        "IsDelayed": false
    }