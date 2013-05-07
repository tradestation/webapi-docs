---
layout: en
title: Order Detail
category: objects
permalink: order-detail/
---

| Field | Type | Description |
| ----- | ---- | ----------- |
| AccountID | string | |
| AdvancedOptions | string | For Conditional Orders … Relation Identifier |
| Alias | string | User defined name |
| CommissionFee | decimal | |
| ContractExpireDate | string | Expiration date in UTC formatted time. |
| ConversionRate | decimal | |
| Country | string | |
| Denomination | string | Currency security is traded in |
| DisplayName | string | Set to Alternate ID if it exists otherwise will be the TradeStation Account ID |
| Duration | string | FX - DAY, FU - |
| ExecuteQuantity | integer | Quantity executed for order |
| FilledCanceled | string | Time that order was filled, cancelled, or rejected |
| FilledPriceText | string | FilledPrice with decimal precision applied |
| GroupName | string | For Conditional Orders |
| Legs | [Leg](../leg/) | |
| LimitPriceText | string | LimitPrice with decimal precision applied |
| OrderID | integer | |
| Originator | integer | FDCN Id of the user that placed the order |
| Quantity | integer | Quantity of shares in the order |
| QuantityLeft | integer | Quantity remaining to execute on order |
| Routing | string | Route order was done |
| Spread | string | |
| Status | string | Status of Order, [described below](#order_status_categories) |
| StopPriceText | string | StopPrice with decimal precision applied |
| Symbol | string | |
| TimeStamp | string, M/D/YYYY h:m:s tt | Time in UTC/GMT that order was placed |
| TriggeredBy | string | For Conditional Orders |
| Type | string | Buy, Sell, Buy to Close, Buy to Open, Sell to Open, Sell To Close, Buy To Cover, Sell to Short |

### Order Status Categories

| TRANSTYPE_ID | DESCRIPTION |
| ------------ | ----------- |
| ACK | Order acknowledged by exchange |
| BRC | Bracket Cancelled |
| BRO | Order broken after execution (see MESSAGE) |
| CAN | Order cancelled (see MESSAGE) |
| CHG | Order changed based on customer request |
| CND | Condition Hit |
| COR | Fill corrected |
| DIS | Order dispatched |
| DOA | Dead |
| DON | Done for day |
| ECN | Expiration Cancel Request |
| EXP | Order expired - time constraint |
| FLL | Order executed in full |
| FLP | Partial fill - order complete |
| FPR | Partial fill - still alive |
| LAT | Too late to cancel |
| OPN | Order entry |
| OSO | OSO order |
| OUT | UROut |
| REC | Big Brother Recal Request |
| REJ | Order rejected (never accepted by exchange) |
| RJC | Cancel request rejected |
| RJR | Cancel request rejected |
| SCN | Big Brother Recal |
| STP | Stop price hit |
| STT | Order status message |
| TSC | Trade Server cancelled order |
| UCH | Order change requested by customer |
| UCN | Order cancellation requested by customer |