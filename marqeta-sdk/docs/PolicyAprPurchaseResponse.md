# PolicyAprPurchaseResponse

Contains information on the pricing strategy for purchases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_token** | **string** | Unique identifier of the pricing strategy on a credit program. | [optional] [default to undefined]
**name** | **string** | Name of the pricing strategy. | [optional] [default to undefined]
**tiers** | [**Array&lt;PolicyAprTierResponse&gt;**](PolicyAprTierResponse.md) | One or more risk tiers for a pricing strategy. | [optional] [default to undefined]

## Example

```typescript
import { PolicyAprPurchaseResponse } from './api';

const instance: PolicyAprPurchaseResponse = {
    external_token,
    name,
    tiers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
