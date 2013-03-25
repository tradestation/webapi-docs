---
layout: en
title: Futures Account
category: objects
permalink: futures-account/
---

[See fields common among all account types.](../account/)

| Field                     | Type    | Description |
| ------------------------- | ------- | ----------- |
| BODOpenTradeEquity        | decimal | Beginning of day open trade equity |
| Commission                | decimal | Commission fees |
| Currency                  | string  | Denomination of the account |
| CurrencyDetails           | Array of [Futures Account Currency Detail](../futures-account-currency-detail) | Data object that provides details on a per currency basis with a summation in the accounts denomination |
| OpenOrderMargin           | decimal | Margin for all open orders |
| RealTimeInitialMargin     | decimal | Real-time initial margin |
| RealTimeMaintenanceMargin | decimal | Real-time maintenance margin |
| RealTimeTradeEquity       | decimal | Real-time trade equity |
| SecurityOnDeposit         | decimal | Securities on deposit |
| TodayRealTimeTradeEquity  | decimal | Real-time trade equity for the day |