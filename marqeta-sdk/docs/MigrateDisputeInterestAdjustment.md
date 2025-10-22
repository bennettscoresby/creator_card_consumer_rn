# MigrateDisputeInterestAdjustment

Represents an interest charge associated with (as of this writing) either a payment or dispute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The fee amount.  * &#x60;&lt; 0 (Credit)&#x60; - The dispute is initiated. * &#x60;&gt; 0 (Debit)&#x60; - The dispute is lost. | [default to undefined]
**currency_code** | **string** | Valid three-digit ISO 4217 currency code. | [default to CurrencyCodeEnum_Usd]
**effective_date** | **string** |  | [default to undefined]

## Example

```typescript
import { MigrateDisputeInterestAdjustment } from './api';

const instance: MigrateDisputeInterestAdjustment = {
    amount,
    currency_code,
    effective_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
