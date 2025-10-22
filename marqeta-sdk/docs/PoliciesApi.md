# PoliciesApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cloneAprPolicy**](#cloneaprpolicy) | **POST** /policies/aprs/{token}/clone | Clone APR policy|
|[**cloneDocumentPolicy**](#clonedocumentpolicy) | **POST** /policies/documents/{token}/clone | Clone document policy|
|[**cloneFeePolicy**](#clonefeepolicy) | **POST** /policies/fees/{token}/clone | Clone fee policy|
|[**cloneProductPolicy**](#cloneproductpolicy) | **POST** /policies/products/{token}/clone | Clone credit product policy|
|[**cloneRewardPolicy**](#clonerewardpolicy) | **POST** /policies/rewards/{token}/clone | Clone reward policy|
|[**createAprPolicy**](#createaprpolicy) | **POST** /policies/aprs | Create APR policy|
|[**createDocumentPolicy**](#createdocumentpolicy) | **POST** /policies/documents | Create document policy|
|[**createFeePolicy**](#createfeepolicy) | **POST** /policies/fees | Create fee policy|
|[**createProductPolicy**](#createproductpolicy) | **POST** /policies/products | Create credit product policy|
|[**createRewardPolicy**](#createrewardpolicy) | **POST** /policies/rewards | Create reward policy|
|[**getAprPolicies**](#getaprpolicies) | **GET** /policies/aprs | List APR policies|
|[**getAprPolicyByToken**](#getaprpolicybytoken) | **GET** /policies/aprs/{token} | Retrieve APR policy|
|[**getAprPolicySchedulesWithToken**](#getaprpolicyscheduleswithtoken) | **GET** /policies/aprs/{token}/schedule | List APR schedules|
|[**getFeePolicies**](#getfeepolicies) | **GET** /policies/fees | List fee policies|
|[**getFeePolicyByToken**](#getfeepolicybytoken) | **GET** /policies/fees/{token} | Retrieve fee policy|
|[**listDocumentPolicies**](#listdocumentpolicies) | **GET** /policies/documents | List document policies|
|[**listProductPolicies**](#listproductpolicies) | **GET** /policies/products | List credit product policies|
|[**listRewardPolicies**](#listrewardpolicies) | **GET** /policies/rewards | List reward policies|
|[**retrieveDocumentPolicy**](#retrievedocumentpolicy) | **GET** /policies/documents/{token} | Retrieve document policy|
|[**retrieveProductPolicy**](#retrieveproductpolicy) | **GET** /policies/products/{token} | Retrieve credit product policy|
|[**retrieveRewardPolicy**](#retrieverewardpolicy) | **GET** /policies/rewards/{token} | Retrieve reward policy|
|[**updateAprPolicyWithToken**](#updateaprpolicywithtoken) | **PUT** /policies/aprs/{token} | Update APR policy|
|[**updateDocumentPolicy**](#updatedocumentpolicy) | **PUT** /policies/documents/{token} | Update document policy|
|[**updateFeePolicyWithToken**](#updatefeepolicywithtoken) | **PUT** /policies/fees/{token} | Update fee policy|
|[**updateProductPolicy**](#updateproductpolicy) | **PUT** /policies/products/{token} | Update credit product policy|
|[**updateRewardPolicy**](#updaterewardpolicy) | **PUT** /policies/rewards/{token} | Update reward policy|

# **cloneAprPolicy**
> PolicyAprResponse cloneAprPolicy()

Create a new annual percentage rate (APR) policy based on an existing APR policy.

### Example

```typescript
import {
    PoliciesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let token: string; //Unique identifier of the APR policy to clone.  Send a `GET` request to `/policies/aprs` to retrieve existing APR policy tokens. (default to undefined)

const { status, data } = await apiInstance.cloneAprPolicy(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the APR policy to clone.  Send a &#x60;GET&#x60; request to &#x60;/policies/aprs&#x60; to retrieve existing APR policy tokens. | defaults to undefined|


### Return type

**PolicyAprResponse**

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

# **cloneDocumentPolicy**
> PolicyDocumentResponse cloneDocumentPolicy()

Create a new document policy based on an existing document policy. A document policy consists of all the pre- and post-application disclosures and credit program documents known as assets and templates. Assets contain finalized values after a bundle is created; templates do not contain finalized values.

### Example

```typescript
import {
    PoliciesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let token: string; //Unique identifier of the document policy to clone.  Send a `GET` request to `/policies/documents` to retrieve existing document policy tokens. (default to undefined)

const { status, data } = await apiInstance.cloneDocumentPolicy(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the document policy to clone.  Send a &#x60;GET&#x60; request to &#x60;/policies/documents&#x60; to retrieve existing document policy tokens. | defaults to undefined|


### Return type

**PolicyDocumentResponse**

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

# **cloneFeePolicy**
> PolicyFeeResponse cloneFeePolicy()

Create a new fee policy based on an existing fee policy.

### Example

```typescript
import {
    PoliciesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let token: string; //Unique identifier of the fee policy to clone.  Send a `GET` request to `/policies/fee` to retrieve existing fee policy tokens. (default to undefined)

const { status, data } = await apiInstance.cloneFeePolicy(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the fee policy to clone.  Send a &#x60;GET&#x60; request to &#x60;/policies/fee&#x60; to retrieve existing fee policy tokens. | defaults to undefined|


### Return type

**PolicyFeeResponse**

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

# **cloneProductPolicy**
> PolicyProductResponse cloneProductPolicy()

Create a new credit product policy based on an existing credit product policy.

### Example

```typescript
import {
    PoliciesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let token: string; //Unique identifier of the credit product policy to clone.  Send a `GET` request to `/policies/products` to retrieve existing credit product policy tokens. (default to undefined)

const { status, data } = await apiInstance.cloneProductPolicy(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the credit product policy to clone.  Send a &#x60;GET&#x60; request to &#x60;/policies/products&#x60; to retrieve existing credit product policy tokens. | defaults to undefined|


### Return type

**PolicyProductResponse**

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

# **cloneRewardPolicy**
> PolicyRewardResponse cloneRewardPolicy()

Create a new reward policy based on existing reward policy.

### Example

```typescript
import {
    PoliciesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let token: string; //Unique identifier of the reward policy to clone.  Send a `GET` request to `/policies/rewards` to retrieve existing reward policy tokens. (default to undefined)

const { status, data } = await apiInstance.cloneRewardPolicy(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the reward policy to clone.  Send a &#x60;GET&#x60; request to &#x60;/policies/rewards&#x60; to retrieve existing reward policy tokens. | defaults to undefined|


### Return type

**PolicyRewardResponse**

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

# **createAprPolicy**
> PolicyAprResponse createAprPolicy(policyAprCreateReq)

Create a new annual percentage rate (APR) policy.

### Example

```typescript
import {
    PoliciesApi,
    Configuration,
    PolicyAprCreateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let policyAprCreateReq: PolicyAprCreateReq; //

const { status, data } = await apiInstance.createAprPolicy(
    policyAprCreateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **policyAprCreateReq** | **PolicyAprCreateReq**|  | |


### Return type

**PolicyAprResponse**

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

# **createDocumentPolicy**
> PolicyDocumentResponse createDocumentPolicy(policyDocumentCreateReq)

Create a new document policy, which consists of all the pre- and post-application disclosures and credit program documents known as assets and templates. Assets contain finalized values after a bundle is created; templates do not contain finalized values.

### Example

```typescript
import {
    PoliciesApi,
    Configuration,
    PolicyDocumentCreateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let policyDocumentCreateReq: PolicyDocumentCreateReq; //

const { status, data } = await apiInstance.createDocumentPolicy(
    policyDocumentCreateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **policyDocumentCreateReq** | **PolicyDocumentCreateReq**|  | |


### Return type

**PolicyDocumentResponse**

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

# **createFeePolicy**
> PolicyFeeResponse createFeePolicy(policyFeeCreateReq)

Create a new fee policy.

### Example

```typescript
import {
    PoliciesApi,
    Configuration,
    PolicyFeeCreateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let policyFeeCreateReq: PolicyFeeCreateReq; //

const { status, data } = await apiInstance.createFeePolicy(
    policyFeeCreateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **policyFeeCreateReq** | **PolicyFeeCreateReq**|  | |


### Return type

**PolicyFeeResponse**

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

# **createProductPolicy**
> PolicyProductResponse createProductPolicy(policyProductCreateReq)

Create a new credit product policy.

### Example

```typescript
import {
    PoliciesApi,
    Configuration,
    PolicyProductCreateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let policyProductCreateReq: PolicyProductCreateReq; //

const { status, data } = await apiInstance.createProductPolicy(
    policyProductCreateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **policyProductCreateReq** | **PolicyProductCreateReq**|  | |


### Return type

**PolicyProductResponse**

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

# **createRewardPolicy**
> PolicyRewardResponse createRewardPolicy(policyRewardReq)

Create a new reward policy.

### Example

```typescript
import {
    PoliciesApi,
    Configuration,
    PolicyRewardReq
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let policyRewardReq: PolicyRewardReq; //

const { status, data } = await apiInstance.createRewardPolicy(
    policyRewardReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **policyRewardReq** | **PolicyRewardReq**|  | |


### Return type

**PolicyRewardResponse**

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

# **getAprPolicies**
> PolicyAprsPage getAprPolicies()

Retrieve an array of existing APR policies.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    PoliciesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let count: number; //Number of APR policy resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'effectiveDate' | '-effectiveDate'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `effectiveDate`, and not by the field names appearing in response bodies such as `effective_date`. (optional) (default to '-effectiveDate')

const { status, data } = await apiInstance.getAprPolicies(
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of APR policy resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;effectiveDate&#39; | &#39;-effectiveDate&#39;**]**Array<&#39;effectiveDate&#39; &#124; &#39;-effectiveDate&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;effectiveDate&#x60;, and not by the field names appearing in response bodies such as &#x60;effective_date&#x60;. | (optional) defaults to '-effectiveDate'|


### Return type

**PolicyAprsPage**

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

# **getAprPolicyByToken**
> PolicyAprResponse getAprPolicyByToken()

Retrieve a specific annual percentage rate (APR) policy.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    PoliciesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let token: string; //Unique identifier of the APR policy to retrieve.  Send a `GET` request to `/policies/aprs` to retrieve existing APR policy tokens. (default to undefined)

const { status, data } = await apiInstance.getAprPolicyByToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the APR policy to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/policies/aprs&#x60; to retrieve existing APR policy tokens. | defaults to undefined|


### Return type

**PolicyAprResponse**

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

# **getAprPolicySchedulesWithToken**
> PolicyAprsPage getAprPolicySchedulesWithToken()

Retrieve an array of the historic annual percentage rate (APR) schedules on a specific APR policy.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    PoliciesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let token: string; //Unique identifier of the APR policy on which to retrieve APR schedules.  Send a `GET` request to `/policies/aprs` to retrieve existing product policy tokens. (default to undefined)
let count: number; //Number of APR schedule resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'lastModifiedTime' | '-lastModifiedTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `lastModifiedTime`, and not by the field names appearing in response bodies such as `last_modified_time`. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getAprPolicySchedulesWithToken(
    token,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the APR policy on which to retrieve APR schedules.  Send a &#x60;GET&#x60; request to &#x60;/policies/aprs&#x60; to retrieve existing product policy tokens. | defaults to undefined|
| **count** | [**number**] | Number of APR schedule resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;lastModifiedTime&#39; | &#39;-lastModifiedTime&#39;**]**Array<&#39;lastModifiedTime&#39; &#124; &#39;-lastModifiedTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;lastModifiedTime&#x60;, and not by the field names appearing in response bodies such as &#x60;last_modified_time&#x60;. | (optional) defaults to '-lastModifiedTime'|


### Return type

**PolicyAprsPage**

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

# **getFeePolicies**
> PolicyFeesPage getFeePolicies()

Retrieve an array of existing fee policies.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    PoliciesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let count: number; //Number of fee policy resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'lastModifiedTime' | '-lastModifiedTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `lastModifiedTime`, and not by the field names appearing in response bodies such as `last_modified_time`. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getFeePolicies(
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of fee policy resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;lastModifiedTime&#39; | &#39;-lastModifiedTime&#39;**]**Array<&#39;lastModifiedTime&#39; &#124; &#39;-lastModifiedTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;lastModifiedTime&#x60;, and not by the field names appearing in response bodies such as &#x60;last_modified_time&#x60;. | (optional) defaults to '-lastModifiedTime'|


### Return type

**PolicyFeesPage**

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

# **getFeePolicyByToken**
> PolicyFeeResponse getFeePolicyByToken()

Retrieve a specific fee policy.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    PoliciesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let token: string; //Unique identifier of the fee policy to retrieve.  Send a `GET` request to `/policies/fee` to retrieve existing fee policy tokens. (default to undefined)

const { status, data } = await apiInstance.getFeePolicyByToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the fee policy to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/policies/fee&#x60; to retrieve existing fee policy tokens. | defaults to undefined|


### Return type

**PolicyFeeResponse**

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

# **listDocumentPolicies**
> PoliciesDocumentPage listDocumentPolicies()

Retrieve an array of existing document policies. A document policy consists of all the pre- and post-application disclosures and credit program documents known as assets and templates. Assets contain finalized values after a bundle is created; templates do not contain finalized values.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    PoliciesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let count: number; //Number of document policy resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'lastModifiedTime' | '-lastModifiedTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `lastModifiedTime`, and not by the field names appearing in response bodies such as `last_modified_time`. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.listDocumentPolicies(
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of document policy resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;lastModifiedTime&#39; | &#39;-lastModifiedTime&#39;**]**Array<&#39;lastModifiedTime&#39; &#124; &#39;-lastModifiedTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;lastModifiedTime&#x60;, and not by the field names appearing in response bodies such as &#x60;last_modified_time&#x60;. | (optional) defaults to '-lastModifiedTime'|


### Return type

**PoliciesDocumentPage**

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

# **listProductPolicies**
> PoliciesProductPage listProductPolicies()

Retrieve an array of existing credit product policies.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    PoliciesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let count: number; //Number of product policy resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'lastModifiedTime' | '-lastModifiedTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `lastModifiedTime`, and not by the field names appearing in response bodies such as `last_modified_time`. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.listProductPolicies(
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of product policy resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;lastModifiedTime&#39; | &#39;-lastModifiedTime&#39;**]**Array<&#39;lastModifiedTime&#39; &#124; &#39;-lastModifiedTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;lastModifiedTime&#x60;, and not by the field names appearing in response bodies such as &#x60;last_modified_time&#x60;. | (optional) defaults to '-lastModifiedTime'|


### Return type

**PoliciesProductPage**

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

# **listRewardPolicies**
> PolicyRewardPage listRewardPolicies()

Retrieve an array of reward policies.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    PoliciesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let count: number; //Number of reward policy resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'lastModifiedTime' | '-lastModifiedTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `lastModifiedTime`, and not by the field names appearing in response bodies such as `last_modified_time`. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.listRewardPolicies(
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of reward policy resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;lastModifiedTime&#39; | &#39;-lastModifiedTime&#39;**]**Array<&#39;lastModifiedTime&#39; &#124; &#39;-lastModifiedTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;lastModifiedTime&#x60;, and not by the field names appearing in response bodies such as &#x60;last_modified_time&#x60;. | (optional) defaults to '-lastModifiedTime'|


### Return type

**PolicyRewardPage**

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

# **retrieveDocumentPolicy**
> PolicyDocumentResponse retrieveDocumentPolicy()

Retrieve a specific document policy, which consists of all the pre- and post-application disclosures and credit program documents known as assets and templates. Assets contain finalized values after a bundle is created; templates do not contain finalized values.

### Example

```typescript
import {
    PoliciesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let token: string; //Unique identifier of the document policy to retrieve.  Send a `GET` request to `/policies/documents` to retrieve existing document policy tokens. (default to undefined)

const { status, data } = await apiInstance.retrieveDocumentPolicy(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the document policy to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/policies/documents&#x60; to retrieve existing document policy tokens. | defaults to undefined|


### Return type

**PolicyDocumentResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing document policy information |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveProductPolicy**
> PolicyProductResponse retrieveProductPolicy()

Retrieve a specific credit product policy.

### Example

```typescript
import {
    PoliciesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let token: string; //Unique identifier of the credit product policy to retrieve.  Send a `GET` request to `/policies/products` to retrieve existing credit product policy tokens. (default to undefined)

const { status, data } = await apiInstance.retrieveProductPolicy(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the credit product policy to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/policies/products&#x60; to retrieve existing credit product policy tokens. | defaults to undefined|


### Return type

**PolicyProductResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing product policy information |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveRewardPolicy**
> PolicyRewardResponse retrieveRewardPolicy()

Retrieve a reward policy.

### Example

```typescript
import {
    PoliciesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let token: string; //Unique identifier of the reward policy to retrieve.  Send a `GET` request to `/policies/rewards` to retrieve existing reward policy tokens. (default to undefined)

const { status, data } = await apiInstance.retrieveRewardPolicy(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the reward policy to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/policies/rewards&#x60; to retrieve existing reward policy tokens. | defaults to undefined|


### Return type

**PolicyRewardResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing reward policy information. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAprPolicyWithToken**
> PolicyAprResponse updateAprPolicyWithToken(policyAprUpdateReq)

Update a specific APR policy.

### Example

```typescript
import {
    PoliciesApi,
    Configuration,
    PolicyAprUpdateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let token: string; //Unique identifier of the APR policy to update.  Send a `GET` request to `/policies/aprs` to retrieve existing APR policy tokens. (default to undefined)
let policyAprUpdateReq: PolicyAprUpdateReq; //

const { status, data } = await apiInstance.updateAprPolicyWithToken(
    token,
    policyAprUpdateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **policyAprUpdateReq** | **PolicyAprUpdateReq**|  | |
| **token** | [**string**] | Unique identifier of the APR policy to update.  Send a &#x60;GET&#x60; request to &#x60;/policies/aprs&#x60; to retrieve existing APR policy tokens. | defaults to undefined|


### Return type

**PolicyAprResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Expected response |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateDocumentPolicy**
> PolicyDocumentResponse updateDocumentPolicy(policyDocumentUpdateReq)

Update a specific document policy, which consists of all the pre- and post-application disclosures and credit program documents known as assets and templates. Assets contain finalized values after a bundle is created; templates do not contain finalized values.

### Example

```typescript
import {
    PoliciesApi,
    Configuration,
    PolicyDocumentUpdateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let token: string; //Unique identifier of the document policy to update.  Send a `GET` request to `/policies/documents` to retrieve existing document policy tokens. (default to undefined)
let policyDocumentUpdateReq: PolicyDocumentUpdateReq; //

const { status, data } = await apiInstance.updateDocumentPolicy(
    token,
    policyDocumentUpdateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **policyDocumentUpdateReq** | **PolicyDocumentUpdateReq**|  | |
| **token** | [**string**] | Unique identifier of the document policy to update.  Send a &#x60;GET&#x60; request to &#x60;/policies/documents&#x60; to retrieve existing document policy tokens. | defaults to undefined|


### Return type

**PolicyDocumentResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing document policy information. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFeePolicyWithToken**
> PolicyFeeResponse updateFeePolicyWithToken(policyFeeUpdateReq)

Update a specific fee policy.

### Example

```typescript
import {
    PoliciesApi,
    Configuration,
    PolicyFeeUpdateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let token: string; //Unique identifier of the fee policy to retrieve.  Send a `GET` request to `/policies/fee` to retrieve existing fee policy tokens. (default to undefined)
let policyFeeUpdateReq: PolicyFeeUpdateReq; //

const { status, data } = await apiInstance.updateFeePolicyWithToken(
    token,
    policyFeeUpdateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **policyFeeUpdateReq** | **PolicyFeeUpdateReq**|  | |
| **token** | [**string**] | Unique identifier of the fee policy to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/policies/fee&#x60; to retrieve existing fee policy tokens. | defaults to undefined|


### Return type

**PolicyFeeResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Expected response |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProductPolicy**
> PolicyProductResponse updateProductPolicy(policyProductUpdateReq)

Update a specific credit product policy.

### Example

```typescript
import {
    PoliciesApi,
    Configuration,
    PolicyProductUpdateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let token: string; //Unique identifier of the credit product policy to retrieve.  Send a `GET` request to `/policies/products` to retrieve existing credit product policy tokens. (default to undefined)
let policyProductUpdateReq: PolicyProductUpdateReq; //

const { status, data } = await apiInstance.updateProductPolicy(
    token,
    policyProductUpdateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **policyProductUpdateReq** | **PolicyProductUpdateReq**|  | |
| **token** | [**string**] | Unique identifier of the credit product policy to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/policies/products&#x60; to retrieve existing credit product policy tokens. | defaults to undefined|


### Return type

**PolicyProductResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing product policy information. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateRewardPolicy**
> PolicyRewardResponse updateRewardPolicy(policyRewardReq)

Update a reward policy.

### Example

```typescript
import {
    PoliciesApi,
    Configuration,
    PolicyRewardReq
} from './api';

const configuration = new Configuration();
const apiInstance = new PoliciesApi(configuration);

let token: string; //Unique identifier of the reward policy to update.  Send a `GET` request to `/policies/rewards` to retrieve existing reward policy tokens. (default to undefined)
let policyRewardReq: PolicyRewardReq; //

const { status, data } = await apiInstance.updateRewardPolicy(
    token,
    policyRewardReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **policyRewardReq** | **PolicyRewardReq**|  | |
| **token** | [**string**] | Unique identifier of the reward policy to update.  Send a &#x60;GET&#x60; request to &#x60;/policies/rewards&#x60; to retrieve existing reward policy tokens. | defaults to undefined|


### Return type

**PolicyRewardResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing reward policy information. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

