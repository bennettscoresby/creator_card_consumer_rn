# AutoReloadModel

Contains information about an auto reload. See <</core-api/auto-reload, Auto Reloads>> for more information.  Returned if an auto reload was executed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Specifies whether the auto reload is active.  Only one auto reload per level, per object, can be active. | [optional] [default to true]
**association** | [**AutoReloadAssociation**](AutoReloadAssociation.md) |  | [optional] [default to undefined]
**currency_code** | **string** | Three-digit link:https://www.iso.org/iso-4217-currency-codes.html[ISO 4217 currency code, window&#x3D;\&quot;_blank\&quot;]. | [default to undefined]
**funding_source_address_token** | **string** | Unique identifier of the funding source address to use for this auto reload.  If your funding source is an ACH account, then a &#x60;funding_source_address_token&#x60; is not required. If your funding source is a payment card, you must have at least one funding source address in order to create a GPA order.  Send a &#x60;GET&#x60; request to &#x60;/fundingsources/addresses/user/{user_token}&#x60; to retrieve address tokens for a user.  Send a &#x60;GET&#x60; request to &#x60;/fundingsources/addresses/business/{business_token}&#x60; to retrieve address tokens for a business. | [optional] [default to undefined]
**funding_source_token** | **string** | Unique identifier of the funding source to use for this auto reload.  Send a &#x60;GET&#x60; request to &#x60;/fundingsources/user/{user_token}&#x60; to retrieve funding source tokens for a user.  Send a &#x60;GET&#x60; request to &#x60;/fundingsources/business/{business_token}&#x60; to retrieve funding source tokens for a business. | [optional] [default to undefined]
**order_scope** | [**OrderScope**](OrderScope.md) |  | [default to undefined]
**token** | **string** | Unique identifier of the auto reload.  If you do not include a token, the system will generate one automatically. This token is necessary for use in other API calls, so we recommend that rather than let the system generate one, you use a simple string that is easy to remember. This value cannot be updated. | [optional] [default to undefined]

## Example

```typescript
import { AutoReloadModel } from './api';

const instance: AutoReloadModel = {
    active,
    association,
    currency_code,
    funding_source_address_token,
    funding_source_token,
    order_scope,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
