# LoginRequestModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | Cardholder email address. | [optional] [default to undefined]
**password** | **string** | Password to the cardholder\&#39;s user account on the Marqeta platform. | [optional] [default to undefined]
**user_token** | **string** | Identifies the cardholder to log in.  Send a &#x60;GET&#x60; request to &#x60;/users&#x60; to retrieve user tokens. | [optional] [default to undefined]

## Example

```typescript
import { LoginRequestModel } from './api';

const instance: LoginRequestModel = {
    email,
    password,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
