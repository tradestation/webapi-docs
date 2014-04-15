---
layout: en
title: Request Throttling
category: getting-started
permalink: request-throttling/
weight: 3
---

The TradeStation WebAPI enforces Request Throttling to prevent abuse to our network. Throttling provides a consistent experience for all WebAPI consumers. Each API Key is allocated quota settings upon creation. These settings are applied on a per-user basis. If the quota is exceeded, a `403` HTTP response with the message "Quota Exceeded" will be returned. Quotas are reset on a 5-minute interval based on when the user issued the first request.

## Throttle Categories

The throttling limit applies to the following resource-categories:

| Resource-Category                             | Quota | Interval |
| --------------------------------------------- | ----- | -------- |
| Accounts                                      | 250   | 5-minute |
| Order Details                                 | 250   | 5-minute |
| Balances                                      | 250   | 5-minute |
| Positions                                     | 250   | 5-minute |
| Data Quotes[\*](#symbol_throttling)           | 250   | 5-minute |
| Quote Change Stream[\*](#symbol_throttling)   | 500   | 5-minute |
| Quote Snapshot Stream[\*](#symbol_throttling) | 500   | 5-minute |
| Barchart Stream                               | 500   | 5-minute |
| TickBar Stream                                | 500   | 5-minute |

*\* Note: See below for more information on [Symbol Throttling](#symbol_throttling)*

## Throttle Windows

Quotas have "Throttle Windows" that last for a limited time interval (generally 5-minutes). Once the user has exceeded the maximum request count, all future requests will fail with `403` until the throttle window expires.  Throttle windows do not slide based upon the number of requests, they are fixed at a point in time starting from the very first request for that category of resource.  After the throttle window expires, the cycle will start over at zero and the user can make more requests.

### Example

A user logs into the TradeStation WebAPI with your application and issues a request to `/v2/EliteTrader/accounts`. As a result, the request throttle quota is incremented by one for the `Accounts` resource-category. The user then issues 250 more requests immediately to `/v2/EliteTrader/accounts`. The last request fails with `403` "Quota Exceeded". All subsequent requests continue to fail until the 5-minute interval expires from the time of the very first request.

## Symbol Throttling

Most resource-categories increment the quota by one per HTTP request, but some endpoints support batch-requests where you can pass multiple symbols to a single request and receive a response with all symbols as a single result. In cases of batch-requests, each symbol counts as a separate request toward the throttling quota.

### Example

A user logs into the TradeStation WebAPI with your application and issues a request to `/v2/data/quote/IBM,NFLX,MSFT,AMZN,AAPL`. As a result, the request throttle quota is incremented by five for the `Data Quotes` resource-category. The user then immediately issues the same request 50 more times. The last request fails with `403` "Quota Exceeded" (i.e.: 5-symbols x 51 requests = 255 applied to a quota limit of 250). All subsequent requests continue to fail until the 5-minute interval expires from the time of the first request.

**Example 101st Request**

    GET https://api.tradestation.com/v2/data/quotes/IBM,NFLX,MSFT,AMZN,AAPL HTTP/1.1
    Host: api.tradestation.com
    Authorization: bearer eE45VkdQSnlBcmI0Q2RqTi82SFdMSVE0SXMyOFo5Z3dzVzdzdk
    Accept: application/json

**Example Failed Response**

    HTTP/1.1 403 Quota Exceeded
    Content-Length: 15
    Server: Microsoft-IIS/7.5
    X-AspNet-Version: 4.0.30319
    Date: Tue, 06 Dec 2011 20:50:32 GMT

    <html><body>Quota Exceeded</body></html>
