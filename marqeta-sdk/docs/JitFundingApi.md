# JitFundingApi

Contains information about the JIT Funding load event, in which funds are loaded into an account.  This object is returned if your program uses JIT Funding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name_verification** | [**JitAccountNameVerification**](JitAccountNameVerification.md) |  | [optional] [default to undefined]
**acting_user_token** | **string** | User who conducted the transaction.  Can be a child user configured to share its parent\&#39;s account balance. | [optional] [default to undefined]
**address_verification** | [**JitAddressVerification**](JitAddressVerification.md) |  | [optional] [default to undefined]
**amount** | **number** | Requested amount of funding. | [default to undefined]
**anticipated_amount_supported** | **boolean** |  | [optional] [default to undefined]
**balances** | [**{ [key: string]: CardholderBalance; }**](CardholderBalance.md) | Contains the GPA\&#39;s balance details. | [optional] [default to undefined]
**business_token** | **string** | Holder of the business account that was funded. | [optional] [default to undefined]
**decline_reason** | **string** | Reason why the transaction was declined. | [optional] [default to undefined]
**incremental_authorization_jit_funding_tokens** | **Array&lt;string&gt;** | Array of tokens referencing the JIT Funding tokens of all previous associated incremental authorization JIT Funding requests. Useful for ascertaining the final transaction amount when the original amount was incremented. | [optional] [default to undefined]
**jit_account_name_verification** | [**JitAccountNameVerification**](JitAccountNameVerification.md) |  | [optional] [default to undefined]
**memo** | **string** | Additional information that describes the JIT Funding transaction. | [optional] [default to undefined]
**method** | **string** | JIT Funding response type. See &lt;&lt;/core-api/gateway-jit-funding-messages#_the_jit_funding_object, The jit_funding object&gt;&gt; for the purpose, funding event type, and description of each method. | [default to undefined]
**original_jit_funding_token** | **string** | Unique identifier of the first associated JIT Funding message. Useful for correlating related JIT Funding messages (that is, those associated with the same GPA order). Not included in the first of any set of related messages. | [optional] [default to undefined]
**tags** | **string** | Customer-defined tags related to the JIT Funding transaction. | [optional] [default to undefined]
**token** | **string** | Existing JIT Funding token matching the &#x60;funding.gateway_log.transaction_id&#x60; field of the associated GPA order.  *NOTE:* The &#x60;transaction_id&#x60; field updates if a subsequent JIT Funding message associated with that GPA order is sent. If multiple JIT Funding messages are associated with the same GPA order, the &#x60;transaction_id&#x60; field matches the token of the most recent message. | [default to undefined]
**user_token** | **string** | Holder of the user account that was funded. | [default to undefined]

## Example

```typescript
import { JitFundingApi } from './api';

const instance: JitFundingApi = {
    account_name_verification,
    acting_user_token,
    address_verification,
    amount,
    anticipated_amount_supported,
    balances,
    business_token,
    decline_reason,
    incremental_authorization_jit_funding_tokens,
    jit_account_name_verification,
    memo,
    method,
    original_jit_funding_token,
    tags,
    token,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
