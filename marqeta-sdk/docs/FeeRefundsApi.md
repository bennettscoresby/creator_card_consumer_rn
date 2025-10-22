# FeeRefundsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**postFeeRefunds**](#postfeerefunds) | **POST** /feerefunds | Creates a fee refund|

# **postFeeRefunds**
> FeeRefundResponse postFeeRefunds()


### Example

```typescript
import {
    FeeRefundsApi,
    Configuration,
    FeeRefundRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FeeRefundsApi(configuration);

let feeRefundRequest: FeeRefundRequest; // (optional)

const { status, data } = await apiInstance.postFeeRefunds(
    feeRefundRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **feeRefundRequest** | **FeeRefundRequest**|  | |


### Return type

**FeeRefundResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Success |  -  |
|**400** | User input error/Bad request |  -  |
|**409** | Request already processed with a different payload |  -  |
|**422** | Rule violations |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

