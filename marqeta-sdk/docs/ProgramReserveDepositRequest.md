# ProgramReserveDepositRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of the deposit. | [default to undefined]
**currency_code** | **string** | Three-digit ISO 4217 currency code. | [default to undefined]
**idempotentHash** | **string** | Idempotent hash value associated with the deposit request. | [optional] [default to undefined]
**is_collateral** | **boolean** |  | [optional] [default to undefined]
**memo** | **string** | Memo or note describing the deposit request. | [optional] [default to undefined]
**tags** | **string** | Comma-delimited list of tags describing the deposit request. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the deposit request. | [default to undefined]

## Example

```typescript
import { ProgramReserveDepositRequest } from './api';

const instance: ProgramReserveDepositRequest = {
    amount,
    currency_code,
    idempotentHash,
    is_collateral,
    memo,
    tags,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
