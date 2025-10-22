# VelocityControlBalance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Indicates whether the velocity control is active. | [optional] [default to false]
**amount_limit** | **number** | Maximum monetary sum that can be cleared within the time period defined by velocity period. | [default to undefined]
**association** | [**Association**](Association.md) |  | [optional] [default to undefined]
**currency_code** | **string** | Three-character ISO 4217 currency code. | [default to undefined]
**merchant_scope** | [**MerchantScope**](MerchantScope.md) |  | [optional] [default to undefined]
**name** | **string** | Description of how the velocity control restricts spending. For example, \&quot;Max spend of $500 per day\&quot; or \&quot;Max spend of $5000 per month for non-exempt employees\&quot;. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the velocity control. | [optional] [default to undefined]
**usage_limit** | **number** | Maximum number of times a card can be used within the time period defined by the &#x60;velocity_window&#x60; field.  Leave &#x60;null&#x60; to indicate that the card can be used an unlimited number of times. | [optional] [default to undefined]
**velocity_window** | [**VelocityWindow**](VelocityWindow.md) |  | [optional] [default to undefined]
**velocity_window_start_day** | **number** | Start day of the velocity window defined by the &#x60;velocity_window&#x60; field. Default value is &#x60;1&#x60; | [optional] [default to undefined]
**available** | [**VelocityControlBalanceAllOfAvailable**](VelocityControlBalanceAllOfAvailable.md) |  | [optional] [default to undefined]

## Example

```typescript
import { VelocityControlBalance } from './api';

const instance: VelocityControlBalance = {
    active,
    amount_limit,
    association,
    currency_code,
    merchant_scope,
    name,
    token,
    usage_limit,
    velocity_window,
    velocity_window_start_day,
    available,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
