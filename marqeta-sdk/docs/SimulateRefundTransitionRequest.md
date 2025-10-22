# SimulateRefundTransitionRequest

Specifies the details of simulate refund transition request .

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**RefundStatus**](RefundStatus.md) |  | [default to undefined]
**token** | **string** | Unique identifier for the refund. | [default to undefined]

## Example

```typescript
import { SimulateRefundTransitionRequest } from './api';

const instance: SimulateRefundTransitionRequest = {
    status,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
