# PaymentCardFundingSourceModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_suffix** | **string** |  | [default to undefined]
**account_type** | **string** |  | [default to undefined]
**business_token** | **string** | Required if \&#39;user_token\&#39; is null | [optional] [default to undefined]
**exp_date** | **string** |  | [default to undefined]
**user_token** | **string** | Required if \&#39;business_token\&#39; is null | [optional] [default to undefined]

## Example

```typescript
import { PaymentCardFundingSourceModel } from './api';

const instance: PaymentCardFundingSourceModel = {
    account_suffix,
    account_type,
    business_token,
    exp_date,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
