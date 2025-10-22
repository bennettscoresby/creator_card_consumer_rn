# AdsProfile

Alias Directory Service (ADS) profile information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contactInfo** | [**Array&lt;AdsContactInfo&gt;**](AdsContactInfo.md) | Contact information in the Alias Directory Service (ADS) profile.  This array is returned if the Visa Alias\&#39; contact information details exist. | [optional] [default to undefined]
**dateOfBirth** | **string** | Date of birth in the Alias Directory Service (ADS) profile.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**firstName** | **string** | First name in the Alias Directory Service (ADS) profile. | [default to undefined]
**firstNameLocal** | **string** | First name in the Alias Directory Service (ADS) profile, expressed in the user\&#39;s local language.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**lastName** | **string** | Last name in the Alias Directory Service (ADS) profile. | [default to undefined]
**lastNameLocal** | **string** | Last name in the Alias Directory Service (ADS) profile, expressed in the user\&#39;s local language.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**middleName** | **string** | Middle name in the Alias Directory Service (ADS) profile.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**middleNameLocal** | **string** | Middle name in the Alias Directory Service (ADS) profile, expressed in the user\&#39;s local language.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**preferredName** | **string** | Preferred name in the Alias Directory Service (ADS) profile, as provided by the user.  This field is returned if it exists in the resource. | [optional] [default to undefined]

## Example

```typescript
import { AdsProfile } from './api';

const instance: AdsProfile = {
    contactInfo,
    dateOfBirth,
    firstName,
    firstNameLocal,
    lastName,
    lastNameLocal,
    middleName,
    middleNameLocal,
    preferredName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
