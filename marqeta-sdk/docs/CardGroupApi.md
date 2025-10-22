# CardGroupApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCardGroup**](#createcardgroup) | **POST** /cardgroups | Create Card Group|
|[**listCardGroups**](#listcardgroups) | **GET** /cardgroups | List Card Groups|
|[**retrieveCardGroup**](#retrievecardgroup) | **GET** /cardgroups/{token} | Retrieve Card Group|

# **createCardGroup**
> CardGroup createCardGroup(cardGroupReq)

Create a new card group object

### Example

```typescript
import {
    CardGroupApi,
    Configuration,
    CardGroupReq
} from './api';

const configuration = new Configuration();
const apiInstance = new CardGroupApi(configuration);

let cardGroupReq: CardGroupReq; //Card group to create.

const { status, data } = await apiInstance.createCardGroup(
    cardGroupReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardGroupReq** | **CardGroupReq**| Card group to create. | |


### Return type

**CardGroup**

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

# **listCardGroups**
> CardGroupPage listCardGroups()

Get a list of all card groups in the program

### Example

```typescript
import {
    CardGroupApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CardGroupApi(configuration);

let cardTokens: Array<string>; //list of unique card identifiers to retrieve. (optional) (default to undefined)
let count: number; //Number of card group resources to retrieve. (optional) (default to undefined)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to undefined)

const { status, data } = await apiInstance.listCardGroups(
    cardTokens,
    count,
    startIndex
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardTokens** | **Array&lt;string&gt;** | list of unique card identifiers to retrieve. | (optional) defaults to undefined|
| **count** | [**number**] | Number of card group resources to retrieve. | (optional) defaults to undefined|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to undefined|


### Return type

**CardGroupPage**

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

# **retrieveCardGroup**
> CardGroup retrieveCardGroup()

Retrieves the Card Group with the given token

### Example

```typescript
import {
    CardGroupApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CardGroupApi(configuration);

let token: string; //Unique identifier of the card group to retrieve (default to undefined)

const { status, data } = await apiInstance.retrieveCardGroup(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the card group to retrieve | defaults to undefined|


### Return type

**CardGroup**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing &#x60;card_group&#x60; information. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

