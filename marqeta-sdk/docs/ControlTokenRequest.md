# ControlTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_token** | **string** | The unique identifier of the card for which you want to generate a control token. | [default to undefined]
**controltoken_type** | **string** | Specifies the type of action completed by this request.  *WARNING:* Sending a request to this endpoint with a &#x60;REVEAL_PIN&#x60; control token requires PCI DSS compliance.  The lifespan of the control token depends on the token type:  * *SET_PIN:* 60 minutes * *REVEAL_PIN:* 5 minutes | [optional] [default to undefined]

## Example

```typescript
import { ControlTokenRequest } from './api';

const instance: ControlTokenRequest = {
    card_token,
    controltoken_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
