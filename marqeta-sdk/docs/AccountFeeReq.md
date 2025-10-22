# AccountFeeReq

Contains information relevant to creating an account fee.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of the fee.  Value must be positive. | [default to undefined]
**currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [default to undefined]
**description** | **string** | Description of the fee. | [optional] [default to undefined]
**subtype** | **string** | Subtype of the fee. Required if fee type is ACCOUNT_FEE that can have ACCOUNT_OPENING_FEE or UPGRADE_FEE subtypes. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the fee. | [optional] [default to undefined]
**type** | **string** | Type of the fee. | [default to undefined]

## Example

```typescript
import { AccountFeeReq } from './api';

const instance: AccountFeeReq = {
    amount,
    currency_code,
    description,
    subtype,
    token,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
