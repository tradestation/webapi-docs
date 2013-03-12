---
layout: en
title: Confirm Group Order
category: orders
permalink: confirm-group-order/
---

### Summary

Returns estimated cost and commission information for a group of orders (OCO, BRK) without the orders actually being placed

### Details

* Method: `POST`
* Path: `/orders/groups/confirm`
* URI Parameters:

  * none
* Request Body:

  * `GroupOrder` object serialized in JSON or XML

*JSONP*

* URI Parameters
  * data = URL Encoded JSON serialized `GroupOrder` object
  * callback = jQuery method to callback
  * oauth_token = AccessToken
* URL:

        /jsonp/orders/groups/confirm?data=EncodedSerializedGroupOrderObjectGoesHere&callback=jQueryCallbackGoesHere&oauth_token=AccessTokenGoesHere
* Authentication: Requires a valid access token

### Returns

A collection of:

* Base `Confirm` object with a nested Asset specific object
  * `Equity Confirm` object for equity orders
  * `Forex Confirm` object for forex orders
  * `Futures Confirm` object for futures orders

### Errors

* `401` | Unauthorized
* `400` | Bad Request
* `5xx` | Unknown internal service error. Contact TradeStation