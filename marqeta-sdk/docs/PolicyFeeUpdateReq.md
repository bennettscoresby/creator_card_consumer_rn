# PolicyFeeUpdateReq

Response details to update a fee policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**PolicyFeeAccount**](PolicyFeeAccount.md) |  | [optional] [default to undefined]
**description** | **string** | Description of the fee policy. | [optional] [default to undefined]
**name** | **string** | Name of the fee policy. | [default to undefined]
**periodic** | [**PolicyFeePeriodic**](PolicyFeePeriodic.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PolicyFeeUpdateReq } from './api';

const instance: PolicyFeeUpdateReq = {
    account,
    description,
    name,
    periodic,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
