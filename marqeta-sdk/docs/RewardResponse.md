# RewardResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the account on which the reward exists. | [optional] [default to undefined]
**amount** | **number** | Amount of the reward. | [default to undefined]
**applied_to_amount** | **number** | Total amount to which a percentage reward method is applied (for example, if a 3% reward is applied to 100, then &#x60;100&#x60; is the &#x60;applied_to_amount&#x60; value).  This field is not applicable for a flat fee method.  Returned for auto-cash back reward types only. | [optional] [default to undefined]
**created_time** | **string** | Date and time when the reward was created on Marqeta\&#39;s credit platform, in UTC. | [default to undefined]
**currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [default to undefined]
**description** | **string** | Description of the reward. | [default to undefined]
**method** | [**Method**](Method.md) |  | [optional] [default to undefined]
**note** | **string** | Additional information about the reward. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the reward.  If in the &#x60;detail_object&#x60;, unique identifier of the detail object. | [default to undefined]
**type** | [**RewardType**](RewardType.md) |  | [default to undefined]
**updated_time** | **string** | Date and time when the reward was last updated on Marqeta\&#39;s credit platform, in UTC. | [default to undefined]
**value** | **number** | Value of the percentage or flat amount.  Returned for auto-cash back reward types only. | [optional] [default to undefined]

## Example

```typescript
import { RewardResponse } from './api';

const instance: RewardResponse = {
    account_token,
    amount,
    applied_to_amount,
    created_time,
    currency_code,
    description,
    method,
    note,
    token,
    type,
    updated_time,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
