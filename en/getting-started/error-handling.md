---
layout: en
title: Error Handling
category: getting-started
permalink: error-handling/
weight: 5
---

| Service       | HTTP Code     | Error                       | Message |
| ------------- | ------------- | --------------------------- | ------- |
| Authorize     | 401           | Code Expires                | Authorization code expired |
|               | 401           | Redirect Uri doesn't match  | Exception of type `TradeStation.Web.Services.AuthorizationException` was thrown. |
|               | 401           | Invalid User credentials    | Authorization failed |
|               | 401           | Invalid Client credentials  | API key failure |
|               |               |                             |         |
| Accounts      | 401           | Unauthorized                |         |
|               | 400           | Invalid URI                 |         |
|               | 400           | Bad Request                 | The supplied since date is invalid. |
|               | 403           | Forbidden                   | The supplied since date is invalid. Can not return order history older than number day(s). |
|               |               |                             |         |
| Data          | 401           | Unauthorized                |         |
|               | 400           | Bad Request                 | Invalid search category |
|               | 400           | Bad Request                 | Invalid strike price. |
|               | 400           | Bad Request                 | Missing search criteria for Forex Symbol Lookup. Either Symbol Name or Description is required. |
|               | 404           | Not Found                   | EX_INVALID_SYMBOL |
|               |               |                             |         |
| Users         | 401           | Unauthorized                | User is not authorized to retrieve this account |
|               | 400           | Invalid URI                 |         |
|               |               |                             |         |
| Orders        | 401           | Unauthorized                | Authorization failure. |
|               | 400           | Invalid Request             |         |
|               | 400           | Missing Field	              | Invalid Request. Order input is incomplete, missing field |
|               | 400           | Invalid Account             | Invalid Request. Failed to send order for execution. |
|               | 400           | Bad Request                 | Failed to build order: Reason will be provided |
|               | 400           | Bad Request                 | Failed to build order confirmation: Reason will be provided |
|               | 400           | Bad Request                 | Please provide valid order input. |
|               | 400           | Bad Request                 | Please provide valid group order input. |
|               | 400           | Bad Request                 | Please provide valid group order type. |
|               | 400           | Bad Request                 | Please provide each order input for the group order. |
|               | 400           | Bad Request                 | Group order must include at least one pair of orders. |
|               | 400           | Bad Request                 | Invalid account. |
|               | 400           | Bad Request                 | Missing order ID. |
|               | 400           | Bad Request                 | Invalid order ID. |
|               | 400           | Bad Request                 | Not an open order. |
|               | 400           | Bad Request                 | Failed to cancel order. |
|               | 400           | Bad Request                 | Invalid order type. |
|               | 400           | Bad Request                 | Missing order type. |
|               | 400           | Bad Request                 | Missing order quantity. |
|               | 400           | Bad Request                 | Missing order symbol. |
|               | 400           | Bad Request                 | Missing order ID. |
|               | 400           | Bad Request                 | Invalid limit price. |
|               | 400           | Bad Request                 | Missing order limit price. |
|               | 400           | Bad Request                 | Missing order stop price. |
|               | 400           | Bad Request                 | Invalid stop price. |
|               | 400           | Bad Request                 | Not an open order. |
|               | 400           | Bad Request                 | Missing order type. |
|               | 401           | Not authorized account      | Order failed. Reason: Request originator is not authorized to trade this account |
|               | 400           | Invalid Limit Price         | Invalid Request. Failed to build order |
|               | 400           | Invalid TIF                 | Order failed. Reason: Missing TIF |
|               | 200           |                             | An order may fail during processing but if call returns an orderid, the response will be 200 with an error message |
|               | 503           | Service Unavailable         | Failed to Cancel/Replace order. |
|               |               |                             |         |
| Quote         | 400           | Invalid Request             | Invalid Request.Invalid search criteria for symbol lookup service |
|               | 404           | Symbol not found            | INVALID SYMBOL |
|               |               |                             |         |
| Symbol Lookup	| 404           | Symbol not found            | NO DATA AVAILABLE |
|               | 400           | Invalid URI                 |         |
|               |               |                             |         |
| Stream        | 400           | Invalid Request             |         |
|               | 400           | Bad Request                 | Not a valid number. |
|               | 400           | Bad Request                 | Not a valid date. |
|               | 400           | Bad Request                 | Last date cannot be greater than today. |
|               | 401           | Not Entitled                |         |
|               | 404           | Symbol not found            |         |
|               | 403           | Forbidden                   | Bar interval should be a value between 1 and 1440 |
|               | 403           | Forbidden                   | Exceed maximum number of history bars |
|               | 404           | Not Found                   | Invalid bar interval quantity. |
|               | 404           | Not Found                   | Invalid bar interval unit. |
|               | 404           | Not Found                   | Invalid barsBack value. |
|               | 404           | Not Found                   | Invalid barsBack value, please choose a value between 1 and 10. |
|               | 404           | Not Found                   | Start date can not be greater than today. |
|               | 404           | Not Found                   | Start date can not be earlier than 1/1/1970 |
|               | 404           | Not Found                   | Start date can not be earlier than 1/1/1900 |
|               | 404           | Not Found                   | Invalid start date. |
|               | 404           | Not Found                   | Invalid end date. |
|               | 404           | Not Found                   | End date cannot be greater than today. |
|               | 404           | Not Found                   | End date cannot be earlier than start date. |
|               | 404           | Not Found                   | Missing symbol. |
|               | 404           | Not Found                   | Invalid url path |
|               | 404           | Not Found                   | Invalid tickbar interval quantity. |
|               | 404           | Not Found                   | Invalid tickbar quantity, please choose a value between 1 and 65000. |
|               | 200           | Error                       | Timeout |
|               | 200           | Error                       | No Data |
|               | 200           | Error                       | Entitlement Error |
|               | 200           | Error                       | Invalid Symbol |
|               | 200           | End                         | Stream Ends |
|               |               |                             |         |
| General       | 500           | CAL down                    |         |
|               | 400           | Invalid URI                 | Not Found |
