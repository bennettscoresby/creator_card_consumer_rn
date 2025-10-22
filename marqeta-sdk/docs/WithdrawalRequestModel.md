# WithdrawalRequestModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_type** | **string** |  | [optional] [default to undefined]
**amount** | **number** |  | [default to undefined]
**card_acceptor** | [**CardAcceptorModel**](CardAcceptorModel.md) |  | [optional] [default to undefined]
**card_token** | **string** |  | [default to undefined]
**mid** | **string** |  | [default to undefined]
**pin** | **string** |  | [optional] [default to undefined]
**webhook** | [**Webhook**](Webhook.md) |  | [optional] [default to undefined]

## Example

```typescript
import { WithdrawalRequestModel } from './api';

const instance: WithdrawalRequestModel = {
    account_type,
    amount,
    card_acceptor,
    card_token,
    mid,
    pin,
    webhook,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
