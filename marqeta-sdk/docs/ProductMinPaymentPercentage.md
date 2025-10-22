# ProductMinPaymentPercentage

Contains information used to calculate the minimum payment percentage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_all_fees_charged** | **boolean** | Whether to include all fees charged when calculating the minimum payments. | [optional] [default to undefined]
**include_fees_charged** | [**Array&lt;ProductFeeType&gt;**](ProductFeeType.md) | One or more fee types to include when calculating the minimum payment. | [default to undefined]
**percentage_of_balance** | **number** | Minimum payment, expressed as a percentage of the total statement balance, due on the payment due day. | [default to undefined]

## Example

```typescript
import { ProductMinPaymentPercentage } from './api';

const instance: ProductMinPaymentPercentage = {
    include_all_fees_charged,
    include_fees_charged,
    percentage_of_balance,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
