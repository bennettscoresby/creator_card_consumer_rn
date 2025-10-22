# PolicyAprPurchaseReq

Contains information on the pricing strategy for purchases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_token** | **string** | Unique identifier of the external pricing strategy for the credit program. | [optional] [default to undefined]
**name** | **string** | Name of the pricing strategy. | [optional] [default to undefined]
**tiers** | [**Array&lt;PolicyAprTierReq&gt;**](PolicyAprTierReq.md) | One or more risk tiers for a pricing strategy. | [default to undefined]

## Example

```typescript
import { PolicyAprPurchaseReq } from './api';

const instance: PolicyAprPurchaseReq = {
    external_token,
    name,
    tiers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
