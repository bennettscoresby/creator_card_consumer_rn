# OrignalcreditRequestModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [default to undefined]
**card_acceptor** | [**CardAcceptorModel**](CardAcceptorModel.md) |  | [optional] [default to undefined]
**card_token** | **string** |  | [default to undefined]
**mid** | **string** |  | [default to undefined]
**screening_score** | **string** |  | [optional] [default to undefined]
**sender_data** | [**OriginalCreditSenderData**](OriginalCreditSenderData.md) |  | [optional] [default to undefined]
**transactionPurpose** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [default to undefined]
**webhook** | [**Webhook**](Webhook.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrignalcreditRequestModel } from './api';

const instance: OrignalcreditRequestModel = {
    amount,
    card_acceptor,
    card_token,
    mid,
    screening_score,
    sender_data,
    transactionPurpose,
    type,
    webhook,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
