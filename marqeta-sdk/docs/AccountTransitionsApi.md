# AccountTransitionsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAccountTransition**](#getaccounttransition) | **GET** /accounts/{account_token}/accounttransitions/{token} | Retrieve account transition|
|[**listAccountTransitions**](#listaccounttransitions) | **GET** /accounts/{account_token}/accounttransitions | List account transitions|
|[**resendWebhookEvent**](#resendwebhookevent) | **POST** /webhooks/{event_type}/{resource_token} | Resend credit event notification|
|[**transitionAccount**](#transitionaccount) | **POST** /accounts/{account_token}/accounttransitions | Transition account status|

# **getAccountTransition**
> AccountTransitionResponse getAccountTransition()

Retrieve a transition for a credit account.

### Example

```typescript
import {
    AccountTransitionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountTransitionsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve a transition.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let token: string; //Unique identifier of the account transition you want to retrieve.  Send a `GET` request to `/credit/accounts/{account_token}/accounttransitions` to retrieve existing account transition tokens. (default to undefined)

const { status, data } = await apiInstance.getAccountTransition(
    accountToken,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve a transition.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **token** | [**string**] | Unique identifier of the account transition you want to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/accounttransitions&#x60; to retrieve existing account transition tokens. | defaults to undefined|


### Return type

**AccountTransitionResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing account transition record. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAccountTransitions**
> AccountTransitionsPage listAccountTransitions()

Retrieve an array of transitions on a credit account.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    AccountTransitionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountTransitionsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve transitions.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let count: number; //Number of account transition resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'createdTime' | '-createdTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `createdTime`, and not by the field names appearing in response bodies such as `created_time`. (optional) (default to '-createdTime')

const { status, data } = await apiInstance.listAccountTransitions(
    accountToken,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve transitions.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **count** | [**number**] | Number of account transition resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;createdTime&#39; | &#39;-createdTime&#39;**]**Array<&#39;createdTime&#39; &#124; &#39;-createdTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;createdTime&#x60;, and not by the field names appearing in response bodies such as &#x60;created_time&#x60;. | (optional) defaults to '-createdTime'|


### Return type

**AccountTransitionsPage**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of JSON objects containing paginated account transitions information. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resendWebhookEvent**
> WebhookEventResendContainerResponse resendWebhookEvent()

Resends a credit event notification to your webhook endpoint.  Although you send this request as a `POST`, all parameters are passed in the URL and the body is empty. The event notification is resent to your webhook endpoint and also returned in the response to this request.  For details on how to configure your webhook endpoint, see the About Webhooks <</developer-guides/about-webhooks#_tutorial, tutorial>>. For the complete `/webhooks` endpoint reference, see <</core-api/webhooks, Webhooks>>.

### Example

```typescript
import {
    AccountTransitionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountTransitionsApi(configuration);

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

# **transitionAccount**
> AccountTransitionResponse transitionAccount(accountTransitionReq)

Transition a credit account to a new status.

### Example

```typescript
import {
    AccountTransitionsApi,
    Configuration,
    AccountTransitionReq
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountTransitionsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which to transition a status.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let accountTransitionReq: AccountTransitionReq; //

const { status, data } = await apiInstance.transitionAccount(
    accountToken,
    accountTransitionReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountTransitionReq** | **AccountTransitionReq**|  | |
| **accountToken** | [**string**] | Unique identifier of the credit account for which to transition a status.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|


### Return type

**AccountTransitionResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | A JSON object containing transition information. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

