# FeeModel

Contains attributes that define characteristics of one or more fees. This array is returned in the response when it is included in the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memo** | **string** | Additional text describing the fee. | [optional] [default to undefined]
**overrideAmount** | **number** | Dynamic fee amount that overrides the &#x60;fee.amount&#x60; field value. | [optional] [default to undefined]
**tags** | **string** | Descriptive metadata about the fee. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the fee. | [default to undefined]

## Example

```typescript
import { FeeModel } from './api';

const instance: FeeModel = {
    memo,
    overrideAmount,
    tags,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
