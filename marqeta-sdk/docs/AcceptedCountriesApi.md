# AcceptedCountriesApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAcceptedcountries**](#getacceptedcountries) | **GET** /acceptedcountries | Lists all accepted countries|
|[**getAcceptedcountriesToken**](#getacceptedcountriestoken) | **GET** /acceptedcountries/{token} | Returns a specific accepted country|

# **getAcceptedcountries**
> AcceptedCountriesListResponse getAcceptedcountries()


### Example

```typescript
import {
    AcceptedCountriesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AcceptedCountriesApi(configuration);

let count: number; //Number of accepted countries to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let name: string; //Name (optional) (default to undefined)
let whitelist: boolean; //Whitelist (optional) (default to undefined)
let searchType: string; //Search type (optional) (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Sort order (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getAcceptedcountries(
    count,
    startIndex,
    name,
    whitelist,
    searchType,
    fields,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of accepted countries to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **name** | [**string**] | Name | (optional) defaults to undefined|
| **whitelist** | [**boolean**] | Whitelist | (optional) defaults to undefined|
| **searchType** | [**string**] | Search type | (optional) defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-lastModifiedTime'|


### Return type

**AcceptedCountriesListResponse**

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
|**500** | Server failure |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAcceptedcountriesToken**
> AcceptedCountriesModel getAcceptedcountriesToken()


### Example

```typescript
import {
    AcceptedCountriesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AcceptedCountriesApi(configuration);

let token: string; //Accepted country token (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getAcceptedcountriesToken(
    token,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Accepted country token | defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**AcceptedCountriesModel**

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
|**404** | Accepted country not found |  -  |
|**500** | Server failure |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

