# AccountFee

Contains fee configurations on a credit account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | [**Method**](Method.md) |  | [default to undefined]
**type** | [**FeeType**](FeeType.md) |  | [default to undefined]
**value** | **number** | Value of the fee, either a flat fee amount or percentage value. | [optional] [default to undefined]

## Example

```typescript
import { AccountFee } from './api';

const instance: AccountFee = {
    method,
    type,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
