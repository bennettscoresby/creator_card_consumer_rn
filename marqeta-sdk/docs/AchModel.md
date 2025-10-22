# AchModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **string** |  | [default to undefined]
**account_type** | **string** |  | [default to undefined]
**bank_name** | **string** |  | [optional] [default to undefined]
**business_token** | **string** | Required if \&#39;user_token\&#39; is null | [optional] [default to undefined]
**is_default_account** | **boolean** |  | [optional] [default to false]
**name_on_account** | **string** |  | [default to undefined]
**routing_number** | **string** |  | [readonly] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]
**user_token** | **string** | Required if \&#39;business_token\&#39; is null | [optional] [default to undefined]
**verification_notes** | **string** |  | [optional] [default to undefined]
**verification_override** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { AchModel } from './api';

const instance: AchModel = {
    account_number,
    account_type,
    bank_name,
    business_token,
    is_default_account,
    name_on_account,
    routing_number,
    token,
    user_token,
    verification_notes,
    verification_override,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
