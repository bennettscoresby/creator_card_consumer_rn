# ProvisioningControls


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dwt_tar_avs_decline_on_address_number_mismatch** | **boolean** |  | [optional] [default to undefined]
**dwt_tar_avs_decline_on_postal_code_mismatch** | **boolean** |  | [optional] [default to undefined]
**dwt_use_card_status_during_auth** | **boolean** |  | [optional] [default to undefined]
**dwt_verify_atc_during_auth** | **boolean** |  | [optional] [default to undefined]
**enable_discretionary_data_during_tar** | **boolean** |  | [optional] [default to undefined]
**force_yellow_path_for_card_product** | **boolean** | A value of &#x60;true&#x60; requires identity verification set-up for all digital wallets at the card product level. | [optional] [default to undefined]
**in_app_provisioning** | [**InAppProvisioning**](InAppProvisioning.md) |  | [optional] [default to undefined]
**manual_entry** | [**ManualEntry**](ManualEntry.md) |  | [optional] [default to undefined]
**wallet_provider_card_on_file** | [**WalletProviderCardOnFile**](WalletProviderCardOnFile.md) |  | [optional] [default to undefined]
**web_push_provisioning** | [**WebPushProvisioning**](WebPushProvisioning.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ProvisioningControls } from './api';

const instance: ProvisioningControls = {
    dwt_tar_avs_decline_on_address_number_mismatch,
    dwt_tar_avs_decline_on_postal_code_mismatch,
    dwt_use_card_status_during_auth,
    dwt_verify_atc_during_auth,
    enable_discretionary_data_during_tar,
    force_yellow_path_for_card_product,
    in_app_provisioning,
    manual_entry,
    wallet_provider_card_on_file,
    web_push_provisioning,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
