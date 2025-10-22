# TerminalModel

Contains information about the point of sale, including details on how the card was presented.  Returned if provided by the card network, and the request uses Transaction Model v1 of the Marqeta Core API. Not returned for Transaction Model v2 requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_presence** | **string** | Indicates whether the card was present during the transaction. | [optional] [default to undefined]
**cardholder_presence** | **string** | Indicates whether the cardholder was present during the transaction. | [optional] [default to undefined]
**partial_approval_capable** | **string** | Indicates whether the card acceptor or terminal supports partial-approval transactions. | [optional] [default to undefined]
**pin_present** | **string** | Indicates whether the cardholder entered a PIN during the transaction. | [optional] [default to undefined]
**special_condition_indicator** | **string** | Indicates a higher-risk operation, such as a quasi-cash or cryptocurrency transaction.  These transactions typically involve non-financial institutions. | [optional] [default to undefined]
**tid** | **string** | Card acceptor or terminal identification number. | [optional] [default to undefined]
**transaction_initiated_by** | **string** | Specifies the initiator of the transaction. | [optional] [default to undefined]
**transaction_initiated_category** | **string** | Specifies the category of a point-of-sale transaction. | [optional] [default to undefined]

## Example

```typescript
import { TerminalModel } from './api';

const instance: TerminalModel = {
    card_presence,
    cardholder_presence,
    partial_approval_capable,
    pin_present,
    special_condition_indicator,
    tid,
    transaction_initiated_by,
    transaction_initiated_category,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
