# BusinessTransitionsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getBusinesstransitionsBusinessBusinesstoken**](#getbusinesstransitionsbusinessbusinesstoken) | **GET** /businesstransitions/business/{business_token} | Returns transitions for a given business|
|[**getBusinesstransitionsToken**](#getbusinesstransitionstoken) | **GET** /businesstransitions/{token} | Returns a business transition|
|[**postBusinesstransitions**](#postbusinesstransitions) | **POST** /businesstransitions | Creates a business transition|

# **getBusinesstransitionsBusinessBusinesstoken**
> BusinessTransitionListResponse getBusinesstransitionsBusinessBusinesstoken()


### Example

```typescript
import {
    BusinessTransitionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessTransitionsApi(configuration);

let businessToken: string; //Business token (default to undefined)
let count: number; //Number of business transitions to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Sort order (optional) (default to '-id')

const { status, data } = await apiInstance.getBusinesstransitionsBusinessBusinesstoken(
    businessToken,
    count,
    startIndex,
    fields,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessToken** | [**string**] | Business token | defaults to undefined|
| **count** | [**number**] | Number of business transitions to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-id'|


### Return type

**BusinessTransitionListResponse**

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

# **getBusinesstransitionsToken**
> BusinessTransitionResponse getBusinesstransitionsToken()


### Example

```typescript
import {
    BusinessTransitionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessTransitionsApi(configuration);

let token: string; //Transition token (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getBusinesstransitionsToken(
    token,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Transition token | defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**BusinessTransitionResponse**

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
|**404** | Cardholder not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postBusinesstransitions**
> BusinessTransitionResponse postBusinesstransitions()


### Example

```typescript
import {
    BusinessTransitionsApi,
    Configuration,
    BusinessTransitionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessTransitionsApi(configuration);

let businessTransitionRequest: BusinessTransitionRequest; // (optional)

const { status, data } = await apiInstance.postBusinesstransitions(
    businessTransitionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessTransitionRequest** | **BusinessTransitionRequest**|  | |


### Return type

**BusinessTransitionResponse**

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
|**412** | Pre-condition setup issue |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

