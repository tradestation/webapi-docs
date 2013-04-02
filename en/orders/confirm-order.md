---
layout: en
title: Confirm Order
category: orders
permalink: confirm-order/
weight: 5
---

### Summary

Returns estimated cost and commission information for an order without the order actually being placed

### Details

* Method: `POST`
* Path: `/orders/confirm`
* URI Parameters:

  * none
* Request Body:

  * [Order](../../objects/order) object serialized in JSON or XML

*JSONP*

* URI Parameters
  * data = URL Encoded JSON serialized [Order](../../objects/order) object
  * callback = jQuery method to callback
  * oauth_token = Access Token
* URL:

      /jsonp/orders/confirm?data=EncodedSerializedOrderObjectGoesHere&callback=jQueryCallbackGoesHere&oauth_token=AccessTokenGoesHere

* Authentication: Requires a valid access token

### Returns

A collection of:

* Base [Confirm](../../objects/order-confirmation) object with a nested Asset specific object
  * [Equity Confirm](../../objects/equities-options-order-confirmation) object for equity orders
  * [Forex Confirm](../../objects/forex-order-confirmation) object for forex orders
  * [Futures Confirm](../../objects/futures-order-confirmation) object for futures orders


### Errors

* `401` | Unauthorized
* `400` | Bad Request
* `5xx` | Unknown internal service error. [Contact TradeStation
](mailto:webapi@tradestation.com)
### Examples

Example Request:

    POST https://api.tradestation.com/v2/orders/confirm HTTP/1.1
    Authorization: Bearer accesstokengoeshere
    Content-Length: 207
    Content-type: application/json

    {
        "AccountKey": 11234,
        "AssetType": "EQ",
        "Duration": "DAY",
        "GTDDate": "",
        "LimitPrice": 0.0,
        "OrderID": "",
        "OrderType": "Market",
        "Quantity": 100,
        "Route": "Intelligent",
        "StopPrice": 0.0,
        "Symbol": "IBM",
        "TradeAction": "buy"
    }

Example Response:

    HTTP/1.1 200 OK
    Content-Length: 395
    Content-Type: application/json

    [{
        "__type": "EquitiesOptionsOrderConfirmation:#TradeStation.Web.Services.DataContracts",
        "Account": "543061 QA",
        "Duration": "Day",
        "RelationIdentifier": null,
        "Route": "Intelligent",
        "SummaryMessage": "Buy 100 IBM @ Market",
        "EstimatedCommission": 1.00,
        "EstimatedCommissionDisplay": "1.00",
        "EstimatedCost": 19899.00,
        "EstimatedCostDisplay": "19,899.00",
        "EstimatedPrice": 198.99,
        "EstimatedPriceDisplay": "198.99"
    }]