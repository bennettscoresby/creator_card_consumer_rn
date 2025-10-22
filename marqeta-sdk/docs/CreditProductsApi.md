# CreditProductsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createProduct**](#createproduct) | **POST** /products | Create credit product|
|[**lineageProducts**](#lineageproducts) | **GET** /products/{token}/lineage | Retrieve credit product lineage|
|[**listProducts**](#listproducts) | **GET** /products | List credit products|
|[**retrieveProduct**](#retrieveproduct) | **GET** /products/{token} | Retrieve credit product|

# **createProduct**
> ProductResponse createProduct(productCreateReq)

Create a credit product.

### Example

```typescript
import {
    CreditProductsApi,
    Configuration,
    ProductCreateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new CreditProductsApi(configuration);

let productCreateReq: ProductCreateReq; //

const { status, data } = await apiInstance.createProduct(
    productCreateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productCreateReq** | **ProductCreateReq**|  | |


### Return type

**ProductResponse**

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

# **lineageProducts**
> ProductsPage lineageProducts()

Retrieve the lineage of a credit product, which is an array of related credit products whose lineage can be traced back to the same original credit product.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    CreditProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CreditProductsApi(configuration);

let token: string; //Unique identifier of the credit product whose lineage you want to retrieve.  Send a `GET` request to `/credit/products` to retrieve existing credit product tokens. (default to undefined)
let status: Array<ResourceStatus>; //An array of statuses by which to filter credit products. (optional) (default to undefined)
let count: number; //Number of credit product resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'lastModifiedTime' | '-lastModifiedTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `lastModifiedTime`, and not by the field names appearing in response bodies such as `last_modified_time`. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.lineageProducts(
    token,
    status,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the credit product whose lineage you want to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/products&#x60; to retrieve existing credit product tokens. | defaults to undefined|
| **status** | **Array&lt;ResourceStatus&gt;** | An array of statuses by which to filter credit products. | (optional) defaults to undefined|
| **count** | [**number**] | Number of credit product resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;lastModifiedTime&#39; | &#39;-lastModifiedTime&#39;**]**Array<&#39;lastModifiedTime&#39; &#124; &#39;-lastModifiedTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;lastModifiedTime&#x60;, and not by the field names appearing in response bodies such as &#x60;last_modified_time&#x60;. | (optional) defaults to '-lastModifiedTime'|


### Return type

**ProductsPage**

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

# **listProducts**
> ProductsPage listProducts()

Retrieve an array of credit products.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    CreditProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CreditProductsApi(configuration);

let status: Array<ResourceStatus>; //An array of statuses by which to filter credit products. (optional) (default to undefined)
let count: number; //Number of credit product resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'lastModifiedTime' | '-lastModifiedTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `lastModifiedTime`, and not by the field names appearing in response bodies such as `last_modified_time`. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.listProducts(
    status,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | **Array&lt;ResourceStatus&gt;** | An array of statuses by which to filter credit products. | (optional) defaults to undefined|
| **count** | [**number**] | Number of credit product resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;lastModifiedTime&#39; | &#39;-lastModifiedTime&#39;**]**Array<&#39;lastModifiedTime&#39; &#124; &#39;-lastModifiedTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;lastModifiedTime&#x60;, and not by the field names appearing in response bodies such as &#x60;last_modified_time&#x60;. | (optional) defaults to '-lastModifiedTime'|


### Return type

**ProductsPage**

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

# **retrieveProduct**
> ProductResponse retrieveProduct()

Retrieve a credit product.

### Example

```typescript
import {
    CreditProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CreditProductsApi(configuration);

let token: string; //Unique identifier of the credit product to retrieve.  Send a `GET` request to `/credit/products` to retrieve existing credit product tokens. (default to undefined)

const { status, data } = await apiInstance.retrieveProduct(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the credit product to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/products&#x60; to retrieve existing credit product tokens. | defaults to undefined|


### Return type

**ProductResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing product information |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

