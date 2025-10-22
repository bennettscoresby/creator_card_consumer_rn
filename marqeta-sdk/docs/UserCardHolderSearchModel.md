# UserCardHolderSearchModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dda** | **string** | Performs a match on the specified deposit account number. Send a &#x60;GET&#x60; request to &#x60;/directdeposits/accounts/{user_token}&#x60; to retrieve the deposit account number for a specific cardholder. | [optional] [default to undefined]
**email** | **string** | Performs a non-case-sensitive, exact match on the cardholder\&#39;s &#x60;email&#x60; field. | [optional] [default to undefined]
**first_name** | **string** | Performs a non-case-sensitive match on the cardholder\&#39;s &#x60;first_name&#x60; field. Matching is partial on the beginning of the name. For example, a match on \&quot;Alex\&quot; returns both \&quot;Alex\&quot; and \&quot;Alexander\&quot;. | [optional] [default to undefined]
**last_name** | **string** | Performs a non-case-sensitive match on the cardholder\&#39;s &#x60;last_name&#x60; field. Matching is partial on the beginning of the name. For example, a match on \&quot;Smith\&quot; returns both \&quot;Smith\&quot; and \&quot;Smithfield\&quot;. | [optional] [default to undefined]
**phone** | **string** | Performs a match on the cardholder\&#39;s &#x60;phone&#x60; field. | [optional] [default to undefined]
**ssn** | **string** | Performs a match on the cardholder\&#39;s identification number. | [optional] [default to undefined]

## Example

```typescript
import { UserCardHolderSearchModel } from './api';

const instance: UserCardHolderSearchModel = {
    dda,
    email,
    first_name,
    last_name,
    phone,
    ssn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
