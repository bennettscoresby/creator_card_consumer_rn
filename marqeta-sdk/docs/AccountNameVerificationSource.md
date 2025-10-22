# AccountNameVerificationSource

Contains account name verification data used to make JIT Funding decisions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **string** | First or given name of the cardholder. | [optional] [default to undefined]
**last_name** | **string** | Last or family name of the cardholder. | [optional] [default to undefined]
**middle_name** | **string** | Middle name of the cardholder. | [optional] [default to undefined]
**on_file** | [**AniInformation**](AniInformation.md) |  | [optional] [default to undefined]
**response** | [**Response**](Response.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AccountNameVerificationSource } from './api';

const instance: AccountNameVerificationSource = {
    first_name,
    last_name,
    middle_name,
    on_file,
    response,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
