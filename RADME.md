### Yelp API

- [Search API](https://www.yelp.com/developers/documentation/v2/search_api)
- [API console](https://www.yelp.com/developers/api_console)
- [Categories](https://www.yelp.com/developers/documentation/v2/category_list)

Example query

```
https://api.yelp.com/v2/search/?term=sushi&location=dupont circle, Washington, dc&sort=2&limit=10
```

[Authentication](https://www.yelp.com/developers/documentation/v2/authentication)

```
https://api.yelp.com/v2/search/?term=sushi&location=Washington, dc&limit=5&category_filter=asianfusion
```

The HMAC-SHA1 signature for Yelp

- the HMAC-SHA1 signature algorithm as defined in [RFC2104]
- the concatenated values of the Consumer Secret and Token Secret, separated by an '&' character (ASCII code 38) even if empty.
