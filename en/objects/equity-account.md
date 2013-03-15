---
layout: en
title: Equity Account
category: objects
permalink: equity-account/
---

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

### Fields common among all account types


| Field | Type | Description |
| ----- | ---- | ----------- |
| BODEquity | decimal | *BOD Account Net Worth* - Account's net worth at the beginning of the day . The account’s net worth (known internally as 'Net Equity') includes the account’s balance, the market value of the equities positions and options positions marked to the previous day's end–of-day quote. |
| BODNetCash | decimal | *BOD Account Balance* - Account balance at the beginning of the day |
| Key | integer | Account Identifier |
| ClosedPositions | `TodaysClosedPositions` | Data object that describes positions that were closed today |
| MarketValue | decimal | Sum of market values for currently held positions |
| Name | string | Name associated to account |
| RealTimeBuyingPower | decimal | Real-time calculation for the account's overnight buying power. |
| RealTimeEquity | decimal | *Intraday Account Net Worth* - Real-time Cash + MarketValue + Securities on Deposit |
| RealTimeAccountBalance | decimal | *Intraday Account Balance* - Real Time Cash Balance = Beginning Day Cash - Commissions |
| RealTimeRealizedProfitLoss | decimal | Real-time P&L realized during the day. It is a per transaction value that does not need to be updated with market data quotes. This value includes commissions for transactions and P&L on positions that have been closed throughout the trading day. This P&L should be calculated based on average price |
| RealTimeUnrealizedGains | decimal | Real-time unrealized P/L today |
| RealTimeUnrealizedProfitLoss | decimal | Real-time unrealized P&L based on average price. It is a client side calculation based on current quotes. RT Unrealized P&L = SUM (unrealized P&L) for all positions held in the account. |
| Status | string | Current status of the account: A, C, D, F, I, R, L, X |
| StatusDescription | string | Active, Closing Transactions Only, 90 Day Restriction-Closing Transaction Only, Margin Call – Closing Transactions Only, Inactive, Restricted, Liquidating transactions Only, Closed |
| Type | string | Type of the account. C=Cash, M=Margin, F=Futures, X=Forex, D=DVP |
| TypeDescription | string | Cash, Margin, DVP, Futures, Forex |
| UnclearedDeposit | decimal | Funds that are not available for trading and are deducted from your account balance. |