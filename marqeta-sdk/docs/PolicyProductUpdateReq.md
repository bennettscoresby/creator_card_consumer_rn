# PolicyProductUpdateReq

Request details to update a credit product policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_products** | [**Array&lt;PolicyProductCardProductReq&gt;**](PolicyProductCardProductReq.md) | One or more card products associated with the credit product policy. | [default to undefined]
**classification** | [**ProductClassification**](ProductClassification.md) |  | [default to undefined]
**credit_line** | [**ProductCreditLine**](ProductCreditLine.md) |  | [default to undefined]
**currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [default to undefined]
**description** | **string** | Description of the credit product policy. | [optional] [default to undefined]
**interest_calculation** | [**InterestCalculation**](InterestCalculation.md) |  | [default to undefined]
**name** | **string** | Name of the credit product policy. | [default to undefined]
**payments** | [**PolicyProductPaymentConfiguration**](PolicyProductPaymentConfiguration.md) |  | [default to undefined]
**product_sub_type** | [**ProductSubType**](ProductSubType.md) |  | [default to undefined]
**product_type** | [**ProductType**](ProductType.md) |  | [default to undefined]
**usage** | [**Array&lt;BalanceType&gt;**](BalanceType.md) | One or more usage types for the credit product policy. | [default to undefined]

## Example

```typescript
import { PolicyProductUpdateReq } from './api';

const instance: PolicyProductUpdateReq = {
    card_products,
    classification,
    credit_line,
    currency_code,
    description,
    interest_calculation,
    name,
    payments,
    product_sub_type,
    product_type,
    usage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
