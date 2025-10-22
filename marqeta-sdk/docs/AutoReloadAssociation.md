# AutoReloadAssociation

Specifies the scope of the auto reload.  Input no more than one field. If no value is supplied, the auto reload applies at the program level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_template_token** | **string** |  | [optional] [default to undefined]
**business_token** | **string** | Unique identifier of the business for which the auto reload is configured.  Send a &#x60;GET&#x60; request to &#x60;/businesses&#x60; to retrieve business tokens. | [optional] [default to undefined]
**card_product_token** | **string** | Unique identifier of the card product for which the auto reload is configured.  Send a &#x60;GET&#x60; request to &#x60;/cardproducts&#x60; to retrieve card product tokens. | [optional] [default to undefined]
**user_token** | **string** | Unique identifier of the user for which the auto reload is configured.  Send a &#x60;GET&#x60; request to &#x60;/users&#x60; to retrieve user tokens. | [optional] [default to undefined]

## Example

```typescript
import { AutoReloadAssociation } from './api';

const instance: AutoReloadAssociation = {
    account_template_token,
    business_token,
    card_product_token,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
