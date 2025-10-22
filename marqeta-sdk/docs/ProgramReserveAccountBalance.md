# ProgramReserveAccountBalance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_balance** | **number** | Ledger balance, minus any authorized transactions that have not yet cleared. When using JIT Funding, this balance is usually equal to $0.00. | [optional] [readonly] [default to undefined]
**balances** | [**{ [key: string]: ProgramReserveAccountBalance; }**](ProgramReserveAccountBalance.md) | Contains program reserve account balance information, organized by currency code. Sometimes referred to as a _program funding account_. | [optional] [default to undefined]
**credit_balance** | **number** | Not currently in use. | [optional] [readonly] [default to undefined]
**currency_code** | **string** | Three-digit ISO 4217 currency code. | [optional] [default to undefined]
**ledger_balance** | **number** | When using standard funding: The funds that are available to spend immediately, including funds from any authorized transactions that have not yet cleared. When using Just-in-Time (JIT) Funding: Authorized funds that are currently on hold, but not yet cleared. | [optional] [readonly] [default to undefined]
**pending_credits** | **number** | ACH loads that have been accepted, but for which the funding time has not yet elapsed. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { ProgramReserveAccountBalance } from './api';

const instance: ProgramReserveAccountBalance = {
    available_balance,
    balances,
    credit_balance,
    currency_code,
    ledger_balance,
    pending_credits,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
