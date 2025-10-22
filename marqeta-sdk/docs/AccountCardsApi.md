# AccountCardsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCardForAccount**](#createcardforaccount) | **POST** /accounts/{account_token}/cards | Create account card|
|[**getCardByAccount**](#getcardbyaccount) | **GET** /accounts/{account_token}/cards/{card_token} | Retrieve account card|
|[**getCardsByAccount**](#getcardsbyaccount) | **GET** /accounts/{account_token}/cards | List account cards|

# **createCardForAccount**
> CardResponse createCardForAccount(body)

Create a credit card for an existing credit account.  [NOTE] You can ship cards to an address different from the <</core-api/users, user>> address. After creating a card, send a `PUT` request to the `/cards` endpoint with the new address in the `fulfillment.shipping` object. For more, see <</core-api/cards#putCardsToken, Update card>>.

### Example

```typescript
import {
    AccountCardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountCardsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which to create a credit card.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let body: object; //Expected request body to create a credit card for an existing credit account. Refer to <</core-api/cards/#postCards,Create card>> for the complete list of fields.

const { status, data } = await apiInstance.createCardForAccount(
    accountToken,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**| Expected request body to create a credit card for an existing credit account. Refer to &lt;&lt;/core-api/cards/#postCards,Create card&gt;&gt; for the complete list of fields. | |
| **accountToken** | [**string**] | Unique identifier of the credit account for which to create a credit card.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|


### Return type

**CardResponse**

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

# **getCardByAccount**
> CardResponse getCardByAccount()

Retrieve a credit card for a credit account.

### Example

```typescript
import {
    AccountCardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountCardsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which to retrieve a credit card.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let cardToken: string; //Unique identifier of the credit card to retrieve.  Send a `GET` request to `/credit/accounts/{account_token}/cards` to retrieve existing credit card tokens. (default to undefined)

const { status, data } = await apiInstance.getCardByAccount(
    accountToken,
    cardToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which to retrieve a credit card.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **cardToken** | [**string**] | Unique identifier of the credit card to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/cards&#x60; to retrieve existing credit card tokens. | defaults to undefined|


### Return type

**CardResponse**

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

# **getCardsByAccount**
> AccountCardsPage getCardsByAccount()

Retrieve an array of cards for a credit account.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    AccountCardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountCardsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which to retrieve credit cards.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let status: string; //Status of the credit cards to retrieve. (optional) (default to undefined)
let count: number; //Number of credit card resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'lastModifiedTime' | '-lastModifiedTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `lastModifiedTime`, and not by the field names appearing in response bodies such as `last_modified_time`. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getCardsByAccount(
    accountToken,
    status,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which to retrieve credit cards.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **status** | [**string**] | Status of the credit cards to retrieve. | (optional) defaults to undefined|
| **count** | [**number**] | Number of credit card resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;lastModifiedTime&#39; | &#39;-lastModifiedTime&#39;**]**Array<&#39;lastModifiedTime&#39; &#124; &#39;-lastModifiedTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;lastModifiedTime&#x60;, and not by the field names appearing in response bodies such as &#x60;last_modified_time&#x60;. | (optional) defaults to '-lastModifiedTime'|


### Return type

**AccountCardsPage**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Expected response to a valid request. |  -  |
|**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

