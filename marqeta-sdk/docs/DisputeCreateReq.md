# DisputeCreateReq

Information about a transaction dispute creation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of the dispute. Max value is equal to the value of the original transaction. | [default to undefined]
**category** | [**DisputeCategory**](DisputeCategory.md) |  | [default to undefined]
**ledger_entry_token** | **string** | Unique identifier of the journal entry (&#x60;authorization.clearing&#x60; type only) in dispute. | [default to undefined]
**notes** | **string** | Additional information on the dispute (for example, a reason for the dispute). | [optional] [default to undefined]
**token** | **string** | Unique identifier of the dispute. | [optional] [default to undefined]

## Example

```typescript
import { DisputeCreateReq } from './api';

const instance: DisputeCreateReq = {
    amount,
    category,
    ledger_entry_token,
    notes,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
