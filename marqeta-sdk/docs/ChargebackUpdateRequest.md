# ChargebackUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason_code** | **string** | Either \&#39;reason_code\&#39; or \&#39;reason_description\&#39; is required | [optional] [default to undefined]
**reason_description** | **string** | Either \&#39;reason_description\&#39; or \&#39;reason_code\&#39; is required | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ChargebackUpdateRequest } from './api';

const instance: ChargebackUpdateRequest = {
    reason_code,
    reason_description,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
