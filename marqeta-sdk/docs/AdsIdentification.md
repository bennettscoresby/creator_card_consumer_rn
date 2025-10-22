# AdsIdentification

Identification of the user associated with the Visa Alias.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of identification provided by the user associated with the Visa Alias. | [default to undefined]
**value** | **string** | Value of the identification provided by the user associated with the Visa Alias, which is used to validate the user. Passport number, for example. | [default to undefined]
**verificationDetails** | [**AdsVerificationDetails**](AdsVerificationDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AdsIdentification } from './api';

const instance: AdsIdentification = {
    type,
    value,
    verificationDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
