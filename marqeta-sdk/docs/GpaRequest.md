# GpaRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [default to undefined]
**business_token** | **string** | Required if \&#39;user_token\&#39; is null | [optional] [default to undefined]
**currency_code** | **string** |  | [default to undefined]
**fees** | [**Array&lt;FeeModel&gt;**](FeeModel.md) |  | [optional] [default to undefined]
**funding_source_address_token** | **string** |  | [optional] [default to undefined]
**funding_source_token** | **string** |  | [default to undefined]
**memo** | **string** |  | [optional] [default to undefined]
**tags** | **string** |  | [optional] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]
**user_token** | **string** | Required if \&#39;business_token\&#39; is null | [optional] [default to undefined]

## Example

```typescript
import { GpaRequest } from './api';

const instance: GpaRequest = {
    amount,
    business_token,
    currency_code,
    fees,
    funding_source_address_token,
    funding_source_token,
    memo,
    tags,
    token,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
