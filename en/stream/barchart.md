---
layout: en
title: BarChart
category: stream
permalink: barchart/
weight: 3
---

### Summary

Streams barchart information for a particular symbol from a given start date, bars back, or trading days back. This resource can also return a barchart for a given time-span. For Minute charts, the maximum date range for 1 minute bars is 40 calendar days. For 2 minute bars it's 80, 3 minute bars 120 days. Maximum date range = Minute interval * 40.

* When requesting barcharts with an explicit timestamp, the `closed` bars between the timestamps will be returned.

### Details

* Method: `GET`

#### Date Range

* Path:

      /stream/barchart/{symbol}/{barIntervalQuantity}/{barIntervalUnit}/{startDate}/{endDate}


* URI Parameters:
  * {symbol}
  * {barIntervalQuantity} = Must be 1 for interval units Daily, Weekly and Monthly, and the max value for minute is 1440
  * {barIntervalUnit} = {Minute, Daily, Weekly, Monthly}
  * {startDate} = {m-d-yyyy} - This date value is for time 00:00:00 of that day
    * An explicit time can also be specified by adding `t{hh:mm:ss}` to the date. Example: 7-20-2012t08:45:00
    * All time are in UTC unless an offset is specified. Example: 7-20-2012t08:45:00-06:00
  * {endDate} = {m-d-yyyy} - This date value is for time 00:00:00 of that day. Optional parameter:
    * An explicit time can also be specified by adding `t{hh:mm:ss}` to the date. Example: 7-20-2012t08:45:00
    * All time are in UTC unless an offset is specified. Example: 7-20-2012t08:45:00-06:00

#### Bars Back

* Path:

      /stream/barchart/{symbol}/{barIntervalQuantity}/{barIntervalUnit}/{barsBack}/{lastDate}

* URI Parameters:
  * {symbol}
  * {barIntervalQuantity} = Must be 1 for interval units Daily, Weekly and Monthly, and the max value for a chart for minute bars is 1440
  * {barIntervalUnit} = {Minute, Daily, Weekly, Monthly}
  * {barsBack} = Number of bars to go back from the current time or the value provided in lastDate, max value permitted 60000
  * {lastDate} = {m-d-yyyy} - This date value is for time 00:00:00 of that day

#### Days Back

* Path:

      /stream/barchart/{symbol}/{barIntervalQuantity}/{barIntervalUnit}?{daysBack}={number of trading days back you want to begin the stream from}&{lastDate}={Date to begin the look back from}
    
  * This particular resource does not allow for an endDate, it only streams

* URI Parameters
  * {symbol}
  * {barIntervalQuantity} = Must be 1 for interval units Daily, Weekly and Monthly, and the max value for a chart for minute bars is 1440
  * {barIntervalUnit} = {Minute, Daily, Weekly, Monthly}
* QueryString Parameters:
  * {daysBack} = Number of trading days to go back from the current time or the value provided in lastDate, max value permitted 60000
  * {lastDate} = Date to begin the look back from, for example, if you pass in March 15, 2009 and specify daysback as 1, you will get data from March 14, 2009 to March 15, 2009. It can't be greater than today's date. Option parameter:
    * An explicit time can also be specified by adding `t{hh:mm:ss}` to the date. Example: 7-20-2012t08:45:00
    * All time are in UTC unless an offset is specified. Example: 7-20-2012t08:45:00-06:00
* Authentication: Requires a valid access token
* Providing an enddate will result in a non-streaming resonse, regardless if the enddate is in the future. If the enddate is today or in the future, the stream will stop at realtime.

### Returns

[Intraday Bar Data](../../objects/intraday-bar-data) object

### Errors

* `200` | No data available (Technically not an error, but a response that is not a barchart)
* `400` | Invalid interval quantity
* `404` | Not Found
  * INVALID SYMBOL
  * Invalid bar interval quantity
  * Invalid bar interval unit
  * Invalid end date
  * Invalid start date
  * endDate cannot be greater than today
  * lastDate cannot be greater than today
* `5xx` | Unknown internal service error. [Contact TradeStation](mailto:webapi@tradestation.com)

### Examples

Example Request:

    GET https://api.tradestation.com/v2/stream/barchart/yhoo/1/minute/06-13-2013 HTTP/1.1
    Authorization: Bearer accesstokengoeshere
    Accept: application/JSON

