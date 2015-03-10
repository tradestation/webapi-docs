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
| Category       | string  | Displays the type of financial instrument that the symbol represents, such as a stock, index, or mutual fund. Valid options include: Stock, StockOption, StockOptionRoot, Forex, Future, FutureOption, FutureRoot, FutureOptionRoot, Index, IndexOption, CurrencyOption, MutualFund, MoneyMarketFund, Bond |
| Country        | string  | Displays the country for the exchange trading for the selected symbol |
| Root           | string  | Symbol Root |
| OptionType     | string  | Displays the type of options contract the symbol represents. Valid options include: Puts, Calls |
| FutureType     | string  | NONE, PIT, ELECTRONIC, COMBINED |
| ExpirationDate | string  | Displays the expiration date for a futures or options contract in UTC formatted time |
| StrikePrice    | decimal | Displays strike price of an options contract; For Options symbols only |
| Error          | string  | Element that references error |
| Currency       | string  | Displays the type of base currency for the selected symbol; Valid options include: CAD, CHF, JPY, NZD, USD, AUD, DKK, GBP, NOK, SEK, HKD, SGD |
