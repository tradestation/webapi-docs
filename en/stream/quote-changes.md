---
layout: en
title: Quotes/Changes
category: stream
permalink: quote-changes/
weight: 1
---

### Summary

Streams quote changes for a list of symbols. The first events that come across per symbol will be a quote snapshot.

### Details

* Method: `GET`
* Path: `/stream/quote/changes/{symbols}`
* URI Parameters:

  * {symbols} Comma separated list of symbols
* Authentication: Requires a valid access token

### Returns

`Quote` object

### Errors

* `401` | Unauthorized
* `5xx` | Unknown internal service error. [Contact TradeStation](mailto:webapi@tradestation.com)
* An invalid symbol will still result in a `200`, however the ERROR property in the response will be set to: "Error":"FAILED, INVALID SYMBOL"

### Examples

Example Request:

    GET https://api.tradestation.com/v2/stream/quote/changes/yhoo HTTP/1.1
    Authorization: Bearer accesstokengoeshere

Example Response:

    HTTP/1.1 200 OK
    Transfer-Encoding: chunked
    Content-Type: text/plain

    {
        "Symbol": "YHOO",
        "ForexWinFactor": 1.0,
        "ForexLoseFactor": 1.0,
        "Description": "Yahoo Inc",
        "Category": 2,
        "Last": 14.92,
        "PreviousClose": 14.86,
        "Exchange": "NASDAQ",
        "High": 15.1,
        "Low": 14.87,
        "Open": 15.01,
        "Volume": 14439320,
        "BidSize": 13500,
        "AskSize": 33500,
        "High52Week": 18.84,
        "Low52Week": 12.94,
        "CurrencyCode": 1,
        "StrikePrice": 0.0,
        "SymbolRoot": "YHOO",
        "ContractExpireDate": 0,
        "ExchangeID": 122,
        "DisplayType": 3,
        "PointValue": 1.0,
        "MinMove": 1.0,
        "PreviousVolume": 22793682,
        "NameExt": "",
        "Bid": 14.91,
        "Ask": 14.92,
        "CountryCode": "United States"
    }
                                                                                                                    
    {
        "Symbol": "YHOO",
        "AskSize": 33600
    }
        
    {
        "Symbol": "YHOO",
        "AskSize": 34400
    }
                
    {
        "Symbol": "YHOO",
        "BidSize": 13700
    }
                        
    {
        "Symbol": "YHOO",
        "AskSize": 34800
    }
                                
    {
        "Symbol": "YHOO",
        "BidSize": 14500,
        "AskSize": 35000
    }
                                            
    {
        "Symbol": "YHOO",
        "BidSize": 16200,
        "AskSize": 32500
    }
                                                        
    {
        "Symbol": "YHOO",
        "BidSize": 16400
    }
