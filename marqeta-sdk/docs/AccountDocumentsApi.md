# AccountDocumentsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAccountDocuments**](#getaccountdocuments) | **GET** /accounts/{account_token}/documents | List documents|
|[**getDocumentByAccountAndType**](#getdocumentbyaccountandtype) | **GET** /accounts/{account_token}/documents/{document_type} | Retrieve document|
|[**getDocumentHistoryByAccountAndType**](#getdocumenthistorybyaccountandtype) | **GET** /accounts/{account_token}/documents/{document_type}/history | Retrieve document history|

# **getAccountDocuments**
> AccountDocumentsResponse getAccountDocuments()

Retrieve an array of documents on a credit account.

### Example

```typescript
import {
    AccountDocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountDocumentsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to get documents.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)

const { status, data } = await apiInstance.getAccountDocuments(
    accountToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to get documents.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|


### Return type

**AccountDocumentsResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Account documents |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDocumentByAccountAndType**
> AccountDocumentResponse getDocumentByAccountAndType()

Retrieve a specific type of document on a credit account.

### Example

```typescript
import {
    AccountDocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountDocumentsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which to retrieve a specific type of document.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let documentType: AccountAndDocumentAssetType; // (default to undefined)

const { status, data } = await apiInstance.getDocumentByAccountAndType(
    accountToken,
    documentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which to retrieve a specific type of document.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **documentType** | **AccountAndDocumentAssetType** |  | defaults to undefined|


### Return type

**AccountDocumentResponse**

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

# **getDocumentHistoryByAccountAndType**
> AccountDocumentsPage getDocumentHistoryByAccountAndType()

Retrieve the history of a specific type of document on a credit account.

### Example

```typescript
import {
    AccountDocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountDocumentsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which to get document history.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let documentType: AccountAndDocumentAssetType; // (default to undefined)
let count: number; //Number of account document resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'effectiveDate' | '-effectiveDate'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `effectiveDate`, and not by the field names appearing in response bodies such as `effective_date`. (optional) (default to '-effectiveDate')

const { status, data } = await apiInstance.getDocumentHistoryByAccountAndType(
    accountToken,
    documentType,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which to get document history.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **documentType** | **AccountAndDocumentAssetType** |  | defaults to undefined|
| **count** | [**number**] | Number of account document resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;effectiveDate&#39; | &#39;-effectiveDate&#39;**]**Array<&#39;effectiveDate&#39; &#124; &#39;-effectiveDate&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;effectiveDate&#x60;, and not by the field names appearing in response bodies such as &#x60;effective_date&#x60;. | (optional) defaults to '-effectiveDate'|


### Return type

**AccountDocumentsPage**

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

