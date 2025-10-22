# MccGroupsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getMccgroups**](#getmccgroups) | **GET** /mccgroups | Lists all MCC groups|
|[**getMccgroupsToken**](#getmccgroupstoken) | **GET** /mccgroups/{token} | Returns a specific MCC group|
|[**postMccgroups**](#postmccgroups) | **POST** /mccgroups | Creates an MCC group|
|[**putMccgroupsToken**](#putmccgroupstoken) | **PUT** /mccgroups/{token} | Updates an MCC group|

# **getMccgroups**
> MCCGroupListResponse getMccgroups()


### Example

```typescript
import {
    MccGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MccGroupsApi(configuration);

let mcc: string; //MCC (optional) (default to undefined)
let count: number; //Number of items to retrieve. Count can be between 1 - 10 items. (optional) (default to 10)
let startIndex: number; //Indicates from what row to start returning data. (optional) (default to 0)
let sortBy: string; //Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getMccgroups(
    mcc,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mcc** | [**string**] | MCC | (optional) defaults to undefined|
| **count** | [**number**] | Number of items to retrieve. Count can be between 1 - 10 items. | (optional) defaults to 10|
| **startIndex** | [**number**] | Indicates from what row to start returning data. | (optional) defaults to 0|
| **sortBy** | [**string**] | Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. | (optional) defaults to '-lastModifiedTime'|


### Return type

**MCCGroupListResponse**

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

# **getMccgroupsToken**
> MccGroupModel getMccgroupsToken()


### Example

```typescript
import {
    MccGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MccGroupsApi(configuration);

let token: string; //MCC group token (default to undefined)

const { status, data } = await apiInstance.getMccgroupsToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | MCC group token | defaults to undefined|


### Return type

**MccGroupModel**

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
|**404** | MCC group not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postMccgroups**
> MccGroupModel postMccgroups(mccGroupModel)


### Example

```typescript
import {
    MccGroupsApi,
    Configuration,
    MccGroupModel
} from './api';

const configuration = new Configuration();
const apiInstance = new MccGroupsApi(configuration);

let mccGroupModel: MccGroupModel; //MCC group

const { status, data } = await apiInstance.postMccgroups(
    mccGroupModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mccGroupModel** | **MccGroupModel**| MCC group | |


### Return type

**MccGroupModel**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**400** | Bad request |  -  |
|**409** | Token already associated with a different payload |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putMccgroupsToken**
> MccGroupUpdateModel putMccgroupsToken(mccGroupUpdateModel)


### Example

```typescript
import {
    MccGroupsApi,
    Configuration,
    MccGroupUpdateModel
} from './api';

const configuration = new Configuration();
const apiInstance = new MccGroupsApi(configuration);

let token: string; // (default to undefined)
let mccGroupUpdateModel: MccGroupUpdateModel; //MCC group

const { status, data } = await apiInstance.putMccgroupsToken(
    token,
    mccGroupUpdateModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mccGroupUpdateModel** | **MccGroupUpdateModel**| MCC group | |
| **token** | [**string**] |  | defaults to undefined|


### Return type

**MccGroupUpdateModel**

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

