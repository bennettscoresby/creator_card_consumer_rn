# CardFulfillmentResponse

Determines physical characteristics of a card and shipment information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_fulfillment_reason** | **string** | Descriptive reason for the card fulfillment. | [optional] [default to undefined]
**card_personalization** | [**CardPersonalization**](CardPersonalization.md) |  | [default to undefined]
**shipping** | [**ShippingInformationResponse**](ShippingInformationResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CardFulfillmentResponse } from './api';

const instance: CardFulfillmentResponse = {
    card_fulfillment_reason,
    card_personalization,
    shipping,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
