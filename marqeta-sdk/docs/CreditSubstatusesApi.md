# CreditSubstatusesApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createSubStatus**](#createsubstatus) | **POST** /substatuses | Create substatus|
|[**listSubStatuses**](#listsubstatuses) | **GET** /substatuses | List substatuses|
|[**resendWebhookEvent**](#resendwebhookevent) | **POST** /webhooks/{event_type}/{resource_token} | Resend credit event notification|
|[**retrieveSubStatus**](#retrievesubstatus) | **GET** /substatuses/{substatus_token} | Retrieve substatus|
|[**updateSubStatus**](#updatesubstatus) | **PUT** /substatuses/{substatus_token} | Update substatus|

# **createSubStatus**
> SubstatusResponse createSubStatus(substatusCreateReq)

Create a new substatus for a credit account, user, or business.

### Example

```typescript
import {
    CreditSubstatusesApi,
    Configuration,
    SubstatusCreateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new CreditSubstatusesApi(configuration);

let substatusCreateReq: SubstatusCreateReq; //

const { status, data } = await apiInstance.createSubStatus(
    substatusCreateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **substatusCreateReq** | **SubstatusCreateReq**|  | |


### Return type

**SubstatusResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Expected response to a valid request. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listSubStatuses**
> SubstatusPage listSubStatuses()

Retrieve an array of substatuses. This endpoint supports <</core-api/sorting-and-pagination,sorting and pagination>>.

### Example

```typescript
import {
    CreditSubstatusesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CreditSubstatusesApi(configuration);

let accountToken: string; //Unique identifier of the account for which to retrieve substatuses.  Send a `GET` request to `/credit/accounts` to retrieve existing account tokens. (optional) (default to undefined)
let userToken: string; //Unique identifier of the user for which to retrieve substatuses.  Send a `GET` request to `/users` to retrieve existing user tokens. (optional) (default to undefined)
let isActive: boolean; //Denotes whether a substatus is active. (optional) (default to undefined)
let substatuses: Array<'HARDSHIP' | 'FRAUD' | 'MLA' | 'SCRA' | 'DECEASED' | 'BANKRUPTCY' | 'POWER_OF_ATTORNEY'>; //Comma-delimited list of substatus types to include. Allowable values: `HARDSHIP`, `FRAUD`, `MLA`, `SCRA`, `DECEASED`, `BANKRUPTCY`, `POWER_OF_ATTORNEY` (optional) (default to undefined)
let count: number; //The number of resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'createdTime' | '-createdTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. (optional) (default to '-createdTime')

const { status, data } = await apiInstance.listSubStatuses(
    accountToken,
    userToken,
    isActive,
    substatuses,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the account for which to retrieve substatuses.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing account tokens. | (optional) defaults to undefined|
| **userToken** | [**string**] | Unique identifier of the user for which to retrieve substatuses.  Send a &#x60;GET&#x60; request to &#x60;/users&#x60; to retrieve existing user tokens. | (optional) defaults to undefined|
| **isActive** | [**boolean**] | Denotes whether a substatus is active. | (optional) defaults to undefined|
| **substatuses** | **Array<&#39;HARDSHIP&#39; &#124; &#39;FRAUD&#39; &#124; &#39;MLA&#39; &#124; &#39;SCRA&#39; &#124; &#39;DECEASED&#39; &#124; &#39;BANKRUPTCY&#39; &#124; &#39;POWER_OF_ATTORNEY&#39;>** | Comma-delimited list of substatus types to include. Allowable values: &#x60;HARDSHIP&#x60;, &#x60;FRAUD&#x60;, &#x60;MLA&#x60;, &#x60;SCRA&#x60;, &#x60;DECEASED&#x60;, &#x60;BANKRUPTCY&#x60;, &#x60;POWER_OF_ATTORNEY&#x60; | (optional) defaults to undefined|
| **count** | [**number**] | The number of resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;createdTime&#39; | &#39;-createdTime&#39;**]**Array<&#39;createdTime&#39; &#124; &#39;-createdTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. | (optional) defaults to '-createdTime'|


### Return type

**SubstatusPage**

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

# **resendWebhookEvent**
> WebhookEventResendContainerResponse resendWebhookEvent()

Resends a credit event notification to your webhook endpoint.  Although you send this request as a `POST`, all parameters are passed in the URL and the body is empty. The event notification is resent to your webhook endpoint and also returned in the response to this request.  For details on how to configure your webhook endpoint, see the About Webhooks <</developer-guides/about-webhooks#_tutorial, tutorial>>. For the complete `/webhooks` endpoint reference, see <</core-api/webhooks, Webhooks>>.

### Example

```typescript
import {
    CreditSubstatusesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CreditSubstatusesApi(configuration);

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

# **retrieveSubStatus**
> SubstatusResponse retrieveSubStatus()

Retrieve a user or account substatus.

### Example

```typescript
import {
    CreditSubstatusesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CreditSubstatusesApi(configuration);

let substatusToken: string; //Unique identifier of the substatus to retrieve.  Send a `GET` request to `/credit/substatuses` to retrieve existing substatus tokens. (default to undefined)

const { status, data } = await apiInstance.retrieveSubStatus(
    substatusToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **substatusToken** | [**string**] | Unique identifier of the substatus to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/substatuses&#x60; to retrieve existing substatus tokens. | defaults to undefined|


### Return type

**SubstatusResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing substatus information |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateSubStatus**
> SubstatusResponse updateSubStatus(substatusUpdateReq)

Updating a substatus registers a new event that changes the substatus\' state.

### Example

```typescript
import {
    CreditSubstatusesApi,
    Configuration,
    SubstatusUpdateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new CreditSubstatusesApi(configuration);

let substatusToken: string; //Unique identifier of the account substatus resource to retrieve.  Send a `GET` request to `/credit/substatuses` to retrieve existing substatus tokens. (default to undefined)
let substatusUpdateReq: SubstatusUpdateReq; //

const { status, data } = await apiInstance.updateSubStatus(
    substatusToken,
    substatusUpdateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **substatusUpdateReq** | **SubstatusUpdateReq**|  | |
| **substatusToken** | [**string**] | Unique identifier of the account substatus resource to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/substatuses&#x60; to retrieve existing substatus tokens. | defaults to undefined|


### Return type

**SubstatusResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated substatus response. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

