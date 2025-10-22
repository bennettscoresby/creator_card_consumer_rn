# Network

Contains information from the card network about currency conversion, including the original currency of the transaction, the amount of the transaction in the original currency, and the conversion rate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversion_rate** | **number** | Conversion rate between the origination currency and the settlement currency.  Returned when the transaction currency is different from the origination currency. | [optional] [default to undefined]
**dynamic_currency_conversion** | **boolean** | Indicates whether currency conversion was performed dynamically at the point of sale. | [optional] [default to false]
**original_amount** | **number** | Amount of the transaction in the currency in which it originated. | [optional] [default to undefined]
**original_currency_code** | **string** | Currency type of the origination currency. | [optional] [default to undefined]
**settlement_data** | [**SettlementData**](SettlementData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Network } from './api';

const instance: Network = {
    conversion_rate,
    dynamic_currency_conversion,
    original_amount,
    original_currency_code,
    settlement_data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
