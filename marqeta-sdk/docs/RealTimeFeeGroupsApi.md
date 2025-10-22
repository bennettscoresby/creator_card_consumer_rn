# RealTimeFeeGroupsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getRealtimefeegroups**](#getrealtimefeegroups) | **GET** /realtimefeegroups | List real-time fee groups|
|[**getRealtimefeegroupsToken**](#getrealtimefeegroupstoken) | **GET** /realtimefeegroups/{token} | Retrieve real-time fee group|
|[**postRealtimefeegroups**](#postrealtimefeegroups) | **POST** /realtimefeegroups | Create real-time fee group|
|[**putRealtimefeegroupsToken**](#putrealtimefeegroupstoken) | **PUT** /realtimefeegroups/{token} | Update real-time fee group|

# **getRealtimefeegroups**
> RealTimeFeeGroupListResponse getRealtimefeegroups()

Use this endpoint to list existing real-time fee groups.  This endpoint supports <</core-api/field-filtering, field filtering>> and <</core-api/sorting-and-pagination, pagination>>.

### Example

```typescript
import {
    RealTimeFeeGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RealTimeFeeGroupsApi(configuration);

let count: number; //Number of real-time fee groups to retrieve. (optional) (default to 5)
let startIndex: number; //The sort order index of the first resource in the returned array. (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on).  Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Field on which to sort. Use any field in the resource model, or one of the system fields `lastModifiedTime` or `createdTime`. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. (optional) (default to '-createdTime')

const { status, data } = await apiInstance.getRealtimefeegroups(
    count,
    startIndex,
    fields,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of real-time fee groups to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | The sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on).  Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Field on which to sort. Use any field in the resource model, or one of the system fields &#x60;lastModifiedTime&#x60; or &#x60;createdTime&#x60;. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. | (optional) defaults to '-createdTime'|


### Return type

**RealTimeFeeGroupListResponse**

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

# **getRealtimefeegroupsToken**
> RealTimeFeeGroup getRealtimefeegroupsToken()

Use this endpoint to retrieve a specific real-time fee group. Include the real-time fee group `token` path parameter to specify the real-time fee group to return.

### Example

```typescript
import {
    RealTimeFeeGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RealTimeFeeGroupsApi(configuration);

let token: string; //Unique identifier of the real-time fee group. (default to undefined)

const { status, data } = await apiInstance.getRealtimefeegroupsToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the real-time fee group. | defaults to undefined|


### Return type

**RealTimeFeeGroup**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | Real-time fee group not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postRealtimefeegroups**
> RealTimeFeeGroup postRealtimefeegroups()

Use this endpoint to create a real-time fee group.

### Example

```typescript
import {
    RealTimeFeeGroupsApi,
    Configuration,
    RealTimeFeeGroupCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RealTimeFeeGroupsApi(configuration);

let realTimeFeeGroupCreateRequest: RealTimeFeeGroupCreateRequest; // (optional)

const { status, data } = await apiInstance.postRealtimefeegroups(
    realTimeFeeGroupCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **realTimeFeeGroupCreateRequest** | **RealTimeFeeGroupCreateRequest**|  | |


### Return type

**RealTimeFeeGroup**

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

# **putRealtimefeegroupsToken**
> RealTimeFeeGroup putRealtimefeegroupsToken()

Use this endpoint to update a real-time fee group. Include the real-time fee group `token` path parameter to specify the real-time fee group to update.

### Example

```typescript
import {
    RealTimeFeeGroupsApi,
    Configuration,
    RealTimeFeeGroupRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RealTimeFeeGroupsApi(configuration);

let token: string; //Unique identifier of the real-time fee group. (default to undefined)
let realTimeFeeGroupRequest: RealTimeFeeGroupRequest; // (optional)

const { status, data } = await apiInstance.putRealtimefeegroupsToken(
    token,
    realTimeFeeGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **realTimeFeeGroupRequest** | **RealTimeFeeGroupRequest**|  | |
| **token** | [**string**] | Unique identifier of the real-time fee group. | defaults to undefined|


### Return type

**RealTimeFeeGroup**

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
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

