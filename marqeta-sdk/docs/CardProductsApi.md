# CardProductsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCardproducts**](#getcardproducts) | **GET** /cardproducts | Lists all card products|
|[**getCardproductsToken**](#getcardproductstoken) | **GET** /cardproducts/{token} | Returns a specific card product|
|[**postCardproducts**](#postcardproducts) | **POST** /cardproducts | Creates a card product|
|[**putCardproductsToken**](#putcardproductstoken) | **PUT** /cardproducts/{token} | Updates a specific card product|

# **getCardproducts**
> CardProductListResponse getCardproducts()


### Example

```typescript
import {
    CardProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CardProductsApi(configuration);

let count: number; //Number of items to retrieve. Count can be between 1 - 10 items. (optional) (default to 5)
let startIndex: number; //Indicates from what row to start returning data. (optional) (default to 0)
let sortBy: string; //Sort order (optional) (default to '-createdTime')

const { status, data } = await apiInstance.getCardproducts(
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of items to retrieve. Count can be between 1 - 10 items. | (optional) defaults to 5|
| **startIndex** | [**number**] | Indicates from what row to start returning data. | (optional) defaults to 0|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-createdTime'|


### Return type

**CardProductListResponse**

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

# **getCardproductsToken**
> CardProductResponse getCardproductsToken()


### Example

```typescript
import {
    CardProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CardProductsApi(configuration);

let token: string; //Card product token (default to undefined)

const { status, data } = await apiInstance.getCardproductsToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Card product token | defaults to undefined|


### Return type

**CardProductResponse**

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
|**404** | Card product not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postCardproducts**
> CardProductResponse postCardproducts(cardProductRequest)


### Example

```typescript
import {
    CardProductsApi,
    Configuration,
    CardProductRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CardProductsApi(configuration);

let cardProductRequest: CardProductRequest; //Card product object

const { status, data } = await apiInstance.postCardproducts(
    cardProductRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardProductRequest** | **CardProductRequest**| Card product object | |


### Return type

**CardProductResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**400** | Bad request |  -  |
|**409** | Token already associated with a different payload |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putCardproductsToken**
> CardProductResponse putCardproductsToken(cardProductUpdateModel)


### Example

```typescript
import {
    CardProductsApi,
    Configuration,
    CardProductUpdateModel
} from './api';

const configuration = new Configuration();
const apiInstance = new CardProductsApi(configuration);

let token: string; //Card product token (default to undefined)
let cardProductUpdateModel: CardProductUpdateModel; //Card product object

const { status, data } = await apiInstance.putCardproductsToken(
    token,
    cardProductUpdateModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardProductUpdateModel** | **CardProductUpdateModel**| Card product object | |
| **token** | [**string**] | Card product token | defaults to undefined|


### Return type

**CardProductResponse**

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

