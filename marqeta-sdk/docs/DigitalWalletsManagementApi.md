# DigitalWalletsManagementApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAdditionalAliases**](#createadditionalaliases) | **POST** /digitalwallets/aliasdirectory/visa/aliases/{aliasId}/additionalAlias | Create an additional alias|
|[**createAlias**](#createalias) | **POST** /digitalwallets/aliasdirectory/visa/aliases | Create an alias|
|[**createCardByAlias**](#createcardbyalias) | **POST** /digitalwallets/aliasdirectory/visa/aliases/{aliasId}/cards | Create alias payment credential|
|[**createReport**](#createreport) | **POST** /digitalwallets/aliasdirectory/visa/reports | Create a report request|
|[**deleteAdditionalAliasById**](#deleteadditionalaliasbyid) | **DELETE** /digitalwallets/aliasdirectory/visa/additionalAliases/{additionalAliasId} | Delete an additional alias|
|[**deleteAliasById**](#deletealiasbyid) | **DELETE** /digitalwallets/aliasdirectory/visa/aliases/{aliasId} | Delete alias by alias ID|
|[**deleteCardByCardToken**](#deletecardbycardtoken) | **DELETE** /digitalwallets/aliasdirectory/visa/cards/{cardToken} | Delete card token payment credential|
|[**deleteCardHolderInfo**](#deletecardholderinfo) | **DELETE** /clicktopay/visa/users | Delete cardholder information for Click to Pay for Visa|
|[**deleteCardInfo**](#deletecardinfo) | **DELETE** /clicktopay/visa/cards | Delete card information for Click to Pay for Visa|
|[**enrollCard**](#enrollcard) | **POST** /clicktopay/visa/enrollcards | Enroll a card to Click to Pay for Visa|
|[**enrollCardholder**](#enrollcardholder) | **POST** /clicktopay/visa/enroll | Enroll a cardholder to Click to Pay for Visa|
|[**generateApplePayWPPJWT**](#generateapplepaywppjwt) | **POST** /digitalwallets/wpp/applePayJWT | Create request for Apple Wallet web push provisioning|
|[**getAliasByExternalId**](#getaliasbyexternalid) | **POST** /digitalwallets/aliasdirectory/visa/aliases/getByExternalId | Retrieve alias by external ID|
|[**getAliasById**](#getaliasbyid) | **GET** /digitalwallets/aliasdirectory/visa/aliases/{aliasId} | Retrieve alias by alias ID|
|[**getAliasIdByValue**](#getaliasidbyvalue) | **POST** /digitalwallets/aliasdirectory/visa/aliases/aliasId | Retrieve alias internal ID|
|[**getCardByCardToken**](#getcardbycardtoken) | **GET** /digitalwallets/aliasdirectory/visa/cards/{cardToken} | Retrieve card token payment credential|
|[**getCardsByAlias**](#getcardsbyalias) | **GET** /digitalwallets/aliasdirectory/visa/aliases/{aliasId}/cards | Retrieve alias payment credentials|
|[**getClicktopayMastercardCheckeligibility**](#getclicktopaymastercardcheckeligibility) | **GET** /digitalwallets/clicktopay/mastercard/checkeligibility | Check eligibility for Click to Pay for Mastercard|
|[**getClicktopayMastercardStatusToken**](#getclicktopaymastercardstatustoken) | **GET** /digitalwallets/clicktopay/mastercard/status/{token} | Retrieve Click to Pay for Mastercard enrollment status|
|[**getDigitalwallettokens**](#getdigitalwallettokens) | **GET** /digitalwallettokens | List digital wallet tokens|
|[**getDigitalwallettokensCardCardtoken**](#getdigitalwallettokenscardcardtoken) | **GET** /digitalwallettokens/card/{card_token} | List digital wallet tokens for card|
|[**getDigitalwallettokensToken**](#getdigitalwallettokenstoken) | **GET** /digitalwallettokens/{token} | Retrieve digital wallet token|
|[**getDigitalwallettokensTokenShowtokenpan**](#getdigitalwallettokenstokenshowtokenpan) | **GET** /digitalwallettokens/{token}/showtokenpan | Retrieve digital wallet token PAN|
|[**getDigitalwallettokentransitionsDigitalwallettokenToken**](#getdigitalwallettokentransitionsdigitalwallettokentoken) | **GET** /digitalwallettokentransitions/digitalwallettoken/{token} | List transitions for digital wallet token|
|[**getDigitalwallettokentransitionsToken**](#getdigitalwallettokentransitionstoken) | **GET** /digitalwallettokentransitions/{token} | Retrieve digital wallet token transition|
|[**getFileByReportAndFileId**](#getfilebyreportandfileid) | **GET** /digitalwallets/aliasdirectory/visa/reports/{reportId}/file/{fileId} | Retrieve file by file ID and report ID|
|[**getReportById**](#getreportbyid) | **GET** /digitalwallets/aliasdirectory/visa/reports/{reportId} | Retrieve report status by report ID|
|[**getStatus**](#getstatus) | **GET** /clicktopay/visa/status/{requestTraceId} | Retrieve Click to Pay for Visa request status|
|[**getUserData**](#getuserdata) | **GET** /clicktopay/visa/getdata/{user_token} | Retrieve user data for Click to Pay for Visa|
|[**postClicktopayMastercardEnroll**](#postclicktopaymastercardenroll) | **POST** /digitalwallets/clicktopay/mastercard/enroll | Enroll a card to Click to Pay for Mastercard|
|[**postDigitalwalletprovisionrequestsAndroidpay**](#postdigitalwalletprovisionrequestsandroidpay) | **POST** /digitalwalletprovisionrequests/androidpay | Create digital wallet token provisioning request for Google Wallet|
|[**postDigitalwalletprovisionrequestsApplepay**](#postdigitalwalletprovisionrequestsapplepay) | **POST** /digitalwalletprovisionrequests/applepay | Create digital wallet token provisioning request for Apple Wallet|
|[**postDigitalwalletprovisionrequestsSamsungpay**](#postdigitalwalletprovisionrequestssamsungpay) | **POST** /digitalwalletprovisionrequests/samsungpay | Create digital wallet token provisioning request for Samsung Wallet|
|[**postDigitalwalletprovisionrequestsXPay**](#postdigitalwalletprovisionrequestsxpay) | **POST** /digitalwalletprovisionrequests/xpay | Create digital wallet token provisioning request for XPay|
|[**postDigitalwallettokentransitions**](#postdigitalwallettokentransitions) | **POST** /digitalwallettokentransitions | Create digital wallet token transition|
|[**postTokenizationAuthenticationDecision**](#posttokenizationauthenticationdecision) | **POST** /digitalwallets/postTokenizationAuthenticationDecision | |
|[**sendOPCDataToGooglePay**](#sendopcdatatogooglepay) | **POST** /digitalwallets/wpp/googlePayPushProvisioningNotification | Create request for Google Wallet web push provisioning|
|[**updateAliasById**](#updatealiasbyid) | **PUT** /digitalwallets/aliasdirectory/visa/aliases/{aliasId} | Update alias by alias ID|
|[**updateAliasStatus**](#updatealiasstatus) | **PUT** /digitalwallets/aliasdirectory/visa/aliases/{aliasId}/status | Update alias status|
|[**updateCardByCardToken**](#updatecardbycardtoken) | **PUT** /digitalwallets/aliasdirectory/visa/cards/{cardToken} | Update card token payment credential|
|[**updateCardHolderInfo**](#updatecardholderinfo) | **PUT** /clicktopay/visa/users | Update cardholder information for Click to Pay for Visa|
|[**updateCardInfo**](#updatecardinfo) | **PUT** /clicktopay/visa/cards | Update card information for Click to Pay for Visa|

# **createAdditionalAliases**
> AdsCreateAdditionalAliasResponse createAdditionalAliases(adsCreateAdditionalAliasesRequest)

Use this endpoint to create additional aliases associated with an existing main alias.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    AdsCreateAdditionalAliasesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let aliasId: string; //Unique identifier of the Visa Alias. (default to undefined)
let reqSysId: string; // (default to undefined)
let adsCreateAdditionalAliasesRequest: AdsCreateAdditionalAliasesRequest; //

const { status, data } = await apiInstance.createAdditionalAliases(
    aliasId,
    reqSysId,
    adsCreateAdditionalAliasesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adsCreateAdditionalAliasesRequest** | **AdsCreateAdditionalAliasesRequest**|  | |
| **aliasId** | [**string**] | Unique identifier of the Visa Alias. | defaults to undefined|
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

**AdsCreateAdditionalAliasResponse**

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
|**422** | Unprocessable entity |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createAlias**
> AdsCreateAliasResponse createAlias(adsCreateAliasRequest)

Use this endpoint to create an alias.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    AdsCreateAliasRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let reqSysId: string; // (default to undefined)
let adsCreateAliasRequest: AdsCreateAliasRequest; //

const { status, data } = await apiInstance.createAlias(
    reqSysId,
    adsCreateAliasRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adsCreateAliasRequest** | **AdsCreateAliasRequest**|  | |
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

**AdsCreateAliasResponse**

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
|**422** | Unprocessable entity |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCardByAlias**
> AdsCreateCardDetailsResponse createCardByAlias(adsCardDetailsRequest)

Use this endpoint to create a payment credential associated with an alias.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    AdsCardDetailsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let aliasId: string; //Unique identifier of the Visa Alias. (default to undefined)
let reqSysId: string; // (default to undefined)
let adsCardDetailsRequest: AdsCardDetailsRequest; //

const { status, data } = await apiInstance.createCardByAlias(
    aliasId,
    reqSysId,
    adsCardDetailsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adsCardDetailsRequest** | **AdsCardDetailsRequest**|  | |
| **aliasId** | [**string**] | Unique identifier of the Visa Alias. | defaults to undefined|
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

**AdsCreateCardDetailsResponse**

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
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createReport**
> CreateReport200Response createReport(adsCreateReportRequest)

Use this endpoint to create a new report request.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    AdsCreateReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let reqSysId: string; // (default to undefined)
let adsCreateReportRequest: AdsCreateReportRequest; //

const { status, data } = await apiInstance.createReport(
    reqSysId,
    adsCreateReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adsCreateReportRequest** | **AdsCreateReportRequest**|  | |
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

**CreateReport200Response**

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
|**422** | Unprocessable entity |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAdditionalAliasById**
> deleteAdditionalAliasById()

Use this endpoint to delete an additional alias by additional alias ID.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let additionalAliasId: string; //Unique identifier of the additional alias. (default to undefined)
let reqSysId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAdditionalAliasById(
    additionalAliasId,
    reqSysId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **additionalAliasId** | [**string**] | Unique identifier of the additional alias. | defaults to undefined|
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Success |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAliasById**
> deleteAliasById()

Use this endpoint to delete an alias by alias ID.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let aliasId: string; //Unique identifier of the Visa Alias. (default to undefined)
let reqSysId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAliasById(
    aliasId,
    reqSysId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aliasId** | [**string**] | Unique identifier of the Visa Alias. | defaults to undefined|
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Success |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCardByCardToken**
> deleteCardByCardToken()

Use this endpoint to delete a payment credential associated with a card token.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let cardToken: string; //Unique identifier of the card token. (default to undefined)
let reqSysId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteCardByCardToken(
    cardToken,
    reqSysId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardToken** | [**string**] | Unique identifier of the card token. | defaults to undefined|
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Success |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCardHolderInfo**
> VisaClickToPayResponse deleteCardHolderInfo()

Use this endpoint to delete cardholder information for Click to Pay for Visa.  For more information about this ecommerce checkout solution, see <</developer-guides/digital-wallets-and-tokenization/#_click_to_pay, Click to Pay>>.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let reqSysId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteCardHolderInfo(
    reqSysId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

**VisaClickToPayResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted |  -  |
|**400** | User input error/Bad request |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCardInfo**
> VisaClickToPayResponse deleteCardInfo()

Use this endpoint to delete card information for Click to Pay for Visa.  For more information about this ecommerce checkout solution, see <</developer-guides/digital-wallets-and-tokenization/#_click_to_pay, Click to Pay>>.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let reqSysId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteCardInfo(
    reqSysId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

**VisaClickToPayResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted |  -  |
|**400** | User input error/Bad request |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enrollCard**
> VisaClickToPayResponse enrollCard(visaClickToPayEnrollCardsRequest)

Use this endpoint to enroll a new card for an existing cardholder in Click to Pay for Visa.  For more information about this ecommerce checkout solution, see <</developer-guides/digital-wallets-and-tokenization/#_click_to_pay, Click to Pay>>.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    VisaClickToPayEnrollCardsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let reqSysId: string; // (default to undefined)
let visaClickToPayEnrollCardsRequest: VisaClickToPayEnrollCardsRequest; //

const { status, data } = await apiInstance.enrollCard(
    reqSysId,
    visaClickToPayEnrollCardsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **visaClickToPayEnrollCardsRequest** | **VisaClickToPayEnrollCardsRequest**|  | |
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

**VisaClickToPayResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted |  -  |
|**400** | User input error/Bad request |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enrollCardholder**
> VisaClickToPayResponse enrollCardholder(visaClickToPayEnrollRequest)

Use this endpoint to enroll a new cardholder in Click to Pay for Visa.  For more information about this ecommerce checkout solution, see <</developer-guides/digital-wallets-and-tokenization/#_click_to_pay, Click to Pay>>.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    VisaClickToPayEnrollRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let reqSysId: string; // (default to undefined)
let visaClickToPayEnrollRequest: VisaClickToPayEnrollRequest; //

const { status, data } = await apiInstance.enrollCardholder(
    reqSysId,
    visaClickToPayEnrollRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **visaClickToPayEnrollRequest** | **VisaClickToPayEnrollRequest**|  | |
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

**VisaClickToPayResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted |  -  |
|**400** | User input error/Bad request |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateApplePayWPPJWT**
> WebPushProvisioningApplePayJWTResponse generateApplePayWPPJWT(requestForApplePayWppJWT)

Use this endpoint to add a card to Apple Wallet via a web application.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    RequestForApplePayWppJWT
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let reqSysId: string; //Random pseudo-unique value used for troubleshooting between multiple parties. (default to undefined)
let requestForApplePayWppJWT: RequestForApplePayWppJWT; //

const { status, data } = await apiInstance.generateApplePayWPPJWT(
    reqSysId,
    requestForApplePayWppJWT
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestForApplePayWppJWT** | **RequestForApplePayWppJWT**|  | |
| **reqSysId** | [**string**] | Random pseudo-unique value used for troubleshooting between multiple parties. | defaults to undefined|


### Return type

**WebPushProvisioningApplePayJWTResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  * req-sys-id - Random pseudo unique value used for troubleshooting between multiple parties. 36 char max <br>  |
|**400** | Bad request |  * req-sys-id - Random pseudo unique value used for troubleshooting between multiple parties. 36 char max <br>  |
|**401** | Unauthorized |  * req-sys-id - Random pseudo unique value used for troubleshooting between multiple parties. 36 char max <br>  |
|**500** | Internal Server Error |  * req-sys-id - Random pseudo unique value used for troubleshooting between multiple parties. 36 char max <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAliasByExternalId**
> AdsGetByExternalIdResponse getAliasByExternalId(adsGetByExternalIdRequest)

Use this endpoint to retrieve an alias by external ID.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    AdsGetByExternalIdRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let reqSysId: string; // (default to undefined)
let adsGetByExternalIdRequest: AdsGetByExternalIdRequest; //

const { status, data } = await apiInstance.getAliasByExternalId(
    reqSysId,
    adsGetByExternalIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adsGetByExternalIdRequest** | **AdsGetByExternalIdRequest**|  | |
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

**AdsGetByExternalIdResponse**

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
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAliasById**
> AdsAliasResponse getAliasById()

Use this endpoint to retrieve an alias by alias ID.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let aliasId: string; //Unique identifier of the Visa Alias. (default to undefined)
let reqSysId: string; // (default to undefined)

const { status, data } = await apiInstance.getAliasById(
    aliasId,
    reqSysId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aliasId** | [**string**] | Unique identifier of the Visa Alias. | defaults to undefined|
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

**AdsAliasResponse**

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
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAliasIdByValue**
> GetAliasIdByValue200Response getAliasIdByValue(getAliasIdByValueRequest)

Use this endpoint to retrieve the internal ID associated with an alias.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    GetAliasIdByValueRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let reqSysId: string; // (default to undefined)
let getAliasIdByValueRequest: GetAliasIdByValueRequest; //

const { status, data } = await apiInstance.getAliasIdByValue(
    reqSysId,
    getAliasIdByValueRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getAliasIdByValueRequest** | **GetAliasIdByValueRequest**|  | |
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

**GetAliasIdByValue200Response**

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
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCardByCardToken**
> AdsCardsResponse getCardByCardToken()

Use this endpoint to retrieve a payment credential associated with a card token.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let cardToken: string; //Unique identifier of the card token. (default to undefined)
let reqSysId: string; // (default to undefined)

const { status, data } = await apiInstance.getCardByCardToken(
    cardToken,
    reqSysId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardToken** | [**string**] | Unique identifier of the card token. | defaults to undefined|
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

**AdsCardsResponse**

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
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCardsByAlias**
> AdsCardsResponse getCardsByAlias()

Use this endpoint to retrieve a list of payment credentials associated with an alias.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let aliasId: string; //Unique identifier of the Visa Alias. (default to undefined)
let reqSysId: string; // (default to undefined)

const { status, data } = await apiInstance.getCardsByAlias(
    aliasId,
    reqSysId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aliasId** | [**string**] | Unique identifier of the Visa Alias. | defaults to undefined|
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

**AdsCardsResponse**

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
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getClicktopayMastercardCheckeligibility**
> ClickToPayCheckEligibilityResponse getClicktopayMastercardCheckeligibility()

Use this endpoint to check if a provided BIN prefix is eligible for Click to Pay for Mastercard.  For more information about this ecommerce checkout solution, see <</developer-guides/digital-wallets-and-tokenization/#_click_to_pay, Click to Pay>>.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let binPrefix: string; //Prefix of the bank identification number. (default to undefined)
let reqSysId: string; // (default to undefined)
let includeAsset: boolean; //Returns a list of image assets for the Click to Pay logo if set to `true`. (optional) (default to false)

const { status, data } = await apiInstance.getClicktopayMastercardCheckeligibility(
    binPrefix,
    reqSysId,
    includeAsset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **binPrefix** | [**string**] | Prefix of the bank identification number. | defaults to undefined|
| **reqSysId** | [**string**] |  | defaults to undefined|
| **includeAsset** | [**boolean**] | Returns a list of image assets for the Click to Pay logo if set to &#x60;true&#x60;. | (optional) defaults to false|


### Return type

**ClickToPayCheckEligibilityResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Eligibility check successful |  -  |
|**400** | Invalid binPrefix or other validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getClicktopayMastercardStatusToken**
> ClickToPayStatusResponse getClicktopayMastercardStatusToken()

Use this endpoint to return the status of a specific Click to Pay for Mastercard request.  For more information about this ecommerce checkout solution, see <</developer-guides/digital-wallets-and-tokenization/#_click_to_pay, Click to Pay>>.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let token: string; //Unique identifier of the Click to Pay request. (default to undefined)
let reqSysId: string; // (default to undefined)

const { status, data } = await apiInstance.getClicktopayMastercardStatusToken(
    token,
    reqSysId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the Click to Pay request. | defaults to undefined|
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

**ClickToPayStatusResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Status retrieval successful |  -  |
|**404** | No provision request found with the token |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDigitalwallettokens**
> DigitalWalletTokenListResponse getDigitalwallettokens()

Use this endpoint to retrieve a list of digital wallet tokens.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let count: number; //Number of digital wallet token resources to retrieve. (optional) (default to 10)
let startIndex: number; //Sort order index of the first digital wallet token resource in the returned array. (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Field on which to sort. Use any field in the resource model, or one of the system fields `lastModifiedTime` or `createdTime`. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. (optional) (default to '-id')
let startDate: string; //Date when the digital wallet token becomes active. (optional) (default to undefined)
let endDate: string; //Expiration date of the digital wallet token. (optional) (default to undefined)
let panReferenceId: string; //Unique identifier of the digital wallet token primary account number (PAN) within the card network. This value may vary, depending on the digital wallet. For example, the `pan_reference_id` may be different in Apple Wallet and Google Wallet for the same digital wallet token. (optional) (default to undefined)
let tokenReferenceId: string; //Unique identifier of the digital wallet token within the card network. The `token_reference_id` is unique at the card network level. (optional) (default to undefined)
let correlationId: string; //Unique value representing a tokenization request (Mastercard only). (optional) (default to undefined)
let tokenType: string; //Comma-delimited list of digital wallet token types to display. (optional) (default to undefined)
let tokenRequestorName: string; //Name of the token requestor within the card network.  *NOTE:* The list of example values for this field is maintained by the card networks and is subject to change. (optional) (default to undefined)
let state: string; //Comma-delimited list of digital wallet token states to display. (optional) (default to undefined)
let embed: 'user'; //An optional embedded user object. (optional) (default to undefined)

const { status, data } = await apiInstance.getDigitalwallettokens(
    count,
    startIndex,
    fields,
    sortBy,
    startDate,
    endDate,
    panReferenceId,
    tokenReferenceId,
    correlationId,
    tokenType,
    tokenRequestorName,
    state,
    embed
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of digital wallet token resources to retrieve. | (optional) defaults to 10|
| **startIndex** | [**number**] | Sort order index of the first digital wallet token resource in the returned array. | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Field on which to sort. Use any field in the resource model, or one of the system fields &#x60;lastModifiedTime&#x60; or &#x60;createdTime&#x60;. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. | (optional) defaults to '-id'|
| **startDate** | [**string**] | Date when the digital wallet token becomes active. | (optional) defaults to undefined|
| **endDate** | [**string**] | Expiration date of the digital wallet token. | (optional) defaults to undefined|
| **panReferenceId** | [**string**] | Unique identifier of the digital wallet token primary account number (PAN) within the card network. This value may vary, depending on the digital wallet. For example, the &#x60;pan_reference_id&#x60; may be different in Apple Wallet and Google Wallet for the same digital wallet token. | (optional) defaults to undefined|
| **tokenReferenceId** | [**string**] | Unique identifier of the digital wallet token within the card network. The &#x60;token_reference_id&#x60; is unique at the card network level. | (optional) defaults to undefined|
| **correlationId** | [**string**] | Unique value representing a tokenization request (Mastercard only). | (optional) defaults to undefined|
| **tokenType** | [**string**] | Comma-delimited list of digital wallet token types to display. | (optional) defaults to undefined|
| **tokenRequestorName** | [**string**] | Name of the token requestor within the card network.  *NOTE:* The list of example values for this field is maintained by the card networks and is subject to change. | (optional) defaults to undefined|
| **state** | [**string**] | Comma-delimited list of digital wallet token states to display. | (optional) defaults to undefined|
| **embed** | [**&#39;user&#39;**]**Array<&#39;user&#39;>** | An optional embedded user object. | (optional) defaults to undefined|


### Return type

**DigitalWalletTokenListResponse**

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

# **getDigitalwallettokensCardCardtoken**
> DigitalWalletTokenListResponse getDigitalwallettokensCardCardtoken()

Use this endpoint to return an array of all digital wallet tokens for a particular card.  This endpoint supports <</core-api/sorting-and-pagination, pagination>>.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let cardToken: string; //Unique identifier of the card. Used to minimize the need to exchange card details during subsequent calls, and also for troubleshooting. (default to undefined)
let count: number; //Number of digital wallet token resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first digital wallet token resource in the returned array. (optional) (default to 0)
let sortBy: string; //Field on which to sort. Use any field in the resource model, or one of the system fields `lastModifiedTime` or `createdTime`. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. (optional) (default to '-id')

const { status, data } = await apiInstance.getDigitalwallettokensCardCardtoken(
    cardToken,
    count,
    startIndex,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardToken** | [**string**] | Unique identifier of the card. Used to minimize the need to exchange card details during subsequent calls, and also for troubleshooting. | defaults to undefined|
| **count** | [**number**] | Number of digital wallet token resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first digital wallet token resource in the returned array. | (optional) defaults to 0|
| **sortBy** | [**string**] | Field on which to sort. Use any field in the resource model, or one of the system fields &#x60;lastModifiedTime&#x60; or &#x60;createdTime&#x60;. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. | (optional) defaults to '-id'|


### Return type

**DigitalWalletTokenListResponse**

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

# **getDigitalwallettokensToken**
> DigitalWalletToken getDigitalwallettokensToken()

Use this endpoint to retrieve a specific digital wallet token.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let token: string; //Unique identifier of the digital wallet token (DWT). (default to undefined)

const { status, data } = await apiInstance.getDigitalwallettokensToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the digital wallet token (DWT). | defaults to undefined|


### Return type

**DigitalWalletToken**

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

# **getDigitalwallettokensTokenShowtokenpan**
> DigitalWalletToken getDigitalwallettokensTokenShowtokenpan()

Use this endpoint to retrieve a digital wallet token with the entire primary account number (PAN) displayed. The PAN returned is of the digital wallet token and not of the card. (For security reasons, the PAN is not fully visible on the digital wallet token returned by `GET` `/digitalwallettokens/{token}`.)  [WARNING] Sending a request to this endpoint requires PCI DSS compliance. You must comply with PCI DSS data security requirements if you want to store, transmit, or process sensitive card data such as the cardholder\'s primary account number (PAN), personal identification number (PIN), and card expiration date.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let token: string; //Unique identifier of the digital wallet token (DWT). (default to undefined)

const { status, data } = await apiInstance.getDigitalwallettokensTokenShowtokenpan(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the digital wallet token (DWT). | defaults to undefined|


### Return type

**DigitalWalletToken**

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

# **getDigitalwallettokentransitionsDigitalwallettokenToken**
> DigitalWalletTokenTransitionListResponse getDigitalwallettokentransitionsDigitalwallettokenToken()

Use this endpoint to return an array of all transitions for a particular digital wallet token.  This endpoint supports <</core-api/field-filtering, field filtering>>, <</core-api/sorting-and-pagination, pagination>>, and <</core-api/sorting-and-pagination, sorting>>.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let token: string; //Unique identifier of the digital wallet token (DWT). (default to undefined)
let count: number; //Number of digital wallet transitions to retrieve. (optional) (default to 5)
let startIndex: number; //The sort order index of the first digital wallet token in the returned array. (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Field on which to sort. Use any field in the resource model, or one of the system fields `lastModifiedTime` or `createdTime`. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. (optional) (default to '-id')

const { status, data } = await apiInstance.getDigitalwallettokentransitionsDigitalwallettokenToken(
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
| **token** | [**string**] | Unique identifier of the digital wallet token (DWT). | defaults to undefined|
| **count** | [**number**] | Number of digital wallet transitions to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | The sort order index of the first digital wallet token in the returned array. | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Field on which to sort. Use any field in the resource model, or one of the system fields &#x60;lastModifiedTime&#x60; or &#x60;createdTime&#x60;. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. | (optional) defaults to '-id'|


### Return type

**DigitalWalletTokenTransitionListResponse**

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

# **getDigitalwallettokentransitionsToken**
> DigitalWalletTokenTransitionResponse getDigitalwallettokentransitionsToken()

Use this endpoint to retrieve a specific digital wallet token transition.  This endpoint supports <</core-api/field-filtering, field filtering>>.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let token: string; //Unique identifier of the digital wallet token (DWT) transition. (default to undefined)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getDigitalwallettokentransitionsToken(
    token,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the digital wallet token (DWT) transition. | defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**DigitalWalletTokenTransitionResponse**

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

# **getFileByReportAndFileId**
> Array<AdsReportFileResponse> getFileByReportAndFileId()

Use this endpoint to retrieve a file by file ID and report ID.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let reportId: string; //Unique identifier of the report. (default to undefined)
let fileId: string; //Unique identifier of the file. (default to undefined)
let reqSysId: string; // (default to undefined)

const { status, data } = await apiInstance.getFileByReportAndFileId(
    reportId,
    fileId,
    reqSysId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportId** | [**string**] | Unique identifier of the report. | defaults to undefined|
| **fileId** | [**string**] | Unique identifier of the file. | defaults to undefined|
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

**Array<AdsReportFileResponse>**

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
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReportById**
> AdsGetReportStatusResponse getReportById()

Use this endpoint to retrieve the status of a report by report ID.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let reportId: string; //Unique identifier of the report. (default to undefined)
let reqSysId: string; // (default to undefined)

const { status, data } = await apiInstance.getReportById(
    reportId,
    reqSysId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportId** | [**string**] | Unique identifier of the report. | defaults to undefined|
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

**AdsGetReportStatusResponse**

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
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStatus**
> VisaClickToPayStatusResponse getStatus()

Use this endpoint to return the status of a Click to Pay for Visa request.  For more information about this ecommerce checkout solution, see <</developer-guides/digital-wallets-and-tokenization/#_click_to_pay, Click to Pay>>.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let reqSysId: string; // (default to undefined)
let requestTraceId: string; //Unique identifier of the Visa Click to Pay request. (default to undefined)

const { status, data } = await apiInstance.getStatus(
    reqSysId,
    requestTraceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reqSysId** | [**string**] |  | defaults to undefined|
| **requestTraceId** | [**string**] | Unique identifier of the Visa Click to Pay request. | defaults to undefined|


### Return type

**VisaClickToPayStatusResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | User input error/Bad request |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserData**
> VisaClickToPayGetUserDataResponse getUserData()

Use this endpoint to get user data for Click to Pay for Visa.  For more information about this ecommerce checkout solution, see <</developer-guides/digital-wallets-and-tokenization/#_click_to_pay, Click to Pay>>.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let reqSysId: string; // (default to undefined)
let userToken: string; //Unique identifier of the cardholder. (default to undefined)

const { status, data } = await apiInstance.getUserData(
    reqSysId,
    userToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reqSysId** | [**string**] |  | defaults to undefined|
| **userToken** | [**string**] | Unique identifier of the cardholder. | defaults to undefined|


### Return type

**VisaClickToPayGetUserDataResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | User input error/Bad request |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postClicktopayMastercardEnroll**
> ClickToPayEnrollResponse postClicktopayMastercardEnroll(clickToPayEnrollRequest)

Use this endpoint to enroll a card in Click to Pay for Mastercard.  For more information about this ecommerce checkout solution, see <</developer-guides/digital-wallets-and-tokenization/#_click_to_pay, Click to Pay>>.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    ClickToPayEnrollRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let reqSysId: string; // (default to undefined)
let clickToPayEnrollRequest: ClickToPayEnrollRequest; //

const { status, data } = await apiInstance.postClicktopayMastercardEnroll(
    reqSysId,
    clickToPayEnrollRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clickToPayEnrollRequest** | **ClickToPayEnrollRequest**|  | |
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

**ClickToPayEnrollResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Enrollment Request Accepted |  -  |
|**400** | Invalid request or other validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postDigitalwalletprovisionrequestsAndroidpay**
> DigitalWalletAndroidPayProvisionResponse postDigitalwalletprovisionrequestsAndroidpay()

Use this endpoint to return card data for use in provisioning a digital wallet token into Google Wallet.  The returned card data is encrypted using the digital wallet provider\'s encryption key, thereby reducing your PCI compliance overhead.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    DigitalWalletAndroidPayProvisionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let digitalWalletAndroidPayProvisionRequest: DigitalWalletAndroidPayProvisionRequest; // (optional)

const { status, data } = await apiInstance.postDigitalwalletprovisionrequestsAndroidpay(
    digitalWalletAndroidPayProvisionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **digitalWalletAndroidPayProvisionRequest** | **DigitalWalletAndroidPayProvisionRequest**|  | |


### Return type

**DigitalWalletAndroidPayProvisionResponse**

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
|**404** | Card not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postDigitalwalletprovisionrequestsApplepay**
> DigitalWalletApplePayProvisionResponse postDigitalwalletprovisionrequestsApplepay()

Use this endpoint to return card data for use in provisioning a digital wallet token into Apple Wallet.  The returned card data is encrypted using the digital wallet provider\'s encryption key, thereby reducing your PCI compliance overhead.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    DigitalWalletApplePayProvisionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let digitalWalletApplePayProvisionRequest: DigitalWalletApplePayProvisionRequest; // (optional)

const { status, data } = await apiInstance.postDigitalwalletprovisionrequestsApplepay(
    digitalWalletApplePayProvisionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **digitalWalletApplePayProvisionRequest** | **DigitalWalletApplePayProvisionRequest**|  | |


### Return type

**DigitalWalletApplePayProvisionResponse**

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
|**404** | Card not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postDigitalwalletprovisionrequestsSamsungpay**
> DigitalWalletSamsungPayProvisionResponse postDigitalwalletprovisionrequestsSamsungpay()

[NOTE] This endpoint is limited in availability. For more information, contact your Marqeta representative.  Use this endpoint to return card data for use in provisioning a digital wallet token into Samsung Wallet.  The returned card data is encrypted using the digital wallet provider\'s encryption key, thereby reducing your PCI compliance overhead.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    DigitalWalletSamsungPayProvisionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let digitalWalletSamsungPayProvisionRequest: DigitalWalletSamsungPayProvisionRequest; // (optional)

const { status, data } = await apiInstance.postDigitalwalletprovisionrequestsSamsungpay(
    digitalWalletSamsungPayProvisionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **digitalWalletSamsungPayProvisionRequest** | **DigitalWalletSamsungPayProvisionRequest**|  | |


### Return type

**DigitalWalletSamsungPayProvisionResponse**

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
|**404** | Card not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postDigitalwalletprovisionrequestsXPay**
> DigitalWalletXPayProvisionResponse postDigitalwalletprovisionrequestsXPay()

[NOTE] This endpoint is limited in availability. For more information, contact your Marqeta representative.  Use this endpoint to return card data for use in provisioning a digital wallet token into an XPay digital wallet.  The returned card data is encrypted using the digital wallet provider\'s encryption key, thereby reducing your PCI compliance overhead.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    DigitalWalletXPayProvisionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let digitalWalletXPayProvisionRequest: DigitalWalletXPayProvisionRequest; // (optional)

const { status, data } = await apiInstance.postDigitalwalletprovisionrequestsXPay(
    digitalWalletXPayProvisionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **digitalWalletXPayProvisionRequest** | **DigitalWalletXPayProvisionRequest**|  | |


### Return type

**DigitalWalletXPayProvisionResponse**

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
|**404** | Card not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postDigitalwallettokentransitions**
> DigitalWalletTokenTransitionResponse postDigitalwallettokentransitions()

Use this endpoint to transition a digital wallet token from one state to another.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    DigitalWalletTokenTransitionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let digitalWalletTokenTransitionRequest: DigitalWalletTokenTransitionRequest; // (optional)

const { status, data } = await apiInstance.postDigitalwallettokentransitions(
    digitalWalletTokenTransitionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **digitalWalletTokenTransitionRequest** | **DigitalWalletTokenTransitionRequest**|  | |


### Return type

**DigitalWalletTokenTransitionResponse**

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

# **postTokenizationAuthenticationDecision**
> PostTokenizationAuthenticationDecisionResponse postTokenizationAuthenticationDecision(postTokenizationAuthenticationDecisionRequest)

Use this endpoint to submit a post-tokenization authentication decision from the customer to MQ in a secure card on file scenario.   MQ validates the request, stores it, and forwards the authentication decision to Mastercard MDES in real time.   MQ then returns the MDES response back to the customer synchronously.   This enables issuers to notify MDES of the cardholder’s authentication outcome following tokenization,   ensuring that the token requestor receives timely and accurate decisioning.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    PostTokenizationAuthenticationDecisionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let postTokenizationAuthenticationDecisionRequest: PostTokenizationAuthenticationDecisionRequest; //

const { status, data } = await apiInstance.postTokenizationAuthenticationDecision(
    postTokenizationAuthenticationDecisionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTokenizationAuthenticationDecisionRequest** | **PostTokenizationAuthenticationDecisionRequest**|  | |


### Return type

**PostTokenizationAuthenticationDecisionResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendOPCDataToGooglePay**
> sendOPCDataToGooglePay(sendingProvisioningDataToGooglePayBackendRequest)

Use this endpoint to add a card to Google Wallet via a web application.  This endpoint does not return a payload in response to a request. Instead, a successful call will return a response code only.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    SendingProvisioningDataToGooglePayBackendRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let reqSysId: string; //Random pseudo-unique value used for troubleshooting between multiple parties. (default to undefined)
let sendingProvisioningDataToGooglePayBackendRequest: SendingProvisioningDataToGooglePayBackendRequest; //

const { status, data } = await apiInstance.sendOPCDataToGooglePay(
    reqSysId,
    sendingProvisioningDataToGooglePayBackendRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendingProvisioningDataToGooglePayBackendRequest** | **SendingProvisioningDataToGooglePayBackendRequest**|  | |
| **reqSysId** | [**string**] | Random pseudo-unique value used for troubleshooting between multiple parties. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted |  * req-sys-id - Random pseudo unique value used for troubleshooting between multiple parties. 36 char max <br>  |
|**400** | Bad request |  * req-sys-id - Random pseudo unique value used for troubleshooting between multiple parties. 36 char max <br>  |
|**401** | Unauthorized |  * req-sys-id - Random pseudo unique value used for troubleshooting between multiple parties. 36 char max <br>  |
|**500** | Internal Server Error |  * req-sys-id - Random pseudo unique value used for troubleshooting between multiple parties. 36 char max <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAliasById**
> updateAliasById(adsUpdateAliasRequest)

Use this endpoint to update an alias by alias ID.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    AdsUpdateAliasRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let aliasId: string; //Unique identifier of the Visa Alias. (default to undefined)
let reqSysId: string; // (default to undefined)
let adsUpdateAliasRequest: AdsUpdateAliasRequest; //

const { status, data } = await apiInstance.updateAliasById(
    aliasId,
    reqSysId,
    adsUpdateAliasRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adsUpdateAliasRequest** | **AdsUpdateAliasRequest**|  | |
| **aliasId** | [**string**] | Unique identifier of the Visa Alias. | defaults to undefined|
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Success |  -  |
|**400** | User input error/Bad request |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAliasStatus**
> updateAliasStatus(updateAliasStatusRequest)

Use this endpoint to update the status of an alias.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    UpdateAliasStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let aliasId: string; //Unique identifier of the Visa Alias. (default to undefined)
let reqSysId: string; // (default to undefined)
let updateAliasStatusRequest: UpdateAliasStatusRequest; //

const { status, data } = await apiInstance.updateAliasStatus(
    aliasId,
    reqSysId,
    updateAliasStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAliasStatusRequest** | **UpdateAliasStatusRequest**|  | |
| **aliasId** | [**string**] | Unique identifier of the Visa Alias. | defaults to undefined|
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Success |  -  |
|**400** | User input error/Bad request |  -  |
|**404** | Not found |  -  |
|**422** | Unprocessable entity |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCardByCardToken**
> updateCardByCardToken(adsCardDetailsRequest)

Use this endpoint to update a payment credential associated with a card token.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    AdsCardDetailsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let cardToken: string; //Unique identifier of the card token. (default to undefined)
let reqSysId: string; // (default to undefined)
let adsCardDetailsRequest: AdsCardDetailsRequest; //

const { status, data } = await apiInstance.updateCardByCardToken(
    cardToken,
    reqSysId,
    adsCardDetailsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adsCardDetailsRequest** | **AdsCardDetailsRequest**|  | |
| **cardToken** | [**string**] | Unique identifier of the card token. | defaults to undefined|
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Success |  -  |
|**400** | User input error/Bad request |  -  |
|**404** | Not found |  -  |
|**422** | Unprocessable entity |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCardHolderInfo**
> VisaClickToPayResponse updateCardHolderInfo(visaClickToPayUpdateCardholderRequest)

Use this endpoint to update cardholder information for Click to Pay for Visa.  For more information about this ecommerce checkout solution, see <</developer-guides/digital-wallets-and-tokenization/#_click_to_pay, Click to Pay>>.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    VisaClickToPayUpdateCardholderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let reqSysId: string; // (default to undefined)
let visaClickToPayUpdateCardholderRequest: VisaClickToPayUpdateCardholderRequest; //

const { status, data } = await apiInstance.updateCardHolderInfo(
    reqSysId,
    visaClickToPayUpdateCardholderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **visaClickToPayUpdateCardholderRequest** | **VisaClickToPayUpdateCardholderRequest**|  | |
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

**VisaClickToPayResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted |  -  |
|**400** | User input error/Bad request |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCardInfo**
> VisaClickToPayResponse updateCardInfo(visaClickToPayUpdateCardRequest)

Use this endpoint to update card information for Click to Pay for Visa.  For more information about this ecommerce checkout solution, see <</developer-guides/digital-wallets-and-tokenization/#_click_to_pay, Click to Pay>>.

### Example

```typescript
import {
    DigitalWalletsManagementApi,
    Configuration,
    VisaClickToPayUpdateCardRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalWalletsManagementApi(configuration);

let reqSysId: string; // (default to undefined)
let visaClickToPayUpdateCardRequest: VisaClickToPayUpdateCardRequest; //

const { status, data } = await apiInstance.updateCardInfo(
    reqSysId,
    visaClickToPayUpdateCardRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **visaClickToPayUpdateCardRequest** | **VisaClickToPayUpdateCardRequest**|  | |
| **reqSysId** | [**string**] |  | defaults to undefined|


### Return type

**VisaClickToPayResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted |  -  |
|**400** | User input error/Bad request |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

