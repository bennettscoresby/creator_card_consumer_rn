# ProgramReserveTransactionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of the program reserve account credit or debit. Sometimes referred to as a _program funding account_. | [optional] [default to undefined]
**created_time** | **string** | Date and time when the resource was created, in UTC. | [default to undefined]
**currency_code** | **string** | Three-digit ISO 4217 currency code. | [optional] [default to undefined]
**is_collateral** | **boolean** |  | [optional] [default to undefined]
**last_modified_time** | **string** | The date and time when the resource was last modified, in UTC. | [default to undefined]
**memo** | **string** | Memo or note describing the transaction. | [optional] [default to undefined]
**state** | **string** | Transaction state. | [optional] [default to undefined]
**tags** | **string** | Comma-delimited list of tags describing the transaction. | [optional] [default to undefined]
**token** | **string** | The unique identifier of the transaction response. | [optional] [default to undefined]
**transaction_token** | **string** | Unique identifier of the transaction. | [optional] [default to undefined]
**type** | **string** | Transaction type. | [optional] [default to undefined]

## Example

```typescript
import { ProgramReserveTransactionResponse } from './api';

const instance: ProgramReserveTransactionResponse = {
    amount,
    created_time,
    currency_code,
    is_collateral,
    last_modified_time,
    memo,
    state,
    tags,
    token,
    transaction_token,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
