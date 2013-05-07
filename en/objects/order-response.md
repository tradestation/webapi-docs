---
layout: en
title: Order Response
category: objects
permalink: order/
---

| Field | Type | Description |
| ----- | ---- | ----------- |
| OrderID | integer | |
| AccountID | string | |
| Originator | integer | FDCN Id of the user that placed the order |
| TimeStamp | string, M/D/YYYY h:m:s tt | Time in UTC/GMT that order was placed |
| FilledCanceled | string | Time that order was filled, cancelled, or rejected in UTC time |
| Symbol | string | |
| Spread | string | |
| Type | string | Buy, Sell, Buy to Close, Sell to Open |
| Quantity | integer | |
| ExecuteQuantity | integer | |
| QuantityLeft | integer | |
| StopPriceText | string | |
| LimitPriceText | string | |
| FilledPriceText | string | |
| Status | string | Status of Order, [described here](../order-detail#order_status_categories) |
| Routing | string | |
| Duration | string | FX - DAY, FU - |
| GroupName | string | For Conditional Orders … Not Used in RC 1.0 |
| TriggeredBy | string | For Conditional Orders … Not Used in RC 1.0 |
| AdvancedOptions | string | For Conditional Orders … Not Used in RC 1.0 |
| ContractExpireDate | string | Expiration date in UTC. Should remain in UTC or EST time. |
| CommissionFee | decimal | |
| Denomination | string | |
| ConversionRate | decimal | |
| Country | string | |
| Legs | [Leg](../leg/) | |
| RejectReason | string | Message explaining why an order was rejected |