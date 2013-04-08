---
layout: en
---

## What is the TradeStation WebAPI?

Create dynamic web, mobile, or stand-alone applications using your programming language of choice. Whether it is VB.NET ([sample](https://github.com/tradestation/sample-webapi-authcode-vb)), JavaScript ([sample](https://github.com/tradestation/sample-webapi-implicitgrant-javascript)), C#, C++, Ruby on Rails, PHP, Python or any other language that can access the Internet, the TradeStation WebAPI lets you provide a custom solution that leverages TradeStation's historical/real-time market data network and fast order-execution services without having to run the TradeStation platform simultaneously.

### Here's how it works:

1. Integrate the TradeStation WebAPI into your new or existing product.
2. Provide a link to TradeStation's authorization page, giving any TradeStation client the ability to authorize your product to use his market data entitlements as well as place orders and access account information on his behalf.
3. Once authorized, request market data for any symbol for which the client is entitled. You will also be able to place orders and track each order's status using the provided interfaces.

### What you will need to know:

1. TradeStation's WebAPI employs a commonly used authorization protocol: OAuth 2.0 ([learn more](http://en.wikipedia.org/wiki/OAuth)).
2. Your application must have Internet connectivity for clients to sign in. Our sign-in process is similar to that of websites that enable users to sign in using their Twitter or Facebook account ("Sign in with Twitter" or "Connect with Facebook").
3. The API is implemented using the HTTP protocol. The result of each request will consist of an HTTP status and/or JSON data ([learn more](http://en.wikipedia.org/wiki/JSON)).
4. Access to market data is granted on a per-user basis, which will require your application to manage each user's access independently, since each user will have a different set of entitlements for market data.

### Learn more
[Read now]({{ site.baseurl }}/en/getting-started/overview) or download the documentation by clicking on the links to the tar.gz or .zip files at the top of the page or by visiting [https://github.com/tradestation/webapi-docs](https://github.com/tradestation/webapi-docs) and cloning our repository. Extract the files and click on the docs/index.html file to view the documentation.

TradeStation WebAPI is an exclusive offering for select TradeStation developers. If you would like to apply for consideration to our program, please contact [webapi@tradestation.com](mailto:webapi@tradestation.com).

*Please note: Market data requests, although made in real time, are not guaranteed to include every update sent by the data exchanges.*