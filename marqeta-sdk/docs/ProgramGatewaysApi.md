# ProgramGatewaysApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createProgramGateway**](#createprogramgateway) | **POST** /programgateways | Create Program Gateway|
|[**listProgramGateways**](#listprogramgateways) | **GET** /programgateways | List Program Gateways|
|[**retrieveProgramGateway**](#retrieveprogramgateway) | **GET** /programgateways/{token} | Retrieve Program Gateway|
|[**updateProgramGateway**](#updateprogramgateway) | **PUT** /programgateways/{token} | Update Program Gateway|

# **createProgramGateway**
> ProgramGatewayResponse createProgramGateway(programGatewayCreateReq)

Create a new Credit Program Gateway.  Use this endpoint to configure your Program Gateway to receive gateway requests from Marqeta\'s credit platform. You can create multiple Program Gateways, but only one can be active per credit program.  [NOTE] To create a Program Gateway, you must have consumer or admin credentials.

### Example

```typescript
import {
    ProgramGatewaysApi,
    Configuration,
    ProgramGatewayCreateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new ProgramGatewaysApi(configuration);

let programGatewayCreateReq: ProgramGatewayCreateReq; //

const { status, data } = await apiInstance.createProgramGateway(
    programGatewayCreateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **programGatewayCreateReq** | **ProgramGatewayCreateReq**|  | |


### Return type

**ProgramGatewayResponse**

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

# **listProgramGateways**
> ProgramGatewayPage listProgramGateways()

Retrieve an array of existing Credit Program Gateways.  This endpoint supports <</core-api/sorting-and-pagination, sorting and pagination>>.

### Example

```typescript
import {
    ProgramGatewaysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProgramGatewaysApi(configuration);

let count: number; //Number of Program Gateway resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let sortBy: 'lastModifiedTime' | '-lastModifiedTime'; //Field on which to sort. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as `lastModifiedTime`, and not by the field names appearing in response bodies such as `last_modified_time`. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.listProgramGateways(
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of Program Gateway resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**&#39;lastModifiedTime&#39; | &#39;-lastModifiedTime&#39;**]**Array<&#39;lastModifiedTime&#39; &#124; &#39;-lastModifiedTime&#39;>** | Field on which to sort. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order.  *NOTE:* You must sort using system field names such as &#x60;lastModifiedTime&#x60;, and not by the field names appearing in response bodies such as &#x60;last_modified_time&#x60;. | (optional) defaults to '-lastModifiedTime'|


### Return type

**ProgramGatewayPage**

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

# **retrieveProgramGateway**
> ProgramGatewayResponse retrieveProgramGateway()

Retrieve an existing Credit Program Gateway.

### Example

```typescript
import {
    ProgramGatewaysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProgramGatewaysApi(configuration);

let token: string; //Unique identifier of the Program Gateway to retrieve.  Send a `GET` request to `/credit/programgateways` to retrieve existing Program Gateway tokens. (default to undefined)

const { status, data } = await apiInstance.retrieveProgramGateway(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the Program Gateway to retrieve.  Send a &#x60;GET&#x60; request to &#x60;/credit/programgateways&#x60; to retrieve existing Program Gateway tokens. | defaults to undefined|


### Return type

**ProgramGatewayResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Response containing details for the requested Program Gateway. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProgramGateway**
> ProgramGatewayResponse updateProgramGateway(programGatewayUpdateReq)

Update an existing Credit Program Gateway.  You may want to update a Program Gateway if you are switching it to active or inactive, updating the URL, username, or password, and more.

### Example

```typescript
import {
    ProgramGatewaysApi,
    Configuration,
    ProgramGatewayUpdateReq
} from './api';

const configuration = new Configuration();
const apiInstance = new ProgramGatewaysApi(configuration);

let token: string; //Unique identifier of the Program Gateway to update. (default to undefined)
let programGatewayUpdateReq: ProgramGatewayUpdateReq; //

const { status, data } = await apiInstance.updateProgramGateway(
    token,
    programGatewayUpdateReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **programGatewayUpdateReq** | **ProgramGatewayUpdateReq**|  | |
| **token** | [**string**] | Unique identifier of the Program Gateway to update. | defaults to undefined|


### Return type

**ProgramGatewayResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Response containing updated Program Gateway. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

