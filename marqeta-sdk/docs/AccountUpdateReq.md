# AccountUpdateReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**AccountConfigUpdateReq**](AccountConfigUpdateReq.md) |  | [optional] [default to undefined]
**credit_limit** | [**AccountUpdateReqCreditLimit**](AccountUpdateReqCreditLimit.md) |  | [optional] [default to undefined]
**latest_statement_cycle_type** | [**CycleType**](CycleType.md) |  | [optional] [default to undefined]
**usages** | [**Array&lt;AccountUsageUpdateReq&gt;**](AccountUsageUpdateReq.md) | Contains one or more &#x60;usages&#x60; objects that contain information on how a credit account is used and what types of balances are permitted on the account.  You can pass only one &#x60;usages&#x60; object per &#x60;usages.type&#x60;. | [optional] [default to undefined]
**user_token** | **string** | User token tied to the credit account. You can only update the value of the user token for business accounts. | [optional] [default to undefined]

## Example

```typescript
import { AccountUpdateReq } from './api';

const instance: AccountUpdateReq = {
    config,
    credit_limit,
    latest_statement_cycle_type,
    usages,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
