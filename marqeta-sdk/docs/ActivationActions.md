# ActivationActions

Defines actions to execute when the card is activated. The fields in this object are mutually exclusive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**swap_digital_wallet_tokens_from_card_token** | **string** | Moves all digital wallet tokens from the specified card to the new card.  Not relevant when &#x60;reissue_pan_from_card_token&#x60; is set.  Send a &#x60;GET&#x60; request to &#x60;/cards/user/{token}&#x60; to retrieve card tokens for a particular user. | [optional] [default to undefined]
**terminate_reissued_source_card** | **boolean** | If you are reissuing a card, the source card is terminated by default. To prevent the source card from being terminated, set this field to &#x60;false&#x60;.  Only relevant when &#x60;reissue_pan_from_card_token&#x60; is set. | [optional] [default to true]

## Example

```typescript
import { ActivationActions } from './api';

const instance: ActivationActions = {
    swap_digital_wallet_tokens_from_card_token,
    terminate_reissued_source_card,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
