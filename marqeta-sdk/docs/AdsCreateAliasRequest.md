# AdsCreateAliasRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aliasType** | **string** | Type of Visa Alias in the Alias Directory Service (ADS) profile. Visa supports phone and email as Visa Alias types that can be used in place of sensitive payment credentials details. | [default to undefined]
**aliasValue** | **string** | Visa Alias value, which is the email address or phone number. | [default to undefined]
**consent** | [**AdsConsent**](AdsConsent.md) |  | [default to undefined]
**identification** | [**AdsIdentification**](AdsIdentification.md) |  | [optional] [default to undefined]
**paymentCredentials** | [**Array&lt;AdsCardDetailsRequest&gt;**](AdsCardDetailsRequest.md) | List of payment credentials associated with the Visa Alias.  This array is returned if the Visa Alias exists and one or more payment credentials are linked to it. | [default to undefined]
**profile** | [**AdsProfile**](AdsProfile.md) |  | [default to undefined]
**userToken** | **string** | Unique identifier of the user. | [default to undefined]

## Example

```typescript
import { AdsCreateAliasRequest } from './api';

const instance: AdsCreateAliasRequest = {
    aliasType,
    aliasValue,
    consent,
    identification,
    paymentCredentials,
    profile,
    userToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
