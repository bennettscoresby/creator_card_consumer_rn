# UserValidationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**birth_date** | **string** | yyyy-MM-dd | [optional] [default to undefined]
**phone** | **string** | Phone # | [optional] [default to undefined]
**random_name_line1_postfix** | **string** | Six-char random name postfix | [optional] [default to undefined]
**ssn** | **string** | Last four digits of SSN | [optional] [default to undefined]

## Example

```typescript
import { UserValidationRequest } from './api';

const instance: UserValidationRequest = {
    birth_date,
    phone,
    random_name_line1_postfix,
    ssn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
