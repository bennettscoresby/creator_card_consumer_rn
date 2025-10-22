# FeeUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** |  | [optional] [default to true]
**amount** | **number** |  | [optional] [default to undefined]
**category** | **string** |  | [optional] [default to undefined]
**currency_code** | **string** |  | [optional] [default to undefined]
**fee_attributes** | [**FeeAttributes**](FeeAttributes.md) |  | [optional] [default to undefined]
**memo** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**tags** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { FeeUpdateRequest } from './api';

const instance: FeeUpdateRequest = {
    active,
    amount,
    category,
    currency_code,
    fee_attributes,
    memo,
    name,
    tags,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
