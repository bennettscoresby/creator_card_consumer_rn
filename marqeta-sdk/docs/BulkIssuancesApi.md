# BulkIssuancesApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getBulkissuances**](#getbulkissuances) | **GET** /bulkissuances | Lists all bulk issuance requests|
|[**getBulkissuancesToken**](#getbulkissuancestoken) | **GET** /bulkissuances/{token} | Returns a bulk issuance request|
|[**postBulkissuances**](#postbulkissuances) | **POST** /bulkissuances | Creates a bulk issuance request for cards|

# **getBulkissuances**
> BulkCardOrderListResponse getBulkissuances()


### Example

```typescript
import {
    BulkIssuancesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BulkIssuancesApi(configuration);

let count: number; //Number of requests to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let sortBy: string; //Sort order (optional) (default to '-createdTime')

const { status, data } = await apiInstance.getBulkissuances(
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of requests to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-createdTime'|


### Return type

**BulkCardOrderListResponse**

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

# **getBulkissuancesToken**
> BulkIssuanceResponse getBulkissuancesToken()


### Example

```typescript
import {
    BulkIssuancesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BulkIssuancesApi(configuration);

let token: string; //Bulk issuance token (default to undefined)

const { status, data } = await apiInstance.getBulkissuancesToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Bulk issuance token | defaults to undefined|


### Return type

**BulkIssuanceResponse**

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
|**404** | Bulk issuance request not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postBulkissuances**
> BulkIssuanceResponse postBulkissuances()


### Example

```typescript
import {
    BulkIssuancesApi,
    Configuration,
    BulkIssuanceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BulkIssuancesApi(configuration);

let bulkIssuanceRequest: BulkIssuanceRequest; // (optional)

const { status, data } = await apiInstance.postBulkissuances(
    bulkIssuanceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bulkIssuanceRequest** | **BulkIssuanceRequest**|  | |


### Return type

**BulkIssuanceResponse**

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
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

