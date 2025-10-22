# FundingSourcesApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAchPartnerLinkedFundingSourceBalance**](#getachpartnerlinkedfundingsourcebalance) | **GET** /fundingsources/ach/partner/{funding_source_token}/balance | Retrieves a linked funding source balance from a partner|
|[**getAllACHFundingSources**](#getallachfundingsources) | **GET** /fundingsources/program/ach | Returns a list of Program ACH funding sources|
|[**getFundingsourcesAchFundingsourcetoken**](#getfundingsourcesachfundingsourcetoken) | **GET** /fundingsources/ach/{funding_source_token} | Returns a user ACH account|
|[**getFundingsourcesAchFundingsourcetokenVerificationamounts**](#getfundingsourcesachfundingsourcetokenverificationamounts) | **GET** /fundingsources/ach/{funding_source_token}/verificationamounts | Returns the dollar amounts used to verify the ACH account|
|[**getFundingsourcesAddressesBusinessBusinesstoken**](#getfundingsourcesaddressesbusinessbusinesstoken) | **GET** /fundingsources/addresses/business/{business_token} | Lists all addresses for a business|
|[**getFundingsourcesAddressesFundingsourceaddresstoken**](#getfundingsourcesaddressesfundingsourceaddresstoken) | **GET** /fundingsources/addresses/{funding_source_address_token} | Returns a user address for a funding source|
|[**getFundingsourcesAddressesUserUsertoken**](#getfundingsourcesaddressesuserusertoken) | **GET** /fundingsources/addresses/user/{user_token} | Lists all addresses for a user|
|[**getFundingsourcesBusinessBusinesstoken**](#getfundingsourcesbusinessbusinesstoken) | **GET** /fundingsources/business/{business_token} | Lists all funding sources for a business|
|[**getFundingsourcesPaymentcardFundingsourcetoken**](#getfundingsourcespaymentcardfundingsourcetoken) | **GET** /fundingsources/paymentcard/{funding_source_token} | Returns a specific payment card|
|[**getFundingsourcesProgramToken**](#getfundingsourcesprogramtoken) | **GET** /fundingsources/program/{token} | Returns a specific program funding source|
|[**getFundingsourcesProgramgatewayToken**](#getfundingsourcesprogramgatewaytoken) | **GET** /fundingsources/programgateway/{token} | Returns a gateway program funding source|
|[**getFundingsourcesUserUsertoken**](#getfundingsourcesuserusertoken) | **GET** /fundingsources/user/{user_token} | Lists all funding sources for a user|
|[**postFundingsourcesAch**](#postfundingsourcesach) | **POST** /fundingsources/ach | Registers an ACH funding source|
|[**postFundingsourcesAchPartner**](#postfundingsourcesachpartner) | **POST** /fundingsources/ach/partner | Registers an ACH funding source through a partner|
|[**postFundingsourcesAddresses**](#postfundingsourcesaddresses) | **POST** /fundingsources/addresses | Creates an account holder address for a funding source|
|[**postFundingsourcesPaymentcard**](#postfundingsourcespaymentcard) | **POST** /fundingsources/paymentcard | Registers a payment card funding source|
|[**postFundingsourcesProgram**](#postfundingsourcesprogram) | **POST** /fundingsources/program | Creates a program funding source|
|[**postFundingsourcesProgramAch**](#postfundingsourcesprogramach) | **POST** /fundingsources/program/ach | Registers an ACH funding source for a program|
|[**postFundingsourcesProgramgateway**](#postfundingsourcesprogramgateway) | **POST** /fundingsources/programgateway | Creates a gateway program funding source|
|[**putFundingsourcesAchFundingsourcetoken**](#putfundingsourcesachfundingsourcetoken) | **PUT** /fundingsources/ach/{funding_source_token} | Verifies a bank account as a funding source|
|[**putFundingsourcesAddressesFundingsourceaddresstoken**](#putfundingsourcesaddressesfundingsourceaddresstoken) | **PUT** /fundingsources/addresses/{funding_source_address_token} | Updates the account holder address for a funding source|
|[**putFundingsourcesFundingsourcetoken**](#putfundingsourcesfundingsourcetoken) | **PUT** /fundingsources/paymentcard/{funding_source_token} | Updates a specific payment card |
|[**putFundingsourcesFundingsourcetokenDefault**](#putfundingsourcesfundingsourcetokendefault) | **PUT** /fundingsources/{funding_source_token}/default | Configures a default funding source|
|[**putFundingsourcesProgramToken**](#putfundingsourcesprogramtoken) | **PUT** /fundingsources/program/{token} | Updates a specific program funding source|
|[**putFundingsourcesProgramgatewayCustomHeaderToken**](#putfundingsourcesprogramgatewaycustomheadertoken) | **PUT** /fundingsources/programgateway/customheaders/{token} | Updates a specific gateway program funding source Custom headers|
|[**putFundingsourcesProgramgatewayToken**](#putfundingsourcesprogramgatewaytoken) | **PUT** /fundingsources/programgateway/{token} | Updates a specific gateway program funding source|

# **getAchPartnerLinkedFundingSourceBalance**
> LinkedAccountBalanceResponse getAchPartnerLinkedFundingSourceBalance()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let fundingSourceToken: string; //Funding source token (default to undefined)

const { status, data } = await apiInstance.getAchPartnerLinkedFundingSourceBalance(
    fundingSourceToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fundingSourceToken** | [**string**] | Funding source token | defaults to undefined|


### Return type

**LinkedAccountBalanceResponse**

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
|**404** | Not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllACHFundingSources**
> ACHListResponse getAllACHFundingSources()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let count: number; //Number of items to retrieve. Count can be between 1 - 10 items. (optional) (default to 5)
let startIndex: number; //Indicates from what row to start returning data. (optional) (default to 0)
let fields: string; //Comma delimited list of fields to return (e.g. field_1,field_2,..) (optional) (default to undefined)
let sortBy: string; //Sort order (optional) (default to '-lastModifiedTime')
let active: boolean; //Returns programs with this active state (optional) (default to undefined)

const { status, data } = await apiInstance.getAllACHFundingSources(
    count,
    startIndex,
    fields,
    sortBy,
    active
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of items to retrieve. Count can be between 1 - 10 items. | (optional) defaults to 5|
| **startIndex** | [**number**] | Indicates from what row to start returning data. | (optional) defaults to 0|
| **fields** | [**string**] | Comma delimited list of fields to return (e.g. field_1,field_2,..) | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-lastModifiedTime'|
| **active** | [**boolean**] | Returns programs with this active state | (optional) defaults to undefined|


### Return type

**ACHListResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**404** | Not Found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFundingsourcesAchFundingsourcetoken**
> AchResponseModel getFundingsourcesAchFundingsourcetoken()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let fundingSourceToken: string; //Funding account token (default to undefined)

const { status, data } = await apiInstance.getFundingsourcesAchFundingsourcetoken(
    fundingSourceToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fundingSourceToken** | [**string**] | Funding account token | defaults to undefined|


### Return type

**AchResponseModel**

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
|**404** | Not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFundingsourcesAchFundingsourcetokenVerificationamounts**
> AchVerificationModel getFundingsourcesAchFundingsourcetokenVerificationamounts()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let fundingSourceToken: string; //Funding account token (default to undefined)

const { status, data } = await apiInstance.getFundingsourcesAchFundingsourcetokenVerificationamounts(
    fundingSourceToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fundingSourceToken** | [**string**] | Funding account token | defaults to undefined|


### Return type

**AchVerificationModel**

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

# **getFundingsourcesAddressesBusinessBusinesstoken**
> CardholderAddressListResponse getFundingsourcesAddressesBusinessBusinesstoken()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let businessToken: string; //Business token (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getFundingsourcesAddressesBusinessBusinesstoken(
    businessToken,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessToken** | [**string**] | Business token | defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**CardholderAddressListResponse**

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
|**404** | Not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFundingsourcesAddressesFundingsourceaddresstoken**
> CardholderAddressResponse getFundingsourcesAddressesFundingsourceaddresstoken()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let fundingSourceAddressToken: string; //Funding source address token (default to undefined)

const { status, data } = await apiInstance.getFundingsourcesAddressesFundingsourceaddresstoken(
    fundingSourceAddressToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fundingSourceAddressToken** | [**string**] | Funding source address token | defaults to undefined|


### Return type

**CardholderAddressResponse**

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
|**404** | Not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFundingsourcesAddressesUserUsertoken**
> CardholderAddressListResponse getFundingsourcesAddressesUserUsertoken()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let userToken: string; //User token (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getFundingsourcesAddressesUserUsertoken(
    userToken,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userToken** | [**string**] | User token | defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**CardholderAddressListResponse**

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
|**404** | Not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFundingsourcesBusinessBusinesstoken**
> FundingAccountListResponse getFundingsourcesBusinessBusinesstoken()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let businessToken: string; //Business token (default to undefined)
let type: string; //Type, such as a payment card or ACH (optional) (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getFundingsourcesBusinessBusinesstoken(
    businessToken,
    type,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessToken** | [**string**] | Business token | defaults to undefined|
| **type** | [**string**] | Type, such as a payment card or ACH | (optional) defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**FundingAccountListResponse**

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
|**404** | No funding accounts found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFundingsourcesPaymentcardFundingsourcetoken**
> PaymentCardResponseModel getFundingsourcesPaymentcardFundingsourcetoken()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let fundingSourceToken: string; //Funding token (default to undefined)

const { status, data } = await apiInstance.getFundingsourcesPaymentcardFundingsourcetoken(
    fundingSourceToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fundingSourceToken** | [**string**] | Funding token | defaults to undefined|


### Return type

**PaymentCardResponseModel**

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
|**404** | Not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFundingsourcesProgramToken**
> ProgramFundingSourceResponse getFundingsourcesProgramToken()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let token: string; //Program funding source token (default to undefined)

const { status, data } = await apiInstance.getFundingsourcesProgramToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Program funding source token | defaults to undefined|


### Return type

**ProgramFundingSourceResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Success |  -  |
|**404** | Program funding source not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFundingsourcesProgramgatewayToken**
> GatewayProgramFundingSourceResponse getFundingsourcesProgramgatewayToken()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let token: string; //Gateway program funding source token (default to undefined)

const { status, data } = await apiInstance.getFundingsourcesProgramgatewayToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Gateway program funding source token | defaults to undefined|


### Return type

**GatewayProgramFundingSourceResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Success |  -  |
|**404** | Gateway program funding source not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFundingsourcesUserUsertoken**
> FundingAccountListResponse getFundingsourcesUserUsertoken()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let userToken: string; //User token (default to undefined)
let type: string; //Type, such as a payment card or ACH (optional) (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getFundingsourcesUserUsertoken(
    userToken,
    type,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userToken** | [**string**] | User token | defaults to undefined|
| **type** | [**string**] | Type, such as a payment card or ACH | (optional) defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**FundingAccountListResponse**

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
|**404** | No funding accounts found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postFundingsourcesAch**
> AchResponseModel postFundingsourcesAch()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration,
    AchModel
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let achModel: AchModel; // (optional)

const { status, data } = await apiInstance.postFundingsourcesAch(
    achModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **achModel** | **AchModel**|  | |


### Return type

**AchResponseModel**

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
|**409** | Token already associated with a different payload |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postFundingsourcesAchPartner**
> AchResponseModel postFundingsourcesAchPartner()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration,
    AchPartnerRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let achPartnerRequestModel: AchPartnerRequestModel; // (optional)

const { status, data } = await apiInstance.postFundingsourcesAchPartner(
    achPartnerRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **achPartnerRequestModel** | **AchPartnerRequestModel**|  | |


### Return type

**AchResponseModel**

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
|**409** | Token already associated with a different payload |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postFundingsourcesAddresses**
> CardholderAddressResponse postFundingsourcesAddresses()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration,
    CardHolderAddressModel
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let cardHolderAddressModel: CardHolderAddressModel; // (optional)

const { status, data } = await apiInstance.postFundingsourcesAddresses(
    cardHolderAddressModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardHolderAddressModel** | **CardHolderAddressModel**|  | |


### Return type

**CardholderAddressResponse**

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

# **postFundingsourcesPaymentcard**
> PaymentCardResponseModel postFundingsourcesPaymentcard()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration,
    TokenRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let tokenRequest: TokenRequest; // (optional)

const { status, data } = await apiInstance.postFundingsourcesPaymentcard(
    tokenRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tokenRequest** | **TokenRequest**|  | |


### Return type

**PaymentCardResponseModel**

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
|**409** | Token already associated with a different payload |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postFundingsourcesProgram**
> ProgramFundingSourceResponse postFundingsourcesProgram()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration,
    ProgramFundingSourceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let programFundingSourceRequest: ProgramFundingSourceRequest; // (optional)

const { status, data } = await apiInstance.postFundingsourcesProgram(
    programFundingSourceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **programFundingSourceRequest** | **ProgramFundingSourceRequest**|  | |


### Return type

**ProgramFundingSourceResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Success |  -  |
|**400** | Invalid fields detected |  -  |
|**409** | Request already processed with a different payload |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postFundingsourcesProgramAch**
> BaseAchResponseModel postFundingsourcesProgramAch()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration,
    BaseAchRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let baseAchRequestModel: BaseAchRequestModel; // (optional)

const { status, data } = await apiInstance.postFundingsourcesProgramAch(
    baseAchRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseAchRequestModel** | **BaseAchRequestModel**|  | |


### Return type

**BaseAchResponseModel**

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
|**409** | Token already associated with a different payload |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postFundingsourcesProgramgateway**
> GatewayProgramFundingSourceResponse postFundingsourcesProgramgateway()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration,
    GatewayProgramFundingSourceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let gatewayProgramFundingSourceRequest: GatewayProgramFundingSourceRequest; // (optional)

const { status, data } = await apiInstance.postFundingsourcesProgramgateway(
    gatewayProgramFundingSourceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayProgramFundingSourceRequest** | **GatewayProgramFundingSourceRequest**|  | |


### Return type

**GatewayProgramFundingSourceResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Success |  -  |
|**400** | Invalid fields detected |  -  |
|**409** | Request already processed with a different payload |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putFundingsourcesAchFundingsourcetoken**
> AchResponseModel putFundingsourcesAchFundingsourcetoken()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration,
    AchVerificationModel
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let fundingSourceToken: string; // (default to undefined)
let achVerificationModel: AchVerificationModel; // (optional)

const { status, data } = await apiInstance.putFundingsourcesAchFundingsourcetoken(
    fundingSourceToken,
    achVerificationModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **achVerificationModel** | **AchVerificationModel**|  | |
| **fundingSourceToken** | [**string**] |  | defaults to undefined|


### Return type

**AchResponseModel**

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

# **putFundingsourcesAddressesFundingsourceaddresstoken**
> CardholderAddressResponse putFundingsourcesAddressesFundingsourceaddresstoken()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration,
    CardHolderAddressUpdateModel
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let fundingSourceAddressToken: string; //Funding source address token (default to undefined)
let cardHolderAddressUpdateModel: CardHolderAddressUpdateModel; // (optional)

const { status, data } = await apiInstance.putFundingsourcesAddressesFundingsourceaddresstoken(
    fundingSourceAddressToken,
    cardHolderAddressUpdateModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardHolderAddressUpdateModel** | **CardHolderAddressUpdateModel**|  | |
| **fundingSourceAddressToken** | [**string**] | Funding source address token | defaults to undefined|


### Return type

**CardholderAddressResponse**

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

# **putFundingsourcesFundingsourcetoken**
> PaymentCardResponseModel putFundingsourcesFundingsourcetoken(tokenUpdateRequest)


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration,
    TokenUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let fundingSourceToken: string; //Funding account token (default to undefined)
let tokenUpdateRequest: TokenUpdateRequest; //Payment card

const { status, data } = await apiInstance.putFundingsourcesFundingsourcetoken(
    fundingSourceToken,
    tokenUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tokenUpdateRequest** | **TokenUpdateRequest**| Payment card | |
| **fundingSourceToken** | [**string**] | Funding account token | defaults to undefined|


### Return type

**PaymentCardResponseModel**

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

# **putFundingsourcesFundingsourcetokenDefault**
> PaymentCardResponseModel putFundingsourcesFundingsourcetokenDefault()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let fundingSourceToken: string; //Funding account (default to undefined)

const { status, data } = await apiInstance.putFundingsourcesFundingsourcetokenDefault(
    fundingSourceToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fundingSourceToken** | [**string**] | Funding account | defaults to undefined|


### Return type

**PaymentCardResponseModel**

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

# **putFundingsourcesProgramToken**
> ProgramFundingSourceResponse putFundingsourcesProgramToken()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration,
    ProgramFundingSourceUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let token: string; //Program funding source token (default to undefined)
let programFundingSourceUpdateRequest: ProgramFundingSourceUpdateRequest; // (optional)

const { status, data } = await apiInstance.putFundingsourcesProgramToken(
    token,
    programFundingSourceUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **programFundingSourceUpdateRequest** | **ProgramFundingSourceUpdateRequest**|  | |
| **token** | [**string**] | Program funding source token | defaults to undefined|


### Return type

**ProgramFundingSourceResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Invalid fields detected |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putFundingsourcesProgramgatewayCustomHeaderToken**
> GatewayProgramFundingSourceResponse putFundingsourcesProgramgatewayCustomHeaderToken()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration,
    GatewayProgramCustomHeaderUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let token: string; //Gateway program funding source token (default to undefined)
let gatewayProgramCustomHeaderUpdateRequest: GatewayProgramCustomHeaderUpdateRequest; // (optional)

const { status, data } = await apiInstance.putFundingsourcesProgramgatewayCustomHeaderToken(
    token,
    gatewayProgramCustomHeaderUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayProgramCustomHeaderUpdateRequest** | **GatewayProgramCustomHeaderUpdateRequest**|  | |
| **token** | [**string**] | Gateway program funding source token | defaults to undefined|


### Return type

**GatewayProgramFundingSourceResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Invalid fields detected |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putFundingsourcesProgramgatewayToken**
> GatewayProgramFundingSourceResponse putFundingsourcesProgramgatewayToken()


### Example

```typescript
import {
    FundingSourcesApi,
    Configuration,
    GatewayProgramFundingSourceUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FundingSourcesApi(configuration);

let token: string; //Gateway program funding source token (default to undefined)
let gatewayProgramFundingSourceUpdateRequest: GatewayProgramFundingSourceUpdateRequest; // (optional)

const { status, data } = await apiInstance.putFundingsourcesProgramgatewayToken(
    token,
    gatewayProgramFundingSourceUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayProgramFundingSourceUpdateRequest** | **GatewayProgramFundingSourceUpdateRequest**|  | |
| **token** | [**string**] | Gateway program funding source token | defaults to undefined|


### Return type

**GatewayProgramFundingSourceResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Invalid fields detected |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

