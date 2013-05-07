---
layout: en
title: Orders
category: orders
permalink: orders/
weight: 5
---

### Summary

The Orders Service provides the ability to send, cancel, and replace an order, in addition to providing cost and commission information for an order prior to submitting it.

The Orders Service also provides the ability to send conditional orders.

### Service URI

`https://api.tradestation.com/v2/orders/{method}`

### Methods

* [Place Order](place-order) | Submits an order to the order execution engine
* [Cancel Order](cancel-order) | Cancels an order that is provided in the URI
* [Update Order](update-order) | Cancels and Replaces an order provided to the URI
* [Send Group Order](send-group-order) | Submits a group order to the order execution engine
* [Confirm Order](confirm-order) | Returns estimated costs and commissions for an order without placing the order
* [Confirm Group Order](confirm-group-order) | Returns estimated cost and comission information for a group of orders without orders actually being placed

### Conditional Orders

First implementation of conditional orders requires that the orders be placed at the same time.

#### Order Cancels Order(s) - OCO Orders

An OCO order is a group of orders whereby if one of the orders is filled or partially-filled, then all of the other orders in the group are cancelled.

* OCA Order definition
  * OCA orders should not be allowed to be placed across different accounts
  * There can be an unlimited amount of orders in an OCA group

#### Bracket OCO Orders

A bracket order is a special instance of an OCO (Order Cancel Order). Bracket orders are used to exit an existing position. They are designed to limit loss and lock in profit by "bracketing" an order with a simultaneous stop and limit order. Bracket orders are limited so that the orders are all for the same symbol and are on the same side of the market (either all to sell or all to cover), and they are restriced to closing transactions. The reason that they follow these rules is because the orders need to be able to auto decrement when a partial fill occurs with one of the orders. For example, if the customer has a sell limit order for 1000 shares and a sell stop order for 1000 shares, and the limit order is partially filled for 500 shares, then the customer would want the stop to remain open, but it should automatically decrement the order to 500 shares to match the remaining open position.

#### Order Sends Order(s) - OSO Orders

An OSO order is a group of orders (1 or more orders) whereby if the primary order is completely filled, the secondary order(s) will be sent to the market. OSO orders can be used in combination with an OCO or Bracket OCO orders when a customer places an order and wants to have a Bracket OCO Order (stop loss and profit target) sent once the initial order is filled.

* OSO order
  * One primary order
  * One or more secondary orders
  * OSO orders can be nested to any level
  * Secondary order could be a Bracket order or an OCA
  * OSO orders can be placed across different accounts

#### Trailing Stop

* Can only be used with StopMarket type orders
* Points are integer values only
* Percentages can be sent with 2 decimal places max
* When updating this type order, users can change the trail amount and quantity of shares

*Errors:*

* 400 Message = Order failed. Reason: Trailing stop is valid for stop orders only
* 400 Message = Order failed. Reason: Trailing stop limit order requires an Auto-Limit condition
* 400 Failed to build order: Invalid trailing stop number by points
* 400 Failed to build order confirmation: Invalid trailing stop number by percentage

Trailing Stops can be placed for stop market order by points or by percentage. Whe setting a trailing stop with the points option, the user will enter an integer value for the number of points.

Points are calculated for a particular symbol by multiplying the [Display Type enumeration](../objects/quote/#display_type_options) in the quote object for the symbol, which maps to a particular decimal value, with the minMove value, which is also in the quote object.

Ex. ESZ11 -> DisplayType = 3 which maps to .01 and MinMove = 25 so the point value will be .25. So 1 point maps to .25, 2 points map to .50.

When using the percentage option for trailing stops, the percentage value will be applied to the last price for the symbol and the price will be rounded to nearest valid price.

For Buy and BuyToCover trades, the estimated price will be rounded up to the nearest valid price.

For Sell and SellToShort trades, the estimated price will be rounded down to the nearest valid price.