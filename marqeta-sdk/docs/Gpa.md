# Gpa

Defines the type of order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reload_amount** | **number** | Available balance on the card after the reload has completed.  This value must be greater than or equal to the value of &#x60;trigger_amount&#x60;. Note that this is not the same as the amount added to the card, which will vary from reload to reload. | [default to undefined]
**trigger_amount** | **number** | Threshold that determines when the reload happens.  The reload is triggered when the card balance falls below this amount. | [default to undefined]

## Example

```typescript
import { Gpa } from './api';

const instance: Gpa = {
    reload_amount,
    trigger_amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
