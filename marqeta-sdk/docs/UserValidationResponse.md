# UserValidationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**birth_date** | **boolean** | yyyy-MM-dd | [default to false]
**phone** | **boolean** | 10 char max, phone number | [default to false]
**random_name_line1_postfix** | **boolean** | Six-char random name postfix | [default to false]
**ssn** | **boolean** | Last four digits of SSN | [default to false]

## Example

```typescript
import { UserValidationResponse } from './api';

const instance: UserValidationResponse = {
    birth_date,
    phone,
    random_name_line1_postfix,
    ssn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
