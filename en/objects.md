---
layout: en
title: Objects
category: objects
permalink: objects/
weight: 8
---

These are all the objects that can be either sent to or returned from the WebAPI. [Format is determined based on the request](../getting-started/response-formats). Select an object from the navigation to see schema.

{% for doc in site.pages %}{% if doc.category == 'objects' %}{% unless doc.title == 'List of Objects' %}
- <a href="{{site.baseurl}}{{doc.url}}">{{doc.title}}</a>
{% endunless %}{% endif %}{% endfor %}