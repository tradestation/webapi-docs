---
layout: en
title: Place Order
category: orders
permalink: place-order/
weight: 1
---

### Summary

Resource for placing orders

### Details

* Method: `POST`
* Path: `/orders`
* URI Parameters:

  * none
* Request Body:

  * [Order](../../objects/order) object serialized in JSON or XML

*JSONP*

* URI Parameters

  * none
* Query String Parameters
  * data = URL Encoded JSON serialized [Order](../../objects/order) object
  * callback = jQuery method to callback
  * oauth_token = AccessToken
* URL:

      /jsonp/orders/send?data=EncodedSerializedOrderObjectGoesHere
      &callback=jQueryCallback
      &oauth_token=AccessTokenGoesHere
* Authentication: Requires a valid access token

### Returns    

A collection of the [Order Result](../../objects/order-result) object

### Errors

* `401` | Unauthorized
* `5xx` | Unknown internal service error. [Contact TradeStation
](mailto:webapi@tradestation.com)

### Examples

Example Request:

    POST https://api.tradestation.com/v2/orders HTTP/1.1
    Authorization: Bearer Qk5WZG01Y2dxRXNyV2kyMGVl
    Accept: application/json
    Content-Type: application/json
    Content-Length: 149
    Expect: 100-continue
    Connection: Keep-Alive
    Host: api.tradestation.com
    
    {
        "AccountKey": "123456",
        "AssetType": "EQ",
        "Duration": "DYP",
        "LimitPrice": "1.00",
        "OrderType": "Limit",
        "Quantity": "10",
        "Symbol": "ARNA",
        "TradeAction": "Buy"
    }

Example Response:

    HTTP/1.1 200 OK
    Content-Length: 113
    Content-Type: application/json; charset=utf-8
    
    [{
        "Message": "Sent order: Buy 10 ARNA @ 1.00 Limit",
        "OrderID": "207887693",
        "OrderStatus": "Ok"
    }]

Trailing Stop Request:

    POST https://api.tradestation.com/v2/orders/ HTTP/1.1
    Authorization: Bearer M2FES2FnQ1EvTmdZWTFPTnpMRU4xMHVNY0tS
    Content-Length: 245
    Accept: application/json
    Content-Type: application/json
    
    {
        "AccountKey": "112345",
        "AssetType": "EQ",
        "Duration": "GTC",
        "LimitPrice": "3.00",
        "StopPrice": "2.00",
        "OrderType": "StopMarket",
        "Quantity": "10",
        "Symbol": "ARNA",
        "TradeAction": "Buy",
        "AdvancedOptions": {
            "TrailingStop": {
                "ByPoints": true,
                "Value": 3
            }
        }
    }

Trailing Stop Response:

    HTTP/1.1 200 OK
    Content-Length: 104
    Content-Type: application/json; charset=utf-8
    
    [{
        "Message": "Sent order: Buy 10 ARNA @  Stop Market - Trl: 3",
        "OrderID": "207924340",
        "OrderStatus": "Ok"
    }]

JSONP Request:

    GET https://api.tradestation.com/v2/jsonp/orders/send?data=%7B%22AccountKey%22%3A%2212345%22%2C%22AssetType%22%3A%22FX%22%2C%22LimitPrice%22%3A%221%22%2C%22OrderType%22%3A%22Limit%22%2C%22Quantity%22%3A%2220000%22%2C%22Symbol%22%3A%22USDJPY%22%2C%22TradeAction%22%3A%22Buy%22%2C%20%22Duration%22%3A%22GTC%22%7D%0A&callback=jQueryCallBack&oauth_token=ZzkzQ1ZX HTTP/1.1

JSONP Response:

    HTTP/1.1 200 OK
    Content-Length: 116
    Content-Type: application/json
    jsonp-callback: jQueryCallBack
    
    jQueryCallBack([{"Message":"Sent order: Buy 20,000 USDJPY @ 1.000 Limit","OrderID":"208033621","OrderStatus":"Ok"}])