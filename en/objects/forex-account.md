---
layout: en
title: Forex Account
category: objects
permalink: forex-account/
---

[See fields common among all account types.](../account/)

| Field                     | Type    | Description |
| ------------------------- | ------- | ----------- |
| BODMarginRequirement      | decimal | Beginning of day margin requirement |
| Currency                  | string  | Denomination that account is based in: USD |
| CurrencyDetails           | Array of [Forex Account Currency Detail](../forex-account-currency-detail) | Data object that provides details on a per currency basis with a summation in the accounts denomination |
| RealTimeMarginRequirement | decimal | Real-time margin requirement |