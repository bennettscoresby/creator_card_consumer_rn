# CardSecurityCodeVerification

Contains information about a verification check performed on the card\'s security code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | [**Response**](Response.md) |  | [default to undefined]
**type** | **string** | Indicates the type of security code. Can have these possible values:  * *CVV1* – the security code stored in the magnetic stripe on the card. * *CVV2* – the security code printed on the card. * *ICVV* – the security code stored on the chip of the card. * *DCVV* – a dynamic security code used in some contactless payments when a card or device is tapped against the card reader. | [default to undefined]

## Example

```typescript
import { CardSecurityCodeVerification } from './api';

const instance: CardSecurityCodeVerification = {
    response,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
