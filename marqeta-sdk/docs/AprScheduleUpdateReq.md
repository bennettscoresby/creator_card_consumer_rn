# AprScheduleUpdateReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule** | [**Array&lt;AprScheduleEntryUpdateReq&gt;**](AprScheduleEntryUpdateReq.md) | Contains one or more &#x60;schedule&#x60; objects, which contain information about the annual percentage rates (APRs) associated with the type of balance on the credit account and when they are effective. | [default to undefined]
**type** | [**AccountAprType**](AccountAprType.md) |  | [default to undefined]

## Example

```typescript
import { AprScheduleUpdateReq } from './api';

const instance: AprScheduleUpdateReq = {
    schedule,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
