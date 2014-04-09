---
layout: en
title: Request Throttling
category: getting-started
permalink: request-throttling/
weight: 3
---

TradeStation WebAPI places a cap on how many requests each user can make for each associated API-key.

Requests are broken down into categories based upon the underlying resource being requested and then each category is given a throttle quota.  Each request to a resource-category increments a counter which upon quota exceeded results in a HTTP error response of "403 Quota Exceeded".

Throttle quotas are assigned when the developer is assigned its API-key.  Request-counts are applied to each user of that API-key but each user's counts are tracked independently and do not count against the API-key holder, just the user.   

Throttle quotas are reset on a fixed window, typically every 5-minutes but this may vary per API-key.  After the throttle window expires, a user who had its requests capped with 403 errors will resume access to the WebAPI.

##Throttle Categories
There is a limit applied to the following categories of requests:

* Accounts (250 per 5-minutes)
* Order Details (250 per 5-minutes)
* Balances (250 per 5-minutes)
* Positions (250 per 5-minutes) 
* Data Quotes (500 per 5-minutes)  - *See also [Symbol Throttling]*
* Streams 
  * Quote Changes (500 per 5-minutes)  - *See also [Symbol Throttling]*
  * Quote Snapshots (500 per 5-minutes) - *See also [Symbol Throttling]*
  * BarCharts (500 per 5-minutes) 
  * TickBars (500 per 5-minutes) 

*Note: The default quota for each is in parenthesis.  Also, see below for more information on Symbol throttling.*

##Throttle Windows

Quotas last for only a limited interval (typically 5-minutes) called Throttle Windows. Once the user has exceeded its maximum request-count, all future requests will fail with 403 until that window expires.  Windows do not slide based upon the number of requests, they are fixed at a point in time starting from the very first request for that category of resource.  After the window expires, the cycle will start over at zero and the user can make more requests.

####Example

User "StationTrader" logs-in to the WebAPI he uses the ClientID associated with your API-key.  As a result, the user is issued a token that carries both the userid and your clientid.  The user then makes a request to /v2/EliteTrader/Accounts using that token, as a result the Thottle Quota counter is incremented by 1 for the Accounts throttle-category. The user then makes 250 more requests to /v2/EliteTrader/Accounts within 5-minutes and the very last request fails with 403 Quota Exceeded.   All subsequent requests continue to fail until that 5-minute window expires.  

##Symbol Throttling

Normally each request equals 1 increment of the quota counter.  However, the TradeStation WebAPI also supports batch-requests to certain Resources such as /v2/data/quotes where you can pass multiple symbols on one request and receive a response for each symbol.  In these cases, each separate symbol in a batch request counts as a separate WebAPI request.  So, instead of incrementing by 1, if you request 3 symbols the Throttle Quota increments by 3.

This is not intended to punish users of batch-requests, it just ensure that API users are kept on a level playing field so that one API-key user doesnt negatively impact the experience of other users. 

####Example

User "StationTrader" logs-in to the WebAPI and makes requests to /v2/data/quotes for 5-symbols including IBM, NFLX, MSFT, AMZN, and AAPL within 5-minutes.  The quota is set to 500, but the user receives 403 Quota Exceeded after 100 requests instead of 500 because each of the 5 symbols counted (i.e. 5-symbols x 100 requests =500 requests) as an independent request.  All of his additional requests failed for the next 4+ minutes.  After that, the user was able to make another 500 individual requests or another 100 requests of 5-symbols each 5-minute period.

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

