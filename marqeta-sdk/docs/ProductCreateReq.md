# ProductCreateReq

Specifies shared details for a credit program.  Once set to `ACTIVE`, cannot be edited or deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_product_tokens** | **Array&lt;string&gt;** | One or more associated card product tokens. | [default to undefined]
**classification** | [**ProductClassification**](ProductClassification.md) |  | [default to undefined]
**config** | [**ProductConfig**](ProductConfig.md) |  | [default to undefined]
**credit_line** | [**ProductCreditLine**](ProductCreditLine.md) |  | [default to undefined]
**currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [default to undefined]
**description** | **string** | Description of the credit product. | [optional] [default to undefined]
**interest_calculation** | [**InterestCalculation**](InterestCalculation.md) |  | [default to undefined]
**min_payment_calculation** | [**ProductMinPaymentCalculation**](ProductMinPaymentCalculation.md) |  | [optional] [default to undefined]
**min_payment_flat_amount** | **number** | Minimum payment, expressed as a flat amount, due on the payment due day. | [default to undefined]
**min_payment_percentage** | **number** | Minimum payment, expressed as a percentage of the total statement balance, due on the payment due day. | [default to undefined]
**name** | **string** | Name of the credit product. | [default to undefined]
**payment_allocation_order** | [**Array&lt;PaymentAllocationOrderEnum&gt;**](PaymentAllocationOrderEnum.md) | Ordered list of balance types to which payments are allocated, from first to last. | [default to undefined]
**product_sub_type** | [**ProductSubType**](ProductSubType.md) |  | [default to undefined]
**product_type** | [**ProductType**](ProductType.md) |  | [default to undefined]
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] [default to undefined]
**token** | **string** | Unique identifier of the credit product. | [optional] [default to undefined]
**usage** | [**Array&lt;BalanceType&gt;**](BalanceType.md) | One or more usage types for the credit product. | [default to undefined]

## Example

```typescript
import { ProductCreateReq } from './api';

const instance: ProductCreateReq = {
    card_product_tokens,
    classification,
    config,
    credit_line,
    currency_code,
    description,
    interest_calculation,
    min_payment_calculation,
    min_payment_flat_amount,
    min_payment_percentage,
    name,
    payment_allocation_order,
    product_sub_type,
    product_type,
    status,
    token,
    usage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
