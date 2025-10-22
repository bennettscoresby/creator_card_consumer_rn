# PolicyFeeForeignTransaction

Contains information on a specific fee in a fee policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_method** | **string** | Method used to calculate the fee value. | [optional] [default to undefined]
**default_value** | **number** | Percentage value for the foreign transaction fee. | [optional] [default to undefined]

## Example

```typescript
import { PolicyFeeForeignTransaction } from './api';

const instance: PolicyFeeForeignTransaction = {
    default_method,
    default_value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
