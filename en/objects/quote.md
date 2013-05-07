---
layout: en
title: Quote
category: objects
permalink: quote/
---

| Field | Type | Description |
| ----- | ---- | ----------- |
| Ask | decimal | Ask price |
| AskPriceDisplay | string | Ask price |
| AskSize | integer | Ask size |
| AssetType | string | EQUITY, OPTION, FUTURE, FOREX |
| Bid | decimal | Bid price |
| BidPriceDisplay | string | Bid price |
| BidSize | integer | Bid size |
| Close | decimal | Daily running close price |
| ClosePriceDisplay | string | Daily running close price formatted for display |
| CountryCode | string | Equity/Futures/Option - United States, Forex - FX |
| Currency | string | Symbol currency |
| DailyOpenInterest | integer | Number of open contracts |
| Description | string | |
| DisplayType | integer | Symbol's price display type based on the [enum below](#display_type_options) |
| Error | string | Error message |
| Exchange | string | Name of exchange where this symbol is traded in |
| FractionalDisplay | boolean | Determine whether fractional price display is required |
| High | decimal | Today's high price |
| HighPriceDisplay | string | Today's high price |
| High52Week | decimal | 52 week high price |
| High52WeekPriceDisplay | string | 52 week high price |
| IsDelayed | boolean | True if the quote is a delayed quote and False if the quote is a real-time quote |
| Last | decimal | Last traded price |
| LastPriceDisplay | string | Last traded price |
| Low | decimal | Today's low price |
| LowPriceDisplay | string | Today's low price |
| Low52Week | decimal | 52 week low price |
| Low52WeekPriceDisplay | string | 52 week low price |
| MinMove | integer | Multiplying factor using the display type to determine the minimum price increment the asset trades in |
| NameExt | string | If the Quote is delayed this property will be set to `D` |
| NetChange | decimal | |
| NetChangePct | decimal | |
| Open | decimal | Today's open price |
| OpenPriceDisplay | string | Today's open price |
| PointValue | decimal | Symbol's point value |
| PreviousClose | decimal | Previous day's close price |
| PreviousClosePriceDisplay | string | Previous day's close price |
| PreviousVolume | integer | Previous day's trading volume |
| StrikePrice | decimal | Symbol's strike price; This is for Options symbols only |
| StrikePriceDisplay | string | Symbol's strike price; This is for Options symbols only |
| Symbol | string | Symbol name |
| SymbolRoot | string | |
| Volume | integer | Today's volume |

### Display Type Options

| Enum Value | Description            | Example |
| ---------: | ---------------------- | ------- |
| 0          | Automatic              | Not Used |
| 1          | 0 Decimals             | 1 |
| 2          | 1 Decimal              | .1 |
| 3          | 2 Decimals             | .01 |
| 4          | 3 Decimals             | .001 |
| 5          | 4 Decimals             | .0001 |
| 6          | 5 Decimals             | .00001 |
| 7          | Simplest Fraction      | |
| 8          | 1/2-Halves             | .5 |
| 9          | 1/4-Fourths            | .25 |
| 10         | 1/8-Eighths            | .125 |
| 11         | 1/16-Sixteenths        | .0625 |
| 12         | 1/32-ThirtySeconds     | .03125 |
| 13         | 1/64-SixtyFourths      | .015625 |
| 14         | 1/128-OneTwentyEighths | .0078125 |
| 15         | 1/256-TwoFiftySixths   | .003906250 |
| 16         | 10ths and Quarters     | .025 |
| 17         | 32nds and Halves       | .015625 |
| 18         | 32nds and Quarters     | .0078125 |
| 19         | 32nds and Eighths      | .00390625 |
| 20         | 32nds and Tenths       | .003125 |
| 21         | 64ths and Halves       | .0078125 |
| 22         | 6 Decimals             | .000001 |

### Japanese Equities Specific Quote Properties

| Field       | Type    | Description |
| ----------- | ------- | ----------- |
| AskType     | string  | [Quote Type](#quotetype) |
| BidType     | string  | [Quote Type](#quotetype) |
| ExRightsTSE | integer | Ex Rights |
| OpenTime    | string  | Time of symbol's open price today |
| HighTime    | string  | Time of symbol's high price today |
| LastTime    | string  | Time of symbol's last price today |
| LowTime     | string  | Time of symbol's low price today |
| LotSize     | integer | |
| TradeType   | string  | [Trade Type](#tradetype) |
| Turnover    | integer | |

### QuoteType

| Field | Description |
| ----- | ----------- |
| BEST_ZARABA | Best quote on Zaraba |
| BEST_BEFORE_ITAYOSE | Best quote before itayose trading |
| BEST_AFTER_CLOSE | Best quote after close |
| PLANNED_EXEC_B4_ITAYOSE | Planned contract execution price before itayose trading |
| PREOPEN | Pre-Opening |
| REGULAR | Regular Quote |
| CAUTION | Caution quote |
| SPECIAL | Special quote |
| CONTINUOUS | Continuous Execution |
| SPECIAL_PRIOR2HALT | Special Quote before trading halt |
| CONTINUOUS_PRIOR2HALT | Continuous Execution before trading halt |

### TradeType

| Field                              |
| ---------------------------------- |
| REGULAR_ITAYOSE                    |
| REGULAR_EOD                        |
| REGULAR_SUSPENSION                 |
| REGULAR_SUSPENSION_DONT_RECV_ORDER |
| REGULAR_REMOVE_SUSPENSION          |
| REGULAR_INTERRUPTION               |
| REGULAR_REMOVE_INTERRUPTION        |
| REGULAR_IN_SYSTEM_FAILURE          |
| REGULAR_SUSPENSION                 |
| REGULAR_REMOVE_SUSPENSION          |