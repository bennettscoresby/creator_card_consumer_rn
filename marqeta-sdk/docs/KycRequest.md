# KycRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_token** | **string** | Required if \&#39;user_token\&#39; is null | [optional] [default to undefined]
**manual_override** | **boolean** |  | [optional] [default to false]
**notes** | **string** |  | [optional] [default to undefined]
**reference_id** | **string** |  | [optional] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]
**user_token** | **string** | Required if \&#39;business_token\&#39; is null | [optional] [default to undefined]

## Example

```typescript
import { KycRequest } from './api';

const instance: KycRequest = {
    business_token,
    manual_override,
    notes,
    reference_id,
    token,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
