# AccountCreditBalanceRefundResponse

Contains details on a credit balance refund.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the credit account that needs the credit balance refund. | [default to undefined]
**amount** | **number** | Amount of the credit balance refund.  The maximum refund amount is the amount that brings the account balance to $0. For example, $4000 is the maximum refund amount for a -$4000 account balance. | [default to undefined]
**created_time** | **string** | Date and time when the credit balance refund was created. | [default to undefined]
**description** | **string** | Description for the credit credit balance refund. | [default to undefined]
**method** | [**RefundMethod**](RefundMethod.md) |  | [default to undefined]
**status** | [**PaymentStatus**](PaymentStatus.md) |  | [default to undefined]
**token** | **string** | Unique identifier of the credit balance refund.  If in the &#x60;detail_object&#x60;, unique identifier of the detail object. | [default to undefined]
**updated_time** | **string** | Date and time when the credit balance refund was last updated. | [default to undefined]

## Example

```typescript
import { AccountCreditBalanceRefundResponse } from './api';

const instance: AccountCreditBalanceRefundResponse = {
    account_token,
    amount,
    created_time,
    description,
    method,
    status,
    token,
    updated_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
