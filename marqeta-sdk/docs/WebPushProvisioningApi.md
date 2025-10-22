# WebPushProvisioningApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getWPPParameters**](#getwppparameters) | **POST** /digitalwallets/wpp/parameters | API to query for the web push provisioning related parameters, such as: google piaid/integrator_id, apple partnerId, apple Card Template Identifier|

# **getWPPParameters**
> WebPushProvisioning getWPPParameters(requestForWppParameters)


### Example

```typescript
import {
    WebPushProvisioningApi,
    Configuration,
    RequestForWppParameters
} from './api';

const configuration = new Configuration();
const apiInstance = new WebPushProvisioningApi(configuration);

let reqSysId: string; //Random pseudo unique value used for troubleshooting between multiple parties. 36 char max (default to undefined)
let requestForWppParameters: RequestForWppParameters; //

const { status, data } = await apiInstance.getWPPParameters(
    reqSysId,
    requestForWppParameters
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestForWppParameters** | **RequestForWppParameters**|  | |
| **reqSysId** | [**string**] | Random pseudo unique value used for troubleshooting between multiple parties. 36 char max | defaults to undefined|


### Return type

**WebPushProvisioning**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  * req-sys-id - Random pseudo unique value used for troubleshooting between multiple parties. 36 char max <br>  |
|**400** | Bad request |  * req-sys-id - Random pseudo unique value used for troubleshooting between multiple parties. 36 char max <br>  |
|**401** | Unauthorized |  * req-sys-id - Random pseudo unique value used for troubleshooting between multiple parties. 36 char max <br>  |
|**500** | Internal Server Error |  * req-sys-id - Random pseudo unique value used for troubleshooting between multiple parties. 36 char max <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

