# SettlementData

Contains information from the card network about currency conversion at the time of settlement, including the original currency of the transaction, the amount of the transaction in the original currency, and the conversion rate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The settled amount. | [optional] [default to undefined]
**conversion_rate** | **number** | Returned when the transaction currency is different from the origination currency.  Conversion rate between the origination currency and the settlement currency. | [optional] [default to undefined]
**currency_code** | **string** | The ISO 4217 code of the currency used in the transaction. | [optional] [default to undefined]

## Example

```typescript
import { SettlementData } from './api';

const instance: SettlementData = {
    amount,
    conversion_rate,
    currency_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
