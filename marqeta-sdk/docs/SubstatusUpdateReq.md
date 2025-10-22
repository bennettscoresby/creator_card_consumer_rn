# SubstatusUpdateReq

Contains information relevant to deactivating a substatus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | The mechanism by which a state designation was applied to a substatus. If no value is set, then it defaults to &#x60;API&#x60;.  * &#x60;ADMIN&#x60; - Indicates that the state of the substatus was added through the Marqeta Dashboard. * &#x60;API&#x60; - Indicates that you initiated the update of the substatus through the Core API. Use this value when creating a card transition with an API &#x60;POST&#x60; request. * &#x60;FRAUD&#x60; - Indicates that either Marqeta or the card network has determined that the account is fraudulent. * &#x60;SYSTEM&#x60; - Indicates that the substatus update was initiated by Marqeta. For example, Marqeta determined during application decisioning that the applicant is &#x60;MLA&#x60;. | [optional] [default to undefined]
**effective_date** | **string** | Date and time when the state of the substatus is effective, in UTC. | [optional] [default to undefined]
**reason** | **string** | Reason for applying the state to the substatus. | [optional] [default to undefined]
**state** | **string** | New state of the substatus.  * &#x60;INACTIVE&#x60; is a valid state for substatuses &#x60;HARDSHIP&#x60;, &#x60;FRAUD&#x60;, &#x60;MLA&#x60;, &#x60;SCRA&#x60;, &#x60;DECEASED&#x60;, and &#x60;POWER_OF_ATTORNEY&#x60;. * &#x60;DECEASED_CONFIRMED&#x60; is a valid state for substatus &#x60;DECEASED&#x60;. * &#x60;FRAUD_CONFIRMED&#x60; is a valid state for substatus &#x60;FRAUD&#x60;. * &#x60;BANKRUPTCY_WITHDRAWN&#x60;, &#x60;BANKRUPTCY_REAFFIRMED&#x60;, &#x60;BANKRUPTCY_REAFFIRM_RESCINDED&#x60;, &#x60;BANKRUPTCY_DISCHARGED&#x60;, &#x60;BANKRUPTCY_DISMISSED&#x60;, &#x60;BANKRUPTCY_FILED_INACTIVE&#x60;, &#x60;BANKRUPTCY_WITHDRAWN_INACTIVE&#x60;, &#x60;BANKRUPTCY_REAFFIRMED_INACTIVE&#x60;, &#x60;BANKRUPTCY_REAFFIRM_RESCINDED_INACTIVE&#x60;, &#x60;BANKRUPTCY_DISCHARGED_INACTIVE&#x60;, and &#x60;BANKRUPTCY_DISMISSED_INACTIVE&#x60; states are applicable to &#x60;BANKRUPTCY&#x60;. | [default to undefined]

## Example

```typescript
import { SubstatusUpdateReq } from './api';

const instance: SubstatusUpdateReq = {
    channel,
    effective_date,
    reason,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
