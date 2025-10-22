# DigitalWalletSamsungPayProvisionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_token** | **string** | Unique identifier of the card resource to use for the provisioning request. | [default to undefined]
**device_id** | **string** | User\&#39;s Samsung device unique identifier, as provided by Samsung during the provisioning process. | [default to undefined]
**device_type** | **string** | Type of device into which the digital wallet token will be provisioned. | [default to undefined]
**provisioning_app_version** | **string** | Version of the application making the provisioning request. Used for debugging and fraud prevention. | [default to undefined]
**wallet_user_id** | **string** | User\&#39;s Samsung Wallet account ID, as provided by Samsung during the provisioning process. | [default to undefined]

## Example

```typescript
import { DigitalWalletSamsungPayProvisionRequest } from './api';

const instance: DigitalWalletSamsungPayProvisionRequest = {
    card_token,
    device_id,
    device_type,
    provisioning_app_version,
    wallet_user_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
