# CreditAccountsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listAccounts**](#listaccounts) | **GET** /accounts | List accounts|
|[**retrieveAccount**](#retrieveaccount) | **GET** /accounts/{account_token} | Retrieve account|
|[**updateAccount**](#updateaccount) | **PUT** /accounts/{account_token} | Update account|

# **listAccounts**
> AccountsPage listAccounts()

Retrieve an array of credit accounts.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    CreditAccountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CreditAccountsApi(configuration);

let cardToken: string; //Unique identifier of the credit card associated with the account. (optional) (default to undefined)
let count: number; //Number of credit account resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'lastModifiedTime' | '-lastModifiedTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `lastModifiedTime`, and not by the field names appearing in response bodies such as `last_modified_time`. (optional) (default to '-lastModifiedTime')
let lightResponse: boolean; //If true, returns a lightweight response without any balances and usages. (optional) (default to false)
let securedAccountToken: string; //Unique identifier of an existing secured account. (optional) (default to undefined)
let userToken: string; //Unique identifier of the user to filter accounts by. (optional) (default to undefined)

const { status, data } = await apiInstance.listAccounts(
    cardToken,
    count,
    startIndex,
    sortBy,
    lightResponse,
    securedAccountToken,
    userToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardToken** | [**string**] | Unique identifier of the credit card associated with the account. | (optional) defaults to undefined|
| **count** | [**number**] | Number of credit account resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;lastModifiedTime&#39; | &#39;-lastModifiedTime&#39;**]**Array<&#39;lastModifiedTime&#39; &#124; &#39;-lastModifiedTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;lastModifiedTime&#x60;, and not by the field names appearing in response bodies such as &#x60;last_modified_time&#x60;. | (optional) defaults to '-lastModifiedTime'|
| **lightResponse** | [**boolean**] | If true, returns a lightweight response without any balances and usages. | (optional) defaults to false|
| **securedAccountToken** | [**string**] | Unique identifier of an existing secured account. | (optional) defaults to undefined|
| **userToken** | [**string**] | Unique identifier of the user to filter accounts by. | (optional) defaults to undefined|


### Return type

**AccountsPage**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Expected response to a valid request |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveAccount**
> AccountResponse retrieveAccount()

Retrieve a credit account.

### Example

```typescript
import {
    CreditAccountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CreditAccountsApi(configuration);

let accountToken: string; //Unique identifier of the credit account to retrieve.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let effectiveFeeScheduleOnly: boolean; //Display the effective fee schedule only. (optional) (default to false)
let lightResponse: boolean; //If true, returns a lightweight response without any balances and usages. (optional) (default to false)

const { status, data } = await apiInstance.retrieveAccount(
    accountToken,
    effectiveFeeScheduleOnly,
    lightResponse
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **effectiveFeeScheduleOnly** | [**boolean**] | Display the effective fee schedule only. | (optional) defaults to false|
| **lightResponse** | [**boolean**] | If true, returns a lightweight response without any balances and usages. | (optional) defaults to false|


### Return type

**AccountResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing account information |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAccount**
> AccountResponse updateAccount(accountUpdateReq)

Update a credit account.

### Example

```typescript
import {
    CreditAccountsApi,
    Configuration,
    AccountUpdateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new CreditAccountsApi(configuration);

let accountToken: string; //Unique identifier of the credit account to update.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let accountUpdateReq: AccountUpdateReq; //

const { status, data } = await apiInstance.updateAccount(
    accountToken,
    accountUpdateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountUpdateReq** | **AccountUpdateReq**|  | |
| **accountToken** | [**string**] | Unique identifier of the credit account to update.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|


### Return type

**AccountResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing account information. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

