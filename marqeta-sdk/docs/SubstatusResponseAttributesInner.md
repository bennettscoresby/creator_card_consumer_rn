# SubstatusResponseAttributesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The name of the attribute.  Marqeta provides several preconfigured attributes, as described in the following list.  * *chapter:* If the substatus is &#x60;BANKRUPTCY&#x60;, then this value defines the chapter.  * *military_start_date:* If the substatus is &#x60;SCRA&#x60;, then this value defines the military start date.  * *end_date:* If the substatus is &#x60;POWER_OF_ATTORNEY&#x60;, then the end date attribute is present. This specifies the date when the power of attorney document is no longer valid.  * *poa_details:* If the substatus is &#x60;POWER_OF_ATTORNEY&#x60;, then the Power of Attorney details attribute is applicable. This attribute specifies the range of actions that the agent with Power of Attorney is able to perform on the account. By default the range is &#x60;UNRESTRICTED&#x60;.  * *agent_name:* If the substatus is &#x60;POWER_OF_ATTORNEY&#x60;, then the agent name is present. This attribute specifies the name of the agent with Power of Attorney for the user.  * *agent_address:* If the substatus is &#x60;POWER_OF_ATTORNEY&#x60;, then the agent address attribute is present. This attribute specifies the address of the agent with Power of Attorney for the user.  * *agent_id_type:* If the substatus is &#x60;POWER_OF_ATTORNEY&#x60;, then the agent identification type attribute is present. This specifies the type of the identification method used to identify the agent with Power of Attorney for the user.  * *agent_id_value:* If the substatus is &#x60;POWER_OF_ATTORNEY&#x60;, then the agent identification value attribute is present. This attribute specifies the value of the identification method used to identify the agent with Power of Attorney for the user.  * *agent_id_expiration_date:* If the substatus is &#x60;POWER_OF_ATTORNEY&#x60;, then the attribute for the Power of Attorney identification expiration date attribute is present. This attribute specifies the expiration date of the identification method used to identify the agent with Power of Attorney for the user. | [optional] [default to undefined]
**value** | **string** | The value of the attribute. | [optional] [default to undefined]

## Example

```typescript
import { SubstatusResponseAttributesInner } from './api';

const instance: SubstatusResponseAttributesInner = {
    key,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
