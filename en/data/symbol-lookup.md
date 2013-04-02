---
layout: en
title: Symbol Lookup
category: data
permalink: symbol-lookup/
weight: 2
---

### Summary

Returns a list of Symbols based on search criteria

*note: result set is limited to 500*

### Details

* Method: `GET`
* Path: `/data/symbols/search/{criteria}`
* URI Parameters:

  * {criteria} = key/value paris search criteria:
  
    * `C`: Asset categories. (Optional) Possible values
      * Future or FU
      * FutureOption or FO
      * Stock or S (Default)
      * StockOption or SO (If root is specified, default category)
      * Index or IDX
      * CurrencyOption or CO
      * MutualFund or MF
      * MoneyMarketFund or MMF
      * IndexOption or IO
      * Bond or B
      * Forex or FX
    * `Cnt`: Country where the symbol is traded in. (Optional) Possible values:
      * ALL if not presented (Default)
      * US
      * DE
      * CA
* Authentication: Requires a valid access token. Can use the client credentials grant type.
* Returns: [Symbol](../../objects/symbol) object

### For Equities Lookups

The following behavior is also applied to categories which are not futures, options, or forex related. The user must provide either the name, description or both

* `N`: partial/full symbol name, will return all symbols that contain the provided name value
* `Desc`: Name of the company
* `Flg`: indicates whether symbols no longer trading should be included in the results returned. (Optional) This criteria is not returned in the symbol data. Possible values:
  * true
  * false (Default)
* `Cnt`: Country where the symbol is traded in. (Optional) Possible values:
  * ALL if not presented (Default)
  * US
  * DE
  * CA

### For Options(Category=StockOption, IndexOption, FutureOption or CurrencyOption) Lookups

* `R`: Symbol root. Required field, the symbol the option is a derivative of, this search will not return options based on a partial root.
* `Stk`: Number of strikes prices above and below the underlying price

  * Default value 3
* `Spl`: Strike price low
* `Sph`: Strike price high
* `Exd`: Number of expiration dates.

  * Default value 3
* `Edl`: Expiration date low, ex: 01-05-2011
* `Edh`: Expiration date high, ex: 01-20-2011
* `OT`: Option type. Possible values:
  * Both (Default)
  * Call
  * Put
* `FT`: Future type for FutureOptions. Possible values:
  * Electronic (Default)
  * Pit
* `ST`: Symbol type: Possible values:
  * Both
  * Composite (Default)
  * Regional
* `Cnt`: Country where the symbol is traded in. (Optional) Possible values:
  * US (Default)
  * DE
  * CA

### For Futures (Category = Future) Lookups

The user must provide either the description, root, and category=futures

* `Desc`: Description of symbol traded
* `R`: Symbol root future trades
* `FT`: Futures type. Possible values:
  * None
  * PIT
  * Electronic (Default)
  * Combined
* `Cur`: Currency. Possible values:
  * All
  * USD (Default)
  * AUD
  * CAD
  * CHF
  * DKK
  * EUR
  * DBP
  * HKD
  * JPY
  * NOK
  * NZD
  * SEK
  * SGD
* `Exp`: whether to include expired contracts
  * false (Default)
  * true
* `Cnt`: Country where the symbol is traded in. (Optional) Possible values:
  * ALL if not presented (Default)
  * US
  * DE
  * CA

### For Forex Lookups

* `N`: partial/full symbol name. Use `all` or `null` for a list of all forex symbols
* `Desc`: Description
* The exchange returned for all forex searches will be `FX`
* The country returned for all forex searches will be `FOREX`
* Authentication: Requires a valid access token

### Examples

Example Request:

    GET https://api.tradestation.com/v2/data/symbols/search/n=msf&c=stock HTTP/1.1
    Authorization: Bearer accesstokengoeshere
    Accept: application/JSON
    Content-Type: application/x-www-form-urlencoded
    Host: api.tradestation.com

Example Response: ([Symbol](../../objects/symbol) object details)

    [{
        "Country": "United States",
        "Description": "AMERISAFE Inc",
        "Error": null,
        "Exchange": "NASDAQ",
        "Name": "AMSF"
    }, {
        "Country": "United States",
        "Description": "Apamanshop.co Ltd Tokyo",
        "Error": null,
        "Exchange": "OTC",
        "Name": "APMSF"
    }, {
        "Country": "United States",
        "Description": "Asset Mgmt Software Sys Inc",
        "Error": null,
        "Exchange": "OTC",
        "Name": "ASMSF"
    }, {
        "Country": "United States",
        "Description": "Medwell Capital Corp",
        "Error": null,
        "Exchange": "OTC",
        "Name": "BOMSF"
    }, {
        "Country": "United States",
        "Description": "Bralorne Gold Mines Ltd",
        "Error": null,
        "Exchange": "OTC",
        "Name": "BPMSF"
    }]
