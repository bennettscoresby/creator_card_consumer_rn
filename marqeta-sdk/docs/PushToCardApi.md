# PushToCardApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getPushtocardsDisburse**](#getpushtocardsdisburse) | **GET** /pushtocards/disburse | Lists all push-to-card disbursements|
|[**getPushtocardsDisburseToken**](#getpushtocardsdisbursetoken) | **GET** /pushtocards/disburse/{token} | Returns a specific push-to-card disbursement|
|[**getPushtocardsPaymentcard**](#getpushtocardspaymentcard) | **GET** /pushtocards/paymentcard | Returns all push-to-card payment card details|
|[**getPushtocardsPaymentcardToken**](#getpushtocardspaymentcardtoken) | **GET** /pushtocards/paymentcard/{token} | Returns a specific paymentcard object|
|[**postPushtocardsDisburse**](#postpushtocardsdisburse) | **POST** /pushtocards/disburse | Initiates a push-to-card money disbursement|
|[**postPushtocardsPaymentcard**](#postpushtocardspaymentcard) | **POST** /pushtocards/paymentcard | Adds an external card to which funds will be pushed|

# **getPushtocardsDisburse**
> PushToCardDisburseListResponse getPushtocardsDisburse()


### Example

```typescript
import {
    PushToCardApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PushToCardApi(configuration);

let count: number; //Number of push-to-card disbursements to retrieve (optional) (default to 10)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let startIndex: number; //Start index (optional) (default to 0)
let sortBy: string; //Sort order (optional) (default to '-createdTime')

const { status, data } = await apiInstance.getPushtocardsDisburse(
    count,
    fields,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of push-to-card disbursements to retrieve | (optional) defaults to 10|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-createdTime'|


### Return type

**PushToCardDisburseListResponse**

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

# **getPushtocardsDisburseToken**
> PushToCardDisbursementResponse getPushtocardsDisburseToken()


### Example

```typescript
import {
    PushToCardApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PushToCardApi(configuration);

let token: string; //Push-to-card disbursement token (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getPushtocardsDisburseToken(
    token,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Push-to-card disbursement token | defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**PushToCardDisbursementResponse**

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
|**404** | Push-to-card disbursement not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPushtocardsPaymentcard**
> PushToCardListResponse getPushtocardsPaymentcard()


### Example

```typescript
import {
    PushToCardApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PushToCardApi(configuration);

let userToken: string; //User token (default to undefined)
let count: number; //Number of push-to-card payment cards to retrieve (optional) (default to 10)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let startIndex: number; //Start index (optional) (default to 0)
let sortBy: string; //Sort order (optional) (default to '-createdTime')

const { status, data } = await apiInstance.getPushtocardsPaymentcard(
    userToken,
    count,
    fields,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userToken** | [**string**] | User token | defaults to undefined|
| **count** | [**number**] | Number of push-to-card payment cards to retrieve | (optional) defaults to 10|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-createdTime'|


### Return type

**PushToCardListResponse**

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

# **getPushtocardsPaymentcardToken**
> PushToCardResponse getPushtocardsPaymentcardToken()


### Example

```typescript
import {
    PushToCardApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PushToCardApi(configuration);

let token: string; //Push-to-card token (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getPushtocardsPaymentcardToken(
    token,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Push-to-card token | defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**PushToCardResponse**

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
|**404** | Push-to-card details not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postPushtocardsDisburse**
> PushToCardDisbursementResponse postPushtocardsDisburse()


### Example

```typescript
import {
    PushToCardApi,
    Configuration,
    PushToCardDisburseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PushToCardApi(configuration);

let pushToCardDisburseRequest: PushToCardDisburseRequest; // (optional)

const { status, data } = await apiInstance.postPushtocardsDisburse(
    pushToCardDisburseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pushToCardDisburseRequest** | **PushToCardDisburseRequest**|  | |


### Return type

**PushToCardDisbursementResponse**

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
|**422** | Payment instrument is not active |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postPushtocardsPaymentcard**
> PushToCardResponse postPushtocardsPaymentcard()


### Example

```typescript
import {
    PushToCardApi,
    Configuration,
    PushToCardRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PushToCardApi(configuration);

let pushToCardRequest: PushToCardRequest; // (optional)

const { status, data } = await apiInstance.postPushtocardsPaymentcard(
    pushToCardRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pushToCardRequest** | **PushToCardRequest**|  | |


### Return type

**PushToCardResponse**

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
|**409** | Token already associated with a different payload |  -  |
|**422** | Push-to-card information is invalid |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

