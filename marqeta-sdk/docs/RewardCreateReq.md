# RewardCreateReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of the reward. | [default to undefined]
**currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [default to undefined]
**description** | **string** | Description of the reward. | [default to undefined]
**forced** | **boolean** | Allows you to force the creation of a reward on an account.  By default, reward creation is not permitted for accounts with a status of &#x60;SUSPENDED&#x60; or &#x60;TERMINATED&#x60; if more than 90 days have passed since the status transition. | [optional] [default to undefined]
**note** | **string** | Additional information about the reward. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the reward. | [optional] [default to undefined]

## Example

```typescript
import { RewardCreateReq } from './api';

const instance: RewardCreateReq = {
    amount,
    currency_code,
    description,
    forced,
    note,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
