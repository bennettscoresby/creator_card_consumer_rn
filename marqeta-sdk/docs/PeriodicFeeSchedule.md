# PeriodicFeeSchedule

periodic fee schedules on account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | fee amount | [optional] [default to undefined]
**effective_date** | **string** | date the fee becomes effective | [optional] [default to undefined]
**next_fee_impact_date** | **string** | date of the next time fee will be charged | [optional] [default to undefined]
**type** | **string** | type of fee to be charged | [optional] [default to undefined]

## Example

```typescript
import { PeriodicFeeSchedule } from './api';

const instance: PeriodicFeeSchedule = {
    amount,
    effective_date,
    next_fee_impact_date,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
