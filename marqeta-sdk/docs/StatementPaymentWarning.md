# StatementPaymentWarning

Contains information on statement payment warnings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disclosure** | **string** | Statement disclosure in the case of negative or no amortization, or no lifetime repayment for the minimum payment warning type.  * &#x60;NEGATIVE_OR_NO_AMORTIZATION&#x60; - Occurs when the interest amount is higher than the minimum payment; results in the outstanding balance remaining in perpetuity. * &#x60;NO_LIFETIME_REPAYMENT&#x60; - Occurs when the interest amount is just below the minimum payment; results in the outstanding balance taking longer than a lifetime to pay off. | [optional] [default to undefined]
**interest_paid** | **number** | For the minimum payment warning type, this value represents the total amount of interest to pay off the statement balance if only making the minimum payment each month.  For the 3 Year warning type, this value represents the total amount of interest if paying off the statement balance in three years. | [optional] [default to undefined]
**monthly_payment** | **number** | For the minimum payment warning type, this value is 0.  For the 3 Year warning type, this value represents the fixed monthly payment amount required to pay off the statement balance in three years. | [optional] [default to undefined]
**pay_off_period** | **number** | For the minimum payment warning type, this value represents the number of periods required to pay off the statement balance.  For the 3 Year warning type, this value is 36 (months). | [optional] [default to undefined]
**period_type** | **string** | Time unit of the pay off period. | [optional] [default to undefined]
**total_paid** | **number** | For the minimum payment warning type, this value represents the total amount of principal and interest to pay off the statement balance if only making the minimum payment each month.  For the 3 Year warning type, this value represents the total amount of principal and interest if paying off the statement balance in three years. | [optional] [default to undefined]
**type** | **string** | Type of statement warning.  * &#x60;MIN_PAYMENT&#x60; - Displays the total estimated payment amount and how long it would take to pay off the statement balance if only making minimum payments. * &#x60;3_YEAR&#x60; - Displays the monthly payment amount and total estimated payment amount if paying off the statement balance in three years. | [optional] [default to undefined]

## Example

```typescript
import { StatementPaymentWarning } from './api';

const instance: StatementPaymentWarning = {
    disclosure,
    interest_paid,
    monthly_payment,
    pay_off_period,
    period_type,
    total_paid,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
