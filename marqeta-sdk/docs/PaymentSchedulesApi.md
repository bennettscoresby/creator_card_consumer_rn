# PaymentSchedulesApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPaymentSchedule**](#createpaymentschedule) | **POST** /accounts/{account_token}/paymentschedules | Create payment schedule|
|[**createPaymentScheduleTransition**](#createpaymentscheduletransition) | **POST** /accounts/{account_token}/paymentschedules/{payment_schedule_token}/transitions | Create payment schedule transition|
|[**retrievePaymentSchedule**](#retrievepaymentschedule) | **GET** /accounts/{account_token}/paymentschedules/{payment_schedule_token} | Retrieve payment schedule|
|[**retrievePaymentScheduleTransition**](#retrievepaymentscheduletransition) | **GET** /accounts/{account_token}/paymentschedules/{payment_schedule_token}/transitions/{token} | Retrieve payment schedule transition|
|[**retrievePaymentScheduleTransitions**](#retrievepaymentscheduletransitions) | **GET** /accounts/{account_token}/paymentschedules/{payment_schedule_token}/transitions | Retrieve payment schedule transitions|
|[**retrievePaymentSchedules**](#retrievepaymentschedules) | **GET** /accounts/{account_token}/paymentschedules | List payment schedules|

# **createPaymentSchedule**
> PaymentScheduleResponse createPaymentSchedule(paymentScheduleCreateReq)

Create a new payment schedule, either one-time or recurring.

### Example

```typescript
import {
    PaymentSchedulesApi,
    Configuration,
    PaymentScheduleCreateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentSchedulesApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to create a payment schedule.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let paymentScheduleCreateReq: PaymentScheduleCreateReq; //

const { status, data } = await apiInstance.createPaymentSchedule(
    accountToken,
    paymentScheduleCreateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentScheduleCreateReq** | **PaymentScheduleCreateReq**|  | |
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to create a payment schedule.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|


### Return type

**PaymentScheduleResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Newly created payment schedule. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPaymentScheduleTransition**
> PaymentScheduleTransitionResponse createPaymentScheduleTransition(paymentScheduleTransitionCreateReq)

Transition a payment schedule to a new status.

### Example

```typescript
import {
    PaymentSchedulesApi,
    Configuration,
    PaymentScheduleTransitionCreateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentSchedulesApi(configuration);

let accountToken: string; //Unique identifier of the credit account on which to transition a payment schedule.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let paymentScheduleToken: string; //Unique identifier of the payment schedule whose status is to transition.  Send a `GET` request to `/credit/accounts/{account_token}/paymentschedules` to retrieve existing payment schedule tokens. (default to undefined)
let paymentScheduleTransitionCreateReq: PaymentScheduleTransitionCreateReq; //

const { status, data } = await apiInstance.createPaymentScheduleTransition(
    accountToken,
    paymentScheduleToken,
    paymentScheduleTransitionCreateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentScheduleTransitionCreateReq** | **PaymentScheduleTransitionCreateReq**|  | |
| **accountToken** | [**string**] | Unique identifier of the credit account on which to transition a payment schedule.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **paymentScheduleToken** | [**string**] | Unique identifier of the payment schedule whose status is to transition.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/paymentschedules&#x60; to retrieve existing payment schedule tokens. | defaults to undefined|


### Return type

**PaymentScheduleTransitionResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Newly created payment schedule transition. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrievePaymentSchedule**
> PaymentScheduleResponse retrievePaymentSchedule()

Retrieve a single payment schedule on a specific credit account.

### Example

```typescript
import {
    PaymentSchedulesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentSchedulesApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve a payment schedule.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let paymentScheduleToken: string; //Unique identifier of the payment schedule that you want to retrieve.  Send a `GET` request to `/credit/accounts/{account_token}/paymentschedules` to retrieve existing payment schedule tokens. (default to undefined)

const { status, data } = await apiInstance.retrievePaymentSchedule(
    accountToken,
    paymentScheduleToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve a payment schedule.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **paymentScheduleToken** | [**string**] | Unique identifier of the payment schedule that you want to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/paymentschedules&#x60; to retrieve existing payment schedule tokens. | defaults to undefined|


### Return type

**PaymentScheduleResponse**

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

# **retrievePaymentScheduleTransition**
> PaymentScheduleTransitionResponse retrievePaymentScheduleTransition()

Retrieve a single payment schedule transition on a specific credit account.

### Example

```typescript
import {
    PaymentSchedulesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentSchedulesApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve a payment schedule transition.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let paymentScheduleToken: string; //Unique identifier of the payment schedule you want to retrieve.  Send a `GET` request to `/credit/accounts/{account_token}/paymentschedules` to retrieve existing payment schedule tokens. (default to undefined)
let token: string; //Unique identifier of the payment schedule transition you want to retrieve.  Send a `GET` request to `/credit/accounts/{account_token}/paymentschedules/{payment_schedule_token}/transitions` to retrieve existing payment schedule transition tokens. (default to undefined)

const { status, data } = await apiInstance.retrievePaymentScheduleTransition(
    accountToken,
    paymentScheduleToken,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve a payment schedule transition.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **paymentScheduleToken** | [**string**] | Unique identifier of the payment schedule you want to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/paymentschedules&#x60; to retrieve existing payment schedule tokens. | defaults to undefined|
| **token** | [**string**] | Unique identifier of the payment schedule transition you want to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/paymentschedules/{payment_schedule_token}/transitions&#x60; to retrieve existing payment schedule transition tokens. | defaults to undefined|


### Return type

**PaymentScheduleTransitionResponse**

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

# **retrievePaymentScheduleTransitions**
> PaymentScheduleTransitionPage retrievePaymentScheduleTransitions()

Retrieve an array of payment schedule transitions on a specific credit account.

### Example

```typescript
import {
    PaymentSchedulesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentSchedulesApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve payment schedule transitions.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let paymentScheduleToken: string; //Unique identifier of the payment schedule for which you want to retrieve transitions.  Send a `GET` request to `/credit/accounts/{account_token}/paymentschedules` to retrieve existing payment schedule tokens. (default to undefined)
let count: number; //Number of payment schedule resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'createdTime' | '-createdTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `createdTime`, and not by the field names appearing in response bodies such as `created_time`. (optional) (default to '-createdTime')

const { status, data } = await apiInstance.retrievePaymentScheduleTransitions(
    accountToken,
    paymentScheduleToken,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve payment schedule transitions.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **paymentScheduleToken** | [**string**] | Unique identifier of the payment schedule for which you want to retrieve transitions.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/paymentschedules&#x60; to retrieve existing payment schedule tokens. | defaults to undefined|
| **count** | [**number**] | Number of payment schedule resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;createdTime&#39; | &#39;-createdTime&#39;**]**Array<&#39;createdTime&#39; &#124; &#39;-createdTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;createdTime&#x60;, and not by the field names appearing in response bodies such as &#x60;created_time&#x60;. | (optional) defaults to '-createdTime'|


### Return type

**PaymentScheduleTransitionPage**

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

# **retrievePaymentSchedules**
> PaymentSchedulePage retrievePaymentSchedules()

Retrieve an array of payment schedules on a specific credit account.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    PaymentSchedulesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentSchedulesApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve payment schedules.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let statuses: Array<PaymentScheduleStatus>; //Status of the payment schedules to retrieve. (optional) (default to undefined)
let frequency: Array<PaymentScheduleFrequency>; //Frequency of the payment schedules to retrieve. (optional) (default to undefined)
let count: number; //Number of payment schedule resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'lastModifiedTime' | '-lastModifiedTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `lastModifiedTime`, and not by the field names appearing in response bodies such as `last_modified_time`. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.retrievePaymentSchedules(
    accountToken,
    statuses,
    frequency,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve payment schedules.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **statuses** | **Array&lt;PaymentScheduleStatus&gt;** | Status of the payment schedules to retrieve. | (optional) defaults to undefined|
| **frequency** | **Array&lt;PaymentScheduleFrequency&gt;** | Frequency of the payment schedules to retrieve. | (optional) defaults to undefined|
| **count** | [**number**] | Number of payment schedule resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;lastModifiedTime&#39; | &#39;-lastModifiedTime&#39;**]**Array<&#39;lastModifiedTime&#39; &#124; &#39;-lastModifiedTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;lastModifiedTime&#x60;, and not by the field names appearing in response bodies such as &#x60;last_modified_time&#x60;. | (optional) defaults to '-lastModifiedTime'|


### Return type

**PaymentSchedulePage**

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

