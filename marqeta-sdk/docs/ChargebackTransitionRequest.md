# ChargebackTransitionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Representment or prearbitration amount; this is for transitioning to Representment or Prearbitration only | [optional] [default to undefined]
**chargeback_token** | **string** |  | [default to undefined]
**reason** | **string** |  | [optional] [default to undefined]
**regulation_type** | **string** |  | [optional] [default to undefined]
**state** | **string** |  | [default to undefined]
**token** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ChargebackTransitionRequest } from './api';

const instance: ChargebackTransitionRequest = {
    amount,
    chargeback_token,
    reason,
    regulation_type,
    state,
    token,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