Example Response:

    HTTP/1.1 200 OK
    Transfer-Encoding: chunked
    Content-Type: text/plain

    {
        "Close": 25.81,
        "DownTicks": 136,
        "DownVolume": 100987,
        "High": 25.83,
        "Low": 25.71,
        "Open": 25.81,
        "Status": 13,
        "TimeStamp": "\/Date(1371130260000)\/",
        "TotalTicks": 344,
        "TotalVolume": 137413,
        "UnchangedTicks": 0,
        "UnchangedVolume": 0,
        "UpTicks": 208,
        "UpVolume": 36426,
        "OpenInterest": 0
    }
    {
        "Close": 25.83,
        "DownTicks": 94,
        "DownVolume": 26392,
        "High": 25.84,
        "Low": 25.81,
        "Open": 25.81,
        "Status": 13,
        "TimeStamp": "\/Date(1371130320000)\/",
        "TotalTicks": 211,
        "TotalVolume": 44957,
        "UnchangedTicks": 0,
        "UnchangedVolume": 0,
        "UpTicks": 117,
        "UpVolume": 18565,
        "OpenInterest": 0
    }
    {
        "Close": 25.84,
        "DownTicks": 50,
        "DownVolume": 13145,
        "High": 25.85,
        "Low": 25.82,
        "Open": 25.83,
        "Status": 13,
        "TimeStamp": "\/Date(1371130380000)\/",
        "TotalTicks": 137,
        "TotalVolume": 34414,
        "UnchangedTicks": 0,
        "UnchangedVolume": 0,
        "UpTicks": 87,
        "UpVolume": 21269,
        "OpenInterest": 0
    }


Bars Back Example Request:

    GET https://api.tradestation.com/v2/stream/barchart/spy/1/minute/5/06-13-2013 HTTP/1.1
    Authorization: Bearer accesstokengoeshere
    Host: api.tradestation.com

Bars Back Example Response:

    HTTP/1.1 200 OK
    Transfer-Encoding: chunked
    Content-Type: text/plain

    {
        "Close": 161.98,
        "DownTicks": 755,
        "DownVolume": 250102,
        "High": 162.0,
        "Low": 161.92,
        "Open": 161.94,
        "Status": 13,
        "TimeStamp": "\/Date(1371066960000)\/",
        "TotalTicks": 1741,
        "TotalVolume": 604346,
        "UnchangedTicks": 0,
        "UnchangedVolume": 0,
        "UpTicks": 986,
        "UpVolume": 354244,
        "OpenInterest": 0
    }
    {
        "Close": 161.94,
        "DownTicks": 908,
        "DownVolume": 298608,
        "High": 161.99,
        "Low": 161.93,
        "Open": 161.98,
        "Status": 13,
        "TimeStamp": "\/Date(1371067020000)\/",
        "TotalTicks": 1738,
        "TotalVolume": 578098,
        "UnchangedTicks": 0,
        "UnchangedVolume": 0,
        "UpTicks": 830,
        "UpVolume": 279490,
        "OpenInterest": 0
    }
    {
        "Close": 161.89,
        "DownTicks": 1103,
        "DownVolume": 513462,
        "High": 161.95,
        "Low": 161.88,
        "Open": 161.95,
        "Status": 13,
        "TimeStamp": "\/Date(1371067080000)\/",
        "TotalTicks": 1981,
        "TotalVolume": 870751,
        "UnchangedTicks": 0,
        "UnchangedVolume": 0,
        "UpTicks": 878,
        "UpVolume": 357289,
        "OpenInterest": 0
    }
    {
        "Close": 161.83,
        "DownTicks": 1430,
        "DownVolume": 963291,
        "High": 161.91,
        "Low": 161.82,
        "Open": 161.89,
        "Status": 13,
        "TimeStamp": "\/Date(1371067140000)\/",
        "TotalTicks": 2623,
        "TotalVolume": 1512891,
        "UnchangedTicks": 0,
        "UnchangedVolume": 0,
        "UpTicks": 1193,
        "UpVolume": 549600,
        "OpenInterest": 0
    }
    {
        "Close": 161.76,
        "DownTicks": 2510,
        "DownVolume": 2329239,
        "High": 161.84,
        "Low": 161.74,
        "Open": 161.83,
        "Status": 536870941,
        "TimeStamp": "\/Date(1371067200000)\/",
        "TotalTicks": 4576,
        "TotalVolume": 3670604,
        "UnchangedTicks": 0,
        "UnchangedVolume": 0,
        "UpTicks": 2066,
        "UpVolume": 1341365,
        "OpenInterest": 0
    }
    END
