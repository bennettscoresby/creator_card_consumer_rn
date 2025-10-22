# AccountRefundsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createRefund**](#createrefund) | **POST** /accounts/{account_token}/refunds | Create refund|
|[**listRefunds**](#listrefunds) | **GET** /accounts/{account_token}/refunds | List account refunds|
|[**retrieveRefund**](#retrieverefund) | **GET** /accounts/{account_token}/refunds/{refund_token} | Retrieve account refund|
|[**transitionRefund**](#transitionrefund) | **POST** /accounts/{account_token}/refunds/{refund_token}/transitions | Transition account refund status|

# **createRefund**
> RefundResponse createRefund(refundCreateRequest)

Create a new refund, which you can issue to the account holder if their credit account balance is negative.

### Example

```typescript
import {
    AccountRefundsApi,
    Configuration,
    RefundCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountRefundsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to create a balance refund.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let refundCreateRequest: RefundCreateRequest; //

const { status, data } = await apiInstance.createRefund(
    accountToken,
    refundCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refundCreateRequest** | **RefundCreateRequest**|  | |
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to create a balance refund.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|


### Return type

**RefundResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Expected response. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listRefunds**
> RefundsPage listRefunds()

Use the `/credit/accounts/{account_token}/refunds` endpoint to retrieve an array of refunds on a credit account.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    AccountRefundsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountRefundsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which to retrieve refunds.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let startDate: string; //Beginning of the date range of the refunds to return. (optional) (default to undefined)
let endDate: string; //End of the date range of the refunds to return. (optional) (default to undefined)
let count: number; //Number of account refund resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'lastModifiedTime' | '-lastModifiedTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. Only supports `lastModifiedTime` and `-lastModifiedTime`.  *NOTE:* You must sort using system field names such as `lastModifiedTime`, and not by the field names appearing in response bodies such as `updated_time`. (optional) (default to '-lastModifiedTime')
let statuses: Array<RefundStatus>; //Array of statuses by which to filter refunds. (optional) (default to undefined)

const { status, data } = await apiInstance.listRefunds(
    accountToken,
    startDate,
    endDate,
    count,
    startIndex,
    sortBy,
    statuses
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which to retrieve refunds.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **startDate** | [**string**] | Beginning of the date range of the refunds to return. | (optional) defaults to undefined|
| **endDate** | [**string**] | End of the date range of the refunds to return. | (optional) defaults to undefined|
| **count** | [**number**] | Number of account refund resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;lastModifiedTime&#39; | &#39;-lastModifiedTime&#39;**]**Array<&#39;lastModifiedTime&#39; &#124; &#39;-lastModifiedTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. Only supports &#x60;lastModifiedTime&#x60; and &#x60;-lastModifiedTime&#x60;.  *NOTE:* You must sort using system field names such as &#x60;lastModifiedTime&#x60;, and not by the field names appearing in response bodies such as &#x60;updated_time&#x60;. | (optional) defaults to '-lastModifiedTime'|
| **statuses** | **Array&lt;RefundStatus&gt;** | Array of statuses by which to filter refunds. | (optional) defaults to undefined|


### Return type

**RefundsPage**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated list of refunds for the given token. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveRefund**
> RefundResponse retrieveRefund()

Use the `/accounts/{account_token}/refunds/{refund_token}` endpoint to retrieve a refund.

### Example

```typescript
import {
    AccountRefundsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountRefundsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which to retrieve a refund.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let refundToken: string; //Unique identifier of the refund to retrieve.  Send a `GET` request to `/credit/accounts/{account_token}/refunds/{refund_token}` to retrieve existing refunds. (default to undefined)

const { status, data } = await apiInstance.retrieveRefund(
    accountToken,
    refundToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which to retrieve a refund.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **refundToken** | [**string**] | Unique identifier of the refund to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/refunds/{refund_token}&#x60; to retrieve existing refunds. | defaults to undefined|


### Return type

**RefundResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Refund object |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transitionRefund**
> RefundResponse transitionRefund(refundTransitionRequest)

Use the `/accounts/{account_token}/refunds/{refund_token}/transitions` endpoint to transition a credit account refund\'s status to a new status.

### Example

```typescript
import {
    AccountRefundsApi,
    Configuration,
    RefundTransitionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountRefundsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to transition a refund status. Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let refundToken: string; //Unique identifier of the refund whose status you want to transition. Send a `GET` request to `/credit/accounts/{account_token}/refunds` endpoint to retrieve existing refund tokens for a given account. (default to undefined)
let refundTransitionRequest: RefundTransitionRequest; //

const { status, data } = await apiInstance.transitionRefund(
    accountToken,
    refundToken,
    refundTransitionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refundTransitionRequest** | **RefundTransitionRequest**|  | |
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to transition a refund status. Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **refundToken** | [**string**] | Unique identifier of the refund whose status you want to transition. Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/refunds&#x60; endpoint to retrieve existing refund tokens for a given account. | defaults to undefined|


### Return type

**RefundResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Refund Response object. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

