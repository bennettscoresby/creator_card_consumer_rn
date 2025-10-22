# NetworkFeeModel

Contains card network fees assessed against the cardholder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of the network fee. | [optional] [default to undefined]
**credit_debit** | **string** | Indicates whether the fee is a credit or a debit.  * *C* indicates a credit * *D* indicates a debit | [optional] [default to undefined]
**currency** | **string** | Type of currency used when assessing a &#x60;CROSS_BORDER_ISSUER_FEE&#x60; or &#x60;INTERCHANGE_FEE&#x60; on Mastercard multi-currency transactions. Three-digit link:https://www.iso.org/iso-4217-currency-codes.html[ISO 4217 currency code, window&#x3D;\&quot;_blank\&quot;]. | [optional] [default to undefined]
**type** | **string** | Type of fee assessed by the card network. | [optional] [default to undefined]

## Example

```typescript
import { NetworkFeeModel } from './api';

const instance: NetworkFeeModel = {
    amount,
    credit_debit,
    currency,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
