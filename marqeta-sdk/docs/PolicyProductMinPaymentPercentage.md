# PolicyProductMinPaymentPercentage

Contains information used to calculate the minimum payment amount when expressed as a percentage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_all_fees_charged** | **boolean** | Whether to include all fees charged when calculating the minimum payment. | [optional] [default to undefined]
**include_interest_charged** | **boolean** | Whether to include the amount of interest charged when calculating the minimum payment. | [default to undefined]
**percentage_of_balance** | **number** | Minimum payment, expressed as a percentage of the total statement balance, due on the payment due day. | [default to undefined]

## Example

```typescript
import { PolicyProductMinPaymentPercentage } from './api';

const instance: PolicyProductMinPaymentPercentage = {
    include_all_fees_charged,
    include_interest_charged,
    percentage_of_balance,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
