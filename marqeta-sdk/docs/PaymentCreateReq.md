# PaymentCreateReq

Object that is created when a user pays a portion or all of their statement balance.  Applies to immediate payments only. Once the value is set to `ACTIVE`, it cannot be edited or deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of the payment. | [default to undefined]
**currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [default to undefined]
**description** | **string** | Description of the payment. | [default to undefined]
**hold_days** | **number** | Overrides the configured default number of days for which to hold ACH and check payments. | [optional] [default to undefined]
**impact_time** | **string** | Date and time when the payment impacts the account balance and fee calculations. | [optional] [default to undefined]
**metadata** | **string** | Customer-defined additional information about the payment (for example, a check number). | [optional] [default to undefined]
**method** | **string** | Method of payment. | [default to undefined]
**payment_source_token** | **string** | Unique identifier of the payment source. Required for ACH payments. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the payment. | [optional] [default to undefined]

## Example

```typescript
import { PaymentCreateReq } from './api';

const instance: PaymentCreateReq = {
    amount,
    currency_code,
    description,
    hold_days,
    impact_time,
    metadata,
    method,
    payment_source_token,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
