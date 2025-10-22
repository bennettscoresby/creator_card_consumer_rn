# AccountRewardsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createReward**](#createreward) | **POST** /accounts/{account_token}/rewards | Create account reward|

# **createReward**
> RewardResponse createReward(rewardCreateReq)

Create a reward for an existing credit account.

### Example

```typescript
import {
    AccountRewardsApi,
    Configuration,
    RewardCreateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountRewardsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to create a reward.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let rewardCreateReq: RewardCreateReq; //

const { status, data } = await apiInstance.createReward(
    accountToken,
    rewardCreateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rewardCreateReq** | **RewardCreateReq**|  | |
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to create a reward.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|


### Return type

**RewardResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Newly created reward |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

