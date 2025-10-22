# DelinquencyStateResponse

Contains details of the delinquency state of an account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the credit account. | [default to undefined]
**buckets** | [**Array&lt;DelinquencyBucketResponse&gt;**](DelinquencyBucketResponse.md) | One or more delinquency buckets for an account. Each delinquency bucket represents a billing cycle during which the account was delinquent. | [optional] [default to undefined]
**current_due** | **number** | Amount that is due for the current billing cycle. | [default to undefined]
**date_account_current** | **string** | Date and time when the account was last made current on the Marqeta platform, in UTC.  If the account was never delinquent, this field returns the date and time the account was created on the Marqeta platform, in UTC.  If &#x60;is_delinquent&#x60; is &#x60;true&#x60;, a null value is returned. | [optional] [default to undefined]
**date_account_delinquent** | **string** | Date and time when the account last fell delinquent on the Marqeta platform, in UTC.  If &#x60;is_delinquent&#x60; is &#x60;false&#x60;, a null value is returned. | [optional] [default to undefined]
**delinquent_days_past_statement_end_date** | **number** | Total number of days that the account is past the oldest buckets statement end date | [optional] [default to undefined]
**is_delinquent** | **boolean** | A value of &#x60;true&#x60; indicates that the account is currently delinquent. | [default to undefined]
**total_days_past_due** | **number** | Total number of days that the account is past due. | [default to undefined]
**total_due** | **number** | Total amount that is due for the current billing cycle; the sum of &#x60;total_past_due_amount&#x60; and &#x60;current_due_amount&#x60;. | [default to undefined]
**total_past_due** | **number** | Total amount that is past due. | [default to undefined]

## Example

```typescript
import { DelinquencyStateResponse } from './api';

const instance: DelinquencyStateResponse = {
    account_token,
    buckets,
    current_due,
    date_account_current,
    date_account_delinquent,
    delinquent_days_past_statement_end_date,
    is_delinquent,
    total_days_past_due,
    total_due,
    total_past_due,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
