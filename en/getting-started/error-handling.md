---
layout: en
title: Error Handling
category: getting-started
permalink: error-handling/
weight: 4
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
|               |               |                             |         |
| Users         | 401           | Unauthorized                | User is not authorized to retrieve this account |
|               | 400           | Invalid URI                 |         |
|               |               |                             |         |
| Orders        | 401           | Unauthorized                |         |
|               | 400           | Invalid Request             |         |
|               | 400           | Missing Field	              | Invalid Request. Order input is incomplete, missing field |
|               | 400           | Invalid Account             | Invalid Request. Failed to send order for execution. |
|               | 401           | Not authorized account      | Order failed. Reason: Request originator is not authorized to trade this account |
|               | 400           | Invalid Limit Price         | Invalid Request. Failed to build order |
|               | 400           | Invalid TIF                 | Order failed. Reason: Missing TIF |
|               | 200           |                             | An order may fail during processing but if call returns an orderid, the response will be 200 with an error message |
|               |               |                             |         |
| Quote         | 400           | Invalid Request             | Invalid Request.Invalid search criteria for symbol lookup service |
|               | 404           | Symbol not found            | INVALID SYMBOL |
|               |               |                             |         |
| Symbol Lookup	| 404           | Symbol not found            | NO DATA AVAILABLE |
|               | 400           | Invalid URI                 |         |
|               |               |                             |         |
| Stream        | 400           | Invalid Request             |         |
|               | 401           | Not Entitled                |         |
|               | 404           | Symbol not found            |         |
|               |               |                             |         |
| General       | 500           | CAL down                    |         |
|               | 400           | Invalid URI                 | Not Found |
