---
layout: en
title: Get User Positions
category: users
permalink: positions/
weight: 2
---

### Summary

Requesting all the positions for a particular user

### Details

* Method: `GET`
* Path: `/users/{userid}/positions`
* URI Parameters:

  * {userid}
* Authentication: Requires a valid access token.

### Returns

[Positions](../../objects/positions) object

### Errors

* `401` | Unauthorized
* `5xx` | Unknown internal service error. [Contact TradeStation](mailto:webapi@tradestation.com)

### Examples

Example Request:

    GET https://api.tradestation.com/v2/users/userid/positions HTTP/1.1
    Authorization: Bearer Ym5BcWVGVHB5NjNKSkJ2bjFHR0FrMEVYekF0M3VuMlZZ
    Accept: application/JSON
    Host: api.tradestation.com

Example Response:

    HTTP/1.1 200 OK
    Content-Length: 205
    Content-Type: application/JSON; charset=utf-8
    
    [{
        "AccountID": "543061 QA",
        "AskPrice": 42.88,
        "AskPriceDisplay": "42.88",
        "AssetType": "EQ",
        "AveragePrice": 0.7031250000,
        "AveragePriceDisplay": "0.70",
        "BidPrice": 42.61,
        "BidPriceDisplay": "42.61",
        "BigPointValue": 1.0000000000,
        "ContractExpireDate": "1\/1\/0001 12:00:00 AM",
        "ConversionRate": 1,
        "Country": "United States",
        "Currency": "USD",
        "Description": "Agilent Technologies",
        "InitialMargin": 0.0000,
        "Key": 39616253,
        "LastPrice": 42.66,
        "LastPriceDisplay": "42.66",
        "LongShort": "L",
        "MarketValue": 1365120.000000000000,
        "OpenProfitLoss": 1342620.00,
        "OpenProfitLossPercent": 59.6720000000,
        "OpenProfitLossQty": 41.96,
        "Quantity": 32000,
        "SettlePrice": 1.0000000000,
        "StrikePrice": 0.0,
        "StrikePriceDisplay": "0.00",
        "Symbol": "A",
        "TimeStamp": "3\/30\/2011 2:51:49 PM",
        "TotalCost": 22500.0000000000
    }]