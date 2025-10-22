# InterestCalculation

Contains the configurations for interest calculation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_count** | **string** | Day-count convention. | [default to undefined]
**exclude_tran_types** | **Array&lt;string&gt;** | One or more transactions that are excluded from current billing period\&#39;s interest charge, but included in next. | [optional] [default to undefined]
**grace_days_application** | **string** | Determines the last day of grace period based on which interest charges are calculated. | [default to undefined]
**interest_application** | **Array&lt;string&gt;** | One or more balance types on which interest is applied. | [default to undefined]
**interest_on_grace_reactivation** | [**InterestOnGraceReactivationEnum**](InterestOnGraceReactivationEnum.md) |  | [default to undefined]
**method** | **string** | Method of interest calculation. | [default to undefined]
**minimum_interest** | **number** | When interest is applied, this value determines the minimum amount of interest that can be charged. | [default to undefined]

## Example

```typescript
import { InterestCalculation } from './api';

const instance: InterestCalculation = {
    day_count,
    exclude_tran_types,
    grace_days_application,
    interest_application,
    interest_on_grace_reactivation,
    method,
    minimum_interest,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
