# TokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **string** |  | [default to undefined]
**business_token** | **string** | required if \&#39;user_token\&#39; is null | [optional] [default to undefined]
**cvv_number** | **string** |  | [default to undefined]
**exp_date** | **string** |  | [default to undefined]
**is_default_account** | **boolean** |  | [optional] [default to false]
**postal_code** | **string** |  | [optional] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]
**user_token** | **string** | required if \&#39;business_token\&#39; is null | [optional] [default to undefined]
**zip** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TokenRequest } from './api';

const instance: TokenRequest = {
    account_number,
    business_token,
    cvv_number,
    exp_date,
    is_default_account,
    postal_code,
    token,
    user_token,
    zip,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
