# Account

Contains information related to the cardholder and provided by the digital wallet provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **string** | Digital wallet provider\&#39;s email address for the cardholder. | [optional] [default to undefined]
**id** | **string** | Digital wallet provider\&#39;s identity number for the cardholder. | [optional] [default to undefined]
**score** | **string** | Score from the digital wallet provider. | [optional] [default to undefined]

## Example

```typescript
import { Account } from './api';

const instance: Account = {
    email_address,
    id,
    score,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
