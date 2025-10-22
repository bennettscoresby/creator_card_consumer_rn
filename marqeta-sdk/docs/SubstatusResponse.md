# SubstatusResponse

Contains information about the substatus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**Array&lt;SubstatusResponseAttributesInner&gt;**](SubstatusResponseAttributesInner.md) | Additional dynamic attributes related to the substatus.  If the substatus is &#x60;BANKRUPTCY&#x60;, &#x60;SCRA&#x60;, or &#x60;POWER_OF_ATTORNEY&#x60;, then attributes are present. | [optional] [default to undefined]
**created_time** | **string** | Date and time when the substatus was created on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**events** | [**Array&lt;SubstatusEventResponseDetails&gt;**](SubstatusEventResponseDetails.md) | List of events related to the substatus. | [optional] [default to undefined]
**is_active** | **boolean** | Denotes whether a substatus is active. | [default to undefined]
**resource_token** | **string** | Unique identifier of the resource. | [default to undefined]
**resource_type** | **string** | Type of resource to which the substatus is applied. | [default to undefined]
**state** | **string** | Current state of the substatus. | [default to undefined]
**substatus** | **string** | Type of substatus. | [default to undefined]
**token** | **string** | Unique identifier of the credit substatus. | [default to undefined]
**updated_time** | **string** | Date and time when the substatus was last updated on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]

## Example

```typescript
import { SubstatusResponse } from './api';

const instance: SubstatusResponse = {
    attributes,
    created_time,
    events,
    is_active,
    resource_token,
    resource_type,
    state,
    substatus,
    token,
    updated_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
