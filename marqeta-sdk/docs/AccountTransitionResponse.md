# AccountTransitionResponse

Information on the credit account transition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the credit account for which to transition a status. | [default to undefined]
**created_time** | **string** | Date and time when the transition record was created on Marqeta\&#39;s credit platform, in UTC. | [default to undefined]
**original_status** | [**AccountStatusEnum**](AccountStatusEnum.md) |  | [default to undefined]
**status** | [**AccountStatusEnum**](AccountStatusEnum.md) |  | [default to undefined]
**token** | **string** | Unique identifier of the credit account transition. | [default to undefined]

## Example

```typescript
import { AccountTransitionResponse } from './api';

const instance: AccountTransitionResponse = {
    account_token,
    created_time,
    original_status,
    status,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
