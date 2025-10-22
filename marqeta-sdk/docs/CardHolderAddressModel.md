# CardHolderAddressModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** |  | [optional] [default to true]
**address_1** | **string** |  | [default to undefined]
**address_2** | **string** |  | [optional] [default to undefined]
**business_token** | **string** | Required if \&#39;user_token\&#39; is not specified | [optional] [default to undefined]
**city** | **string** |  | [default to undefined]
**country** | **string** |  | [default to undefined]
**first_name** | **string** |  | [default to undefined]
**is_default_address** | **boolean** |  | [optional] [default to false]
**last_name** | **string** |  | [default to undefined]
**phone** | **string** |  | [optional] [default to undefined]
**postal_code** | **string** | Required if \&#39;zip\&#39; is not specified | [optional] [default to undefined]
**state** | **string** |  | [default to undefined]
**token** | **string** |  | [optional] [default to undefined]
**user_token** | **string** | Required if \&#39;business_token\&#39; is not specified | [optional] [default to undefined]
**zip** | **string** | Required if \&#39;postal_code\&#39; is not specified | [optional] [default to undefined]

## Example

```typescript
import { CardHolderAddressModel } from './api';

const instance: CardHolderAddressModel = {
    active,
    address_1,
    address_2,
    business_token,
    city,
    country,
    first_name,
    is_default_address,
    last_name,
    phone,
    postal_code,
    state,
    token,
    user_token,
    zip,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
