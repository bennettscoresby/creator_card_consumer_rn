# CardGroup

Request body for a Card Group object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_tokens** | **Array&lt;string&gt;** | Array of card tokens associated with group. There will be at least one card token in the array. | [optional] [default to undefined]
**created_time** | **string** | Date and time the card group was created in the system. The date and time is provided in ISO 8601 format. | [optional] [default to undefined]
**last_issued_card_token** | **string** | Unique identifier of the last reissued card token associated with group. It may be empty if there is no reissued card. | [optional] [default to undefined]
**source_card_token** | **string** | Unique identifier of the card token associated with group. This is the card that will be used to create the card group. The Card Group Service will send a request to JCard to verify that this card is not a reissue or replacement. | [default to undefined]
**token** | **string** | Unique identifier of the card group.  If you do not include a token, the system will generate one automatically. This token is necessary for use in other API calls, so we recommend that rather than let the system generate one, you use a simple string that is easy to remember. This value cannot be updated. | [default to undefined]
**updated_time** | **string** | Date and time the card group was last updated in the system. The date and time is provided in ISO 8601 format. | [optional] [default to undefined]
**user_token** | **string** | Unique identifier of the user this card group belongs to. | [optional] [default to undefined]

## Example

```typescript
import { CardGroup } from './api';

const instance: CardGroup = {
    card_tokens,
    created_time,
    last_issued_card_token,
    source_card_token,
    token,
    updated_time,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
