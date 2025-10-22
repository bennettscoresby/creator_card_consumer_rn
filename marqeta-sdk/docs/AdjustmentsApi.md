# AdjustmentsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAdjustmentForAccount**](#createadjustmentforaccount) | **POST** /accounts/{account_token}/adjustments | Create account adjustment|
|[**getAdjustmentsByAccount**](#getadjustmentsbyaccount) | **GET** /accounts/{account_token}/adjustments | List account adjustments|
|[**retrieveAdjustment**](#retrieveadjustment) | **GET** /accounts/{account_token}/adjustments/{adjustment_token} | Retrieve account adjustment|

# **createAdjustmentForAccount**
> AccountAdjustmentResponse createAdjustmentForAccount(accountAdjustmentReq)

Create an adjustment for an existing credit account.

### Example

```typescript
import {
    AdjustmentsApi,
    Configuration,
    AccountAdjustmentReq
} from './api';

const configuration = new Configuration();
const apiInstance = new AdjustmentsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to create an adjustment.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let accountAdjustmentReq: AccountAdjustmentReq; //

const { status, data } = await apiInstance.createAdjustmentForAccount(
    accountToken,
    accountAdjustmentReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountAdjustmentReq** | **AccountAdjustmentReq**|  | |
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to create an adjustment.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|


### Return type

**AccountAdjustmentResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Expected response |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAdjustmentsByAccount**
> AccountAdjustmentPage getAdjustmentsByAccount()

Retrieve an array of adjustments for a credit account.  This endpoint supports <</core-api/sorting-and-pagination, pagination>>.

### Example

```typescript
import {
    AdjustmentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdjustmentsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve adjustments.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let count: number; //Number of account adjustment resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)

const { status, data } = await apiInstance.getAdjustmentsByAccount(
    accountToken,
    count,
    startIndex
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve adjustments.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **count** | [**number**] | Number of account adjustment resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|


### Return type

**AccountAdjustmentPage**

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

# **retrieveAdjustment**
> AccountAdjustmentResponse retrieveAdjustment()

Retrieve an adjustment for a credit account.

### Example

```typescript
import {
    AdjustmentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdjustmentsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve an adjustment.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let adjustmentToken: string; //Unique identifier of the adjustment to retrieve.  Send a `GET` request to `/credit/accounts/{account_token}/adjustments` to retrieve existing account adjustment tokens. (default to undefined)

const { status, data } = await apiInstance.retrieveAdjustment(
    accountToken,
    adjustmentToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve an adjustment.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **adjustmentToken** | [**string**] | Unique identifier of the adjustment to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/adjustments&#x60; to retrieve existing account adjustment tokens. | defaults to undefined|


### Return type

**AccountAdjustmentResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing account_adjustment information |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

