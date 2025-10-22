# DigitalWalletApplePayProvisionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_token** | **string** | Unique identifier of the card resource to use for the provisioning request. | [default to undefined]
**certificates** | **Array&lt;string&gt;** | Base64-encoded leaf and sub-CA certificates provided by Apple.  The first element of the array should be the leaf certificate, followed by the sub-CA. | [default to undefined]
**device_type** | **string** | Type of device into which the digital wallet token will be provisioned. | [default to undefined]
**nonce** | **string** | One-time-use nonce provided by Apple for security purposes. | [default to undefined]
**nonce_signature** | **string** | Apple-provided signature to the nonce. | [default to undefined]
**provisioning_app_version** | **string** | Version of the application making the provisioning request. Used for debugging and fraud prevention. | [default to undefined]

## Example

```typescript
import { DigitalWalletApplePayProvisionRequest } from './api';

const instance: DigitalWalletApplePayProvisionRequest = {
    card_token,
    certificates,
    device_type,
    nonce,
    nonce_signature,
    provisioning_app_version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
