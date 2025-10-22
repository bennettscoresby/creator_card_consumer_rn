# VelocityControlsCardGroupBalanceApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listVelocityControlsCardGroupBalances**](#listvelocitycontrolscardgroupbalances) | **GET** /velocitycontrols/cardgroup/{card_group_token}/available | List Velocity Controls Card Group Balances|

# **listVelocityControlsCardGroupBalances**
> VelocityControlBalancePage listVelocityControlsCardGroupBalances()

Get a list of all Velocity Controls Card Group Balances in the program

### Example

```typescript
import {
    VelocityControlsCardGroupBalanceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VelocityControlsCardGroupBalanceApi(configuration);

let cardGroupToken: string; //Unique identifier of the card group for which to retrieve balances. (default to undefined)

const { status, data } = await apiInstance.listVelocityControlsCardGroupBalances(
    cardGroupToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardGroupToken** | [**string**] | Unique identifier of the card group for which to retrieve balances. | defaults to undefined|


### Return type

**VelocityControlBalancePage**

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

