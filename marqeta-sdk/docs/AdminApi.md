# AdminApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**replayFailedStatements**](#replayfailedstatements) | **POST** /admin/replayfailedstatements | Replays all failed statement from statement error processing table|
|[**replayFailedStatementsByShortCode**](#replayfailedstatementsbyshortcode) | **POST** /admin/replayfailedstatements/{short_code} | Replays all failed statements by short code from statement error processing table|
|[**replaySingleFailedStatement**](#replaysinglefailedstatement) | **POST** /admin/{short_code}/replayfailedstatement/{account_token} | Replays single failed statement by short code  and account token from statement error processing table|
|[**retryAchPayment**](#retryachpayment) | **POST** /admin/{short_code}/retryachpayments | Create a new ACHO ACH transfer|
|[**scheduleStatements**](#schedulestatements) | **POST** /admin/scheduleStatements | Schedules statements for applicable accounts|

# **replayFailedStatements**
> Success replayFailedStatements()

Replays all failed statement from statement error processing table

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

const { status, data } = await apiInstance.replayFailedStatements();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Success**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Replays all failed statements |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replayFailedStatementsByShortCode**
> Success replayFailedStatementsByShortCode()

Replays all failed statements by short code from statement error processing table

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let shortCode: string; //Short code of the program (default to undefined)

const { status, data } = await apiInstance.replayFailedStatementsByShortCode(
    shortCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shortCode** | [**string**] | Short code of the program | defaults to undefined|


### Return type

**Success**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Replays all failed statements by shortcode |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replaySingleFailedStatement**
> Success replaySingleFailedStatement()

Creates and enables a feature flag for a specified program short code

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let shortCode: string; //Short code of the program (default to undefined)
let accountToken: string; //account token of the account (default to undefined)

const { status, data } = await apiInstance.replaySingleFailedStatement(
    shortCode,
    accountToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shortCode** | [**string**] | Short code of the program | defaults to undefined|
| **accountToken** | [**string**] | account token of the account | defaults to undefined|


### Return type

**Success**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Method unimplemented |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retryAchPayment**
> RetryAchPaymentReq retryAchPayment(retryAchPaymentReq)

Create a new ACHO ACH transfer for payment who\'s current transfer has failed and is in ERROR state.

### Example

```typescript
import {
    AdminApi,
    Configuration,
    RetryAchPaymentReq
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let shortCode: string; //Short code of the program (default to undefined)
let retryAchPaymentReq: RetryAchPaymentReq; //Create a new ACHO ACH transfer

const { status, data } = await apiInstance.retryAchPayment(
    shortCode,
    retryAchPaymentReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **retryAchPaymentReq** | **RetryAchPaymentReq**| Create a new ACHO ACH transfer | |
| **shortCode** | [**string**] | Short code of the program | defaults to undefined|


### Return type

**RetryAchPaymentReq**

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

# **scheduleStatements**
> Success scheduleStatements()

Schedules statements for applicable accounts

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

const { status, data } = await apiInstance.scheduleStatements();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Success**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Schedules statements for applicable accounts |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

