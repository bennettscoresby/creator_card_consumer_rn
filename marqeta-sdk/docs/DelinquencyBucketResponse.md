# DelinquencyBucketResponse

One or more delinquency buckets for an account. Each delinquency bucket represents a billing cycle during which the account was delinquent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_number** | **number** | Delinquency bucket number in the returned array. Delinquency buckets are returned from most recent to least; the most recent delinquency bucket is &#x60;1&#x60;. | [default to undefined]
**current_due** | **number** | Current amount that is due for this delinquency bucket. | [default to undefined]
**days_past_due** | **number** | Total number of days that the payment is past due for this delinquency bucket. | [default to undefined]
**past_due_carried_forward** | **number** | Amount that is past due and carried forward from previous delinquency buckets. | [default to undefined]
**payment_due_date** | **string** | Date that the payment was due for this delinquency bucket. | [default to undefined]
**total_due** | **number** | Total amount that is due for this delinquency bucket; the sum of &#x60;past_due_carried_forward&#x60; and &#x60;current_due&#x60;. | [default to undefined]

## Example

```typescript
import { DelinquencyBucketResponse } from './api';

const instance: DelinquencyBucketResponse = {
    bucket_number,
    current_due,
    days_past_due,
    past_due_carried_forward,
    payment_due_date,
    total_due,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
