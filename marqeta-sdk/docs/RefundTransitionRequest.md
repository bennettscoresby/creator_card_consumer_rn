# RefundTransitionRequest

Request used to transition the status of a refund.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**RefundStatus**](RefundStatus.md) |  | [default to undefined]
**token** | **string** | Unique identifier of the refund status transition. | [optional] [default to undefined]

## Example

```typescript
import { RefundTransitionRequest } from './api';

const instance: RefundTransitionRequest = {
    status,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
