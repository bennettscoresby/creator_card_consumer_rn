# StatementsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getPaymentReminder**](#getpaymentreminder) | **GET** /accounts/{account_token}/statements/{statement_summary_token}/paymentreminders/{token} | Get payment reminder|
|[**getPaymentRemindersByStatementSummary**](#getpaymentremindersbystatementsummary) | **GET** /accounts/{account_token}/statements/{statement_summary_token}/paymentreminders/ | List payment reminders by statement summary|
|[**getStatementFilesByAccount**](#getstatementfilesbyaccount) | **GET** /accounts/{account_token}/statements/files | List files for an account|
|[**getStatementSummariesByAccount**](#getstatementsummariesbyaccount) | **GET** /accounts/{account_token}/statements | List account statement summaries|
|[**listStatementJournalEntries**](#liststatementjournalentries) | **GET** /accounts/{account_token}/statements/{statement_summary_token}/journalentries | List account statement journal entries|
|[**listStatementLedgerEntries**](#liststatementledgerentries) | **GET** /accounts/{account_token}/statements/{statement_summary_token}/ledgerentries | List account statement ledger entries|
|[**resendWebhookEvent**](#resendwebhookevent) | **POST** /webhooks/{event_type}/{resource_token} | Resend credit event notification|
|[**retrieveStatementFiles**](#retrievestatementfiles) | **GET** /accounts/{account_token}/statements/{statement_summary_token}/files | List files for a statement summary|
|[**retrieveStatementInterestCharges**](#retrievestatementinterestcharges) | **GET** /accounts/{account_token}/statements/{statement_summary_token}/interestcharges | Retrieve account statement interest charges|
|[**retrieveStatementPaymentInfo**](#retrievestatementpaymentinfo) | **GET** /accounts/{account_token}/statements/{statement_summary_token}/paymentinfo | Retrieve account statement payment information|
|[**retrieveStatementReward**](#retrievestatementreward) | **GET** /accounts/{account_token}/statements/{statement_summary_token}/rewards | Retrieve account statement rewards|
|[**retrieveStatementSummary**](#retrievestatementsummary) | **GET** /accounts/{account_token}/statements/{statement_summary_token} | Retrieve account statement summary|
|[**retrieveYearToDateForStatementSummary**](#retrieveyeartodateforstatementsummary) | **GET** /accounts/{account_token}/statements/{statement_summary_token}/yeartodate | Retrieve account statement year-to-date totals|

# **getPaymentReminder**
> PaymentReminderResponse getPaymentReminder()

Retrieve a single payment reminder on a specific statement summary

### Example

```typescript
import {
    StatementsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StatementsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve the statement payment reminder. Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let statementSummaryToken: string; //Unique identifier of the statement summary for which you want to retrieve the statement payment reminder. Send a `GET` request to `/credit/accounts/{token}/statements/` to retrieve existing statement summary tokens. (default to undefined)
let token: string; //Unique identifier of the payment reminder you want to retrieve. Send a `GET` request to `/credit/accounts/{account_token}/statements/{statement_summary_token}/paymentreminders/{token}` to retrieve existing payment reminder tokens. (default to undefined)

const { status, data } = await apiInstance.getPaymentReminder(
    accountToken,
    statementSummaryToken,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve the statement payment reminder. Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **statementSummaryToken** | [**string**] | Unique identifier of the statement summary for which you want to retrieve the statement payment reminder. Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{token}/statements/&#x60; to retrieve existing statement summary tokens. | defaults to undefined|
| **token** | [**string**] | Unique identifier of the payment reminder you want to retrieve. Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/statements/{statement_summary_token}/paymentreminders/{token}&#x60; to retrieve existing payment reminder tokens. | defaults to undefined|


### Return type

**PaymentReminderResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPaymentRemindersByStatementSummary**
> PaymentReminderPage getPaymentRemindersByStatementSummary()

Retrieve an array of payment reminder details for a specific statement summary token.

### Example

```typescript
import {
    StatementsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StatementsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve the statement payment information. Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let statementSummaryToken: string; //Unique identifier of the statement summary from which to retrieve the payment information. Send a `GET` request to `/credit/accounts/{token}/statements/` to retrieve existing statement summary tokens. (default to undefined)
let count: number; //Number of payment reminder resources to retrieve. (optional) (default to 10)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'createdTime' | '-createdTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. *NOTE:* You must sort using system field names such as `createdTime`, and not by the field names appearing in response bodies such as `created_time`. (optional) (default to '-createdTime')

const { status, data } = await apiInstance.getPaymentRemindersByStatementSummary(
    accountToken,
    statementSummaryToken,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve the statement payment information. Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **statementSummaryToken** | [**string**] | Unique identifier of the statement summary from which to retrieve the payment information. Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{token}/statements/&#x60; to retrieve existing statement summary tokens. | defaults to undefined|
| **count** | [**number**] | Number of payment reminder resources to retrieve. | (optional) defaults to 10|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;createdTime&#39; | &#39;-createdTime&#39;**]**Array<&#39;createdTime&#39; &#124; &#39;-createdTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. *NOTE:* You must sort using system field names such as &#x60;createdTime&#x60;, and not by the field names appearing in response bodies such as &#x60;created_time&#x60;. | (optional) defaults to '-createdTime'|


### Return type

**PaymentReminderPage**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStatementFilesByAccount**
> StatementFilePage getStatementFilesByAccount()

Retrieve an array of statement files for a specific credit account.

### Example

```typescript
import {
    StatementsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StatementsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which to retrieve statement files.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let startDate: string; //Start date of the date range for which to return statement files. (optional) (default to undefined)
let endDate: string; //End date of the date range for which to return statement files. (optional) (default to undefined)
let count: number; //Number of statement file resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'createdTime' | '-createdTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `createdTime`, and not by the field names appearing in response bodies such as `created_time`. (optional) (default to '-createdTime')

const { status, data } = await apiInstance.getStatementFilesByAccount(
    accountToken,
    startDate,
    endDate,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which to retrieve statement files.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **startDate** | [**string**] | Start date of the date range for which to return statement files. | (optional) defaults to undefined|
| **endDate** | [**string**] | End date of the date range for which to return statement files. | (optional) defaults to undefined|
| **count** | [**number**] | Number of statement file resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;createdTime&#39; | &#39;-createdTime&#39;**]**Array<&#39;createdTime&#39; &#124; &#39;-createdTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;createdTime&#x60;, and not by the field names appearing in response bodies such as &#x60;created_time&#x60;. | (optional) defaults to '-createdTime'|


### Return type

**StatementFilePage**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing a list of statement files. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStatementSummariesByAccount**
> StatementSummaryPage getStatementSummariesByAccount()

Retrieve an array of statement summaries tied to a cardholder\'s account.  The statement summary, which is a summary of account activity on a statement, provides account holders with a synopsis of activity that occurred on the account during a specified billing cycle.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>. You can use optional query parameters to return a statement based on its exact opening or closing date, or a statement whose closing date falls within a range of dates.

### Example

```typescript
import {
    StatementsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StatementsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve statement summaries.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let startDate: string; //Returns statements with a matching opening date.  If both `start_date` and `end_date` are specified, statements whose closing date falls between the start and end dates are returned. (optional) (default to undefined)
let endDate: string; //Returns statements with a matching closing date.  If both `start_date` and `end_date` are specified, statements whose closing date falls between the start and end dates are returned. (optional) (default to undefined)
let count: number; //Number of account statement resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'createdTime' | '-createdTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `createdTime`, and not by the field names appearing in response bodies such as `created_time`. (optional) (default to '-createdTime')

const { status, data } = await apiInstance.getStatementSummariesByAccount(
    accountToken,
    startDate,
    endDate,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve statement summaries.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **startDate** | [**string**] | Returns statements with a matching opening date.  If both &#x60;start_date&#x60; and &#x60;end_date&#x60; are specified, statements whose closing date falls between the start and end dates are returned. | (optional) defaults to undefined|
| **endDate** | [**string**] | Returns statements with a matching closing date.  If both &#x60;start_date&#x60; and &#x60;end_date&#x60; are specified, statements whose closing date falls between the start and end dates are returned. | (optional) defaults to undefined|
| **count** | [**number**] | Number of account statement resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;createdTime&#39; | &#39;-createdTime&#39;**]**Array<&#39;createdTime&#39; &#124; &#39;-createdTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;createdTime&#x60;, and not by the field names appearing in response bodies such as &#x60;created_time&#x60;. | (optional) defaults to '-createdTime'|


### Return type

**StatementSummaryPage**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing a list of Statement Summaries |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listStatementJournalEntries**
> JournalEntriesPage listStatementJournalEntries()

Retrieve an array of journal entries on a credit account\'s statement summary.  This endpoint supports <</core-api/sorting-and-pagination, sorting>>.

### Example

```typescript
import {
    StatementsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StatementsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which to retrieve the statement journal entries.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let statementSummaryToken: string; //Unique identifier of the statement summary from which to retrieve journal entries.  Send a `GET` request to `/credit/accounts/{token}/statements/` to retrieve existing statement summary tokens. (default to undefined)
let count: number; //Number of journal entry resources to return. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let expand: Array<'detailObject' | 'originalCurrency'>; //Embeds the specified object into the response. (optional) (default to undefined)
let sortBy: 'lastModifiedTime' | '-lastModifiedTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `lastModifiedTime`, and not by the field names appearing in response bodies such as `last_modified_time`. (optional) (default to 'lastModifiedTime')

const { status, data } = await apiInstance.listStatementJournalEntries(
    accountToken,
    statementSummaryToken,
    count,
    startIndex,
    expand,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which to retrieve the statement journal entries.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **statementSummaryToken** | [**string**] | Unique identifier of the statement summary from which to retrieve journal entries.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{token}/statements/&#x60; to retrieve existing statement summary tokens. | defaults to undefined|
| **count** | [**number**] | Number of journal entry resources to return. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **expand** | **Array<&#39;detailObject&#39; &#124; &#39;originalCurrency&#39;>** | Embeds the specified object into the response. | (optional) defaults to undefined|
| **sortBy** | [**&#39;lastModifiedTime&#39; | &#39;-lastModifiedTime&#39;**]**Array<&#39;lastModifiedTime&#39; &#124; &#39;-lastModifiedTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;lastModifiedTime&#x60;, and not by the field names appearing in response bodies such as &#x60;last_modified_time&#x60;. | (optional) defaults to 'lastModifiedTime'|


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

# **listStatementLedgerEntries**
> Array<LedgerEntry> listStatementLedgerEntries()

[IMPORTANT] This feature is being deprecated and replaced by statement journal entries. To list statement journal entries, see <</core-api/credit-account-journal-entries#listStatementJournalEntries, List account statement journal entries>>.  Retrieve an array of ledger entries on a credit account\'s statement summary.  This endpoint supports <</core-api/sorting-and-pagination, sorting>>.

### Example

```typescript
import {
    StatementsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StatementsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which to retrieve the statement ledger entries.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let statementSummaryToken: string; //Unique identifier of the statement summary from which to retrieve ledger entries.  Send a `GET` request to `/credit/accounts/{token}/statements/` to retrieve existing statement summary tokens. (default to undefined)
let expand: Array<'detailObject' | 'originalCurrency'>; //Embeds the specified object into the response. (optional) (default to undefined)
let sortBy: 'lastModifiedTime' | '-lastModifiedTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `lastModifiedTime`, and not by the field names appearing in response bodies such as `last_modified_time`. (optional) (default to 'lastModifiedTime')

const { status, data } = await apiInstance.listStatementLedgerEntries(
    accountToken,
    statementSummaryToken,
    expand,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which to retrieve the statement ledger entries.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **statementSummaryToken** | [**string**] | Unique identifier of the statement summary from which to retrieve ledger entries.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{token}/statements/&#x60; to retrieve existing statement summary tokens. | defaults to undefined|
| **expand** | **Array<&#39;detailObject&#39; &#124; &#39;originalCurrency&#39;>** | Embeds the specified object into the response. | (optional) defaults to undefined|
| **sortBy** | [**&#39;lastModifiedTime&#39; | &#39;-lastModifiedTime&#39;**]**Array<&#39;lastModifiedTime&#39; &#124; &#39;-lastModifiedTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;lastModifiedTime&#x60;, and not by the field names appearing in response bodies such as &#x60;last_modified_time&#x60;. | (optional) defaults to 'lastModifiedTime'|


### Return type

**Array<LedgerEntry>**

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

# **resendWebhookEvent**
> WebhookEventResendContainerResponse resendWebhookEvent()

Resends a credit event notification to your webhook endpoint.  Although you send this request as a `POST`, all parameters are passed in the URL and the body is empty. The event notification is resent to your webhook endpoint and also returned in the response to this request.  For details on how to configure your webhook endpoint, see the About Webhooks <</developer-guides/about-webhooks#_tutorial, tutorial>>. For the complete `/webhooks` endpoint reference, see <</core-api/webhooks, Webhooks>>.

### Example

```typescript
import {
    StatementsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StatementsApi(configuration);

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

# **retrieveStatementFiles**
> StatementFilePage retrieveStatementFiles()

Retrieve an array of statement files for a specific statement summary.

### Example

```typescript
import {
    StatementsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StatementsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which to retrieve statement files for a statement summary.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let statementSummaryToken: string; //Unique identifier of the statement summary whose statement files you want to retrieve.  Send a `GET` request to `/credit/accounts/{token}/statements` to retrieve existing statement summary tokens. (default to undefined)
let count: number; //Number of statement files to return. (optional) (default to 5)
let startIndex: number; //Sort order index from which to begin returning files. (optional) (default to 0)

const { status, data } = await apiInstance.retrieveStatementFiles(
    accountToken,
    statementSummaryToken,
    count,
    startIndex
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which to retrieve statement files for a statement summary.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **statementSummaryToken** | [**string**] | Unique identifier of the statement summary whose statement files you want to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{token}/statements&#x60; to retrieve existing statement summary tokens. | defaults to undefined|
| **count** | [**number**] | Number of statement files to return. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index from which to begin returning files. | (optional) defaults to 0|


### Return type

**StatementFilePage**

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

# **retrieveStatementInterestCharges**
> StatementInterestChargesPage retrieveStatementInterestCharges()

Retrieve the interest charges on a credit account\'s statement summary.

### Example

```typescript
import {
    StatementsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StatementsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve the statement interest charges.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let statementSummaryToken: string; //Unique identifier of the statement summary from which to retrieve the interest charges.  Send a `GET` request to `/credit/accounts/{token}/statements/` to retrieve existing statement summary tokens. (default to undefined)

const { status, data } = await apiInstance.retrieveStatementInterestCharges(
    accountToken,
    statementSummaryToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve the statement interest charges.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **statementSummaryToken** | [**string**] | Unique identifier of the statement summary from which to retrieve the interest charges.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{token}/statements/&#x60; to retrieve existing statement summary tokens. | defaults to undefined|


### Return type

**StatementInterestChargesPage**

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

# **retrieveStatementPaymentInfo**
> StatementPaymentInfo retrieveStatementPaymentInfo()

Retrieve the payment information on a credit account\'s statement summary.

### Example

```typescript
import {
    StatementsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StatementsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve the statement payment information.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let statementSummaryToken: string; //Unique identifier of the statement summary from which to retrieve the payment information.  Send a `GET` request to `/credit/accounts/{token}/statements/` to retrieve existing statement summary tokens. (default to undefined)

const { status, data } = await apiInstance.retrieveStatementPaymentInfo(
    accountToken,
    statementSummaryToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve the statement payment information.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **statementSummaryToken** | [**string**] | Unique identifier of the statement summary from which to retrieve the payment information.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{token}/statements/&#x60; to retrieve existing statement summary tokens. | defaults to undefined|


### Return type

**StatementPaymentInfo**

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

# **retrieveStatementReward**
> StatementReward retrieveStatementReward()

Retrieve the rewards on a credit account\'s statement summary.

### Example

```typescript
import {
    StatementsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StatementsApi(configuration);

let accountToken: string; //Unique identifier of the credit account from which to retrieve statement rewards.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let statementSummaryToken: string; //Unique identifier of the statement summary from which to retrieve rewards.  Send a `GET` request to `/credit/accounts/{token}/statements/` to retrieve existing statement summary tokens. (default to undefined)

const { status, data } = await apiInstance.retrieveStatementReward(
    accountToken,
    statementSummaryToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account from which to retrieve statement rewards.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **statementSummaryToken** | [**string**] | Unique identifier of the statement summary from which to retrieve rewards.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{token}/statements/&#x60; to retrieve existing statement summary tokens. | defaults to undefined|


### Return type

**StatementReward**

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

# **retrieveStatementSummary**
> StatementSummary retrieveStatementSummary()

Retrieve a statement summary for a credit account.

### Example

```typescript
import {
    StatementsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StatementsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve a statement summary.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let statementSummaryToken: string; //Unique identifier of the statement summary to retrieve.  Send a `GET` request to `/credit/accounts/{token}/statements/` to retrieve existing statement summary tokens. (default to undefined)

const { status, data } = await apiInstance.retrieveStatementSummary(
    accountToken,
    statementSummaryToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve a statement summary.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **statementSummaryToken** | [**string**] | Unique identifier of the statement summary to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{token}/statements/&#x60; to retrieve existing statement summary tokens. | defaults to undefined|


### Return type

**StatementSummary**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing statement_summary information |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveYearToDateForStatementSummary**
> YearToDate retrieveYearToDateForStatementSummary()

Retrieve the year-to-date fee and interest totals on a credit account\'s statement summary.

### Example

```typescript
import {
    StatementsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StatementsApi(configuration);

let accountToken: string; //Unique identifier of the credit account from which to retrieve statement year-to-date totals.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let statementSummaryToken: string; //Unique identifier of the statement summary from which to retrieve year-to-date totals.  Send a `GET` request to `/credit/accounts/{token}/statements/` to retrieve existing statement summary tokens. (default to undefined)

const { status, data } = await apiInstance.retrieveYearToDateForStatementSummary(
    accountToken,
    statementSummaryToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account from which to retrieve statement year-to-date totals.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **statementSummaryToken** | [**string**] | Unique identifier of the statement summary from which to retrieve year-to-date totals.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{token}/statements/&#x60; to retrieve existing statement summary tokens. | defaults to undefined|


### Return type

**YearToDate**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing year-to-date information |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

