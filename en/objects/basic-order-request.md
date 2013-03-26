---
layout: en
title: Basic Order Request
category: objects
permalink: basic-order-request/
---

Requires order data formatted as json or xml

### Example JSON

    {
        "AccountKey": "123456",
        "AssetType": "EQ",
        "Duration": "DAY",
        "GTDDate": "",
        "LimitPrice": "10.00",
        "OrderID": "",
        "OrderType": "Limit",
        "Quantity": "10",
        "Route": "Intelligent",
        "StopPrice": "0.00",
        "Symbol": "GOOG",
        "TradeAction": "Buy"
    }

### Field Defintions and Valid Inputs

* AccountKey {Required} - *Unique Identifier for Account*
* AssetType {Required}

  * Valid Inputs:
    * EQ - Equities
    * OP - Options
    * FU - Futures
    * FX - Forex
* Duration {Required} - *The Time In Force value for the order*

  * Valid inputs for equities:
    * DAY - Day
    * DYP - Day plus
    * GTC - Good till cancelled
    * GTD - Good through date
    * GDP - GTD plus
    * IOC
    * FOK
    * OPG
    * CLO
    * 1 - 1 minute
    * 3 - 3 minute
    * 5 - 5 minute
  * Valid input for options:
    * DAY - Day
    * GTC - Good till cancelled
    * GTD - Good through date
    * IOC
    * FOK
    * OPG
  * Valid inputs for forex:
    * DAY - Day
    * GTC - Good till cancelled
    * GTD - Good through date
    * IOC
    * FOK
    * 1 - 1 minute
    * 3 - 3 minute
    * 5 - 5 minute
  * Valid inputs for futures:
    * DAY - Day
    * GTC - Good till cancelled
    * GTD - Good through date
    * IOC
    * FOK
* GTDDate {Required for orders with Duration = GTD} *Date that Order is valid through*

  * Valid string input format: MM/DD/YYYY
* LimitPrice {Required for Limit and StopLimit Orders} *For Market Orders Valid Input: Empty String or 0.00*
* OrderID - *Not used in basic order*

  * Valid Input: Empty String
* OrderType {Required}

  * Valid inputs:
    * Limit
    * Market
    * StopLimit
    * StopMarket
* Quantity {Required}
* Route {Not required, defaults to intelligent}

  * Valid inputs for equities:
    * Intelligent
    * AMEX
    * ARCA
    * AUTO
    * BATS
    * BTRD
    * CTDL
    * EDGA
    * EDGX
    * GFLO
    * NITE
    * NQBX
    * NSDQ
    * NYSE
  * Valid inputs for Options
    * AMOP
    * BOX
    * CBOE
    * ISE
    * NYOP - NYSE Arca
    * PHLX
    * XNDQ
* StopPrice {Required for StopMarket and StopLimit orders} - *For Market Orders Valid Input: Empty String or 0.00*
* Symbol {Required}
* TradeAction {Required}

  * Valid inputs
    * buy - EQ, FU, FX
    * sell - EQ, FU, FX
    * buytocover - EQ
    * sellshort - EQ
    * buytoopen - OP
    * buytoclose - OP
    * selltoopen - OP
    * selltoclose - OP