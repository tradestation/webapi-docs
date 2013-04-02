---
layout: en
title: Positions
category: accounts
permalink: positions/
weight: 2
---

### Summary

Requesting position information for a particular account

### Details

* Method: `GET`
* Path: `/accounts/{accountkey}/positions`
* URI Parameters:

  * {accountkey}
* Authentication: Requires a valid access token

### Returns

[Position](../../objects/position) object

### Retults Filter

This endpoint accomodates the [Open Data Protocol](http://www.odata.org/developers/protocols/uri-conventions#FilterSystemQueryOption) which can be used to filter responses.

Example positions request that filters results in symbol = AAPL

    /v2/accounts/123456/positions?oauth_token=accessTokenGoesHere&$filter=symbol%20eq%20'AAPL'

### Errors

* `401` | Unauthorized
* `5xx` | Unknown internal service error. [Contact TradeStation](mailto:webapi@tradestation.com)

### Examples

Example Request:

    GET https://api.tradestation.com/accounts/114275/positions HTTP/1.1
    Authorization: Bearer b0R4MHZ5WjhVUVBzQW5w
    Accept: application/JSON
    Content-Type: application/x-www-form-urlencoded
    Host: api.tradestation.com

Example Response ([Position](../../objects/position) object details):

    HTTP/1.1 200 OK
    Cache-Control: private
    Content-Length: 7358
    Content-Type: application/JSON; charset=utf-8
    Server: Microsoft-IIS/7.5
    X-AspNet-Version: 4.0.30319
    X-Powered-By: ASP.NET
    Date: Wed, 05 Jan 2011 18:18:32 GMT
    
    [{
        "AccountID": "543061 QA",
        "AskPrice": 36.96,
        "AskPriceDisplay": "36.96",
        "AssetType": "EQ",
        "AveragePrice": 45.0000000000,
        "AveragePriceDisplay": "45.00",
        "BidPrice": 35.66,
        "BidPriceDisplay": "35.66",
        "BigPointValue": 1.0000000000,
        "ContractExpireDate": "1\/1\/0001 12:00:00 AM",
        "ConversionRate": 1,
        "Country": "United States",
        "Currency": "USD",
        "Description": "Agilent Technologies",
        "InitialMargin": 0.0000,
        "Key": 39616253,
        "LastPrice": 36.2000000000,
        "LastPriceDisplay": "36.2",
        "LongShort": "L",
        "MarketValue": 18100.00000000000,
        "OpenProfitLoss": -4400.00,
        "OpenProfitLossQty": -8.80,
        "Quantity": 500,
        "SettlePrice": 1.0000000000,
        "StrikePrice": 0,
        "StrikePriceDisplay": "0",
        "Symbol": "A",
        "TimeStamp": "3\/30\/2011 2:51:49 PM"
    }, {
        "AccountID": "543061 QA",
        "AskPrice": 5.11,
        "AskPriceDisplay": "5.11",
        "AssetType": "EQ",
        "AveragePrice": 7.5332084153,
        "AveragePriceDisplay": "7.53",
        "BidPrice": 4.48,
        "BidPriceDisplay": "4.48",
        "BigPointValue": 1.0000000000,
        "ContractExpireDate": "1\/1\/0001 12:00:00 AM",
        "ConversionRate": 1,
        "Country": "United States",
        "Currency": "USD",
        "Description": "Aegon N.V. Ord",
        "InitialMargin": 0.0000,
        "Key": 39616535,
        "LastPrice": 0,
        "LastPriceDisplay": "4.9",
        "LongShort": "L",
        "MarketValue": 2092.30000000000,
        "OpenProfitLoss": -1124.38,
        "OpenProfitLossQty": -2.63,
        "Quantity": 427,
        "SettlePrice": 1.0000000000,
        "StrikePrice": 0,
        "StrikePriceDisplay": "0",
        "Symbol": "AEG",
        "TimeStamp": "4\/20\/2011 8:10:31 PM"
    }]