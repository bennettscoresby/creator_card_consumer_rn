# ClearingModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [default to undefined]
**card_acceptor** | [**CardAcceptorModel**](CardAcceptorModel.md) |  | [optional] [default to undefined]
**force_post** | **boolean** |  | [optional] [default to false]
**is_refund** | **boolean** |  | [optional] [default to false]
**mid** | **string** |  | [optional] [default to undefined]
**network_fees** | [**Array&lt;NetworkFeeModel&gt;**](NetworkFeeModel.md) |  | [optional] [default to undefined]
**original_transaction_token** | **string** |  | [default to undefined]
**webhook** | [**Webhook**](Webhook.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ClearingModel } from './api';

const instance: ClearingModel = {
    amount,
    card_acceptor,
    force_post,
    is_refund,
    mid,
    network_fees,
    original_transaction_token,
    webhook,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
