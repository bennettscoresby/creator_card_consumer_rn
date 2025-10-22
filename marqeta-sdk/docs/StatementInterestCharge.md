# StatementInterestCharge

Contains information on statement interest charges.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of interest calculated for the billing period. | [optional] [default to undefined]
**apr_type** | **string** | Type of APR. | [optional] [default to undefined]
**apr_value** | **number** | Annual percentage rate. | [optional] [default to undefined]
**balance_subject_to_interest_rate** | **number** | Average daily balance used to calculate interest. | [optional] [default to undefined]
**balance_type** | **string** | Type of balance.  * &#x60;PURCHASE&#x60; - The balance on purchases. | [optional] [default to undefined]

## Example

```typescript
import { StatementInterestCharge } from './api';

const instance: StatementInterestCharge = {
    amount,
    apr_type,
    apr_value,
    balance_subject_to_interest_rate,
    balance_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
