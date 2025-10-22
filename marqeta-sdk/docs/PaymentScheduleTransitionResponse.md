# PaymentScheduleTransitionResponse

A payment schedule transition on a credit account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the credit account on which to transition a payment schedule.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | [optional] [default to undefined]
**created_time** | **string** | Date and time when the payment schedule transition was created on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**payment_schedule_token** | **string** | Unique identifier of the payment schedule whose status is to transition.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/paymentschedules&#x60; to retrieve existing payment schedule tokens. | [optional] [default to undefined]
**status** | [**PaymentScheduleStatus**](PaymentScheduleStatus.md) |  | [optional] [default to undefined]
**token** | **string** | Unique identifier of the payment schedule transition. | [optional] [default to undefined]
**updated_time** | **string** | Date and time when the payment schedule transition was last updated on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]

## Example

```typescript
import { PaymentScheduleTransitionResponse } from './api';

const instance: PaymentScheduleTransitionResponse = {
    account_token,
    created_time,
    payment_schedule_token,
    status,
    token,
    updated_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
