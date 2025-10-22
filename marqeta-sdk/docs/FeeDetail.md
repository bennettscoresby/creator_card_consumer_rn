# FeeDetail

Contains details about a fee.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee** | [**Fee**](Fee.md) |  | [default to undefined]
**memo** | **string** | Additional text describing the fee. | [optional] [default to undefined]
**overrideAmount** | **number** | Dynamic fee amount that overrides the &#x60;fee.amount&#x60; field value. | [optional] [default to undefined]
**tags** | **string** | Descriptive metadata about the fee. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the fee. | [default to undefined]
**transaction_token** | **string** | Unique identifier of the fee transaction. | [default to undefined]

## Example

```typescript
import { FeeDetail } from './api';

const instance: FeeDetail = {
    fee,
    memo,
    overrideAmount,
    tags,
    token,
    transaction_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
