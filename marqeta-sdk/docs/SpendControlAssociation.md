# SpendControlAssociation

Defines the group of users to which the velocity control applies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_template_token** | **string** |  | [optional] [default to undefined]
**card_product_token** | **string** | Unique identifier of the card product.  Pass either &#x60;card_product_token&#x60; or &#x60;user_token&#x60;, not both. | [optional] [default to undefined]
**user_token** | **string** | Unique identifier of the cardholder.  Pass either &#x60;card_product_token&#x60; or &#x60;user_token&#x60;, not both. | [optional] [default to undefined]

## Example

```typescript
import { SpendControlAssociation } from './api';

const instance: SpendControlAssociation = {
    account_template_token,
    card_product_token,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
