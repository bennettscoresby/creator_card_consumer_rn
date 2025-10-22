# ChargebacksApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getChargebacks**](#getchargebacks) | **GET** /chargebacks | List all chargebacks|
|[**getChargebacksChargebacktokenTransitions**](#getchargebackschargebacktokentransitions) | **GET** /chargebacks/{chargeback_token}/transitions | Lists all chargeback transitions that are related to a chargeback|
|[**getChargebacksToken**](#getchargebackstoken) | **GET** /chargebacks/{token} | Returns a specific chargeback|
|[**getChargebacksTransitionsToken**](#getchargebackstransitionstoken) | **GET** /chargebacks/transitions/{token} | Returns a specific chargeback transition|
|[**postChargebackAllocationAcknowledgment**](#postchargebackallocationacknowledgment) | **POST** /chargebacks/allocationacknowledgement | Creates a chargeback allocation acknowledgement|
|[**postChargebacks**](#postchargebacks) | **POST** /chargebacks | Creates a chargeback|
|[**postChargebacksTransitions**](#postchargebackstransitions) | **POST** /chargebacks/transitions | Creates a chargeback transition|
|[**putChargebacksToken**](#putchargebackstoken) | **PUT** /chargebacks/{token} | Updates chargeback data|
|[**putChargebacksTokenGrantprovisionalcredit**](#putchargebackstokengrantprovisionalcredit) | **PUT** /chargebacks/{token}/grantprovisionalcredit | Grants provisional credit|
|[**putChargebacksTokenReverseprovisionalcredit**](#putchargebackstokenreverseprovisionalcredit) | **PUT** /chargebacks/{token}/reverseprovisionalcredit | Reverses provisional credit|

# **getChargebacks**
> ChargebackListResponse getChargebacks()


### Example

```typescript
import {
    ChargebacksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChargebacksApi(configuration);

let count: number; //Number of chargebacks to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let networkReferenceId: string; //Network reference ID (optional) (default to undefined)
let transactionToken: string; //Transaction token (optional) (default to undefined)
let amount: string; //Amount (optional) (default to undefined)
let states: string; //Comma-delimited list of chargeback states to display e.g. INITIATED | REPRESENTMENT | PREARBITRATION | ARBITRATION | CASE_WON | CASE_LOST | NETWORK_REJECTED | WITHDRAWN | WRITTEN_OFF_ISSUER | WRITTEN_OFF_PROGRAM (optional) (default to undefined)
let sortBy: string; //Sort order (optional) (default to '-lastModifiedTime')
let networkCaseId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getChargebacks(
    count,
    startIndex,
    networkReferenceId,
    transactionToken,
    amount,
    states,
    sortBy,
    networkCaseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of chargebacks to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **networkReferenceId** | [**string**] | Network reference ID | (optional) defaults to undefined|
| **transactionToken** | [**string**] | Transaction token | (optional) defaults to undefined|
| **amount** | [**string**] | Amount | (optional) defaults to undefined|
| **states** | [**string**] | Comma-delimited list of chargeback states to display e.g. INITIATED | REPRESENTMENT | PREARBITRATION | ARBITRATION | CASE_WON | CASE_LOST | NETWORK_REJECTED | WITHDRAWN | WRITTEN_OFF_ISSUER | WRITTEN_OFF_PROGRAM | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-lastModifiedTime'|
| **networkCaseId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ChargebackListResponse**

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

# **getChargebacksChargebacktokenTransitions**
> ChargebackTransitionListResponse getChargebacksChargebacktokenTransitions()


### Example

```typescript
import {
    ChargebacksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChargebacksApi(configuration);

let chargebackToken: string; //Chargeback token (default to undefined)
let count: number; //Number of transitions to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let sortBy: string; //Sort order (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getChargebacksChargebacktokenTransitions(
    chargebackToken,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargebackToken** | [**string**] | Chargeback token | defaults to undefined|
| **count** | [**number**] | Number of transitions to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-lastModifiedTime'|


### Return type

**ChargebackTransitionListResponse**

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

# **getChargebacksToken**
> ChargebackResponse getChargebacksToken()


### Example

```typescript
import {
    ChargebacksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChargebacksApi(configuration);

let token: string; // (default to undefined)

const { status, data } = await apiInstance.getChargebacksToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] |  | defaults to undefined|


### Return type

**ChargebackResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | Chargeback not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getChargebacksTransitionsToken**
> ChargebackTransitionResponse getChargebacksTransitionsToken()


### Example

```typescript
import {
    ChargebacksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChargebacksApi(configuration);

let token: string; //Chargeback transition token (default to undefined)

const { status, data } = await apiInstance.getChargebacksTransitionsToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Chargeback transition token | defaults to undefined|


### Return type

**ChargebackTransitionResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | User input error/Bad request |  -  |
|**404** | Transition not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postChargebackAllocationAcknowledgment**
> ChargebackResponse postChargebackAllocationAcknowledgment()


### Example

```typescript
import {
    ChargebacksApi,
    Configuration,
    ChargebackAllocationAckRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ChargebacksApi(configuration);

let chargebackAllocationAckRequest: ChargebackAllocationAckRequest; // (optional)

const { status, data } = await apiInstance.postChargebackAllocationAcknowledgment(
    chargebackAllocationAckRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargebackAllocationAckRequest** | **ChargebackAllocationAckRequest**|  | |


### Return type

**ChargebackResponse**

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
|**409** | Token already associated with a different payload |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postChargebacks**
> ChargebackResponse postChargebacks()


### Example

```typescript
import {
    ChargebacksApi,
    Configuration,
    ChargebackRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ChargebacksApi(configuration);

let chargebackRequest: ChargebackRequest; // (optional)

const { status, data } = await apiInstance.postChargebacks(
    chargebackRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargebackRequest** | **ChargebackRequest**|  | |


### Return type

**ChargebackResponse**

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
|**409** | Token already associated with a different payload |  -  |
|**412** | Pre-condition failed. Chargeback amount is greater than user GPA balance |  -  |
|**422** | Unable to return funds back to cardholder |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postChargebacksTransitions**
> ChargebackTransitionResponse postChargebacksTransitions()


### Example

```typescript
import {
    ChargebacksApi,
    Configuration,
    ChargebackTransitionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ChargebacksApi(configuration);

let chargebackTransitionRequest: ChargebackTransitionRequest; // (optional)

const { status, data } = await apiInstance.postChargebacksTransitions(
    chargebackTransitionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargebackTransitionRequest** | **ChargebackTransitionRequest**|  | |


### Return type

**ChargebackTransitionResponse**

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
|**409** | Token already associated with a different payload |  -  |
|**422** | Unable to perform chargeback transition |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putChargebacksToken**
> ChargebackResponse putChargebacksToken()


### Example

```typescript
import {
    ChargebacksApi,
    Configuration,
    ChargebackUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ChargebacksApi(configuration);

let token: string; // (default to undefined)
let chargebackUpdateRequest: ChargebackUpdateRequest; // (optional)

const { status, data } = await apiInstance.putChargebacksToken(
    token,
    chargebackUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargebackUpdateRequest** | **ChargebackUpdateRequest**|  | |
| **token** | [**string**] |  | defaults to undefined|


### Return type

**ChargebackResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Chargeback not found |  -  |
|**422** | Unable to update chargeback |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putChargebacksTokenGrantprovisionalcredit**
> ChargebackResponse putChargebacksTokenGrantprovisionalcredit()


### Example

```typescript
import {
    ChargebacksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChargebacksApi(configuration);

let token: string; // (default to undefined)

const { status, data } = await apiInstance.putChargebacksTokenGrantprovisionalcredit(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] |  | defaults to undefined|


### Return type

**ChargebackResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Chargeback not found |  -  |
|**422** | Unable to grant provisional credit |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putChargebacksTokenReverseprovisionalcredit**
> ChargebackResponse putChargebacksTokenReverseprovisionalcredit()


### Example

```typescript
import {
    ChargebacksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChargebacksApi(configuration);

let token: string; // (default to undefined)

const { status, data } = await apiInstance.putChargebacksTokenReverseprovisionalcredit(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] |  | defaults to undefined|


### Return type

**ChargebackResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Chargeback not found; chargeback at terminal state |  -  |
|**422** | Unable to reverse provisional credit |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

