# DirectDepositAccountsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAccount**](#createaccount) | **POST** /depositaccounts | Creates new direct deposit account for cardholder.|
|[**createTransition**](#createtransition) | **POST** /depositaccounts/transitions | Creates new transition for a direct deposit account.|
|[**getCDDInfo**](#getcddinfo) | **GET** /depositaccounts/{token}/cdd | Get direct deposit account transition list for card holder.|
|[**getDirectDepositAccount**](#getdirectdepositaccount) | **GET** /depositaccounts/{token} | Get direct deposit account.|
|[**getDirectDepositAccountTransition**](#getdirectdepositaccounttransition) | **GET** /depositaccounts/transitions/{token} | Get direct deposit account transition.|
|[**getTransitionList**](#gettransitionlist) | **GET** /depositaccounts/{user_token}/transitions | Get direct deposit account transition list for card holder.|
|[**getUserDirectDepositAccounts**](#getuserdirectdepositaccounts) | **GET** /depositaccounts/user/{token} | List all specific direct deposit accounts.|
|[**getUserForDirectDepositAccount**](#getuserfordirectdepositaccount) | **GET** /depositaccounts/account/{account_number}/user | Get User for Plain Text Account Number|
|[**update**](#update) | **PUT** /depositaccounts/{token} | Update direct deposit account.|
|[**updateCDDInfo**](#updatecddinfo) | **PUT** /depositaccounts/{token}/cdd/{cddtoken} | Update CDD answers for Direct Deposit Account|

# **createAccount**
> DirectDepositAccountResponse createAccount(directDepositAccountRequest)


### Example

```typescript
import {
    DirectDepositAccountsApi,
    Configuration,
    DirectDepositAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DirectDepositAccountsApi(configuration);

let directDepositAccountRequest: DirectDepositAccountRequest; //Create direct deposit account for cardholder

const { status, data } = await apiInstance.createAccount(
    directDepositAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **directDepositAccountRequest** | **DirectDepositAccountRequest**| Create direct deposit account for cardholder | |


### Return type

**DirectDepositAccountResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**404** | Not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTransition**
> DirectDepositAccountTransitionResponse createTransition(directDepositAccountTransitionRequest)


### Example

```typescript
import {
    DirectDepositAccountsApi,
    Configuration,
    DirectDepositAccountTransitionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DirectDepositAccountsApi(configuration);

let directDepositAccountTransitionRequest: DirectDepositAccountTransitionRequest; //Create transition for direct deposit account

const { status, data } = await apiInstance.createTransition(
    directDepositAccountTransitionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **directDepositAccountTransitionRequest** | **DirectDepositAccountTransitionRequest**| Create transition for direct deposit account | |


### Return type

**DirectDepositAccountTransitionResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**404** | Not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCDDInfo**
> CustomerDueDiligenceResponse getCDDInfo()


### Example

```typescript
import {
    DirectDepositAccountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DirectDepositAccountsApi(configuration);

let token: string; //Get CDD info for a specific DDA token (default to undefined)

const { status, data } = await apiInstance.getCDDInfo(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Get CDD info for a specific DDA token | defaults to undefined|


### Return type

**CustomerDueDiligenceResponse**

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

# **getDirectDepositAccount**
> DirectDepositAccountResponse getDirectDepositAccount()


### Example

```typescript
import {
    DirectDepositAccountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DirectDepositAccountsApi(configuration);

let token: string; //Get specific direct deposit account (default to undefined)

const { status, data } = await apiInstance.getDirectDepositAccount(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Get specific direct deposit account | defaults to undefined|


### Return type

**DirectDepositAccountResponse**

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

# **getDirectDepositAccountTransition**
> DirectDepositAccountTransitionResponse getDirectDepositAccountTransition()


### Example

```typescript
import {
    DirectDepositAccountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DirectDepositAccountsApi(configuration);

let token: string; //Get specific direct deposit account transition (default to undefined)

const { status, data } = await apiInstance.getDirectDepositAccountTransition(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Get specific direct deposit account transition | defaults to undefined|


### Return type

**DirectDepositAccountTransitionResponse**

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

# **getTransitionList**
> DirectDepositAccountTransitionResponse getTransitionList()


### Example

```typescript
import {
    DirectDepositAccountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DirectDepositAccountsApi(configuration);

let userToken: string; //Get direct deposit account transition list for user (default to undefined)
let count: number; //Number of users to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let sortBy: string; //Sort order (optional) (default to '-createdTime')

const { status, data } = await apiInstance.getTransitionList(
    userToken,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userToken** | [**string**] | Get direct deposit account transition list for user | defaults to undefined|
| **count** | [**number**] | Number of users to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-createdTime'|


### Return type

**DirectDepositAccountTransitionResponse**

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

# **getUserDirectDepositAccounts**
> DirectDepositAccountListResponse getUserDirectDepositAccounts()


### Example

```typescript
import {
    DirectDepositAccountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DirectDepositAccountsApi(configuration);

let token: string; //Get specific direct deposit account (default to undefined)
let count: number; //Number of users to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let sortBy: string; //Sort order (optional) (default to '-lastModifiedTime')
let state: 'ACTIVE' | 'SUSPENDED' | 'TERMINATED' | 'UNSUPPORTED' | 'UNACTIVATED' | 'LIMITED'; //Direct deposit account status (optional) (default to undefined)

const { status, data } = await apiInstance.getUserDirectDepositAccounts(
    token,
    count,
    startIndex,
    sortBy,
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Get specific direct deposit account | defaults to undefined|
| **count** | [**number**] | Number of users to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-lastModifiedTime'|
| **state** | [**&#39;ACTIVE&#39; | &#39;SUSPENDED&#39; | &#39;TERMINATED&#39; | &#39;UNSUPPORTED&#39; | &#39;UNACTIVATED&#39; | &#39;LIMITED&#39;**]**Array<&#39;ACTIVE&#39; &#124; &#39;SUSPENDED&#39; &#124; &#39;TERMINATED&#39; &#124; &#39;UNSUPPORTED&#39; &#124; &#39;UNACTIVATED&#39; &#124; &#39;LIMITED&#39;>** | Direct deposit account status | (optional) defaults to undefined|


### Return type

**DirectDepositAccountListResponse**

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

# **getUserForDirectDepositAccount**
> DirectDepositAccountResponse getUserForDirectDepositAccount()


### Example

```typescript
import {
    DirectDepositAccountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DirectDepositAccountsApi(configuration);

let accountNumber: string; //Get user associated with direct deposit account number (default to undefined)

const { status, data } = await apiInstance.getUserForDirectDepositAccount(
    accountNumber
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountNumber** | [**string**] | Get user associated with direct deposit account number | defaults to undefined|


### Return type

**DirectDepositAccountResponse**

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

# **update**
> DirectDepositAccountResponse update(depositAccountUpdateRequest)


### Example

```typescript
import {
    DirectDepositAccountsApi,
    Configuration,
    DepositAccountUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DirectDepositAccountsApi(configuration);

let token: string; // (default to undefined)
let depositAccountUpdateRequest: DepositAccountUpdateRequest; //Update direct deposit account

const { status, data } = await apiInstance.update(
    token,
    depositAccountUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **depositAccountUpdateRequest** | **DepositAccountUpdateRequest**| Update direct deposit account | |
| **token** | [**string**] |  | defaults to undefined|


### Return type

**DirectDepositAccountResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | Not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCDDInfo**
> CustomerDueDiligenceResponse updateCDDInfo(customerDueDiligenceUpdateRequest)


### Example

```typescript
import {
    DirectDepositAccountsApi,
    Configuration,
    CustomerDueDiligenceUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DirectDepositAccountsApi(configuration);

let token: string; // (default to undefined)
let cddtoken: string; // (default to undefined)
let customerDueDiligenceUpdateRequest: CustomerDueDiligenceUpdateRequest; //Update CDD answers

const { status, data } = await apiInstance.updateCDDInfo(
    token,
    cddtoken,
    customerDueDiligenceUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerDueDiligenceUpdateRequest** | **CustomerDueDiligenceUpdateRequest**| Update CDD answers | |
| **token** | [**string**] |  | defaults to undefined|
| **cddtoken** | [**string**] |  | defaults to undefined|


### Return type

**CustomerDueDiligenceResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | Not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

