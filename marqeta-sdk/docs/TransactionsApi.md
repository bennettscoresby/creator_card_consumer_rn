# TransactionsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getTransactions**](#gettransactions) | **GET** /transactions | List transactions|
|[**getTransactionsFundingsourceFundingsourcetoken**](#gettransactionsfundingsourcefundingsourcetoken) | **GET** /transactions/fundingsource/{funding_source_token} | List transactions for a funding account|
|[**getTransactionsToken**](#gettransactionstoken) | **GET** /transactions/{token} | Retrieve transaction|
|[**getTransactionsTokenRelated**](#gettransactionstokenrelated) | **GET** /transactions/{token}/related | List related transactions|

# **getTransactions**
> TransactionModelListResponse getTransactions()

List all transactions.  By default, this endpoint returns transactions conducted within the last 30 days. To return transactions older than 30 days, you must include the `start_date` and `end_date` query parameters in your request.  By default, `GET /transactions` returns transactions having either `PENDING` or `COMPLETION` states.  This endpoint supports <</core-api/field-filtering, field filtering>> and <</core-api/sorting-and-pagination, pagination>>.

### Example

```typescript
import {
    TransactionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionsApi(configuration);

let count: number; //The number of transactions to retrieve. (optional) (default to 10)
let startIndex: number; //The sort order index of the first resource in the returned array. (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: '-created_time' | 'created_time' | '-user_transaction_time' | 'user_transaction_time'; //Field on which to sort. Use any field in the resource model, or one of the system fields `lastModifiedTime` or `createdTime`. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. (optional) (default to '-user_transaction_time')
let startDate: string; //The starting date (or date-time) of a date range from which to return transactions. To return transactions for a single day, enter the same date in both the `start_date` and `end_date` fields. (optional) (default to undefined)
let endDate: string; //The ending date (or date-time) of a date range from which to return transactions. To return transactions for a single day, enter the same date in both the `end_date` and `start_date` fields. (optional) (default to undefined)
let type: string; //Comma-delimited list of transaction types to include. (optional) (default to undefined)
let userToken: string; //The unique identifier of the user account holder. (optional) (default to undefined)
let businessToken: string; //The unique identifier of the business account holder. (optional) (default to undefined)
let actingUserToken: string; //The unique identifier of the acting user. (optional) (default to undefined)
let cardToken: string; //The unique identifier of the card. (optional) (default to undefined)
let accountToken: string; //Account token (optional) (default to undefined)
let state: string; //Comma-delimited list of transaction states to display. (optional) (default to 'PENDING,COMPLETION')
let version: string; //Specifies the API version for the request. (optional) (default to undefined)
let verbose: boolean; //If `true`, the query returns additional information for diagnostic purposes. (optional) (default to undefined)
let startIdentifier: number; //Start identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getTransactions(
    count,
    startIndex,
    fields,
    sortBy,
    startDate,
    endDate,
    type,
    userToken,
    businessToken,
    actingUserToken,
    cardToken,
    accountToken,
    state,
    version,
    verbose,
    startIdentifier
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | The number of transactions to retrieve. | (optional) defaults to 10|
| **startIndex** | [**number**] | The sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**&#39;-created_time&#39; | &#39;created_time&#39; | &#39;-user_transaction_time&#39; | &#39;user_transaction_time&#39;**]**Array<&#39;-created_time&#39; &#124; &#39;created_time&#39; &#124; &#39;-user_transaction_time&#39; &#124; &#39;user_transaction_time&#39;>** | Field on which to sort. Use any field in the resource model, or one of the system fields &#x60;lastModifiedTime&#x60; or &#x60;createdTime&#x60;. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. | (optional) defaults to '-user_transaction_time'|
| **startDate** | [**string**] | The starting date (or date-time) of a date range from which to return transactions. To return transactions for a single day, enter the same date in both the &#x60;start_date&#x60; and &#x60;end_date&#x60; fields. | (optional) defaults to undefined|
| **endDate** | [**string**] | The ending date (or date-time) of a date range from which to return transactions. To return transactions for a single day, enter the same date in both the &#x60;end_date&#x60; and &#x60;start_date&#x60; fields. | (optional) defaults to undefined|
| **type** | [**string**] | Comma-delimited list of transaction types to include. | (optional) defaults to undefined|
| **userToken** | [**string**] | The unique identifier of the user account holder. | (optional) defaults to undefined|
| **businessToken** | [**string**] | The unique identifier of the business account holder. | (optional) defaults to undefined|
| **actingUserToken** | [**string**] | The unique identifier of the acting user. | (optional) defaults to undefined|
| **cardToken** | [**string**] | The unique identifier of the card. | (optional) defaults to undefined|
| **accountToken** | [**string**] | Account token | (optional) defaults to undefined|
| **state** | [**string**] | Comma-delimited list of transaction states to display. | (optional) defaults to 'PENDING,COMPLETION'|
| **version** | [**string**] | Specifies the API version for the request. | (optional) defaults to undefined|
| **verbose** | [**boolean**] | If &#x60;true&#x60;, the query returns additional information for diagnostic purposes. | (optional) defaults to undefined|
| **startIdentifier** | [**number**] | Start identifier | (optional) defaults to undefined|


### Return type

**TransactionModelListResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | User input error/Bad request |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTransactionsFundingsourceFundingsourcetoken**
> TransactionModelListResponse getTransactionsFundingsourceFundingsourcetoken()

List transactions for a specific funding source.  By default, this endpoint returns transactions conducted within the last 30 days. To return transactions older than 30 days, you must include the `start_date` and `end_date` query parameters in your request.  By default, `GET /transactions/fundingsource/{funding_source_token}` returns transactions having either `PENDING` or `COMPLETION` states.  This endpoint supports <</core-api/field-filtering, field filtering>> and <</core-api/sorting-and-pagination, pagination>>.

### Example

```typescript
import {
    TransactionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionsApi(configuration);

let fundingSourceToken: string; //The unique identifier of the funding account. (default to undefined)
let count: number; //The number of transactions to retrieve. (optional) (default to 10)
let startIndex: number; //The sort order index of the first resource in the returned array. (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: '-created_time' | 'created_time' | '-user_transaction_time' | 'user_transaction_time'; //Field on which to sort. Use any field in the resource model, or one of the system fields `lastModifiedTime` or `createdTime`. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. (optional) (default to '-user_transaction_time')
let startDate: string; //The starting date (or date-time) of a date range from which to return transactions. To return transactions for a single day, enter the same date in both the `start_date` and `end_date` fields. (optional) (default to undefined)
let endDate: string; //The ending date (or date-time) of a date range from which to return transactions. To return transactions for a single day, enter the same date in both the `end_date` and `start_date` fields. (optional) (default to undefined)
let type: string; //Comma-delimited list of transaction types to include. (optional) (default to undefined)
let polarity: 'CREDIT' | 'DEBIT' | 'PENDING_CREDIT' | 'PENDING_DEBIT'; //Specifies whether to return credit or debit transactions. (optional) (default to undefined)
let version: string; //Specifies the API version for the request. (optional) (default to undefined)
let verbose: boolean; //If `true`, the query returns additional information for diagnostic purposes. (optional) (default to undefined)

const { status, data } = await apiInstance.getTransactionsFundingsourceFundingsourcetoken(
    fundingSourceToken,
    count,
    startIndex,
    fields,
    sortBy,
    startDate,
    endDate,
    type,
    polarity,
    version,
    verbose
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fundingSourceToken** | [**string**] | The unique identifier of the funding account. | defaults to undefined|
| **count** | [**number**] | The number of transactions to retrieve. | (optional) defaults to 10|
| **startIndex** | [**number**] | The sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**&#39;-created_time&#39; | &#39;created_time&#39; | &#39;-user_transaction_time&#39; | &#39;user_transaction_time&#39;**]**Array<&#39;-created_time&#39; &#124; &#39;created_time&#39; &#124; &#39;-user_transaction_time&#39; &#124; &#39;user_transaction_time&#39;>** | Field on which to sort. Use any field in the resource model, or one of the system fields &#x60;lastModifiedTime&#x60; or &#x60;createdTime&#x60;. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. | (optional) defaults to '-user_transaction_time'|
| **startDate** | [**string**] | The starting date (or date-time) of a date range from which to return transactions. To return transactions for a single day, enter the same date in both the &#x60;start_date&#x60; and &#x60;end_date&#x60; fields. | (optional) defaults to undefined|
| **endDate** | [**string**] | The ending date (or date-time) of a date range from which to return transactions. To return transactions for a single day, enter the same date in both the &#x60;end_date&#x60; and &#x60;start_date&#x60; fields. | (optional) defaults to undefined|
| **type** | [**string**] | Comma-delimited list of transaction types to include. | (optional) defaults to undefined|
| **polarity** | [**&#39;CREDIT&#39; | &#39;DEBIT&#39; | &#39;PENDING_CREDIT&#39; | &#39;PENDING_DEBIT&#39;**]**Array<&#39;CREDIT&#39; &#124; &#39;DEBIT&#39; &#124; &#39;PENDING_CREDIT&#39; &#124; &#39;PENDING_DEBIT&#39;>** | Specifies whether to return credit or debit transactions. | (optional) defaults to undefined|
| **version** | [**string**] | Specifies the API version for the request. | (optional) defaults to undefined|
| **verbose** | [**boolean**] | If &#x60;true&#x60;, the query returns additional information for diagnostic purposes. | (optional) defaults to undefined|


### Return type

**TransactionModelListResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | User input error/Bad request |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTransactionsToken**
> TransactionModel getTransactionsToken()

Retrieve a specific transaction. Include the `token` path parameter to identify the transaction.  [NOTE] Transactions are not available in real time via this endpoint, and typically appear after 30 seconds. On occasion, a transaction may require up to four hours to appear.

### Example

```typescript
import {
    TransactionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionsApi(configuration);

let token: string; //The unique identifier of the transaction. (default to undefined)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on). Leave blank to return all fields. (optional) (default to undefined)
let version: string; //Specifies the API version for the request. (optional) (default to undefined)
let verbose: boolean; //If `true`, the query returns additional information for diagnostic purposes. (optional) (default to undefined)

const { status, data } = await apiInstance.getTransactionsToken(
    token,
    fields,
    version,
    verbose
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | The unique identifier of the transaction. | defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on). Leave blank to return all fields. | (optional) defaults to undefined|
| **version** | [**string**] | Specifies the API version for the request. | (optional) defaults to undefined|
| **verbose** | [**boolean**] | If &#x60;true&#x60;, the query returns additional information for diagnostic purposes. | (optional) defaults to undefined|


### Return type

**TransactionModel**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | User input error/Bad request |  -  |
|**404** | Transaction token not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTransactionsTokenRelated**
> TransactionModelListResponse getTransactionsTokenRelated()

List all transactions related to the specified transaction.  By default, this endpoint returns transactions conducted within the last 30 days. To return transactions older than 30 days, you must include the `start_date` and `end_date` query parameters in your request.  By default, this endpoint returns transactions of any state. To return transactions in specific states, you must include the `state` query parameter in your request.  This endpoint supports <</core-api/field-filtering, field filtering>> and <</core-api/sorting-and-pagination, pagination>>.

### Example

```typescript
import {
    TransactionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionsApi(configuration);

let token: string; //The unique identifier of the transaction. (default to undefined)
let count: number; //The number of transactions to retrieve. (optional) (default to 10)
let startIndex: number; //The sort order index of the first resource in the returned array. (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: '-created_time' | 'created_time' | '-user_transaction_time' | 'user_transaction_time'; //Field on which to sort. Use any field in the resource model, or one of the system fields `lastModifiedTime` or `createdTime`. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. (optional) (default to '-user_transaction_time')
let startDate: string; //The starting date (or date-time) of a date range from which to return transactions. To return transactions for a single day, enter the same date in both the `start_date` and `end_date` fields. (optional) (default to undefined)
let endDate: string; //The ending date (or date-time) of a date range from which to return transactions. To return transactions for a single day, enter the same date in both the `end_date` and `start_date` fields. (optional) (default to undefined)
let type: string; //Comma-delimited list of transaction types to include. (optional) (default to undefined)
let state: string; //Comma-delimited list of transaction states to display. (optional) (default to 'ALL')
let version: string; //Specifies the API version for the request. (optional) (default to undefined)
let verbose: boolean; //If `true`, the query returns additional information for diagnostic purposes. (optional) (default to undefined)

const { status, data } = await apiInstance.getTransactionsTokenRelated(
    token,
    count,
    startIndex,
    fields,
    sortBy,
    startDate,
    endDate,
    type,
    state,
    version,
    verbose
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | The unique identifier of the transaction. | defaults to undefined|
| **count** | [**number**] | The number of transactions to retrieve. | (optional) defaults to 10|
| **startIndex** | [**number**] | The sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**&#39;-created_time&#39; | &#39;created_time&#39; | &#39;-user_transaction_time&#39; | &#39;user_transaction_time&#39;**]**Array<&#39;-created_time&#39; &#124; &#39;created_time&#39; &#124; &#39;-user_transaction_time&#39; &#124; &#39;user_transaction_time&#39;>** | Field on which to sort. Use any field in the resource model, or one of the system fields &#x60;lastModifiedTime&#x60; or &#x60;createdTime&#x60;. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. | (optional) defaults to '-user_transaction_time'|
| **startDate** | [**string**] | The starting date (or date-time) of a date range from which to return transactions. To return transactions for a single day, enter the same date in both the &#x60;start_date&#x60; and &#x60;end_date&#x60; fields. | (optional) defaults to undefined|
| **endDate** | [**string**] | The ending date (or date-time) of a date range from which to return transactions. To return transactions for a single day, enter the same date in both the &#x60;end_date&#x60; and &#x60;start_date&#x60; fields. | (optional) defaults to undefined|
| **type** | [**string**] | Comma-delimited list of transaction types to include. | (optional) defaults to undefined|
| **state** | [**string**] | Comma-delimited list of transaction states to display. | (optional) defaults to 'ALL'|
| **version** | [**string**] | Specifies the API version for the request. | (optional) defaults to undefined|
| **verbose** | [**boolean**] | If &#x60;true&#x60;, the query returns additional information for diagnostic purposes. | (optional) defaults to undefined|


### Return type

**TransactionModelListResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | User input error/Bad request |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

