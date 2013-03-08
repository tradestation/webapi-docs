---
layout: en
title: Security Overview
category: getting-started
permalink: security-overview/
weight: 2
---

TradeStation WebAPI authorization is based on [OAuth 2.0](http://tools.ietf.org/html/rfc6749).

All WebAPI clients require an Access Token in order to access protected resources. The application flow for obtaining a token will vary from application to application but all tokens are issued via the `/security/authorize` service endpoint which grants tokens based on "Grant Types". Currently, WebAPI supports OAuth 2.0's Authorization Code grant type.

The WebAPI issues Access Tokens of type [Bearer](http://tools.ietf.org/html/rfc6750).

    Bearer Token
        A security token with the property that any party in possession of
        the token (a "bearer") can use the token in any way that any other
        party in possession of it can. Using a bearer token does not
        require a bearer to prove possession of cryptographic key material
        (proof of poessession).

Notes:

* *Users authorizing an API client must have their Multi-Factor questions and answers defined, otherwise Authorization will fail.*
* *The Password grant type is disabled since it requires the end-user to provide login credentials to the API Client directly.*
* *All requests require HTTPS. Some examples may be from a test environment and use HTTP for demonstration only.*

## Application Flow

### Native Mobile Application with Embedded Browser Flow

This flow is based on the Web Server flow but uses an embedded browser for obtaining the authorization code.

    +----------+          Client Identifier      +---------------+
    |         -+----(A)--- & Redirect URI ------>|               |
    | Embedded |                                 | Authorization |
    |   User   |<---(B)-- User authenticates --->|     Server    |
    |  Agent   |                                 |               |
    |         -+----(C)-- Authorization Code ---<|               |
    +-|----|---+                                 +---------------+
      |    |                                         |      |
     (A)  (C)                                        |      |
      |    |                                         |      |
      ^    v                                         |      |
    +----------+                                     |      |
    |          |                                     |      |
    |  Native  |                                     |      |
    |  Iphone  |                                     |      |
    |  Client  |                                     |      |
    |          |                                     |      |
    +----|-----+                                     |      |
         |                                           |      |
        (C)                                          |      |
         |                                           |      |
         v                                           |      |
    +---------+                                      |      |
    |         |>---(D)-- Client Credentials, --------'      |
    |  Server |          Authorization Code,                |
    |  -Based |            & Redirect URI                   |
    |  Client |                                             |
    |         |<---(E)----- Access Token -------------------'
    +---------+       (w/ Optional Refresh Token)

### Native Application Flow

In this application flow the client application would ask the end user for their credentials directly and include them in the request for an access token using the "Password" grant type.

The "Password" grant type is disabled due to security concerns.

### Web Server Flow

The web server flow is suitable for clients capable of interacting with the end-user's user-agent (typically a web browser) and capable of receiving incoming requests (via redirection) from the authorization server (capable of acting as an HTTP server).

    +----------+          Client Identifier      +---------------+
    |         -+----(A)--- & Redirect URI ------>|               |
    | End-user |                                 | Authorization |
    |    at    |<---(B)-- User authenticates --->|     Server    |
    | Browser  |                                 |               |
    |         -+----(C)-- Authorization Code ---<|               |
    +-|----|---+                                 +---------------+
      |    |                                         ^      v
     (A)  (C)                                        |      |
      |    |                                         |      |
      ^    v                                         |      |
    +---------+                                      |      |
    |         |>---(D)-- Client Credentials, --------'      |
    |  Server |          Authorization Code,                |
    |  -Based |            & Redirect URI                   |
    |  Client |                                             |
    |         |<---(E)----- Access Token -------------------'
    +---------+       (w/ Optional Refresh Token)

### Browser Application Flow (client side only)

**Not Supported Yet**

## Obtaining an Access Token (Grant Types)

### Authorization Code - Grant Type

The authorization code grant type allows the end users to authenticate with TradeStation directly and authorize the Client application to make calls on their behalf. Access Tokens obtained via the authorization code Grant Type can be refreshed, they will expire in 20 minutes of the time issued.

#### Step-by-Step

##### 1. Redirect user for authentication/authorization

The client application will route the end-user to our MFA (multi-factor authentication) login page web page.

Authorize Uri

* https://api.tradestation.com/authorize

Required query string parameters

* redirect_uri
* client_id = the client application's API key
* response_type = code

**Example Authorization Page Url**

    https://api.tradestation.com/authorize/?redirect_uri=https://exampleclientapp.com/authcode.aspx&client_id=D7635234&response_type=code

The URL will take you to a TradeStation login page.

##### 2. Client receives authorization code

Upon successful authentication; The user agent(browser) will be redirected to the URL provided and include an Authorization Code in the query string.

**Example Redirect**

    HTTP 301 Redirect
    RedirectURL = https://exampleclientapp.com/authcode.aspx?auth_code=AFF345CD12B

note:

* This redirect URL can be anything that the user agent can understand. In the case of an embedded browser it could be a URL to a native view, i.e.: device://viewname
* The Authorization Code is only valid for 30 seconds

##### 3. Exchange Authorization Code for Access Token

The Client uses the Authorization Code to request an Access Token via the `/security/authorize` service method using the `authorization_code` grant type;

Required Header:

* Content-Type: application/x-www-form-urlencoded
* Content-Length = Length of body information in UTF8

Required form parameters:

* grant_type = authorization_code
* client_id = The client application's API key
* redirect_uri = The redirect uri used when obtaining the Authorization Code being provided
* code = The Authorization Code value
* client_secret = The secret for the client application's API Key

**Example Request**

    POST https://api.tradestation.com/v2/Security/Authorize HTTP/1.1
    Content-Type: application/x-www-form-urlencoded
    Host: api.tradestation.com
    Content-Length: 630
    
    grant_type=authorization_code&client_id=11111111-1111-1111-1111-111111111111&redirect_uri=test.aspx&client_secret=11111111-1111-1111-1111-111111111111&code=YjlkWDRqVmxlRXphaZzM1NWQ1MzZtVVFJQXFkcmk3eldOSjRUSDJHSklqN1dMNkk=&response_type=token

**Example Response**

    HTTP/1.1 200 OK
    Cache-Control: private
    Content-Length: 927
    Content-Type: application/json; charset=utf-8
    Server: Microsoft-IIS/7.5
    X-AspNet-Version: 4.0.30319
    X-Powered-By: ASP.NET
    Date: Tue, 06 Dec 2011 20:50:32 GMT
    
    {
        "RefreshToken": "eGlhc2xvTTVJaEdXMWs4VjhraWx4bk5QMHJMaA==",
        "expires_in": 29367,
        "token": "eGlhc2xvozT2IxWnVITmdwGVFPQ==",
        "token_type": "AccessToken",
        "userid": "testUser"
    }

### Implicit - Grant Type

Unlike the authorization code grant type in which the client makes separate requests for authorization and access token, the client receives the access token as the result of the authorization request.

The implicit grant type does not include client authentication, and relies on the presence of the resource owner and the registration of the redirection URI. Because the access token is encoded into the redirection URI, it may be exposed to the resource owner and other applications residing on its device.

For an API client to use implicit authorization, they must have a domain specified in their Client-Info profile. In version 2, the access token returned by the Implicit grant type will expire 24 hours from the time it was issued.

#### Step-by-Step

##### 1. Access the authorize resource with a valid query string parameter

Required query string parameters:

* redirect_uri = must match the registered domain provided by the client
* client_id = the client application's API key
* response_type = token

##### 2. Redirect user for authentication/authorization

The client application will route the end-user to our MFA (multi-form authentication) login web page.

##### 3. Upon successful authentication, redirect user to provided redirect_uri with access token provided in the fragment

Authorize URI

* https://api.tradestation.com/authorize

**Example Authorization Page URL**

    https://api.tradestation.com/v2/authorize/?redirect_uri=https://www.exampleclientapp.com&client_id=D7635234&response_type=token


**Example Response**

    https://api.tradestation.com/v2/authorize/?redirect_uri=https://www.exampleclientapp.com&client_id=D7635234&response_type=token

### Client Credentials - Grant Type

The Client Credentials grant type is used to obtain a token for the sole purpose of performing a symbol-lookup/search. This grant type only requires the API Key and Secret.

The API client issued a Token with which symbol lookup requests can be made.

#### Step-by-Step

##### 1. Exchange Client Credentials for Access Token

Make the HTTP POST request to the `security/authorize` service with these headers and form values.

Required Headers:

* Content-Type: application/x-www-form-urlencoded
* Content-Length: Length of body information in UTF8

Required Body with name value pairs using the form-urlencoding format:

* grant_type = "client_credentials"
* client_id = the client application's API key
* client_secret = the client application's API secret

The result of the request will be a JSON object with these values:

* expires_in = seconds until the access token will expire
* token = the access token value
* token_type = currently will always be null
* userid = "CLIENTONLYLOGIN"

**Example Request**

    POST https://api.tradestation.com/Security/Authorize HTTP/1.1
    Host: api.tradestation.com
    Accept: application/json
    Content-Type: application/x-www-form-urlencoded
    Content-Length: 66
    
    grant_type=client_credentials&client_id=123456&client_secret=78910

**Example Response**

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
        "token": "ZFhZcGUzQ3lsbMEpiVDA9",
        "token_type": null,
        "userid": "CLIENTONLYLOGIN"
    }

## Accessing Protected Resources

Clients access protected resources by including an access token in the requests to the resource server.

The token, prefixed with `Bearer` and a space must be included in the `Authorization` header of all requests for access to resources on behalf of a TradeStation user.

**Example Request**

    GET https://api.tradestation.com/v2/users/TestUser1/accounts HTTP/1.1
    Host: api.tradestation.com
    Authorization: Bearer eE45VkdQSnlBcmI0Q2RqTi82SFdMSVE0SXMyOFo5Z3dzVzdzdk
    Accept: application/json

**Example Response**

    HTTP/1.1 200 OK
    Cache-Control: private
    Content-Length: 291
    Content-Type: application/json; charset=utf-8
    Server: Microsoft-IIS/7.5
    X-AspNet-Version: 4.0.30319
    X-Powered-By: ASP.NET
    Date: Thu, 06 Jan 2011 20:47:05 GMT
    
    [{
        "Key": 114275,
        "Name": "543061 QA",
        "Type": "C",
        "TypeDescription": "Cash"
    }, {
        "Key": 114276,
        "Name": "5430611 QA",
        "Type": "M",
        "TypeDescription": "Margin"
    }, {
        "Key": 114277,
        "Name": "5430612 QA",
        "Type": "F",
        "TypeDescription": "Futures"
    }, {
        "Key": 114278,
        "Name": "FX543061 QA",
        "Type": "X",
        "TypeDescription": "Forex"
    }]

*Notes:*

* *Failing to provide a valid access token results in a HTTP 401 Unauthorized response.*
* *The Access Token is only valid for the Date it was issued. All dates and timestamps are calculated using UTC.*
