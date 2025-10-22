# FraudView

Contains one or more fraud determinations by the card network that apply to either the transaction or the cardholder\'s account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issuer_processor** | [**IssuerFraudView**](IssuerFraudView.md) |  | [optional] [default to undefined]
**network** | [**NetworkFraudView**](NetworkFraudView.md) |  | [optional] [default to undefined]
**network_account_intelligence_score** | [**NetworkAccountIntelligenceScore**](NetworkAccountIntelligenceScore.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FraudView } from './api';

const instance: FraudView = {
    issuer_processor,
    network,
    network_account_intelligence_score,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
