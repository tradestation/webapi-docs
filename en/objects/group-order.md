---
layout: en
title: Group Order
category: objects
permalink: group-order/
---

| Field | Type | Description |
| ----- | ---- | ----------- |
| Type | string | NORMAL, OCO, BRK |
| Orders | Collection of [Order](../order/) objects | |

###  Order Cancels Order(s) - OCO Orders

An OCO order is a group of orders whereby if one of the orders is filled or partially-filled, then all of the other orders in the group are cancelled.

### Bracket OCO Orders

A bracket order is a special instance of an OCO (Order Cancel Order). Bracket orders are used to exit an existing position. They are designed to limit loss and lock in profit by "bracketing" an order with a simultaneous stop and limit order. Bracket orders are limited so that the orders are all for the same symbol and are on the same side of the market (either all to sell or all to cover), and they are restricted to closing transactions. The reason that they follow these rules is because the orders need to be able to auto decrement when a partial fill occurs with one of the orders. For example, if the customer has a sell limit order for 1000 shares and a sell stop order for 1000 shares, and the limit order is partially filled for 500 shares, then the customer would want the stop to remain open, but it should automatically decrement the order to 500 shares to match the remaining open position.