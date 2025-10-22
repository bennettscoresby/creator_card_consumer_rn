# DirectDepositAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_immediate_credit** | **boolean** |  | [optional] [default to false]
**business_token** | **string** | Required if \&#39;user_token\&#39; is null | [optional] [default to undefined]
**customer_due_diligence** | [**Array&lt;CustomerDueDiligenceRequest&gt;**](CustomerDueDiligenceRequest.md) | Required if account type &#x3D; Checking | [optional] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**user_token** | **string** | Required if \&#39;business_token\&#39; is null | [optional] [default to undefined]

## Example

```typescript
import { DirectDepositAccountRequest } from './api';

const instance: DirectDepositAccountRequest = {
    allow_immediate_credit,
    business_token,
    customer_due_diligence,
    token,
    type,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
