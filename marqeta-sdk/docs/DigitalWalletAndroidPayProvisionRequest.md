# DigitalWalletAndroidPayProvisionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_token** | **string** | Unique identifier of the card resource to use for the provisioning request. | [default to undefined]
**device_id** | **string** | Unique identifier of the user\&#39;s Google device, as provided by Google during the provisioning process. | [default to undefined]
**device_type** | **string** | Type of device into which the digital wallet token will be provisioned. | [default to undefined]
**provisioning_app_version** | **string** | Version of the application making the provisioning request. Used for debugging and fraud prevention. | [default to undefined]
**wallet_account_id** | **string** | User\&#39;s Google Wallet account ID, as provided by Google during the provisioning process. | [default to undefined]

## Example

```typescript
import { DigitalWalletAndroidPayProvisionRequest } from './api';

const instance: DigitalWalletAndroidPayProvisionRequest = {
    card_token,
    device_id,
    device_type,
    provisioning_app_version,
    wallet_account_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
