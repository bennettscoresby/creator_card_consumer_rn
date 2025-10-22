# UserTransitionsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getUsertransitionsToken**](#getusertransitionstoken) | **GET** /usertransitions/{token} | Retrieve user transition|
|[**getUsertransitionsUserUsertoken**](#getusertransitionsuserusertoken) | **GET** /usertransitions/user/{user_token} | List transitions for user|
|[**postUsertransitions**](#postusertransitions) | **POST** /usertransitions | Create user transition|

# **getUsertransitionsToken**
> UserTransitionResponse getUsertransitionsToken()

Retrieve a user transition.

### Example

```typescript
import {
    UserTransitionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserTransitionsApi(configuration);

let token: string; //Unique identifier of the user transition you want to retrieve. (default to undefined)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on). Leave blank to return all fields. (optional) (default to undefined)

const { status, data } = await apiInstance.getUsertransitionsToken(
    token,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Unique identifier of the user transition you want to retrieve. | defaults to undefined|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on). Leave blank to return all fields. | (optional) defaults to undefined|


### Return type

**UserTransitionResponse**

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

# **getUsertransitionsUserUsertoken**
> UserTransitionListResponse getUsertransitionsUserUsertoken()

List all transitions for a given user.

### Example

```typescript
import {
    UserTransitionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserTransitionsApi(configuration);

let userToken: string; //Unique identifier of the user resource. (default to undefined)
let count: number; //Number of user transitions to retrieve. (optional) (default to 5)
let startIndex: number; //Sort order index of the first resource in the returned array. (optional) (default to 0)
let fields: string; //Comma-delimited list of fields to return (`field_1,field_2`, and so on). Leave blank to return all fields. (optional) (default to undefined)
let sortBy: string; //Field on which to sort. Use any field in the resource model, or one of the system fields `lastModifiedTime` or `createdTime`. Prefix the field name with a hyphen (`-`) to sort in descending order. Omit the hyphen to sort in ascending order. (optional) (default to '-id')

const { status, data } = await apiInstance.getUsertransitionsUserUsertoken(
    userToken,
    count,
    startIndex,
    fields,
    sortBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userToken** | [**string**] | Unique identifier of the user resource. | defaults to undefined|
| **count** | [**number**] | Number of user transitions to retrieve. | (optional) defaults to 5|
| **startIndex** | [**number**] | Sort order index of the first resource in the returned array. | (optional) defaults to 0|
| **fields** | [**string**] | Comma-delimited list of fields to return (&#x60;field_1,field_2&#x60;, and so on). Leave blank to return all fields. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Field on which to sort. Use any field in the resource model, or one of the system fields &#x60;lastModifiedTime&#x60; or &#x60;createdTime&#x60;. Prefix the field name with a hyphen (&#x60;-&#x60;) to sort in descending order. Omit the hyphen to sort in ascending order. | (optional) defaults to '-id'|


### Return type

**UserTransitionListResponse**

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

# **postUsertransitions**
> UserTransitionResponse postUsertransitions()

This endpoint enables you to change a user\'s status, depending on your role and the previous status change. By changing a user\'s status, you can control the user\'s capabilities and the setting of the `user.active` field. Do not set the value of the `user.active` field directly.  [cols=\"2a,4a,3a\"] |=== | The user.status Field | Description | User Limitations  | `UNVERIFIED` | Initial status of a new user belonging to an account holder group where KYC is always required.  *Allowable Transitions:*  + `ACTIVE`, `CLOSED`, `TERMINATED` | Cannot activate cards or load funds.  *user.active Field:*  + `false`  | `LIMITED` | Initial status of a new user belonging to an account holder group where KYC is conditionally required.  *Allowable Transitions:*  + `ACTIVE`, `SUSPENDED`, `CLOSED` | Restricted by rules in `accountholdergroups.pre_kyc_controls`.  *user.active Field:*  + `true`  | `ACTIVE` | Status of a user who has passed KYC, or initial status of a new user belonging to an account holder group where KYC is never required.  *Allowable Transitions:*  + `SUSPENDED`, `CLOSED`, `UNVERIFIED` | None.  *user.active Field:*  + `true`  | `SUSPENDED` | The user is temporarily inactive.  Transitioning a suspended user to the `ACTIVE` status is restricted, based on your role and the details of the previous status change.  *Allowable Transitions:*  + `ACTIVE`, `LIMITED`, `UNVERIFIED`, `CLOSED`, `TERMINATED` | Cannot activate cards, load funds, or transact.  *user.active Field:*  + `false`  | `CLOSED` | The user is permanently inactive.  In general, the `CLOSED` status should be terminal. For exceptional cases, you can transition a user to other statuses, depending on your role and the details of the previous status change. Contact your Marqeta representative for more information.  *Allowable Transitions:*  + `ACTIVE`, `LIMITED`, `UNVERIFIED`, `SUSPENDED`, `TERMINATED` | Cannot activate cards, load funds, or transact.  *user.active Field:*  + `false`  | `TERMINATED` | The user account is permanently closed. Use the `TERMINATED` state to comply with regulatory requirements, such as the requirement that a user account be irreversibly closed when it does not pass Know Your Customer (KYC) verification.  *NOTE:* `TERMINATED` is a terminal status. You must have the Admin or Program Manager role to transition a user to the `TERMINATED` state. You cannot transition a user from `TERMINATED` to any other state. Contact your Marqeta representative for more information.  *Allowable Transitions:*   + None | Cannot load funds, activate cards, or transact.  *The user.active field:*   + `false`  |===  [NOTE] The Marqeta platform transitions a user\'s status in response to certain events. For example, a user in the `UNVERIFIED` status is transitioned to `ACTIVE` when the user passes KYC verification.

### Example

```typescript
import {
    UserTransitionsApi,
    Configuration,
    UserTransitionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UserTransitionsApi(configuration);

let userTransitionRequest: UserTransitionRequest; // (optional)

const { status, data } = await apiInstance.postUsertransitions(
    userTransitionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userTransitionRequest** | **UserTransitionRequest**|  | |


### Return type

**UserTransitionResponse**

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

