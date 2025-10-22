# VelocityControlsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteVelocitycontrolsToken**](#deletevelocitycontrolstoken) | **DELETE** /velocitycontrols/{token} | Sets a specific velocity control to inactive to soft delete it|
|[**getVelocitycontrols**](#getvelocitycontrols) | **GET** /velocitycontrols | List velocity controls|
|[**getVelocitycontrolsAccountAccountTokenAvailable**](#getvelocitycontrolsaccountaccounttokenavailable) | **GET** /velocitycontrols/account/{account_token}/available | Retrieve velocity control available balances for an account token|
|[**getVelocitycontrolsToken**](#getvelocitycontrolstoken) | **GET** /velocitycontrols/{token} | Returns a specific velocity control|
|[**getVelocitycontrolsUserUsertokenAvailable**](#getvelocitycontrolsuserusertokenavailable) | **GET** /velocitycontrols/user/{user_token}/available | List user velocity control balances|
|[**postVelocitycontrols**](#postvelocitycontrols) | **POST** /velocitycontrols | Create velocity control|
|[**putVelocitycontrolsToken**](#putvelocitycontrolstoken) | **PUT** /velocitycontrols/{token} | Update velocity control|

# **deleteVelocitycontrolsToken**
> VelocityControlResponse deleteVelocitycontrolsToken()


### Example

```typescript
import {
    VelocityControlsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VelocityControlsApi(configuration);

let token: string; //Velocity control token (default to undefined)

const { status, data } = await apiInstance.deleteVelocitycontrolsToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Velocity control token | defaults to undefined|


### Return type

**VelocityControlResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | Velocity control not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getVelocitycontrols**
> VelocityControlListResponse getVelocitycontrols()

Retrieves a list of all the velocity controls associated with a specific user or card product, or lists all the velocity controls defined for your program.  Include either a `user` or a `card_product` query parameter to indicate the user or card product whose associated velocity controls you want to retrieve (do not include both).  To list all velocity controls for your program, omit the `user` and `card_product` query parameters from your request.  This endpoint supports <</core-api/field-filtering, field filtering>> and <</core-api/sorting-and-pagination, pagination>>.

### Example

```typescript
import {
    VelocityControlsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VelocityControlsApi(configuration);

let cardProduct: string; //Unique identifier of the card product. Enter the string `null` to retrieve velocity controls that are not associated with any card product. (optional) (default to undefined)
let user: string; //Unique identifier of the user. Enter the string `null` to retrieve velocity controls that are not associated with any user. (optional) (default to undefined)
let count: number; //Number of velocity control resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Field on which to sort. Use any field in the resource model, or one of the system fields `lastModifiedTime` or `createdTime`. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getVelocitycontrols(
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
| **cardProduct** | [**string**] | Unique identifier of the card product. Enter the string &#x60;null&#x60; to retrieve velocity controls that are not associated with any card product. | (optional) defaults to undefined|
| **user** | [**string**] | Unique identifier of the user. Enter the string &#x60;null&#x60; to retrieve velocity controls that are not associated with any user. | (optional) defaults to undefined|
| **count** | [**number**] | Number of velocity control resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Field on which to sort. Use any field in the resource model, or one of the system fields &#x60;lastModifiedTime&#x60; or &#x60;createdTime&#x60;. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. | (optional) defaults to '-lastModifiedTime'|


### Return type

**VelocityControlListResponse**

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

# **getVelocitycontrolsAccountAccountTokenAvailable**
> VelocityControlBalanceListResponse getVelocitycontrolsAccountAccountTokenAvailable()


### Example

```typescript
import {
    VelocityControlsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VelocityControlsApi(configuration);

let accountToken: string; //Account token (default to undefined)

const { status, data } = await apiInstance.getVelocitycontrolsAccountAccountTokenAvailable(
    accountToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Account token | defaults to undefined|


### Return type

**VelocityControlBalanceListResponse**

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

# **getVelocitycontrolsToken**
> VelocityControlResponse getVelocitycontrolsToken()

Retrieves a specific velocity control.

### Example

```typescript
import {
    VelocityControlsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VelocityControlsApi(configuration);

let token: string; //Unique identifier of the velocity control resource. (default to undefined)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getVelocitycontrolsToken(
    token,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the velocity control resource. | defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**VelocityControlResponse**

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
|**404** | Velocity control not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getVelocitycontrolsUserUsertokenAvailable**
> VelocityControlBalanceListResponse getVelocitycontrolsUserUsertokenAvailable()

Retrieves a list of the available balances of the velocity controls associated with a user. This operation is unavailable for velocity controls with a window of `TRANSACTION`, because available balances do not apply to single-transaction velocity windows.  Depending on the control, the balance can include an available monetary amount, the number of transactions remaining, and the number of days remaining in the time window.  This endpoint supports <</core-api/field-filtering, field filtering>> and <</core-api/sorting-and-pagination, pagination>>.

### Example

```typescript
import {
    VelocityControlsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VelocityControlsApi(configuration);

let userToken: string; //Unique identifier of the cardholder. (default to undefined)
let count: number; //Number of available balance resources to retrieve. (optional) (default to 5)
let startIndex: number; //The sort order index of the first resource in the returned array. (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Field on which to sort. Use any field in the resource model, or one of the system fields `lastModifiedTime` or `createdTime`. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getVelocitycontrolsUserUsertokenAvailable(
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
| **userToken** | [**string**] | Unique identifier of the cardholder. | defaults to undefined|
| **count** | [**number**] | Number of available balance resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | The sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Field on which to sort. Use any field in the resource model, or one of the system fields &#x60;lastModifiedTime&#x60; or &#x60;createdTime&#x60;. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. | (optional) defaults to '-lastModifiedTime'|


### Return type

**VelocityControlBalanceListResponse**

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

# **postVelocitycontrols**
> VelocityControlResponse postVelocitycontrols(velocityControlRequest)

Limits how much and how frequently a user can spend funds. If multiple velocity controls apply to the same user, the user cannot exceed any of the defined spending limits.  [TIP] You can create program-level controls in the sandbox environment. However, you must work with your Marqeta representative to create program-level controls in a production environment.

### Example

```typescript
import {
    VelocityControlsApi,
    Configuration,
    VelocityControlRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new VelocityControlsApi(configuration);

let velocityControlRequest: VelocityControlRequest; //Velocity control object

const { status, data } = await apiInstance.postVelocitycontrols(
    velocityControlRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **velocityControlRequest** | **VelocityControlRequest**| Velocity control object | |


### Return type

**VelocityControlResponse**

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

# **putVelocitycontrolsToken**
> VelocityControlResponse putVelocitycontrolsToken(velocityControlUpdateRequest)

Updates a specific velocity control.

### Example

```typescript
import {
    VelocityControlsApi,
    Configuration,
    VelocityControlUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new VelocityControlsApi(configuration);

let token: string; //Unique identifier of the velocity control resource. (default to undefined)
let velocityControlUpdateRequest: VelocityControlUpdateRequest; //Velocity control object

const { status, data } = await apiInstance.putVelocitycontrolsToken(
    token,
    velocityControlUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **velocityControlUpdateRequest** | **VelocityControlUpdateRequest**| Velocity control object | |
| **token** | [**string**] | Unique identifier of the velocity control resource. | defaults to undefined|


### Return type

**VelocityControlResponse**

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

