---
layout: en
title: Account
category: objects
permalink: account/
---

| Field | Type | Description |
| ----- | ---- | ----------- |
| Alias | string | User defined name |
| BODEquity | decimal | *BOD Account Net Worth* - Account's net worth at the beginning of the day. The account's net worth (known internally as 'Net Equity') includes the account's balance, the market value of the equities positions and options positions marked to the previous day's end–of-day quote. |
| BODNetCash | decimal | *BOD Account Balance* - Account balance at the beginning of the day |
| ClosedPositions | `TodaysClosedPositions` | Data object that describes positions that were closed today |
| DisplayName | string | Set to Alternate ID if it exists, otherwise will be the TradeStation Account ID |
| Key | integer | Account Identifier |
| MarketValue | decimal | Sum of market values for currently held positions |
| Name | string | Name associated to account |
| RealTimeBuyingPower | decimal | Real-time calculation for the account's overnight buying power |
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