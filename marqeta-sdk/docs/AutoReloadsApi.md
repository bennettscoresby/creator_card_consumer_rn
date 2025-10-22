# AutoReloadsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAutoreloads**](#getautoreloads) | **GET** /autoreloads | Lists all auto reloads for the program|
|[**getAutoreloadsToken**](#getautoreloadstoken) | **GET** /autoreloads/{token} | Returns a specific auto reload object|
|[**postAutoreloads**](#postautoreloads) | **POST** /autoreloads | Creates an auto reload object|
|[**putAutoreloadsToken**](#putautoreloadstoken) | **PUT** /autoreloads/{token} | Updates a specific auto reload object|

# **getAutoreloads**
> AutoReloadListResponse getAutoreloads()


### Example

```typescript
import {
    AutoReloadsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AutoReloadsApi(configuration);

let cardProduct: string; //Card product token (optional) (default to undefined)
let userToken: string; //User token (optional) (default to undefined)
let businessToken: string; //Business token (optional) (default to undefined)
let count: number; //Number of items to retrieve. Count can be between 1 - 10 items. (optional) (default to 10)
let startIndex: number; //Indicates from what row to start returning data. (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getAutoreloads(
    cardProduct,
    userToken,
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
| **cardProduct** | [**string**] | Card product token | (optional) defaults to undefined|
| **userToken** | [**string**] | User token | (optional) defaults to undefined|
| **businessToken** | [**string**] | Business token | (optional) defaults to undefined|
| **count** | [**number**] | Number of items to retrieve. Count can be between 1 - 10 items. | (optional) defaults to 10|
| **startIndex** | [**number**] | Indicates from what row to start returning data. | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. | (optional) defaults to '-lastModifiedTime'|


### Return type

**AutoReloadListResponse**

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

# **getAutoreloadsToken**
> AutoReloadResponseModel getAutoreloadsToken()


### Example

```typescript
import {
    AutoReloadsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AutoReloadsApi(configuration);

let token: string; //Auto reload token (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getAutoreloadsToken(
    token,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Auto reload token | defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**AutoReloadResponseModel**

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

# **postAutoreloads**
> AutoReloadResponseModel postAutoreloads(autoReloadModel)


### Example

```typescript
import {
    AutoReloadsApi,
    Configuration,
    AutoReloadModel
} from './api';

const configuration = new Configuration();
const apiInstance = new AutoReloadsApi(configuration);

let autoReloadModel: AutoReloadModel; //Auto reload object

const { status, data } = await apiInstance.postAutoreloads(
    autoReloadModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **autoReloadModel** | **AutoReloadModel**| Auto reload object | |


### Return type

**AutoReloadResponseModel**

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

# **putAutoreloadsToken**
> AutoReloadResponseModel putAutoreloadsToken(autoReloadUpdateModel)


### Example

```typescript
import {
    AutoReloadsApi,
    Configuration,
    AutoReloadUpdateModel
} from './api';

const configuration = new Configuration();
const apiInstance = new AutoReloadsApi(configuration);

let token: string; // (default to undefined)
let autoReloadUpdateModel: AutoReloadUpdateModel; //Auto reload object

const { status, data } = await apiInstance.putAutoreloadsToken(
    token,
    autoReloadUpdateModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **autoReloadUpdateModel** | **AutoReloadUpdateModel**| Auto reload object | |
| **token** | [**string**] |  | defaults to undefined|


### Return type

**AutoReloadResponseModel**

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

