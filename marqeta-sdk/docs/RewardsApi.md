# RewardsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveSignupBonusProgress**](#retrievesignupbonusprogress) | **GET** /accounts/{account_token}/signupbonusprogress | Retrieve account signup bonus progress.|

# **retrieveSignupBonusProgress**
> AccountSignupBonusProgressResponse retrieveSignupBonusProgress()

Retrieve the signup bonus progress, including the bonus amount and the remaining amount to be earned.

### Example

```typescript
import {
    RewardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RewardsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve the sign up bonus for.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)

const { status, data } = await apiInstance.retrieveSignupBonusProgress(
    accountToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve the sign up bonus for.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|


### Return type

**AccountSignupBonusProgressResponse**

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

