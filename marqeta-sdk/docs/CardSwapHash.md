# CardSwapHash

Contains identifiers for swapping digital wallet tokens between cards.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_card_token** | **string** | Unique identifier of the new card resource to which the digital wallet tokens are assigned. | [default to undefined]
**previous_card_token** | **string** | Unique identifier of the existing card resource that has digital wallet tokens assigned to it. | [default to undefined]

## Example

```typescript
import { CardSwapHash } from './api';

const instance: CardSwapHash = {
    new_card_token,
    previous_card_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
