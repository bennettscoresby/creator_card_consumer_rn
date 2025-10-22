# BalanceRefundsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createBalanceRefund**](#createbalancerefund) | **POST** /accounts/{account_token}/creditbalancerefunds | Create balance refund|

# **createBalanceRefund**
> AccountCreditBalanceRefundResponse createBalanceRefund(accountCreditBalanceRefundReq)

Create a new balance refund, which can be issued to the account holder if their credit account balance is negative.

### Example

```typescript
import {
    BalanceRefundsApi,
    Configuration,
    AccountCreditBalanceRefundReq
} from './api';

const configuration = new Configuration();
const apiInstance = new BalanceRefundsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to create a balance refund.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let accountCreditBalanceRefundReq: AccountCreditBalanceRefundReq; //

const { status, data } = await apiInstance.createBalanceRefund(
    accountToken,
    accountCreditBalanceRefundReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountCreditBalanceRefundReq** | **AccountCreditBalanceRefundReq**|  | |
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to create a balance refund.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|


### Return type

**AccountCreditBalanceRefundResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Expected response. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

