# PinRevealRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardholder_verification_method** | **string** | The supplemental method used to verify the cardholder\&#39;s identity before revealing the card\&#39;s personal identification number (PIN).  The possible cardholder verification methods are:  * *BIOMETRIC_FACE:* In-app authentication via facial recognition * *BIOMETRIC_FINGERPRINT:* In-app authentication via biometric fingerprint * *EXP_CVV:* In-app authentication by entering the card\&#39;s expiration date and card verification value (CVV) * *LOGIN:* In-app authentication by re-entering the app password * *OTP:* Two-factor authentication involving a one-time password (OTP) * *OTP_CVV:* Two-factor authentication involving the card\&#39;s CVV and an OTP * *OTHER:* Authentication that relies on other secure methods | [default to undefined]
**control_token** | **string** | Unique value generated as a result of issuing a &#x60;POST&#x60; request to the &#x60;/pins/controltoken&#x60; endpoint. This value cannot be updated. | [default to undefined]

## Example

```typescript
import { PinRevealRequest } from './api';

const instance: PinRevealRequest = {
    cardholder_verification_method,
    control_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
