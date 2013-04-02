---
layout: en
title: Authorize
category: security
permalink: authorize/
---

### Summary

Obtaining authorization to access controlled resources

### Details

* Method: **POST**
* Path: `/security/authorize`
* URI Parameters:
  
  * *none*
* Authentication: Client authorization only
* Returns: [Access Token Response](../../objects/access-token-response) Object

### Errors

* 401 | Unauthorized
* 5xx | Unknown internal service error. [Contact TradeStation](mailto:webapi@tradestation.com)

### Examples

Example Request: ([Requesting Authorization details](../../getting-started/security-overview/))

    POST https://api.tradestation.com/v2/Security/Authorize HTTP/1.1
    Content-Type: application/x-www-form-urlencoded
    Host: api.trad.tradestation.com
    Content-Length: 610
    
    grant_type=authorization_code&code=K29qbmpGSEFDMLS0c=&client_id=42545245&redirect_uri=/webapi/authorize/authcodetest.aspx&client_secret=2452345

Example Response: ([Access Token Response](../../objects/access-token-response) object)

    HTTP/1.1 200 OK
    Cache-Control: private
    Content-Length: 468
    Content-Type: application/json; charset=utf-8
    Server: Microsoft-IIS/7.5
    X-AspNet-Version: 4.0.30319
    X-Powered-By: ASP.NET
    Date: Tue, 11 Jan 2011 17:54:16 GMT
    
    {
        "expires_in": 21943,
        "token": "ZFhZcGUzQ3lsblJEpiVDA9",
        "token_type": null,
        "userid": "testuser"
    }

## Using Refresh Tokens

### Summary

Beginning in `v2`, Refresh tokens will be returned with the `security/authorize` response. An Access Token will expire in 20 minutes and the Refresh Token that is returned with an Access Token can be used to obtain a new access token. Access Tokens obtained via the Implicit Grant Type cannot be refreshed, they will expire at midnight (EST) of the day issued.

### Details

* Method: `POST`
* Path: `/security/authorize`
* URI Parameters:

  * *none*
* Form Parameters:
  * grant_type = refresh_token
  * client_id
  * client_secret
  * redirect_uri
  * refresh_token
* Returns: [Access Token Response](../../objects/access-token-response) Object

**Example Request:**

    POST https://api.tradestation.com/v2/Security/Authorize HTTP/1.1
    Content-Type: application/x-www-form-urlencoded
    Host: api.trad.tradestation.com
    Content-Length: 610
    
    grant_type=refresh_token&client_id=123456&redirect_uri=http://www.myredirect.com&client_secret=789456&refresh_token=1234myRefreshToken56789