# AccountSignupBonusProgressResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accrual_start_time** | **string** | Date and time when the account started tracking spend accrued towards the signup bonus on Marqeta\&#39;s credit platform, in UTC. | [default to undefined]
**maturity_time** | **string** | Date and time when transactions must be posted by to be eligible towards signup bonus on Marqeta\&#39;s credit platform, in UTC. | [default to undefined]
**retrieval_time** | **string** | Date and time when the account signup bonus progress was retrieved from Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**target_spend** | **number** | Minimum spend required to earn the signup bonus on Marqeta\&#39;s credit platform within the given timeframe. | [default to undefined]
**total_spend** | **number** | Total eligible spend accrued towards the signup bonus on Marqeta\&#39;s credit platform at the time of retrieval if the signup bonus is still active. | [default to undefined]

## Example

```typescript
import { AccountSignupBonusProgressResponse } from './api';

const instance: AccountSignupBonusProgressResponse = {
    accrual_start_time,
    maturity_time,
    retrieval_time,
    target_spend,
    total_spend,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
