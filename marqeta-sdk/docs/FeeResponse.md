# FeeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** |  | [readonly] [default to undefined]
**amount** | **number** |  | [default to undefined]
**category** | **string** |  | [optional] [readonly] [default to undefined]
**created_time** | **string** | yyyy-MM-ddTHH:mm:ssZ | [readonly] [default to undefined]
**currency_code** | **string** |  | [readonly] [default to undefined]
**fee_attributes** | [**FeeAttributes**](FeeAttributes.md) |  | [optional] [default to undefined]
**last_modified_time** | **string** | yyyy-MM-ddTHH:mm:ssZ | [readonly] [default to undefined]
**memo** | **string** | 255 char max | [optional] [default to undefined]
**name** | **string** | 50 char max | [default to undefined]
**tags** | **string** | 255 char max | [optional] [default to undefined]
**token** | **string** | 36 char max | [default to undefined]
**type** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { FeeResponse } from './api';

const instance: FeeResponse = {
    active,
    amount,
    category,
    created_time,
    currency_code,
    fee_attributes,
    last_modified_time,
    memo,
    name,
    tags,
    token,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
