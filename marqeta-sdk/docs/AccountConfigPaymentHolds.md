# AccountConfigPaymentHolds

Contains configurations for a payment hold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ach_hold_days** | **number** | Number of days to hold an ACH payment. | [optional] [default to undefined]
**check_hold_days** | **number** | Number of days to hold a check payment. | [optional] [default to undefined]

## Example

```typescript
import { AccountConfigPaymentHolds } from './api';

const instance: AccountConfigPaymentHolds = {
    ach_hold_days,
    check_hold_days,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
