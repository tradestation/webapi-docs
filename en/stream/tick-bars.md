---
layout: en
title: Tick Bars
category: stream
permalink: tick-bars/
weight: 4
---

### Summary

Streams tick bar information for a particular symbol starting from a given number of bars back. If no number of bars back are specified, the request will stream real-time tick bars. The max value for bars back = 10.

### Details

* Method: `GET`
* Path: `/stream/tickbars/{symbol}/{tickBarIntervalQuantity}/{barsBack}`
* URI Parameters:
  * {symbol}
  * {tickBarIntervalQuantity} = Number of ticks, 1 tick bar, 2 tick bar Valid values (Less than 65000)
  * {barsBack} = Number of tick bars to go back from the current time. Valid values (1 through 10)
* Authentication: Requires a valid access token

### Returns

[Tick Bar Data](../../objects/tick-bar-data) object

### Errors

* `404` | Not Found | Returned for invalid symbols

### Examples

Example Request:

    GET https://api.tradestation.com/v2/stream/tickbars/aapl/1/1 HTTP/1.1
    Authorization:  Bearer {yourAccessTokenHere}

Example Response:

    HTTP/1.1 200 OK
    Cache-Control: private
    Transfer-Encoding: chunked
    Content-Type: text/plain
    Server: Microsoft-IIS/7.5
    X-AspNet-Version: 4.0.30319
    Access-Control-Allow-Origin: *
    Date: Thu, 13 Sep 2012 21:19:51 GMT

    {
        "TimeStamp": "\/Date(1347566399000)\/",
        "Status": 13,
        "Close": 683.18,
        "TotalVolume": 200
    }

    {
        "TimeStamp": "\/Date(1347566400000)\/",
        "Status": 805306389,
        "Close": 0.0,
        "TotalVolume": 0
    }