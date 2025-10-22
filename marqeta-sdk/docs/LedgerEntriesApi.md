# LedgerEntriesApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAccountLedgerEntry**](#getaccountledgerentry) | **GET** /accounts/{account_token}/ledgerentries/{ledger_entry_token} | Retrieve account ledger entry|
|[**listAccountLedgerEntries**](#listaccountledgerentries) | **GET** /accounts/{account_token}/ledgerentries | List account ledger entries|
|[**resendWebhookEvent**](#resendwebhookevent) | **POST** /webhooks/{event_type}/{resource_token} | Resend credit event notification|

# **getAccountLedgerEntry**
> LedgerEntry getAccountLedgerEntry()

Retrieve a ledger entry for a credit account.

### Example

```typescript
import {
    LedgerEntriesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LedgerEntriesApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve ledger entries.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let ledgerEntryToken: string; //Unique identifier of the ledger entry you want to retrieve.  Send a `GET` request to `/credit/accounts/{account_token}/ledgerentries` to retrieve existing ledger entry tokens. (default to undefined)

const { status, data } = await apiInstance.getAccountLedgerEntry(
    accountToken,
    ledgerEntryToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve ledger entries.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **ledgerEntryToken** | [**string**] | Unique identifier of the ledger entry you want to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/ledgerentries&#x60; to retrieve existing ledger entry tokens. | defaults to undefined|


### Return type

**LedgerEntry**

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

# **listAccountLedgerEntries**
> LedgerEntriesPage listAccountLedgerEntries()

Retrieve an array of ledger entries on a credit account.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>> and <</core-api/object-expansion, object expansion>>.

### Example

```typescript
import {
    LedgerEntriesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LedgerEntriesApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve ledger entries.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let count: number; //Number of ledger entry resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let startDate: string; //Starting date of the date range from which to return ledger entries. (optional) (default to undefined)
let endDate: string; //Ending date of the date range from which to return ledger entries. (optional) (default to undefined)
let statuses: Array<string>; //Array of statuses by which to filter ledger entries. (optional) (default to undefined)
let description: string; //Description of the ledger entries to return. (optional) (default to undefined)
let detailToken: string; //Detail token of the ledger entries to return. (optional) (default to undefined)
let groups: Array<string>; //Array of groups by which to filter ledger entries.  To return all ledger entry groups, do not include this query parameter. (optional) (default to undefined)
let amount: number; //Number of ledger entries to return. (optional) (default to undefined)
let expand: Array<'detailObject' | 'originalCurrency'>; //Embeds the specified object into the response. (optional) (default to undefined)
let sortBy: 'createdTime' | '-createdTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `createdTime`, and not by the field names appearing in response bodies such as `created_time`. (optional) (default to '-createdTime')

const { status, data } = await apiInstance.listAccountLedgerEntries(
    accountToken,
    count,
    startIndex,
    startDate,
    endDate,
    statuses,
    description,
    detailToken,
    groups,
    amount,
    expand,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve ledger entries.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **count** | [**number**] | Number of ledger entry resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **startDate** | [**string**] | Starting date of the date range from which to return ledger entries. | (optional) defaults to undefined|
| **endDate** | [**string**] | Ending date of the date range from which to return ledger entries. | (optional) defaults to undefined|
| **statuses** | **Array&lt;string&gt;** | Array of statuses by which to filter ledger entries. | (optional) defaults to undefined|
| **description** | [**string**] | Description of the ledger entries to return. | (optional) defaults to undefined|
| **detailToken** | [**string**] | Detail token of the ledger entries to return. | (optional) defaults to undefined|
| **groups** | **Array&lt;string&gt;** | Array of groups by which to filter ledger entries.  To return all ledger entry groups, do not include this query parameter. | (optional) defaults to undefined|
| **amount** | [**number**] | Number of ledger entries to return. | (optional) defaults to undefined|
| **expand** | **Array<&#39;detailObject&#39; &#124; &#39;originalCurrency&#39;>** | Embeds the specified object into the response. | (optional) defaults to undefined|
| **sortBy** | [**&#39;createdTime&#39; | &#39;-createdTime&#39;**]**Array<&#39;createdTime&#39; &#124; &#39;-createdTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;createdTime&#x60;, and not by the field names appearing in response bodies such as &#x60;created_time&#x60;. | (optional) defaults to '-createdTime'|


### Return type

**LedgerEntriesPage**

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
    LedgerEntriesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LedgerEntriesApi(configuration);

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

