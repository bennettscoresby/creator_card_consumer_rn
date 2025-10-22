# UsersApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getUsers**](#getusers) | **GET** /users | List users|
|[**getUsersAuthClientaccesstokenToken**](#getusersauthclientaccesstokentoken) | **GET** /users/auth/clientaccesstoken/{token} | Retrieve client access token|
|[**getUsersParenttokenChildren**](#getusersparenttokenchildren) | **GET** /users/{parent_token}/children | List user child accounts|
|[**getUsersPhonenumberPhonenumber**](#getusersphonenumberphonenumber) | **GET** /users/phonenumber/{phone_number} | Lists all users who match a phone number|
|[**getUsersToken**](#getuserstoken) | **GET** /users/{token} | Retrieve user|
|[**getUsersTokenNotes**](#getuserstokennotes) | **GET** /users/{token}/notes | Lists cardholder notes|
|[**getUsersTokenSsn**](#getuserstokenssn) | **GET** /users/{token}/ssn | Retrieve user identification number|
|[**postUsers**](#postusers) | **POST** /users | Create user|
|[**postUsersAuthChangepassword**](#postusersauthchangepassword) | **POST** /users/auth/changepassword | Update user password|
|[**postUsersAuthClientaccesstoken**](#postusersauthclientaccesstoken) | **POST** /users/auth/clientaccesstoken | Create client access token|
|[**postUsersAuthLogin**](#postusersauthlogin) | **POST** /users/auth/login | Log in user|
|[**postUsersAuthLogout**](#postusersauthlogout) | **POST** /users/auth/logout | Log out user|
|[**postUsersAuthOnetime**](#postusersauthonetime) | **POST** /users/auth/onetime | Create single-use token|
|[**postUsersAuthResetpassword**](#postusersauthresetpassword) | **POST** /users/auth/resetpassword | Request user password reset token|
|[**postUsersAuthResetpasswordToken**](#postusersauthresetpasswordtoken) | **POST** /users/auth/resetpassword/{token} | Reset user password|
|[**postUsersAuthVerifyemail**](#postusersauthverifyemail) | **POST** /users/auth/verifyemail | Request email verification token|
|[**postUsersAuthVerifyemailToken**](#postusersauthverifyemailtoken) | **POST** /users/auth/verifyemail/{token} | Verify email address|
|[**postUsersLookup**](#postuserslookup) | **POST** /users/lookup | Search users|
|[**postUsersTokenNotes**](#postuserstokennotes) | **POST** /users/{token}/notes | Creates a note for the cardholder|
|[**putUsersToken**](#putuserstoken) | **PUT** /users/{token} | Update user|
|[**putUsersTokenNotesNotestoken**](#putuserstokennotesnotestoken) | **PUT** /users/{token}/notes/{notes_token} | Updates a specific note for a cardholder|

# **getUsers**
> UserCardHolderListResponse getUsers()

To return an array of all of a program\'s users, send a `GET` request to the `/users` endpoint. This endpoint supports <</core-api/field-filtering, field filtering>> and <</core-api/sorting-and-pagination, pagination>>. To narrow your result set to users that match certain criteria, see the <<search_users,Search users>> endpoint.  The `business_token` field is conditionally returned in the response (it cannot be set through the API). You can use this field in conjunction with the `parent_token` field to determine whether the user has a parent or grandparent that is a business:  [cols=\"1,1,1\"] |=== | parent_token | business_token | Description  | Not populated | Not populated | User does not have a parent.  | Populated | Not populated | User\'s parent is a user.  | Populated; matches `business_token` | Populated; matches `parent_token` | User\'s parent is a business.  | Populated; does not match `business_token` | Populated; does not match `parent_token` | User\'s parent is a user and their grandparent is a business. |===

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let count: number; //Number of user resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let searchType: string; //Search type. (optional) (default to undefined)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Field on which to sort. Use any field in the resource model, or one of the system fields `lastModifiedTime` or `createdTime`. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getUsers(
    count,
    startIndex,
    searchType,
    fields,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **count** | [**number**] | Number of user resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **searchType** | [**string**] | Search type. | (optional) defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Field on which to sort. Use any field in the resource model, or one of the system fields &#x60;lastModifiedTime&#x60; or &#x60;createdTime&#x60;. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. | (optional) defaults to '-lastModifiedTime'|


### Return type

**UserCardHolderListResponse**

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

# **getUsersAuthClientaccesstokenToken**
> ClientAccessTokenResponse getUsersAuthClientaccesstokenToken()

To retrieve application and card information using a client access token, send a `GET` request to the `/users/auth/clientaccesstoken/{token}` endpoint.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let token: string; //Client access token. (default to undefined)
let applicationToken: string; //Unique identifier of the `application` object. (optional) (default to undefined)

const { status, data } = await apiInstance.getUsersAuthClientaccesstokenToken(
    token,
    applicationToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Client access token. | defaults to undefined|
| **applicationToken** | [**string**] | Unique identifier of the &#x60;application&#x60; object. | (optional) defaults to undefined|


### Return type

**ClientAccessTokenResponse**

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
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsersParenttokenChildren**
> UserCardHolderListResponse getUsersParenttokenChildren()

To retrieve users who are children of a parent user or business, send a `GET` request to the `/users/{parent_token}/children` endpoint. Include the parent\'s user or business token as a URL path parameter.  The `business_token` field is conditionally returned in the response (it cannot be set through the API). You can use this field in conjunction with the `parent_token` field to determine whether the user has a parent or grandparent that is a business:  [cols=\"1,1,1\"] |=== | parent_token | business_token | Description  | Not populated | Not populated | User does not have a parent.  | Populated | Not populated | User\'s parent is a user.  | Populated; matches `business_token` | Populated; matches `parent_token` | User\'s parent is a business.  | Populated; does not match `business_token` | Populated; does not match `parent_token` | User\'s parent is a user and their grandparent is a business. |===  This endpoint supports <</core-api/field-filtering, field filtering>>.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let parentToken: string; //Unique identifier of the parent account holder. (default to undefined)
let count: number; //Number of user resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Field on which to sort. Use any field in the resource model, or one of the system fields `lastModifiedTime` or `createdTime`. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getUsersParenttokenChildren(
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
| **parentToken** | [**string**] | Unique identifier of the parent account holder. | defaults to undefined|
| **count** | [**number**] | Number of user resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Field on which to sort. Use any field in the resource model, or one of the system fields &#x60;lastModifiedTime&#x60; or &#x60;createdTime&#x60;. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. | (optional) defaults to '-lastModifiedTime'|


### Return type

**UserCardHolderListResponse**

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

# **getUsersPhonenumberPhonenumber**
> UserCardHolderListResponse getUsersPhonenumberPhonenumber()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let phoneNumber: string; //Phone number (default to undefined)
let count: number; //Number of users to retrieve (optional) (default to 5)
let startIndex: number; //Start index (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Sort order (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getUsersPhonenumberPhonenumber(
    phoneNumber,
    count,
    startIndex,
    fields,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **phoneNumber** | [**string**] | Phone number | defaults to undefined|
| **count** | [**number**] | Number of users to retrieve | (optional) defaults to 5|
| **startIndex** | [**number**] | Start index | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Sort order | (optional) defaults to '-lastModifiedTime'|


### Return type

**UserCardHolderListResponse**

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

# **getUsersToken**
> UserCardHolderResponse getUsersToken()

To retrieve a specific user, send a `GET` request to the `/users/{token}` endpoint. Include the user `token` path parameter to specify the user to return.  The `business_token` field is conditionally returned in the response (it cannot be set through the API). You can use this field in conjunction with the `parent_token` field to determine whether the user has a parent or grandparent that is a business:  [cols=\"1,1,1\"] |=== | parent_token | business_token | Description  | Not populated | Not populated | User does not have a parent.  | Populated | Not populated | User\'s parent is a user.  | Populated; matches `business_token` | Populated; matches `parent_token` | User\'s parent is a business.  | Populated; does not match `business_token` | Populated; does not match `parent_token` | User\'s parent is a user and their grandparent is a business. |===  This endpoint supports <</core-api/field-filtering, field filtering>>.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let token: string; //Unique identifier of the user resource. (default to undefined)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getUsersToken(
    token,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the user resource. | defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**UserCardHolderResponse**

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
|**404** | Cardholder not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsersTokenNotes**
> CardHolderNoteListResponse getUsersTokenNotes()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let token: string; //User token (default to undefined)
let startIndex: number; //Start index (optional) (default to 0)
let count: number; //Number of notes to retrieve (optional) (default to 5)
let createdBy: string; //Created by (optional) (default to undefined)
let createdByUserRole: string; //Comma-delimited list of created by user roles (optional) (default to undefined)
let includePrivate: boolean; //Include private notes and private fields in note response (optional) (default to undefined)
let searchType: string; //Search type (optional) (default to undefined)
let fields: string; //Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Sort order (optional) (default to '-lastModifiedTime')

const { status, data } = await apiInstance.getUsersTokenNotes(
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
| **token** | [**string**] | User token | defaults to undefined|
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
|**404** | Cardholder not found |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsersTokenSsn**
> SsnResponseModel getUsersTokenSsn()

To retrieve the government-issued identification number for a user, send a `GET` request to the `/users/{token}/ssn` endpoint. Include the `token` path parameter to specify the user whose identification number (SSN, ITIN, TIN, NIN, SIN) you wish to return. You can indicate whether to return the full number or the last four digits only.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let token: string; //Unique identifier of the user resource. (default to undefined)
let fullSsn: boolean; //To return the full identification number, set to `true`. To return only the last four digits, set to `false`.  If the identifications array contains only the last four digits of the identification number, the `/users/{token}/ssn` endpoint will return only the last four digits, regardless of the `full_ssn` parameter. (optional) (default to undefined)

const { status, data } = await apiInstance.getUsersTokenSsn(
    token,
    fullSsn
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the user resource. | defaults to undefined|
| **fullSsn** | [**boolean**] | To return the full identification number, set to &#x60;true&#x60;. To return only the last four digits, set to &#x60;false&#x60;.  If the identifications array contains only the last four digits of the identification number, the &#x60;/users/{token}/ssn&#x60; endpoint will return only the last four digits, regardless of the &#x60;full_ssn&#x60; parameter. | (optional) defaults to undefined|


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

# **postUsers**
> UserCardHolderResponse postUsers()

This endpoint enables you to create a user. A new user\'s initial status depends on the <</core-api/kyc-verification, Know Your Customer (KYC) requirements>> of the program or associated <</core-api/account-holder-groups, account holder group>>.  [cols=\"1,1,1,1\"] |=== | KYC Required | Initial User Status | User Active on Creation | User Limitations  | Always | `UNVERIFIED` | Optional | Cannot load funds; cannot activate cards.  | Conditionally | `LIMITED` | Optional | Restricted by rules in `accountholdergroups.pre_kyc_controls`.  | Never | `ACTIVE` | Required | None. |===  [NOTE] Use the `/usertransitions` endpoints to transition user resources between statuses and to view the history of a user\'s status. Do not set the value of the `user.active` field directly. For more information on status changes, see <</core-api/user-transitions#postUsertransitions, Create User Transition>>.  To perform KYC verification on users, the user object must have the following fields configured:  * `first_name` (legal first name only, no prefixes) * `last_name` (legal last name only, no suffixes) * `address1` (cannot be a PO Box) * `city` * `state` * `postal_code` * `country` * `birth_date` * `identifications` * `phone` (required in some cases) * `email` (required in some cases)  [NOTE] The `identifications` requirement depends on your program\'s configuration. To determine if you should provide a full or abbreviated identification number, contact your Marqeta representative. KYC verification requires the full Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN) of the user.  To create a child user, you must identify the parent user or business and determine whether the child user shares an account with the parent.  The parent must be an existing user or business. On the child user, set the `parent_token` field to the value of the parent\'s `token` field. If either the parent or the grandparent is a business, a `business_token` field is added to the user. This field\'s value is set to the token of either the parent or grandparent (whichever is the business).  The `uses_parent_account` field determines whether the child shares balances with the parent (`true`) or whether the child balances are independent of the parent (`false`). If you do not specify a value for `uses_parent_account`, it is set to `false` by default (the user does not share the parent\'s balance) and returned in the response body. This field cannot be updated, so you must decide upon creation whether the child user shares the parent balance.  Sharing an account with a parent user affects how the child user interacts with cards as follows:  * A child user cannot spend funds if its parent is not active. * An active child user can activate cards, whether the parent is active or not.

### Example

```typescript
import {
    UsersApi,
    Configuration,
    CardHolderModel
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let cardHolderModel: CardHolderModel; // (optional)

const { status, data } = await apiInstance.postUsers(
    cardHolderModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardHolderModel** | **CardHolderModel**|  | |


### Return type

**UserCardHolderResponse**

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
|**412** | Pre-condition setup issue |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUsersAuthChangepassword**
> postUsersAuthChangepassword(passwordUpdateModel)

To change a user password, send a `POST` request to the `/users/auth/changepassword` endpoint and include the `current_password` and `new_password` in link:http://www.json.org/[JSON, window=\"_blank\"] format in the body of the request. This endpoint operates in the context of a currently logged-in user.  A successful password change returns an empty response body with a response code of `204 No Content`.

### Example

```typescript
import {
    UsersApi,
    Configuration,
    PasswordUpdateModel
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let passwordUpdateModel: PasswordUpdateModel; //Password update object

const { status, data } = await apiInstance.postUsersAuthChangepassword(
    passwordUpdateModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **passwordUpdateModel** | **PasswordUpdateModel**| Password update object | |


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
|**401** | Unauthorized |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUsersAuthClientaccesstoken**
> ClientAccessTokenResponse postUsersAuthClientaccesstoken()

Each time you want to display a virtual card\'s sensitive data (for example, when using `marqeta.js`), you must first request a new, single-use client access token from the Marqeta platform by sending a `POST` request to the `/users/auth/clientaccesstoken` endpoint. Unredeemed client access tokens expire after five minutes.

### Example

```typescript
import {
    UsersApi,
    Configuration,
    ClientAccessTokenRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let clientAccessTokenRequest: ClientAccessTokenRequest; // (optional)

const { status, data } = await apiInstance.postUsersAuthClientaccesstoken(
    clientAccessTokenRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientAccessTokenRequest** | **ClientAccessTokenRequest**|  | |


### Return type

**ClientAccessTokenResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**400** | User input error/Bad request |  -  |
|**401** | Unauthorized |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUsersAuthLogin**
> LoginResponseModel postUsersAuthLogin()

To log in a user and return a user access token, send a `POST` request to the `/users/auth/login` endpoint and include the user details in link:http://www.json.org/[JSON, window=\"_blank\"] format in the body of the request.  [TIP] To check a user\'s credentials without logging out the user, call the `/users/auth/onetime` endpoint.

### Example

```typescript
import {
    UsersApi,
    Configuration,
    LoginRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let loginRequestModel: LoginRequestModel; //User login object (optional)

const { status, data } = await apiInstance.postUsersAuthLogin(
    loginRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginRequestModel** | **LoginRequestModel**| User login object | |


### Return type

**LoginResponseModel**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Success |  -  |
|**400** | User input error/Bad request |  -  |
|**401** | Unauthorized |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUsersAuthLogout**
> postUsersAuthLogout()

To log out a user, send a `POST` request to the `/users/auth/logout` endpoint.  A successful logout returns an empty response body with a response code of `204 No Content`.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.postUsersAuthLogout();
```

### Parameters
This endpoint does not have any parameters.


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
|**400** | User input error/Bad request |  -  |
|**401** | Unauthorized |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUsersAuthOnetime**
> AccessTokenResponse postUsersAuthOnetime()

This endpoint returns a single-use access token. This type of token authorizes a single request to access API endpoints and data associated with a particular user. A single-use access token differs from a user access token (as returned by `POST` `/users/auth/login`) only in the number of times it can be used.  To return a single-use access token, send a `POST` request to the `/users/auth/onetime` endpoint. Provide one of these sets of input data:  * *Case #1* – Application token and user access token * *Case #2* – Application token, admin access token, and user token * *Case #3* – Application token, user\'s Marqeta password, and user\'s email address  In each case, provide the application token as the HTTP Basic Authentication username in the request header\'s Authorization field. When applicable, provide the user access token or admin access token as the HTTP Basic Authentication password. When applicable, provide the user token or user\'s Marqeta password and email address in link:http://www.json.org/[JSON, window=\"_blank\"] format in the request body.  Before instantiating an embedded Marqeta widget, call this endpoint to obtain the single-use access token required as input (cases #1 and #2).  This endpoint is also useful when you want to check a user\'s credentials before performing a sensitive operation without having to log out the user (case #3).  [NOTE] Calling this endpoint and returning a single-use access token does not invalidate the user\'s current user access token.

### Example

```typescript
import {
    UsersApi,
    Configuration,
    OneTimeRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let oneTimeRequestModel: OneTimeRequestModel; //One-time object (optional)

const { status, data } = await apiInstance.postUsersAuthOnetime(
    oneTimeRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **oneTimeRequestModel** | **OneTimeRequestModel**| One-time object | |


### Return type

**AccessTokenResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**400** | User input error/Bad request |  -  |
|**401** | Unauthorized |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUsersAuthResetpassword**
> postUsersAuthResetpassword()

Use this endpoint to generate a password reset token for a user. Send a `POST` request to the `/users/auth/resetpassword` endpoint and include the user\'s email address in link:http://www.json.org/[JSON, window=\"_blank\"] format in the body of the request. This request generates and sends an email message containing the `user_token` and `password_reset_token` to the user\'s email address. You must customize the email message with a link that passes the `user_token` and `password_reset_token` to a web page where a subsequent request updates the password.  A successful request returns an empty response body with a response code of `204 No Content`.

### Example

```typescript
import {
    UsersApi,
    Configuration,
    ResetUserPasswordEmailModel
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let resetUserPasswordEmailModel: ResetUserPasswordEmailModel; // (optional)

const { status, data } = await apiInstance.postUsersAuthResetpassword(
    resetUserPasswordEmailModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resetUserPasswordEmailModel** | **ResetUserPasswordEmailModel**|  | |


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
|**401** | Unauthorized |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUsersAuthResetpasswordToken**
> postUsersAuthResetpasswordToken()

To reset the user\'s password, send a `POST` request to the `/users/auth/resetpassword/{token}` endpoint that includes a password reset token generated using the `POST /users/auth/resetpassword` operation. Include the `user_token` and `new_password` in link:http://www.json.org/[JSON, window=\"_blank\"] format in the body of the request. Include the `password_reset_token` as a path parameter.  A successful password reset returns an empty response body with a response code of `204 No Content`.

### Example

```typescript
import {
    UsersApi,
    Configuration,
    ResetUserPasswordModel
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let token: string; //Password reset token generated using the `POST /users/auth/resetpassword` operation. (default to undefined)
let resetUserPasswordModel: ResetUserPasswordModel; // (optional)

const { status, data } = await apiInstance.postUsersAuthResetpasswordToken(
    token,
    resetUserPasswordModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resetUserPasswordModel** | **ResetUserPasswordModel**|  | |
| **token** | [**string**] | Password reset token generated using the &#x60;POST /users/auth/resetpassword&#x60; operation. | defaults to undefined|


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
|**401** | Unauthorized |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUsersAuthVerifyemail**
> postUsersAuthVerifyemail()

Send a `POST` request to the `/users/auth/verifyemail` endpoint to request an email verification token. No input parameters are required because this operation is performed in the context of an authenticated user.  This initial request generates and sends an email message containing the email verification token to the cardholder\'s email address. This email message must include a link that passes the email verification token to a web page where a subsequent request verifies the email address.  A successful request returns an empty response body with a response code of `204 No Content`.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.postUsersAuthVerifyemail();
```

### Parameters
This endpoint does not have any parameters.


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
|**400** | User input error/Bad request |  -  |
|**401** | Unauthorized |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUsersAuthVerifyemailToken**
> postUsersAuthVerifyemailToken()

To verify a user\'s email address, send a `POST` request to the `/users/auth/verifyemail/{email_verification_token}` endpoint that includes an `email_verification_token` generated using the `POST /users/auth/verifyemail` operation. Include the `email_verification_token` as a path parameter.  A successful email verification returns an empty response body with a response code of `204 No Content`.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let token: string; //Email verification token generated using the `POST /users/auth/verifyemail` operation. (default to undefined)

const { status, data } = await apiInstance.postUsersAuthVerifyemailToken(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Email verification token generated using the &#x60;POST /users/auth/verifyemail&#x60; operation. | defaults to undefined|


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
|**400** | User input error/Bad request |  -  |
|**401** | Unauthorized |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUsersLookup**
> UserCardHolderListResponse postUsersLookup()

To search for one or more users, send a `POST` request to the `/users/lookup` endpoint. Include in the message body any parameters by which you want to query. This endpoint supports <</core-api/field-filtering, field filtering>> and <</core-api/sorting-and-pagination, pagination>>.

### Example

```typescript
import {
    UsersApi,
    Configuration,
    UserCardHolderSearchModel
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let count: number; //Number of user resources to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let searchType: string; //Search type. (optional) (default to undefined)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Field on which to sort. Use any field in the resource model, or one of the system fields `lastModifiedTime` or `createdTime`. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. (optional) (default to '-lastModifiedTime')
let userCardHolderSearchModel: UserCardHolderSearchModel; // (optional)

const { status, data } = await apiInstance.postUsersLookup(
    count,
    startIndex,
    searchType,
    fields,
    sortBy,
    userCardHolderSearchModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userCardHolderSearchModel** | **UserCardHolderSearchModel**|  | |
| **count** | [**number**] | Number of user resources to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **searchType** | [**string**] | Search type. | (optional) defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Field on which to sort. Use any field in the resource model, or one of the system fields &#x60;lastModifiedTime&#x60; or &#x60;createdTime&#x60;. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. | (optional) defaults to '-lastModifiedTime'|


### Return type

**UserCardHolderListResponse**

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

# **postUsersTokenNotes**
> CardholderNoteResponseModel postUsersTokenNotes()


### Example

```typescript
import {
    UsersApi,
    Configuration,
    CardholderNoteRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let token: string; //User token (default to undefined)
let cardholderNoteRequestModel: CardholderNoteRequestModel; // (optional)

const { status, data } = await apiInstance.postUsersTokenNotes(
    token,
    cardholderNoteRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardholderNoteRequestModel** | **CardholderNoteRequestModel**|  | |
| **token** | [**string**] | User token | defaults to undefined|


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

# **putUsersToken**
> CardHolderModel putUsersToken(userCardHolderUpdateModel)

To update a specific user resource, send a `PUT` request to the `/users/{token}` endpoint. Include the user `token` path parameter to specify the user to update.  To unlink a child user account from a parent account, pass a null value to the `parent_token` field of the child user resource.

### Example

```typescript
import {
    UsersApi,
    Configuration,
    UserCardHolderUpdateModel
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let token: string; //Unique identifier of the user resource you want to update. (default to undefined)
let userCardHolderUpdateModel: UserCardHolderUpdateModel; //User object

const { status, data } = await apiInstance.putUsersToken(
    token,
    userCardHolderUpdateModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userCardHolderUpdateModel** | **UserCardHolderUpdateModel**| User object | |
| **token** | [**string**] | Unique identifier of the user resource you want to update. | defaults to undefined|


### Return type

**CardHolderModel**

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

# **putUsersTokenNotesNotestoken**
> CardholderNoteResponseModel putUsersTokenNotesNotestoken()


### Example

```typescript
import {
    UsersApi,
    Configuration,
    CardholderNoteUpdateRequestModel
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let token: string; //User token (default to undefined)
let notesToken: string; //Notes token (default to undefined)
let cardholderNoteUpdateRequestModel: CardholderNoteUpdateRequestModel; // (optional)

const { status, data } = await apiInstance.putUsersTokenNotesNotestoken(
    token,
    notesToken,
    cardholderNoteUpdateRequestModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardholderNoteUpdateRequestModel** | **CardholderNoteUpdateRequestModel**|  | |
| **token** | [**string**] | User token | defaults to undefined|
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

