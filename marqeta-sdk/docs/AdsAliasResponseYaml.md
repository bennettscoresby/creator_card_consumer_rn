# AdsAliasResponseYaml

Visa Alias response object for retrieving information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aliasType** | **string** | Type of Visa Alias in the Alias Directory Service (ADS) profile. Visa supports phone and email as Visa Alias types that can be used in place of sensitive payment credentials details.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**aliasValue** | **string** | Visa Alias value, which is the email address or phone number. | [optional] [default to undefined]
**consent** | [**AdsConsent**](AdsConsent.md) |  | [optional] [default to undefined]
**createdOn** | **string** | Date and time when the Visa Alias was created. | [optional] [default to undefined]
**identification** | [**AdsIdentification**](AdsIdentification.md) |  | [optional] [default to undefined]
**lastModifiedOn** | **string** | Date and time when the Visa Alias was last modified. | [optional] [default to undefined]
**profile** | [**AdsProfile**](AdsProfile.md) |  | [optional] [default to undefined]
**status** | **string** | Status of the Visa Alias. | [optional] [default to undefined]

## Example

```typescript
import { AdsAliasResponseYaml } from './api';

const instance: AdsAliasResponseYaml = {
    aliasType,
    aliasValue,
    consent,
    createdOn,
    identification,
    lastModifiedOn,
    profile,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
