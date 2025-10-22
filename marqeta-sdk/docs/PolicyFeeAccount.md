# PolicyFeeAccount

Contains information on the fees in an account\'s fee policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annual_fee** | [**PolicyFeePeriodic**](PolicyFeePeriodic.md) |  | [optional] [default to undefined]
**foreign_transaction_fee** | [**PolicyFeeForeignTransaction**](PolicyFeeForeignTransaction.md) |  | [optional] [default to undefined]
**late_payment** | [**PolicyFeePayment**](PolicyFeePayment.md) |  | [optional] [default to undefined]
**monthly_fee** | [**PolicyFeePeriodic**](PolicyFeePeriodic.md) |  | [optional] [default to undefined]
**returned_payment** | [**PolicyFeePayment**](PolicyFeePayment.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PolicyFeeAccount } from './api';

const instance: PolicyFeeAccount = {
    annual_fee,
    foreign_transaction_fee,
    late_payment,
    monthly_fee,
    returned_payment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
