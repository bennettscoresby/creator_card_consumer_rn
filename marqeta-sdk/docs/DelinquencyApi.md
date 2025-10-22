# DelinquencyApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**resendWebhookEvent**](#resendwebhookevent) | **POST** /webhooks/{event_type}/{resource_token} | Resend credit event notification|
|[**retrieveDelinquencyState**](#retrievedelinquencystate) | **GET** /accounts/{account_token}/delinquencystate | Retrieve delinquency state|
|[**retrieveDelinquencyTransition**](#retrievedelinquencytransition) | **GET** /accounts/{account_token}/delinquencystate/transitions/{delinquency_transition_token} | Retrieve delinquency state transition|
|[**retrieveDelinquencyTransitions**](#retrievedelinquencytransitions) | **GET** /accounts/{account_token}/delinquencystate/transitions | List delinquency state transitions|

# **resendWebhookEvent**
> WebhookEventResendContainerResponse resendWebhookEvent()

Resends a credit event notification to your webhook endpoint.  Although you send this request as a `POST`, all parameters are passed in the URL and the body is empty. The event notification is resent to your webhook endpoint and also returned in the response to this request.  For details on how to configure your webhook endpoint, see the About Webhooks <</developer-guides/about-webhooks#_tutorial, tutorial>>. For the complete `/webhooks` endpoint reference, see <</core-api/webhooks, Webhooks>>.

### Example

```typescript
import {
    DelinquencyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DelinquencyApi(configuration);

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

# **retrieveDelinquencyState**
> DelinquencyStateResponse retrieveDelinquencyState()

Retrieve details of the current delinquency state of a credit account.  An account is delinquent when it is past due on payments and current when it is up to date on payments.

### Example

```typescript
import {
    DelinquencyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DelinquencyApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve delinquency state details.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)

const { status, data } = await apiInstance.retrieveDelinquencyState(
    accountToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve delinquency state details.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|


### Return type

**DelinquencyStateResponse**

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

# **retrieveDelinquencyTransition**
> DelinquencyTransitionResponse retrieveDelinquencyTransition()

Retrieve a specific delinquency state transition on a credit account.  A delinquency state transition occurs when an account\'s delinquency state transitions between delinquent and current. An account becomes delinquent when it falls behind on payments and becomes current when payments are made up to date.

### Example

```typescript
import {
    DelinquencyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DelinquencyApi(configuration);

let accountToken: string; //Unique identifier of the credit account whose delinquency state transition you want to retrieve.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let delinquencyTransitionToken: string; //Unique identifier of the delinquency state transition. (default to undefined)

const { status, data } = await apiInstance.retrieveDelinquencyTransition(
    accountToken,
    delinquencyTransitionToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account whose delinquency state transition you want to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **delinquencyTransitionToken** | [**string**] | Unique identifier of the delinquency state transition. | defaults to undefined|


### Return type

**DelinquencyTransitionResponse**

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

# **retrieveDelinquencyTransitions**
> DelinquencyTransitionsResponsePage retrieveDelinquencyTransitions()

Retrieve an array of delinquency state transitions for a credit account.  A delinquency state transition occurs when an account\'s delinquency state transitions between delinquent and current. An account becomes delinquent when it falls behind on payments and becomes current when payments are made up to date.

### Example

```typescript
import {
    DelinquencyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DelinquencyApi(configuration);

let accountToken: string; //Unique identifier of the credit account whose delinquency state transitions you want to retrieve.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let count: number; //Number of resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'impactTime' | '-impactTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `impactTime`, and not by the field names appearing in response bodies such as `impact_time`. (optional) (default to '-impactTime')

const { status, data } = await apiInstance.retrieveDelinquencyTransitions(
    accountToken,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account whose delinquency state transitions you want to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **count** | [**number**] | Number of resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;impactTime&#39; | &#39;-impactTime&#39;**]**Array<&#39;impactTime&#39; &#124; &#39;-impactTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;impactTime&#x60;, and not by the field names appearing in response bodies such as &#x60;impact_time&#x60;. | (optional) defaults to '-impactTime'|


### Return type

**DelinquencyTransitionsResponsePage**

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

