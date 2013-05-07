---
layout: en
title: Leg
category: objects
permalink: leg/
---

| Field | Type | Description |
| ----- | ---- | ----------- |
| OrderID                 | integer | Unique identifier for an order |
| Symbol                  | string  | Symbol for asset being traded |
| BaseSymbol              | string  | Base Symbol for an options trade |
| Side                    | string  | Side: B(uy), S(sell), T(sell to short), C(buy to cover) |
| OpenOrClose             | string  | Indicates if the order is an opening or closing trade: O, C |
| LegNumber               | integer | Unique identifier for a leg within an order |
| TimeExecuted            | string  | Timestamp |
| ExecQuantity            | integer | Quantity of shares executed |
| Leaves                  | integer | Quantity of shares remaining to be filled. |
| ExecPrice               | decimal | Price trade executed at |
| Quantity                | integer | Quantity of shares |
| Month                   | integer | Month option order expires in |
| Year                    | integer | Year option order expires in |
| LimitPrice              | decimal | Limit price of leg |
| LimitPriceDisplay       | string  | Displayed limit price of leg |
| StopPrice               | decimal | Stop price of limit order |
| StopPriceDisplay        | string  | Displayed stop price of leg |
| PointValue              | decimal | |
| PutOrCall               | string  | P, C |
| StrikePrice             | decimal | Option strike price |
| Bid                     | decimal | Bid price for leg |
| Ask                     | decimal | Ask price for leg |
| PriceUsedForBuyingPower | decimal | Price of leg used when calculating effect on buying power |
| OrderType               | string  | Market, StopMarket, Limit, StopLimit |
| ExpireDate              | string  | Contract expiration date |