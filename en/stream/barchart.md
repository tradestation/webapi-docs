---
layout: en
title: BarChart
category: stream
permalink: barchart/
---

### Summary

Streams barchart information for a particular symbol from a given start date, bars back, or trading days back. This resource can also return a barchart for a given time-span. For Minute charts, teh maximum date range for 1 minute bars is 40 calendar days. For 2 minute bars it's 80, 3 minute bars 120 days. Maximum date range = Minute interval * 40.

* When requesting barcharts with an explicit timestamp, the `closed` bars between the timestamps will be returned.

### Details

* Method: `GET`

#### Date Range

* Path: `/stream/barchart/{symbol}/{barIntervalQuantity}/{barIntervalUnit}/{startDate}/{endDate}`
* URI Parameters:
  * {symbol}
  * {barIntervalQuantity} = Must be ` for interval units Daily, Weekly and Monthly, and the max value for minute is 1440
  * {barIntervalUnit} = {Minute, Daily, Weekly, Monthly}
  * {startDate} = {m-d-yyyy} - This date value is for time 00:00:00 of that day
    * An explicit time can also be specified by adding `t{hh:mm:ss}` to the date. Example: 7-20-2012t08:45:00
    * All time are in UTC unless an offset is specified. Example: 7-20-2012t08:45:00-06:00
  * {endDate} = {m-d-yyyy} - This date value is for time 00:00:00 of that day. Optional parameter:
    * An explicit time can also be specified by adding `t{hh:mm:ss}` to the date. Example: 7-20-2012t08:45:00
    * All time are in UTC unless an offset is specified. Example: 7-20-2012t08:45:00-06:00

#### Bars Back

* Path: `/stream/barchart/{symbol}/{barIntervalQuantity}/{barIntervalUnit}/{barsBack}/{lastDate}`
* URI Parameters:
  * {symbol}
  * {barIntervalQuantity} = Must be 1 for interval units Daily, Weekly and Monthly, and the max value for a chart for minute bars is 1440
  * {barIntervalUnit} = {Minute, Daily, Weekly, Monthly}
  * [barsBack} = Number of bars to go back from the current time or the value provided in lastDate, max value permitted 60000
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

`IntradayBarData` object

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
* `5xx` | Unknown internal service error. Contact TradeStation

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
