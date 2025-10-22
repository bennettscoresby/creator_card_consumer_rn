# NetworkFraudView

Contains network-provided information about fraud determinations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_risk_score** | **string** | _(Visa only)_ Account holder risk condition code evaluated by the card network. A higher score indicates a greater likelihood that the card number is compromised. | [optional] [default to undefined]
**account_risk_score_reason_code** | **string** | _(Visa only)_ Unique code that describes the main driver of the &#x60;account_risk_score&#x60;. | [optional] [default to undefined]
**card_not_present_transaction_risk_score** | **string** | _(Visa only)_ Visa-provided score ranking the risk of fraud for a card-not-present transaction. A higher score indicates higher risk. Useful for making authorization decisions. | [optional] [default to undefined]
**dii_score** | **string** | Mastercard Digital Identity Insights risk score, where &#x60;0&#x60; indicates the lowest risk and &#x60;9&#x60; indicates the highest risk. | [optional] [default to undefined]
**dii_score_reason_code** | **string** | Mastercard Digital Identity Insights risk score reason code, where &#x60;AA&#x60; indicates the lowest risk, and &#x60;ZZ&#x60; indicates the highest risk. | [optional] [default to undefined]
**transaction_account_attack_intelligence_score** | **string** | _(Visa only)_ Visa-provided score ranking the risk of an account enumeration attack in a card-not-present transaction. A higher score indicates higher risk. A score of 00 indicates insufficient data to determine risk. Useful for making authorization decisions. | [optional] [default to undefined]
**transaction_risk_score** | **number** | Network-provided risk score for the transaction. A higher score indicates higher risk. Useful for making authorization decisions. | [optional] [default to undefined]
**transaction_risk_score_reason_code** | **string** | _(Mastercard only)_ Unique code that describes the main driver of the &#x60;transaction_risk_score&#x60;. | [optional] [default to undefined]
**transaction_risk_score_reason_description** | **string** | _(Mastercard only)_ Description of the &#x60;transaction_risk_score_reason_code&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { NetworkFraudView } from './api';

const instance: NetworkFraudView = {
    account_risk_score,
    account_risk_score_reason_code,
    card_not_present_transaction_risk_score,
    dii_score,
    dii_score_reason_code,
    transaction_account_attack_intelligence_score,
    transaction_risk_score,
    transaction_risk_score_reason_code,
    transaction_risk_score_reason_description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
