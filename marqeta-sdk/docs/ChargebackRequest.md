# ChargebackRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [default to undefined]
**channel** | **string** |  | [default to undefined]
**credit_user** | **boolean** |  | [optional] [default to true]
**currency_code** | **string** |  | [optional] [default to undefined]
**memo** | **string** |  | [optional] [default to undefined]
**pre_initiated** | **boolean** |  | [optional] [default to undefined]
**reason_code** | **string** | Either \&#39;reason_code\&#39; or \&#39;reason_description\&#39; is required | [optional] [default to undefined]
**reason_description** | **string** | Either \&#39;reason_description\&#39; or \&#39;reason_code\&#39; is required | [optional] [default to undefined]
**regulation_type** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]
**transaction_token** | **string** |  | [default to undefined]

## Example

```typescript
import { ChargebackRequest } from './api';

const instance: ChargebackRequest = {
    amount,
    channel,
    credit_user,
    currency_code,
    memo,
    pre_initiated,
    reason_code,
    reason_description,
    regulation_type,
    status,
    token,
    transaction_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
