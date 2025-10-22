# DelinquencyTransitionResponse

Contains details of the account\'s delinquency state transition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the credit account. | [default to undefined]
**bucket_count** | **number** | Number of buckets for the account after the triggering event occurred. | [optional] [default to undefined]
**created_time** | **string** | Date and time when the delinquency state transition was created on Marqeta\&#39;s credit platform, in UTC. | [default to undefined]
**current_due** | **number** | Current amount that is due after the triggering event occurred.  Equivalent to &#x60;current_due&#x60; for the account\&#39;s most recent delinquency bucket. To retrieve delinquency buckets for an account, send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/delinquencystate&#x60;. | [optional] [default to undefined]
**impact_time** | **string** | Date and time when the triggering event impacted the account, in UTC. | [default to undefined]
**is_rolled_back** | **boolean** | A value of &#x60;true&#x60; indicates that the system invalidated and rolled back the delinquency transition.  This is a temporary field that allows Marqeta to handle occasional cases of out-of-order processing. This can occur when two delinquency state transition webhooks are sent near-simultaneously.  For example, if a credit and a payment that bring an account current are made around the same time, two delinquency state transitions are sent very close together. In these cases, one of the transitions is rolled back and invalidated. For the transition that is rolled back, &#x60;is_rolled_back&#x60; is &#x60;true&#x60; and the transition should be ignored.  This field is temporary and to be deprecated when out-of-order processing is addressed in a future release. | [default to undefined]
**oldest_payment_due_date** | **string** | Payment due date of the account\&#39;s oldest delinquency bucket, in UTC.  Useful when used with the delinquency state transition\&#39;s &#x60;created_time&#x60; to determine the total number of days a payment is past due. | [optional] [default to undefined]
**original_status** | [**DelinquencyStatus**](DelinquencyStatus.md) |  | [default to undefined]
**status** | [**DelinquencyStatus**](DelinquencyStatus.md) |  | [default to undefined]
**token** | **string** | Unique identifier of the delinquency state transition. | [default to undefined]
**total_due** | **number** | Total amount that is due after the triggering event occurred; the sum of &#x60;total_past_due&#x60; and &#x60;current_due&#x60;.  Equivalent to &#x60;total_due&#x60; for the account\&#39;s most recent delinquency bucket. To retrieve delinquency buckets for an account, send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/delinquencystate&#x60;. | [optional] [default to undefined]
**total_past_due** | **number** | Total amount that is past due after the triggering event occurred.  Equivalent to &#x60;past_due_carried_forward&#x60; for the account\&#39;s most recent delinquency bucket. To retrieve delinquency buckets for an account, send a &#x60;GET&#x60; request to &#x60;/credit/accounts/{account_token}/delinquencystate&#x60;. | [optional] [default to undefined]
**transition_trigger_reason** | [**DelinquencyTransitionTriggerReason**](DelinquencyTransitionTriggerReason.md) |  | [default to undefined]
**transition_trigger_time** | **string** | Date and time when the triggering event caused the account\&#39;s delinquency state to transition, in UTC.  For &lt;&lt;/core-api/credit-account-journal-entries, journal entries&gt;&gt;, equivalent to &#x60;request_time&#x60;. For &lt;&lt;/core-api/credit-account-statements#listStatementJournalEntries, statement journal entries&gt;&gt;, equivalent to &#x60;impact_time&#x60;, | [default to undefined]
**updated_time** | **string** | Date and time when the delinquency state transition was last updated on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]

## Example

```typescript
import { DelinquencyTransitionResponse } from './api';

const instance: DelinquencyTransitionResponse = {
    account_token,
    bucket_count,
    created_time,
    current_due,
    impact_time,
    is_rolled_back,
    oldest_payment_due_date,
    original_status,
    status,
    token,
    total_due,
    total_past_due,
    transition_trigger_reason,
    transition_trigger_time,
    updated_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
