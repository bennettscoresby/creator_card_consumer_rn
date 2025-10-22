# ProductMinPaymentCalculation

Contains information used to calculate the minimum payment amount.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_past_due_amount** | **boolean** | Whether to include the past due amount when calculating the minimum payment. | [default to undefined]
**min_payment_flat_amount** | **number** | Minimum payment, expressed as a flat amount, due on the payment due day. | [default to undefined]
**min_payment_percentage** | [**ProductMinPaymentPercentage**](ProductMinPaymentPercentage.md) |  | [default to undefined]

## Example

```typescript
import { ProductMinPaymentCalculation } from './api';

const instance: ProductMinPaymentCalculation = {
    include_past_due_amount,
    min_payment_flat_amount,
    min_payment_percentage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
