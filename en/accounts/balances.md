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
    
Example Response: ([Futures Account](../../objects/futures-account) object details with [Futures Account Currency Detail](../../objects/futures-account-currency-detail))

    HTTP/1.1 200 OK
    Cache-Control: private
    Content-Length: 1028
    Content-Type: application/json; charset=utf-8
    Server: Microsoft-IIS/7.5
    X-AspNet-Version: 4.0.30319
    X-Powered-By: ASP.NET
    Date: Tue, 31 May 2011 17:27:36 GMT
    
    [{
        "__type": "FuturesAccount:#TradeStation.Web.Services.DataContracts",
        "Alias": "",
        "BODEquity": 5000000.0000,
        "BODNetCash": 5000000.0000,
        "ClosedPositions": [],
        "DisplayName": "5430612 QA",
        "Key": 114277,
        "MarketValue": 70295825.000000000000000,
        "Name": "5430612 QA",
        "RealTimeAccountBalance": 4995774.4804,
        "RealTimeBuyingPower": 3212461.980402,
        "RealTimeEquity": 3212461.98040200000000000000,
        "RealTimeRealizedProfitLoss": -4225.5196,
        "RealTimeUnrealizedGains": -1783312.499998,
        "RealTimeUnrealizedProfitLoss": -1783312.49999800000000000000,
        "Status": "A",
        "StatusDescription": "Active",
        "Type": "F",
        "TypeDescription": "Futures",
        "UnclearedDeposit": 0.0000,
        "BODOpenTradeEquity": 0.0000,
        "Commission": 1343.6000,
        "Currency": "USD",
        "CurrencyDetails": [{
            "BODAccountCashBalance": 0,
            "BODCashBalance": 0.0000,
            "Commission": 0.0000,
            "Currency": "JPY",
            "RealTimeAccountCashBalance": -1806.2892359516153728372377831,
            "RealTimeAccountMarginRequirement": 0,
            "RealTimeAccountRealizedProfitLoss": -1806.2892359516153728372377831,
            "RealTimeAccountUnrealizedProfitLoss": 0,
            "RealTimeCashBalance": -188750.0000,
            "RealTimeRealizedProfitLoss": -188750.0000,
            "RealTimeUnrealizedProfitLoss": 0,
            "ToAccountConversionRate": 0.0095697442964323993262900015,
            "AccountOpenOrderInitMargin": 0,
            "BODAccountOpenTradeEquity": 0,
            "BODAccountSecurities": 0,
            "BODOpenTradeEquity": 0.0000,
            "BODSecurities": 0.0000,
            "OpenOrderInitMargin": 0,
            "RealTimeAccountInitMargin": 0,
            "RealTimeAccountMaintenanceMargin": 0,
            "RealTimeInitMargin": 0,
            "RealTimeMaintenanceMargin": 0,
            "TodayRealTimeUnrealizedProfitLoss": 0.0000
        }, {
            "BODAccountCashBalance": 5000000.0000,
            "BODCashBalance": 5000000.0000,
            "Commission": 1343.6000,
            "Currency": "USD",
            "RealTimeAccountCashBalance": 4997606.4000,
            "RealTimeAccountMarginRequirement": 0.0000,
            "RealTimeAccountRealizedProfitLoss": -2393.6000,
            "RealTimeAccountUnrealizedProfitLoss": -1783312.49999800000000000000,
            "RealTimeCashBalance": 4997606.4000,
            "RealTimeRealizedProfitLoss": -2393.6000,
            "RealTimeUnrealizedProfitLoss": -1783312.49999800000000000000,
            "ToAccountConversionRate": 1,
            "AccountOpenOrderInitMargin": 0,
            "BODAccountOpenTradeEquity": 0.0000,
            "BODAccountSecurities": 0.0000,
            "BODOpenTradeEquity": 0.0000,
            "BODSecurities": 0.0000,
            "OpenOrderInitMargin": 0,
            "RealTimeAccountInitMargin": 2018050.0000,
            "RealTimeAccountMaintenanceMargin": 0,
            "RealTimeInitMargin": 2018050.0000,
            "RealTimeMaintenanceMargin": 1495500.0000,
            "TodayRealTimeUnrealizedProfitLoss": -1783312.49999800000000000000
        }],
        "OpenOrderMargin": 0.000000,
        "RealTimeInitialMargin": 2018050.0000,
        "RealTimeMaintenanceMargin": 1495500.0000,
        "RealTimeTradeEquity": -1783312.499998,
        "SecurityOnDeposit": 0.0000,
        "TodayRealTimeTradeEquity": -1783312.49999800000000000000
    }]
