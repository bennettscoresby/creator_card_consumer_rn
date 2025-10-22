# PaymentTransitionResponse

Response containing payment transition information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the credit account on which you want to transition a payment status. | [default to undefined]
**created_time** | **string** | Date and time when the payment transition was created on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**payment_token** | **string** | Unique identifier of the payment whose status you want to transition. | [default to undefined]
**status** | [**PaymentStatus**](PaymentStatus.md) |  | [default to undefined]
**token** | **string** | Unique identifier of the payment status transition. | [default to undefined]

## Example

```typescript
import { PaymentTransitionResponse } from './api';

const instance: PaymentTransitionResponse = {
    account_token,
    created_time,
    payment_token,
    status,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
