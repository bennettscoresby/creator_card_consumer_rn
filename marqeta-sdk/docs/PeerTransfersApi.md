# PeerTransfersApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getPeertransfersToken**](#getpeertransferstoken) | **GET** /peertransfers/{token} | Returns details of a previous transfer|
|[**getPeertransfersUserUserorbusinesstoken**](#getpeertransfersuseruserorbusinesstoken) | **GET** /peertransfers/user/{user_or_business_token} | Returns all peer transfers for a user|
|[**getPeertransfersUserUserorbusinesstokenRecipient**](#getpeertransfersuseruserorbusinesstokenrecipient) | **GET** /peertransfers/user/{user_or_business_token}/recipient | Returns received peer transfers for a user|
|[**getPeertransfersUserUserorbusinesstokenSender**](#getpeertransfersuseruserorbusinesstokensender) | **GET** /peertransfers/user/{user_or_business_token}/sender | Returns sent peer transfers for a user|
|[**postPeertransfers**](#postpeertransfers) | **POST** /peertransfers | Performs a peer transfer from one user to another|

# **getPeertransfersToken**
> PeerTransferResponse getPeertransfersToken()


### Example

```typescript
import {
    PeerTransfersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PeerTransfersApi(configuration);

let token: string; // (default to undefined)

const { status, data } = await apiInstance.getPeertransfersToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] |  | defaults to undefined|


### Return type

**PeerTransferResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | Transfer token not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPeertransfersUserUserorbusinesstoken**
> PeerTransferResponse getPeertransfersUserUserorbusinesstoken()


### Example

```typescript
import {
    PeerTransfersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PeerTransfersApi(configuration);

let userOrBusinessToken: string; //User or business token (default to undefined)
let count: number; //Number of transfers to retrieve (optional) (default to 25)
let startIndex: number; //Start index (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getPeertransfersUserUserorbusinesstoken(
    userOrBusinessToken,
    count,
    startIndex,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userOrBusinessToken** | [**string**] | User or business token | defaults to undefined|
| **count** | [**number**] | Number of transfers to retrieve | (optional) defaults to 25|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**PeerTransferResponse**

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
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPeertransfersUserUserorbusinesstokenRecipient**
> PeerTransferResponse getPeertransfersUserUserorbusinesstokenRecipient()


### Example

```typescript
import {
    PeerTransfersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PeerTransfersApi(configuration);

let userOrBusinessToken: string; //User or business token (default to undefined)
let count: number; //Number of transfers to retrieve (optional) (default to 25)
let startIndex: number; //Start index (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getPeertransfersUserUserorbusinesstokenRecipient(
    userOrBusinessToken,
    count,
    startIndex,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userOrBusinessToken** | [**string**] | User or business token | defaults to undefined|
| **count** | [**number**] | Number of transfers to retrieve | (optional) defaults to 25|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**PeerTransferResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | User token not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPeertransfersUserUserorbusinesstokenSender**
> PeerTransferResponse getPeertransfersUserUserorbusinesstokenSender()


### Example

```typescript
import {
    PeerTransfersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PeerTransfersApi(configuration);

let userOrBusinessToken: string; //User or business token (default to undefined)
let count: number; //Number of transfers to retrieve (optional) (default to 25)
let startIndex: number; //Start index (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getPeertransfersUserUserorbusinesstokenSender(
    userOrBusinessToken,
    count,
    startIndex,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userOrBusinessToken** | [**string**] | User or business token | defaults to undefined|
| **count** | [**number**] | Number of transfers to retrieve | (optional) defaults to 25|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**PeerTransferResponse**

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
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postPeertransfers**
> PeerTransferResponse postPeertransfers()


### Example

```typescript
import {
    PeerTransfersApi,
    Configuration,
    PeerTransferRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PeerTransfersApi(configuration);

let peerTransferRequest: PeerTransferRequest; // (optional)

const { status, data } = await apiInstance.postPeertransfers(
    peerTransferRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peerTransferRequest** | **PeerTransferRequest**|  | |


### Return type

**PeerTransferResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Success |  -  |
|**400** | Invalid fields detected: either sender or recipient is not found |  -  |
|**409** | Request already processed with a different payload |  -  |
|**422** | Rule violations |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

