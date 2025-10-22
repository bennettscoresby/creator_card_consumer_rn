# MerchantgroupsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getMerchantGroup**](#getmerchantgroup) | **GET** /merchantgroups/{token} | Returns a Merchant Group|
|[**getMerchantGroups**](#getmerchantgroups) | **GET** /merchantgroups | Lists all Merchant Groups|
|[**postMerchantGroup**](#postmerchantgroup) | **POST** /merchantgroups | Creates a merchant group|
|[**putMerchantGroupsToken**](#putmerchantgroupstoken) | **PUT** /merchantgroups/{token} | Updates an Merchant Group|

# **getMerchantGroup**
> MerchantGroupResponse getMerchantGroup()


### Example

```typescript
import {
    MerchantgroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MerchantgroupsApi(configuration);

let token: string; //Merchant Group token (default to undefined)

const { status, data } = await apiInstance.getMerchantGroup(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Merchant Group token | defaults to undefined|


### Return type

**MerchantGroupResponse**

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
|**404** | Merchant Group not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMerchantGroups**
> MerchantGroupListResponse getMerchantGroups()


### Example

```typescript
import {
    MerchantgroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MerchantgroupsApi(configuration);

let mid: string; //mid (optional) (default to undefined)
let count: number; //Number of items to retrieve. Count can be between 1 - 10 items. (optional) (default to 10)
let startIndex: number; //Indicates from what row to start returning data. (optional) (default to 0)
let sortBy: string; //Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getMerchantGroups(
    mid,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mid** | [**string**] | mid | (optional) defaults to undefined|
| **count** | [**number**] | Number of items to retrieve. Count can be between 1 - 10 items. | (optional) defaults to 10|
| **startIndex** | [**number**] | Indicates from what row to start returning data. | (optional) defaults to 0|
| **sortBy** | [**string**] | Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. | (optional) defaults to '-lastModifiedTime'|


### Return type

**MerchantGroupListResponse**

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

# **postMerchantGroup**
> MerchantGroupResponse postMerchantGroup()


### Example

```typescript
import {
    MerchantgroupsApi,
    Configuration,
    MerchantGroupRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MerchantgroupsApi(configuration);

let merchantGroupRequest: MerchantGroupRequest; // (optional)

const { status, data } = await apiInstance.postMerchantGroup(
    merchantGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **merchantGroupRequest** | **MerchantGroupRequest**|  | |


### Return type

**MerchantGroupResponse**

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

# **putMerchantGroupsToken**
> MerchantGroupResponse putMerchantGroupsToken(merchantGroupUpdateRequest)


### Example

```typescript
import {
    MerchantgroupsApi,
    Configuration,
    MerchantGroupUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MerchantgroupsApi(configuration);

let token: string; // (default to undefined)
let merchantGroupUpdateRequest: MerchantGroupUpdateRequest; //Merchant Group

const { status, data } = await apiInstance.putMerchantGroupsToken(
    token,
    merchantGroupUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **merchantGroupUpdateRequest** | **MerchantGroupUpdateRequest**| Merchant Group | |
| **token** | [**string**] |  | defaults to undefined|


### Return type

**MerchantGroupResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad request |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

