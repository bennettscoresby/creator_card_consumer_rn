# PolicyRewardResponse

Contains information on a reward policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accrual_strategy** | [**PolicyRewardAccrualType**](PolicyRewardAccrualType.md) |  | [optional] [default to undefined]
**conversions** | [**Array&lt;PolicyRewardConversion&gt;**](PolicyRewardConversion.md) | List of one or more reward conversions. | [optional] [default to undefined]
**created_time** | **string** | Date and time when the reward policy was created on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**description** | **string** | Description of the reward policy. | [optional] [default to undefined]
**exclusions** | [**PolicyRewardExclusions**](PolicyRewardExclusions.md) |  | [optional] [default to undefined]
**name** | **string** | Name of the reward policy. | [optional] [default to undefined]
**rules** | [**Array&lt;PolicyRewardPlatformRule&gt;**](PolicyRewardPlatformRule.md) | A list of one or more reward rules. | [optional] [default to undefined]
**settlement_strategy** | [**PolicyRewardSettlementType**](PolicyRewardSettlementType.md) |  | [optional] [default to undefined]
**token** | **string** | Unique identifier of the reward policy. | [optional] [default to undefined]
**updated_time** | **string** | Date and time when the reward policy was last updated on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]

## Example

```typescript
import { PolicyRewardResponse } from './api';

const instance: PolicyRewardResponse = {
    accrual_strategy,
    conversions,
    created_time,
    description,
    exclusions,
    name,
    rules,
    settlement_strategy,
    token,
    updated_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
