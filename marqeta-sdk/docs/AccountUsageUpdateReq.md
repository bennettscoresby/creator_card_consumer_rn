# AccountUsageUpdateReq

Contains information on how a credit account is used and what types of balances are permitted on the account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aprs** | [**Array&lt;AprScheduleUpdateReq&gt;**](AprScheduleUpdateReq.md) | Contains one or more annual percentage rates (APRs) associated with the credit account. | [optional] [default to undefined]
**type** | [**BalanceType**](BalanceType.md) |  | [default to undefined]

## Example

```typescript
import { AccountUsageUpdateReq } from './api';

const instance: AccountUsageUpdateReq = {
    aprs,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
