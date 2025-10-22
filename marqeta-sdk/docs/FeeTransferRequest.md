# FeeTransferRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_token** | **string** | Required if \&#39;user_token\&#39; is null | [default to undefined]
**fees** | [**Array&lt;FeeModel&gt;**](FeeModel.md) |  | [default to undefined]
**tags** | **string** |  | [optional] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]
**user_token** | **string** | Required if \&#39;business_token\&#39; is null | [default to undefined]

## Example

```typescript
import { FeeTransferRequest } from './api';

const instance: FeeTransferRequest = {
    business_token,
    fees,
    tags,
    token,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
