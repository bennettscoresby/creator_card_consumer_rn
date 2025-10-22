# AchPartnerRequestModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_token** | **string** | Required if \&#39;user_token\&#39; is null | [optional] [default to undefined]
**idempotentHash** | **string** |  | [optional] [default to undefined]
**is_default_account** | **boolean** |  | [optional] [default to false]
**partner** | **string** |  | [default to undefined]
**partner_account_link_reference_token** | **string** |  | [default to undefined]
**token** | **string** |  | [optional] [default to undefined]
**user_token** | **string** | Required if \&#39;business_token\&#39; is null | [optional] [default to undefined]

## Example

```typescript
import { AchPartnerRequestModel } from './api';

const instance: AchPartnerRequestModel = {
    business_token,
    idempotentHash,
    is_default_account,
    partner,
    partner_account_link_reference_token,
    token,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
