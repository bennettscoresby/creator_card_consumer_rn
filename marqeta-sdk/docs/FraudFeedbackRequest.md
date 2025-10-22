# FraudFeedbackRequest

of the fraud object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actor** | **string** | This is the party making a call. | [default to undefined]
**amount** | **string** |  | [default to undefined]
**is_fraud** | **boolean** |  | [default to undefined]
**status** | **string** | This is the value of the status of the fraud. | [default to undefined]
**transaction_token** | **string** |  | [default to undefined]

## Example

```typescript
import { FraudFeedbackRequest } from './api';

const instance: FraudFeedbackRequest = {
    actor,
    amount,
    is_fraud,
    status,
    transaction_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
