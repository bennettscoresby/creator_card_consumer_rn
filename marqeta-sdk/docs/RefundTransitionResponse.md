# RefundTransitionResponse

Response containing refund transition information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the credit account on which you want to transition a refund status. | [default to undefined]
**created_time** | **string** | Date and time when the refund transition was created on Marqeta\&#39;s credit platform, in UTC. | [default to undefined]
**refund_token** | **string** | Unique identifier of the refund whose status you want to transition. | [default to undefined]
**status** | [**RefundStatus**](RefundStatus.md) |  | [default to undefined]
**token** | **string** | Unique identifier of the refund status transition. | [default to undefined]

## Example

```typescript
import { RefundTransitionResponse } from './api';

const instance: RefundTransitionResponse = {
    account_token,
    created_time,
    refund_token,
    status,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
