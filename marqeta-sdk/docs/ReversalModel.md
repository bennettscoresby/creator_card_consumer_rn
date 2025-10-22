# ReversalModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [default to undefined]
**find_original_window_days** | **number** |  | [optional] [default to undefined]
**is_advice** | **boolean** |  | [optional] [default to false]
**network_fees** | [**Array&lt;NetworkFeeModel&gt;**](NetworkFeeModel.md) |  | [optional] [default to undefined]
**original_transaction_token** | **string** |  | [default to undefined]
**webhook** | [**Webhook**](Webhook.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ReversalModel } from './api';

const instance: ReversalModel = {
    amount,
    find_original_window_days,
    is_advice,
    network_fees,
    original_transaction_token,
    webhook,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
