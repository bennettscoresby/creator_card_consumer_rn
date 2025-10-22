# PolicyProductResponse

Contains information on the credit product policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_products** | [**Array&lt;PolicyProductCardProductResponse&gt;**](PolicyProductCardProductResponse.md) | One or more card products associated with the credit product policy. | [optional] [default to undefined]
**classification** | [**ProductClassification**](ProductClassification.md) |  | [optional] [default to undefined]
**created_time** | **string** | Date and time when the credit product policy was created on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**credit_line** | [**ProductCreditLine**](ProductCreditLine.md) |  | [optional] [default to undefined]
**currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [optional] [default to undefined]
**description** | **string** | Description of the credit product policy. | [optional] [default to undefined]
**interest_calculation** | [**InterestCalculation**](InterestCalculation.md) |  | [optional] [default to undefined]
**name** | **string** | Name of the credit product policy. | [optional] [default to undefined]
**payments** | [**PolicyProductPaymentConfiguration**](PolicyProductPaymentConfiguration.md) |  | [optional] [default to undefined]
**product_sub_type** | [**ProductSubType**](ProductSubType.md) |  | [optional] [default to undefined]
**product_type** | [**ProductType**](ProductType.md) |  | [optional] [default to undefined]
**token** | **string** | Unique identifier of the credit product policy. | [optional] [default to undefined]
**updated_time** | **string** | Date and time when the credit product policy was last updated on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**usage** | [**Array&lt;BalanceType&gt;**](BalanceType.md) | One or more usage types for the credit product policy. | [optional] [default to undefined]

## Example

```typescript
import { PolicyProductResponse } from './api';

const instance: PolicyProductResponse = {
    card_products,
    classification,
    created_time,
    credit_line,
    currency_code,
    description,
    interest_calculation,
    name,
    payments,
    product_sub_type,
    product_type,
    token,
    updated_time,
    usage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
