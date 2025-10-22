# ClientAccessTokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application** | [**Application**](Application.md) |  | [optional] [default to undefined]
**card_token** | **string** | Unique identifier of the card whose sensitive information you want to display. | [optional] [default to undefined]
**created** | **string** | Date and time when the client access token was created, in UTC. | [optional] [default to undefined]
**expires** | **string** | Date and time when the client access token expires, in UTC. | [optional] [default to undefined]
**token** | **string** | Value of the client access token to redeem when displaying sensitive card data. | [optional] [default to undefined]

## Example

```typescript
import { ClientAccessTokenResponse } from './api';

const instance: ClientAccessTokenResponse = {
    application,
    card_token,
    created,
    expires,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
