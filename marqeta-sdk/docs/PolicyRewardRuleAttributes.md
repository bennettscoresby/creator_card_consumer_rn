# PolicyRewardRuleAttributes

Additional properties for which the rule can be used to determine reward accrual eligibility for a transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_spend** | **number** | Maximum spend amount. | [optional] [default to undefined]
**mcc** | **Array&lt;string&gt;** | List of merchant category codes (MCCs). MCCs must be a four-digit number, or a range of two four-digit numbers separated by a hyphen. | [optional] [default to undefined]
**mid** | **string** | Merchant ID for the rule. | [optional] [default to undefined]
**min_spend** | **number** | Minimum spend amount. | [optional] [default to undefined]
**spend_total** | **number** | Total spend amount. | [optional] [default to undefined]

## Example

```typescript
import { PolicyRewardRuleAttributes } from './api';

const instance: PolicyRewardRuleAttributes = {
    max_spend,
    mcc,
    mid,
    min_spend,
    spend_total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
