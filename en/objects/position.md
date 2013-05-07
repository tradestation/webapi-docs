---
layout: en
title: Position
category: objects
permalink: position/
---

| Field                 | Type    | Description |
| --------------------- | ------- | ----------- |
| Alias                 | string  | Friendly name for the account |
| AccountId             | string  | Account Identifier |
| AccountMarketValue    | decimal | Market value in account currency |
| AccountTotalCost      | decimal | Total cost in account currency |
| AccountOpenProfitLoss | decimal | Open profit/loss in account currency |
| AskPrice              | decimal | Current Ask Price for symbol |
| AskPriceDisplay       | string  | Current Ask Price for symbol |
| AssetType             | string  | Asset class that symbol falls in |
| AveragePrice          | decimal | Average Price of position held |
| AveragePriceDisplay   | string  | Average Price of position held |
| BidPrice              | decimal | Current Bid Price for symbol |
| BidPriceDisplay       | string  | Current Bid Price for symbol |
| BigPointValue         | decimal | |
| ContractExpireDate    | string  | Expiration date in UTC. Should remain in UTC or EST time. |
| ConversionRate        | decimal | Rate that converts denomination that position is traded in to the denomination of the account |
| Country               | string  | Country exchange resides in |
| Currency              | string  | Denomination that symbol trades in |
| DisplayName           | string  | Set to Alternate ID if it exists otherwise will be the TradeStation Account ID |
| Description           | string  | Description of symbol |
| InitialMargin         | decimal | |
| Key                   | integer | Unique identifier for the position |
| LastPrice             | decimal | Current Last Price for symbol |
| LastPriceDisplay      | string  | Current Last Price for symbol |
| LongShort             | string  | Returns Long or Short |
| MaintenanceMargin     | decimal | In denomination of asset |
| MarketValue           | decimal | Total Market Value of held position |
| OpenProfitLoss        | decimal | Profit and Loss for position |
| OpenProfitLossPercent | decimal | Profit and Loss for position in percent format |
| OpenProfitLossQty     | integer | |
| Quantity              | integer | Quantity held |
| RequiredMargin        | decimal | In denomination of asset |
| SettlePrice           | decimal | |
| StrikePrice           | decimal | Strike Price for the option symbol |
| StrikePriceDisplay    | string  | Strike Price for the option symbol |
| Symbol                | string  | Symbol |
| TimeStamp             | string  | Time position was opened |
| TotalCost             | decimal | |