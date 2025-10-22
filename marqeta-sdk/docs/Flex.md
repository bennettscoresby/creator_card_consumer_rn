# Flex

Contains information about a Flexible Credential transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | Indicates whether the Flexible Credential transaction object is actionable (&#x60;inquiry&#x60;) or merely informative (&#x60;advice&#x60;). | [optional] [default to undefined]
**eligible** | **string** | Indicates whether or not the transaction is eligible for Flexible Credential transactions. | [optional] [default to undefined]
**eligible_products** | **Array&lt;string&gt;** | Specifies which of the payment instrument\&#39;s credentials is eligible for this transaction:  * A value of &#x60;DEBIT&#x60; indicates the primary credential. * A value of &#x60;LOAN&#x60; indicates the secondary credential. | [optional] [default to undefined]
**secondary_credential_identifier** | **string** | Identifies the secondary credential used in the transaction, if applicable. | [optional] [default to undefined]
**selected_product** | **string** | Indicates the eligible product that was used in the transaction. | [optional] [default to undefined]

## Example

```typescript
import { Flex } from './api';

const instance: Flex = {
    action,
    eligible,
    eligible_products,
    secondary_credential_identifier,
    selected_product,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
