# VisaClickToPayEnrollCardsRequest

Request to enroll a card for an existing cardholder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card** | [**VisaClickToPayCard**](VisaClickToPayCard.md) |  | [default to undefined]
**userToken** | **string** | Unique identifier of the cardholder. | [default to undefined]

## Example

```typescript
import { VisaClickToPayEnrollCardsRequest } from './api';

const instance: VisaClickToPayEnrollCardsRequest = {
    card,
    userToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
