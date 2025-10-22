# StrongCustomerAuthenticationLimits


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cavv_authentication_amount_incremental_percentage** | **string** |  | [optional] [readonly] [default to undefined]
**enable_biometric_bypass_sca_contactless** | **boolean** |  | [optional] [readonly] [default to undefined]
**enable_cavv_authentication_amount_validation** | **boolean** |  | [optional] [readonly] [default to undefined]
**enable_issuer_tra_exemption** | **boolean** |  | [optional] [readonly] [default to undefined]
**sca_contactless_cumulative_amount_limit** | **number** |  | [optional] [readonly] [default to undefined]
**sca_contactless_transaction_limit** | **number** |  | [optional] [readonly] [default to undefined]
**sca_contactless_transactions_count_limit** | **number** |  | [optional] [readonly] [default to undefined]
**sca_contactless_transactions_currency** | **string** |  | [optional] [readonly] [default to undefined]
**sca_lvp_cumulative_amount_limit** | **number** |  | [optional] [readonly] [default to undefined]
**sca_lvp_transaction_limit** | **number** |  | [optional] [readonly] [default to undefined]
**sca_lvp_transactions_count_limit** | **number** |  | [optional] [readonly] [default to undefined]
**sca_lvp_transactions_currency** | **string** |  | [optional] [readonly] [default to undefined]
**sca_tra_exemption_amount_limit** | **number** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { StrongCustomerAuthenticationLimits } from './api';

const instance: StrongCustomerAuthenticationLimits = {
    cavv_authentication_amount_incremental_percentage,
    enable_biometric_bypass_sca_contactless,
    enable_cavv_authentication_amount_validation,
    enable_issuer_tra_exemption,
    sca_contactless_cumulative_amount_limit,
    sca_contactless_transaction_limit,
    sca_contactless_transactions_count_limit,
    sca_contactless_transactions_currency,
    sca_lvp_cumulative_amount_limit,
    sca_lvp_transaction_limit,
    sca_lvp_transactions_count_limit,
    sca_lvp_transactions_currency,
    sca_tra_exemption_amount_limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
