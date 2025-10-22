# ProgramTransfersApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getProgramtransfers**](#getprogramtransfers) | **GET** /programtransfers | List program transfers|
|[**getProgramtransfersToken**](#getprogramtransferstoken) | **GET** /programtransfers/{token} | Retrieve program transfer|
|[**getProgramtransfersTypes**](#getprogramtransferstypes) | **GET** /programtransfers/types | List program transfer types|
|[**getProgramtransfersTypesTypetoken**](#getprogramtransferstypestypetoken) | **GET** /programtransfers/types/{type_token} | Retrieve program transfer type|
|[**postProgramtransfers**](#postprogramtransfers) | **POST** /programtransfers | Create program transfer|
|[**postProgramtransfersTypes**](#postprogramtransferstypes) | **POST** /programtransfers/types | Create program transfer type|
|[**putProgramtransfersTypesTypetoken**](#putprogramtransferstypestypetoken) | **PUT** /programtransfers/types/{type_token} | Update program transfer type|

# **getProgramtransfers**
> ProgramTransferListResponse getProgramtransfers()

Use this endpoint to list all program transfers.  To narrow your result set to program transfers of a particular type or that are associated with a particular account holder, include the appropriate parameters from the following URL Query Parameters table. This endpoint also supports <</core-api/field-filtering, field filtering>>, <</core-api/sorting-and-pagination, pagination>>, and <</core-api/sorting-and-pagination, sorting>>.

### Example

```typescript
import {
    ProgramTransfersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProgramTransfersApi(configuration);

let count: number; //Number of program transfers to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Field on which to sort. Use any field in the resource model, or one of the system fields `lastModifiedTime` or `createdTime`. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. (optional) (default to '-lastModifiedTime')
let userToken: string; //Unique identifier of the user account holder whose program transfers you want to retrieve.  Send a `GET` request to `/users` to retrieve user tokens. (optional) (default to undefined)
let businessToken: string; //Unique identifier of the business account holder whose program transfers you want to retrieve.  Send a `GET` request to `/businesses` to retrieve business tokens. (optional) (default to undefined)
let typeToken: string; //Unique identifier of the program transfer type to retrieve. (optional) (default to undefined)

const { status, data } = await apiInstance.getProgramtransfers(
    count,
    startIndex,
    fields,
    sortBy,
    userToken,
    businessToken,
    typeToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of program transfers to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Field on which to sort. Use any field in the resource model, or one of the system fields &#x60;lastModifiedTime&#x60; or &#x60;createdTime&#x60;. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. | (optional) defaults to '-lastModifiedTime'|
| **userToken** | [**string**] | Unique identifier of the user account holder whose program transfers you want to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/users&#x60; to retrieve user tokens. | (optional) defaults to undefined|
| **businessToken** | [**string**] | Unique identifier of the business account holder whose program transfers you want to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/businesses&#x60; to retrieve business tokens. | (optional) defaults to undefined|
| **typeToken** | [**string**] | Unique identifier of the program transfer type to retrieve. | (optional) defaults to undefined|


### Return type

**ProgramTransferListResponse**

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

# **getProgramtransfersToken**
> ProgramTransferResponse getProgramtransfersToken()

Use this endpoint to retrieve a specific program transfer. Include the program transfer `token` path parameter to specify the program transfer to retrieve.

### Example

```typescript
import {
    ProgramTransfersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProgramTransfersApi(configuration);

let token: string; //Unique identifier of the program transfer. (default to undefined)

const { status, data } = await apiInstance.getProgramtransfersToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the program transfer. | defaults to undefined|


### Return type

**ProgramTransferResponse**

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
|**404** | Return not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProgramtransfersTypes**
> ProgramTransferTypeListResponse getProgramtransfersTypes()

Use this endpoint to list all program transfer types.  This endpoint supports <</core-api/field-filtering, field filtering>>, <</core-api/sorting-and-pagination, pagination>>, and <</core-api/sorting-and-pagination, sorting>>.

### Example

```typescript
import {
    ProgramTransfersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProgramTransfersApi(configuration);

let count: number; //Number of program transfer types to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Field on which to sort. Use any field in the resource model, or one of the system fields `lastModifiedTime` or `createdTime`. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getProgramtransfersTypes(
    count,
    startIndex,
    fields,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of program transfer types to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Field on which to sort. Use any field in the resource model, or one of the system fields &#x60;lastModifiedTime&#x60; or &#x60;createdTime&#x60;. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. | (optional) defaults to '-lastModifiedTime'|


### Return type

**ProgramTransferTypeListResponse**

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

# **getProgramtransfersTypesTypetoken**
> ProgramTransferTypeResponse getProgramtransfersTypesTypetoken()

Use this endpoint to retrieve a specific program transfer. Include the `type_token` path parameter to indicate the program transfer type to return.

### Example

```typescript
import {
    ProgramTransfersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProgramTransfersApi(configuration);

let typeToken: string; //Unique identifier of the program transfer type. (default to undefined)

const { status, data } = await apiInstance.getProgramtransfersTypesTypetoken(
    typeToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **typeToken** | [**string**] | Unique identifier of the program transfer type. | defaults to undefined|


### Return type

**ProgramTransferTypeResponse**

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
|**404** | Program transfer type not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postProgramtransfers**
> ProgramTransferResponse postProgramtransfers()

Use this endpoint to create a program transfer. Add the program transfer details to the body of the request in link:http://www.json.org/[JSON, window=\"_blank\"] format.  Include either `user_token` or `business_token` in the message body to specify the account holder whose general purpose account (GPA) will be debited by the program transfer. The user or business must already exist.  [NOTE] If the GPA has insufficient funds to cover both the amount of the program transfer and all attached fees, then no funds are transferred.

### Example

```typescript
import {
    ProgramTransfersApi,
    Configuration,
    ProgramTransfer
} from './api';

const configuration = new Configuration();
const apiInstance = new ProgramTransfersApi(configuration);

let programTransfer: ProgramTransfer; // (optional)

const { status, data } = await apiInstance.postProgramtransfers(
    programTransfer
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **programTransfer** | **ProgramTransfer**|  | |


### Return type

**ProgramTransferResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Success |  -  |
|**400** | Bad request |  -  |
|**404** | Not found |  -  |
|**409** | Request already processed with a different payload |  -  |
|**412** | Pre-condition failed. Unload amount is greater than load amount |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postProgramtransfersTypes**
> ProgramTransferTypeResponse postProgramtransfersTypes()

Use this endpoint to create a program transfer type. Add the program transfer details to the body of the request in link:http://www.json.org/[JSON, window=\"_blank\"] format.  You are required to pass in a `program_funding_source_token` to associate a program funding source with the program transfer type. You must therefore create a program funding source before creating a program transfer type.

### Example

```typescript
import {
    ProgramTransfersApi,
    Configuration,
    ProgramTransferTypeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProgramTransfersApi(configuration);

let programTransferTypeRequest: ProgramTransferTypeRequest; // (optional)

const { status, data } = await apiInstance.postProgramtransfersTypes(
    programTransferTypeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **programTransferTypeRequest** | **ProgramTransferTypeRequest**|  | |


### Return type

**ProgramTransferTypeResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Success |  -  |
|**400** | Bad request |  -  |
|**404** | Program funding source not found |  -  |
|**409** | Token already used |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putProgramtransfersTypesTypetoken**
> ProgramTransferTypeResponse putProgramtransfersTypesTypetoken()

Use this endpoint to update a program transfer type. Include the `type_token` path parameter to indicate the program transfer type to update. Add the modified detail parameters to the body of the request in link:http://www.json.org/[JSON, window=\"_blank\"] format. Only values of parameters in the request are modified; all others are left unchanged.

### Example

```typescript
import {
    ProgramTransfersApi,
    Configuration,
    ProgramTransferTypeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProgramTransfersApi(configuration);

let typeToken: string; //Unique identifier of the program transfer type. (default to undefined)
let programTransferTypeRequest: ProgramTransferTypeRequest; // (optional)

const { status, data } = await apiInstance.putProgramtransfersTypesTypetoken(
    typeToken,
    programTransferTypeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **programTransferTypeRequest** | **ProgramTransferTypeRequest**|  | |
| **typeToken** | [**string**] | Unique identifier of the program transfer type. | defaults to undefined|


### Return type

**ProgramTransferTypeResponse**

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
|**404** | Program transfer type not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

