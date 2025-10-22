# AdsCardDetailsRequest

Request object for creating or updating a Visa ADS card.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billingAddress** | [**AdsBillingAddress**](AdsBillingAddress.md) |  | [default to undefined]
**cardToken** | **string** | Unique identifier of the card. | [default to undefined]
**cardType** | **string** | Indicates the type of card for the payment credential. | [default to undefined]
**currencyCode** | **string** | Three-digit ISO 4217 currency code for the payment credential. | [optional] [default to undefined]
**issuerName** | **string** | Name of the card issuer for the payment credential. | [default to undefined]
**nameOnCard** | **string** | Name on the card for the payment credential. | [default to undefined]
**preferredFor** | **Array&lt;string&gt;** | Indicates if a payment credential is a preferred Receiving, Sending, or Paying account. | [optional] [default to undefined]

## Example

```typescript
import { AdsCardDetailsRequest } from './api';

const instance: AdsCardDetailsRequest = {
    billingAddress,
    cardToken,
    cardType,
    currencyCode,
    issuerName,
    nameOnCard,
    preferredFor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
