# PaymentsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPayment**](#createpayment) | **POST** /accounts/{account_token}/payments | Create account payment|
|[**listPayments**](#listpayments) | **GET** /accounts/{account_token}/payments | List account payments|
|[**releasePaymentHold**](#releasepaymenthold) | **POST** /accounts/{account_token}/payments/{payment_token}/releasehold | Release payment hold|
|[**resendWebhookEvent**](#resendwebhookevent) | **POST** /webhooks/{event_type}/{resource_token} | Resend credit event notification|
|[**retrievePayment**](#retrievepayment) | **GET** /accounts/{account_token}/payments/{payment_token} | Retrieve account payment|
|[**transitionPayment**](#transitionpayment) | **POST** /accounts/{account_token}/payments/{payment_token}/transitions | Transition account payment status|

# **createPayment**
> PaymentDetailResponse createPayment(paymentCreateReq)

Create a new payment to apply toward a credit account\'s balance.

### Example

```typescript
import {
    PaymentsApi,
    Configuration,
    PaymentCreateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which to create a payment.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let paymentCreateReq: PaymentCreateReq; //

const { status, data } = await apiInstance.createPayment(
    accountToken,
    paymentCreateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentCreateReq** | **PaymentCreateReq**|  | |
| **accountToken** | [**string**] | Unique identifier of the credit account for which to create a payment.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|


### Return type

**PaymentDetailResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Newly created payment or existing payment with provided payment token. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPayments**
> PaymentsPage listPayments()

Retrieve an array of payments on a credit account.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which to retrieve payments.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let startDate: string; //Beginning of the date range of the payments to return. (optional) (default to undefined)
let endDate: string; //End of the date range of the payments to return. (optional) (default to undefined)
let count: number; //Number of account payments resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'lastModifiedTime' | '-lastModifiedTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `lastModifiedTime`, and not by the field names appearing in response bodies such as `last_modified_time`. (optional) (default to '-lastModifiedTime')
let statuses: Array<PaymentStatus>; //Array of statuses by which to filter payments. (optional) (default to undefined)

const { status, data } = await apiInstance.listPayments(
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
| **accountToken** | [**string**] | Unique identifier of the credit account for which to retrieve payments.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **startDate** | [**string**] | Beginning of the date range of the payments to return. | (optional) defaults to undefined|
| **endDate** | [**string**] | End of the date range of the payments to return. | (optional) defaults to undefined|
| **count** | [**number**] | Number of account payments resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;lastModifiedTime&#39; | &#39;-lastModifiedTime&#39;**]**Array<&#39;lastModifiedTime&#39; &#124; &#39;-lastModifiedTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;lastModifiedTime&#x60;, and not by the field names appearing in response bodies such as &#x60;last_modified_time&#x60;. | (optional) defaults to '-lastModifiedTime'|
| **statuses** | **Array&lt;PaymentStatus&gt;** | Array of statuses by which to filter payments. | (optional) defaults to undefined|


### Return type

**PaymentsPage**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated list of payments for the given token. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releasePaymentHold**
> PaymentDetailResponse releasePaymentHold()

Manually release a payment hold on a credit account.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let accountToken: string; //Unique identifier of the credit account on which a payment hold is being released.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let paymentToken: string; //Unique identifier of the payment currently on hold.  Send a `GET` request to `/credit/accounts/{account_token}/payments` to retrieve existing payment tokens. (default to undefined)

const { status, data } = await apiInstance.releasePaymentHold(
    accountToken,
    paymentToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account on which a payment hold is being released.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **paymentToken** | [**string**] | Unique identifier of the payment currently on hold.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/payments&#x60; to retrieve existing payment tokens. | defaults to undefined|


### Return type

**PaymentDetailResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Expected response. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resendWebhookEvent**
> WebhookEventResendContainerResponse resendWebhookEvent()

Resends a credit event notification to your webhook endpoint.  Although you send this request as a `POST`, all parameters are passed in the URL and the body is empty. The event notification is resent to your webhook endpoint and also returned in the response to this request.  For details on how to configure your webhook endpoint, see the About Webhooks <</developer-guides/about-webhooks#_tutorial, tutorial>>. For the complete `/webhooks` endpoint reference, see <</core-api/webhooks, Webhooks>>.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let eventType: 'ledgerentry' | 'journalentry' | 'accounttransition' | 'accountstatement' | 'paymenttransition' | 'delinquencytransition' | 'paymentreminders' | 'substatus' | 'accountsignupbonus'; //Specifies the type of event you want to resend. (default to undefined)
let resourceToken: string; //Unique identifier of the resource for which you want to resend a notification.  * Send a `GET` request to `/credit/accounts/{account_token}/journalentries` to retrieve existing journal entry tokens. * Send a `GET` request to `/credit/accounts/{account_token}/ledgerentries` to retrieve existing ledger entry tokens. * Send a `GET` request to `/accounts/{account_token}/accounttransitions` to retrieve existing account transition tokens. * Send a `GET` request to `/credit/accounts/{account_token}/payments/{payment_token}` to retrieve existing payment transition tokens. * Send a `GET` request to `/accounts/{account_token}/statements` to retrieve existing statement summary tokens. * Send a `GET` request to `/accounts/{account_token}/delinquencystate/transitions` to retrieve existing delinquency state transition tokens. * Send a `GET` request to `/accounts/{account_token}/statements/{statement_summary_token}/paymentreminders/{token}` to retrieve existing payment reminder tokens. * Send a `GET` request to `/credit/substatuses` to retrieve existing substatus tokens. * Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens and identify the specific account for the resend event. (default to undefined)

const { status, data } = await apiInstance.resendWebhookEvent(
    eventType,
    resourceToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventType** | [**&#39;ledgerentry&#39; | &#39;journalentry&#39; | &#39;accounttransition&#39; | &#39;accountstatement&#39; | &#39;paymenttransition&#39; | &#39;delinquencytransition&#39; | &#39;paymentreminders&#39; | &#39;substatus&#39; | &#39;accountsignupbonus&#39;**]**Array<&#39;ledgerentry&#39; &#124; &#39;journalentry&#39; &#124; &#39;accounttransition&#39; &#124; &#39;accountstatement&#39; &#124; &#39;paymenttransition&#39; &#124; &#39;delinquencytransition&#39; &#124; &#39;paymentreminders&#39; &#124; &#39;substatus&#39; &#124; &#39;accountsignupbonus&#39;>** | Specifies the type of event you want to resend. | defaults to undefined|
| **resourceToken** | [**string**] | Unique identifier of the resource for which you want to resend a notification.  * Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/journalentries&#x60; to retrieve existing journal entry tokens. * Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/ledgerentries&#x60; to retrieve existing ledger entry tokens. * Send a &#x60;GET&#x60; request to &#x60;/accounts/{account_token}/accounttransitions&#x60; to retrieve existing account transition tokens. * Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/payments/{payment_token}&#x60; to retrieve existing payment transition tokens. * Send a &#x60;GET&#x60; request to &#x60;/accounts/{account_token}/statements&#x60; to retrieve existing statement summary tokens. * Send a &#x60;GET&#x60; request to &#x60;/accounts/{account_token}/delinquencystate/transitions&#x60; to retrieve existing delinquency state transition tokens. * Send a &#x60;GET&#x60; request to &#x60;/accounts/{account_token}/statements/{statement_summary_token}/paymentreminders/{token}&#x60; to retrieve existing payment reminder tokens. * Send a &#x60;GET&#x60; request to &#x60;/credit/substatuses&#x60; to retrieve existing substatus tokens. * Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens and identify the specific account for the resend event. | defaults to undefined|


### Return type

**WebhookEventResendContainerResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Event response for which the webhook event was resent |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrievePayment**
> PaymentDetailResponse retrievePayment()

Retrieve a payment for a credit account.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which to retrieve a payment.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let paymentToken: string; //Unique identifier of the payment to retrieve.  Send a `GET` request to `/credit/accounts/{token}/payments` to retrieve existing payment tokens. (default to undefined)

const { status, data } = await apiInstance.retrievePayment(
    accountToken,
    paymentToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which to retrieve a payment.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **paymentToken** | [**string**] | Unique identifier of the payment to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{token}/payments&#x60; to retrieve existing payment tokens. | defaults to undefined|


### Return type

**PaymentDetailResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment object |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transitionPayment**
> PaymentTransitionResponse transitionPayment(paymentTransitionReq)

Transition a credit account payment\'s status to a new status.

### Example

```typescript
import {
    PaymentsApi,
    Configuration,
    PaymentTransitionReq
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to transition a payment status.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let paymentToken: string; //Unique identifier of the payment whose status you want to transition.  Send a `GET` request to `/credit/accounts/{account_token}/payments` endpoint to retrieve existing payment tokens for a given account. (default to undefined)
let paymentTransitionReq: PaymentTransitionReq; //

const { status, data } = await apiInstance.transitionPayment(
    accountToken,
    paymentToken,
    paymentTransitionReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentTransitionReq** | **PaymentTransitionReq**|  | |
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to transition a payment status.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **paymentToken** | [**string**] | Unique identifier of the payment whose status you want to transition.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/payments&#x60; endpoint to retrieve existing payment tokens for a given account. | defaults to undefined|


### Return type

**PaymentTransitionResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Payment Transition Response object. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

