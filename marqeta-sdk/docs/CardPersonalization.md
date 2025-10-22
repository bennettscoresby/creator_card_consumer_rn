# CardPersonalization

Specifies personalized attributes to be added to the card.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier** | [**Carrier**](Carrier.md) |  | [optional] [default to undefined]
**images** | [**Images**](Images.md) |  | [optional] [default to undefined]
**perso_type** | **string** | Specifies the type of card personalization. | [optional] [default to undefined]
**text** | [**Text**](Text.md) |  | [default to undefined]

## Example

```typescript
import { CardPersonalization } from './api';

const instance: CardPersonalization = {
    carrier,
    images,
    perso_type,
    text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
