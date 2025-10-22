# PaymentScheduleTransitionCreateReq

Details to create a payment schedule transition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**PaymentScheduleStatus**](PaymentScheduleStatus.md) |  | [default to undefined]
**token** | **string** | Unique identifier of the payment schedule transition. | [optional] [default to undefined]

## Example

```typescript
import { PaymentScheduleTransitionCreateReq } from './api';

const instance: PaymentScheduleTransitionCreateReq = {
    status,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
