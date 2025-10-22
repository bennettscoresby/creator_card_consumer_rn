# IdentificationResponseModel

Contains identifications associated with the cardholder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_date** | **string** | Expiration date of the identification, if applicable. | [optional] [readonly] [default to undefined]
**issuing_country** | **string** |  | [optional] [readonly] [default to undefined]
**type** | **string** | Type of identification. | [optional] [readonly] [default to undefined]
**value** | **string** | Number associated with the identification. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { IdentificationResponseModel } from './api';

const instance: IdentificationResponseModel = {
    expiration_date,
    issuing_country,
    type,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
