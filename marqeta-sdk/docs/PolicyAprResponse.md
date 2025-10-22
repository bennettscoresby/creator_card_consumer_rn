# PolicyAprResponse

Contains information on an APR policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **string** | Date and time when the APR policy was created on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**description** | **string** | Description of the APR policy. | [optional] [default to undefined]
**effective_date** | **string** | Date the APR goes into effect, in UTC. | [optional] [default to undefined]
**name** | **string** | Name of the APR policy. | [optional] [default to undefined]
**purchases** | [**PolicyAprPurchaseResponse**](PolicyAprPurchaseResponse.md) |  | [optional] [default to undefined]
**token** | **string** | Unique identifier of the APR policy. | [optional] [default to undefined]
**updated_time** | **string** | Date and time when the APR policy was last updated on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]

## Example

```typescript
import { PolicyAprResponse } from './api';

const instance: PolicyAprResponse = {
    created_time,
    description,
    effective_date,
    name,
    purchases,
    token,
    updated_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
