# RiskAssessment

Contains the digital wallet provider\'s risk assessment for provisioning the digital wallet token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **string** | Wallet provider\&#39;s decision as to whether the digital wallet token should be provisioned. | [optional] [default to undefined]
**version** | **string** | Wallet provider\&#39;s risk assessment version. | [optional] [default to undefined]

## Example

```typescript
import { RiskAssessment } from './api';

const instance: RiskAssessment = {
    score,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
