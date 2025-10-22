# PaymentReminderResponse

Details of a payment reminder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Token of the associated account. | [optional] [default to undefined]
**created_time** | **string** | Date and time when the Billing Cycle was created on Marqeta\&#39;s credit platform | [optional] [default to undefined]
**days_until_due** | **number** | Days until payment cutoff date | [optional] [default to undefined]
**payment_cutoff_date** | **string** | Last day a payment can be made before interest and fees are charged to the account. | [optional] [default to undefined]
**payment_due_date** | **string** | Payment due date, based on the credit account settings. | [optional] [default to undefined]
**remaining_minimum_payment_due** | **number** | Amount remaining on the latest statement\&#39;s minimum payment, after it\&#39;s adjusted for payments, returned payments, and applicable credits that occurred after the latest statement\&#39;s closing date. | [optional] [default to undefined]
**statement_summary_token** | **string** | Token of the associated statement summary | [optional] [default to undefined]
**token** | **string** | Token of the payment reminder | [optional] [default to undefined]

## Example

```typescript
import { PaymentReminderResponse } from './api';

const instance: PaymentReminderResponse = {
    account_token,
    created_time,
    days_until_due,
    payment_cutoff_date,
    payment_due_date,
    remaining_minimum_payment_due,
    statement_summary_token,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
