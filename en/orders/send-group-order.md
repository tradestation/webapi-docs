---
layout: en
title: Send Group Order
category: orders
permalink: send-group-order/
weight: 4
---

### Summary

Sending a group of conditional orders

### Details

* Method: `POST`
* Path: `orders/groups`
* URI Parameters:

  * none
* Request Body:

  * [Group Order](../../objects/group-order)
* Authentication: Requires a valid access token

### Returns

Collection of [Order Result](../../objects/order-result) objects

### Errors

* `401` | Unauthorized
* `5xx` | Unknown internal service error. [Contact TradeStation](mailto:webapi@tradestation.com)

### Examples

*BRK Request*

    POST https://api.tradestation.com/v2/orders/groups HTTP/1.1
    Authorization: Bearer accesstokengoeshere
    Accept: application/JSON
    Content-Type: application/json
    Content-Length: 331
    Expect: 100-continue
    Connection: Keep-Alive
    Host: api.tradestation.com

    {
        "Type": "BRK",
        "Orders": [{
            "AssetType": "EQ",
            "Symbol": "ARNA",
            "Quantity": "10",
            "LimitPrice": "5.00",
            "OrderType": "Limit",
            "Duration": "DAY",
            "AccountKey": "123456",
            "TradeAction": "Sell"
        }, {
            "AssetType": "EQ",
            "Symbol": "ARNA",
            "Quantity": "10",
            "StopPrice": "1.25",
            "OrderType": "StopMarket",
            "Duration": "DAY",
            "AccountKey": "123465",
            "TradeAction": "Sell"
        }]
    }

*BRK Response*

    HTTP/1.1 200 OK
    Content-Length: 294
    Content-Type: application/JSON; charset=utf-8

    [{
        "Message": "Order failed. Reason: No Day orders after 4:00PM Eastern",
        "OrderID": "207887696",
        "OrderStatus": "Failed"
    }, {
        "Message": "Order failed. Reason: No market or stop orders after 4:00 PM  Eastern",
        "OrderID": "207887697",
        "OrderStatus": "Failed"
    }]

*OCO Request*

    POST https://api.tradestation.com/v2/orders/groups HTTP/1.1
    Authorization: aflksdjfa
    Accept: application/JSON
    Content-Type: application/json
    Content-Length: 328
    Expect: 100-continue
    Connection: Keep-Alive
    Host: api.tradestation.com

    {
        "Type": "OCO",
        "Orders": [{
            "AssetType": "EQ",
            "Symbol": "WMT",
            "Quantity": "10",
            "LimitPrice": ".25",
            "OrderType": "Limit",
            "Duration": "DYP",
            "AccountKey": "123456",
            "TradeAction": "Buy"
        }, {
            "AssetType": "EQ",
            "Symbol": "WMT",
            "Quantity": "10",
            "LimitPrice": "2.00",
            "OrderType": "Limit",
            "Duration": "DYP",
            "AccountKey": "123456",
            "TradeAction": "SellShort"
        }]
    }

*OCO Response*

    HTTP/1.1 200 OK
    Content-Length: 238
    Content-Type: application/JSON; charset=utf-8

    [{
        "Message": "Sent order: Buy 10 WMT @ 0.25 Limit",
        "OrderID": "207887717",
        "OrderStatus": "Ok"
    }, {
        "Message": "Sent order: Sell Short 10 WMT @ 2.00 Limit",
        "OrderID": "207887718",
        "OrderStatus": "Ok"
    }]