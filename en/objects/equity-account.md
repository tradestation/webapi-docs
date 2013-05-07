---
layout: en
title: Equity Account
category: objects
permalink: equity-account/
---

[See fields common among all account types.](../account/)

| Field | Type | Description |
| ----- | ---- | ----------- |
| BODAccountBalance | decimal | Net Worth |
| BODDayTradingMarginableEquitiesBuyingPower | decimal | BOD DayTrading Marginable Equities Buying Power |
| BODOptionBuyingPower | decimal | *BOD Option Buying Power* - Beginning of day option buying power for the account |
| BODOptionValue | decimal | *BOD Liquidation Value of Options* - Market value of the options positions marked to the previous day’s end–of-day quote |
| BODOvernightBuyingPower | decimal | *BOD Overnight Marginable Equities Buying Power* - Beginning of day overnight buying power for the account |
| CanDayTrade | bool | true, false |
| Commission | decimal | Brokerage commission cost and routing fees (if applicable) for a trade based on the number of shares or contracts |
| DayTrades | integer | Number of day trades in an account for the previous 4 trading days |
| DayTradingQualified | bool | Indicates whether an account is day trading qualified. true, false |
| OptionApprovalLevel | integer | Option entitlement level that the account is approved for. |
| PatternDayTrader | bool | Indicates whether an account is a pattern day trader or not. true, false |
| RealTimeCostOfPositions | decimal | *Intraday Cost of Positions* - Real-time cost of positions |
| RealTimeDayTradingMarginableEquitiesBuyingPower | decimal | Intraday Buying Power (Day Trading Rule 431). Value is calculated by taking the beginning of day Intraday Buying Power plus proceeds from any intraday positions closed today (excluding any realized gains) divided by margin requirement minus any currently used buying power minus net unrealized loss being carried. |
| RealTimeOptionBuyingPower | decimal | *Intraday Option Buying Power* - Real-time options buying power calculation. The options buying power is based on the real-time calculation of Reg T excess. |
| RealTimeOvernightBuyingPower | decimal | *Intraday Overnight Marginable Equities Buying Power* - Real-time calculation for the account’s overnight buying power. |
| RealTimeOptionValue | decimal | Real-time value of the options positions marked to the current quote |
| UnsettledFund | decimal | Funds that are held on sales in cash accounts. Updates on sale transactions |