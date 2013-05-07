---
layout: en
title: Update Order
category: orders
permalink: update-order/
weight: 3
---

### Summary

Resource for updating an open order. You cannot update an order that has been filled.

**Cancel Replace Rules**

| Original order type              | Fields to update                 | Can only change order type to |
| -------------------------------- | -------------------------------- | ----------------------------- |
| Limit Orders                     | Quantity, Stop Price             | Market                        |
| Stop Orders                      | Quantity, Stop Price             | Market                        |
| Stop Limit Orders                | Quantity, Stop Price, Stop Limit | Market                        |
| Stop Market Training Stop Orders | Quantity, Trail Amount           |                               |

### Details

* Method: `PUT`
* Path: `/orders/{orderid}`
* URI Parameters:

  * {orderid}
* Request Body

  * Subset of [Order](../../objects/order-result) object serialized in JSON or XML. Required fields:
    * AccountKey
    * OrderID
    * OrderType
    * Quantity
    * Price field(s) used in original order
    * Trailing Stop parameters to change

*JSONP*

* URI Parameters

  * {orderid}
* Query String Parameters
  * data = URL Encoded JSON serialized [Order](../../objects/order) object
  * callback = jQuery method to callback
  * oauth_token = AccessToken
* URL:

      /jsonp/orders/{orderid}/cancelreplace?data=EncodedSerializedOrderObjectGoesHere&callback=jQuery17105945590266492218_1328295375410&_=1328295376318&oauth_token=AccessTokenGoesHere

* Authentication: Requires a valid access token

### Returns

Updated [Order Result](../../objects/order-result) object

### Errors

* `400` | {"Message":"Not an open order.","StatusCode":400}
* `400` | {"Message":"Invalid account.","StatusCode":400}
* `400` | {"Message":"Missing order type.","StatusCode":400}
* `400` | {"Message":"Missing order quantity.","StatusCode":400}
* `400` | {"Message":"Missing order limit price.","StatusCode":400}
* `401` | Unauthorized
* `5xx` | Unknown internal service error. [Contact TradeStation
](mailto:webapi@tradestation.com)

### Examples

Example Request: ([Update Order](../../objects/update-order) request)

    PUT https://api.tradestation.com/v2/orders/207924381 HTTP/1.1
    Authorization: Bearer accesstokengoeshere
    Accept: application/json
    Content-Type: application/json
    Content-Length: 119
    Expect: 100-continue
    Connection: Keep-Alive
    Host: api.tradestation.com

    {
        "AccountKey": "123456",
        "LimitPrice": "11.01",
        "OrderID": "207924381",
        "OrderType": "Limit",
        "Quantity": "10",
        "Symbol": "ARNA"
    }

Example Response:

    HTTP/1.1 200 OK
    Content-Length: 82
    Content-Type: application/json; charset=utf-8

    {
        "Message": "Cancel\/Replace order sent.",
        "OrderID": "207924381",
        "OrderStatus": "Ok"
    }

Example JSONP Request:

    GET https://api.tradestation.com/v2/jsonp/orders/208033619/cancelreplace?callback=jQueryCallback&oauth_token=ZzkzQ1ZXNzJ&data=%7B%22AccountKey%22%3A%22114278%22%2C%22AssetType%22%3A%22FX%22%2C%22LimitPrice%22%3A%221%22%2C%22OrderType%22%3A%22Limit%22%2C%22Quantity%22%3A%2220000%22%2C%22Symbol%22%3A%22USDJPY%22%2C%22TradeAction%22%3A%22Buy%22%2C%20%22OrderID%22%3A208033619%7D%0A HTTP/1.1
    Host: api.tradestation.com

Example JSONP Response:

    HTTP/1.1 200 OK
    Content-Length: 98
    Content-Type: application/json
    jsonp-callback: jQueryCallback

    jQueryCallback({"Message":"Cancel\/Replace order sent.","OrderID":"208033619","OrderStatus":"Ok"})
