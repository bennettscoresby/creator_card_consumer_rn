# FeeChargesApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getFeeChargeToken**](#getfeechargetoken) | **GET** /feecharges/{token} | Returns a fee charge|
|[**postFeeCharge**](#postfeecharge) | **POST** /feecharges | Creates a fee charge|
|[**postRealTimeFeeCharge**](#postrealtimefeecharge) | **POST** /feecharges/realtime | Creates a realTime fee charge|

# **getFeeChargeToken**
> FeeTransferResponse getFeeChargeToken()


### Example

```typescript
import {
    FeeChargesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeeChargesApi(configuration);

let token: string; // (default to undefined)

const { status, data } = await apiInstance.getFeeChargeToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] |  | defaults to undefined|


### Return type

**FeeTransferResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | Fee charge not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postFeeCharge**
> FeeTransferResponse postFeeCharge()


### Example

```typescript
import {
    FeeChargesApi,
    Configuration,
    FeeTransferRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FeeChargesApi(configuration);

let feeTransferRequest: FeeTransferRequest; // (optional)

const { status, data } = await apiInstance.postFeeCharge(
    feeTransferRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **feeTransferRequest** | **FeeTransferRequest**|  | |


### Return type

**FeeTransferResponse**

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

# **postRealTimeFeeCharge**
> FeeTransferResponse postRealTimeFeeCharge()


### Example

```typescript
import {
    FeeChargesApi,
    Configuration,
    RealtimeFeeTransferRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FeeChargesApi(configuration);

let realtimeFeeTransferRequest: RealtimeFeeTransferRequest; // (optional)

const { status, data } = await apiInstance.postRealTimeFeeCharge(
    realtimeFeeTransferRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **realtimeFeeTransferRequest** | **RealtimeFeeTransferRequest**|  | |


### Return type

**FeeTransferResponse**

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

