# StatementReward

Contains information on statement rewards.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **string** | Date and time when the statement reward was created on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**current_billing_cycle_reward** | **number** | Amount of rewards received in the current billing cycle. | [optional] [default to undefined]
**previous_billing_cycle_reward** | **number** | Amount of rewards received in the previous billing cycle. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the rewards for a specific statement. | [optional] [default to undefined]

## Example

```typescript
import { StatementReward } from './api';

const instance: StatementReward = {
    created_time,
    current_billing_cycle_reward,
    previous_billing_cycle_reward,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
