# ProductResponse

Specifies shared details for a credit program.  Once set to `ACTIVE`, cannot be edited or deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_product_tokens** | **Array&lt;string&gt;** | One or more associated card product tokens. | [optional] [default to undefined]
**classification** | [**ProductClassification**](ProductClassification.md) |  | [optional] [default to undefined]
**config** | [**ProductConfig**](ProductConfig.md) |  | [optional] [default to undefined]
**created_time** | **string** | Date and time when the credit product was created on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**credit_line** | [**ProductCreditLine**](ProductCreditLine.md) |  | [optional] [default to undefined]
**currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [optional] [default to undefined]
**description** | **string** | Description of the credit product. | [optional] [default to undefined]
**interest_calculation** | [**InterestCalculation**](InterestCalculation.md) |  | [optional] [default to undefined]
**min_payment_calculation** | [**ProductMinPaymentCalculation**](ProductMinPaymentCalculation.md) |  | [optional] [default to undefined]
**min_payment_flat_amount** | **number** | Minimum payment, expressed as a flat amount, due on the payment due day. | [optional] [default to undefined]
**min_payment_percentage** | **number** | Minimum payment, expressed as a percentage of the total statement balance, due on the payment due day. | [optional] [default to undefined]
**name** | **string** | Name of the credit product. | [optional] [default to undefined]
**parent_product_token** | **string** | Unique identifier of the parent credit product. | [optional] [default to undefined]
**payment_allocation_order** | [**Array&lt;PaymentAllocationOrderEnum&gt;**](PaymentAllocationOrderEnum.md) | Ordered list of balance types to which payments are allocated, from first to last. | [optional] [default to undefined]
**product_sub_type** | [**ProductSubType**](ProductSubType.md) |  | [optional] [default to undefined]
**product_type** | [**ProductType**](ProductType.md) |  | [optional] [default to undefined]
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] [default to undefined]
**token** | **string** | Unique identifier of the credit product. | [optional] [default to undefined]
**updated_time** | **string** | Date and time when the credit product was last updated on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**usage** | [**Array&lt;BalanceType&gt;**](BalanceType.md) | One or more usage types for the credit product. | [optional] [default to undefined]

## Example

```typescript
import { ProductResponse } from './api';

const instance: ProductResponse = {
    card_product_tokens,
    classification,
    config,
    created_time,
    credit_line,
    currency_code,
    description,
    interest_calculation,
    min_payment_calculation,
    min_payment_flat_amount,
    min_payment_percentage,
    name,
    parent_product_token,
    payment_allocation_order,
    product_sub_type,
    product_type,
    status,
    token,
    updated_time,
    usage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
