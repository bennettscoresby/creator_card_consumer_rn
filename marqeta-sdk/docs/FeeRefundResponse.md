# FeeRefundResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **string** | yyyy-MM-ddTHH:mm:ssZ | [default to undefined]
**fee** | [**Fee**](Fee.md) |  | [default to undefined]
**memo** | **string** |  | [optional] [default to undefined]
**original_fee_transaction_token** | **string** |  | [optional] [default to undefined]
**overrideAmount** | **number** |  | [optional] [default to undefined]
**state** | **string** |  | [optional] [default to undefined]
**tags** | **string** |  | [optional] [default to undefined]
**token** | **string** | 36 char max | [default to undefined]
**transaction_token** | **string** |  | [default to undefined]

## Example

```typescript
import { FeeRefundResponse } from './api';

const instance: FeeRefundResponse = {
    created_time,
    fee,
    memo,
    original_fee_transaction_token,
    overrideAmount,
    state,
    tags,
    token,
    transaction_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
