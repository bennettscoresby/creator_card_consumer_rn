# PaymentCardResponseModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_suffix** | **string** |  | [default to undefined]
**account_type** | **string** |  | [default to undefined]
**active** | **boolean** |  | [default to false]
**business_token** | **string** | Required if \&#39;user_token\&#39; is not present | [optional] [default to undefined]
**created_time** | **string** | yyyy-MM-ddTHH:mm:ssZ | [default to undefined]
**exp_date** | **string** |  | [default to undefined]
**is_default_account** | **boolean** |  | [default to false]
**last_modified_time** | **string** | yyyy-MM-ddTHH:mm:ssZ | [default to undefined]
**token** | **string** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**user_token** | **string** | Required if \&#39;business_token\&#39; is not present | [optional] [default to undefined]

## Example

```typescript
import { PaymentCardResponseModel } from './api';

const instance: PaymentCardResponseModel = {
    account_suffix,
    account_type,
    active,
    business_token,
    created_time,
    exp_date,
    is_default_account,
    last_modified_time,
    token,
    type,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
