# BusinessesApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getBusinessDirectorToken**](#getbusinessdirectortoken) | **GET** /businesses/{business_token}/directors/{token} | Returns a specific business director|
|[**getBusinessDirectorTokenSsn**](#getbusinessdirectortokenssn) | **GET** /businesses/{business_token}/directors/{token}/identifications | Returns a specific business director\&#39;s SSN|
|[**getBusinesses**](#getbusinesses) | **GET** /businesses | Lists all businesses|
|[**getBusinessesParenttokenChildren**](#getbusinessesparenttokenchildren) | **GET** /businesses/{parent_token}/children | Lists all children of a parent business|
|[**getBusinessesToken**](#getbusinessestoken) | **GET** /businesses/{token} | Returns a specific business|
|[**getBusinessesTokenNotes**](#getbusinessestokennotes) | **GET** /businesses/{token}/notes | Lists business notes|
|[**getBusinessesTokenSsn**](#getbusinessestokenssn) | **GET** /businesses/{token}/ssn | Returns a specific business proprietor\&#39;s SSN|
|[**postBusinesses**](#postbusinesses) | **POST** /businesses | Creates a business|
|[**postBusinessesLookup**](#postbusinesseslookup) | **POST** /businesses/lookup | Returns a specific business|
|[**postBusinessesTokenDirectors**](#postbusinessestokendirectors) | **POST** /businesses/{business_token}/directors | Creates a BusinessDirector for a business|
|[**postBusinessesTokenNotes**](#postbusinessestokennotes) | **POST** /businesses/{token}/notes | Creates a note for a business|
|[**putBusinessesToken**](#putbusinessestoken) | **PUT** /businesses/{token} | Updates a specific business|
|[**putBusinessesTokenBusinessDirectorToken**](#putbusinessestokenbusinessdirectortoken) | **PUT** /businesses/{business_token}/directors/{token} | Updates a specific business director for a business|
|[**putBusinessesTokenNotesNotestoken**](#putbusinessestokennotesnotestoken) | **PUT** /businesses/{token}/notes/{notes_token} | Updates a specific note for a business|

# **getBusinessDirectorToken**
> BusinessDirectorRequestModel getBusinessDirectorToken()


### Example

```typescript
import {
    BusinessesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessesApi(configuration);

let businessToken: string; //Business token (default to undefined)
let token: string; //Business Director token (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getBusinessDirectorToken(
    businessToken,
    token,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessToken** | [**string**] | Business token | defaults to undefined|
| **token** | [**string**] | Business Director token | defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**BusinessDirectorRequestModel**

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
|**404** | Business Director not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBusinessDirectorTokenSsn**
> SsnResponseModel getBusinessDirectorTokenSsn()


### Example

```typescript
import {
    BusinessesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessesApi(configuration);

let businessToken: string; //Business token (default to undefined)
let token: string; //Business Director token (default to undefined)
let fullSsn: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.getBusinessDirectorTokenSsn(
    businessToken,
    token,
    fullSsn
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessToken** | [**string**] | Business token | defaults to undefined|
| **token** | [**string**] | Business Director token | defaults to undefined|
| **fullSsn** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**SsnResponseModel**

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

# **getBusinesses**
> BusinessCardHolderListResponse getBusinesses()


### Example

```typescript
import {
    BusinessesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessesApi(configuration);

let count: number; //Number of users to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let businessNameDba: string; //Business name DBA (optional) (default to undefined)
let businessNameLegal: string; //Business name legal (optional) (default to undefined)
let searchType: string; //Search type (optional) (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Sort order (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getBusinesses(
    count,
    startIndex,
    businessNameDba,
    businessNameLegal,
    searchType,
    fields,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of users to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **businessNameDba** | [**string**] | Business name DBA | (optional) defaults to undefined|
| **businessNameLegal** | [**string**] | Business name legal | (optional) defaults to undefined|
| **searchType** | [**string**] | Search type | (optional) defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-lastModifiedTime'|


### Return type

**BusinessCardHolderListResponse**

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

# **getBusinessesParenttokenChildren**
> BusinessUserCardHolderListResponse getBusinessesParenttokenChildren()


### Example

```typescript
import {
    BusinessesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessesApi(configuration);

let parentToken: string; //Token of parent business (default to undefined)
let count: number; //Number of users to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Sort order (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getBusinessesParenttokenChildren(
    parentToken,
    count,
    startIndex,
    fields,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **parentToken** | [**string**] | Token of parent business | defaults to undefined|
| **count** | [**number**] | Number of users to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-lastModifiedTime'|


### Return type

**BusinessUserCardHolderListResponse**

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

# **getBusinessesToken**
> BusinessCardHolderResponse getBusinessesToken()


### Example

```typescript
import {
    BusinessesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessesApi(configuration);

let token: string; //Business token (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getBusinessesToken(
    token,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Business token | defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**BusinessCardHolderResponse**

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
|**404** | Business not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBusinessesTokenNotes**
> CardHolderNoteListResponse getBusinessesTokenNotes()


### Example

```typescript
import {
    BusinessesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessesApi(configuration);

let token: string; //Business token (default to undefined)
let startIndex: number; //Start index (optional) (default to 0)
let count: number; //Number of notes to retrieve (optional) (default to 5)
let createdBy: string; //Created by (optional) (default to undefined)
let createdByUserRole: string; //Comma-delimited list of created by user roles (optional) (default to undefined)
let includePrivate: boolean; //Include private notes and private fields in note response (optional) (default to undefined)
let searchType: string; //Search type (optional) (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Sort order (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getBusinessesTokenNotes(
    token,
    startIndex,
    count,
    createdBy,
    createdByUserRole,
    includePrivate,
    searchType,
    fields,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Business token | defaults to undefined|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **count** | [**number**] | Number of notes to retrieve | (optional) defaults to 5|
| **createdBy** | [**string**] | Created by | (optional) defaults to undefined|
| **createdByUserRole** | [**string**] | Comma-delimited list of created by user roles | (optional) defaults to undefined|
| **includePrivate** | [**boolean**] | Include private notes and private fields in note response | (optional) defaults to undefined|
| **searchType** | [**string**] | Search type | (optional) defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-lastModifiedTime'|


### Return type

**CardHolderNoteListResponse**

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
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Business not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBusinessesTokenSsn**
> SsnResponseModel getBusinessesTokenSsn()


### Example

```typescript
import {
    BusinessesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessesApi(configuration);

let token: string; //Business token (default to undefined)
let fullSsn: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.getBusinessesTokenSsn(
    token,
    fullSsn
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Business token | defaults to undefined|
| **fullSsn** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**SsnResponseModel**

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

# **postBusinesses**
> BusinessCardHolderResponse postBusinesses()


### Example

```typescript
import {
    BusinessesApi,
    Configuration,
    BusinessCardholder
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessesApi(configuration);

let businessCardholder: BusinessCardholder; // (optional)

const { status, data } = await apiInstance.postBusinesses(
    businessCardholder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessCardholder** | **BusinessCardholder**|  | |


### Return type

**BusinessCardHolderResponse**

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
|**409** | Request already processed with a different payload |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postBusinessesLookup**
> BusinessCardholder postBusinessesLookup()


### Example

```typescript
import {
    BusinessesApi,
    Configuration,
    DDARequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessesApi(configuration);

let dDARequest: DDARequest; // (optional)

const { status, data } = await apiInstance.postBusinessesLookup(
    dDARequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dDARequest** | **DDARequest**|  | |


### Return type

**BusinessCardholder**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | Business not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postBusinessesTokenDirectors**
> CardholderNoteResponseModel postBusinessesTokenDirectors()


### Example

```typescript
import {
    BusinessesApi,
    Configuration,
    BusinessDirectorRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessesApi(configuration);

let businessToken: string; //Business token (default to undefined)
let businessDirectorRequestModel: BusinessDirectorRequestModel; // (optional)

const { status, data } = await apiInstance.postBusinessesTokenDirectors(
    businessToken,
    businessDirectorRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessDirectorRequestModel** | **BusinessDirectorRequestModel**|  | |
| **businessToken** | [**string**] | Business token | defaults to undefined|


### Return type

**CardholderNoteResponseModel**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Success |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postBusinessesTokenNotes**
> CardholderNoteResponseModel postBusinessesTokenNotes()


### Example

```typescript
import {
    BusinessesApi,
    Configuration,
    CardholderNoteRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessesApi(configuration);

let token: string; //Business token (default to undefined)
let cardholderNoteRequestModel: CardholderNoteRequestModel; // (optional)

const { status, data } = await apiInstance.postBusinessesTokenNotes(
    token,
    cardholderNoteRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardholderNoteRequestModel** | **CardholderNoteRequestModel**|  | |
| **token** | [**string**] | Business token | defaults to undefined|


### Return type

**CardholderNoteResponseModel**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Success |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putBusinessesToken**
> BusinessCardholder putBusinessesToken(businessCardHolderUpdate)


### Example

```typescript
import {
    BusinessesApi,
    Configuration,
    BusinessCardHolderUpdate
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessesApi(configuration);

let token: string; //Business token (default to undefined)
let businessCardHolderUpdate: BusinessCardHolderUpdate; //Business object

const { status, data } = await apiInstance.putBusinessesToken(
    token,
    businessCardHolderUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessCardHolderUpdate** | **BusinessCardHolderUpdate**| Business object | |
| **token** | [**string**] | Business token | defaults to undefined|


### Return type

**BusinessCardholder**

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

# **putBusinessesTokenBusinessDirectorToken**
> BusinessDirectorResponseModel putBusinessesTokenBusinessDirectorToken()


### Example

```typescript
import {
    BusinessesApi,
    Configuration,
    BusinessDirectorRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessesApi(configuration);

let businessToken: string; //Business token (default to undefined)
let token: string; //Business Director token (default to undefined)
let businessDirectorRequestModel: BusinessDirectorRequestModel; // (optional)

const { status, data } = await apiInstance.putBusinessesTokenBusinessDirectorToken(
    businessToken,
    token,
    businessDirectorRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessDirectorRequestModel** | **BusinessDirectorRequestModel**|  | |
| **businessToken** | [**string**] | Business token | defaults to undefined|
| **token** | [**string**] | Business Director token | defaults to undefined|


### Return type

**BusinessDirectorResponseModel**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Success |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putBusinessesTokenNotesNotestoken**
> CardholderNoteResponseModel putBusinessesTokenNotesNotestoken()


### Example

```typescript
import {
    BusinessesApi,
    Configuration,
    CardholderNoteUpdateRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessesApi(configuration);

let token: string; //Business token (default to undefined)
let notesToken: string; //Notes token (default to undefined)
let cardholderNoteUpdateRequestModel: CardholderNoteUpdateRequestModel; // (optional)

const { status, data } = await apiInstance.putBusinessesTokenNotesNotestoken(
    token,
    notesToken,
    cardholderNoteUpdateRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardholderNoteUpdateRequestModel** | **CardholderNoteUpdateRequestModel**|  | |
| **token** | [**string**] | Business token | defaults to undefined|
| **notesToken** | [**string**] | Notes token | defaults to undefined|


### Return type

**CardholderNoteResponseModel**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Success |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

