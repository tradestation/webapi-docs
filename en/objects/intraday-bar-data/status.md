---
layout: en
title: Intraday Bar Data Status Enumeration
permalink: status/
---

The status value in the [Intraday Bar Data](../) object can be converted to binary and the corresponding set bits map to the characteristics that apply.

| Field                   | Type            | Description                                        |
| ----------------------- | --------------- | -------------------------------------------------- |
| NEW                     | bit position 0  |                                                    |
| REAL_TIME_DATA          | bit position 1  |                                                    |
| HISTORICAL_DATA         | bit position 2  |                                                    |
| STANDARD_CLOSE          | bit position 3  |                                                    |
| END_OF_SESSION_CLOSE    | bit position 4  |                                                    |
| UPDATE_CORPACTION       | bit position 5  |                                                    |
| UPDATE_CORRECTION       | bit position 6  |                                                    |
| ANALYSIS_BAR            | bit position 7  |                                                    |
| EXTENDED_BAR            | bit position 8  |                                                    |
| PREV_DAY_CORRECTION     | bit position 19 |                                                    |
| AFTER_MARKET_CORRECTION | bit position 23 |                                                    |
| PHANTOM_BAR             | bit position 24 |                                                    |
| EMPTY_BAR               | bit position 25 |                                                    |
| BACKFILL_DATA           | bit position 26 |                                                    |
| ARCHIVE_DATA            | bit position 27 |                                                    |
| GHOST_BAR               | bit position 28 | An empty bar but specifically for the end session  |
| END_OF_HISTORY_STREAM   | bit position 29 | Identifies last historical bar in a stream of bars |

### Example Conversion of Status Value to its Meaning

![]({{ site.baseurl }}/assets/images/intradaybar%20status%20examples.png)

### The Meaning of the Status Values

#### REAL_TIME_DATA

Set when there is data in the bar and the data is being built in "real time" from a trade

#### HISTORICAL_DATA

Set when there is data in the bar and the data is historical data, or is built from historical data

#### NEW

Set the first time the bar is sent

#### CLOSE

Is a bitmask to determine if the bar is closed

( ORGS_BAR_STATUS_STANDARD_CLOSE | ORGS_BAR_STATUS_END_OF_SESSION_CLOSE )

#### STANDARD_CLOSE

Set when the bar was closed "normally" (a 2 tick tickchart bar was closed because of the second tick, a 10-min bar chart was closed due to time, etc.)

#### END_OF_SESSION_CLOSE

Set when the bar was closed "prematurely due to the end of the trading session and the particular bar type is not meant to span trading sessions

#### ANALYSIS_BAR

Set when the bar should not be considered except for analysis purposes

#### PHANTOM_BAR

Set when the bar is synthetic - thus created only to fill gaps

#### GHOST_BAR

An empty bar but specifically for the end session

### Values Sent for Historical Data

All complete historical bars will be sent with _BAR_STATUS_NEW, _BAR_STATUS_HISTORICAL_DATA, and one of the _BAR_STATUS_CLOSE bits set (currently, either _BAR_STATUS_STANDARD_CLOSE, or _BAR_STATUS_END_OF_SESSION_CLOSE).

If a bar contains data and is currently being built (possibly only on the last bar sent with the historical data), it will be sent only with the _BAR_STATUS_NEW bit set, and the _BAR_STATUS_HISTORICAL_DATA bit set (because the data that it contains is historical and the bar is not being sent as the immediate result of a real time trade), but it will not have any of the "Close" bits set because it is not yet closed.

#### Examples for real time chart statuses sent

|                           | First Tick                 | Subsequent Ticks           | Last Tick or End of Period | End of Session |
| ------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------- |
| 1 tick chart              | New&#124;RTData&#124;Close | New&#124;RTData&#124;Close | New&#124;RTData&#124;Close | EOSClose       |
| 3 tick chart              | New&#124;RTData            | RTData                     | RTData&#124;StdClose       | EOSClose       |
| 1 minute chart            | New&#124;RTData            | RTData                     | RTData&#124;StdClose       | EOSClose       |
| 1 min. chart (no trading) | N/A                        | N/A                        | New&#124;StdClose          | EOSClose       |
| Point & Figure chart      | New&#124;RTData            | AnalysisBar                | RTData&#124;StdClose       | N/A            |

N/A = Not applicable to this scenario

* Volume charts behave the same as multi-tick tick charts.