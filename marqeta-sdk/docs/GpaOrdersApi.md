# GpaOrdersApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getGpaordersToken**](#getgpaorderstoken) | **GET** /gpaorders/{token} | Returns a GPA order|
|[**getGpaordersUnloads**](#getgpaordersunloads) | **GET** /gpaorders/unloads | Lists all GPA returns|
|[**getGpaordersUnloadsUnloadtoken**](#getgpaordersunloadsunloadtoken) | **GET** /gpaorders/unloads/{unload_token} | Returns a specific GPA return|
|[**postGpaorders**](#postgpaorders) | **POST** /gpaorders | Funds a user\&#39;s GPA account|
|[**postGpaordersUnloads**](#postgpaordersunloads) | **POST** /gpaorders/unloads | Returns a GPA order|

# **getGpaordersToken**
> GpaResponse getGpaordersToken()


### Example

```typescript
import {
    GpaOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GpaOrdersApi(configuration);

let token: string; // (default to undefined)

const { status, data } = await apiInstance.getGpaordersToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] |  | defaults to undefined|


### Return type

**GpaResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | GPA order token not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGpaordersUnloads**
> GPAUnloadListResponse getGpaordersUnloads()


### Example

```typescript
import {
    GpaOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GpaOrdersApi(configuration);

let count: number; //Number of GPA unloads to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Sort order (optional) (default to '-lastModifiedTime')
let userToken: string; //User token (optional) (default to undefined)
let businessToken: string; //Business token (optional) (default to undefined)
let originalOrderToken: string; //Original order token (optional) (default to undefined)

const { status, data } = await apiInstance.getGpaordersUnloads(
    count,
    startIndex,
    fields,
    sortBy,
    userToken,
    businessToken,
    originalOrderToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of GPA unloads to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-lastModifiedTime'|
| **userToken** | [**string**] | User token | (optional) defaults to undefined|
| **businessToken** | [**string**] | Business token | (optional) defaults to undefined|
| **originalOrderToken** | [**string**] | Original order token | (optional) defaults to undefined|


### Return type

**GPAUnloadListResponse**

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

# **getGpaordersUnloadsUnloadtoken**
> GpaReturns getGpaordersUnloadsUnloadtoken()


### Example

```typescript
import {
    GpaOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GpaOrdersApi(configuration);

let unloadToken: string; //Unload token (default to undefined)

const { status, data } = await apiInstance.getGpaordersUnloadsUnloadtoken(
    unloadToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **unloadToken** | [**string**] | Unload token | defaults to undefined|


### Return type

**GpaReturns**

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
|**404** | Return not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postGpaorders**
> GpaResponse postGpaorders()


### Example

```typescript
import {
    GpaOrdersApi,
    Configuration,
    GpaRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GpaOrdersApi(configuration);

let gpaRequest: GpaRequest; // (optional)

const { status, data } = await apiInstance.postGpaorders(
    gpaRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gpaRequest** | **GpaRequest**|  | |


### Return type

**GpaResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Success |  -  |
|**400** | Bad request |  -  |
|**409** | Request already processed with a different payload |  -  |
|**422** | Rule violations or declined transactions from funding source |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postGpaordersUnloads**
> GpaReturns postGpaordersUnloads()


### Example

```typescript
import {
    GpaOrdersApi,
    Configuration,
    UnloadRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new GpaOrdersApi(configuration);

let unloadRequestModel: UnloadRequestModel; // (optional)

const { status, data } = await apiInstance.postGpaordersUnloads(
    unloadRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **unloadRequestModel** | **UnloadRequestModel**|  | |


### Return type

**GpaReturns**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Success |  -  |
|**400** | Bad request |  -  |
|**404** | GPA order token not found |  -  |
|**412** | Pre-condition failed. Unload amount is greater than load amount |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

