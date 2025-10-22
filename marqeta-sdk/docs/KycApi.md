# KycApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getKycBusinessBusinesstoken**](#getkycbusinessbusinesstoken) | **GET** /kyc/business/{business_token} | Lists all KYC results for a business|
|[**getKycToken**](#getkyctoken) | **GET** /kyc/{token} | Returns a specific KYC result|
|[**getKycUserUsertoken**](#getkycuserusertoken) | **GET** /kyc/user/{user_token} | Lists all KYC results for a user|
|[**postKyc**](#postkyc) | **POST** /kyc | Performs a KYC|

# **getKycBusinessBusinesstoken**
> KYCListResponse getKycBusinessBusinesstoken()


### Example

```typescript
import {
    KycApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KycApi(configuration);

let businessToken: string; //Business token (default to undefined)
let count: number; //Number of items to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Sort order (optional) (default to '-createdTime')

const { status, data } = await apiInstance.getKycBusinessBusinesstoken(
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
| **count** | [**number**] | Number of items to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-createdTime'|


### Return type

**KYCListResponse**

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
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getKycToken**
> KycResponse getKycToken()


### Example

```typescript
import {
    KycApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KycApi(configuration);

let token: string; //KYC token (default to undefined)

const { status, data } = await apiInstance.getKycToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | KYC token | defaults to undefined|


### Return type

**KycResponse**

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
|**404** | KYC not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getKycUserUsertoken**
> KYCListResponse getKycUserUsertoken()


### Example

```typescript
import {
    KycApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KycApi(configuration);

let userToken: string; //User token (default to undefined)
let count: number; //Number of items to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Sort order (optional) (default to '-createdTime')

const { status, data } = await apiInstance.getKycUserUsertoken(
    userToken,
    count,
    startIndex,
    fields,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userToken** | [**string**] | User token | defaults to undefined|
| **count** | [**number**] | Number of items to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-createdTime'|


### Return type

**KYCListResponse**

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
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postKyc**
> KycResponse postKyc()


### Example

```typescript
import {
    KycApi,
    Configuration,
    KycRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new KycApi(configuration);

let kycRequest: KycRequest; // (optional)

const { status, data } = await apiInstance.postKyc(
    kycRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **kycRequest** | **KycRequest**|  | |


### Return type

**KycResponse**

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

