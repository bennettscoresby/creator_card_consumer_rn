# ProgramFundingApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getProgramFundings**](#getprogramfundings) | **GET** /admin/programs/funding | List program fundings|
|[**getProgramFundingsByShortCode**](#getprogramfundingsbyshortcode) | **GET** /programs/funding | List program fundings|

# **getProgramFundings**
> ProgramFundingPage getProgramFundings()

Retrieve an array of program funding entries.

### Example

```typescript
import {
    ProgramFundingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProgramFundingApi(configuration);

let count: number; //Number of program funding resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let startDate: string; //Start date for filtering program funding entries. (optional) (default to undefined)
let endDate: string; //End date for filtering program funding entries. (optional) (default to undefined)
let shortCode: string; //Short code for filtering program funding entries. (optional) (default to undefined)

const { status, data } = await apiInstance.getProgramFundings(
    count,
    startIndex,
    startDate,
    endDate,
    shortCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of program funding resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **startDate** | [**string**] | Start date for filtering program funding entries. | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for filtering program funding entries. | (optional) defaults to undefined|
| **shortCode** | [**string**] | Short code for filtering program funding entries. | (optional) defaults to undefined|


### Return type

**ProgramFundingPage**

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

# **getProgramFundingsByShortCode**
> ProgramFundingPage getProgramFundingsByShortCode()

Retrieve an array of program funding entries.

### Example

```typescript
import {
    ProgramFundingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProgramFundingApi(configuration);

let count: number; //Number of program funding resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let startDate: string; //Start date for filtering program funding entries. (optional) (default to undefined)
let endDate: string; //End date for filtering program funding entries. (optional) (default to undefined)

const { status, data } = await apiInstance.getProgramFundingsByShortCode(
    count,
    startIndex,
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of program funding resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **startDate** | [**string**] | Start date for filtering program funding entries. | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for filtering program funding entries. | (optional) defaults to undefined|


### Return type

**ProgramFundingPage**

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

