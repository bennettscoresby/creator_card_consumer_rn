# RiskcontrolTags

The RiskControl tags that were triggered by the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rule_name** | **string** | Name of the rule, as defined in the Real-Time Decisioning dashboard, that was triggered. | [optional] [default to undefined]
**tag** | **string** | Tag name defined in the rule definition in the Real-Time Decisioning dashboard. | [optional] [default to undefined]
**values** | **Array&lt;string&gt;** | Value associated with the tag. | [optional] [default to undefined]

## Example

```typescript
import { RiskcontrolTags } from './api';

const instance: RiskcontrolTags = {
    rule_name,
    tag,
    values,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
