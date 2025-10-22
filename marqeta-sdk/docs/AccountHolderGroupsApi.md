# AccountHolderGroupsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAccountholdergroups**](#getaccountholdergroups) | **GET** /accountholdergroups | Lists account holder groups|
|[**getAccountholdergroupsToken**](#getaccountholdergroupstoken) | **GET** /accountholdergroups/{token} | Returns a specific account holder group object|
|[**postAccountholdergroups**](#postaccountholdergroups) | **POST** /accountholdergroups | Creates an account holder group object|
|[**putAccountholdergroupsToken**](#putaccountholdergroupstoken) | **PUT** /accountholdergroups/{token} | Updates an account holder group object|

# **getAccountholdergroups**
> AccountHolderGroupListResponse getAccountholdergroups()


### Example

```typescript
import {
    AccountHolderGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountHolderGroupsApi(configuration);

let count: number; //Number of items to retrieve. Count can be between 1 - 10 items. (optional) (default to 10)
let startIndex: number; //Indicates from what row to start returning data. (optional) (default to 0)
let sortBy: string; //Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getAccountholdergroups(
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of items to retrieve. Count can be between 1 - 10 items. | (optional) defaults to 10|
| **startIndex** | [**number**] | Indicates from what row to start returning data. | (optional) defaults to 0|
| **sortBy** | [**string**] | Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. | (optional) defaults to '-lastModifiedTime'|


### Return type

**AccountHolderGroupListResponse**

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

# **getAccountholdergroupsToken**
> AccountHolderGroupResponse getAccountholdergroupsToken()


### Example

```typescript
import {
    AccountHolderGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountHolderGroupsApi(configuration);

let token: string; //Account holder group token (default to undefined)

const { status, data } = await apiInstance.getAccountholdergroupsToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Account holder group token | defaults to undefined|


### Return type

**AccountHolderGroupResponse**

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
|**404** | Auto reload not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postAccountholdergroups**
> AccountHolderGroupResponse postAccountholdergroups(accountHolderGroupRequest)


### Example

```typescript
import {
    AccountHolderGroupsApi,
    Configuration,
    AccountHolderGroupRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountHolderGroupsApi(configuration);

let accountHolderGroupRequest: AccountHolderGroupRequest; //Account holder group object

const { status, data } = await apiInstance.postAccountholdergroups(
    accountHolderGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountHolderGroupRequest** | **AccountHolderGroupRequest**| Account holder group object | |


### Return type

**AccountHolderGroupResponse**

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

# **putAccountholdergroupsToken**
> AccountHolderGroupResponse putAccountholdergroupsToken(accountHolderGroupUpdateRequest)


### Example

```typescript
import {
    AccountHolderGroupsApi,
    Configuration,
    AccountHolderGroupUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountHolderGroupsApi(configuration);

let token: string; // (default to undefined)
let accountHolderGroupUpdateRequest: AccountHolderGroupUpdateRequest; //Account holder group update object

const { status, data } = await apiInstance.putAccountholdergroupsToken(
    token,
    accountHolderGroupUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountHolderGroupUpdateRequest** | **AccountHolderGroupUpdateRequest**| Account holder group update object | |
| **token** | [**string**] |  | defaults to undefined|


### Return type

**AccountHolderGroupResponse**

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

