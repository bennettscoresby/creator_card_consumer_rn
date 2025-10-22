# SamsungPushTokenizeRequestData

Contains details about a card tokenization push request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_type** | **string** | Specifies the type of card. | [optional] [default to undefined]
**display_name** | **string** | Name of the card as displayed in the digital wallet, typically showing the card brand and last four digits of the primary account number (PAN). &#x60;Visa 5678&#x60;, for example. | [optional] [default to undefined]
**extra_provision_payload** | **string** | Encrypted card or cardholder details. | [optional] [default to undefined]
**last_digits** | **string** | Last four digits of the primary account number of the physical or virtual card. | [optional] [default to undefined]
**network** | **string** | Specifies the card network of the physical or virtual card. | [optional] [default to undefined]
**token_service_provider** | **string** | Specifies the network that provides the digital wallet token service, as determined by the Samsung Wallet library. | [optional] [default to undefined]

## Example

```typescript
import { SamsungPushTokenizeRequestData } from './api';

const instance: SamsungPushTokenizeRequestData = {
    card_type,
    display_name,
    extra_provision_payload,
    last_digits,
    network,
    token_service_provider,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
