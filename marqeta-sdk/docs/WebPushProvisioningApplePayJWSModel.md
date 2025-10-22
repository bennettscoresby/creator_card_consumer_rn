# WebPushProvisioningApplePayJWSModel

Object containing JSON Web Signature (JWS) data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | [**WebPushProvisioningApplePayJWSHeader**](WebPushProvisioningApplePayJWSHeader.md) |  | [default to undefined]
**payload** | **string** | JSON Web Signature (JWS) message payload. | [default to undefined]
**_protected** | **string** | Contains header parameters that are integrity-protected by the JSON Web Signature (JWS). | [default to undefined]
**signature** | **string** | The JSON Web Signature (JWS). | [default to undefined]

## Example

```typescript
import { WebPushProvisioningApplePayJWSModel } from './api';

const instance: WebPushProvisioningApplePayJWSModel = {
    header,
    payload,
    _protected,
    signature,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
