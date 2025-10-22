# MoneyInTransaction

Defines the original credit transaction (OCT) types that are subject to velocity control. Your request can contain either a `money_in_transaction` object or the `include_credits` field, not both.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_credits_types** | **Array&lt;string&gt;** | Specifies the types of credits to include in the original credit transaction (OCT). | [optional] [default to undefined]
**include_network_load_types** | **Array&lt;string&gt;** | Indicates whether or not cash and check network load transactions will be subject to velocity control. | [optional] [default to undefined]

## Example

```typescript
import { MoneyInTransaction } from './api';

const instance: MoneyInTransaction = {
    include_credits_types,
    include_network_load_types,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
