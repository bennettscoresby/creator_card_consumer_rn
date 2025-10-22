# ProgramFundingResponse

Returns details of a program funding entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of the funding. | [default to undefined]
**created_time** | **string** | Timestamp when the funding entry was created. | [default to undefined]
**currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [default to undefined]
**memo** | **string** | Additional notes for the funding entry. | [default to undefined]
**post_time** | **string** | Timestamp when the funding entry was posted. | [default to undefined]
**short_code** | **string** | Unique identifier of the program. | [default to undefined]
**token** | **string** | Unique identifier of the funding entry. | [default to undefined]
**updated_time** | **string** | Timestamp when the funding entry was last updated. | [default to undefined]

## Example

```typescript
import { ProgramFundingResponse } from './api';

const instance: ProgramFundingResponse = {
    amount,
    created_time,
    currency_code,
    memo,
    post_time,
    short_code,
    token,
    updated_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
