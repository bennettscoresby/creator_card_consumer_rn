# TriggeredRule

Provides a list of rules triggered by a fraud event, along with the information on tags and rule characteristics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert** | **boolean** | Indicates if the rule triggered an alert. | [optional] [default to undefined]
**entity_type** | **string** | The entity type where the triggered rule was defined. | [optional] [default to undefined]
**rule_name** | **string** | Name of the rule, as defined in the Real-Time Decisioning dashboard that was triggered. | [optional] [default to undefined]
**suppress_alert** | **boolean** | Indicates if the triggered rule has &#x60;suppress_alert&#x60; in the definition. | [optional] [default to undefined]
**tags** | [**Array&lt;Tag&gt;**](Tag.md) | All the tags defined in the triggered rule. | [optional] [default to undefined]

## Example

```typescript
import { TriggeredRule } from './api';

const instance: TriggeredRule = {
    alert,
    entity_type,
    rule_name,
    suppress_alert,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
