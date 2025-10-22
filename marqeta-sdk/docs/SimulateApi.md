# SimulateApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**postSimulateAuthorization**](#postsimulateauthorization) | **POST** /simulate/authorization | Simulates an authorization|
|[**postSimulateAuthorizationAdvice**](#postsimulateauthorizationadvice) | **POST** /simulate/authorization/advice | Simulates an authorization advice transaction|
|[**postSimulateClearing**](#postsimulateclearing) | **POST** /simulate/clearing | Simulates a clearing/settlement transaction|
|[**postSimulateDirectdeposits**](#postsimulatedirectdeposits) | **POST** /simulate/directdeposits | Simulates the creation of direct deposit|
|[**postSimulateFinancial**](#postsimulatefinancial) | **POST** /simulate/financial | Simulates a financial request (PIN debit) transaction with optional cash back|
|[**postSimulateFinancialAdvice**](#postsimulatefinancialadvice) | **POST** /simulate/financial/advice | Simulates a financial advice transaction|
|[**postSimulateFinancialBalanceinquiry**](#postsimulatefinancialbalanceinquiry) | **POST** /simulate/financial/balanceinquiry | Simulates a balance inquiry|
|[**postSimulateFinancialOriginalcredit**](#postsimulatefinancialoriginalcredit) | **POST** /simulate/financial/originalcredit | Simulates an orignal credit transaction|
|[**postSimulateFinancialWithdrawal**](#postsimulatefinancialwithdrawal) | **POST** /simulate/financial/withdrawal | Simulates an ATM withdrawal transaction|
|[**postSimulateReversal**](#postsimulatereversal) | **POST** /simulate/reversal | Simulates a reversal transaction|

# **postSimulateAuthorization**
> SimulationResponseModel postSimulateAuthorization()


### Example

```typescript
import {
    SimulateApi,
    Configuration,
    AuthRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new SimulateApi(configuration);

let authRequestModel: AuthRequestModel; // (optional)

const { status, data } = await apiInstance.postSimulateAuthorization(
    authRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authRequestModel** | **AuthRequestModel**|  | |


### Return type

**SimulationResponseModel**

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
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postSimulateAuthorizationAdvice**
> SimulationResponseModel postSimulateAuthorizationAdvice()


### Example

```typescript
import {
    SimulateApi,
    Configuration,
    AuthorizationAdviceModel
} from './api';

const configuration = new Configuration();
const apiInstance = new SimulateApi(configuration);

let authorizationAdviceModel: AuthorizationAdviceModel; // (optional)

const { status, data } = await apiInstance.postSimulateAuthorizationAdvice(
    authorizationAdviceModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authorizationAdviceModel** | **AuthorizationAdviceModel**|  | |


### Return type

**SimulationResponseModel**

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
|**404** | Original transaction not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postSimulateClearing**
> SimulationResponseModel postSimulateClearing()


### Example

```typescript
import {
    SimulateApi,
    Configuration,
    ClearingModel
} from './api';

const configuration = new Configuration();
const apiInstance = new SimulateApi(configuration);

let clearingModel: ClearingModel; // (optional)

const { status, data } = await apiInstance.postSimulateClearing(
    clearingModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clearingModel** | **ClearingModel**|  | |


### Return type

**SimulationResponseModel**

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
|**404** | Original transaction not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postSimulateDirectdeposits**
> DepositDepositResponse postSimulateDirectdeposits(directDepositRequest)


### Example

```typescript
import {
    SimulateApi,
    Configuration,
    DirectDepositRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SimulateApi(configuration);

let directDepositRequest: DirectDepositRequest; //Direct deposit simulate request model

const { status, data } = await apiInstance.postSimulateDirectdeposits(
    directDepositRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **directDepositRequest** | **DirectDepositRequest**| Direct deposit simulate request model | |


### Return type

**DepositDepositResponse**

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

# **postSimulateFinancial**
> SimulationResponseModel postSimulateFinancial(financialRequestModel)


### Example

```typescript
import {
    SimulateApi,
    Configuration,
    FinancialRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new SimulateApi(configuration);

let financialRequestModel: FinancialRequestModel; //Financial request model

const { status, data } = await apiInstance.postSimulateFinancial(
    financialRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **financialRequestModel** | **FinancialRequestModel**| Financial request model | |


### Return type

**SimulationResponseModel**

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
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postSimulateFinancialAdvice**
> SimulationResponseModel postSimulateFinancialAdvice(authorizationAdviceModel)


### Example

```typescript
import {
    SimulateApi,
    Configuration,
    AuthorizationAdviceModel
} from './api';

const configuration = new Configuration();
const apiInstance = new SimulateApi(configuration);

let authorizationAdviceModel: AuthorizationAdviceModel; //Financial advice request model

const { status, data } = await apiInstance.postSimulateFinancialAdvice(
    authorizationAdviceModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authorizationAdviceModel** | **AuthorizationAdviceModel**| Financial advice request model | |


### Return type

**SimulationResponseModel**

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
|**404** | Original transaction not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postSimulateFinancialBalanceinquiry**
> SimulationResponseModel postSimulateFinancialBalanceinquiry(balanceInquiryRequestModel)


### Example

```typescript
import {
    SimulateApi,
    Configuration,
    BalanceInquiryRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new SimulateApi(configuration);

let balanceInquiryRequestModel: BalanceInquiryRequestModel; //Balance inquiry request model

const { status, data } = await apiInstance.postSimulateFinancialBalanceinquiry(
    balanceInquiryRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **balanceInquiryRequestModel** | **BalanceInquiryRequestModel**| Balance inquiry request model | |


### Return type

**SimulationResponseModel**

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
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postSimulateFinancialOriginalcredit**
> SimulationResponseModel postSimulateFinancialOriginalcredit(orignalcreditRequestModel)


### Example

```typescript
import {
    SimulateApi,
    Configuration,
    OrignalcreditRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new SimulateApi(configuration);

let orignalcreditRequestModel: OrignalcreditRequestModel; //Orignal Credit request model

const { status, data } = await apiInstance.postSimulateFinancialOriginalcredit(
    orignalcreditRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orignalcreditRequestModel** | **OrignalcreditRequestModel**| Orignal Credit request model | |


### Return type

**SimulationResponseModel**

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
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postSimulateFinancialWithdrawal**
> SimulationResponseModel postSimulateFinancialWithdrawal(withdrawalRequestModel)


### Example

```typescript
import {
    SimulateApi,
    Configuration,
    WithdrawalRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new SimulateApi(configuration);

let withdrawalRequestModel: WithdrawalRequestModel; //ATM withdrawal request model

const { status, data } = await apiInstance.postSimulateFinancialWithdrawal(
    withdrawalRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **withdrawalRequestModel** | **WithdrawalRequestModel**| ATM withdrawal request model | |


### Return type

**SimulationResponseModel**

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
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postSimulateReversal**
> SimulationResponseModel postSimulateReversal()


### Example

```typescript
import {
    SimulateApi,
    Configuration,
    ReversalModel
} from './api';

const configuration = new Configuration();
const apiInstance = new SimulateApi(configuration);

let reversalModel: ReversalModel; // (optional)

const { status, data } = await apiInstance.postSimulateReversal(
    reversalModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reversalModel** | **ReversalModel**|  | |


### Return type

**SimulationResponseModel**

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
|**404** | Original transaction not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

