# StatementSummary

Contains the summary data for an account\'s monthly statement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the credit account on which the statement summary is generated. | [default to undefined]
**available_credit** | **number** | Amount available to spend on the credit account, as of the statement closing date. | [default to undefined]
**closing_balance** | **number** | Balance of the credit account when the statement period ended. | [default to undefined]
**closing_date** | **string** | Date and time when the statement period ended. | [default to undefined]
**created_time** | **string** | Date and time when the statement summary was created on Marqeta\&#39;s credit platform, in UTC. | [default to undefined]
**credit_limit** | **number** | Maximum balance the credit account can carry, as of the statement closing date. | [optional] [default to undefined]
**credits** | **number** | Total amount of credits received during the statement period. | [default to undefined]
**cycle_type** | [**CycleType**](CycleType.md) |  | [default to undefined]
**days_in_billing_cycle** | **number** | Number of days in the billing cycle, also known as the statement period. | [default to undefined]
**fees** | **number** | Total amount of fees charged during the statement period. Does not include periodic fees. | [default to undefined]
**interest** | **number** | Total amount of interest charged during the statement period. | [default to undefined]
**min_payment_due** | **number** | Minimum payment that is due. | [optional] [default to undefined]
**opening_balance** | **number** | Balance of the credit account when the statement period began. | [default to undefined]
**opening_date** | **string** | Date and time when the statement period began. | [default to undefined]
**past_due_amount** | **number** | Total amount of the payment required to make the account current. | [default to undefined]
**payment_due_date** | **string** | Date when the payment was due for this statement period. | [optional] [default to undefined]
**payments** | **number** | Total amount of payments made during the statement period. | [default to undefined]
**program_migration_time** | **string** | Date and time when the statement summary was migrated to Marqeta\&#39;s credit platform, in UTC.  The value of this field is &#x60;null&#x60; if it has not been migrated. | [optional] [default to undefined]
**purchases** | **number** | Total amount of purchases made during the statement period. | [default to undefined]
**remaining_min_payment_due** | **number** | Amount of the minimum payment that remains unpaid for the previous statement period. | [optional] [default to undefined]
**remaining_statement_balance** | **number** | Amount of the statement balance that remains unpaid for the previous statement period. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the statement summary. | [default to undefined]

## Example

```typescript
import { StatementSummary } from './api';

const instance: StatementSummary = {
    account_token,
    available_credit,
    closing_balance,
    closing_date,
    created_time,
    credit_limit,
    credits,
    cycle_type,
    days_in_billing_cycle,
    fees,
    interest,
    min_payment_due,
    opening_balance,
    opening_date,
    past_due_amount,
    payment_due_date,
    payments,
    program_migration_time,
    purchases,
    remaining_min_payment_due,
    remaining_statement_balance,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
