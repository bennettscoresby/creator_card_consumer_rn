# SubstatusEventResponseDetails

Details of an event related to a substatus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | The channel through which the event occurred. | [default to undefined]
**created_time** | **string** | Creation time of the event. | [default to undefined]
**effective_date** | **string** | Effective date of the event, in UTC. | [default to undefined]
**reason** | **string** | Reason for the event. | [optional] [default to undefined]
**state** | **string** | The state of the event. | [default to undefined]

## Example

```typescript
import { SubstatusEventResponseDetails } from './api';

const instance: SubstatusEventResponseDetails = {
    channel,
    created_time,
    effective_date,
    reason,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
