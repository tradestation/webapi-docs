---
layout: en
title: Order
category: objects
permalink: order/
---

| Field | Type | Description |
| ----- | ---- | ----------- |
| OrderID | string | Only used for cancel or cancelReplace requests |
| AssetType | string | EQ, OP, FU, FX |
| Symbol | string | |
| Quantity | string | |
| LimitPrice | string | |
| StopPrice | string | |
| OrderType | string | market, limit, stoplimit, stopmarket |
| Route | string | |
| Duration | string | |
| AccountKey | string | |
| GTDDate | string | |
| TradeAction | string | |
| AdvancedOptions | [Advanced Options](../advanced-options) | Used for Trailing Stop orders |
| OSOs | [Group Order](../group-order/) | |

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

### Example OSO JSON

    {
        "AssetType": "EQ",
        "Symbol": "ARNA",
        "Quantity": "10",
        "LimitPrice": ".25",
        "OrderType": "Limit",
        "Duration": "DYP",
        "AccountKey": "123456",
        "TradeAction": "Buy",
        "AdvancedOptions": {
            "TrailingStop": null
        },
        "OSOs": [{
                "Type": "NORMAL",
                "Orders": [{
                        "AssetType": "EQ",
                        "Symbol": "ARNA",
                        "Quantity": "10",
                        "LimitPrice": "1.25",
                        "OrderType": "Limit",
                        "Duration": "DYP",
                        "AccountKey": "123456",
                        "TradeAction": "Sell",
                        "AdvancedOptions": {
                            "TrailingStop": null
                        },
                        "OSOs": []
                    }
                ]
            }
        ]
    }

### Field Definitions and Valid Inputs

* AccountKey {Required} *Unique Identifier for Accounts*
* AdvancedOptions *Defines Trailing Stop Parameters*
* AssetType {Required}

  * Valid Inputs:
    * EQ - Equities
    * OP - Options
    * FU - Futures
    * FX - Forex
* Duration {Required} *The Time In Force value for the order*

  * Valid inputs for equities:
    * DAY
    * DYP - *Day plus*
    * GTC - *Good till cancelled*
    * GCP - *GTC plus*
    * GTD - *Good through date*
    * GDP - *GTD plus*
    * IOC
    * FOK
    * OPG
    * CLO
    * 1 - *1 minute*
    * 3 - *3 minute*
    * 5 - *5 minute*
  * Valid inputs for options:
    * DAY - *Day*
    * GTC - *Good till cancelled*
    * GTD - *Good through date*
    * IOC
    * FOK
    * OPG
* GTDDate {Required for orders with Duration = GTD} *Date that Order is valid through*

  * Valid string input format: MM/DD/YYYY
* LimitPrice {Required For Limit and StopLimit Orders}
* OrderID - *Not used in send order*

  * Valid Input: Empty String
* OrderType {Required}

  * Valid inputs:
    * Limit
    * Market
    * StopLimit
    * StopMarket
* Quantity {Required}
* Route {Not required, defaults to Intelligent}

  * Valid inputs for Equities:
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
  * Valid inputs for Options:
    * AMOP
    * BOX
    * CBOE
    * ISE
    * NYOP - *NYSE Arca*
    * PHLX
    * XNDQ
* StopPrice {Required for StopMarket and StopLimit orders}
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
* OSOs {Required if you wish to attach an OSO order}