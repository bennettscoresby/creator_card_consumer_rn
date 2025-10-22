# AccessTokenResponse

Contains a cardholder\'s login access information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accesstoken_id** | **string** |  | [optional] [default to undefined]
**application** | [**Application**](Application.md) |  | [optional] [default to undefined]
**expires** | **string** | Date and time when the access token expires. | [default to undefined]
**master_roles** | **Array&lt;string&gt;** | Array of master roles. | [optional] [default to undefined]
**one_time** | **boolean** | Indicates whether the access token is a single-use token. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the access token. | [optional] [default to undefined]
**token_type** | **string** | Specifies the type of access token. | [optional] [default to undefined]
**user_token** | **string** | Unique identifier of the user resource. | [optional] [default to undefined]

## Example

```typescript
import { AccessTokenResponse } from './api';

const instance: AccessTokenResponse = {
    accesstoken_id,
    application,
    expires,
    master_roles,
    one_time,
    token,
    token_type,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
