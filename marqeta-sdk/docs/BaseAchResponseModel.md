# BaseAchResponseModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_suffix** | **string** |  | [default to undefined]
**account_type** | **string** |  | [default to undefined]
**active** | **boolean** |  | [default to false]
**bank_name** | **string** |  | [optional] [default to undefined]
**created_time** | **string** | yyyy-MM-ddTHH:mm:ssZ | [default to undefined]
**date_sent_for_verification** | **string** |  | [optional] [default to undefined]
**date_verified** | **string** |  | [optional] [default to undefined]
**is_default_account** | **boolean** |  | [optional] [default to false]
**last_modified_time** | **string** | yyyy-MM-ddTHH:mm:ssZ | [default to undefined]
**name_on_account** | **string** |  | [default to undefined]
**partner** | **string** |  | [optional] [default to undefined]
**partner_account_link_reference_token** | **string** |  | [optional] [default to undefined]
**token** | **string** |  | [default to undefined]
**verification_notes** | **string** |  | [optional] [default to undefined]
**verification_override** | **boolean** |  | [optional] [default to false]
**verification_status** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { BaseAchResponseModel } from './api';

const instance: BaseAchResponseModel = {
    account_suffix,
    account_type,
    active,
    bank_name,
    created_time,
    date_sent_for_verification,
    date_verified,
    is_default_account,
    last_modified_time,
    name_on_account,
    partner,
    partner_account_link_reference_token,
    token,
    verification_notes,
    verification_override,
    verification_status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
