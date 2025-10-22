# PrecedingTransaction

Returned for `authorization.clearing` transaction types following a financial advice.  Contains information about the preceding transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of the preceding transaction. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the preceding transaction. | [optional] [default to undefined]

## Example

```typescript
import { PrecedingTransaction } from './api';

const instance: PrecedingTransaction = {
    amount,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
