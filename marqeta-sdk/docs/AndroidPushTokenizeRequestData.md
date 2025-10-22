# AndroidPushTokenizeRequestData

Contains details about a card tokenization push request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **string** | Name of the card as displayed in the digital wallet, typically showing the card brand and last four digits of the primary account number (PAN). &#x60;Visa 5678&#x60;, for example. | [optional] [default to undefined]
**last_digits** | **string** | Last four digits of the primary account number of the physical or virtual card. | [optional] [default to undefined]
**network** | **string** | Specifies the card network of the physical or virtual card. | [optional] [default to undefined]
**opaque_payment_card** | **string** | Encrypted data field created by the issuer and passed to Google Wallet during the push provisioning process. | [optional] [default to undefined]
**token_service_provider** | **string** | Specifies the network that provides the digital wallet token service. | [optional] [default to undefined]
**user_address** | [**AndroidPushTokenRequestAddress**](AndroidPushTokenRequestAddress.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AndroidPushTokenizeRequestData } from './api';

const instance: AndroidPushTokenizeRequestData = {
    display_name,
    last_digits,
    network,
    opaque_payment_card,
    token_service_provider,
    user_address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
