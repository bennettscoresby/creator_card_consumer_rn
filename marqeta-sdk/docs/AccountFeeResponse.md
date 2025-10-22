# AccountFeeResponse

Contains information returned for account fee.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the credit account on which the fee was made. | [default to undefined]
**amount** | **number** | Amount of the fee. | [default to undefined]
**applied_to_amount** | **number** | The amount to which the fee was applied (applicable only for certain fees). | [optional] [default to undefined]
**channel** | **string** | Indicates how the fee was created. | [default to undefined]
**created_time** | **string** | Date and time when the account fee was applied, in UTC. | [optional] [default to undefined]
**currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [default to undefined]
**description** | **string** | Description of the fee. | [default to undefined]
**journal_tokens** | **Array&lt;string&gt;** |  | [default to undefined]
**method** | **string** | The way fee is calculated. | [default to undefined]
**status** | **string** | Status of the fee. | [default to undefined]
**subtype** | **string** | Subtype of fee. | [default to undefined]
**token** | **string** | Unique identifier of the fee. | [default to undefined]
**type** | **string** | Type of fee. | [default to undefined]
**value** | **number** | Value of the fee. | [default to undefined]

## Example

```typescript
import { AccountFeeResponse } from './api';

const instance: AccountFeeResponse = {
    account_token,
    amount,
    applied_to_amount,
    channel,
    created_time,
    currency_code,
    description,
    journal_tokens,
    method,
    status,
    subtype,
    token,
    type,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
