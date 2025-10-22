# JournalEntriesApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAccountJournalEntry**](#getaccountjournalentry) | **GET** /accounts/{account_token}/journalentries/{journal_entry_token} | Retrieve account journal entry|
|[**listAccountJournalEntries**](#listaccountjournalentries) | **GET** /accounts/{account_token}/journalentries | List account journal entries|
|[**resendWebhookEvent**](#resendwebhookevent) | **POST** /webhooks/{event_type}/{resource_token} | Resend credit event notification|

# **getAccountJournalEntry**
> JournalEntry getAccountJournalEntry()

Retrieve a journal entry for a credit account.

### Example

```typescript
import {
    JournalEntriesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JournalEntriesApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve journal entries.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let journalEntryToken: string; //Unique identifier of the journal entry you want to retrieve.  Send a `GET` request to `/credit/accounts/{account_token}/journalentries` to retrieve existing journal entry tokens. (default to undefined)

const { status, data } = await apiInstance.getAccountJournalEntry(
    accountToken,
    journalEntryToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve journal entries.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **journalEntryToken** | [**string**] | Unique identifier of the journal entry you want to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/journalentries&#x60; to retrieve existing journal entry tokens. | defaults to undefined|


### Return type

**JournalEntry**

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

# **listAccountJournalEntries**
> JournalEntriesPage listAccountJournalEntries()

Retrieve an array of journal entries on a credit account.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>> and <</core-api/object-expansion, object expansion>>.

### Example

```typescript
import {
    JournalEntriesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JournalEntriesApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve journal entries.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let count: number; //Number of journal entry resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let startDate: string; //Starting date of the date range from which to return journal entries. (optional) (default to undefined)
let endDate: string; //Ending date of the date range from which to return journal entries. (optional) (default to undefined)
let startImpactTime: string; //Starting `impact_time` of the date range from which to return journal entries. (optional) (default to undefined)
let endImpactTime: string; //Ending `impact_time` of the date range from which to return journal entries. (optional) (default to undefined)
let startCreatedTime: string; //Starting `created_date` of the date range from which to return journal entries. (optional) (default to undefined)
let endCreatedTime: string; //Ending `created_date` of the date range from which to return journal entries. (optional) (default to undefined)
let statuses: Array<'POSTED' | 'PENDING'>; //Array of statuses by which to filter journal entries. (optional) (default to undefined)
let detailToken: string; //Detail token of the journal entries to return. (optional) (default to undefined)
let groups: Array<'PURCHASE' | 'ORIGINAL_CREDIT' | 'FEE' | 'BALANCE_REFUND' | 'PAYMENT' | 'INTEREST' | 'DISPUTE' | 'REFUND' | 'ADJUSTMENT' | 'REWARD'>; //Array of groups by which to filter journal entries.  To return all journal entry groups, do not include this query parameter. (optional) (default to undefined)
let expand: Array<'detailObject' | 'originalCurrency'>; //Embeds the specified object into the response. (optional) (default to undefined)
let sortBy: 'createdTime' | '-createdTime' | 'impactTime' | '-impactTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `createdTime`, and not by the field names appearing in response bodies such as `created_time`. (optional) (default to '-createdTime')
let cardTokens: Array<string>; //Array of card tokens by which to filter journal entries. Returns journal entries associated with the specified card tokens.  Send a `GET` request to `/credit/accounts/{account_token}/cards/` to retrieve existing card tokens. (optional) (default to undefined)
let userTokens: Array<string>; //Array of user tokens by which to filter journal entries. Returns journal entries associated with the specified user tokens.  Send a `GET` request to `/users` to retrieve existing user tokens. (optional) (default to undefined)
let types: Array<'authorization' | 'authorization.advice' | 'authorization.incremental' | 'authorization.reversal' | 'authorization.reversal.issuerexpiration' | 'authorization.clearing' | 'refund' | 'refund.authorization' | 'refund.authorization.advice' | 'refund.authorization.reversal' | 'refund.authorization.clearing' | 'refund.authorization.reversal.issuerexpiration' | 'originalcredit.authorization' | 'originalcredit.authorization.clearing' | 'originalcredit.authorization.reversal' | 'originalcredit.authpluscapture' | 'originalcredit.authpluscapture.reversal' | 'originalcredit.authorization.reversal.issuerexpiration' | 'account.balancerefund' | 'account.reward.cashback' | 'account.reward.auto.cashback' | 'account.reward.auto.cashback.reversal' | 'account.payment' | 'account.payment.completed' | 'account.payment.returned' | 'account.payment.canceled' | 'account.payment.refunded' | 'account.payment.completed.hold.released' | 'account.payment.completed.hold' | 'account.interest' | 'account.fee.payment.late' | 'account.fee.payment.returned' | 'account.fee.interest.minimum' | 'account.dispute' | 'account.dispute.reversal' | 'account.dispute.won' | 'account.dispute.lost' | 'account.dispute.lost.graceperiod' | 'account.adjustment' | 'account.adjustment.purchase' | 'account.adjustment.fee' | 'account.adjustment.interest' | 'account.adjustment.reward' | 'pindebit' | 'pindebit.authorization.clearing' | 'pindebit.refund'>; //Array of <</core-api/event-types#_credit_journal_entry_events, event types>> by which to filter journal entries.  To return all event types, do not include this query parameter. (optional) (default to undefined)

const { status, data } = await apiInstance.listAccountJournalEntries(
    accountToken,
    count,
    startIndex,
    startDate,
    endDate,
    startImpactTime,
    endImpactTime,
    startCreatedTime,
    endCreatedTime,
    statuses,
    detailToken,
    groups,
    expand,
    sortBy,
    cardTokens,
    userTokens,
    types
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve journal entries.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **count** | [**number**] | Number of journal entry resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **startDate** | [**string**] | Starting date of the date range from which to return journal entries. | (optional) defaults to undefined|
| **endDate** | [**string**] | Ending date of the date range from which to return journal entries. | (optional) defaults to undefined|
| **startImpactTime** | [**string**] | Starting &#x60;impact_time&#x60; of the date range from which to return journal entries. | (optional) defaults to undefined|
| **endImpactTime** | [**string**] | Ending &#x60;impact_time&#x60; of the date range from which to return journal entries. | (optional) defaults to undefined|
| **startCreatedTime** | [**string**] | Starting &#x60;created_date&#x60; of the date range from which to return journal entries. | (optional) defaults to undefined|
| **endCreatedTime** | [**string**] | Ending &#x60;created_date&#x60; of the date range from which to return journal entries. | (optional) defaults to undefined|
| **statuses** | **Array<&#39;POSTED&#39; &#124; &#39;PENDING&#39;>** | Array of statuses by which to filter journal entries. | (optional) defaults to undefined|
| **detailToken** | [**string**] | Detail token of the journal entries to return. | (optional) defaults to undefined|
| **groups** | **Array<&#39;PURCHASE&#39; &#124; &#39;ORIGINAL_CREDIT&#39; &#124; &#39;FEE&#39; &#124; &#39;BALANCE_REFUND&#39; &#124; &#39;PAYMENT&#39; &#124; &#39;INTEREST&#39; &#124; &#39;DISPUTE&#39; &#124; &#39;REFUND&#39; &#124; &#39;ADJUSTMENT&#39; &#124; &#39;REWARD&#39;>** | Array of groups by which to filter journal entries.  To return all journal entry groups, do not include this query parameter. | (optional) defaults to undefined|
| **expand** | **Array<&#39;detailObject&#39; &#124; &#39;originalCurrency&#39;>** | Embeds the specified object into the response. | (optional) defaults to undefined|
| **sortBy** | [**&#39;createdTime&#39; | &#39;-createdTime&#39; | &#39;impactTime&#39; | &#39;-impactTime&#39;**]**Array<&#39;createdTime&#39; &#124; &#39;-createdTime&#39; &#124; &#39;impactTime&#39; &#124; &#39;-impactTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;createdTime&#x60;, and not by the field names appearing in response bodies such as &#x60;created_time&#x60;. | (optional) defaults to '-createdTime'|
| **cardTokens** | **Array&lt;string&gt;** | Array of card tokens by which to filter journal entries. Returns journal entries associated with the specified card tokens.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/cards/&#x60; to retrieve existing card tokens. | (optional) defaults to undefined|
| **userTokens** | **Array&lt;string&gt;** | Array of user tokens by which to filter journal entries. Returns journal entries associated with the specified user tokens.  Send a &#x60;GET&#x60; request to &#x60;/users&#x60; to retrieve existing user tokens. | (optional) defaults to undefined|
| **types** | **Array<&#39;authorization&#39; &#124; &#39;authorization.advice&#39; &#124; &#39;authorization.incremental&#39; &#124; &#39;authorization.reversal&#39; &#124; &#39;authorization.reversal.issuerexpiration&#39; &#124; &#39;authorization.clearing&#39; &#124; &#39;refund&#39; &#124; &#39;refund.authorization&#39; &#124; &#39;refund.authorization.advice&#39; &#124; &#39;refund.authorization.reversal&#39; &#124; &#39;refund.authorization.clearing&#39; &#124; &#39;refund.authorization.reversal.issuerexpiration&#39; &#124; &#39;originalcredit.authorization&#39; &#124; &#39;originalcredit.authorization.clearing&#39; &#124; &#39;originalcredit.authorization.reversal&#39; &#124; &#39;originalcredit.authpluscapture&#39; &#124; &#39;originalcredit.authpluscapture.reversal&#39; &#124; &#39;originalcredit.authorization.reversal.issuerexpiration&#39; &#124; &#39;account.balancerefund&#39; &#124; &#39;account.reward.cashback&#39; &#124; &#39;account.reward.auto.cashback&#39; &#124; &#39;account.reward.auto.cashback.reversal&#39; &#124; &#39;account.payment&#39; &#124; &#39;account.payment.completed&#39; &#124; &#39;account.payment.returned&#39; &#124; &#39;account.payment.canceled&#39; &#124; &#39;account.payment.refunded&#39; &#124; &#39;account.payment.completed.hold.released&#39; &#124; &#39;account.payment.completed.hold&#39; &#124; &#39;account.interest&#39; &#124; &#39;account.fee.payment.late&#39; &#124; &#39;account.fee.payment.returned&#39; &#124; &#39;account.fee.interest.minimum&#39; &#124; &#39;account.dispute&#39; &#124; &#39;account.dispute.reversal&#39; &#124; &#39;account.dispute.won&#39; &#124; &#39;account.dispute.lost&#39; &#124; &#39;account.dispute.lost.graceperiod&#39; &#124; &#39;account.adjustment&#39; &#124; &#39;account.adjustment.purchase&#39; &#124; &#39;account.adjustment.fee&#39; &#124; &#39;account.adjustment.interest&#39; &#124; &#39;account.adjustment.reward&#39; &#124; &#39;pindebit&#39; &#124; &#39;pindebit.authorization.clearing&#39; &#124; &#39;pindebit.refund&#39;>** | Array of &lt;&lt;/core-api/event-types#_credit_journal_entry_events, event types&gt;&gt; by which to filter journal entries.  To return all event types, do not include this query parameter. | (optional) defaults to undefined|


### Return type

**JournalEntriesPage**

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
    JournalEntriesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JournalEntriesApi(configuration);

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

