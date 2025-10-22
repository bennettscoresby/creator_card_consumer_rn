# PolicyFeePeriodic

Contains information on a specific periodic fee in a fee policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_from_interest_calc** | **boolean** | Whether the periodic fee is excluded from interest calculation. | [optional] [default to undefined]
**fee_amount** | **number** | Amount of the fee. | [optional] [default to undefined]
**number_of_days_post_activation** | **number** | Number of days after an account is activated that the initial fee is charged. For example, if the value in this field is &#x60;30&#x60;, then the initial fee is charged 30 days after an account is activated. | [optional] [default to undefined]

## Example

```typescript
import { PolicyFeePeriodic } from './api';

const instance: PolicyFeePeriodic = {
    exclude_from_interest_calc,
    fee_amount,
    number_of_days_post_activation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
