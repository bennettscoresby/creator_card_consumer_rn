# PolicyRewardPlatformRule

Defines the rules intended for a reward policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The static amount to reward if the rule conditions are met. | [optional] [default to undefined]
**attributes** | [**PolicyRewardRuleAttributes**](PolicyRewardRuleAttributes.md) |  | [optional] [default to undefined]
**calculation_type** | **string** | Type of calculation to use to evaluate if a rule has been satisfied. | [optional] [default to undefined]
**description** | **string** | The description of the rule. | [default to undefined]
**multiplier** | **number** | The reward multiplier to apply the transaction, where \&#39;1\&#39; means 1x transaction amount. | [optional] [default to undefined]
**type** | **string** | Type of rule. | [default to undefined]

## Example

```typescript
import { PolicyRewardPlatformRule } from './api';

const instance: PolicyRewardPlatformRule = {
    amount,
    attributes,
    calculation_type,
    description,
    multiplier,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
