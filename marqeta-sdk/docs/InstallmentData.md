# InstallmentData

Contains the installment plan identifier used by the Visa Transaction Matching Service for Issuers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**installment_plan_identifier** | **string** | (_Visa only_) Visa Transaction Matching Service for Issuers identifier. This identifier matches a transaction on the Marqeta platform to an installment plan or Pay by Points transaction on the Visa card network. | [optional] [default to undefined]

## Example

```typescript
import { InstallmentData } from './api';

const instance: InstallmentData = {
    installment_plan_identifier,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
