# BalanceInquiryRequestModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_type** | **string** |  | [default to undefined]
**card_acceptor** | [**CardAcceptorModel**](CardAcceptorModel.md) |  | [default to undefined]
**card_token** | **string** |  | [default to undefined]
**mid** | **string** |  | [default to undefined]
**network_fees** | [**Array&lt;NetworkFeeModel&gt;**](NetworkFeeModel.md) |  | [optional] [default to undefined]
**pin** | **string** |  | [optional] [default to undefined]
**webhook** | [**Webhook**](Webhook.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BalanceInquiryRequestModel } from './api';

const instance: BalanceInquiryRequestModel = {
    account_type,
    card_acceptor,
    card_token,
    mid,
    network_fees,
    pin,
    webhook,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
