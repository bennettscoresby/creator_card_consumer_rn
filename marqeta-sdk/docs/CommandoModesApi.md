# CommandoModesApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCommandomodes**](#getcommandomodes) | **GET** /commandomodes | Lists all commando mode control sets|
|[**getCommandomodesCommandomodetokenTransitions**](#getcommandomodescommandomodetokentransitions) | **GET** /commandomodes/{commandomode_token}/transitions | Lists all commando mode transitions related to a commando mode control set|
|[**getCommandomodesToken**](#getcommandomodestoken) | **GET** /commandomodes/{token} | Returns a specific commando mode control set|
|[**getCommandomodesTransitionsToken**](#getcommandomodestransitionstoken) | **GET** /commandomodes/transitions/{token} | Returns a specific commando mode transition|

# **getCommandomodes**
> CommandoModeListResponse getCommandomodes()


### Example

```typescript
import {
    CommandoModesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CommandoModesApi(configuration);

let count: number; //Number of commando modes to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let sortBy: string; //Sort order (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getCommandomodes(
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of commando modes to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-lastModifiedTime'|


### Return type

**CommandoModeListResponse**

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

# **getCommandomodesCommandomodetokenTransitions**
> CommandoModeTransitionListResponse getCommandomodesCommandomodetokenTransitions()


### Example

```typescript
import {
    CommandoModesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CommandoModesApi(configuration);

let commandomodeToken: string; //Commando mode token (default to undefined)
let count: number; //Number of transitions to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let sortBy: string; //Sort order (optional) (default to '-createdTime')

const { status, data } = await apiInstance.getCommandomodesCommandomodetokenTransitions(
    commandomodeToken,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commandomodeToken** | [**string**] | Commando mode token | defaults to undefined|
| **count** | [**number**] | Number of transitions to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-createdTime'|


### Return type

**CommandoModeTransitionListResponse**

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

# **getCommandomodesToken**
> CommandoModeResponse getCommandomodesToken()


### Example

```typescript
import {
    CommandoModesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CommandoModesApi(configuration);

let token: string; // (default to undefined)

const { status, data } = await apiInstance.getCommandomodesToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] |  | defaults to undefined|


### Return type

**CommandoModeResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | Commando mode not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCommandomodesTransitionsToken**
> CommandoModeTransitionResponse getCommandomodesTransitionsToken()


### Example

```typescript
import {
    CommandoModesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CommandoModesApi(configuration);

let token: string; //Commando mode transition token (default to undefined)

const { status, data } = await apiInstance.getCommandomodesTransitionsToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Commando mode transition token | defaults to undefined|


### Return type

**CommandoModeTransitionResponse**

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
|**404** | Transition not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

