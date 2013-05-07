---
layout: en
title: Symbol
category: objects
permalink: symbol/
---

| Field          | Type    | Description |
| -------------- | ------- | ----------- |
| Name           | string  | Symbol |
| Description    | string  | Symbol description |
| Exchange       | string  | Exchange symbol is traded in: NYSE, NASDAQ, OTC, OTCBB AMEX, ARCX, NASDS, EUREX, ICE, CME, ONCH, NYMEX, CBOT |
| Category       | string  | Stock, StockOption, StockOptionRoot, Forex, Future, FutureOption, FutureRoot, FutureOptionRoot, Index, IndexOption, CurrencyOption, MutualFund, MoneyMarketFund, Bond |
| Country        | string  | Country that exchange resides in, United States, Germany, United Kingdom |
| Root           | string  | Symbol Root |
| OptionType     | string  | Puts, Calls |
| FutureType     | string  | NONE, PIT, ELECTRONIC, COMBINED |
| ExpirationDate | string  | Expiration date in UTC formatted time |
| StrikePrice    | decimal | Options strike price; For Options symbols only |
| Error          | string  | Element that references error |
| Currency       | string  | Currency that symbol is traded in, CAD, CHF, JPY, NZD, USD, AUD, DKK, GBP, NOK, SEK, HKD, SGD |