# DisputeResponse

Information about a transaction dispute response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the credit account on which the dispute was created. | [default to undefined]
**amount** | **number** | Amount of the dispute. | [default to undefined]
**category** | [**DisputeCategory**](DisputeCategory.md) |  | [default to undefined]
**created_time** | **string** | Date and time when the dispute was created on Marqeta\&#39;s credit platform, in UTC. | [default to undefined]
**ledger_entry_token** | **string** | Unique identifier of the journal entry (&#x60;authorization.clearing&#x60; type only) in dispute. | [default to undefined]
**notes** | **string** | Additional information on the dispute (for example, a reason for the dispute). | [optional] [default to undefined]
**resolved_at** | **string** | Date and time when the dispute was resolved and no longer in &#x60;ACTIVE&#x60; status. | [optional] [default to undefined]
**status** | [**DisputeStatus**](DisputeStatus.md) |  | [default to undefined]
**token** | **string** | Unique identifier of the dispute. | [default to undefined]
**updated_time** | **string** | Date and time when the dispute was last updated on Marqeta\&#39;s credit platform, in UTC. | [default to undefined]

## Example

```typescript
import { DisputeResponse } from './api';

const instance: DisputeResponse = {
    account_token,
    amount,
    category,
    created_time,
    ledger_entry_token,
    notes,
    resolved_at,
    status,
    token,
    updated_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
