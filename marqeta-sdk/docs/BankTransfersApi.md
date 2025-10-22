# BankTransfersApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getBanktransfersAch**](#getbanktransfersach) | **GET** /banktransfers/ach | Lists all bank transfers|
|[**getBanktransfersAchToken**](#getbanktransfersachtoken) | **GET** /banktransfers/ach/{token} | Returns a bank transfer entry|
|[**getBanktransfersAchTransitions**](#getbanktransfersachtransitions) | **GET** /banktransfers/ach/transitions | Lists all bank transfer transitions|
|[**postApplyProvisionalCreditToBankTransfer**](#postapplyprovisionalcredittobanktransfer) | **POST** /banktransfers/ach/earlyfunds | Applies a provisional credit to a bank transfer|
|[**postBanktransfersAch**](#postbanktransfersach) | **POST** /banktransfers/ach | Creates an ACH bank transfer|
|[**postBanktransfersAchTransitions**](#postbanktransfersachtransitions) | **POST** /banktransfers/ach/transitions | Creates an ACH bank transfer transition|

# **getBanktransfersAch**
> BankTransferListResponse getBanktransfersAch()


### Example

```typescript
import {
    BankTransfersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BankTransfersApi(configuration);

let count: number; //Number of users to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let userToken: string; //User token (optional) (default to undefined)
let businessToken: string; //Business token (optional) (default to undefined)
let fundingSourceToken: string; //Funding source token (optional) (default to undefined)
let statuses: string; //A comma-delimited list of bank transfer status(s) (optional) (default to undefined)
let sortBy: string; //Sort order (optional) (default to '-lastModifiedTime')
let expand: string; //Object to expand (optional) (default to undefined)
let fundingSourceType: string; //Funding source type (optional) (default to undefined)

const { status, data } = await apiInstance.getBanktransfersAch(
    count,
    startIndex,
    userToken,
    businessToken,
    fundingSourceToken,
    statuses,
    sortBy,
    expand,
    fundingSourceType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of users to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **userToken** | [**string**] | User token | (optional) defaults to undefined|
| **businessToken** | [**string**] | Business token | (optional) defaults to undefined|
| **fundingSourceToken** | [**string**] | Funding source token | (optional) defaults to undefined|
| **statuses** | [**string**] | A comma-delimited list of bank transfer status(s) | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-lastModifiedTime'|
| **expand** | [**string**] | Object to expand | (optional) defaults to undefined|
| **fundingSourceType** | [**string**] | Funding source type | (optional) defaults to undefined|


### Return type

**BankTransferListResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad request |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBanktransfersAchToken**
> BankTransferResponseModel getBanktransfersAchToken()


### Example

```typescript
import {
    BankTransfersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BankTransfersApi(configuration);

let token: string; //Bank transfer token (default to undefined)

const { status, data } = await apiInstance.getBanktransfersAchToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Bank transfer token | defaults to undefined|


### Return type

**BankTransferResponseModel**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | Bank transfer entry not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBanktransfersAchTransitions**
> BankTransferTransitionListResponse getBanktransfersAchTransitions()


### Example

```typescript
import {
    BankTransfersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BankTransfersApi(configuration);

let count: number; //Number of bank transfer transitions to retrieve (optional) (default to 5)
let token: string; //Bank transfer transition token (optional) (default to undefined)
let bankTransferToken: string; //Bank transfer token (optional) (default to undefined)
let startIndex: number; //Start index (optional) (default to 0)
let sortBy: string; //Sort order (optional) (default to '-createdTime')
let statuses: string; //Comma-delimited list of bank transfer states to display e.g. PENDING | PROCESSING | SUBMITTED | RETURNED |  COMPLETED | CANCELLED (optional) (default to undefined)

const { status, data } = await apiInstance.getBanktransfersAchTransitions(
    count,
    token,
    bankTransferToken,
    startIndex,
    sortBy,
    statuses
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of bank transfer transitions to retrieve | (optional) defaults to 5|
| **token** | [**string**] | Bank transfer transition token | (optional) defaults to undefined|
| **bankTransferToken** | [**string**] | Bank transfer token | (optional) defaults to undefined|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-createdTime'|
| **statuses** | [**string**] | Comma-delimited list of bank transfer states to display e.g. PENDING | PROCESSING | SUBMITTED | RETURNED |  COMPLETED | CANCELLED | (optional) defaults to undefined|


### Return type

**BankTransferTransitionListResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad request |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postApplyProvisionalCreditToBankTransfer**
> BankTransferResponseModel postApplyProvisionalCreditToBankTransfer(earlyFundsRequestModel)


### Example

```typescript
import {
    BankTransfersApi,
    Configuration,
    EarlyFundsRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new BankTransfersApi(configuration);

let earlyFundsRequestModel: EarlyFundsRequestModel; //Early funds request model

const { status, data } = await apiInstance.postApplyProvisionalCreditToBankTransfer(
    earlyFundsRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **earlyFundsRequestModel** | **EarlyFundsRequestModel**| Early funds request model | |


### Return type

**BankTransferResponseModel**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad request |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postBanktransfersAch**
> BankTransferResponseModel postBanktransfersAch(bankTransferRequestModel)


### Example

```typescript
import {
    BankTransfersApi,
    Configuration,
    BankTransferRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new BankTransfersApi(configuration);

let bankTransferRequestModel: BankTransferRequestModel; //Create bank transfer request model

const { status, data } = await apiInstance.postBanktransfersAch(
    bankTransferRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bankTransferRequestModel** | **BankTransferRequestModel**| Create bank transfer request model | |


### Return type

**BankTransferResponseModel**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Success |  -  |
|**400** | Bad request |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postBanktransfersAchTransitions**
> BankTransferTransitionResponseModel postBanktransfersAchTransitions(bankTransferTransitionRequestModel)


### Example

```typescript
import {
    BankTransfersApi,
    Configuration,
    BankTransferTransitionRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new BankTransfersApi(configuration);

let bankTransferTransitionRequestModel: BankTransferTransitionRequestModel; //Create bank transfer transition request model

const { status, data } = await apiInstance.postBanktransfersAchTransitions(
    bankTransferTransitionRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bankTransferTransitionRequestModel** | **BankTransferTransitionRequestModel**| Create bank transfer transition request model | |


### Return type

**BankTransferTransitionResponseModel**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Success |  -  |
|**400** | Bad request |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

