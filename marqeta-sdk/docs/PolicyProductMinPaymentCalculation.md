# PolicyProductMinPaymentCalculation

Contains information used to calculate the minimum payment amount on a credit product policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_overlimit_amount** | **boolean** | Whether to include the overlimit amount when calculating the minimum payment. | [default to undefined]
**include_past_due_amount** | **boolean** | Whether to include the past due amount when calculating the minimum payment. | [default to undefined]
**min_payment_flat_amount** | **number** | Minimum payment, expressed as a flat amount, due on the payment due day. | [optional] [default to undefined]
**min_payment_percentage** | [**PolicyProductMinPaymentPercentage**](PolicyProductMinPaymentPercentage.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PolicyProductMinPaymentCalculation } from './api';

const instance: PolicyProductMinPaymentCalculation = {
    include_overlimit_amount,
    include_past_due_amount,
    min_payment_flat_amount,
    min_payment_percentage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
