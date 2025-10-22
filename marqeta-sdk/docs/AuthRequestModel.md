# AuthRequestModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [default to undefined]
**card_acceptor** | [**CardAcceptorModel**](CardAcceptorModel.md) |  | [optional] [default to undefined]
**card_options** | [**CardOptions**](CardOptions.md) |  | [optional] [default to undefined]
**card_token** | **string** |  | [default to undefined]
**cash_back_amount** | **number** |  | [optional] [default to undefined]
**is_pre_auth** | **boolean** |  | [optional] [default to false]
**mid** | **string** |  | [default to undefined]
**network_fees** | [**Array&lt;NetworkFeeModel&gt;**](NetworkFeeModel.md) |  | [optional] [default to undefined]
**network_metadata** | [**NetworkMetadata**](NetworkMetadata.md) |  | [optional] [default to undefined]
**pin** | **string** |  | [optional] [default to undefined]
**transaction_options** | [**TransactionOptions**](TransactionOptions.md) |  | [optional] [default to undefined]
**webhook** | [**Webhook**](Webhook.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AuthRequestModel } from './api';

const instance: AuthRequestModel = {
    amount,
    card_acceptor,
    card_options,
    card_token,
    cash_back_amount,
    is_pre_auth,
    mid,
    network_fees,
    network_metadata,
    pin,
    transaction_options,
    webhook,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
