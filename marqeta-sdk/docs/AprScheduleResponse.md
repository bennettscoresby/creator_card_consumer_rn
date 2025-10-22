# AprScheduleResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Whether the APR is active. | [optional] [default to undefined]
**created_date** | **string** | Date and time when the APR was created on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**schedule** | [**Array&lt;AprScheduleEntryResponse&gt;**](AprScheduleEntryResponse.md) | Contains one or more &#x60;schedule&#x60; objects, which contain information about the annual percentage rates (APRs) associated with the type of balance on the credit account and when they are effective. | [default to undefined]
**type** | [**AccountAprType**](AccountAprType.md) |  | [default to undefined]
**updated_date** | **string** | Date and time when the APR was last updated on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]

## Example

```typescript
import { AprScheduleResponse } from './api';

const instance: AprScheduleResponse = {
    active,
    created_date,
    schedule,
    type,
    updated_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
