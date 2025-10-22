# CardsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCards**](#getcards) | **GET** /cards | Lists cards by the last 4 digits|
|[**getCardsBarcodeBarcode**](#getcardsbarcodebarcode) | **GET** /cards/barcode/{barcode} | Returns a card\&#39;s metadata|
|[**getCardsToken**](#getcardstoken) | **GET** /cards/{token} | Returns a specific card|
|[**getCardsTokenShowpan**](#getcardstokenshowpan) | **GET** /cards/{token}/showpan | Returns a specific card - PAN visible|
|[**getCardsUserToken**](#getcardsusertoken) | **GET** /cards/user/{token} | Lists all cards for a specific user|
|[**postCards**](#postcards) | **POST** /cards | Creates a card|
|[**postCardsGetbypan**](#postcardsgetbypan) | **POST** /cards/getbypan | Returns user and card tokens for the specified PAN|
|[**putCardsToken**](#putcardstoken) | **PUT** /cards/{token} | Updates a specific card|

# **getCards**
> CardListResponse getCards()


### Example

```typescript
import {
    CardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let lastFour: string; //Last four digits of card number (default to undefined)
let count: number; //Number of cards to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Sort order (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getCards(
    lastFour,
    count,
    startIndex,
    fields,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lastFour** | [**string**] | Last four digits of card number | defaults to undefined|
| **count** | [**number**] | Number of cards to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-lastModifiedTime'|


### Return type

**CardListResponse**

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

# **getCardsBarcodeBarcode**
> CardResponse getCardsBarcodeBarcode()


### Example

```typescript
import {
    CardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let barcode: string; //Barcode (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getCardsBarcodeBarcode(
    barcode,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **barcode** | [**string**] | Barcode | defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**CardResponse**

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
|**404** | Card does not exist |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCardsToken**
> CardResponse getCardsToken()


### Example

```typescript
import {
    CardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let token: string; //Card token (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let expand: string; //Object to expand (optional) (default to undefined)

const { status, data } = await apiInstance.getCardsToken(
    token,
    fields,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Card token | defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **expand** | [**string**] | Object to expand | (optional) defaults to undefined|


### Return type

**CardResponse**

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
|**404** | Card not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCardsTokenShowpan**
> CardResponse getCardsTokenShowpan()


### Example

```typescript
import {
    CardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let token: string; //Card token (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let showCvvNumber: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.getCardsTokenShowpan(
    token,
    fields,
    showCvvNumber
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Card token | defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **showCvvNumber** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**CardResponse**

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
|**404** | Card not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCardsUserToken**
> CardListResponse getCardsUserToken()


### Example

```typescript
import {
    CardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let token: string; //User token (default to undefined)
let count: number; //Number of items to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Sort order (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getCardsUserToken(
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
| **token** | [**string**] | User token | defaults to undefined|
| **count** | [**number**] | Number of items to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-lastModifiedTime'|


### Return type

**CardListResponse**

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
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postCards**
> CardResponse postCards()


### Example

```typescript
import {
    CardsApi,
    Configuration,
    CardRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let showCvvNumber: boolean; //Show CVV (optional) (default to false)
let showPan: boolean; //Show PAN (optional) (default to false)
let cardRequest: CardRequest; // (optional)

const { status, data } = await apiInstance.postCards(
    showCvvNumber,
    showPan,
    cardRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardRequest** | **CardRequest**|  | |
| **showCvvNumber** | [**boolean**] | Show CVV | (optional) defaults to false|
| **showPan** | [**boolean**] | Show PAN | (optional) defaults to false|


### Return type

**CardResponse**

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
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postCardsGetbypan**
> PanResponse postCardsGetbypan()


### Example

```typescript
import {
    CardsApi,
    Configuration,
    PanRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let panRequest: PanRequest; // (optional)

const { status, data } = await apiInstance.postCardsGetbypan(
    panRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **panRequest** | **PanRequest**|  | |


### Return type

**PanResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | User input error/Bad request |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putCardsToken**
> CardResponse putCardsToken()


### Example

```typescript
import {
    CardsApi,
    Configuration,
    CardUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let token: string; //Card token (default to undefined)
let cardUpdateRequest: CardUpdateRequest; // (optional)

const { status, data } = await apiInstance.putCardsToken(
    token,
    cardUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardUpdateRequest** | **CardUpdateRequest**|  | |
| **token** | [**string**] | Card token | defaults to undefined|


### Return type

**CardResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | User input error/Bad request |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

