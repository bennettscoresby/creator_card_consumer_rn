# SubstatusEvent

Details of an event related to a substatus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | The mechanism by which the state of the substatus was applied.  * &#x60;ADMIN&#x60; - Indicates that the state of the substatus was added through the Marqeta Dashboard. * &#x60;API&#x60; - Indicates that you initiated an update of the substatus through the Core API. Use this value when creating a substatus. * &#x60;FRAUD&#x60; - Indicates that either Marqeta or the card network has determined that the account is fraudulent. * &#x60;SYSTEM&#x60; - Indicates that Marqeta initiated the state of the substatus. For example, Marqeta determined during application decisioning that the applicant is &#x60;MLA&#x60;. | [optional] [default to undefined]
**effective_date** | **string** | Date and time when the state of the substatus went into effect, in UTC. The effective date must be in the past. If no value is set, then the effective date and time will be the current time. | [optional] [default to undefined]
**reason** | **string** | Reason for applying a state designation to the substatus. | [optional] [default to undefined]
**state** | **string** | Initial state of the substatus.  * &#x60;ACTIVE&#x60; - Required if the substatus is &#x60;HARDSHIP&#x60;, &#x60;MLA&#x60;, &#x60;SCRA&#x60;, &#x60;DECEASED&#x60;, or &#x60;POWER_OF_ATTORNEY&#x60;. * &#x60;BANKRUPTCY_FILED&#x60; - Required if the substatus is &#x60;BANKRUPTCY&#x60;. * &#x60;DECEASED_REPORTED&#x60; - Required if the substatus is &#x60;DECEASED&#x60;. * &#x60;FRAUD_REPORTED&#x60; - Required if the substatus is &#x60;FRAUD&#x60;. | [default to undefined]

## Example

```typescript
import { SubstatusEvent } from './api';

const instance: SubstatusEvent = {
    channel,
    effective_date,
    reason,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
