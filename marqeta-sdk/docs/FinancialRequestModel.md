# FinancialRequestModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [default to undefined]
**card_acceptor** | [**CardAcceptorModel**](CardAcceptorModel.md) |  | [default to undefined]
**card_token** | **string** |  | [default to undefined]
**cash_back_amount** | **number** |  | [optional] [default to undefined]
**is_pre_auth** | **boolean** |  | [optional] [default to false]
**mid** | **string** |  | [default to undefined]
**pin** | **string** |  | [optional] [default to undefined]
**transaction_options** | [**TransactionOptions**](TransactionOptions.md) |  | [optional] [default to undefined]
**webhook** | [**Webhook**](Webhook.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FinancialRequestModel } from './api';

const instance: FinancialRequestModel = {
    amount,
    card_acceptor,
    card_token,
    cash_back_amount,
    is_pre_auth,
    mid,
    pin,
    transaction_options,
    webhook,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
