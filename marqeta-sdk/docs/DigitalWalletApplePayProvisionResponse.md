# DigitalWalletApplePayProvisionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_data** | **string** | Cryptographic one-time passcode conforming to the payment network operator or service provider specifications. | [default to undefined]
**card_token** | **string** | Unique identifier of the card resource to use for the provisioning request. | [default to undefined]
**created_time** | **string** | Date and time when the digital wallet provisioning request was created, in UTC. | [default to undefined]
**encrypted_pass_data** | **string** | Payload encrypted with a shared key derived from the Apple Public Certificates and the generated ephemeral private key. | [default to undefined]
**ephemeral_public_key** | **string** | Ephemeral public key used for the provisioning attempt. | [default to undefined]
**last_modified_time** | **string** | Date and time when the digital wallet token provisioning request was last updated, in UTC. | [default to undefined]

## Example

```typescript
import { DigitalWalletApplePayProvisionResponse } from './api';

const instance: DigitalWalletApplePayProvisionResponse = {
    activation_data,
    card_token,
    created_time,
    encrypted_pass_data,
    ephemeral_public_key,
    last_modified_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
