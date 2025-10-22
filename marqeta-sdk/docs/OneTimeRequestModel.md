# OneTimeRequestModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | Cardholder email address.  Required when neither the user token nor the admin access token is provided as the Basic Authentication password (case #3). | [optional] [default to undefined]
**password** | **string** | Password to the cardholder\&#39;s user account on the Marqeta platform.  Required when neither the user token nor the admin access token is provided as the Basic Authentication password (case #3). | [optional] [default to undefined]
**user_token** | **string** | Identifies the cardholder whose data is accessed. Send a &#x60;GET&#x60; request to &#x60;/users&#x60; to retrieve cardholder tokens.  Required when the Basic Authentication password is set to an admin access token (case #2). | [optional] [default to undefined]

## Example

```typescript
import { OneTimeRequestModel } from './api';

const instance: OneTimeRequestModel = {
    email,
    password,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
