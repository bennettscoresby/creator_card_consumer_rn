# AccountBalance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balances** | [**{ [key: string]: CurrencyBalance; }**](CurrencyBalance.md) |  | [optional] [default to undefined]
**default_currency_code** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**impacted_amount** | **number** |  | [optional] [default to undefined]
**last_updated_time** | **string** |  | [optional] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AccountBalance } from './api';

const instance: AccountBalance = {
    balances,
    default_currency_code,
    description,
    impacted_amount,
    last_updated_time,
    token,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
