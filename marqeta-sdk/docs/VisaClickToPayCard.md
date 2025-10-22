# VisaClickToPayCard

Card information for Visa Click to Pay.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billingAddress** | [**VisaClickToPayBillingAddress**](VisaClickToPayBillingAddress.md) |  | [default to undefined]
**cardToken** | **string** | Unique identifier of the card. | [default to undefined]
**nameOnCard** | **string** | Name of the cardholder that appears on the card. | [default to undefined]

## Example

```typescript
import { VisaClickToPayCard } from './api';

const instance: VisaClickToPayCard = {
    billingAddress,
    cardToken,
    nameOnCard,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
