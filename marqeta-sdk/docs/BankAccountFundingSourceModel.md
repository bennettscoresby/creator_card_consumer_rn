# BankAccountFundingSourceModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_suffix** | **string** |  | [default to undefined]
**account_type** | **string** |  | [default to undefined]
**business_token** | **string** | Required if \&#39;user_token\&#39; is null | [optional] [default to undefined]
**name_on_account** | **string** |  | [default to undefined]
**routing_number** | **string** |  | [default to undefined]
**user_token** | **string** | Required if \&#39;business_token\&#39; is null | [optional] [default to undefined]
**verification_status** | **string** |  | [default to undefined]

## Example

```typescript
import { BankAccountFundingSourceModel } from './api';

const instance: BankAccountFundingSourceModel = {
    account_suffix,
    account_type,
    business_token,
    name_on_account,
    routing_number,
    user_token,
    verification_status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
