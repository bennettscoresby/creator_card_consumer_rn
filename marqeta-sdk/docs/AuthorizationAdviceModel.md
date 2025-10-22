# AuthorizationAdviceModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [default to undefined]
**network_fees** | [**Array&lt;NetworkFeeModel&gt;**](NetworkFeeModel.md) |  | [optional] [default to undefined]
**original_transaction_token** | **string** |  | [default to undefined]
**transaction_options** | [**TransactionOptions**](TransactionOptions.md) |  | [optional] [default to undefined]
**webhook** | [**Webhook**](Webhook.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AuthorizationAdviceModel } from './api';

const instance: AuthorizationAdviceModel = {
    amount,
    network_fees,
    original_transaction_token,
    transaction_options,
    webhook,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
