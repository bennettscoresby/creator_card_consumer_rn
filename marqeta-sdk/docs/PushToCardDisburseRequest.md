# PushToCardDisburseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [default to undefined]
**currency_code** | **string** |  | [default to undefined]
**memo** | **string** |  | [optional] [default to undefined]
**payment_instrument_token** | **string** |  | [default to undefined]
**soft_descriptor** | [**PTCSoftDescriptor**](PTCSoftDescriptor.md) |  | [optional] [default to undefined]
**tags** | **string** |  | [optional] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PushToCardDisburseRequest } from './api';

const instance: PushToCardDisburseRequest = {
    amount,
    currency_code,
    memo,
    payment_instrument_token,
    soft_descriptor,
    tags,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
