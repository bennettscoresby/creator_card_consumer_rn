# PingApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getPing**](#getping) | **GET** /ping | Returns a heartbeat to the consumer|
|[**postPing**](#postping) | **POST** /ping | Echo test for sending payload to server|

# **getPing**
> PingResponse getPing()

Tests if the Marqeta server is available and responsive.

### Example

```typescript
import {
    PingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PingApi(configuration);

const { status, data } = await apiInstance.getPing();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**PingResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postPing**
> EchoPingResponse postPing()


### Example

```typescript
import {
    PingApi,
    Configuration,
    EchoPingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PingApi(configuration);

let echoPingRequest: EchoPingRequest; // (optional)

const { status, data } = await apiInstance.postPing(
    echoPingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **echoPingRequest** | **EchoPingRequest**|  | |


### Return type

**EchoPingResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

