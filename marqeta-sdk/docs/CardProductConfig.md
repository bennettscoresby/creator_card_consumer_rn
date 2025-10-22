# CardProductConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_life_cycle** | [**CardLifeCycle**](CardLifeCycle.md) |  | [optional] [default to undefined]
**clearing_and_settlement** | [**ClearingAndSettlement**](ClearingAndSettlement.md) |  | [optional] [default to undefined]
**digital_wallet_tokenization** | [**DigitalWalletTokenization**](DigitalWalletTokenization.md) |  | [optional] [default to undefined]
**fulfillment** | [**CardProductFulfillment**](CardProductFulfillment.md) |  | [optional] [default to undefined]
**jit_funding** | [**JitFunding**](JitFunding.md) |  | [optional] [default to undefined]
**poi** | [**Poi**](Poi.md) |  | [optional] [default to undefined]
**selective_auth** | [**SelectiveAuth**](SelectiveAuth.md) |  | [optional] [default to undefined]
**special** | [**Special**](Special.md) |  | [optional] [default to undefined]
**transaction_controls** | [**TransactionControls**](TransactionControls.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CardProductConfig } from './api';

const instance: CardProductConfig = {
    card_life_cycle,
    clearing_and_settlement,
    digital_wallet_tokenization,
    fulfillment,
    jit_funding,
    poi,
    selective_auth,
    special,
    transaction_controls,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
