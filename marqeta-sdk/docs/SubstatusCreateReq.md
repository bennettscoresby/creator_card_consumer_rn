# SubstatusCreateReq

Contains information relevant to creating a substatus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**Array&lt;SubstatusCreateReqAttributesInner&gt;**](SubstatusCreateReqAttributesInner.md) | Additional dynamic attributes related to the substatus. If the substatus is &#x60;BANKRUPTCY&#x60;, &#x60;SCRA&#x60; or &#x60;POWER_OF_ATTORNEY&#x60;, then attributes are required. | [optional] [default to undefined]
**events** | [**Array&lt;SubstatusEvent&gt;**](SubstatusEvent.md) | List of events related to the substatus. | [default to undefined]
**resource_token** | **string** | Unique identifier of the user or account or business for which you want to create a substatus.  * Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing account tokens. * Send a &#x60;GET&#x60; request to &#x60;/users&#x60; to retrieve existing user tokens. * Send a &#x60;GET&#x60; request to &#x60;/business&#x60; to retrieve existing business tokens. | [default to undefined]
**resource_type** | **string** | Type of resource to which the substatus can be applied. | [default to undefined]
**substatus** | **string** | Type of substatus.  * &#x60;HARDSHIP&#x60;, &#x60;FRAUD&#x60;, &#x60;CEASE_AND_DESIST&#x60;, and &#x60;OPT_OUT&#x60; can only be applied to the &#x60;ACCOUNT&#x60; resource type. * &#x60;MLA&#x60;, &#x60;SCRA&#x60; and &#x60;DECEASED&#x60; can only be applied to the &#x60;USER&#x60; resource type. * &#x60;POWER_OF_ATTORNEY&#x60; and &#x60;BANKRUPTCY&#x60; can be applied to either the &#x60;USER&#x60; or the &#x60;BUSINESS&#x60; resource type. | [default to undefined]
**token** | **string** | Unique identifier of the credit substatus. | [optional] [default to undefined]

## Example

```typescript
import { SubstatusCreateReq } from './api';

const instance: SubstatusCreateReq = {
    attributes,
    events,
    resource_token,
    resource_type,
    substatus,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
