---
layout: en
title: Balances
category: accounts
permalink: balances/
weight: 1
---

### Summary

Requesting balance information for a particular account

### Details

* Method: `GET`
* Path: `/accounts/{accountkey}/balances`
* URI Parameters:

  * {accountkey}
* Authentication: Requires a valid access token

### Returns

* General [Account](../../objects/account) object
* [Account Currency Detail](../../objects/account-currency-detail) object
* [Equity Account](../../objects/equity-account) object if requesting an Equity account
* [Forex Account](../../objects/forex-account) & [Forex Account Currency Detail](../../objects/forex-account-currency-detail) objects if requesting a Forex account
* [Futures Account](../../objects/futures-account) & [Futures Account Currency Detail](../../objects/futures-account-currency-detail) object if requesting a Futures account

### Errors

* `401` | Unauthorized
* `5xx` | Unknown internal service error. [Contact TradeStation](mailto:webapi@tradestation.com)

### Examples

Example Request:

    GET https://api.tradestation.com/accounts/114275/balances HTTP/1.1
    Authorization: Bearer b0R4MHZ5WjhVUVBzQW5wT
    Accept: application/JSON
    Content-Type: application/x-www-form-urlencoded
    Host: api.tradestation.com

Example Response: ([Account](../../objects/account) object details)

    HTTP/1.1 200 OK
    Cache-Control: private
    Content-Length: 1028
    Content-Type: application/json; charset=utf-8
    Server: Microsoft-IIS/7.5
    X-AspNet-Version: 4.0.30319
    X-Powered-By: ASP.NET
    Date: Tue, 31 May 2011 17:27:36 GMT
    
    {
        "BODEquity": 3247154.8600,
        "BODNetCash": 2870974.6200,
        "ClosedPositions": [],
        "Key": 111111,
        "MarketValue": 0,
        "Name": "111111QA",
        "RealTimeAccountBalance": 2870328.5200,
        "RealTimeBuyingPower": 2867875.219800,
        "RealTimeEquity": 3249600.160200,
        "RealTimeRealizedProfitLoss": 0.0000,
        "RealTimeUnrealizedGains": 2445.300200,
        "RealTimeUnrealizedProfitLoss": 19638.14545186560000000000,
        "Status": "A",
        "StatusDescription": "Active",
        "Type": "C",
        "TypeDescription": "Cash",
        "UnclearedDeposit": 0.0000,
        "BODAccountBalance": 2870974.6200,
        "BODDayTradingMarginableEquitiesBuyingPower": 2870328.5200,
        "BODOptionBuyingPower": 2870328.5200,
        "BODOptionValue": 0.0000,
        "BODOvernightBuyingPower": 2870328.5200,
        "CanDayTrade": true,
        "Commission": 0,
        "DayTrades": 7,
        "DayTradingQualified": true,
        "OptionApprovalLevel": 5,
        "PatternDayTrader": false,
        "RealTimeCostOfPositions": 359005.8545,
        "RealTimeDayTradingMarginableEquitiesBuyingPower": 2870326.520000,
        "RealTimeOptionBuyingPower": 2867877.2198,
        "RealTimeOptionValue": 0.0000000000,
        "RealTimeOvernightBuyingPower": 2870326.520000,
        "UnsettledFund": 646.1000
    }