# PolicyFeeResponse

Contains information on a fee policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**PolicyFeeAccount**](PolicyFeeAccount.md) |  | [optional] [default to undefined]
**created_time** | **string** | Date and time when the fee policy was created on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**description** | **string** | Description of the fee policy. | [optional] [default to undefined]
**name** | **string** | Name of the fee policy. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the fee policy. | [optional] [default to undefined]
**updated_time** | **string** | Date and time when the fee policy was last updated on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]

## Example

```typescript
import { PolicyFeeResponse } from './api';

const instance: PolicyFeeResponse = {
    account,
    created_time,
    description,
    name,
    token,
    updated_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
