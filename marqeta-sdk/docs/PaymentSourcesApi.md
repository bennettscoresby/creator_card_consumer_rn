# PaymentSourcesApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPaymentSource**](#createpaymentsource) | **POST** /paymentsources | Create payment source|
|[**listPaymentSources**](#listpaymentsources) | **GET** /paymentsources | List payment sources|
|[**retrievePaymentSource**](#retrievepaymentsource) | **GET** /paymentsources/{token} | Retrieve payment source|
|[**updatePaymentSource**](#updatepaymentsource) | **PUT** /paymentsources/{token} | Update payment source|

# **createPaymentSource**
> PaymentSourceResponse createPaymentSource(paymentSourceCreateReq)

Create a payment source from which to make payments.

### Example

```typescript
import {
    PaymentSourcesApi,
    Configuration,
    PaymentSourceCreateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentSourcesApi(configuration);

let paymentSourceCreateReq: PaymentSourceCreateReq; //

const { status, data } = await apiInstance.createPaymentSource(
    paymentSourceCreateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentSourceCreateReq** | **PaymentSourceCreateReq**|  | |


### Return type

**PaymentSourceResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Response containing the created payment source |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPaymentSources**
> PaymentSourcePage listPaymentSources()

Retrieve an array of payment sources.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    PaymentSourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentSourcesApi(configuration);

let accountToken: string; //Unique identifier of the credit account associated with the payment source. (optional) (default to undefined)
let userToken: string; //Unique identifier of the user associated with the payment source. (optional) (default to undefined)
let businessToken: string; //Unique identifier of the business associated with the payment source. (optional) (default to undefined)
let count: number; //Number of payment source resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'lastModifiedTime' | '-lastModifiedTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `lastModifiedTime`, and not by the field names appearing in response bodies such as `last_modified_time`. (optional) (default to '-lastModifiedTime')
let statuses: Array<PaymentSourceStatusEnum>; //Array of statuses to use for filtering payment sources. (optional) (default to undefined)

const { status, data } = await apiInstance.listPaymentSources(
    accountToken,
    userToken,
    businessToken,
    count,
    startIndex,
    sortBy,
    statuses
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account associated with the payment source. | (optional) defaults to undefined|
| **userToken** | [**string**] | Unique identifier of the user associated with the payment source. | (optional) defaults to undefined|
| **businessToken** | [**string**] | Unique identifier of the business associated with the payment source. | (optional) defaults to undefined|
| **count** | [**number**] | Number of payment source resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;lastModifiedTime&#39; | &#39;-lastModifiedTime&#39;**]**Array<&#39;lastModifiedTime&#39; &#124; &#39;-lastModifiedTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;lastModifiedTime&#x60;, and not by the field names appearing in response bodies such as &#x60;last_modified_time&#x60;. | (optional) defaults to '-lastModifiedTime'|
| **statuses** | **Array&lt;PaymentSourceStatusEnum&gt;** | Array of statuses to use for filtering payment sources. | (optional) defaults to undefined|


### Return type

**PaymentSourcePage**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Response containing a list of all payment sources for a provided account |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrievePaymentSource**
> PaymentSourceResponse retrievePaymentSource()

Retrieve a payment source.

### Example

```typescript
import {
    PaymentSourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentSourcesApi(configuration);

let token: string; //Unique identifier of the payment source to retrieve.  Send a `GET` request to `/credit/paymentsources` to retrieve existing payment source tokens. (default to undefined)

const { status, data } = await apiInstance.retrievePaymentSource(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the payment source to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/paymentsources&#x60; to retrieve existing payment source tokens. | defaults to undefined|


### Return type

**PaymentSourceResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Response containing details for the requested payment source |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePaymentSource**
> PaymentSourceResponse updatePaymentSource(paymentSourceUpdateReq)

Update details of a payment source.

### Example

```typescript
import {
    PaymentSourcesApi,
    Configuration,
    PaymentSourceUpdateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentSourcesApi(configuration);

let token: string; //Unique identifier of the payment source to retrieve.  Send a `GET` request to `/credit/paymentsources` to retrieve existing payment source tokens. (default to undefined)
let paymentSourceUpdateReq: PaymentSourceUpdateReq; //

const { status, data } = await apiInstance.updatePaymentSource(
    token,
    paymentSourceUpdateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentSourceUpdateReq** | **PaymentSourceUpdateReq**|  | |
| **token** | [**string**] | Unique identifier of the payment source to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/paymentsources&#x60; to retrieve existing payment source tokens. | defaults to undefined|


### Return type

**PaymentSourceResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Response containing updated payment source |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

