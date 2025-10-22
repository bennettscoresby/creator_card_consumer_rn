# RefundResponse

Detailed refund response object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the account for which the refund is issued. | [default to undefined]
**amount** | **number** | Amount of the refund.  The maximum refund amount is the amount that brings the account balance to $0. For example, $4000 is the maximum refund amount for a -$4000 account balance. | [default to undefined]
**created_time** | **string** | Date and time when the refund was created. | [default to undefined]
**currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [default to undefined]
**description** | **string** | Description of the refund. | [optional] [default to undefined]
**method** | [**RefundMethod**](RefundMethod.md) |  | [default to undefined]
**payment_source_token** | **string** | Unique identifier of the payment source that receives the refunded amount. | [optional] [default to undefined]
**status** | [**RefundStatus**](RefundStatus.md) |  | [default to undefined]
**token** | **string** | Unique identifier of the refund. | [default to undefined]
**type** | [**RefundType**](RefundType.md) |  | [default to undefined]
**updated_time** | **string** | Date and time when the refund was last updated. | [default to undefined]

## Example

```typescript
import { RefundResponse } from './api';

const instance: RefundResponse = {
    account_token,
    amount,
    created_time,
    currency_code,
    description,
    method,
    payment_source_token,
    status,
    token,
    type,
    updated_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
