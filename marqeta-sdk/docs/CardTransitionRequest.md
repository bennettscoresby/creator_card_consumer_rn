# CardTransitionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_token** | **string** |  | [default to undefined]
**channel** | **string** |  | [default to undefined]
**reason** | **string** |  | [optional] [default to undefined]
**reason_code** | **string** |  | [optional] [default to undefined]
**state** | **string** |  | [readonly] [default to undefined]
**sync_state_with_dwts** | **boolean** |  | [optional] [readonly] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]
**validations** | [**ValidationsRequest**](ValidationsRequest.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CardTransitionRequest } from './api';

const instance: CardTransitionRequest = {
    card_token,
    channel,
    reason,
    reason_code,
    state,
    sync_state_with_dwts,
    token,
    validations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
