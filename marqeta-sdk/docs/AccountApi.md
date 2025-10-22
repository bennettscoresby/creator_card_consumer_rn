# AccountApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getPeriodicFeeSchedules**](#getperiodicfeeschedules) | **GET** /accounts/{account_token}/periodicfeeschedules | Get all active and upcoming periodic fee schedules of an account|
|[**retrieveBillingCycleForAccount**](#retrievebillingcycleforaccount) | **GET** /accounts/{account_token}/billingcycle | Get billing cycle by account token|

# **getPeriodicFeeSchedules**
> PeriodicFeeSchedulePage getPeriodicFeeSchedules()

Get all active and upcoming periodic fee schedules of an account

### Example

```typescript
import {
    AccountApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let accountToken: string; //account token (default to undefined)
let count: number; //Number of periodic fee schedule resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)

const { status, data } = await apiInstance.getPeriodicFeeSchedules(
    accountToken,
    count,
    startIndex
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | account token | defaults to undefined|
| **count** | [**number**] | Number of periodic fee schedule resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|


### Return type

**PeriodicFeeSchedulePage**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Expected response to a valid request. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveBillingCycleForAccount**
> AccountBillingCycleResponse retrieveBillingCycleForAccount()

Retrieves the billing cycle details for a specific account token.

### Example

```typescript
import {
    AccountApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve delinquency state details.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)

const { status, data } = await apiInstance.retrieveBillingCycleForAccount(
    accountToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve delinquency state details.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|


### Return type

**AccountBillingCycleResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**404** | Billing cycle not found |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

