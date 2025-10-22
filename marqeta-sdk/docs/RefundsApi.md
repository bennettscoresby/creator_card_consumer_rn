# RefundsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**simulateTransitionRefund**](#simulatetransitionrefund) | **POST** /simulation/accounts/{account_token}/refunds/{refund_token}/transitions | Simulate Refund Transition|

# **simulateTransitionRefund**
> RefundResponse simulateTransitionRefund(simulateRefundTransitionRequest)

api to simulate status transition of a refund.

### Example

```typescript
import {
    RefundsApi,
    Configuration,
    SimulateRefundTransitionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RefundsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to create a balance refund.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let refundToken: string; //Unique identifier of the refund to retrieve.  Send a `GET` request to `/credit/accounts/{account_token}/refunds/{refund_token}` to retrieve existing refunds. (default to undefined)
let simulateRefundTransitionRequest: SimulateRefundTransitionRequest; //

const { status, data } = await apiInstance.simulateTransitionRefund(
    accountToken,
    refundToken,
    simulateRefundTransitionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **simulateRefundTransitionRequest** | **SimulateRefundTransitionRequest**|  | |
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to create a balance refund.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **refundToken** | [**string**] | Unique identifier of the refund to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/refunds/{refund_token}&#x60; to retrieve existing refunds. | defaults to undefined|


### Return type

**RefundResponse**

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

