# DirectDepositsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getDirectdeposits**](#getdirectdeposits) | **GET** /directdeposits | Lists all direct deposits|
|[**getDirectdepositsAccountsUserorbusinesstoken**](#getdirectdepositsaccountsuserorbusinesstoken) | **GET** /directdeposits/accounts/{user_or_business_token} | Returns an account and routing number which can be used for direct deposit|
|[**getDirectdepositsToken**](#getdirectdepositstoken) | **GET** /directdeposits/{token} | Returns a direct deposit entry|
|[**getDirectdepositsTransitions**](#getdirectdepositstransitions) | **GET** /directdeposits/transitions | Returns a list of direct deposit transitions|
|[**getDirectdepositsTransitionsToken**](#getdirectdepositstransitionstoken) | **GET** /directdeposits/transitions/{token} | Returns a direct deposit transition|
|[**postDirectdepositsTransitions**](#postdirectdepositstransitions) | **POST** /directdeposits/transitions | Creates a direct deposit transition|
|[**putDirectdepositsAccountsUserorbusinesstoken**](#putdirectdepositsaccountsuserorbusinesstoken) | **PUT** /directdeposits/accounts/{user_or_business_token} | Updates a specific direct deposit account|

# **getDirectdeposits**
> DirectDepositListResponse getDirectdeposits()


### Example

```typescript
import {
    DirectDepositsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DirectDepositsApi(configuration);

let count: number; //Number of direct deposits to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let reversedAfterGracePeriod: boolean; //Reversed after grace period (optional) (default to undefined)
let userToken: string; //User token (optional) (default to undefined)
let businessToken: string; //Business token (optional) (default to undefined)
let directDepositState: 'PENDING' | 'APPLIED' | 'REVERSED' | 'REJECTED'; //Direct deposit state (optional) (default to undefined)
let startSettlementDate: string; //Start settlement date (optional) (default to undefined)
let endSettlementDate: string; //End settlement date (optional) (default to undefined)
let sortBy: string; //Sort order (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getDirectdeposits(
    count,
    startIndex,
    reversedAfterGracePeriod,
    userToken,
    businessToken,
    directDepositState,
    startSettlementDate,
    endSettlementDate,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of direct deposits to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **reversedAfterGracePeriod** | [**boolean**] | Reversed after grace period | (optional) defaults to undefined|
| **userToken** | [**string**] | User token | (optional) defaults to undefined|
| **businessToken** | [**string**] | Business token | (optional) defaults to undefined|
| **directDepositState** | [**&#39;PENDING&#39; | &#39;APPLIED&#39; | &#39;REVERSED&#39; | &#39;REJECTED&#39;**]**Array<&#39;PENDING&#39; &#124; &#39;APPLIED&#39; &#124; &#39;REVERSED&#39; &#124; &#39;REJECTED&#39;>** | Direct deposit state | (optional) defaults to undefined|
| **startSettlementDate** | [**string**] | Start settlement date | (optional) defaults to undefined|
| **endSettlementDate** | [**string**] | End settlement date | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-lastModifiedTime'|


### Return type

**DirectDepositListResponse**

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

# **getDirectdepositsAccountsUserorbusinesstoken**
> DepositAccountResponse getDirectdepositsAccountsUserorbusinesstoken()


### Example

```typescript
import {
    DirectDepositsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DirectDepositsApi(configuration);

let userOrBusinessToken: string; // (default to undefined)

const { status, data } = await apiInstance.getDirectdepositsAccountsUserorbusinesstoken(
    userOrBusinessToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userOrBusinessToken** | [**string**] |  | defaults to undefined|


### Return type

**DepositAccountResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Cardholder not found |  -  |
|**404** | Account not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDirectdepositsToken**
> DepositDepositResponse getDirectdepositsToken()


### Example

```typescript
import {
    DirectDepositsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DirectDepositsApi(configuration);

let token: string; // (default to undefined)

const { status, data } = await apiInstance.getDirectdepositsToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] |  | defaults to undefined|


### Return type

**DepositDepositResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | Direct deposit entry not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDirectdepositsTransitions**
> DirectDepositTransitionListResponse getDirectdepositsTransitions()


### Example

```typescript
import {
    DirectDepositsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DirectDepositsApi(configuration);

let count: number; //Number of direct deposit transitions to retrieve (optional) (default to 5)
let userToken: string; //User token (optional) (default to undefined)
let businessToken: string; //Business token (optional) (default to undefined)
let directDepositToken: string; //Direct deposit token (optional) (default to undefined)
let startIndex: number; //Start index (optional) (default to 0)
let sortBy: string; //Sort order (optional) (default to '-createdTime')
let states: string; //Comma-delimited list of direct deposit states to display e.g. PENDING | REVERSED | APPLIED | REJECTED  (optional) (default to undefined)

const { status, data } = await apiInstance.getDirectdepositsTransitions(
    count,
    userToken,
    businessToken,
    directDepositToken,
    startIndex,
    sortBy,
    states
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of direct deposit transitions to retrieve | (optional) defaults to 5|
| **userToken** | [**string**] | User token | (optional) defaults to undefined|
| **businessToken** | [**string**] | Business token | (optional) defaults to undefined|
| **directDepositToken** | [**string**] | Direct deposit token | (optional) defaults to undefined|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-createdTime'|
| **states** | [**string**] | Comma-delimited list of direct deposit states to display e.g. PENDING | REVERSED | APPLIED | REJECTED  | (optional) defaults to undefined|


### Return type

**DirectDepositTransitionListResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | Not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDirectdepositsTransitionsToken**
> DirectDepositTransitionResponse getDirectdepositsTransitionsToken()


### Example

```typescript
import {
    DirectDepositsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DirectDepositsApi(configuration);

let token: string; // (default to undefined)

const { status, data } = await apiInstance.getDirectdepositsTransitionsToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] |  | defaults to undefined|


### Return type

**DirectDepositTransitionResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | Direct deposit transition not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postDirectdepositsTransitions**
> DirectDepositTransitionResponse postDirectdepositsTransitions()


### Example

```typescript
import {
    DirectDepositsApi,
    Configuration,
    DirectDepositTransitionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DirectDepositsApi(configuration);

let directDepositTransitionRequest: DirectDepositTransitionRequest; // (optional)

const { status, data } = await apiInstance.postDirectdepositsTransitions(
    directDepositTransitionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **directDepositTransitionRequest** | **DirectDepositTransitionRequest**|  | |


### Return type

**DirectDepositTransitionResponse**

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

# **putDirectdepositsAccountsUserorbusinesstoken**
> DepositAccountResponse putDirectdepositsAccountsUserorbusinesstoken(depositAccountUpdateRequest)


### Example

```typescript
import {
    DirectDepositsApi,
    Configuration,
    DepositAccountUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DirectDepositsApi(configuration);

let userOrBusinessToken: string; //User or business token (default to undefined)
let depositAccountUpdateRequest: DepositAccountUpdateRequest; //Deposit account update request

const { status, data } = await apiInstance.putDirectdepositsAccountsUserorbusinesstoken(
    userOrBusinessToken,
    depositAccountUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **depositAccountUpdateRequest** | **DepositAccountUpdateRequest**| Deposit account update request | |
| **userOrBusinessToken** | [**string**] | User or business token | defaults to undefined|


### Return type

**DepositAccountResponse**

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

