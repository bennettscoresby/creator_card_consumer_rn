# CreditAccountDisputesApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createDisputeForAccount**](#createdisputeforaccount) | **POST** /accounts/{account_token}/disputes | Create account dispute|
|[**getDisputesByAccount**](#getdisputesbyaccount) | **GET** /accounts/{account_token}/disputes | List account disputes|
|[**retrieveDispute**](#retrievedispute) | **GET** /accounts/{account_token}/disputes/{dispute_token} | Retrieve account dispute|
|[**transitionDispute**](#transitiondispute) | **POST** /accounts/{account_token}/disputes/{dispute_token}/transitions | Update account dispute|

# **createDisputeForAccount**
> DisputeResponse createDisputeForAccount(disputeCreateReq)

Create a dispute of a journal entry on a credit account.

### Example

```typescript
import {
    CreditAccountDisputesApi,
    Configuration,
    DisputeCreateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new CreditAccountDisputesApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which to create a dispute.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let disputeCreateReq: DisputeCreateReq; //

const { status, data } = await apiInstance.createDisputeForAccount(
    accountToken,
    disputeCreateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **disputeCreateReq** | **DisputeCreateReq**|  | |
| **accountToken** | [**string**] | Unique identifier of the credit account for which to create a dispute.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|


### Return type

**DisputeResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Expected response |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDisputesByAccount**
> DisputeResponsePage getDisputesByAccount()

Retrieve an array of disputes on a credit account.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    CreditAccountDisputesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CreditAccountDisputesApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which to retrieve the disputes.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let count: number; //Number of disputes resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'lastModifiedTime' | '-lastModifiedTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `lastModifiedTime`, and not by the field names appearing in response bodies such as `last_modified_time`. (optional) (default to '-lastModifiedTime')
let ledgerEntryTokens: Array<string>; //Unique identifier of the journal entry in dispute. This type of identifier can only be used for `authorization.clearing`-type journal entries. (optional) (default to undefined)
let statuses: Array<DisputeStatus>; //Status of the dispute. (optional) (default to undefined)

const { status, data } = await apiInstance.getDisputesByAccount(
    accountToken,
    count,
    startIndex,
    sortBy,
    ledgerEntryTokens,
    statuses
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which to retrieve the disputes.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **count** | [**number**] | Number of disputes resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;lastModifiedTime&#39; | &#39;-lastModifiedTime&#39;**]**Array<&#39;lastModifiedTime&#39; &#124; &#39;-lastModifiedTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;lastModifiedTime&#x60;, and not by the field names appearing in response bodies such as &#x60;last_modified_time&#x60;. | (optional) defaults to '-lastModifiedTime'|
| **ledgerEntryTokens** | **Array&lt;string&gt;** | Unique identifier of the journal entry in dispute. This type of identifier can only be used for &#x60;authorization.clearing&#x60;-type journal entries. | (optional) defaults to undefined|
| **statuses** | **Array&lt;DisputeStatus&gt;** | Status of the dispute. | (optional) defaults to undefined|


### Return type

**DisputeResponsePage**

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

# **retrieveDispute**
> DisputeResponse retrieveDispute()

Retrieve a dispute from a credit account.

### Example

```typescript
import {
    CreditAccountDisputesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CreditAccountDisputesApi(configuration);

let accountToken: string; //Unique identifier of the credit account from which to retrieve a dispute.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let disputeToken: string; //Unique identifier of the dispute to retrieve.  Send a `GET` request to `/credit/accounts/{account_token}/disputes` to retrieve existing dispute tokens. (default to undefined)

const { status, data } = await apiInstance.retrieveDispute(
    accountToken,
    disputeToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account from which to retrieve a dispute.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **disputeToken** | [**string**] | Unique identifier of the dispute to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/disputes&#x60; to retrieve existing dispute tokens. | defaults to undefined|


### Return type

**DisputeResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Transaction Dispute object |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transitionDispute**
> DisputeTransitionResponse transitionDispute(disputeTransitionReq)

Update the amount or status of a dispute on a credit account.

### Example

```typescript
import {
    CreditAccountDisputesApi,
    Configuration,
    DisputeTransitionReq
} from './api';

const configuration = new Configuration();
const apiInstance = new CreditAccountDisputesApi(configuration);

let accountToken: string; //Unique identifier of the credit account from which to update a dispute.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let disputeToken: string; //Unique identifier of the dispute to update.  Send a `GET` request to `/credit/accounts/{account_token}/disputes` to retrieve existing credit account tokens. (default to undefined)
let disputeTransitionReq: DisputeTransitionReq; //

const { status, data } = await apiInstance.transitionDispute(
    accountToken,
    disputeToken,
    disputeTransitionReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **disputeTransitionReq** | **DisputeTransitionReq**|  | |
| **accountToken** | [**string**] | Unique identifier of the credit account from which to update a dispute.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **disputeToken** | [**string**] | Unique identifier of the dispute to update.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/disputes&#x60; to retrieve existing credit account tokens. | defaults to undefined|


### Return type

**DisputeTransitionResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Transitioned transaction dispute object. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

