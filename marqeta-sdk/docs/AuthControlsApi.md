# AuthControlsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAuthcontrols**](#getauthcontrols) | **GET** /authcontrols | Lists all global auth control exceptions for the program|
|[**getAuthcontrolsExemptmids**](#getauthcontrolsexemptmids) | **GET** /authcontrols/exemptmids | Lists all auth control exempted MIDs for the program|
|[**getAuthcontrolsExemptmidsToken**](#getauthcontrolsexemptmidstoken) | **GET** /authcontrols/exemptmids/{token} | Returns a specific auth control exemptmids|
|[**getAuthcontrolsToken**](#getauthcontrolstoken) | **GET** /authcontrols/{token} | Returns a specific auth control exception|
|[**postAuthcontrols**](#postauthcontrols) | **POST** /authcontrols | Creates an auth control exception|
|[**postAuthcontrolsExemptmids**](#postauthcontrolsexemptmids) | **POST** /authcontrols/exemptmids | Creates an auth control for exempting MIDs|
|[**putAuthcontrolsExemptmidsToken**](#putauthcontrolsexemptmidstoken) | **PUT** /authcontrols/exemptmids/{token} | Updates the status an auth control exemptmids|
|[**putAuthcontrolsToken**](#putauthcontrolstoken) | **PUT** /authcontrols/{token} | Updates an auth control exception|

# **getAuthcontrols**
> AuthControlListResponse getAuthcontrols()


### Example

```typescript
import {
    AuthControlsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControlsApi(configuration);

let cardProduct: string; //Card product token. Use \"null\" to get auth controls that are not associated with any card product. (optional) (default to undefined)
let user: string; //User token. Use \"null\" to get auth controls that are not associated with any user. (optional) (default to undefined)
let count: number; //Number of items to retrieve. Count can be between 1 - 10 items. (optional) (default to 5)
let startIndex: number; //Indicates from what row to start returning data. (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getAuthcontrols(
    cardProduct,
    user,
    count,
    startIndex,
    fields,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardProduct** | [**string**] | Card product token. Use \&quot;null\&quot; to get auth controls that are not associated with any card product. | (optional) defaults to undefined|
| **user** | [**string**] | User token. Use \&quot;null\&quot; to get auth controls that are not associated with any user. | (optional) defaults to undefined|
| **count** | [**number**] | Number of items to retrieve. Count can be between 1 - 10 items. | (optional) defaults to 5|
| **startIndex** | [**number**] | Indicates from what row to start returning data. | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. | (optional) defaults to '-lastModifiedTime'|


### Return type

**AuthControlListResponse**

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

# **getAuthcontrolsExemptmids**
> AuthControlExemptMidsListResponse getAuthcontrolsExemptmids()


### Example

```typescript
import {
    AuthControlsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControlsApi(configuration);

let cardProduct: string; //Card product token. Use \"null\" to get auth controls that are not associated with any card product. (optional) (default to undefined)
let user: string; //User token. Use \"null\" to get auth controls that are not associated with any user. (optional) (default to undefined)
let count: number; //Number of items to retrieve. Count can be between 1 - 10 items. (optional) (default to 5)
let startIndex: number; //Indicates from what row to start returning data. (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getAuthcontrolsExemptmids(
    cardProduct,
    user,
    count,
    startIndex,
    fields,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardProduct** | [**string**] | Card product token. Use \&quot;null\&quot; to get auth controls that are not associated with any card product. | (optional) defaults to undefined|
| **user** | [**string**] | User token. Use \&quot;null\&quot; to get auth controls that are not associated with any user. | (optional) defaults to undefined|
| **count** | [**number**] | Number of items to retrieve. Count can be between 1 - 10 items. | (optional) defaults to 5|
| **startIndex** | [**number**] | Indicates from what row to start returning data. | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. | (optional) defaults to '-lastModifiedTime'|


### Return type

**AuthControlExemptMidsListResponse**

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

# **getAuthcontrolsExemptmidsToken**
> AuthControlExemptMidsResponse getAuthcontrolsExemptmidsToken()


### Example

```typescript
import {
    AuthControlsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControlsApi(configuration);

let token: string; //Auth control token (default to undefined)

const { status, data } = await apiInstance.getAuthcontrolsExemptmidsToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Auth control token | defaults to undefined|


### Return type

**AuthControlExemptMidsResponse**

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
|**404** | Auth control exception MIDs not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAuthcontrolsToken**
> AuthControlResponse getAuthcontrolsToken()


### Example

```typescript
import {
    AuthControlsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControlsApi(configuration);

let token: string; //Auth control token (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getAuthcontrolsToken(
    token,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Auth control token | defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**AuthControlResponse**

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
|**404** | Auth control not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postAuthcontrols**
> AuthControlResponse postAuthcontrols(authControlRequest)


### Example

```typescript
import {
    AuthControlsApi,
    Configuration,
    AuthControlRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControlsApi(configuration);

let authControlRequest: AuthControlRequest; //Auth control object

const { status, data } = await apiInstance.postAuthcontrols(
    authControlRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authControlRequest** | **AuthControlRequest**| Auth control object | |


### Return type

**AuthControlResponse**

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

# **postAuthcontrolsExemptmids**
> AuthControlExemptMidsResponse postAuthcontrolsExemptmids(authControlExemptMidsRequest)


### Example

```typescript
import {
    AuthControlsApi,
    Configuration,
    AuthControlExemptMidsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControlsApi(configuration);

let authControlExemptMidsRequest: AuthControlExemptMidsRequest; //Auth control exempt MID object

const { status, data } = await apiInstance.postAuthcontrolsExemptmids(
    authControlExemptMidsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authControlExemptMidsRequest** | **AuthControlExemptMidsRequest**| Auth control exempt MID object | |


### Return type

**AuthControlExemptMidsResponse**

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

# **putAuthcontrolsExemptmidsToken**
> putAuthcontrolsExemptmidsToken()


### Example

```typescript
import {
    AuthControlsApi,
    Configuration,
    AuthControlExemptMidsUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControlsApi(configuration);

let token: string; //Auth control token (default to undefined)
let authControlExemptMidsUpdateRequest: AuthControlExemptMidsUpdateRequest; // (optional)

const { status, data } = await apiInstance.putAuthcontrolsExemptmidsToken(
    token,
    authControlExemptMidsUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authControlExemptMidsUpdateRequest** | **AuthControlExemptMidsUpdateRequest**|  | |
| **token** | [**string**] | Auth control token | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Success |  -  |
|**400** | Bad request |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putAuthcontrolsToken**
> AuthControlResponse putAuthcontrolsToken(authControlUpdateRequest)


### Example

```typescript
import {
    AuthControlsApi,
    Configuration,
    AuthControlUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControlsApi(configuration);

let token: string; //Auth control token (default to undefined)
let authControlUpdateRequest: AuthControlUpdateRequest; //Auth control object

const { status, data } = await apiInstance.putAuthcontrolsToken(
    token,
    authControlUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authControlUpdateRequest** | **AuthControlUpdateRequest**| Auth control object | |
| **token** | [**string**] | Auth control token | defaults to undefined|


### Return type

**AuthControlResponse**

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

