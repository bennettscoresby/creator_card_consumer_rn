# AuthControlResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** |  | [optional] [default to true]
**association** | [**SpendControlAssociation**](SpendControlAssociation.md) |  | [optional] [default to undefined]
**end_time** | **string** |  | [optional] [default to undefined]
**merchant_scope** | [**AuthControlMerchantScope**](AuthControlMerchantScope.md) |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**start_time** | **string** |  | [optional] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AuthControlResponse } from './api';

const instance: AuthControlResponse = {
    active,
    association,
    end_time,
    merchant_scope,
    name,
    start_time,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
