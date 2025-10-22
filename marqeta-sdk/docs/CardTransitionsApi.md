# CardTransitionsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCardtransitionsCardToken**](#getcardtransitionscardtoken) | **GET** /cardtransitions/card/{token} | Lists all card transitions|
|[**getCardtransitionsToken**](#getcardtransitionstoken) | **GET** /cardtransitions/{token} | Returns a card transition object|
|[**postCardtransitions**](#postcardtransitions) | **POST** /cardtransitions | Creates a card transition object|

# **getCardtransitionsCardToken**
> CardTransitionListResponse getCardtransitionsCardToken()


### Example

```typescript
import {
    CardTransitionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CardTransitionsApi(configuration);

let token: string; //Card token (default to undefined)
let count: number; //Number of card transitions to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Sort order (optional) (default to '-createdTime')

const { status, data } = await apiInstance.getCardtransitionsCardToken(
    token,
    count,
    startIndex,
    fields,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Card token | defaults to undefined|
| **count** | [**number**] | Number of card transitions to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-createdTime'|


### Return type

**CardTransitionListResponse**

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

# **getCardtransitionsToken**
> CardTransitionResponse getCardtransitionsToken()


### Example

```typescript
import {
    CardTransitionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CardTransitionsApi(configuration);

let token: string; //Card transition token (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getCardtransitionsToken(
    token,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Card transition token | defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**CardTransitionResponse**

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

# **postCardtransitions**
> CardTransitionResponse postCardtransitions()


### Example

```typescript
import {
    CardTransitionsApi,
    Configuration,
    CardTransitionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CardTransitionsApi(configuration);

let cardTransitionRequest: CardTransitionRequest; // (optional)

const { status, data } = await apiInstance.postCardtransitions(
    cardTransitionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardTransitionRequest** | **CardTransitionRequest**|  | |


### Return type

**CardTransitionResponse**

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
|**422** | Cardholder not active |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

