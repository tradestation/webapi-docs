---
layout: en
title: Update Order
category: objects
permalink: update-order/
---

| Field           | Type                                    | Description |
| --------------- | --------------------------------------- | ----------- |
| OrderID         | string                                  | |
| Symbol          | string                                  | |
| Quantity        | string                                  | |
| LimitPrice      | string                                  | |
| StopPrice       | string                                  | |
| OrderType       | string                                  | market, limit, stoplimit, stopmarket |
| AccountKey      | string                                  | |
| AdvancedOptions | [Advanced Options](../advanced-options) | Used for Trailing Stop orders |

### Example JSON

    {
        "AccountKey": "123456",
        "LimitPrice": "10.00",
        "OrderID": "",
        "OrderType": "Limit",
        "Quantity": "10",
        "StopPrice": "0.00",
    }