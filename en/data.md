---
layout: en
title: Data
category: data
permalink: data/
weight: 6
---

### Overview

Provides synchronous access to market data resources. Internally this service uses the same data access components as are used in the TradeStation Platform.

### Service URI

`https://api.tradestation.com/v2/data/{method}`

### Methods

* [Quote](quote) | Retrieves a snapshot for a given list of symbols
* [Symbol Lookup](symbol-lookup) | Resource that can be used to search for symbols that fit a given criteria
* [Get Symbol](get-symbol) | Request symbol information for a given symbol
* [Get Symbols](get-symbols-in-a-symbol-list) | Resource that returns the symbols in the symbol list
* [Get Symbol List](get-symbol-list) | Resource that returns a specific pre-defined symbol list
* [Get Symbol Lists](get-symbol-lists) | Resource that returns all pre-defined symbol lists
* [Symbol Suggest](symbol-suggest) | Returns a list of symbol objects from provided input


### Japanese Equities for our Monex Customers

We precede all Japanese Equity symbols with a `JP:`, so Monex's symbol would be JP:8698. This will return a full day session. By adding the extension `.M` (e.g.: JP:8698.M), only the morning session is returned. By adding the extension `.A` (e.g.: JP:8698.A), only the afternoon session is returned.

`[country]:[code].[session]-[exchange]`

These quotes will be for the main listing exchange. In addition, we'll provide quotes for the regional exchanges. So a quote for Monex on Osaka would be JP:8698-OS. You can also use the .M and .A modifiers with that if you want only the morning or afternoon activity -- for example, JP:8698.M-OS or JP:8698.A-OS.

The Japanese country prefix is as follows:

* `JP:`

The Morning and Afternoon session codes are as follows:

* Morning = `.M`
* Afternoon = `.A`
* Combined Morning and Afternoon = No Extension

The regional exchange codes are as follows:

* Fukuoka = `FK`
* JASDAQ = `JQ`
* Nagoya = `NG`
* Osaka = `OS`
* Sapporo = `SP`
* Tokyo = `TS`
