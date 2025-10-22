# AniInformation

Contains account name verification data used to make JIT Funding decisions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_name** | **string** |  | [optional] [default to undefined]
**first_name** | **string** | First or given name of the cardholder. | [optional] [default to undefined]
**last_name** | **string** | Last or family name of the cardholder. | [optional] [default to undefined]
**middle_name** | **string** | Middle name of the cardholder. | [optional] [default to undefined]

## Example

```typescript
import { AniInformation } from './api';

const instance: AniInformation = {
    card_name,
    first_name,
    last_name,
    middle_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
