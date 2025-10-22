# RefundCreateRequest

Specifies the details of a refund creation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of the refund.  The maximum refund amount is the amount that brings the account balance to $0. For example, $4000 is the maximum refund amount for a -$4000 account balance. | [optional] [default to undefined]
**currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [optional] [default to undefined]
**description** | **string** | Description of the refund. | [optional] [default to undefined]
**method** | [**RefundMethod**](RefundMethod.md) |  | [default to undefined]
**payment_source_token** | **string** | Unique identifier of the payment source that receives the refunded amount. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the refund. | [optional] [default to undefined]
**type** | [**RefundType**](RefundType.md) |  | [default to undefined]

## Example

```typescript
import { RefundCreateRequest } from './api';

const instance: RefundCreateRequest = {
    amount,
    currency_code,
    description,
    method,
    payment_source_token,
    token,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
