# CardholderBalance

Returns general purpose account (GPA) balances for a user or business.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_balance** | **number** | Ledger balance minus any authorized transactions that have not yet cleared. Also known as the cardholder\&#39;s purchasing power. When using JIT Funding, this balance is usually equal to $0.00. | [default to undefined]
**balances** | [**{ [key: string]: CardholderBalance; }**](CardholderBalance.md) | Contains GPA balance information, organized by currency code. | [default to undefined]
**cached_balance** | **number** | Not currently in use. | [optional] [default to undefined]
**credit_balance** | **number** | Not currently in use. | [default to undefined]
**currency_code** | **string** | Three-digit ISO 4217 currency code. | [default to undefined]
**impacted_amount** | **number** | Balance change based on the amount of the transaction. | [optional] [default to undefined]
**last_updated_time** | **string** | Date and time when the resource was last updated, in UTC. | [default to undefined]
**ledger_balance** | **number** | When using standard funding: The funds that are available to spend immediately, including funds from any authorized transactions that have not yet cleared. When using Just-in-Time (JIT) Funding: Authorized funds that are currently on hold, but not yet cleared. | [default to undefined]
**pending_credits** | **number** | ACH loads that have been accepted, but for which the funding time has not yet elapsed. | [default to undefined]

## Example

```typescript
import { CardholderBalance } from './api';

const instance: CardholderBalance = {
    available_balance,
    balances,
    cached_balance,
    credit_balance,
    currency_code,
    impacted_amount,
    last_updated_time,
    ledger_balance,
    pending_credits,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
