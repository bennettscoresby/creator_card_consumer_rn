# WebhooksApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getWebhooks**](#getwebhooks) | **GET** /webhooks | List webhooks|
|[**getWebhooksToken**](#getwebhookstoken) | **GET** /webhooks/{token} | Retrieve webhook|
|[**postWebhooks**](#postwebhooks) | **POST** /webhooks | Create webhook|
|[**postWebhooksTokenEventtypeEventtoken**](#postwebhookstokeneventtypeeventtoken) | **POST** /webhooks/{token}/{event_type}/{event_token} | Resend event notification|
|[**postWebhooksTokenPing**](#postwebhookstokenping) | **POST** /webhooks/{token}/ping | Ping webhook|
|[**putWebhooksCustomHeadersToken**](#putwebhookscustomheaderstoken) | **PUT** /webhooks/customheaders/{token} | Update webhook custom headers|
|[**putWebhooksToken**](#putwebhookstoken) | **PUT** /webhooks/{token} | Update webhook|

# **getWebhooks**
> WebhookResponseModelListResponse getWebhooks()

Returns an array of all webhooks.  This endpoint supports <</core-api/field-filtering, field filtering>>, <</core-api/sorting-and-pagination, sorting>>, and <</core-api/sorting-and-pagination, pagination>>.  [NOTE] As shown in the example, `config.secret`, `config.basic_auth_username`, and `config.basic_auth_password` are masked in responses to this and all other requests.  To ensure you can access these values as needed, update them on your endpoint, store them securely, and then <</core-api/webhooks#put, update the webhook subscription>>.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let active: boolean; //Set to `true` to return only active webhook configurations, otherwise all webhook configurations will be returned. (optional) (default to false)
let count: number; //Number of resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Field on which to sort. Use any field in the resource model, or one of the system fields `lastModifiedTime` or `createdTime`. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. (optional) (default to '-createdTime')

const { status, data } = await apiInstance.getWebhooks(
    active,
    count,
    startIndex,
    fields,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **active** | [**boolean**] | Set to &#x60;true&#x60; to return only active webhook configurations, otherwise all webhook configurations will be returned. | (optional) defaults to false|
| **count** | [**number**] | Number of resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Field on which to sort. Use any field in the resource model, or one of the system fields &#x60;lastModifiedTime&#x60; or &#x60;createdTime&#x60;. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. | (optional) defaults to '-createdTime'|


### Return type

**WebhookResponseModelListResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad request |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebhooksToken**
> WebhookResponseModel getWebhooksToken()

Retrieves a webhook.  [NOTE] As shown in the example, `config.secret`, `config.basic_auth_username`, and `config.basic_auth_password` are masked in responses to this and all other requests.  To ensure you can access these values as needed, update them on your endpoint, store them securely, and then <</core-api/webhooks#put, update the webhook subscription>>.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let token: string; //Unique identifier of the webhook. (default to undefined)

const { status, data } = await apiInstance.getWebhooksToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the webhook. | defaults to undefined|


### Return type

**WebhookResponseModel**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | Resource not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postWebhooks**
> WebhookResponseModel postWebhooks()

Creates a webhook.  [NOTE] As shown in the example, `config.secret`, `config.basic_auth_username`, and `config.basic_auth_password` are masked in responses to this and all other requests.  To access these values later, store them securely before making the request.

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    WebhookRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookRequestModel: WebhookRequestModel; // (optional)

const { status, data } = await apiInstance.postWebhooks(
    webhookRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookRequestModel** | **WebhookRequestModel**|  | |


### Return type

**WebhookResponseModel**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Success |  -  |
|**400** | User input error/Bad request |  -  |
|**409** | Request already processed with a different payload |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postWebhooksTokenEventtypeEventtoken**
> postWebhooksTokenEventtypeEventtoken()

Resends an event notification to your webhook endpoint.  Although you send this request as a `POST`, all parameters are passed in the URL and the body is empty. The event notification is resent to your webhook endpoint and is also returned in the response to this request.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let token: string; //Unique identifier of the webhook. (default to undefined)
let eventType: 'chargebacktransition' | 'digitalwallettokentransition' | 'cardtransition' | 'usertransition' | 'businesstransition' | 'transaction' | 'threedstransition'; //Specifies the type of event you want to resend. (default to undefined)
let eventToken: string; //Unique identifier of the event for which you want to resend a notification. (default to undefined)

const { status, data } = await apiInstance.postWebhooksTokenEventtypeEventtoken(
    token,
    eventType,
    eventToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the webhook. | defaults to undefined|
| **eventType** | [**&#39;chargebacktransition&#39; | &#39;digitalwallettokentransition&#39; | &#39;cardtransition&#39; | &#39;usertransition&#39; | &#39;businesstransition&#39; | &#39;transaction&#39; | &#39;threedstransition&#39;**]**Array<&#39;chargebacktransition&#39; &#124; &#39;digitalwallettokentransition&#39; &#124; &#39;cardtransition&#39; &#124; &#39;usertransition&#39; &#124; &#39;businesstransition&#39; &#124; &#39;transaction&#39; &#124; &#39;threedstransition&#39;>** | Specifies the type of event you want to resend. | defaults to undefined|
| **eventToken** | [**string**] | Unique identifier of the event for which you want to resend a notification. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | User input error/Bad request |  -  |
|**404** | Resource not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postWebhooksTokenPing**
> WebhookPingModel postWebhooksTokenPing()

Pings your webhook endpoint.  Send a ping request to your webhook endpoint to validate credentials and connectivity. Your webhook endpoint must be configured to respond.  === Configuring your webhook endpoint  When the Marqeta platform receives the ping request, it sends a `POST` request containing the following body to the URL of your webhook endpoint:  [#ping-webhook-sample] [source,json] ---- {   \"pings\": [     {       \"token\": \"marqeta\",       \"payload\": \"healthcheck\"     }   ] } ----  To indicate that it is functioning properly, your webhook endpoint must respond with a status code of `200` (see <</developer-guides/signature-verification, Signature Verification>> for a code example that identifies a ping request). The response can optionally include a link:http://www.json.org/[JSON, window=\"_blank\"]-formatted body, for example:  [#ping-webhook-sample-2] [source,json] ---- {\"my_endpoint_status\": \"alive\"} ----  The Marqeta platform then responds to its requestor by echoing, as-is, the response code and body received from your webhook endpoint.  === Using the ping facility  To ping a webhook endpoint, send a `POST` request to `/webhooks/{token}/ping` and use the `token` path parameter to specify which webhook you want to reach. Include an empty, link:http://www.json.org/[JSON, window=\"_blank\"]-formatted body in the request, that is:  [#ping-webhook-sample-3] [source,json] ---- {} ----  The following chain of actions occurs during the successful execution of a ping operation:  . The Marqeta platform receives the ping request (`POST` to `/webhooks/{token}/ping`). . The Marqeta platform sends a request to your webhook endpoint. . Your webhook endpoint responds with a status code of \"200\" and an optional body. . The Marqeta platform responds to its requestor by echoing, as-is, the response code and body it received from your webhook endpoint.  [NOTE] If the customer-hosted endpoint fails to respond within five seconds, the Marqeta platform times out the request and responds with the following message body (where `<optional message>` represents additional details you can choose to include in the response):  [#ping-webhook-sample-4] [source,json] ---- {   \"error_message\": \"Webhook operation failed \" + <optional message>,   \"error_code\": \"422600\" } ----  Failed pings are not automatically retried.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let token: string; //Unique identifier of the webhook. (default to undefined)

const { status, data } = await apiInstance.postWebhooksTokenPing(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the webhook. | defaults to undefined|


### Return type

**WebhookPingModel**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | User input error/Bad request |  -  |
|**404** | Resource not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putWebhooksCustomHeadersToken**
> WebhookResponseModel putWebhooksCustomHeadersToken()

Adds or updates a webhook\'s custom HTTP headers.

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    WebhookUpdateCustomHeaderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let token: string; //Unique identifier of the webhook. (default to undefined)
let webhookUpdateCustomHeaderRequest: WebhookUpdateCustomHeaderRequest; // (optional)

const { status, data } = await apiInstance.putWebhooksCustomHeadersToken(
    token,
    webhookUpdateCustomHeaderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookUpdateCustomHeaderRequest** | **WebhookUpdateCustomHeaderRequest**|  | |
| **token** | [**string**] | Unique identifier of the webhook. | defaults to undefined|


### Return type

**WebhookResponseModel**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | User input error/Bad request |  -  |
|**404** | Resource not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putWebhooksToken**
> WebhookResponseModel putWebhooksToken()

Updates a webhook.  You can also use this endpoint to disable webhooks you no longer want to receive—there is no `DELETE` method available to remove unneeded webhooks. To disable a webhook, use this endpoint to set its `active` field to `false`.  [NOTE] As shown in the example, `config.secret`, `config.basic_auth_username`, and `config.basic_auth_password` are masked in responses to this and all other requests.  To access these values later, store them securely before making the request.  When modifying authentication credentials, update the endpoint configuration before updating your webhook subscription to avoid missing any important event notifications.  For instructions on managing your webhooks via the Developer Dashboard, see the <</developer-guides/developer-tools/#_to_disable_a_webhook, Developer Tools>> guide.

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    WebhookBaseModel
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let token: string; //Unique identifier of the webhook. (default to undefined)
let webhookBaseModel: WebhookBaseModel; // (optional)

const { status, data } = await apiInstance.putWebhooksToken(
    token,
    webhookBaseModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookBaseModel** | **WebhookBaseModel**|  | |
| **token** | [**string**] | Unique identifier of the webhook. | defaults to undefined|


### Return type

**WebhookResponseModel**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | User input error/Bad request |  -  |
|**404** | Resource not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

