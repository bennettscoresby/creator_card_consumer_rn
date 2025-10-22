# AccountHolderGroupConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_reloadable** | **boolean** |  | [optional] [default to false]
**kyc_required** | **string** |  | [optional] [default to undefined]
**pre_kyc_controls** | [**PreKycControls**](PreKycControls.md) |  | [optional] [default to undefined]
**real_time_fee_group_token** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AccountHolderGroupConfig } from './api';

const instance: AccountHolderGroupConfig = {
    is_reloadable,
    kyc_required,
    pre_kyc_controls,
    real_time_fee_group_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
