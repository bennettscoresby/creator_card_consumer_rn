# CardholderBalancesApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAccountBalancesToken**](#getaccountbalancestoken) | **GET** /balances/account/{token} | Returns account balance for an account|
|[**getBalancesToken**](#getbalancestoken) | **GET** /balances/{token} | Returns account balances for a cardholder|
|[**getUserAccountBalances**](#getuseraccountbalances) | **GET** /balances/user/{token} | Returns account balances for a cardholder|

# **getAccountBalancesToken**
> AccountBalanceResponse getAccountBalancesToken()

balances/account/{token}

### Example

```typescript
import {
    CardholderBalancesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CardholderBalancesApi(configuration);

let token: string; //The unique token associated with the user or business account. This token is required to fetch the corresponding account balance. (default to undefined)

const { status, data } = await apiInstance.getAccountBalancesToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | The unique token associated with the user or business account. This token is required to fetch the corresponding account balance. | defaults to undefined|


### Return type

**AccountBalanceResponse**

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
|**404** | Account not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBalancesToken**
> CardholderBalances getBalancesToken()


### Example

```typescript
import {
    CardholderBalancesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CardholderBalancesApi(configuration);

let token: string; //User or Business token (default to undefined)

const { status, data } = await apiInstance.getBalancesToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | User or Business token | defaults to undefined|


### Return type

**CardholderBalances**

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

# **getUserAccountBalances**
> UserAccountsBalanceResponse getUserAccountBalances()

/balances/user/{token}

### Example

```typescript
import {
    CardholderBalancesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CardholderBalancesApi(configuration);

let token: string; //The unique token identifying the user or business. This token is required to retrieve the associated account balances. (default to undefined)

const { status, data } = await apiInstance.getUserAccountBalances(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | The unique token identifying the user or business. This token is required to retrieve the associated account balances. | defaults to undefined|


### Return type

**UserAccountsBalanceResponse**

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
|**403** | Forbidden |  -  |
|**404** | Account not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

