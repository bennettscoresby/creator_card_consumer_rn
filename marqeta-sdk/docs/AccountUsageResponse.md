# AccountUsageResponse

Contains information on how a credit account is used and what types of balances are permitted on the account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aprs** | [**Array&lt;AprScheduleResponse&gt;**](AprScheduleResponse.md) | Contains one or more APRs associated with the type of balance on the credit account. | [default to undefined]
**fees** | [**Array&lt;AccountFee&gt;**](AccountFee.md) | Contains one or more fees associated with the usage type. | [optional] [default to undefined]
**type** | [**BalanceType**](BalanceType.md) |  | [default to undefined]

## Example

```typescript
import { AccountUsageResponse } from './api';

const instance: AccountUsageResponse = {
    aprs,
    fees,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
