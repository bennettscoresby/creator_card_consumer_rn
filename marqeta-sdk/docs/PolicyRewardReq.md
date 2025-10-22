# PolicyRewardReq

Request details for a reward policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accrual_strategy** | [**PolicyRewardAccrualType**](PolicyRewardAccrualType.md) |  | [optional] [default to undefined]
**conversions** | [**Array&lt;PolicyRewardConversion&gt;**](PolicyRewardConversion.md) | List of one or more reward conversions. | [default to undefined]
**description** | **string** | Description of the reward policy. | [optional] [default to undefined]
**exclusions** | [**PolicyRewardExclusions**](PolicyRewardExclusions.md) |  | [default to undefined]
**name** | **string** | Name of the reward policy. | [default to undefined]
**rules** | [**Array&lt;PolicyRewardPlatformRule&gt;**](PolicyRewardPlatformRule.md) | List of one or more reward rules. | [default to undefined]
**settlement_strategy** | [**PolicyRewardSettlementType**](PolicyRewardSettlementType.md) |  | [default to undefined]
**token** | **string** | Unique identifier of the reward policy. | [optional] [default to undefined]

## Example

```typescript
import { PolicyRewardReq } from './api';

const instance: PolicyRewardReq = {
    accrual_strategy,
    conversions,
    description,
    exclusions,
    name,
    rules,
    settlement_strategy,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
