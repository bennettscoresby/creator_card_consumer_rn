# FeesApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createFee**](#createfee) | **POST** /accounts/{account_token}/fees | Create fee for an account|
|[**getFees**](#getfees) | **GET** /fees | Lists all fees|
|[**getFeesByAccount**](#getfeesbyaccount) | **GET** /accounts/{account_token}/fees | List account fees|
|[**getFeesToken**](#getfeestoken) | **GET** /fees/{token} | Returns a specific fee|
|[**postFees**](#postfees) | **POST** /fees | Creates a fee|
|[**putFeesToken**](#putfeestoken) | **PUT** /fees/{token} | Updates a specific fee|
|[**retrieveFee**](#retrievefee) | **GET** /accounts/{account_token}/fees/{fee_token} | Retrieve account fee|

# **createFee**
> AccountFeeResponse createFee(accountFeeReq)

Create a fee for an existing credit account.

### Example

```typescript
import {
    FeesApi,
    Configuration,
    AccountFeeReq
} from './api';

const configuration = new Configuration();
const apiInstance = new FeesApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to create a fee.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let accountFeeReq: AccountFeeReq; //

const { status, data } = await apiInstance.createFee(
    accountToken,
    accountFeeReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountFeeReq** | **AccountFeeReq**|  | |
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to create a fee.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|


### Return type

**AccountFeeResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Expected response |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFees**
> FeeListResponse getFees()


### Example

```typescript
import {
    FeesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeesApi(configuration);

let count: number; //Number of fees to retrieve (optional) (default to 100)
let startIndex: number; //Start index (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Sort order (optional) (default to '-createdTime')

const { status, data } = await apiInstance.getFees(
    count,
    startIndex,
    fields,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of fees to retrieve | (optional) defaults to 100|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-createdTime'|


### Return type

**FeeListResponse**

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

# **getFeesByAccount**
> AccountFeePage getFeesByAccount()

Retrieve an array of fees for a credit account.  This endpoint supports <</core-api/sorting-and-pagination, pagination>>.

### Example

```typescript
import {
    FeesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeesApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve fees.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let count: number; //Number of account fee resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)

const { status, data } = await apiInstance.getFeesByAccount(
    accountToken,
    count,
    startIndex
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve fees.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **count** | [**number**] | Number of account fee resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|


### Return type

**AccountFeePage**

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

# **getFeesToken**
> FeeResponse getFeesToken()


### Example

```typescript
import {
    FeesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeesApi(configuration);

let token: string; //Fee token (default to undefined)

const { status, data } = await apiInstance.getFeesToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Fee token | defaults to undefined|


### Return type

**FeeResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | Fee not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postFees**
> FeeResponse postFees()


### Example

```typescript
import {
    FeesApi,
    Configuration,
    FeeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FeesApi(configuration);

let feeRequest: FeeRequest; // (optional)

const { status, data } = await apiInstance.postFees(
    feeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **feeRequest** | **FeeRequest**|  | |


### Return type

**FeeResponse**

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
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putFeesToken**
> FeeResponse putFeesToken()


### Example

```typescript
import {
    FeesApi,
    Configuration,
    FeeUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FeesApi(configuration);

let token: string; //Fee token (default to undefined)
let feeUpdateRequest: FeeUpdateRequest; // (optional)

const { status, data } = await apiInstance.putFeesToken(
    token,
    feeUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **feeUpdateRequest** | **FeeUpdateRequest**|  | |
| **token** | [**string**] | Fee token | defaults to undefined|


### Return type

**FeeResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | User input error/Bad request |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveFee**
> AccountFeeResponse retrieveFee()

Retrieve a fee for a credit account.

### Example

```typescript
import {
    FeesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeesApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve the fee.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let feeToken: string; //Unique identifier of the fee to retrieve.  Send a `GET` request to `/credit/accounts/{account_token}/fees` to retrieve existing account fee tokens. (default to undefined)

const { status, data } = await apiInstance.retrieveFee(
    accountToken,
    feeToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve the fee.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **feeToken** | [**string**] | Unique identifier of the fee to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/fees&#x60; to retrieve existing account fee tokens. | defaults to undefined|


### Return type

**AccountFeeResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing account_fee information |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

