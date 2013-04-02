---
layout: en
title: BarChart
category: stream
permalink: barchart/
weight: 3
---

### Summary

Streams barchart information for a particular symbol from a given start date, bars back, or trading days back. This resource can also return a barchart for a given time-span. For Minute charts, teh maximum date range for 1 minute bars is 40 calendar days. For 2 minute bars it's 80, 3 minute bars 120 days. Maximum date range = Minute interval * 40.

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

    GET https://api.tradestation.com/v2/stream/barchart/yhoo/1/minute/07-13-2011 HTTP/1.1
    Authorization: Bearer accesstokengoeshere
    Accept: application/JSON

Example Response:

    HTTP/1.1 200 OK
    Transfer-Encoding: chunked
    Content-Type: text/plain

    e9
    {
        "Close": 14.98,
        "DownTicks": 2,
        "DownVolume": 2500,
        "High": 14.98,
        "Low": 14.98,
        "Open": 14.98,
        "Status": 13,
        "TimeStamp": "\/Date(1310584680000)\/",
        "TotalTicks": 2,
        "TotalVolume": 2500,
        "UnchangedTicks": 0,
        "UnchangedVolume": 0,
        "UpTicks": 0,
        "UpVolume": 0
    }
    2
    f3
    {
        "Close": 14.94,
        "DownTicks": 85,
        "DownVolume": 23098,
        "High": 14.98,
        "Low": 14.94,
        "Open": 14.97,
        "Status": 13,
        "TimeStamp": "\/Date(1310584740000)\/",
        "TotalTicks": 139,
        "TotalVolume": 38498,
        "UnchangedTicks": 0,
        "UnchangedVolume": 0,
        "UpTicks": 54,
        "UpVolume": 15400
    }
    2
    ea
    {
        "Close": 14.94,
        "DownTicks": 7,
        "DownVolume": 900,
        "High": 14.95,
        "Low": 14.94,
        "Open": 14.95,
        "Status": 13,
        "TimeStamp": "\/Date(1310584800000)\/",
        "TotalTicks": 8,
        "TotalVolume": 1604,
        "UnchangedTicks": 0,
        "UnchangedVolume": 0,
        "UpTicks": 1,
        "UpVolume": 704
    }
    2
    f6
    {
        "Close": 14.92,
        "DownTicks": 217,
        "DownVolume": 138860,
        "High": 14.96,
        "Low": 14.9,
        "Open": 14.94,
        "Status": 13,
        "TimeStamp": "\/Date(1310584860000)\/",
        "TotalTicks": 376,
        "TotalVolume": 188562,
        "UnchangedTicks": 0,
        "UnchangedVolume": 0,
        "UpTicks": 159,
        "UpVolume": 49702
    }
    2
    ef
    {
        "Close": 14.93,
        "DownTicks": 7,
        "DownVolume": 1400,
        "High": 14.93,
        "Low": 14.91,
        "Open": 14.91,
        "Status": 13,
        "TimeStamp": "\/Date(1310584920000)\/",
        "TotalTicks": 45,
        "TotalVolume": 10600,
        "UnchangedTicks": 0,
        "UnchangedVolume": 0,
        "UpTicks": 38,
        "UpVolume": 9200
    }
    2
    f3
    {
        "Close": 14.92,
        "DownTicks": 104,
        "DownVolume": 32838,
        "High": 14.93,
        "Low": 14.91,
        "Open": 14.93,
        "Status": 13,
        "TimeStamp": "\/Date(1310584980000)\/",
        "TotalTicks": 154,
        "TotalVolume": 40677,
        "UnchangedTicks": 0,
        "UnchangedVolume": 0,
        "UpTicks": 50,
        "UpVolume": 7839
    }
    2

Bars Back Example Request:

    GET https://api.tradestation.com/v2/stream/barchart/spy/1/minute/5/12-09-2011?authorization=go HTTP/1.1
    Authorization: Bearer accesstokengoeshere
    Host: api.tradestation.com

Bars Back Example Response:

    HTTP/1.1 200 OK
    Transfer-Encoding: chunked
    Content-Type: text/plain

    100
	{
	    "Close": 126.25,
	    "DownTicks": 993,
	    "DownVolume": 410376,
	    "High": 126.25,
	    "Low": 126.11,
	    "Open": 126.12,
	    "Status": 13,
	    "TimeStamp": "\/Date(1323464160000)\/",
	    "TotalTicks": 3068,
	    "TotalVolume": 1679291,
	    "UnchangedTicks": 0,
	    "UnchangedVolume": 0,
	    "UpTicks": 2075,
	    "UpVolume": 1268915
	}
    2
    ff
    {
        "Close": 126.22,
        "DownTicks": 1736,
        "DownVolume": 651504,
        "High": 126.27,
        "Low": 126.2,
        "Open": 126.24,
        "Status": 13,
        "TimeStamp": "\/Date(1323464220000)\/",
        "TotalTicks": 3492,
        "TotalVolume": 1492705,
        "UnchangedTicks": 0,
        "UnchangedVolume": 0,
        "UpTicks": 1756,
        "UpVolume": 841201
    }
    2
    ff
    {
        "Close": 126.27,
        "DownTicks": 1199,
        "DownVolume": 486333,
        "High": 126.27,
        "Low": 126.2,
        "Open": 126.23,
        "Status": 13,
        "TimeStamp": "\/Date(1323464280000)\/",
        "TotalTicks": 2754,
        "TotalVolume": 1386424,
        "UnchangedTicks": 0,
        "UnchangedVolume": 0,
        "UpTicks": 1555,
        "UpVolume": 900091
    }
    2
    100
    {
        "Close": 126.18,
        "DownTicks": 1936,
        "DownVolume": 891842,
        "High": 126.27,
        "Low": 126.16,
        "Open": 126.27,
        "Status": 13,
        "TimeStamp": "\/Date(1323464340000)\/",
        "TotalTicks": 3441,
        "TotalVolume": 1540261,
        "UnchangedTicks": 0,
        "UnchangedVolume": 0,
        "UpTicks": 1505,
        "UpVolume": 648419
    }
    2
    102
    {
        "Close": 126.02,
        "DownTicks": 3000,
        "DownVolume": 1862967,
        "High": 126.18,
        "Low": 125.99,
        "Open": 126.17,
        "Status": 29,
        "TimeStamp": "\/Date(1323464400000)\/",
        "TotalTicks": 5529,
        "TotalVolume": 3183346,
        "UnchangedTicks": 0,
        "UnchangedVolume": 0,
        "UpTicks": 2529,
        "UpVolume": 1320379
    }
    2
    3
    END
    0