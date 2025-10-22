# AccountCreditBalanceRefundReq

Contains details on a credit balance refund.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of the credit balance refund.  The maximum refund amount is the amount that brings the account balance to $0. For example, $4000 is the maximum refund amount for a -$4000 account balance. | [default to undefined]
**currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [default to undefined]
**description** | **string** | Description for the credit balance refund. | [default to undefined]
**method** | [**RefundMethod**](RefundMethod.md) |  | [default to undefined]
**token** | **string** | Unique identifier of the credit balance refund. | [optional] [default to undefined]

## Example

```typescript
import { AccountCreditBalanceRefundReq } from './api';

const instance: AccountCreditBalanceRefundReq = {
    amount,
    currency_code,
    description,
    method,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
