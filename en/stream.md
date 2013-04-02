---
layout: en
title: Stream
category: stream
permalink: stream/
weight: 7
---

### Summary

The Streaming Service provides the consumer with asynchronous streaming quotes. Requires real-time exchange entitlements.

### Service URI

`https://api.tradestation.com/v2/stream/{resource}`

*notes*: The streaming API methods sometimes behave differently than the other API calls with some error conditions. The non-streaming methods will only return a 200 status code on success but there are some streaming scenarios where the API will return a 200 status code followed by the data chunk `ERROR`. This will occur when the stream successfully starts but an error occurs on the server before any real data can be sent.

### Methods

* [Quote/Changes](quote-changes) | Retrieves only changes in quote information for a symbol list
* [Quote/Snapshots](quote-snapshots) | Retrieves a full quote object for any change in quote information for a symbol list
* [BarChart](barchart) | Retrieves quote information that can be used to build a chart
* [TickBars](tickbars) | Streams tick bars
* [JobSet](jobset) | Streams events from an EasyLanguage analysis technique running on a remote server
