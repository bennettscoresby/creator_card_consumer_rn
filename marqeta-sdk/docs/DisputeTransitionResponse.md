# DisputeTransitionResponse

Information about a transaction dispute update request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the credit account on which the dispute was updated. | [default to undefined]
**amount** | **number** | Amount of the updated dispute, based on the resolution. | [default to undefined]
**created_time** | **string** | Date and time when the dispute update was created on Marqeta\&#39;s credit platform, in UTC. | [default to undefined]
**notes** | **string** | Additional information on the dispute update (for example, a reason for the dispute update). | [optional] [default to undefined]
**status** | [**DisputeStatus**](DisputeStatus.md) |  | [default to undefined]
**token** | **string** | Unique identifier of the dispute update. | [default to undefined]

## Example

```typescript
import { DisputeTransitionResponse } from './api';

const instance: DisputeTransitionResponse = {
    account_token,
    amount,
    created_time,
    notes,
    status,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
