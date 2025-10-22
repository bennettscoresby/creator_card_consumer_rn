# PolicyProductCardProductResponse

Contains information on the card products associated with the credit product policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | [**PolicyProductCardProductLevel**](PolicyProductCardProductLevel.md) |  | [optional] [default to undefined]
**network** | **string** | Name of the card network. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the card product. | [optional] [default to undefined]

## Example

```typescript
import { PolicyProductCardProductResponse } from './api';

const instance: PolicyProductCardProductResponse = {
    level,
    network,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
