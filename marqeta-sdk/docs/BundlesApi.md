# BundlesApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cloneBundle**](#clonebundle) | **POST** /bundles/{token}/clone | Clone bundle|
|[**createBundle**](#createbundle) | **POST** /bundles | Create bundle|
|[**listBundles**](#listbundles) | **GET** /bundles | List bundles|
|[**listRelatedBundles**](#listrelatedbundles) | **GET** /bundles/{token}/lineage | List related bundles|
|[**promoteBundle**](#promotebundle) | **PUT** /bundles/{token}/promote | Promote bundle|
|[**retrieveBundle**](#retrievebundle) | **GET** /bundles/{token} | Retrieve bundle|
|[**transitionBundle**](#transitionbundle) | **POST** /bundles/{token}/transitions | Transition a bundle|
|[**updateBundle**](#updatebundle) | **PUT** /bundles/{token} | Update bundle|

# **cloneBundle**
> BundleResponse cloneBundle()

Create a new bundle based on an existing bundle.

### Example

```typescript
import {
    BundlesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BundlesApi(configuration);

let token: string; //Unique identifier of the bundle to clone.  Send a `GET` request to `/bundles` to retrieve existing bundle tokens. (default to undefined)

const { status, data } = await apiInstance.cloneBundle(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the bundle to clone.  Send a &#x60;GET&#x60; request to &#x60;/bundles&#x60; to retrieve existing bundle tokens. | defaults to undefined|


### Return type

**BundleResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Expected response |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createBundle**
> BundleResponse createBundle(bundleCreateReq)

Create a bundle.

### Example

```typescript
import {
    BundlesApi,
    Configuration,
    BundleCreateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new BundlesApi(configuration);

let bundleCreateReq: BundleCreateReq; //

const { status, data } = await apiInstance.createBundle(
    bundleCreateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bundleCreateReq** | **BundleCreateReq**|  | |


### Return type

**BundleResponse**

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

# **listBundles**
> BundleResponsePage listBundles()

Retrieve an array of bundles.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    BundlesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BundlesApi(configuration);

let count: number; //Number of bundles resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'lastModifiedTime' | '-lastModifiedTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `lastModifiedTime`, not by the field names appearing in response bodies: for example, `last_modified_time`. (optional) (default to '-lastModifiedTime')
let status: Array<BundleResourceStatus>; //An array of statuses by which to filter bundles. (optional) (default to undefined)

const { status, data } = await apiInstance.listBundles(
    count,
    startIndex,
    sortBy,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of bundles resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;lastModifiedTime&#39; | &#39;-lastModifiedTime&#39;**]**Array<&#39;lastModifiedTime&#39; &#124; &#39;-lastModifiedTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;lastModifiedTime&#x60;, not by the field names appearing in response bodies: for example, &#x60;last_modified_time&#x60;. | (optional) defaults to '-lastModifiedTime'|
| **status** | **Array&lt;BundleResourceStatus&gt;** | An array of statuses by which to filter bundles. | (optional) defaults to undefined|


### Return type

**BundleResponsePage**

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

# **listRelatedBundles**
> BundleResponsePage listRelatedBundles()

Retrieve an array of related product bundles.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    BundlesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BundlesApi(configuration);

let token: string; //Unique identifier of the parent product bundle.  Send a `GET` request to `/bundles` to retrieve existing product bundles tokens. (default to undefined)
let count: number; //Number of related bundle product resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'lastModifiedTime' | '-lastModifiedTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `lastModifiedTime`, and not by the field names appearing in response bodies such as `last_modified_time`. (optional) (default to '-lastModifiedTime')
let status: Array<BundleResourceStatus>; //Array of statuses by which to filter bundles. (optional) (default to undefined)

const { status, data } = await apiInstance.listRelatedBundles(
    token,
    count,
    startIndex,
    sortBy,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the parent product bundle.  Send a &#x60;GET&#x60; request to &#x60;/bundles&#x60; to retrieve existing product bundles tokens. | defaults to undefined|
| **count** | [**number**] | Number of related bundle product resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;lastModifiedTime&#39; | &#39;-lastModifiedTime&#39;**]**Array<&#39;lastModifiedTime&#39; &#124; &#39;-lastModifiedTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;lastModifiedTime&#x60;, and not by the field names appearing in response bodies such as &#x60;last_modified_time&#x60;. | (optional) defaults to '-lastModifiedTime'|
| **status** | **Array&lt;BundleResourceStatus&gt;** | Array of statuses by which to filter bundles. | (optional) defaults to undefined|


### Return type

**BundleResponsePage**

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

# **promoteBundle**
> BundleResponse promoteBundle()

Promote a specific bundle that replaces the current active bundle and activates the promoted bundle.

### Example

```typescript
import {
    BundlesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BundlesApi(configuration);

let token: string; //Unique identifier of the bundle to promote.  Send a `GET` request to `/bundles` to retrieve existing bundle tokens. (default to undefined)

const { status, data } = await apiInstance.promoteBundle(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the bundle to promote.  Send a &#x60;GET&#x60; request to &#x60;/bundles&#x60; to retrieve existing bundle tokens. | defaults to undefined|


### Return type

**BundleResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Expected response |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveBundle**
> BundleResponse retrieveBundle()

Retrieve a specific bundle.

### Example

```typescript
import {
    BundlesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BundlesApi(configuration);

let token: string; //Unique identifier of the bundle to retrieve.  Send a `GET` request to `/credit/bundles` to retrieve existing  tokens. (default to undefined)
let expandObjects: Array<PolicyType>; //Embeds the associated object of the specified type into the response. For more, see <</core-api/object-expansion, object expansion>>. (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveBundle(
    token,
    expandObjects
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the bundle to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/bundles&#x60; to retrieve existing  tokens. | defaults to undefined|
| **expandObjects** | **Array&lt;PolicyType&gt;** | Embeds the associated object of the specified type into the response. For more, see &lt;&lt;/core-api/object-expansion, object expansion&gt;&gt;. | (optional) defaults to undefined|


### Return type

**BundleResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing bundle information |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transitionBundle**
> BundleTransitionResponse transitionBundle(bundleTransitionReq)

Transition the status of a specific bundle.

### Example

```typescript
import {
    BundlesApi,
    Configuration,
    BundleTransitionReq
} from './api';

const configuration = new Configuration();
const apiInstance = new BundlesApi(configuration);

let token: string; //Token of the bundle whose status you want to transition.  Send a `GET` request to `/credit/bundles` to retrieve existing  tokens. (default to undefined)
let bundleTransitionReq: BundleTransitionReq; //

const { status, data } = await apiInstance.transitionBundle(
    token,
    bundleTransitionReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bundleTransitionReq** | **BundleTransitionReq**|  | |
| **token** | [**string**] | Token of the bundle whose status you want to transition.  Send a &#x60;GET&#x60; request to &#x60;/credit/bundles&#x60; to retrieve existing  tokens. | defaults to undefined|


### Return type

**BundleTransitionResponse**

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

# **updateBundle**
> BundleResponse updateBundle(bundleUpdateReq)

Update a specific bundle that is not `ACTIVE` or `ARCHIVED`. Bundles are created in a `DRAFT` state, and are still modifiable at this point. Using the transitions endpoint, a bundle can be transitioned from `DRAFT`, to `ACTIVE`. Once a bundle is active, it cannot be modified.

### Example

```typescript
import {
    BundlesApi,
    Configuration,
    BundleUpdateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new BundlesApi(configuration);

let token: string; //Token of the bundle to update.  Send a `GET` request to `/credit/bundles` to retrieve existing  tokens. (default to undefined)
let bundleUpdateReq: BundleUpdateReq; //

const { status, data } = await apiInstance.updateBundle(
    token,
    bundleUpdateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bundleUpdateReq** | **BundleUpdateReq**|  | |
| **token** | [**string**] | Token of the bundle to update.  Send a &#x60;GET&#x60; request to &#x60;/credit/bundles&#x60; to retrieve existing  tokens. | defaults to undefined|


### Return type

**BundleResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing bundle information. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

