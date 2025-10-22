# ConfigFeeScheduleReq

Contains information relevant to configuring fees.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule** | [**Array&lt;ConfigFeeScheduleEntry&gt;**](ConfigFeeScheduleEntry.md) | Contains one or more fee schedules. | [default to undefined]
**type** | [**AccountProductFeeType**](AccountProductFeeType.md) |  | [default to undefined]

## Example

```typescript
import { ConfigFeeScheduleReq } from './api';

const instance: ConfigFeeScheduleReq = {
    schedule,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
