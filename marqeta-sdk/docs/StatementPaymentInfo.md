# StatementPaymentInfo

Contains information on a statement payment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **string** | Date and time when the statement payment information was created on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**minimum_payment_due** | **number** | Minimum payment amount for the current statement period, based on the associated credit product settings. | [optional] [default to undefined]
**new_statement_balance** | **number** | Balance on the credit account when the statement period ended. | [optional] [default to undefined]
**payment_cutoff_date** | **string** | Last day a payment can be made before interest and fees are charged to the account. | [optional] [default to undefined]
**payment_due_date** | **string** | Payment due date, based on the credit account settings. | [optional] [default to undefined]
**statement_summary_token** | **string** | Unique identifier of the statement summary. | [optional] [default to undefined]
**three_year_savings** | **number** | Savings amount if the balance is paid off in three years versus only making minimum payments. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the statement payment. | [optional] [default to undefined]
**warnings** | [**Array&lt;StatementPaymentWarning&gt;**](StatementPaymentWarning.md) | One or more payoff warnings. | [optional] [default to undefined]

## Example

```typescript
import { StatementPaymentInfo } from './api';

const instance: StatementPaymentInfo = {
    created_time,
    minimum_payment_due,
    new_statement_balance,
    payment_cutoff_date,
    payment_due_date,
    statement_summary_token,
    three_year_savings,
    token,
    warnings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
