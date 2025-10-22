# ProgramReserveApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deposit**](#deposit) | **POST** /programreserve/deposits | |
|[**getProgramReserveDeposits**](#getprogramreservedeposits) | **GET** /programreserve/deposits | |
|[**getProgramreserveBalances**](#getprogramreservebalances) | **GET** /programreserve/balances | Retrieve reserve account balances|
|[**getProgramreserveTransactions**](#getprogramreservetransactions) | **GET** /programreserve/transactions | List program reserve transactions|

# **deposit**
> deposit()


### Example

```typescript
import {
    ProgramReserveApi,
    Configuration,
    ProgramReserveDepositRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProgramReserveApi(configuration);

let programReserveDepositRequest: ProgramReserveDepositRequest; // (optional)

const { status, data } = await apiInstance.deposit(
    programReserveDepositRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **programReserveDepositRequest** | **ProgramReserveDepositRequest**|  | |


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
|**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProgramReserveDeposits**
> getProgramReserveDeposits()


### Example

```typescript
import {
    ProgramReserveApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProgramReserveApi(configuration);

let count: number; //Number of items to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let sortBy: string; //Sort order (optional) (default to '-createdTime')

const { status, data } = await apiInstance.getProgramReserveDeposits(
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of items to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-createdTime'|


### Return type

void (empty response body)

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProgramreserveBalances**
> ProgramReserveAccountBalance getProgramreserveBalances()

Use this endpoint to return balances for your program reserve account (sometimes referred to as a _program funding account_).

### Example

```typescript
import {
    ProgramReserveApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProgramReserveApi(configuration);

const { status, data } = await apiInstance.getProgramreserveBalances();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ProgramReserveAccountBalance**

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

# **getProgramreserveTransactions**
> ProgramReserveTransactionListResponse getProgramreserveTransactions()

Use this endpoint to return a list of credits and debits made to your program reserve account.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    ProgramReserveApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProgramReserveApi(configuration);

let count: number; //Number of resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: string; //Field on which to sort. Use any field in the resource model, or one of the system fields `lastModifiedTime` or `createdTime`. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. (optional) (default to '-createdTime')

const { status, data } = await apiInstance.getProgramreserveTransactions(
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**string**] | Field on which to sort. Use any field in the resource model, or one of the system fields &#x60;lastModifiedTime&#x60; or &#x60;createdTime&#x60;. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. | (optional) defaults to '-createdTime'|


### Return type

**ProgramReserveTransactionListResponse**

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

