# VelocityControlBalanceAllOfAvailable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of money remaining for the user. This value is returned only if the user has a limit on the amount of money. | [optional] [default to undefined]
**days_remaining** | **number** | Number of days remaining for the user. This value is returned only if the user has a limit on the number of days. | [optional] [default to undefined]
**uses** | **number** | Number of uses remaining for the user. This value is returned only if the user has a limit on the number of uses. | [optional] [default to undefined]

## Example

```typescript
import { VelocityControlBalanceAllOfAvailable } from './api';

const instance: VelocityControlBalanceAllOfAvailable = {
    amount,
    days_remaining,
    uses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
