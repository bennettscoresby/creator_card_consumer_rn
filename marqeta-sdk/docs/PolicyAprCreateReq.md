# PolicyAprCreateReq

Request details for an APR policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Description of the APR policy. | [optional] [default to undefined]
**name** | **string** | Name of the APR policy. | [default to undefined]
**purchases** | [**PolicyAprPurchaseReq**](PolicyAprPurchaseReq.md) |  | [default to undefined]
**token** | **string** | Unique identifier of the APR policy. | [optional] [default to undefined]

## Example

```typescript
import { PolicyAprCreateReq } from './api';

const instance: PolicyAprCreateReq = {
    description,
    name,
    purchases,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
