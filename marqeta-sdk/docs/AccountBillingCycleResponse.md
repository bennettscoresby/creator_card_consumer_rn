# AccountBillingCycleResponse

Details of a billing cycle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Token of the associated account. | [default to undefined]
**created_time** | **string** | Date and time when the Billing Cycle was created on Marqeta\&#39;s credit platform | [default to undefined]
**current_end_time** | **string** | End time of the current billing cycle. | [default to undefined]
**current_payment_due_date** | **string** | Payment due date for the current billing cycle. | [default to undefined]
**current_start_time** | **string** | Start time of the current billing cycle. | [default to undefined]
**next_end_time** | **string** | End time of the next billing cycle. | [default to undefined]
**next_payment_due_date** | **string** | Payment due date for the next billing cycle. | [default to undefined]
**next_start_time** | **string** | Start time of the next billing cycle. | [default to undefined]
**short_code** | **string** | Unique identifier of the billing cycle\&#39;s short code. | [default to undefined]
**updated_time** | **string** | Date and time when the BillingCycle was last updated on Marqeta\&#39;s credit platform | [default to undefined]

## Example

```typescript
import { AccountBillingCycleResponse } from './api';

const instance: AccountBillingCycleResponse = {
    account_token,
    created_time,
    current_end_time,
    current_payment_due_date,
    current_start_time,
    next_end_time,
    next_payment_due_date,
    next_start_time,
    short_code,
    updated_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
