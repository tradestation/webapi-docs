---
layout: en
title: Orders
category: accounts
permalink: orders/
weight: 3
---

### Summary

Requesting order information for a particular account

### Details

* Method: `GET`
* To request orders that are currently open and/or were created or executed today
  * Path `/accounts/{accountkey}/orders`
  * Path `/accounts/{accountkey1,accountkey2,etc}/orders`
* To request orders that were made since a given date, max of 30 days back.
  * Path `/accounts/{accountkey}/orders?since={date}`
  * Path `/accounts/{accountkey1,accountkey2,etc}/orders?since={date}`
* URI Parameters:
  * `{accountkey}`
  * `{date, MM-DD-YYYY}` = since date of when orders were placed
* Authentication: Requires a valid access token.

### Returns

List of [Order Detail](../../objects/order-detail) object

### Results Filter

This endpoint accomodates the [Open Data Protocol](http://www.odata.org/developers/protocols/uri-conventions#FilterSystemQueryOption) which can be used to filter responses.

Example orders request that filters results for symbol = AAPL

    /v2/accounts/123456/orders?oauth_token=accessTokenGoesHere&$filter=symbol%20eq%20'AAPL'

### Errors

* `401` | Unauthorized
* `5xx` | Unknown internal service error. [Contact TradeStation](mailto:webapi@tradestation.com)

### Examples

Example Request:

    GET https://api.tradestation.com/v2/accounts/123145/orders HTTP/1.1
    Authorization: Bearer b0R4MHZ5WjhVUVBzQW5
    Accept: application/JSON
    Content-Type: application/x-www-form-urlencoded
    Host: api.tradestation.com
    
Example Response ([Order Detail](../../objects/order-detail) object details)

    HTTP/1.1 200 OK
    Cache-Control: private
    Content-Length: 1029
    Content-Type: application/JSON; charset=utf-8
    Server: Microsoft-IIS/7.5
    X-AspNet-Version: 4.0.30319
    X-Powered-By: ASP.NET
    Date: Wed, 05 Jan 2011 18:11:17 GMT
    
    [{
        "AccountID": "QA",
        "AdvancedOptions": "",
        "AssetType": "OP",
        "CommissionFee": 0.0000,
        "ContractExpireDate": "8\/20\/2011 12:00:00 AM",
        "ConversionRate": 0,
        "Country": null,
        "Denomination": "",
        "Duration": "DAY",
        "ExecuteQuantity": 0,
        "FilledCanceled": "",
        "FilledPriceText": "0.0000000000",
        "GroupName": "",
        "Legs": [{
            "Ask": 2.6300000000,
            "BaseSymbol": "MSFT",
            "Bid": 2.5900000000,
            "ExecPrice": 0.0000000000,
            "ExecQuantity": 0,
            "ExpireDate": "8\/20\/2011 12:00:00 AM",
            "Leaves": 1,
            "LegNumber": 1,
            "LimitPrice": 2.5800000000,
            "LimitPriceDisplay": "2.5800000000",
            "Month": 8,
            "OpenOrClose": "O",
            "OrderID": 207885336,
            "OrderType": 0,
            "OrderTypeDescription": "Limit",
            "PointValue": 100.0000000000,
            "PriceUsedForBuyingPower": 2.5800000000,
            "PutOrCall": "C",
            "Quantity": 5,
            "Side": "B",
            "StopPrice": 0,
            "StopPriceDisplay": "0",
            "StrikePrice": 24.0000000000,
            "Symbol": "MSFT 110820C24",
            "TimeExecuted": "1\/1\/0001 12:00:00 AM",
            "Year": 2011
        }],
        "LimitPriceText": "2.5800000000",
        "OrderID": 207885336,
        "Originator": 543061,
        "Quantity": 5,
        "QuantityLeft": 5,
        "Routing": "Intelligent",
        "Spread": "",
        "Status": "ACK",
        "StopPriceText": "0",
        "Symbol": "MSFT 110820C24",
        "TimeStamp": "8\/3\/2011 2:40:42 PM",
        "TriggeredBy": "",
        "Type": "Buy to Open"
    }, {
        "AccountID": "QA",
        "AdvancedOptions": "",
        "AssetType": "EQ",
        "CommissionFee": 1.0000,
        "ContractExpireDate": "",
        "ConversionRate": 0,
        "Country": null,
        "Denomination": "",
        "Duration": "DAY+",
        "ExecuteQuantity": 10,
        "FilledCanceled": "8\/3\/2011 2:04:20 PM",
        "FilledPriceText": "1.6300000000",
        "GroupName": "",
        "Legs": [{
            "Ask": 1.6300000000,
            "BaseSymbol": "",
            "Bid": 1.6200000000,
            "ExecPrice": 1.6300000000,
            "ExecQuantity": 10,
            "ExpireDate": "",
            "Leaves": 1,
            "LegNumber": 1,
            "LimitPrice": 10.0000000000,
            "LimitPriceDisplay": "10.0000000000",
            "Month": 0,
            "OpenOrClose": "O",
            "OrderID": 207885335,
            "OrderType": 0,
            "OrderTypeDescription": "Limit",
            "PointValue": 1.0000000000,
            "PriceUsedForBuyingPower": 10.0000000000,
            "PutOrCall": "",
            "Quantity": 10,
            "Side": "B",
            "StopPrice": 0,
            "StopPriceDisplay": "0",
            "StrikePrice": 0,
            "Symbol": "ARNA",
            "TimeExecuted": "8\/3\/2011 2:04:20 PM",
            "Year": 0
        }],
        "LimitPriceText": "10.0000000000",
        "OrderID": 207885335,
        "Originator": 543061,
        "Quantity": 10,
        "QuantityLeft": 0,
        "Routing": "Intelligent",
        "Spread": "",
        "Status": "FLL",
        "StopPriceText": "0",
        "Symbol": "ARNA",
        "TimeStamp": "8\/3\/2011 2:02:10 PM",
        "TriggeredBy": "",
        "Type": "Buy"
    }]

### Possible Order States

* OPN, ACK, UCN = Open Orders
* FLL, FLP = Filled Orders
* FPR = Partially Filled Orders
* OUT = Canceled Orders
* REJ, TSC = Rejected Orders
* EXP = Expired Orders
* BRO = Broken Orders
* CAN = Exch. Canceled Orders
* LAT = Too Late Orders
* DON = Queued Orders
