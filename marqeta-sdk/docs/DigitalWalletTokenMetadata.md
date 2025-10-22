# DigitalWalletTokenMetadata

Contains additional information about the digital wallet token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardproduct_preferred_notification_language** | **string** | Language specified in the &#x60;config.transaction_controls.notification_language&#x60; field of the card product:  * *ces* – Czech * *deu* – German * *eng* – English * *fra* – French * *grc* – Greek * *ita* – Italian * *nld* – Dutch * *pol* – Polish * *por* – Portuguese * *rou* – Romanian * *spa* – Spanish * *swe* – Swedish  By default, notifications are sent in English.  The ISO maintains the link:https://www.iso.org/iso-3166-country-codes.html[full list of ISO 3166 two- and three-digit numeric country codes, window&#x3D;\&quot;_blank\&quot;]. | [optional] [default to undefined]
**issuer_product_config_id** | **string** | Unique identifier of the product configuration on the Marqeta platform. | [optional] [default to undefined]

## Example

```typescript
import { DigitalWalletTokenMetadata } from './api';

const instance: DigitalWalletTokenMetadata = {
    cardproduct_preferred_notification_language,
    issuer_product_config_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
