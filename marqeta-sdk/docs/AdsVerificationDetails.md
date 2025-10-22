# AdsVerificationDetails

Verification details associated with the Visa Alias.  This field is returned if it exists in the resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authDateTime** | **string** | Time when the user provided the credentials for verification in ISO UTC format YYYY-MM-DDThh:mm:ss.000Z | [optional] [default to undefined]
**authMethodReference** | **string** | Authentication method used when the user provided the credentials for verification, in ISO UTC format YYYY-MM-DDThh:mm:ss.000Z | [optional] [default to undefined]
**creationDateTime** | **string** | Time when the user was created or enrolled in ISO UTC format YYYY-MM-DDThh:mm:ss.000Z | [optional] [default to undefined]
**verifiedEmail** | **boolean** | True if an email was verified during the verification process. This email does not need to match the Alias or contact info if an email was used. | [optional] [default to undefined]
**verifiedPhone** | **boolean** | True if a phone number was verified during the verification process. This phone number does not need to match the Alias or contact info if a phone number was used. | [optional] [default to undefined]

## Example

```typescript
import { AdsVerificationDetails } from './api';

const instance: AdsVerificationDetails = {
    authDateTime,
    authMethodReference,
    creationDateTime,
    verifiedEmail,
    verifiedPhone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
