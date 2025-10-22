# RetryAchPaymentReq

Request body that can be used to create a new ACHO transfer for a given payment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_acho_ach_transfer_token** | **string** |  | [default to undefined]
**payment_token** | **string** |  | [default to undefined]

## Example

```typescript
import { RetryAchPaymentReq } from './api';

const instance: RetryAchPaymentReq = {
    new_acho_ach_transfer_token,
    payment_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
