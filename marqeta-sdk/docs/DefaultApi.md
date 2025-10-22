# DefaultApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createSpace**](#createspace) | **POST** /spaces | Create space.|
|[**createSpaceForKey**](#createspaceforkey) | **POST** /spaces/{space}/{key} | Create space for key.|
|[**deleteQueue**](#deletequeue) | **DELETE** /spaces/redis-queue/{queueName} | |
|[**deleteSpace**](#deletespace) | **DELETE** /spaces/{space}/{key} | Delete space.|
|[**feedbackFraudPost**](#feedbackfraudpost) | **POST** /feedback/fraud | Creates a fraud feedback|
|[**getDepositAccountUserToken**](#getdepositaccountusertoken) | **GET** /depositaccounts/user/{token}/direct | Get deposit account user token.|
|[**getSpace**](#getspace) | **GET** /spaces/{space}/{key} | Get space.|
|[**getSpaces**](#getspaces) | **GET** /spaces | Get spaces.|
|[**retrieveRefundTransitions**](#retrieverefundtransitions) | **GET** /accounts/{account_token}/refunds/{refund_token}/transitions | List transitions associated with a refund|

# **createSpace**
> createSpace()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.createSpace();
```

### Parameters
This endpoint does not have any parameters.


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
|**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createSpaceForKey**
> createSpaceForKey()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let space: string; // (default to undefined)
let key: string; // (default to undefined)
let timeout: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.createSpaceForKey(
    space,
    key,
    timeout
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **space** | [**string**] |  | defaults to undefined|
| **key** | [**string**] |  | defaults to undefined|
| **timeout** | [**number**] |  | (optional) defaults to undefined|


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
|**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteQueue**
> deleteQueue()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let queueName: string; // (default to undefined)

const { status, data } = await apiInstance.deleteQueue(
    queueName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **queueName** | [**string**] |  | defaults to undefined|


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
|**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteSpace**
> deleteSpace()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let space: string; // (default to undefined)
let key: string; // (default to undefined)

const { status, data } = await apiInstance.deleteSpace(
    space,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **space** | [**string**] |  | defaults to undefined|
| **key** | [**string**] |  | defaults to undefined|


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
|**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feedbackFraudPost**
> FraudFeedbackResponse feedbackFraudPost(fraudFeedbackRequest)

This endpoint is to get a fraud feedback from the customer.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    FraudFeedbackRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let fraudFeedbackRequest: FraudFeedbackRequest; //

const { status, data } = await apiInstance.feedbackFraudPost(
    fraudFeedbackRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fraudFeedbackRequest** | **FraudFeedbackRequest**|  | |


### Return type

**FraudFeedbackResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Fraud feedback is created successfully. |  -  |
|**400** | Bad Request Error |  -  |
|**401** | Unauthorized Error |  -  |
|**403** | Forbidden Error |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDepositAccountUserToken**
> getDepositAccountUserToken()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let token: string; //Token (default to undefined)

const { status, data } = await apiInstance.getDepositAccountUserToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Token | defaults to undefined|


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
|**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSpace**
> getSpace()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let space: string; // (default to undefined)
let key: string; // (default to undefined)
let timeout: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getSpace(
    space,
    key,
    timeout
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **space** | [**string**] |  | defaults to undefined|
| **key** | [**string**] |  | defaults to undefined|
| **timeout** | [**number**] |  | (optional) defaults to undefined|


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
|**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSpaces**
> getSpaces()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getSpaces();
```

### Parameters
This endpoint does not have any parameters.


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
|**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveRefundTransitions**
> RefundTransitionsPage retrieveRefundTransitions()

Retrieve a list of transitions associated with the refund.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accountToken: string; //Unique identifier of the credit account (default to undefined)
let refundToken: string; //Unique identifier of the refund (default to undefined)
let count: number; //The number of resources to retrieve. (optional) (default to 5)
let startIndex: number; //The sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'createdTime' | '-createdTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `createdTime`, and not by the field names appearing in response bodies such as `created_time`. (optional) (default to '-createdTime')

const { status, data } = await apiInstance.retrieveRefundTransitions(
    accountToken,
    refundToken,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account | defaults to undefined|
| **refundToken** | [**string**] | Unique identifier of the refund | defaults to undefined|
| **count** | [**number**] | The number of resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | The sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;createdTime&#39; | &#39;-createdTime&#39;**]**Array<&#39;createdTime&#39; &#124; &#39;-createdTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;createdTime&#x60;, and not by the field names appearing in response bodies such as &#x60;created_time&#x60;. | (optional) defaults to '-createdTime'|


### Return type

**RefundTransitionsPage**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Expected response to a valid request. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

