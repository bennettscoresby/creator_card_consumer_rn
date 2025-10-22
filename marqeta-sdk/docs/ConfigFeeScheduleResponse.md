# ConfigFeeScheduleResponse

Contains information returned when configuring fees.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Whether the fee is active. | [optional] [default to undefined]
**created_date** | **string** | Date and time when the fee was created on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**schedule** | [**Array&lt;ConfigFeeScheduleEntry&gt;**](ConfigFeeScheduleEntry.md) | Contains one or more fee schedules. | [optional] [default to undefined]
**type** | [**AccountProductFeeType**](AccountProductFeeType.md) |  | [optional] [default to undefined]
**updated_date** | **string** | Date and time when the fee was last updated on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]

## Example

```typescript
import { ConfigFeeScheduleResponse } from './api';

const instance: ConfigFeeScheduleResponse = {
    active,
    created_date,
    schedule,
    type,
    updated_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
